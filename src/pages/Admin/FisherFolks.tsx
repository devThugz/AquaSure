import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
export const FisherFolks: React.FC = () => {
  const {
    darkMode
  } = useTheme();
  return <div>
      <div className="mb-6">
        <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          Fisher Folk Management
        </h1>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Manage registered fishermen in your area
        </p>
      </div>
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
        <div className="mb-6 flex flex-wrap gap-4 justify-between">
          <div className="flex flex-wrap gap-4">
            <div className="relative flex-grow max-w-md">
              <input type="text" placeholder="Search by name, ID, or location..." className={`block w-full rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'} shadow-sm sm:text-sm`} />
            </div>
            <div className="w-full sm:w-auto">
              <select className={`block w-full rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:border-teal-500 focus:ring-teal-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'} shadow-sm sm:text-sm`}>
                <option>All Barangays</option>
                <option>Barangay San Pedro</option>
                <option>Barangay Santa Ana</option>
                <option>Barangay San Juan</option>
                <option>Barangay Santo Niño</option>
              </select>
            </div>
            <div className="w-full sm:w-auto">
              <select className={`block w-full rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:border-teal-500 focus:ring-teal-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'} shadow-sm sm:text-sm`}>
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Pending Verification</option>
              </select>
            </div>
          </div>
          <div>
            <button className={`px-4 py-2 ${darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-md transition-colors duration-300`}>
              Add Fisher Folk
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className={`min-w-full divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
            <thead className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
              <tr>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Name
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  ID
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Location
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Insurance
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Last Activity
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className={`${darkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}`}>
              {[{
              name: 'Juan Dela Cruz',
              id: 'FF-10045',
              location: 'Barangay San Pedro',
              insurance: 'Active',
              lastActivity: 'Today, 8:30 AM'
            }, {
              name: 'Maria Reyes',
              id: 'FF-10046',
              location: 'Barangay Santa Ana',
              insurance: 'Active',
              lastActivity: 'Yesterday'
            }, {
              name: 'Pedro Santos',
              id: 'FF-10032',
              location: 'Barangay San Juan',
              insurance: 'At Risk',
              lastActivity: '3 days ago'
            }, {
              name: 'Ana Lim',
              id: 'FF-10089',
              location: 'Barangay Santo Niño',
              insurance: 'Inactive',
              lastActivity: '1 week ago'
            }, {
              name: 'Roberto Cruz',
              id: 'FF-10054',
              location: 'Barangay San Pedro',
              insurance: 'Active',
              lastActivity: 'Today, 10:15 AM'
            }, {
              name: 'Elena Garcia',
              id: 'FF-10067',
              location: 'Barangay Santa Ana',
              insurance: 'Pending',
              lastActivity: 'Just now'
            }, {
              name: 'Carlos Tan',
              id: 'FF-10078',
              location: 'Barangay San Juan',
              insurance: 'Active',
              lastActivity: 'Today, 9:45 AM'
            }].map((fisher, index) => <tr key={index} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors duration-200`}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${index + 30}.jpg`} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                          {fisher.name}
                        </div>
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          fisher{index + 1}@example.com
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {fisher.id}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {fisher.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${fisher.insurance === 'Active' ? darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800' : fisher.insurance === 'At Risk' ? darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800' : fisher.insurance === 'Inactive' ? darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800' : darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>
                      {fisher.insurance}
                    </span>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {fisher.lastActivity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className={`${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-blue-600 hover:text-blue-900'} mr-3`}>
                      View
                    </button>
                    <button className={`${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-blue-600 hover:text-blue-900'} mr-3`}>
                      Edit
                    </button>
                    <button className={`${darkMode ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-900'}`}>
                      Deactivate
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
            Showing <span className="font-medium">1</span> to{' '}
            <span className="font-medium">7</span> of{' '}
            <span className="font-medium">843</span> fisher folk
          </div>
          <div className="flex space-x-2">
            <button className={`px-3 py-1 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} rounded-md text-sm font-medium transition-colors duration-300`}>
              Previous
            </button>
            <button className={`px-3 py-1 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} rounded-md text-sm font-medium transition-colors duration-300`}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>;
};