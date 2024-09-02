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
    const token = localStorage.getItem("accessToken");
    const user = localStorage.getItem("user");

    if (token && user) {
      dispatch(
        setUser({
          user: JSON.parse(user),
          accessToken: token,
        })
      );
    }
  });

  return <div className="w-full">{children}</div>;
}
