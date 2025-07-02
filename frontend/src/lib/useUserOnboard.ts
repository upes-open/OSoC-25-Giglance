import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { api } from "./axios";

export const useUserOnboard = () => {
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    if (!isSignedIn || !user) return;

    const syncUser = async () => {
      try {
        await api.post("/users", {
          id: user.id,
          email: user.primaryEmailAddress?.emailAddress,
          name: `${user.firstName} ${user.lastName}`,
        });
      } catch (error) {
        console.log("Payload sent to backend:", {
        id: user.id,
        email: user.primaryEmailAddress?.emailAddress,
        name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
    });
        console.error("Failed to sync user:", error);
      }
    };
    


    syncUser();
  }, [isSignedIn, user]);
};
