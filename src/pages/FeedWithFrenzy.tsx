import React from 'react';
import { FishIcon, TrendingUpIcon, BellIcon } from 'lucide-react';
export function FeedWithFrenzy() {
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Feed with Frenzy</h2>
        <p className="text-gray-600 mt-1">
          Maintain and upgrade your insurance coverage
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-6">
            <div className="rounded-full p-3 bg-teal-100">
              <FishIcon className="h-6 w-6 text-teal-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">
                Your Insurance Fish
              </h3>
              <p className="text-sm text-gray-500">
                Feed daily to maintain coverage
              </p>
            </div>
          </div>
          <div className="relative mb-6">
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-100 to-teal-100 flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Goldfish" className="w-48 h-48 object-contain" />
                </div>
                <div className="absolute top-0 right-0 bg-green-100 rounded-full p-2">
                  <div className="bg-green-500 rounded-full h-4 w-4"></div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h4 className="text-xl font-semibold text-gray-800">Goldie</h4>
              <p className="text-gray-600">Level 7 Insurance Fish</p>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-100">
                  Insurance Level
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-teal-600">
                  87%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-100">
              <div style={{
              width: '87%'
            }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"></div>
            </div>
          </div>
          <div className="mb-6">
            <h4 className="text-md font-semibold text-gray-800 mb-2">
              Fish Mood
            </h4>
            <div className="flex items-center space-x-1">
              <div className="w-1/5 h-1 rounded-full bg-teal-500"></div>
              <div className="w-1/5 h-1 rounded-full bg-teal-500"></div>
              <div className="w-1/5 h-1 rounded-full bg-teal-500"></div>
              <div className="w-1/5 h-1 rounded-full bg-teal-500"></div>
              <div className="w-1/5 h-1 rounded-full bg-gray-200"></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Your fish is happy! Keep feeding regularly.
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none">
              Feed Now
            </button>
            <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none">
              Set Auto-Feed
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Auto-Feed Subscription
            </h3>
            <div className="p-4 border border-gray-200 rounded-md">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-900">
                  Status
                </span>
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                  Inactive
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Enable auto-feed to automatically feed your fish daily using
                your balance.
              </p>
              <button className="w-full px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none">
                Enable Auto-Feed
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <div className="rounded-full p-2 bg-blue-100">
                <TrendingUpIcon className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="ml-2 text-lg font-medium text-gray-900">
                Smart Feeding Tips
              </h3>
            </div>
            <div className="p-4 bg-blue-50 rounded-md">
              <p className="text-sm text-blue-800 mb-3">
                <strong>Frenzy suggests:</strong> Feed your fish before 10 AM to
                optimize your insurance rewards.
              </p>
              <p className="text-sm text-blue-800">
                Consistent feeding at the same time each day increases your
                fish's happiness by 15%.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <div className="rounded-full p-2 bg-amber-100">
                <BellIcon className="h-5 w-5 text-amber-600" />
              </div>
              <h3 className="ml-2 text-lg font-medium text-gray-900">
                Feeding Reminders
              </h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <input id="daily" name="reminder" type="radio" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                <label htmlFor="daily" className="ml-3 block text-sm font-medium text-gray-700">
                  Daily reminder
                </label>
              </div>
              <div className="flex items-center">
                <input id="missed" name="reminder" type="radio" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                <label htmlFor="missed" className="ml-3 block text-sm font-medium text-gray-700">
                  Only when missed
                </label>
              </div>
              <div className="flex items-center">
                <input id="none" name="reminder" type="radio" defaultChecked className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                <label htmlFor="none" className="ml-3 block text-sm font-medium text-gray-700">
                  No reminders
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}