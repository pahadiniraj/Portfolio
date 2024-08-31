import { useEffect, useState } from "react";
import { useAppDispatch } from "../Redux/hooks";
import { setUser } from "../Redux/Slice/authSlice";

export default function HigherOrderComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user") || "null");
        if (storedUser) {
          dispatch(setUser(storedUser));
        }
      } catch (error) {
        console.error("Failed to parse user from localStorage:", error);
      }
    }
  }, [dispatch]);

  return <div className="w-full">{children}</div>;
}
