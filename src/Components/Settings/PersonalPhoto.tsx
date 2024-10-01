import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  useGetUserQuery,
  useUpdateAvatarMutation,
} from "@/Redux/Services/user"; // Adjust this path based on your folder structure
import { useRouter } from "next/navigation";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null); // State to store selected file
  const [uploadFile, { isLoading }] = useUpdateAvatarMutation();
  const { refetch } = useGetUserQuery();
  const router = useRouter();

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      toast.error("Please select a file!");
      return;
    }

    const formData = new FormData();
    formData.append("avatar", file); // 'avatar' is the key, update if backend expects a different key

    try {
      const response = await uploadFile(formData).unwrap();
      toast.success("File uploaded successfully!");
      console.log("Upload response:", response);
      refetch();
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("File upload failed!");
    }
  };

  return (
    <div className="flex  h-full justify-center items-start p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-full max-w-md p-4  rounded-lg shadow-lg"
      >
        <input
          type="file"
          onChange={handleFileChange}
          className="mb-4 p-2 bg-slate-900 border border-slate-700   rounded-md w-full"
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`p-2 w-full rounded-md text-white ${
            isLoading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
          } transition duration-300`}
        >
          {isLoading ? "Uploading..." : "Upload File"}
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
