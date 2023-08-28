"use client";
import { createContext, useContext, useState } from "react";

type FormContextType = {
  step: number;
  nextStep: () => void;
};

type Props = {
  children: React.ReactNode;
};

const FormContext = createContext<FormContextType>({
  step: 1,
  nextStep: () => {},
});

export function FormProvider({ children }: Props) {
  const [step, setStep] = useState(1);

  function nextStep() {
    setStep((prevStep) => prevStep + 1);
  }

  return (
    <FormContext.Provider value={{ nextStep, step }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormState() {
  return useContext(FormContext);
}
