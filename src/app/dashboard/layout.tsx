import { Inter } from "next/font/google";
import "../globals.css";
import SidebarDashboard from "@/Components/Dashboard/DashboardSidebar/DashboardSidebar";
import DashboardHead from "@/Components/Dashboard/DashboardHead/DashboardHead";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Dashboard | Niraj Pahadi</title>
        <meta
          name="description"
          content="Admin Dashboard for managing site content and settings"
        />
      </head>
      <body className={`${inter.className} bg-black`}>
        <div className="w-full h-screen flex">
          <aside className="md:w-1/4 hidden md:block">
            <SidebarDashboard />
          </aside>
          <main className="md:w-3/4 w-full md:h-screen bg-gradient-to-r from-indigo-800 to-indigo-950 overflow-y-auto z-40">
            <div className="h-full">
              <header className="border-b border-gray-500">
                <DashboardHead />
              </header>
              <section>{children}</section>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
