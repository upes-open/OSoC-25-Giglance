"use client";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { toast } from 'sonner'
import type { NextApiResponse } from 'next';
import { useUserOnboard } from '@/lib/useUserOnboard';

type BackendRootResponse = {
  message: string;
};

const ApiTester = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useUserOnboard();

  // Fetch data from '/' route
  const {
    data: apiResponse,
    isLoading: isLoadingApi,
    error: apiError,
  } = useQuery({
    queryKey: ["api-root"],
    queryFn: async () => {
      const response = await api.get("/");
      return response.data as BackendRootResponse;
    },
  });

  // Create user mutation
  const createUserMutation = useMutation({
    mutationFn: async (userData: { name: string; email: string }) => {
      const response = await api.post("/users", userData);
      return response.data as NextApiResponse;
    },
    onSuccess: () => {
      // Reset form
      setFormData({ name: "", email: "" });
      // Show success toast
      toast.success("User created successfully!");
    },
    onError: (error) => {
      console.error("Error creating user:", error);
      // Show error toast
      toast.error("Failed to create user. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim()) {
      createUserMutation.mutate(formData);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="my-10 w-full max-w-2xl space-y-6 font-mono">
      {/* API Response Display */}
      <div className="bg-card border-border rounded-lg border p-6">
        <h3 className="text-foreground mb-4 text-lg font-semibold">
          Backend API (GET /)
        </h3>
        {isLoadingApi ? (
          <div className="text-muted-foreground flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading...
          </div>
        ) : apiError ? (
          <div className="text-destructive">
            Error:{" "}
            {apiError instanceof Error
              ? apiError.message
              : "Failed to fetch API"}
          </div>
        ) : (
          <div className="bg-muted rounded-md p-4">
            <pre className="text-foreground overflow-x-auto text-sm whitespace-pre-wrap">
              {apiResponse?.message}
            </pre>
          </div>
        )}
      </div>

      {/* User Creation Form */}
      <div className="bg-card border-border rounded-lg border p-6">
        <h3 className="text-foreground mb-4 text-lg font-semibold">
          Database API (POST /users)
        </h3>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <div>
            <Input
              name="name"
              type="text"
              placeholder="USER"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full"
              required
            />
          </div>
          <div>
            <Input
              name="email"
              type="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-fit p-2"
            disabled={
              createUserMutation.isPending ||
              !formData.name.trim() ||
              !formData.email.trim()
            }
          >
            {createUserMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              </>
            ) : (
              <>POST</>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ApiTester;
