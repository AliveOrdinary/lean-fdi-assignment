import { FormProvider } from "@/app/components/FormContext";
import { FormStep } from "@/app/components/FormStep";
import React from "react";

const SignUp = () => {
  return (
    <main className="flex flex-col justify-center items-center w-full">
      <FormProvider>
        <FormStep />
      </FormProvider>
    </main>
  );
};

export default SignUp;
