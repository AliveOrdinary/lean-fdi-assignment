"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useFormState } from "../FormContext";

type FormValues = {
  jobTitle: string;
  company: string;
  experience: {
    year: string;
    month: string;
  };
  bio: string;
};

const MentorTwo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isDirty },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      jobTitle: "",
      company: "",
      experience: {
        year: "",
        month: "",
      },
      bio: "",
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
        jobTitle: "",
        company: "",
        experience: {
          year: "",
          month: "",
        },
        bio: "",
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
            ✓
          </span>
          <span className="min-w-[220px] h-1 bg-black"></span>
          <span className="w-8 h-8 rounded-full bg-primary text-white flex justify-center items-center">
            2
          </span>
          <span className="min-w-[220px] h-1 bg-black"></span>
          <span className="w-8 h-8 rounded-full bg-gray-400 flex justify-center items-center">
            3
          </span>
        </div>
        {isDirty ? null : (
          <div className="flex flex-col justify-center items-center gap-6 transition-all duration-500 ease-in-out">
            <div className="flex justify-center items-center gap-4 border-2  border-gray-400 px-3 py-2 cursor-pointer">
              <div className="text-base font-semibold">
                Fetch it from LinkedIn
              </div>
              <Image
                src="/assets/linkedin2.svg"
                alt="linkedin"
                width={24}
                height={24}
              />
            </div>
            <span className="text-lg self-center">or</span>
          </div>
        )}
        <div className="flex justify-center items-center gap-8">
          <div className="w-20 h-20 rounded-full bg-gray-400"></div>
          <label
            htmlFor="profile"
            className=" flex justify-center items-center text-base font-semibold border-2  border-gray-400 px-3 py-2 cursor-pointer gap-4"
          >
            <Image
              src="/assets/upload.svg"
              alt="linkedin"
              width={20}
              height={20}
            />
            Upload Photo
          </label>
          <input type="file" id="profile" className="hidden" />
        </div>
        <form
          className="w-full flex flex-col gap-2"
          onSubmit={handleSubmit(onHandleSubmit)}
        >
          <label htmlFor="job-title" className="text-lg font-bold">
            Job title
          </label>
          <input
            type="text"
            id="job-title"
            className="input-field"
            placeholder="Eg: Software Engineer,Grapic Designer"
            {...register("jobTitle")}
          />
          <label htmlFor="company" className="text-lg font-bold">
            Company
          </label>
          <input
            type="text"
            id="company"
            className="input-field"
            placeholder="Eg: Google,Meta"
            {...register("company")}
          />
          <label htmlFor="experience" className="text-lg font-bold">
            Experience
          </label>
          <div className="flex justify-center items-center gap-16">
            <select
              id="experience.year"
              {...register("experience.year")}
              className="input-field "
            >
              <option disabled value="">
                Years
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <select
              id="experience.month"
              {...register("experience.month")}
              className="input-field"
            >
              <option disabled value="">
                Months
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <label htmlFor="bio" className="text-lg font-bold">
            Bio
          </label>
          <textarea
            id="bio"
            className="input-field h-32"
            placeholder="Write briefly about yourself"
            {...register("bio")}
          ></textarea>
          <div className="self-end">
            <button className="btn-primary mt-4">Next</button>
          </div>
        </form>
      </div>
      <div className="self-start">
        <Image
          src="/assets/mentor2.png"
          alt="rocket"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default MentorTwo;
