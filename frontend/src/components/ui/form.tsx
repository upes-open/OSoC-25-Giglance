"use client";

import * as React from "react";
import { FormProvider, useFormContext, Controller } from "react-hook-form";
import type { UseFormReturn, FieldValues } from "react-hook-form";
import { cn } from "@/lib/utils";

interface FormProps<T extends FieldValues> {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

function Form<T extends FieldValues>({
  children,
  className,
  ...props
}: FormProps<T> & { form: UseFormReturn<T> }) {
  const { form, ...rest } = props;
  return (
    <FormProvider {...form}>
      <form className={cn(className)} {...rest}>
        {children}
      </form>
    </FormProvider>
  );
}

const FormField = ({ name, render }: { name: string; render: Function }) => {
  const methods = useFormContext();
  return (
    <Controller
      name={name}
      control={methods.control}
      render={({ field }) => render({ field })}
    />
  );
};

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-2", className)} {...props} />
));
FormItem.displayName = "FormItem";

const FormControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props} />
));
FormControl.displayName = "FormControl";

export { Form, FormField, FormItem, FormControl };
