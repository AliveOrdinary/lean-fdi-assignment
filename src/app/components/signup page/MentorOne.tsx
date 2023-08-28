"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useFormState } from "../FormContext";

type FormValues = {
  fullName: string;
  email: string;
  password: string;
};

const MentorOne = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isDirty },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const { step, nextStep } = useFormState();
  const onHandleSubmit = (data: FormValues) => {
    console.log(data);
    nextStep();
    console.log(step);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        fullName: "",
        email: "",
        password: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="flex justify-center items-center w-full py-16 gap-16">
      <div className="flex flex-col justify-center items-center gap-8 w-5/12">
        <div className="text-4xl font-bold self-start">
          Grate choice to help people!
        </div>
        <div className="text-2xl font-semibold self-start">
          Tell us few details about you and your expertise..
        </div>
        <div className="flex justify-center items-center self-start">
          <span className="w-8 h-8 rounded-full bg-primary text-white flex justify-center items-center">
            1
          </span>
          <span className="min-w-[220px] h-1 bg-black"></span>
          <span className="w-8 h-8 rounded-full bg-gray-400 flex justify-center items-center">
            2
          </span>
          <span className="min-w-[220px] h-1 bg-black"></span>
          <span className="w-8 h-8 rounded-full bg-gray-400 flex justify-center items-center">
            3
          </span>
        </div>
        {isDirty ? null : (
          <div className="flex justify-center items-center gap-20 transition-all duration-500 ease-in-out">
            <div className="flex justify-center items-center gap-4 border-2 rounded-lg border-gray-400 px-6 py-4 cursor-pointer">
              <Image
                src="/assets/google.svg"
                alt="google"
                width={24}
                height={24}
              />
              <div className="text-base font-semibold">
                Continue with Google
              </div>
            </div>
            <span className="text-lg">or</span>
            <div className="flex justify-center items-center gap-4 border-2 rounded-lg border-gray-400 px-6 py-4 cursor-pointer">
              <Image
                src="/assets/linkedin2.svg"
                alt="linkedin"
                width={24}
                height={24}
              />
              <div className="text-base font-semibold">
                Continue with LinkedIn
              </div>
            </div>
          </div>
        )}
        <form
          className="w-full flex flex-col gap-2"
          onSubmit={handleSubmit(onHandleSubmit)}
        >
          <label htmlFor="full-name" className="text-lg font-bold">
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            className="input-field"
            {...register("fullName")}
          />
          <label htmlFor="email" className="text-lg font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input-field"
            {...register("email")}
          />
          <label htmlFor="password" className="text-lg font-bold">
            Chose a password
          </label>
          <input
            type="password"
            id="password"
            className="input-field"
            {...register("password")}
          />
          <div className="self-end">
            <button className="btn-primary mt-4">Next</button>
          </div>
        </form>
      </div>
      <div className="self-start">
        <Image
          src="/assets/mentor1.png"
          alt="rocket"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default MentorOne;
