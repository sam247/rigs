import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
import AdminDashboard from "@/components/portal/AdminDashboard";
import CustomerDashboard from "@/components/portal/CustomerDashboard";

const Portal = () => {
  const { user, role, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!user) return <Navigate to="/login" replace />;

  return role === "admin" ? <AdminDashboard /> : <CustomerDashboard />;
};

export default Portal;
