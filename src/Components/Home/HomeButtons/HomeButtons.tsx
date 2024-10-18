import React from "react";
import Button from "@/Components/Button/Button";
import { FiExternalLink } from "react-icons/fi";
import { BsDownload } from "react-icons/bs";
import { useRouter } from "next/navigation";

const HomeButtons = () => {
  const router = useRouter();
  return (
    <div className="flex gap-3">
      <a href="/Pdf/resume.pdf" download="NirajPahadiResume">
        <Button
          className="py-2 px-3 rounded-md border font-semibold flex justify-center items-center gap-2 "
          text="Resume"
        >
          <BsDownload className="text-lg" />
        </Button>
      </a>

      <Button
        className="py-2 px-3 rounded-md border hover:bg-white hover:text-black font-semibold flex justify-center items-center gap-2 "
        text="Portfolio "
        onClick={() => router.push("/portfolio")}
      >
        <FiExternalLink className="text-lg" />
      </Button>
    </div>
  );
};

export default HomeButtons;
