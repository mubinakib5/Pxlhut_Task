"use client";

import { useFormContext } from '@/context/FormContext';
import PersonalInfo from './steps/PersonalInfo';
import AddressDetails from './steps/AddressDetails';
import AccountSetup from './steps/AccountSetup';
import Summary from './steps/Summary';

export default function MultiStepForm() {
  const { currentStep } = useFormContext();

  return (
    <div className="bg-slate-50 rounded-lg shadow-lg p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {currentStep === 4 ? 'Summary' : `Step ${currentStep} of 3`}
        </h2>
        <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
          <div
            className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
      </div>

      {currentStep === 1 && <PersonalInfo />}
      {currentStep === 2 && <AddressDetails />}
      {currentStep === 3 && <AccountSetup />}
      {currentStep === 4 && <Summary />}
    </div>
  );
}