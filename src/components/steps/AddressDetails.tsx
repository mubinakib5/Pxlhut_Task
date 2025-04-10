"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { addressSchema, type AddressData } from '@/lib/schema';
import { useFormContext } from '@/context/FormContext';

export default function AddressDetails() {
  const { formData, setFormData, setCurrentStep } = useFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressData>({
    resolver: zodResolver(addressSchema),
    defaultValues: formData.address,
  });

  const onSubmit = (data: AddressData) => {
    setFormData({ ...formData, address: data });
    setCurrentStep(3);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-800 mb-2">
          Street Address
        </label>
        <input
          {...register('streetAddress')}
          className="mt-1 block w-full rounded-md border border-gray-200 bg-white text-gray-900 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
        />
        {errors.streetAddress && (
          <p className="mt-1 text-sm text-red-600">{errors.streetAddress.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-800 mb-2">
          City
        </label>
        <input
          {...register('city')}
          className="mt-1 block w-full rounded-md border border-gray-200 bg-white text-gray-900 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
        />
        {errors.city && (
          <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-800 mb-2">
          ZIP Code
        </label>
        <input
          {...register('zipCode')}
          className="mt-1 block w-full rounded-md border border-gray-200 bg-white text-gray-900 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
        />
        {errors.zipCode && (
          <p className="mt-1 text-sm text-red-600">{errors.zipCode.message}</p>
        )}
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => setCurrentStep(1)}
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-md transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Previous
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Next
        </button>
      </div>
    </form>
  );
}