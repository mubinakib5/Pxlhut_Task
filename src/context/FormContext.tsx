"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import { PersonalInfoData, AddressData, AccountData } from '@/lib/schema';

type FormData = {
  personalInfo: PersonalInfoData;
  address: AddressData;
  account: AccountData;
};

type FormContextType = {
  formData: Partial<FormData>;
  setFormData: (data: Partial<FormData>) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
}