import StarRating from "@/Components/Testimonial/StarRating";
import { useDeleteTestimonialMutation } from "@/Redux/Services/admin";
import { useGetAllTestimonialsQuery } from "@/Redux/Services/testimonial";
import React from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton"; // Import Skeleton

const DeleteTestimonial = () => {
  const { data, refetch, isLoading } = useGetAllTestimonialsQuery(); // Include isLoading here
  const [deleteTestimonial, { isLoading: isDeleting }] =
    useDeleteTestimonialMutation();

  const handleDelete = async (_id: string) => {
    try {
      const response = await deleteTestimonial(_id).unwrap();
      console.log(response);

      // Use unwrap to handle fulfilled/rejected directly
      if (response.success === true) {
        toast.success(response.message);
        refetch();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete the testimonial.");
    }
  };

  return (
    <>
      <div className="px-4 py-2">
        <p className="text-xl mb-2 font-semibold">Testimonials</p>

        <div className="flex flex-col gap-3 h-[280px] overflow-y-auto py-2 pr-2">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="bg-slate-700 w-full rounded-md p-3 relative flex justify-between items-center"
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
            ))
          ) : data?.data && data.data.length > 0 ? (
            data.data
              .concat()
              .reverse()
              .map((value, index) => {
                const isDeletingTestimonial = isDeleting; // Create a new variable for clarity

                return (
                  <div
                    className="bg-slate-700 w-full rounded-md p-3 relative"
                    key={index}
                  >
                    <p className="text-xl font-bold">
                      {value?.user?.firstName}
                    </p>
                    <p className="break-words">{value?.message}</p>
                    <div>
                      <StarRating rating={value?.rating} />
                    </div>
                    <button className="absolute top-3 right-2">
                      <MdDelete
                        className="text-2xl hover:text-red-600 duration-200"
                        onClick={() => handleDelete(value?._id)}
                      />
                    </button>
                  </div>
                );
              })
          ) : (
            <p className="text-center text-gray-400">No Testimonial</p>
          )}
        </div>
      </div>
    </>
  );
};

export default DeleteTestimonial;
