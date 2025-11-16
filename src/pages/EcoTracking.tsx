import React from 'react';
import { LeafIcon, TrendingUpIcon, AlertCircleIcon } from 'lucide-react';
export function EcoTracking() {
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Eco-Tracking</h2>
        <p className="text-gray-600 mt-1">
          Monitor your environmental impact and sustainability
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="rounded-full p-3 bg-green-100">
              <LeafIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Eco Score</h3>
              <p className="text-2xl font-semibold text-green-600">85/100</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="rounded-full p-3 bg-blue-100">
              <TrendingUpIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Improvement</h3>
              <p className="text-2xl font-semibold text-blue-600">+12%</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="rounded-full p-3 bg-amber-100">
              <AlertCircleIcon className="h-6 w-6 text-amber-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Alerts</h3>
              <p className="text-2xl font-semibold text-amber-600">2</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Sustainability Metrics
        </h3>
        <p className="text-gray-600">
          Eco-tracking features and metrics coming soon...
        </p>
      </div>
    </div>;
}