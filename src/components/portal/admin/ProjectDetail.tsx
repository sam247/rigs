import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { format } from "date-fns";
import { MapPin, Calendar, PoundSterling, FileText, MessageSquare, Save } from "lucide-react";

type ProjectStatus = "quote_sent" | "booked" | "in_progress" | "on_hold" | "complete" | "awaiting_payment";

const STATUS_LABELS: Record<ProjectStatus, string> = {
  quote_sent: "Quote Sent",
  booked: "Booked",
  in_progress: "In Progress",
  on_hold: "On Hold",
  complete: "Complete",
  awaiting_payment: "Awaiting Payment",
};

interface Project {
  id: string;
  title: string;
  description: string | null;
  status: ProjectStatus;
  customer_id: string | null;
  address: string | null;
  quote_amount: number | null;
  start_date: string | null;
  end_date: string | null;
  notes: string | null;
  created_at: string;
}

interface Profile {
  id: string;
  full_name: string | null;
  email: string | null;
}

interface ProjectDetailProps {
  project: Project | null;
  customers: Profile[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRefresh: () => void;
}

interface Message {
  id: string;
  content: string;
  sender_id: string | null;
  created_at: string;
  is_read: boolean;
}

interface Invoice {
  id: string;
  invoice_number: string;
  amount: number;
  status: string;
  due_date: string | null;
}

const ProjectDetail = ({ project, customers, open, onOpenChange, onRefresh }: ProjectDetailProps) => {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ description: "", address: "", notes: "", quote_amount: "", start_date: "", end_date: "", status: "" as ProjectStatus });
  const [messages, setMessages] = useState<Message[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    if (project) {
      setForm({
        description: project.description || "",
        address: project.address || "",
        notes: project.notes || "",
        quote_amount: project.quote_amount?.toString() || "",
        start_date: project.start_date || "",
        end_date: project.end_date || "",
        status: project.status,
      });
      // Fetch related data
      supabase.from("messages").select("*").eq("project_id", project.id).order("created_at", { ascending: true })
        .then(({ data }) => setMessages(data || []));
      supabase.from("invoices").select("id, invoice_number, amount, status, due_date").eq("project_id", project.id)
        .then(({ data }) => setInvoices(data || []));
    }
  }, [project]);

  if (!project) return null;

  const customerName = (() => {
    if (!project.customer_id) return "Unassigned";
    const c = customers.find(c => c.id === project.customer_id);
    return c?.full_name || c?.email || "Unknown";
  })();

  const handleSave = async () => {
    const { error } = await supabase.from("projects").update({
      description: form.description || null,
      address: form.address || null,
      notes: form.notes || null,
      quote_amount: form.quote_amount ? parseFloat(form.quote_amount) : null,
      start_date: form.start_date || null,
      end_date: form.end_date || null,
      status: form.status,
    }).eq("id", project.id);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Project updated");
      setEditing(false);
      onRefresh();
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-[540px] overflow-y-auto">
        <SheetHeader className="pb-4">
          <SheetTitle className="font-heading text-xl">{project.title}</SheetTitle>
          <p className="text-sm text-muted-foreground">{customerName}</p>
        </SheetHeader>

        <div className="space-y-6">
          {/* Status & Quick Info */}
          <div className="flex flex-wrap gap-3">
            {editing ? (
              <Select value={form.status} onValueChange={v => setForm(f => ({ ...f, status: v as ProjectStatus }))}>
                <SelectTrigger className="w-[160px] h-8 text-xs"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {Object.entries(STATUS_LABELS).map(([k, v]) => (
                    <SelectItem key={k} value={k} className="text-xs">{v}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <Badge variant="outline" className="text-xs">{STATUS_LABELS[project.status]}</Badge>
            )}
            {project.address && (
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" /> {project.address}
              </span>
            )}
            {project.quote_amount && (
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <PoundSterling className="h-3 w-3" /> £{project.quote_amount.toLocaleString("en-GB")}
              </span>
            )}
          </div>

          {/* Editable Fields */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-heading font-semibold">Details</h3>
              {!editing ? (
                <Button variant="ghost" size="sm" onClick={() => setEditing(true)} className="text-xs h-7">Edit</Button>
              ) : (
                <Button size="sm" onClick={handleSave} className="text-xs h-7"><Save className="h-3 w-3 mr-1" /> Save</Button>
              )}
            </div>
            {editing ? (
              <div className="space-y-3">
                <div><Label className="text-xs">Description</Label><Textarea className="mt-1 text-sm" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} /></div>
                <div><Label className="text-xs">Address</Label><Input className="mt-1 text-sm" value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} /></div>
                <div className="grid grid-cols-2 gap-3">
                  <div><Label className="text-xs">Quote (£)</Label><Input type="number" className="mt-1 text-sm" value={form.quote_amount} onChange={e => setForm(f => ({ ...f, quote_amount: e.target.value }))} /></div>
                  <div><Label className="text-xs">Start Date</Label><Input type="date" className="mt-1 text-sm" value={form.start_date} onChange={e => setForm(f => ({ ...f, start_date: e.target.value }))} /></div>
                </div>
                <div><Label className="text-xs">Notes</Label><Textarea className="mt-1 text-sm" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} /></div>
              </div>
            ) : (
              <div className="space-y-2 text-sm text-muted-foreground">
                {project.description && <p>{project.description}</p>}
                {project.start_date && (
                  <p className="flex items-center gap-1"><Calendar className="h-3 w-3" /> Started {format(new Date(project.start_date), "dd MMM yyyy")}</p>
                )}
                {project.notes && <p className="italic border-l-2 border-muted pl-3 mt-2">{project.notes}</p>}
                {!project.description && !project.notes && <p className="italic">No details added yet.</p>}
              </div>
            )}
          </div>

          <Separator />

          {/* Invoices */}
          <div>
            <h3 className="text-sm font-heading font-semibold flex items-center gap-1 mb-3">
              <FileText className="h-4 w-4" /> Invoices ({invoices.length})
            </h3>
            {invoices.length === 0 ? (
              <p className="text-xs text-muted-foreground italic">No invoices for this project.</p>
            ) : (
              <div className="space-y-2">
                {invoices.map(inv => (
                  <div key={inv.id} className="flex items-center justify-between p-2 rounded-md bg-muted/50 text-sm">
                    <div>
                      <span className="font-mono text-xs">{inv.invoice_number}</span>
                      <span className="ml-2 font-semibold">£{inv.amount.toLocaleString("en-GB", { minimumFractionDigits: 2 })}</span>
                    </div>
                    <Badge variant="outline" className="text-xs capitalize">{inv.status}</Badge>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Separator />

          {/* Messages */}
          <div>
            <h3 className="text-sm font-heading font-semibold flex items-center gap-1 mb-3">
              <MessageSquare className="h-4 w-4" /> Messages ({messages.length})
            </h3>
            {messages.length === 0 ? (
              <p className="text-xs text-muted-foreground italic">No messages yet.</p>
            ) : (
              <div className="space-y-2 max-h-[300px] overflow-y-auto">
                {messages.map(msg => {
                  const isAdmin = msg.sender_id !== project.customer_id;
                  return (
                    <div key={msg.id} className={`p-2 rounded-lg text-xs ${isAdmin ? "bg-primary/10 ml-4" : "bg-muted mr-4"}`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold">{isAdmin ? "Greenhills" : customerName}</span>
                        <span className="text-muted-foreground">{format(new Date(msg.created_at), "dd MMM HH:mm")}</span>
                      </div>
                      <p>{msg.content}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProjectDetail;
