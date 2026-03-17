import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { format } from "date-fns";

type InvoiceStatus = "draft" | "sent" | "paid" | "overdue" | "cancelled";

interface Invoice {
  id: string;
  invoice_number: string;
  amount: number;
  status: InvoiceStatus;
  due_date: string | null;
  paid_date: string | null;
  description: string | null;
  customer_id: string | null;
  project_id: string | null;
  created_at: string;
}

interface Profile {
  id: string;
  full_name: string | null;
  email: string | null;
}

interface Project {
  id: string;
  title: string;
}

interface InvoicesTabProps {
  invoices: Invoice[];
  customers: Profile[];
  projects: Project[];
  onRefresh: () => void;
}

const STATUS_STYLES: Record<InvoiceStatus, string> = {
  draft: "bg-gray-100 text-gray-700 border-gray-200",
  sent: "bg-blue-100 text-blue-700 border-blue-200",
  paid: "bg-green-100 text-green-700 border-green-200",
  overdue: "bg-red-100 text-red-700 border-red-200",
  cancelled: "bg-gray-100 text-gray-500 border-gray-200",
};

const FILTER_OPTIONS: { value: string; label: string }[] = [
  { value: "all", label: "All Invoices" },
  { value: "draft", label: "Draft" },
  { value: "sent", label: "Sent" },
  { value: "paid", label: "Paid" },
  { value: "overdue", label: "Overdue" },
  { value: "cancelled", label: "Cancelled" },
];

const InvoicesTab = ({ invoices, customers, projects, onRefresh }: InvoicesTabProps) => {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? invoices : invoices.filter(i => i.status === filter);

  const getCustomerName = (id: string | null) => {
    if (!id) return "—";
    const c = customers.find(c => c.id === id);
    return c?.full_name || c?.email || "Unknown";
  };

  const getProjectTitle = (id: string | null) => {
    if (!id) return "—";
    return projects.find(p => p.id === id)?.title || "Unknown";
  };

  const updateStatus = async (invoiceId: string, newStatus: InvoiceStatus) => {
    const updateData: Record<string, unknown> = { status: newStatus };
    if (newStatus === "paid") updateData.paid_date = new Date().toISOString().split("T")[0];
    const { error } = await supabase.from("invoices").update(updateData).eq("id", invoiceId);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success(`Invoice marked as ${newStatus}`);
      onRefresh();
    }
  };

  const totalAmount = filtered.reduce((s, i) => s + i.amount, 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground">Invoices</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {filtered.length} invoice{filtered.length !== 1 ? "s" : ""} · £{totalAmount.toLocaleString("en-GB", { minimumFractionDigits: 2 })} total
          </p>
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[160px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {FILTER_OPTIONS.map(o => (
              <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice #</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Project</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                  No invoices found.
                </TableCell>
              </TableRow>
            ) : (
              filtered.map(inv => (
                <TableRow key={inv.id}>
                  <TableCell className="font-medium font-mono text-sm">{inv.invoice_number}</TableCell>
                  <TableCell className="text-sm">{getCustomerName(inv.customer_id)}</TableCell>
                  <TableCell className="text-sm max-w-[180px] truncate">{getProjectTitle(inv.project_id)}</TableCell>
                  <TableCell className="text-right font-semibold text-sm">
                    £{inv.amount.toLocaleString("en-GB", { minimumFractionDigits: 2 })}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {inv.due_date ? format(new Date(inv.due_date), "dd MMM yyyy") : "—"}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`text-xs ${STATUS_STYLES[inv.status]}`}>
                      {inv.status.charAt(0).toUpperCase() + inv.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Select value={inv.status} onValueChange={(v) => updateStatus(inv.id, v as InvoiceStatus)}>
                      <SelectTrigger className="h-7 text-xs w-[110px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {FILTER_OPTIONS.filter(o => o.value !== "all").map(o => (
                          <SelectItem key={o.value} value={o.value} className="text-xs">{o.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default InvoicesTab;
