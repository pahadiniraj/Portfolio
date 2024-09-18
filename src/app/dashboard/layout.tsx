import { Inter } from "next/font/google";
import "../globals.css";
import SidebarDashboard from "@/Components/Dashboard/DashboardSidebar/DashboardSidebar";
import DashboardHead from "@/Components/Dashboard/DashboardHead/DashboardHead";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full bg-black h-screen flex ">
      <div className="w-1/4 ">
        <SidebarDashboard />
      </div>
      <div className="w-3/4 h-screen bg-gradient-to-r from-indigo-800 to-indigo-950 ">
        <div className="h-full overflow-y-auto ">
          <div className="border-b border-gray-500">
            <DashboardHead />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
