"use client";

import { useFormContext } from '@/context/FormContext';
import { useMutation } from '@tanstack/react-query';

export default function Summary() {
  const { formData, setCurrentStep } = useFormContext();
  const { personalInfo, address, account } = formData;

  const submitMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return data;
    },
    onSuccess: (data) => {
      console.log('Form submitted successfully:', data);
      // You can add success notification here
    },
  });

  const handleSubmit = () => {
    submitMutation.mutate(formData);
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
          Personal Information
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Label</p>
            <p className="text-gray-800 dark:text-white">Value</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Full Name</p>
            <p className="text-gray-900 dark:text-white">{personalInfo?.fullName}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
            <p className="text-gray-900 dark:text-white">{personalInfo?.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Phone Number</p>
            <p className="text-gray-900 dark:text-white">{personalInfo?.phoneNumber}</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Address Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Street Address</p>
            <p className="text-gray-900 dark:text-white">{address?.streetAddress}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">City</p>
            <p className="text-gray-900 dark:text-white">{address?.city}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">ZIP Code</p>
            <p className="text-gray-900 dark:text-white">{address?.zipCode}</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Account Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Username</p>
            <p className="text-gray-900 dark:text-white">{account?.username}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => setCurrentStep(3)}
          className="bg-gray-100 hover:bg-gray-200 
            dark:bg-gray-700 dark:hover:bg-gray-600 
            text-gray-700 dark:text-gray-200 
            px-4 py-2 rounded-md transition-colors"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitMutation.isPending}
          className="bg-blue-500 hover:bg-blue-600 
            dark:bg-blue-600 dark:hover:bg-blue-700 
            text-white px-4 py-2 rounded-md 
            transition-colors disabled:opacity-50"
        >
          {submitMutation.isPending ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  );
}