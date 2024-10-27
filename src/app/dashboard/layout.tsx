import { Inter } from "next/font/google";
import "../globals.css";
import SidebarDashboard from "@/Components/Dashboard/DashboardSidebar/DashboardSidebar";
import DashboardHead from "@/Components/Dashboard/DashboardHead/DashboardHead";
import AuthRedirect from "@/Components/AuthRedirect/AuthRedirect";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full  bg-black h-screen flex ">
      <AuthRedirect />
      <div className="md:w-1/4 hidden md:block ">
        <SidebarDashboard />
      </div>
      <div className="md:w-3/4 w-full md:h-screen bg-gradient-to-r from-indigo-800 to-indigo-950 overflow-y-auto z-40">
        <div className="h-full  ">
          <div className="border-b border-gray-500">
            <DashboardHead />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
