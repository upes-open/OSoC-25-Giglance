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
import { Search } from "lucide-react";
import clsx from "clsx";

const formSchema = z.object({
  userType: z.string(),
  searchQuery: z.string(),
});

type FormData = z.infer<typeof formSchema>;

interface SearchBarProps {
  userTypes?: string[];
  defaultUserType?: string;
  placeholder?: string;
  onSearch?: (data: FormData) => void;
}

const predefinedTags = [
  "Web Design",
  "UI/UX Design",
  "Branding",
  "Mobile Dev",
  "Marketing",
];

const SearchBar: React.FC<SearchBarProps> = ({
  userTypes = ["Freelancer", "Client", "Agency"],
  defaultUserType = "Freelancer",
  placeholder = "Search for services or profiles...",
  onSearch = (data) => console.log("Submitted:", data),
}) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userType: defaultUserType,
      searchQuery: "",
    },
  });

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    form.setValue("searchQuery", tag);
  };

  const onSubmit = (data: FormData) => {
    onSearch(data);
  };

  return (
    <div className="px-4 sm:px-8">
      <div className="bg-card border-border w-full rounded-xl border px-3 py-4 shadow-sm">
        <Form form={form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
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
                        <SelectTrigger className="bg-background border-border w-[150px] rounded-md border">
                          <SelectValue placeholder="User type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {userTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {predefinedTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className={clsx(
                      "border-border rounded-full border px-3 py-1 text-sm transition-colors",
                      selectedTag === tag
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/70",
                    )}
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <Controller
                control={form.control}
                name="searchQuery"
                render={({ field }) => (
                  <FormItem className="min-w-[200px] flex-grow">
                    <FormControl>
                      <div className="relative">
                        <Search className="text-muted-foreground absolute top-2.5 left-3 h-4 w-4" />
                        <Input
                          {...field}
                          placeholder={placeholder}
                          className="bg-input border-border w-full rounded-md border pl-10"
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Search Button */}
              <div className="w-full sm:w-auto">
                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-5 font-semibold sm:w-auto"
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
