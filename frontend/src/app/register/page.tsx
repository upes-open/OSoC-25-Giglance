"use client";
import React, { useState } from "react";
import { useForm, Controller, type Resolver, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// Update these imports to match your actual shadcn/ui component paths
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// --- Zod Schema ---
const formSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email(),
  phone: z.string().optional(),
  location: z.string().min(1, "Location is required"),
  profilePic: z.string().url("Must be a valid URL"),
  skills: z.array(z.string()).min(1, "Select at least one skill"),
  experience: z.string().min(1, "Required"),
  hourlyRate: z.coerce.number().min(100, "Minimum ₹100"),
  hoursPerWeek: z.coerce.number().optional(),
  bio: z.string().min(100).max(500),
  resumeUrl: z.string().url("Must be a valid URL"),
  primaryCategory: z.string().min(1, "Required"),
  subcategories: z.array(z.string()).optional(),
  projectTypes: z.array(z.string()).optional(),
  linkedin: z.string().url().optional().or(z.literal("")),
  github: z.string().url().optional().or(z.literal("")),
  twitter: z.string().url().optional().or(z.literal("")),
});

type FormValues = z.infer<typeof formSchema>;

// --- Options (replace with your constants) ---
const skillsList = [
  "Web Development",
  "UI/UX Design",
  "Content Writing",
  "Digital Marketing",
  "Data Analysis",
];
const experienceList = ["<1", "1-2", "3-5", "5+"];
const categories = [
  { value: "dev", label: "Development" },
  { value: "design", label: "Design" },
  { value: "marketing", label: "Marketing" },
];
const subcategories = [
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "seo", label: "SEO" },
];
const projectTypes = [
  { value: "short-term", label: "Short-term" },
  { value: "long-term", label: "Long-term" },
  { value: "one-time", label: "One-time" },
];

const SellerRegisterPage = () => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema) as Resolver<FormValues>,
    defaultValues: {
      skills: [],
      subcategories: [],
      projectTypes: [],
      linkedin: "",
      github: "",
      twitter: "",
    },
  });

const onSubmit: SubmitHandler<FormValues> = (data) => {
  setOpen(true);
  reset();
};

  return (
    <div className="max-w-2xl mx-auto p-6 bg-background rounded-lg shadow-md mt-8 mb-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Become a Freelancer on Giglance</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Personal Details */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-medium">Full Name *</label>
              <Input placeholder="e.g. Jane Doe" {...register("fullName")} />
              {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
            </div>
            <div>
              <label className="font-medium">Email *</label>
              <Input placeholder="e.g. jane@email.com" {...register("email")} />
              {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
            </div>
            <div>
              <label className="font-medium">Phone Number</label>
              <Input placeholder="e.g. 9876543210" {...register("phone")} />
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
            </div>
            <div>
              <label className="font-medium">Location *</label>
              <Input placeholder="City, Country" {...register("location")} />
              {errors.location && <p className="text-red-500 text-xs">{errors.location.message}</p>}
            </div>
            <div>
              <label className="font-medium">Profile Picture URL *</label>
              <Input placeholder="https://..." {...register("profilePic")} />
              {errors.profilePic && <p className="text-red-500 text-xs">{errors.profilePic.message}</p>}
            </div>
          </div>
        </section>

        {/* Professional Details */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Professional Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-medium">Skills *</label>
              <Controller
                control={control}
                name="skills"
                render={({ field }) => (
                  <Input
                    placeholder="Select skills (comma separated)"
                    value={field.value.join(", ")}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.onChange(e.target.value.split(",").map((s: string) => s.trim()))}
                  />
                )}
              />
              {errors.skills && <p className="text-red-500 text-xs">{errors.skills.message!}</p>}
            </div>
            <div>
              <label className="font-medium">Years of Experience *</label>
              <Controller
                control={control}
                name="experience"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-full bg-background text-foreground border rounded p-2">
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover text-popover-foreground">
                      {experienceList.map((exp) => (
                        <SelectItem key={exp} value={exp} className="dark:bg-popover dark:text-popover-foreground">
                          {exp}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.experience && <p className="text-destructive text-xs">{errors.experience.message}</p>}
            </div>
            <div>
              <label className="font-medium">Hourly Rate (₹) *</label>
              <Input type="number" min={100} placeholder="e.g. 500" {...register("hourlyRate")} />
              {errors.hourlyRate && <p className="text-red-500 text-xs">{errors.hourlyRate.message}</p>}
            </div>
            <div>
              <label className="font-medium">Available Hours/Week</label>
              <Input type="number" min={1} placeholder="e.g. 20" {...register("hoursPerWeek")} />
              {errors.hoursPerWeek && <p className="text-red-500 text-xs">{errors.hoursPerWeek.message}</p>}
            </div>
            <div className="md:col-span-2">
              <label className="font-medium">About / Bio *</label>
              <Textarea
                rows={4}
                placeholder="Tell us about yourself (100–500 chars)"
                {...register("bio")}
              />
              {errors.bio && <p className="text-red-500 text-xs">{errors.bio.message}</p>}
            </div>
            <div className="md:col-span-2">
              <label className="font-medium">Resume*</label>
              <Input placeholder="https://..." {...register("resumeUrl")} />
              {errors.resumeUrl && <p className="text-red-500 text-xs">{errors.resumeUrl.message}</p>}
            </div>
          </div>
        </section>


        {/* Social Links */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Social Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-medium">LinkedIn</label>
              <Input placeholder="https://linkedin.com/in/username" {...register("linkedin")} />
              {errors.linkedin && <p className="text-red-500 text-xs">{errors.linkedin.message}</p>}
            </div>
            <div>
              <label className="font-medium">GitHub / Portfolio</label>
              <Input placeholder="https://github.com/username" {...register("github")} />
              {errors.github && <p className="text-red-500 text-xs">{errors.github.message}</p>}
            </div>
            <div>
              <label className="font-medium">Twitter / X</label>
              <Input placeholder="https://twitter.com/username" {...register("twitter")} />
              {errors.twitter && <p className="text-red-500 text-xs">{errors.twitter.message}</p>}
            </div>
          </div>
        </section>

        <div className="flex justify-center mt-8">
          <Button type="submit" className="w-full md:w-auto">
            Register as Freelancer
          </Button>
        </div>
      </form>

      {/* Success Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="flex flex-col items-center gap-4">
          {/* Replace with a confetti animation if you have one */}
          <span className="text-green-500 text-4xl">🎉</span>
          <DialogHeader>
            <DialogTitle>Thank you for registering yourself with us!</DialogTitle>
          </DialogHeader>
          <p className="text-center">
            We will reach out to you within 24 hours.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SellerRegisterPage;
