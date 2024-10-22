import { usePathname } from "next/navigation";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:h-[390px] md:w-[900px] h-screen    w-full flex justify-center  md:bg-transparent z-10 ">
      {children}
    </div>
  );
};

export default MainLayout;
