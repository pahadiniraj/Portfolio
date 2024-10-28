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
  const [users, setUsers] = useState<UserData[]>([]);
  const [deletingUserId, setDeletingUserId] = useState<string | null>(null); // To manage delete loading

  const { data, isLoading, isError, error, isSuccess, refetch } =
    useGetAllUsersQuery();
  const [DeleteUser] = useDeleteAllUsersMutation();

  useEffect(() => {
    if (data && isSuccess) {
      // Create a new array and reverse it to avoid mutating the original data
      setUsers([...data.data].reverse() || []);
    }
  }, [data, isSuccess]);

  const handleDeleteUser = async (_id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) {
      return;
    }

    setDeletingUserId(_id); // Set the user being deleted

    try {
      const response = await DeleteUser({ _id });
      if (response.error) {
        toast.error("Error deleting user. Please try again.");
      } else {
        toast.success(response?.data?.message);
        refetch();
      }
    } catch (error) {
      console.error("Error while deleting user", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setDeletingUserId(null); // Reset after deletion is complete
    }
  };

  return (
    <div className="w-full">
      <p className="mb-2 text-lg font-semibold">All Users</p>

      {/* Skeleton while fetching all users */}
      {isLoading && (
        <div className="flex flex-col gap-4">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-slate-700 px-2 py-3 rounded-md overflow-hidden"
              >
                <div className="flex gap-4 items-center">
                  <Skeleton circle={true} height={50} width={50} />
                  <div className="flex flex-col gap-1">
                    <Skeleton width={80} height={20} />
                    <Skeleton width={100} height={15} />
                  </div>
                </div>
                <Skeleton width={150} height={20} />
                <Skeleton width={30} height={30} />
              </div>
            ))}
        </div>
      )}

      {/* Display users once data is loaded */}
      {!isLoading && (
        <div className="flex flex-col gap-4">
          {users.length > 0 ? (
            users.map((user, index) => {
              const isDeleting = deletingUserId === user._id; // Check if the user is being deleted

              return (
                <div
                  key={user._id} // Use user._id as key for better uniqueness
                  className="flex justify-between items-center bg-slate-700 px-2 py-3 rounded-md md:gap-5 overflow-hidden"
                >
                  <div className="flex md:gap-4 gap-2 items-center">
                    <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden flex justify-center items-center">
                      {isDeleting ? (
                        <Skeleton circle={true} height={50} width={50} />
                      ) : (
                        <Image
                          src={(user.avatar as string) || profile}
                          alt="profile"
                          width={100}
                          height={100}
                          style={{ objectFit: "cover" }}
                          className="rounded-full"
                          priority
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      {isDeleting ? (
                        <>
                          <Skeleton width={80} height={20} />
                          <Skeleton width={100} height={15} />
                        </>
                      ) : (
                        <>
                          <div className="text-sm font-semibold">
                            <p>{user.firstName}</p>
                            <p>{user.lastName}</p>
                          </div>
                          <div>
                            <p className="text-xs">{user.jobTitle}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {isDeleting ? (
                    <Skeleton width={150} height={20} />
                  ) : (
                    <p className="md:text-sm text-xs">{user.email}</p>
                  )}

                  {isDeleting ? (
                    <Skeleton width={30} height={30} />
                  ) : (
                    <button onClick={() => handleDeleteUser(user._id)}>
                      <MdDelete className="text-2xl hover:text-red-600 duration-300" />
                    </button>
                  )}
                </div>
              );
            })
          ) : (
            <p className="text-center">No users found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AllUsers;
