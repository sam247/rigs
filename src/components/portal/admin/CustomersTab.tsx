import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, FolderOpen } from "lucide-react";

interface Profile {
  id: string;
  full_name: string | null;
  email: string | null;
  phone: string | null;
  address: string | null;
  company_name: string | null;
  avatar_url: string | null;
}

interface Project {
  id: string;
  customer_id: string | null;
  status: string;
  quote_amount: number | null;
}

interface Invoice {
  customer_id: string | null;
  amount: number;
  status: string;
}

interface CustomersTabProps {
  customers: Profile[];
  projects: Project[];
  invoices: Invoice[];
}

const getInitials = (name: string | null, email: string | null) => {
  if (name) return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
  if (email) return email[0].toUpperCase();
  return "?";
};

const CustomersTab = ({ customers, projects, invoices }: CustomersTabProps) => {
  const getCustomerStats = (customerId: string) => {
    const customerProjects = projects.filter(p => p.customer_id === customerId);
    const customerInvoices = invoices.filter(i => i.customer_id === customerId);
    const totalSpend = customerInvoices.filter(i => i.status === "paid").reduce((s, i) => s + i.amount, 0);
    const activeCount = customerProjects.filter(p => ["in_progress", "booked"].includes(p.status)).length;
    const completeCount = customerProjects.filter(p => p.status === "complete").length;
    return { totalProjects: customerProjects.length, activeCount, completeCount, totalSpend };
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-heading font-bold text-foreground">Customers</h1>
        <p className="text-sm text-muted-foreground mt-1">{customers.length} registered customer{customers.length !== 1 ? "s" : ""}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {customers.map(c => {
          const stats = getCustomerStats(c.id);
          return (
            <Card key={c.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                    {c.avatar_url && <AvatarImage src={c.avatar_url} alt={c.full_name || ""} />}
                    <AvatarFallback className="text-sm bg-primary/10 text-primary font-semibold">
                      {getInitials(c.full_name, c.email)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base font-heading">{c.full_name || "No name"}</CardTitle>
                    {c.company_name && <p className="text-xs text-muted-foreground mt-0.5">{c.company_name}</p>}
                  </div>
                  <Badge variant="outline" className="text-xs shrink-0">
                    <FolderOpen className="h-3 w-3 mr-1" /> {stats.totalProjects}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  {c.email && (
                    <p className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Mail className="h-3 w-3 shrink-0" /> {c.email}
                    </p>
                  )}
                  {c.phone && (
                    <p className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Phone className="h-3 w-3 shrink-0" /> {c.phone}
                    </p>
                  )}
                  {c.address && (
                    <p className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3 shrink-0" /> {c.address}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border">
                  <div className="text-center">
                    <p className="text-lg font-bold font-heading text-foreground">{stats.activeCount}</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Active</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold font-heading text-foreground">{stats.completeCount}</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Complete</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold font-heading text-primary">
                      £{stats.totalSpend >= 1000 ? `${(stats.totalSpend / 1000).toFixed(1)}k` : stats.totalSpend.toFixed(0)}
                    </p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Paid</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
        {customers.length === 0 && <p className="text-muted-foreground col-span-3">No customers yet.</p>}
      </div>
    </div>
  );
};

export default CustomersTab;
