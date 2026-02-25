import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Download, LogOut, FileSpreadsheet } from "lucide-react";

interface Application {
  id: string;
  full_name: string;
  company_name: string | null;
  phone: string | null;
  email: string | null;
  business_address: string | null;
  country: string | null;
  state: string | null;
  city: string | null;
  years_in_distribution: string | null;
  currently_distributes_beverages: string | null;
  current_brands: string | null;
  monthly_sales_capacity: string | null;
  has_warehouse: string | null;
  warehouse_size: string | null;
  areas_covered: string | null;
  delivery_vehicles: string | null;
  has_sales_reps: string | null;
  sales_reps_count: string | null;
  can_meet_minimum_order: string | null;
  distributor_category: string | null;
  products: string[] | null;
  created_at: string;
}

const csvColumns = [
  "id", "created_at", "full_name", "company_name", "phone", "email",
  "business_address", "country", "state", "city",
  "years_in_distribution", "currently_distributes_beverages", "current_brands",
  "monthly_sales_capacity", "has_warehouse", "warehouse_size",
  "areas_covered", "delivery_vehicles", "has_sales_reps", "sales_reps_count",
  "can_meet_minimum_order", "distributor_category", "products"
];

const escapeCsv = (val: unknown): string => {
  if (val === null || val === undefined) return "";
  const str = Array.isArray(val) ? val.join("; ") : String(val);
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
};

const AdminApplications = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuthAndLoad = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { navigate("/admin"); return; }

      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin");

      if (!roles || roles.length === 0) {
        await supabase.auth.signOut();
        navigate("/admin");
        return;
      }

      const { data, error } = await supabase
        .from("distributor_applications")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        toast({ title: "Error", description: error.message, variant: "destructive" });
      } else {
        setApplications((data as Application[]) || []);
      }
      setLoading(false);
    };

    checkAuthAndLoad();
  }, [navigate, toast]);

  const downloadCsv = () => {
    const header = csvColumns.join(",");
    const rows = applications.map(app =>
      csvColumns.map(col => escapeCsv((app as unknown as Record<string, unknown>)[col])).join(",")
    );
    const csv = [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `distributor-applications-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading applications...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-ojaja-light to-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-heading font-bold text-2xl text-ojaja-blue">Distributor Applications</h1>
            <p className="text-muted-foreground text-sm">{applications.length} total applications</p>
          </div>
          <div className="flex gap-3">
            <Button onClick={downloadCsv} className="bg-gradient-to-r from-ojaja-orange to-ojaja-pink text-white">
              <Download className="w-4 h-4 mr-2" /> Download CSV
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </Button>
          </div>
        </div>

        {applications.length === 0 ? (
          <div className="bg-white rounded-2xl shadow p-12 text-center">
            <FileSpreadsheet className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No applications yet.</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-3 font-medium">Date</th>
                  <th className="text-left p-3 font-medium">Name</th>
                  <th className="text-left p-3 font-medium">Company</th>
                  <th className="text-left p-3 font-medium">Email</th>
                  <th className="text-left p-3 font-medium">Phone</th>
                  <th className="text-left p-3 font-medium">Country</th>
                  <th className="text-left p-3 font-medium">Category</th>
                  <th className="text-left p-3 font-medium">Products</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id} className="border-b hover:bg-muted/30 transition-colors">
                    <td className="p-3 whitespace-nowrap">{new Date(app.created_at).toLocaleDateString()}</td>
                    <td className="p-3 font-medium">{app.full_name}</td>
                    <td className="p-3">{app.company_name || "—"}</td>
                    <td className="p-3">{app.email || "—"}</td>
                    <td className="p-3">{app.phone || "—"}</td>
                    <td className="p-3">{app.country || "—"}</td>
                    <td className="p-3">{app.distributor_category || "—"}</td>
                    <td className="p-3">{app.products?.join(", ") || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminApplications;
