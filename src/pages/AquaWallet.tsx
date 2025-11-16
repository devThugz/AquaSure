import React from 'react';
import { WalletIcon, ArrowUpIcon, ArrowDownIcon, CreditCardIcon } from 'lucide-react';
export function AquaWallet() {
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">AquaWallet</h2>
        <p className="text-gray-600 mt-1">
          Manage your digital wallet and transactions
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="rounded-full p-3 bg-teal-100">
              <WalletIcon className="h-6 w-6 text-teal-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Balance</h3>
              <p className="text-2xl font-semibold text-teal-600">₱1,250</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="rounded-full p-3 bg-green-100">
              <ArrowDownIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Income</h3>
              <p className="text-2xl font-semibold text-green-600">₱3,450</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="rounded-full p-3 bg-red-100">
              <ArrowUpIcon className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Expenses</h3>
              <p className="text-2xl font-semibold text-red-600">₱2,200</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">
            Recent Transactions
          </h3>
          <button className="text-teal-600 hover:text-teal-800 text-sm font-medium">
            View All
          </button>
        </div>
        <p className="text-gray-600">Transaction history coming soon...</p>
      </div>
    </div>;
}