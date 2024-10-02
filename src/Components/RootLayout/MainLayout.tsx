const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:h-[390px] h-screen bg-black   w-full flex justify-center  md:bg-transparent ">
      {children}
    </div>
  );
};

export default MainLayout;
