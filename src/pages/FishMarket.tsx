import React from 'react';
import { ShoppingCartIcon, TrendingUpIcon, DollarSignIcon } from 'lucide-react';
export function FishMarket() {
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Fish Market</h2>
        <p className="text-gray-600 mt-1">
          Buy and sell your catch at the best prices
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="rounded-full p-3 bg-green-100">
              <DollarSignIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">
                Today's Earnings
              </h3>
              <p className="text-2xl font-semibold text-green-600">₱2,450</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="rounded-full p-3 bg-blue-100">
              <ShoppingCartIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">
                Active Listings
              </h3>
              <p className="text-2xl font-semibold text-blue-600">5</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="rounded-full p-3 bg-teal-100">
              <TrendingUpIcon className="h-6 w-6 text-teal-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">
                Market Trend
              </h3>
              <p className="text-2xl font-semibold text-teal-600">+12%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Market Features
        </h3>
        <p className="text-gray-600">
          Fish marketplace features coming soon...
        </p>
      </div>
    </div>;
}