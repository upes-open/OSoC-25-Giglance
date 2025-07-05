import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { api } from "./axios";

export const useUserOnboard = () => {
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    if (!isSignedIn || !user) return;

    const syncUser = async () => {
      const payload = {
        id: user.id,
        email: user.primaryEmailAddress?.emailAddress,
        name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
      };

      try {
        await api.post("/users", payload);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    void syncUser();
  }, [isSignedIn, user]);
};
