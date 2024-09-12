import { Inter } from "next/font/google";
import "../globals.css";
import SidebarDashboard from "@/Components/Dashboard/DashboardSidebar/DashboardSidebar";
import DashboardHead from "@/Components/Dashboard/DashboardHead/DashboardHead";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full bg-black h-screen flex ">
      <div className="w-1/4">
        <SidebarDashboard />
      </div>
      <div className="w-3/4">
        <div className="bg-gradient-to-r from-indigo-800">
          <DashboardHead />
        </div>
        <div className="bg-gradient-to-r from-indigo-800 h-[462px] ">
          {children}
        </div>
      </div>
    </div>
  );
}
