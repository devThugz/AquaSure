import React from 'react';
import { BookOpenIcon, PlusIcon, CalendarIcon } from 'lucide-react';
export function DigitalLogbook() {
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Digital Logbook</h2>
          <p className="text-gray-600 mt-1">
            Record your fishing activities and catches
          </p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none">
          <PlusIcon className="h-4 w-4 mr-2" />
          New Entry
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="rounded-full p-3 bg-teal-100">
              <BookOpenIcon className="h-6 w-6 text-teal-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">
                Total Entries
              </h3>
              <p className="text-2xl font-semibold text-teal-600">48</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="rounded-full p-3 bg-blue-100">
              <CalendarIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">This Month</h3>
              <p className="text-2xl font-semibold text-blue-600">12</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="rounded-full p-3 bg-green-100">
              <BookOpenIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Last Entry</h3>
              <p className="text-sm text-gray-600">2 days ago</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Recent Entries
        </h3>
        <p className="text-gray-600">Logbook entries will appear here...</p>
      </div>
    </div>;
}