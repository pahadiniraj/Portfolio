"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  useGetUserQuery,
  useUpdateAvatarMutation,
} from "@/Redux/Services/user";
import { useRouter } from "next/navigation";

const FileUpload = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploadFiles, { isLoading }] = useUpdateAvatarMutation(); // Adjust mutation name accordingly
  const { refetch } = useGetUserQuery();
  const router = useRouter();

  // Handle file change for image and thumbnail
  const handleFileChange = (
    selectedFile: File | null,
    type: "image" | "thumbnail"
  ) => {
    if (selectedFile) {
      if (type === "image") {
        setImageFile(selectedFile);
        setImagePreview(URL.createObjectURL(selectedFile));
      } else {
        setThumbnailFile(selectedFile);
        setThumbnailPreview(URL.createObjectURL(selectedFile));
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "image" | "thumbnail"
  ) => {
    const selectedFile = e.target.files?.[0];
    handleFileChange(selectedFile || null, type);
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

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    type: "image" | "thumbnail"
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const droppedFile = e.dataTransfer.files?.[0];
    handleFileChange(droppedFile || null, type);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!imageFile || !thumbnailFile) {
      toast.error("Please select both image and thumbnail!");
      return;
    }

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("thumbnail", thumbnailFile);

    try {
      const response = await uploadFiles(formData).unwrap(); // Adjust mutation call
      toast.success("Files uploaded successfully!");
      console.log("Upload response:", response);
      refetch();
      setImagePreview(null);
      setThumbnailPreview(null);
      setImageFile(null);
      setThumbnailFile(null);
    } catch (error) {
      console.error("Error uploading files:", error);
      toast.error("File upload failed!");
    }
  };

  const handleCancel = () => {
    setImageFile(null);
    setThumbnailFile(null);
    setImagePreview(null);
    setThumbnailPreview(null);
  };

  return (
    <div className="flex flex-col  h-full px-4 py-4 overflow-y-auto">
      <p className="font-semibold text-xl border-b border-gray-300 pb-4">
        Upload image and thumbnail
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-full max-w-md p-4 rounded-lg shadow-lg"
      >
        {/* Image Upload */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, "image")}
          className={`mb-4 w-full h-32 flex items-center justify-center border-dashed border-2 rounded-lg transition-colors duration-300 ${
            dragActive ? "border-blue-600 " : "border-gray-300"
          }`}
        >
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Selected image preview"
              className="object-cover rounded-full h-24 w-24"
            />
          ) : (
            <div className="text-center">
              <p className="text-gray-300">Drag & Drop your image here</p>
              <p className="text-gray-300">or</p>
              <label className="text-blue-600 cursor-pointer underline">
                Browse Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleInputChange(e, "image")}
                  className="hidden"
                />
              </label>
            </div>
          )}
        </div>

        {/* Thumbnail Upload */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, "thumbnail")}
          className={`mb-4 w-full h-32 flex items-center justify-center border-dashed border-2 rounded-lg transition-colors duration-300 ${
            dragActive ? "border-blue-600 " : "border-gray-300"
          }`}
        >
          {thumbnailPreview ? (
            <img
              src={thumbnailPreview}
              alt="Selected thumbnail preview"
              className="object-cover rounded-full h-24 w-24"
            />
          ) : (
            <div className="text-center">
              <p className="text-gray-300">Drag & Drop your thumbnail here</p>
              <p className="text-gray-300">or</p>
              <label className="text-blue-600 cursor-pointer underline">
                Browse Thumbnail
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleInputChange(e, "thumbnail")}
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
            className={`p-2 w-full rounded-md text-white ${
              isLoading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
            } transition duration-300`}
          >
            {isLoading ? "Uploading..." : "Upload Files"}
          </button>

          {(imagePreview || thumbnailPreview) && (
            <button
              type="button"
              onClick={handleCancel}
              className="p-2 w-full rounded-md text-white bg-red-500 hover:bg-red-600 transition duration-300"
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
