import React, { Component } from 'react';
import { Users2Icon, CloudLightningIcon, ShoppingCartIcon, IdCardIcon } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
export const AdminHome: React.FC = () => {
  const {
    user
  } = useAuth();
  const {
    darkMode
  } = useTheme();
  // Stat Card Component matching Fisher User style
  const StatCard = ({
    icon: Icon,
    title,
    value,
    change,
    color
  }) => <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-5 sm:p-6 rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
      <div className="flex items-center">
        <div className={`rounded-full p-3 sm:p-4 ${color}`}>
          <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
        </div>
        <div className="ml-4 min-w-0 flex-1">
          <h3 className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'} truncate mb-1`}>
            {title}
          </h3>
          <p className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'} truncate`}>
            {value}
          </p>
          <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-600'} mt-1 truncate`}>
            {change}
          </p>
        </div>
      </div>
    </div>;
  return <div>
      <div className="mb-6">
        <h1 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          Admin Dashboard
        </h1>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          {user?.location ? `${user.location} Local Government Unit` : 'Local Government Unit'}
        </p>
      </div>
      {/* 1×4 Desktop, 2×2 Mobile Grid Layout - Matching Fisher User Style */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
        <StatCard icon={Users2Icon} title="Fisher Folk Users" value="843" change="+12 this week" color="bg-gradient-to-r from-blue-500 to-blue-600" />
        <StatCard icon={CloudLightningIcon} title="Active Weather Alerts" value="2" change="High priority" color="bg-gradient-to-r from-amber-500 to-amber-600" />
        <StatCard icon={ShoppingCartIcon} title="Market Transactions" value="156" change="Today" color="bg-gradient-to-r from-green-500 to-green-600" />
        <StatCard icon={IdCardIcon} title="Pending Verifications" value="24" change="Needs review" color="bg-gradient-to-r from-purple-500 to-purple-600" />
      </div>
      {/* Additional Content Sections */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 sm:p-6 rounded-2xl border transition-colors duration-300`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-base sm:text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Recent Registrations
            </h2>
            <button className={`text-xs sm:text-sm ${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-blue-600 hover:text-blue-800'}`}>
              View all
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className={`min-w-full divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
              <thead className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                <tr>
                  <th scope="col" className={`px-4 sm:px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                    User
                  </th>
                  <th scope="col" className={`px-4 sm:px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                    Location
                  </th>
                  <th scope="col" className={`px-4 sm:px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                    Status
                  </th>
                  <th scope="col" className={`px-4 sm:px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                    Joined
                  </th>
                </tr>
              </thead>
              <tbody className={`${darkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}`}>
                {[{
                name: 'Juan Dela Cruz',
                location: 'Barangay San Pedro',
                status: 'Verified',
                joined: 'Today'
              }, {
                name: 'Maria Reyes',
                location: 'Barangay Santa Ana',
                status: 'Pending',
                joined: 'Yesterday'
              }, {
                name: 'Pedro Santos',
                location: 'Barangay San Juan',
                status: 'Verified',
                joined: '2 days ago'
              }, {
                name: 'Ana Lim',
                location: 'Barangay Santo Niño',
                status: 'Pending',
                joined: '3 days ago'
              }].map((user, index) => <tr key={index} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8 flex-shrink-0">
                          <img className="h-8 w-8 rounded-full" src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${index + 20}.jpg`} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                            {user.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={`px-4 sm:px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {user.location}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === 'Verified' ? darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800' : darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800'}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className={`px-4 sm:px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {user.joined}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 sm:p-6 rounded-2xl border transition-colors duration-300`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-base sm:text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Weather Alerts
            </h2>
            <button className={`text-xs sm:text-sm ${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-blue-600 hover:text-blue-800'}`}>
              Manage alerts
            </button>
          </div>
          <div className="space-y-4">
            <div className={`p-4 ${darkMode ? 'bg-red-900/20 border border-red-900/50' : 'bg-red-50 border border-red-200'} rounded-xl`}>
              <div className="flex">
                <div className="flex-shrink-0">
                  <CloudLightningIcon className={`h-5 w-5 ${darkMode ? 'text-red-400' : 'text-red-700'}`} />
                </div>
                <div className="ml-3 flex-1">
                  <h3 className={`text-sm font-medium ${darkMode ? 'text-red-400' : 'text-red-800'}`}>
                    Storm Warning
                  </h3>
                  <div className={`mt-1 text-sm ${darkMode ? 'text-red-300' : 'text-red-700'}`}>
                    <p>
                      Strong storm approaching from the east. Expected to hit
                      coastal areas in 6-8 hours.
                    </p>
                  </div>
                  <div className="mt-2">
                    <div className="flex flex-wrap gap-2">
                      <button className={`${darkMode ? 'bg-red-900/50 text-red-300 hover:bg-red-900/70' : 'bg-red-100 text-red-800 hover:bg-red-200'} px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors`}>
                        Send Alert to All
                      </button>
                      <button className={`${darkMode ? 'bg-gray-800 text-red-300 border border-red-900/50 hover:bg-gray-700' : 'bg-white text-red-800 border border-red-300 hover:bg-red-50'} px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors`}>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`p-4 ${darkMode ? 'bg-yellow-900/20 border border-yellow-900/50' : 'bg-yellow-50 border border-yellow-200'} rounded-xl`}>
              <div className="flex">
                <div className="flex-shrink-0">
                  <CloudLightningIcon className={`h-5 w-5 ${darkMode ? 'text-yellow-400' : 'text-yellow-700'}`} />
                </div>
                <div className="ml-3 flex-1">
                  <h3 className={`text-sm font-medium ${darkMode ? 'text-yellow-400' : 'text-yellow-800'}`}>
                    High Waves Alert
                  </h3>
                  <div className={`mt-1 text-sm ${darkMode ? 'text-yellow-300' : 'text-yellow-700'}`}>
                    <p>
                      Wave heights expected to reach 2-3 meters in the next 24
                      hours. Small boats advised to stay ashore.
                    </p>
                  </div>
                  <div className="mt-2">
                    <div className="flex flex-wrap gap-2">
                      <button className={`${darkMode ? 'bg-yellow-900/50 text-yellow-300 hover:bg-yellow-900/70' : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'} px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors`}>
                        Send Alert to All
                      </button>
                      <button className={`${darkMode ? 'bg-gray-800 text-yellow-300 border border-yellow-900/50 hover:bg-gray-700' : 'bg-white text-yellow-800 border border-yellow-300 hover:bg-yellow-50'} px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors`}>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`p-4 ${darkMode ? 'bg-green-900/20 border border-green-900/50' : 'bg-green-50 border border-green-200'} rounded-xl`}>
              <div className="flex">
                <div className="flex-shrink-0">
                  <CloudLightningIcon className={`h-5 w-5 ${darkMode ? 'text-green-400' : 'text-green-700'}`} />
                </div>
                <div className="ml-3 flex-1">
                  <h3 className={`text-sm font-medium ${darkMode ? 'text-green-400' : 'text-green-800'}`}>
                    Favorable Fishing Conditions
                  </h3>
                  <div className={`mt-1 text-sm ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
                    <p>
                      Clear skies and calm seas expected for the next 48 hours.
                      Good conditions for fishing activities.
                    </p>
                  </div>
                  <div className="mt-2">
                    <button className={`${darkMode ? 'bg-gray-800 text-green-300 border border-green-900/50 hover:bg-gray-700' : 'bg-white text-green-800 border border-green-300 hover:bg-green-50'} px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors`}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Insurance Status Overview */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 sm:p-6 rounded-2xl border transition-colors duration-300`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-base sm:text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            Insurance Status Overview
          </h2>
          <button className={`text-xs sm:text-sm ${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-blue-600 hover:text-blue-800'}`}>
            View full report
          </button>
        </div>
        {/* 1×4 Desktop, 2×2 Mobile Grid for Insurance Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
          {[{
          label: 'Total Insured',
          value: '685',
          percent: '81%',
          color: darkMode ? 'bg-blue-600/70' : 'bg-blue-600'
        }, {
          label: 'Active Coverage',
          value: '592',
          percent: '70%',
          color: darkMode ? 'bg-green-500/70' : 'bg-green-500'
        }, {
          label: 'At Risk',
          value: '93',
          percent: '11%',
          color: darkMode ? 'bg-yellow-500/70' : 'bg-yellow-500'
        }, {
          label: 'Uninsured',
          value: '158',
          percent: '19%',
          color: darkMode ? 'bg-red-500/70' : 'bg-red-500'
        }].map((stat, index) => <div key={index} className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} p-4 rounded-xl`}>
              <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                {stat.label}
              </h3>
              <div className="mt-1">
                <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {stat.value}
                </p>
                <div className="mt-2">
                  <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2.5`}>
                    <div className={`${stat.color} h-2.5 rounded-full`} style={{
                  width: stat.percent
                }}></div>
                  </div>
                  <p className={`mt-1 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {stat.percent} of registered fishermen
                  </p>
                </div>
              </div>
            </div>)}
        </div>
        <div className={`h-64 ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'} rounded-xl flex items-center justify-center`}>
          <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Insurance status trends chart would go here
          </span>
        </div>
      </div>
    </div>;
};