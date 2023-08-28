"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useFormState } from "../FormContext";
import Select from "react-select";
import Link from "next/link";

const relevantOptions = [
  { value: "Design", label: "Design" },
  { value: "Product Design", label: "Product Design" },
  { value: "UI/UX Design", label: "UI/UX Design" },
  { value: "Graphic Design", label: "Graphic Design" },
  { value: "Web Design", label: "Web Design" },
  { value: "Illustration", label: "Illustration" },
  { value: "Animation", label: "Animation" },
  { value: "Motion Design", label: "Motion Design" },
  { value: "Frontend Development", label: "Frontend Development" },
  { value: "Backend Development", label: "Backend Development" },
  { value: "Fullstack Development", label: "Fullstack Development" },
  { value: "Mobile Development", label: "Mobile Development" },
  { value: "Game Development", label: "Game Development" },
  { value: "Data Science", label: "Data Science" },
  { value: "Data Analysis", label: "Data Analysis" },
];

const toolsOptions = [
  { value: "Figma", label: "Figma" },
  { value: "Adobe XD", label: "Adobe XD" },
  { value: "Sketch", label: "Sketch" },
  { value: "Photoshop", label: "Photoshop" },
  { value: "Illustrator", label: "Illustrator" },
  { value: "After Effects", label: "After Effects" },
  { value: "Premiere Pro", label: "Premiere Pro" },
  { value: "InDesign", label: "InDesign" },
  { value: "InVision", label: "InVision" },
  { value: "Zeplin", label: "Zeplin" },
  { value: "Marvel", label: "Marvel" },
  { value: "Framer", label: "Framer" },
  { value: "Principle", label: "Principle" },
  { value: "ProtoPie", label: "ProtoPie" },
  { value: "Origami Studio", label: "Origami Studio" },
];

const skillsOptions = [
  { value: "User Research", label: "User Research" },
  { value: "User Testing", label: "User Testing" },
  { value: "Wireframing", label: "Wireframing" },
  { value: "Prototyping", label: "Prototyping" },
  { value: "Interaction Design", label: "Interaction Design" },
  { value: "Visual Design", label: "Visual Design" },
  { value: "Motion Design", label: "Motion Design" },
  { value: "Design Systems", label: "Design Systems" },
  { value: "Design Thinking", label: "Design Thinking" },
  { value: "Design Sprint", label: "Design Sprint" },
];

const targetMenteesOptions = [
  { value: "Beginner", label: "Beginner" },
  { value: "Intermediate", label: "Intermediate" },
  { value: "Advanced", label: "Advanced" },
  { value: "Expert", label: "Expert" },
  { value: "No preference", label: "No preference" },
  { value: "All", label: "All" },
];

// /crate a colorStyle to change the border,padding and background color of the select component
const colourStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: "#FFFFFF",
    border: "2px solid #c5c5c5",
    borderRadius: "8px",
    padding: "0.5rem",
    width: "100%",
  }),
};

type FormValues = {
  primaryExpertise: string;
  secondaryExpertise?: string;
  relevantDisciplines: string[];
  tools: string[];
  skills: string[];
  targetMentees: string;
};

const MentorThree = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isDirty },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      primaryExpertise: "",
      secondaryExpertise: "",
      relevantDisciplines: [],
      tools: [],
      skills: [],
      targetMentees: "",
    },
  });

  const [showSecondaryExpertise, setShowSecondaryExpertise] =
    React.useState<boolean>(false);

  const { step, nextStep } = useFormState();
  const onHandleSubmit = (data: FormValues) => {
    console.log(data);
    nextStep();
    console.log(step);
  };

  const onHandleSecondaryExpertise = () => {
    setShowSecondaryExpertise(true);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        primaryExpertise: "",
        secondaryExpertise: "",
        relevantDisciplines: [],
        tools: [],
        skills: [],
        targetMentees: "",
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
            ✓
          </span>
          <span className="min-w-[220px] h-1 bg-black"></span>
          <span className="w-8 h-8 rounded-full bg-primary text-white flex justify-center items-center">
            3
          </span>
        </div>
        <form
          className="w-full flex flex-col gap-2"
          onSubmit={handleSubmit(onHandleSubmit)}
        >
          <label htmlFor="experience" className="text-lg font-bold">
            Primary Expertise
          </label>
          <select
            id="primary-expertise"
            {...register("primaryExpertise", { required: true })}
            className="input-field "
          >
            <option disabled value="">
              Eg: Design, Product Design
            </option>
            <option value="Design">Design</option>
            <option value="Product Design">Product Design</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Web Design">Web Design</option>
            <option value="Illustration">Illustration</option>
            <option value="Animation">Animation</option>
            <option value="Motion Design">Motion Design</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="Fullstack Development">Fullstack Development</option>
            <option value="Mobile Development">Mobile Development</option>
            <option value="Game Development">Game Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Data Analysis">Data Analysis</option>
          </select>

          {showSecondaryExpertise ? (
            <>
              <label htmlFor="experience" className="text-lg font-bold">
                Secondary Expertise
              </label>
              <select
                id="primary-expertise"
                {...register("primaryExpertise")}
                className="input-field "
              >
                <option disabled value="">
                  Eg: Design, Product Design
                </option>
                <option value="Design">Design</option>
                <option value="Product Design">Product Design</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Web Design">Web Design</option>
                <option value="Illustration">Illustration</option>
                <option value="Animation">Animation</option>
                <option value="Motion Design">Motion Design</option>
                <option value="Frontend Development">
                  Frontend Development
                </option>
                <option value="Backend Development">Backend Development</option>
                <option value="Fullstack Development">
                  Fullstack Development
                </option>
                <option value="Mobile Development">Mobile Development</option>
                <option value="Game Development">Game Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Data Analysis">Data Analysis</option>
              </select>
            </>
          ) : (
            <>
              <div
                className="flex justify-center items-center border-2 border-gray-400 px-4 py-2 rounded-lg w-full mt-8 gap-20 cursor-pointer"
                onClick={onHandleSecondaryExpertise}
              >
                <span className="text-2xl font-bold">+</span>
                <div className="text-lg font-bold">Add secondary expertise</div>
              </div>
            </>
          )}

          <label htmlFor="experience" className="text-lg font-bold">
            Relevant Disciplines
          </label>
          <Select
            styles={colourStyles}
            options={relevantOptions}
            isMulti
            required
          />
          <label htmlFor="experience" className="text-lg font-bold">
            Tools you have experience with
          </label>
          <Select
            styles={colourStyles}
            options={toolsOptions}
            isMulti
            required
          />
          <label htmlFor="experience" className="text-lg font-bold">
            Skills you have experience with
          </label>
          <Select
            styles={colourStyles}
            options={skillsOptions}
            isMulti
            required
          />
          <label htmlFor="experience" className="text-lg font-bold">
            Your target mentees
          </label>
          <Select
            styles={colourStyles}
            options={targetMenteesOptions}
            isMulti
            required
          />

          <div className="self-center">
            <button className="btn-primary mt-4">
              <Link href={"/"}> Complete </Link>
            </button>
          </div>
        </form>
      </div>
      <div className="self-start">
        <Image
          src="/assets/mentor3.png"
          alt="rocket"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default MentorThree;
