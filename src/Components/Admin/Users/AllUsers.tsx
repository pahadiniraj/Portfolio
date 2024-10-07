import {
  useDeleteAllUsersMutation,
  useGetAllUsersQuery,
} from "@/Redux/Services/admin";
import { UserData } from "@/Redux/Services/user";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import profile from "../../../Assets/ProfileImg/DefaultProfile.jpg";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";
import { handleError } from "@/Redux/handleErrror";
import { MdDelete } from "react-icons/md";

const AllUsers = () => {
  const [user, setUser] = useState<UserData[]>();

  const { data, isLoading, isError, error, isSuccess, refetch } =
    useGetAllUsersQuery();
  const [DeleteUser] = useDeleteAllUsersMutation();

  useEffect(() => {
    if (data && isSuccess) {
      setUser(data?.data);
    }
  }, [data, isSuccess]);

  console.log(user);

  const handleDeleteUser = async (_id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) {
      return;
    }
    try {
      const response = await DeleteUser({ _id });
      toast.success(response?.data?.message);
      refetch();
    } catch (error) {
      console.error("Error while deleting user", error);
    }
  };

  useEffect(() => {
    if (error) {
      handleError(error);
    }
  }, [error, isError]);

  return (
    <div>
      <p className="mb-2 text-lg font-semibold">All Users</p>
      {isLoading && (
        <div className="flex flex-col w-full gap-4">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <Skeleton key={index} className="w-full h-14" />
            ))}
        </div>
      )}
      <div className="flex flex-col gap-4">
        {user &&
          user
            .concat()
            .reverse()
            .map((value, index) => {
              const revershedIndex = user.length - index;
              return (
                <div
                  key={index}
                  className="flex  justify-between items-center bg-slate-700 px-3 py-3 rounded-md gap-5"
                >
                  <div className="flex gap-4 items-center ">
                    <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden flex justify-center items-center">
                      <Image
                        src={(value.avatar as string) || profile}
                        alt="profile"
                        width={100}
                        height={100}
                        style={{ objectFit: "cover" }}
                        className="rounded-full"
                        priority
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">
                        {value.firstName} {value.lastName}
                      </p>
                      <div>
                        <p className="text-xs">{value.jobTitle}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm">{value.email}</p>
                  <button onClick={() => handleDeleteUser(value._id)}>
                    <MdDelete className="text-2xl hover:text-red-600 duration-300" />
                  </button>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default AllUsers;
