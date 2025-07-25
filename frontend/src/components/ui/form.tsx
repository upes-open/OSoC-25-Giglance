"use client";

import * as React from "react";
import { FormProvider, useFormContext, Controller } from "react-hook-form";
import type { UseFormReturn, FieldValues } from "react-hook-form";
import { cn } from "@/lib/utils";

interface FormProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

function Form<T extends FieldValues>({
  children,
  className,
  ...props
}: FormProps & { form: UseFormReturn<T> }) {
  const { form, ...rest } = props;
  return (
    <FormProvider {...form}>
      <div className={cn(className)} {...rest}>
        {children}
      </div>
    </FormProvider>
  );
}

import type { ControllerRenderProps } from "react-hook-form";

const FormField = ({
  name,
  render,
}: {
  name: string;
  render: (props: { field: ControllerRenderProps<FieldValues, string> }) => React.ReactElement;
}) => {
  const methods = useFormContext();
  return (
    <Controller
      name={name}
      control={methods.control}
      render={({ field }) => {
        const element = render({ field });
        if (!React.isValidElement(element)) {
          throw new Error("FormField render function must return a valid ReactElement.");
        }
        return element;
      }}
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
