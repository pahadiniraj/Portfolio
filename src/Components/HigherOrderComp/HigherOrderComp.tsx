import { useEffect } from "react";
import { useAppDispatch } from "../Redux/hooks";
import { setUser } from "../Redux/Slice/authSlice";

export default function HigherOrderComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  // Safely retrieve and parse the user from localStorage
  const user = (() => {
    try {
      return JSON.parse(localStorage.getItem("user") || "null");
    } catch (error) {
      console.error("Failed to parse user from localStorage:", error);
      return null;
    }
  })();

  useEffect(() => {
    // Only dispatch if the user is valid and window is available
    if (typeof window !== "undefined" && user) {
      dispatch(setUser(user));
    }
  }, [user, dispatch]);

  return <div className="w-full">{children}</div>;
}
