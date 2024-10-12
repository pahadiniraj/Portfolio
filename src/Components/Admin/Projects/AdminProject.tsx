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
import Skeleton from "react-loading-skeleton";

const AdminProject = () => {
  const router = useRouter();
  const { data, isLoading } = useGetAllProjectQuery();
  const [DeleteProject, { isLoading: deleteLoading }] =
    useDeleteProjectMutation();

  const handleDelete = async (id: string) => {
    const isConfirm = window.confirm("Are you sure you want to delete?");

    if (isConfirm) {
      try {
        const response = await DeleteProject(id);
        if (response.data && response.data.success === true) {
          toast.success(response?.data?.message);
          window.location.reload();
        }
      } catch (error) {
        console.error("Error while deleting project", error);
      }
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

        <div className="h-full pr-4 overflow-y-auto rounded-md flex flex-col pb-14 gap-5 justify-start items-start mt-2">
          {isLoading
            ? // Skeleton Loader for Projects
              Array(5)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:gap-4 border border-slate-700 p-2 rounded-xl w-full"
                  >
                    <div className="relative w-[100px] h-[120px] rounded-full md:flex justify-center items-center">
                      <Skeleton circle={true} height={120} width={100} />
                    </div>
                    <div className="md:w-[400px] flex flex-col gap-2 justify-center">
                      <Skeleton width={150} height={24} />
                      <Skeleton count={2} />
                      <div className="grid grid-cols-3 md:grid-cols-3 gap-2">
                        <Skeleton width={70} height={24} />
                        <Skeleton width={70} height={24} />
                        <Skeleton width={70} height={24} />
                      </div>
                    </div>
                    <div className="md:w-2/6 flex mt-2 md:mt-0 md:justify-end items-center">
                      <Skeleton width={120} height={24} />
                    </div>
                    <div className="gap-8 flex md:flex-col md:justify-center items-center p-2 md:w-1/6">
                      <Skeleton width={24} height={24} />
                      <Skeleton width={24} height={24} />
                    </div>
                  </div>
                ))
            : // Actual Project Data
              data?.data &&
              data?.data
                .concat()
                .reverse()
                .map((value: any) => (
                  <div
                    className="flex flex-col md:flex-row md:gap-4 border border-slate-700 p-2 rounded-xl w-full"
                    key={value._id}
                  >
                    <div className="relative w-[100px] h-[120px] rounded-full md:flex justify-center items-center">
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
                    <div className="md:w-[400px] flex flex-col gap-2 justify-center">
                      <p className="md:text-xl font-semibold">{value?.title}</p>
                      <p className="line-clamp-2 text-xs font-light">
                        {value?.description}
                      </p>
                      <div className="grid grid-cols-3 md:grid-cols-3 gap-2">
                        {value?.technologies.map((tech: any, index: number) => (
                          <p
                            className="text-xs border text-center rounded-lg p-1"
                            key={index}
                          >
                            {tech}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="md:w-2/6 flex mt-4 md:mt-0 md:justify-end items-center">
                      <div className="flex-col flex ">
                        <div className="md:text-xl text-sm font-semibold">
                          <span>{value?.category}</span>
                        </div>
                        <div className="md:text-sm text-xs">
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
                    <div className="gap-8 flex md:flex-col mt-2 md:mt-0 md:justify-center items-center p-2 md:w-1/6">
                      <button
                        onClick={() => handleDelete(value?._id as string)}
                      >
                        <MdDelete className="md:text-3xl text-xl hover:text-red-600 duration-200" />
                      </button>
                      <button
                        onClick={() =>
                          router.push(`/dashboard/update-project/${value?._id}`)
                        }
                      >
                        <FaEdit className="md:text-3xl text-xl ml-2 hover:text-yellow-500 duration-200" />
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
