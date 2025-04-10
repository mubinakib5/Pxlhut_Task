"use client";

import { useFormContext } from '@/context/FormContext';

export default function Summary() {
  const { formData, setCurrentStep } = useFormContext();

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Summary</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm mr-3">1</span>
            Personal Information
          </h3>
          <div className="bg-white rounded-lg border border-gray-200 p-5 ml-11">
            <dl className="space-y-3">
              <div className="flex">
                <dt className="w-24 flex-shrink-0 text-gray-500">Name:</dt>
                <dd className="text-gray-900 font-medium">{formData.personalInfo?.fullName}</dd>
              </div>
              <div className="flex">
                <dt className="w-24 flex-shrink-0 text-gray-500">Email:</dt>
                <dd className="text-gray-900 font-medium">{formData.personalInfo?.email}</dd>
              </div>
              <div className="flex">
                <dt className="w-24 flex-shrink-0 text-gray-500">Phone:</dt>
                <dd className="text-gray-900 font-medium">{formData.personalInfo?.phoneNumber}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm mr-3">2</span>
            Address Details
          </h3>
          <div className="bg-white rounded-lg border border-gray-200 p-5 ml-11">
            <dl className="space-y-3">
              <div className="flex">
                <dt className="w-24 flex-shrink-0 text-gray-500">Street:</dt>
                <dd className="text-gray-900 font-medium">{formData.address?.streetAddress}</dd>
              </div>
              <div className="flex">
                <dt className="w-24 flex-shrink-0 text-gray-500">City:</dt>
                <dd className="text-gray-900 font-medium">{formData.address?.city}</dd>
              </div>
              <div className="flex">
                <dt className="w-24 flex-shrink-0 text-gray-500">ZIP:</dt>
                <dd className="text-gray-900 font-medium">{formData.address?.zipCode}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm mr-3">3</span>
            Account Information
          </h3>
          <div className="bg-white rounded-lg border border-gray-200 p-5 ml-11">
            <dl className="space-y-3">
              <div className="flex">
                <dt className="w-24 flex-shrink-0 text-gray-500">Username:</dt>
                <dd className="text-gray-900 font-medium">{formData.account?.username}</dd>
              </div>
              <div className="flex">
                <dt className="w-24 flex-shrink-0 text-gray-500">Password:</dt>
                <dd className="text-gray-900 font-medium">********</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={() => setCurrentStep(3)}
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2.5 rounded-md transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => console.log('Form submitted:', formData)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-md transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Confirm & Submit
        </button>
      </div>
    </div>
  );
}