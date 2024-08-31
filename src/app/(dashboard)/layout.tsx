import { Inter } from "next/font/google";
import "../globals.css";
import PrivateRoute from "@/Services/RequireTokenAuth";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black w-full h-screen flex justify-center items-center">
      <PrivateRoute>{children}</PrivateRoute>
    </div>
  );
}
