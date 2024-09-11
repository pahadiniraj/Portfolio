import { Inter } from "next/font/google";
import "../globals.css";
import PrivateRoute from "@/Services/RequireTokenAuth";
import SidebarDashboard from "@/Components/Dashboard/DashboardSidebar/DashboardSidebar";
import DashboardHead from "@/Components/Dashboard/DashboardHead/DashboardHead";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black w-full h-screen flex ">
      <div className="w-1/4">
        <SidebarDashboard />
      </div>
      <div className="w-3/4">
        <DashboardHead />
        {children}
      </div>
    </div>
  );
}
