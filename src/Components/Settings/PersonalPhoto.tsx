import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  useGetUserQuery,
  useUpdateAvatarMutation,
} from "@/Redux/Services/user";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploadFile, { isLoading }] = useUpdateAvatarMutation();
  const { refetch } = useGetUserQuery();

  const handleFileChange = (selectedFile: File | null) => {
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    handleFileChange(selectedFile || null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const droppedFile = e.dataTransfer.files?.[0];
    handleFileChange(droppedFile || null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      toast.error("Please select a file!");
      return;
    }

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const response = await uploadFile(formData).unwrap();
      toast.success("File uploaded successfully!");
      refetch();
      setPreview(null);
      setFile(null);
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("File upload failed!");
    }
  };

  const handleCancel = () => {
    setFile(null);
    setPreview(null);
  };

  return (
    <div className="flex flex-col items-center justify-start h-full px-4 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-full max-w-md p-4 rounded-lg shadow-lg"
      >
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`mb-4 w-full h-32 flex items-center justify-center border-dashed border-2 rounded-lg transition-colors duration-300 ${
            dragActive ? "border-blue-600 " : "border-gray-300"
          }`}
        >
          {preview ? (
            <img
              src={preview}
              alt="Selected file preview"
              className="object-cover rounded-full h-24 w-24"
            />
          ) : (
            <div className="text-center ">
              <p className="text-gray-300 ">Drag & Drop your file here</p>
              <p className="text-gray-300">or</p>
              <label className="text-blue-600 cursor-pointer underline">
                Browse
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleInputChange}
                  className="hidden"
                />
              </label>
            </div>
          )}
        </div>

        <div className="flex space-x-4 w-full">
          <button
            type="submit"
            disabled={isLoading}
            className={`p-1 w-full rounded-md text-white ${
              isLoading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
            } transition duration-300`}
          >
            {isLoading ? "Uploading..." : "Upload File"}
          </button>

          {preview && (
            <button
              type="button"
              onClick={handleCancel}
              className=" p-1 w-full rounded-md text-white bg-red-500 hover:bg-red-600 transition duration-300"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default FileUpload;
