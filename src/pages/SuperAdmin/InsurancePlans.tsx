import React from 'react';
export const InsurancePlans: React.FC = () => {
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Insurance Plans</h1>
        <p className="text-sm text-gray-500">
          Manage and configure insurance plans for Fisher Folk
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium text-gray-900">Current Plans</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Create New Plan
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[{
          name: 'Basic Protection',
          price: '₱50/month',
          coverage: '₱20,000',
          benefits: ['Accident Coverage', 'Basic Health Benefits', 'Minimal Boat Damage'],
          feedRequirement: '1 feed/day'
        }, {
          name: 'Standard Safety',
          price: '₱100/month',
          coverage: '₱50,000',
          benefits: ['Full Accident Coverage', 'Health Benefits', 'Boat Damage', 'Family Benefits'],
          feedRequirement: '2 feeds/day',
          recommended: true
        }, {
          name: 'Premium Security',
          price: '₱200/month',
          coverage: '₱100,000',
          benefits: ['Complete Coverage', 'Family Health Benefits', 'Full Boat Insurance', 'Livelihood Protection'],
          feedRequirement: '3 feeds/day'
        }].map((plan, index) => <div key={index} className={`border rounded-lg overflow-hidden ${plan.recommended ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-200'}`}>
              {plan.recommended && <div className="bg-blue-500 text-white text-center text-sm py-1">
                  Recommended
                </div>}
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-2xl font-semibold text-gray-900">
                    {plan.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Coverage: {plan.coverage}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Feed Requirement: {plan.feedRequirement}
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.benefits.map((benefit, i) => <li key={i} className="flex">
                      <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-2 text-sm text-gray-700">
                        {benefit}
                      </span>
                    </li>)}
                </ul>
                <div className="mt-6">
                  <button className="w-full bg-blue-50 text-blue-700 py-2 px-4 rounded border border-blue-200 hover:bg-blue-100">
                    Edit Plan
                  </button>
                </div>
              </div>
            </div>)}
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Insurance Analytics
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          {[{
          label: 'Total Insured',
          value: '8,245',
          change: '+5.3%'
        }, {
          label: 'Active Policies',
          value: '7,129',
          change: '+3.2%'
        }, {
          label: 'Claims This Month',
          value: '142',
          change: '-2.1%'
        }, {
          label: 'Avg. Claim Value',
          value: '₱15,420',
          change: '+1.8%'
        }].map((stat, index) => <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">
                {stat.label}
              </h3>
              <div className="mt-1 flex items-baseline">
                <p className="text-xl font-semibold text-gray-900">
                  {stat.value}
                </p>
                <p className={`ml-2 text-xs font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </p>
              </div>
            </div>)}
        </div>
        <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
          <span className="text-gray-500">
            Claims history chart would go here
          </span>
        </div>
      </div>
    </div>;
};