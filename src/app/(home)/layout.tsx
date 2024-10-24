import { Inter } from "next/font/google";
import "../globals.css";
import StarterLoading from "@/Components/StarterLoading/StarterLoading";
import BackgroundComponent from "@/Components/Background/background";
import Capcha from "@/Components/Capcha/Capcha";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StarterLoading>{children}</StarterLoading>
      <div className="absolute w-full h-full">
        <div className="w-full h-full">
          <BackgroundComponent />
        </div>
      </div>
    </>
  );
}
