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
import { Form, FormItem, FormControl } from "@/components/ui/form";
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
    <div className="mx-auto w-full max-w-4xl px-4">
      <div className="bg-card rounded-2xl px-6 py-6 shadow-md">
        <Form form={form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-wrap items-center gap-4">
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
                        {["Freelancer", "Client"].map((type) => (
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
              {/* Search Input Box */}
              <Controller
                control={form.control}
                name="searchQuery"
                render={({ field }) => (
                  <FormItem className="min-w-[200px] flex-1">
                    <FormControl>
                      <div className="relative">
                        <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                        <Input
                          {...field}
                          placeholder="Search..."
                          className="bg-muted border-border text-foreground w-full rounded-full border py-2 pr-4 pl-10 text-sm shadow-sm"
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Selected Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedTags.map((tag, index) => (
                  <div
                    key={index}
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
                {predefinedTags.map((tag, index) => (
                  <button
                    key={index}
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
                  className="bg-primary rounded-lg px-6 py-2 font-medium text-white hover:bg-teal-600"
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
