import React from 'react';
import { PiggyBankIcon, TrendingUpIcon, BookOpenIcon } from 'lucide-react';
export function FinancialLiteracy() {
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Financial Literacy</h2>
        <p className="text-gray-600 mt-1">
          Learn to manage your finances better
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="rounded-full p-3 bg-green-100">
              <PiggyBankIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">
                Savings Goal
              </h3>
              <p className="text-2xl font-semibold text-green-600">₱10,000</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="rounded-full p-3 bg-blue-100">
              <TrendingUpIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Progress</h3>
              <p className="text-2xl font-semibold text-blue-600">65%</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="rounded-full p-3 bg-teal-100">
              <BookOpenIcon className="h-6 w-6 text-teal-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">
                Courses Completed
              </h3>
              <p className="text-2xl font-semibold text-teal-600">3</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Financial Education
        </h3>
        <p className="text-gray-600">
          Financial literacy courses and tools coming soon...
        </p>
      </div>
    </div>;
}