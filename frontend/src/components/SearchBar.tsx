"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Search, X } from "lucide-react";

const formSchema = z.object({
  userType: z.string(),
  searchQuery: z.string(),
});

type FormData = z.infer<typeof formSchema>;

const predefinedTags = [
  "Web Design",
  "UI/UX Design",
  "Branding",
  "Mobile Dev",
  "Marketing",
];

const SearchBar: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userType: "Freelancer",
      searchQuery: "",
    },
  });

  const handleTagClick = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags((prev) => [...prev, tag]);
    }
    form.setValue("searchQuery", tag);
  };

  const removeTag = (tag: string) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag));
  };

  const onSubmit = (data: FormData) => {
    console.log("Submitted:", { ...data, selectedTags });
  };

  return (
    <div className="px-4 sm:px-8">
      <div className="bg-card w-full rounded-2xl px-6 py-5 shadow-md">
        <Form form={form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-wrap items-center gap-4">
              {/* Search Icon */}
              <Search className="text-muted-foreground h-5 w-5" />

              {/* Dropdown */}
              <Controller
                control={form.control}
                name="userType"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-background w-[140px] border-none px-2 shadow-none">
                          <SelectValue placeholder="User type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {["Freelancer", "Client", "Agency"].map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              {/* Divider */}
              <div className="bg-border h-6 w-px" />

              {/* Tag Selector */}
              <Search className="text-muted-foreground h-5 w-5" />
              {/* Search Input Box */}
              <Controller
                control={form.control}
                name="searchQuery"
                render={({ field }) => (
                  <FormItem className="min-w-[200px]">
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          placeholder="Search..."
                          className="bg-muted border-border text-foreground w-full rounded-full border px-4 py-2 text-sm shadow-sm"
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Selected Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedTags.map((tag) => (
                  <div
                    key={tag}
                    className="bg-muted text-muted-foreground flex items-center gap-1 rounded-full px-3 py-1 text-sm"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="hover:text-destructive"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* All Clickable Tags */}
              <div className="flex flex-wrap gap-2">
                {predefinedTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => handleTagClick(tag)}
                    className="border-border text-muted-foreground hover:bg-muted/80 rounded-full border px-3 py-1 text-sm"
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Search Button */}
              <div className="ml-auto">
                <Button
                  type="submit"
                  className="rounded-lg bg-teal-500 px-6 py-2 font-medium text-white hover:bg-teal-600"
                >
                  Search
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SearchBar;
