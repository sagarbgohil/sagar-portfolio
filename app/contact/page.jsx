"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();
  const messageValue = watch("message") || "";

  const [response, setResponse] = useState("");

  const handleFormSubmit = async (data) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.message) {
      setResponse(result.message);
      reset();
      setTimeout(() => {
        setResponse("");
      }, 5000);
    }
  };

  return (
    <section className="min-h-[80vh] flex flex-col items-center py-12 xl:py-0 pt-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.5, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl w-full max-w-3xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I am always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              {isSubmitSuccessful && (
                <p className="text-center text-green-400 mt-4">{response}</p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex h-full flex-col gap-2">
                  <Input
                    placeholder="First Name"
                    {...register("firstName", {
                      required: "First name is required",
                      minLength: {
                        value: 4,
                        message: "Min 5 characters",
                      },
                      maxLength: {
                        value: 50,
                        message: "Max 50 characters",
                      },
                    })}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div className="flex h-full flex-col gap-2">
                  <Input
                    placeholder="Last Name"
                    {...register("lastName", {
                      required: "Last name is required",
                      minLength: {
                        value: 5,
                        message: "Min 5 characters",
                      },
                      maxLength: {
                        value: 50,
                        message: "Max 50 characters",
                      },
                    })}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>

                <div className="flex h-full flex-col gap-2">
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
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="flex h-full flex-col gap-2">
                  <Input
                    placeholder="Phone Number"
                    {...register("phone", {
                      required: "Phone is required",
                      pattern: {
                        value: /^[0-9]{12}$/,
                        message: "Phone must be 12 digits",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex h-full flex-col gap-2">
                <Textarea
                  placeholder="Type your message here..."
                  className="h-[200px]"
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 50,
                      message: "Min 50 characters",
                    },
                    maxLength: {
                      value: 1000,
                      message: "Max 1000 characters",
                    },
                  })}
                />
                <div className="text-sm text-white/60 text-right">
                  <span>{messageValue.length} / 1000 characters</span>
                </div>
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex h-full flex-col gap-2">
                <Button
                  type="submit"
                  size="md"
                  className="w-[80%] md:w-[40%] mx-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
