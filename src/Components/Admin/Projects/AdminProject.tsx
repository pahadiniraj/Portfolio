import Image from "next/image";
import React from "react";
import profile from "../../../Assets/ProfileImg/DefaultProfile.jpg";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useGetAllProjectQuery } from "@/Redux/Services/project";
import { convertISOToDate } from "@/Components/ConvertISO/convertDate";
import { useDeleteProjectMutation } from "@/Redux/Services/admin";
import { toast } from "react-toastify";

const AdminProject = () => {
  const router = useRouter();
  const { data } = useGetAllProjectQuery();
  console.log(data?.data);
  const [DeleteProject, { isLoading, isError, error, isSuccess }] =
    useDeleteProjectMutation();
  const handleDelete = async (id: string) => {
    try {
      const response = await DeleteProject(id);
      if (response.data && response.data.success === true) {
        toast.success(response?.data?.message);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error while deleting project", error);
    }
  };
  return (
    <>
      <div className="h-full overflow-hidden ">
        <div className="flex w-full justify-between items-center">
          <p className="text-lg font-semibold mb-2">All Projects</p>
          <button
            onClick={() => router.push("/dashboard/create-project")}
            className="text-xs font-semibold mb-2 bg-green-600 hover:bg-green-700 px-2 py-1 duration-300 ease-linear active:scale-90  rounded-lg"
          >
            Create Projects
          </button>
        </div>
        <div className=" h-full pr-4  overflow-y-auto rounded-md flex flex-col pb-14  gap-5 justify-start items-start mt-2   ">
          {data?.data &&
            data?.data
              .concat()
              .reverse()
              .map((value: any) => (
                <div
                  className="flex gap-4 border border-slate-700 p-2 rounded-xl w-full  "
                  key={value._id}
                >
                  <div className="relative w-[100px] h-[120px]  rounded-full  flex justify-center items-center ">
                    <Image
                      src={value.thumbnail || profile}
                      alt="profile"
                      width={100}
                      height={100}
                      style={{ objectFit: "cover" }}
                      className="rounded-full border border-slate-500"
                      priority
                    />
                  </div>
                  <div className="w-[400px] flex flex-col gap-2 justify-center ">
                    <p className="text-xl font-semibold">{value?.title}</p>
                    <p className="line-clamp-2 text-xs font-light">
                      {value?.description}
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {value?.technologies.map((value: any, index: any) => (
                        <p
                          className="text-xs border text-center rounded-lg p-1"
                          key={index}
                        >
                          {value}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className=" w-2/6 flex justify-end items-center">
                    <div className="flex-col flex gap-2">
                      <div className="text-xl font-semibold">
                        <span>{value?.category}</span>
                      </div>
                      <div className="text-sm">
                        <p>
                          CreatedAt:{" "}
                          {value?.createdAt ? (
                            <span>{convertISOToDate(value?.createdAt)}</span>
                          ) : (
                            "N/A"
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" gap-8 flex flex-col justify-center items-center py-2 w-1/6">
                    <button onClick={() => handleDelete(value?._id as string)}>
                      <MdDelete className="text-3xl hover:text-red-600 duration-200 " />
                    </button>
                    <button
                      onClick={() =>
                        router.push(`/dashboard/update-project/${value?._id}`)
                      }
                    >
                      <FaEdit className="text-2xl ml-2 hover:text-yellow-500 duration-200" />
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default AdminProject;
