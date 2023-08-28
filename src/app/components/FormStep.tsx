"use client";
import { useFormState } from "./FormContext";
import MentorOne from "./signup page/MentorOne";
import MentorThree from "./signup page/MentorThree";
import MentorTwo from "./signup page/MentorTwo";

export function FormStep() {
  const { step } = useFormState();

  switch (step) {
    case 1:
      return <MentorOne />;
    case 2:
      return <MentorTwo />;
    case 3:
      return <MentorThree />;
    default:
      return <MentorOne />;
  }
}
