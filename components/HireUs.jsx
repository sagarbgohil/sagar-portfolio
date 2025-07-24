"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HireUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const messageValue = watch("message") || "";
  const [response, setResponse] = useState("");
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL;

  const handleFormSubmit = async (data) => {
    const res = await fetch(`${apiUrl}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.message) {
      setResponse(result.message);
      reset();
      setTimeout(() => setResponse(""), 5000);
    }
  };

  return (
    <section id="hire-us" className="max-w-5xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl font-bold text-white">#Hire Us</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          I’m always open to discussing product design work, partnerships, or
          freelance opportunities.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="space-y-6 bg-white/5 p-8 rounded-xl shadow-lg border border-white/10"
      >
        {isSubmitSuccessful && (
          <p className="text-center text-green-400">{response}</p>
        )}

        {/* Grid Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <Input
              placeholder="First Name"
              {...register("firstName", {
                required: "First name is required",
                minLength: { value: 2, message: "Min 2 characters" },
                maxLength: { value: 50, message: "Max 50 characters" },
              })}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Input
              placeholder="Last Name"
              {...register("lastName", {
                required: "Last name is required",
                minLength: { value: 2, message: "Min 2 characters" },
                maxLength: { value: 50, message: "Max 50 characters" },
              })}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Input
              placeholder="Email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Input
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[0-9]{10,12}$/,
                  message: "Phone must be 10–12 digits",
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Service Select */}
        <div className="flex flex-col gap-2">
          <Controller
            name="service"
            control={control}
            rules={{ required: "Service is required" }}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                <SelectTrigger className="w-full" aria-label="Select a service">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    <SelectItem value="Backend Development">
                      Backend Development
                    </SelectItem>
                    <SelectItem value="Frontend Development">
                      Frontend Development
                    </SelectItem>
                    <SelectItem value="Web App Development">
                      Web App Development
                    </SelectItem>
                    <SelectItem value="Bug Fixing">Bug Fixing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          {errors.service && (
            <p className="text-red-500 text-sm">{errors.service.message}</p>
          )}
        </div>

        {/* Message Box */}
        <div className="flex flex-col gap-2">
          <Textarea
            placeholder="Type your message here..."
            className="h-[200px]"
            {...register("message", {
              required: "Message is required",
              minLength: { value: 50, message: "Min 50 characters" },
              maxLength: { value: 1000, message: "Max 1000 characters" },
            })}
          />
          <div className="text-sm text-white/60 text-right">
            {messageValue.length} / 1000 characters
          </div>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center pt-2">
          <Button
            type="submit"
            size="md"
            className="w-[80%] md:w-[40%]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default HireUs;
