"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// const MAX_FILE_SIZE = 5000000;
// const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }),
  // icon: z.object({
  //   image: z
  //     .any()
  //     .refine((file) => file?.size <= MAX_FILE_SIZE, "Max image size is 5MB")
  //     .refine(
  //       (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
  //       "Only .jpg, .jpeg, and .png formats are supported.",
  //     ),
  // }),
  // icon: z.string(),
  // icon: z
  //   .instanceof(FileList)
  //   .refine((file) => file?.length == 1, "File is required."),
});

export default function RegisterForm() {
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   name: "",
    //   email: "",
    //   password: "",
    //   // icon: "",
    //   icon: null,
    // },
  });
  // const iconFileRef = form.register("icon");

  async function onSubmit(values: z.infer<typeof formSchema>): Promise<void> {
    const { name, email, password } = values;

    try {
      // const iconBase64 = toBase64(icon);

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.status === 400) {
        setError("This email is already registered.");
      } else if (res.status === 200) {
        setError("");
        form.reset();
        router.push("/login");
      } else {
        setError(`User registration failed: ${res.statusText}`);
      }
    } catch (error) {
      setError(`Error during registration: ${error}`);
    }
  }

  return (
    <Form {...form}>
      {error !== "" && <p className="mb-8 text-destructive">{error}</p>}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  required
                  type="text"
                  placeholder="Enter name"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  required
                  type="email"
                  placeholder="Enter email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  required
                  type="password"
                  placeholder="Enter password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="icon"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Icon</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  placeholder="Upload image"
                  {...iconFileRef}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <Button type="submit">Register</Button>
      </form>
    </Form>
  );
}
