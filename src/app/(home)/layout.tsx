import { Inter } from "next/font/google";
import "../globals.css";
import StarterLoading from "@/Components/StarterLoading/StarterLoading";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StarterLoading>{children}</StarterLoading>
    </>
  );
}
