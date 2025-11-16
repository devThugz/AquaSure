import React, { useState } from 'react';
import { ClipboardListIcon, UserIcon, ClockIcon, ActivityIcon, FilterIcon, SearchIcon, DownloadIcon, RefreshCwIcon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
export const ActivityLogs: React.FC = () => {
  const {
    darkMode
  } = useTheme();
  const [filterAction, setFilterAction] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState('week');
  const activityLogs = [{
    id: 'LOG-001245',
    user: 'Super Admin',
    userRole: 'super_admin',
    action: 'User Created',
    details: 'Created new LGU Admin account for Zamboanga City',
    ip: '192.168.1.1',
    timestamp: '2023-05-15T10:23:45'
  }, {
    id: 'LOG-001246',
    user: 'Maria Santos',
    userRole: 'admin',
    action: 'Verification Approved',
    details: 'Approved fisher verification for Juan Dela Cruz',
    ip: '192.168.1.2',
    timestamp: '2023-05-15T09:45:12'
  }, {
    id: 'LOG-001247',
    user: 'System',
    userRole: 'system',
    action: 'Database Backup',
    details: 'Automated daily database backup completed',
    ip: 'localhost',
    timestamp: '2023-05-15T02:00:00'
  }, {
    id: 'LOG-001248',
    user: 'Juan Dela Cruz',
    userRole: 'user',
    action: 'Insurance Claim',
    details: 'Submitted new insurance claim for boat damage',
    ip: '192.168.1.5',
    timestamp: '2023-05-14T14:32:21'
  }, {
    id: 'LOG-001249',
    user: 'Jose Reyes',
    userRole: 'admin',
    action: 'Announcement Created',
    details: 'Created new announcement for Davao region',
    ip: '192.168.1.3',
    timestamp: '2023-05-14T11:15:33'
  }, {
    id: 'LOG-001250',
    user: 'Super Admin',
    userRole: 'super_admin',
    action: 'System Settings Updated',
    details: 'Updated system notification settings',
    ip: '192.168.1.1',
    timestamp: '2023-05-14T10:05:18'
  }, {
    id: 'LOG-001251',
    user: 'System',
    userRole: 'system',
    action: 'API Error',
    details: 'Weather API connection timeout',
    ip: 'localhost',
    timestamp: '2023-05-14T08:45:02'
  }, {
    id: 'LOG-001252',
    user: 'Pedro Santos',
    userRole: 'user',
    action: 'Login Failed',
    details: 'Failed login attempt (3rd consecutive)',
    ip: '192.168.1.8',
    timestamp: '2023-05-13T19:23:45'
  }, {
    id: 'LOG-001253',
    user: 'Ana Lim',
    userRole: 'admin',
    action: 'User Updated',
    details: 'Updated profile information for fisher',
    ip: '192.168.1.4',
    timestamp: '2023-05-13T15:12:30'
  }, {
    id: 'LOG-001254',
    user: 'Roberto Cruz',
    userRole: 'user',
    action: 'Payment Processed',
    details: 'AquaBite purchase of ₱500',
    ip: '192.168.1.9',
    timestamp: '2023-05-13T11:45:22'
  }];
  const filteredLogs = activityLogs.filter(log => {
    const matchesAction = filterAction === 'all' || log.action.toLowerCase().includes(filterAction.toLowerCase());
    const matchesSearch = log.id.toLowerCase().includes(searchTerm.toLowerCase()) || log.user.toLowerCase().includes(searchTerm.toLowerCase()) || log.action.toLowerCase().includes(searchTerm.toLowerCase()) || log.details.toLowerCase().includes(searchTerm.toLowerCase());
    // Filter by date range
    const logDate = new Date(log.timestamp);
    const now = new Date();
    const daysDiff = Math.floor((now.getTime() - logDate.getTime()) / (1000 * 60 * 60 * 24));
    let isInDateRange = true;
    if (dateRange === 'today') {
      isInDateRange = daysDiff < 1;
    } else if (dateRange === 'week') {
      isInDateRange = daysDiff < 7;
    } else if (dateRange === 'month') {
      isInDateRange = daysDiff < 30;
    }
    return matchesAction && matchesSearch && isInDateRange;
  });
  const getUserRoleBadge = role => {
    switch (role) {
      case 'super_admin':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-800'}`}>
            Super Admin
          </span>;
      case 'admin':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>
            Admin
          </span>;
      case 'user':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
            Fisher
          </span>;
      case 'system':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-gray-900/30 text-gray-400' : 'bg-gray-100 text-gray-800'}`}>
            System
          </span>;
      default:
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-gray-900/30 text-gray-400' : 'bg-gray-100 text-gray-800'}`}>
            {role}
          </span>;
    }
  };
  const getActionBadge = action => {
    if (action.includes('Created') || action.includes('Added')) {
      return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
          {action}
        </span>;
    } else if (action.includes('Updated') || action.includes('Modified') || action.includes('Edited')) {
      return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>
          {action}
        </span>;
    } else if (action.includes('Deleted') || action.includes('Removed') || action.includes('Error') || action.includes('Failed')) {
      return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'}`}>
          {action}
        </span>;
    } else if (action.includes('Approved') || action.includes('Processed') || action.includes('Completed')) {
      return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-100 text-teal-800'}`}>
          {action}
        </span>;
    } else {
      return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-gray-900/30 text-gray-400' : 'bg-gray-100 text-gray-800'}`}>
          {action}
        </span>;
    }
  };
  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };
  return <div>
      <div className="mb-6">
        <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          Activity Logs
        </h1>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Track and audit all system activities
        </p>
      </div>
      {/* Filters */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-lg shadow-sm border mb-8`}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4 md:mb-0`}>
            Activity Log
          </h2>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className={`h-5 w-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
              </div>
              <input type="text" className={`focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 sm:text-sm ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-700'} rounded-md`} placeholder="Search logs..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <div className="flex items-center">
              <FilterIcon className={`mr-2 h-5 w-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
              <select className={`rounded-md ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-700'} py-2 pl-3 pr-10 text-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500`} value={filterAction} onChange={e => setFilterAction(e.target.value)}>
                <option value="all">All Actions</option>
                <option value="created">Created</option>
                <option value="updated">Updated</option>
                <option value="deleted">Deleted</option>
                <option value="approved">Approved</option>
                <option value="login">Login</option>
                <option value="error">Error</option>
              </select>
            </div>
            <div className="flex items-center">
              <ClockIcon className={`mr-2 h-5 w-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
              <select className={`rounded-md ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-700'} py-2 pl-3 pr-10 text-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500`} value={dateRange} onChange={e => setDateRange(e.target.value)}>
                <option value="today">Today</option>
                <option value="week">Last 7 Days</option>
                <option value="month">Last 30 Days</option>
                <option value="all">All Time</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex space-x-2">
            <button className={`inline-flex items-center px-3 py-1 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500`}>
              <RefreshCwIcon className="h-4 w-4 mr-1" />
              Refresh
            </button>
          </div>
          <div className="flex space-x-2">
            <button className={`inline-flex items-center px-3 py-1 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500`}>
              <DownloadIcon className="h-4 w-4 mr-1" />
              Export CSV
            </button>
            <button className={`inline-flex items-center px-3 py-1 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500`}>
              <DownloadIcon className="h-4 w-4 mr-1" />
              Export PDF
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className={`min-w-full divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
            <thead className={darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}>
              <tr>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Log ID
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Timestamp
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  User
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Action
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Details
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  IP Address
                </th>
              </tr>
            </thead>
            <tbody className={`${darkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}`}>
              {filteredLogs.map((log, index) => <tr key={index} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {log.id}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                    {formatDate(log.timestamp)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`flex-shrink-0 h-8 w-8 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center`}>
                        <UserIcon className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      </div>
                      <div className="ml-3">
                        <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                          {log.user}
                        </div>
                        <div className="text-xs mt-1">
                          {getUserRoleBadge(log.userRole)}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getActionBadge(log.action)}
                  </td>
                  <td className={`px-6 py-4 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                    {log.details}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                    {log.ip}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Showing <span className="font-medium">{filteredLogs.length}</span>{' '}
            logs
          </div>
          <div className="flex-1 flex justify-end">
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
              <a href="#" className={`relative inline-flex items-center px-2 py-2 rounded-l-md border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-400' : 'border-gray-300 bg-white text-gray-500'} hover:${darkMode ? 'bg-gray-600' : 'bg-gray-50'} text-sm font-medium`}>
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className={`relative inline-flex items-center px-4 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-700'} hover:${darkMode ? 'bg-gray-600' : 'bg-gray-50'} text-sm font-medium`}>
                1
              </a>
              <a href="#" className={`relative inline-flex items-center px-4 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-700'} hover:${darkMode ? 'bg-gray-600' : 'bg-gray-50'} text-sm font-medium`}>
                2
              </a>
              <a href="#" className={`relative inline-flex items-center px-4 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-700'} hover:${darkMode ? 'bg-gray-600' : 'bg-gray-50'} text-sm font-medium`}>
                3
              </a>
              <a href="#" className={`relative inline-flex items-center px-2 py-2 rounded-r-md border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-400' : 'border-gray-300 bg-white text-gray-500'} hover:${darkMode ? 'bg-gray-600' : 'bg-gray-50'} text-sm font-medium`}>
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
      {/* Activity Summary */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-lg shadow-sm border`}>
        <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-6`}>
          Activity Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg`}>
            <h3 className={`text-md font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-2`}>
              User Activity
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Super Admin
                </span>
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  12 actions
                </span>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2`}>
                <div className={`${darkMode ? 'bg-purple-600' : 'bg-purple-500'} h-2 rounded-full`} style={{
                width: '24%'
              }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Admin
                </span>
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  28 actions
                </span>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2`}>
                <div className={`${darkMode ? 'bg-blue-600' : 'bg-blue-500'} h-2 rounded-full`} style={{
                width: '56%'
              }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Fisher
                </span>
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  45 actions
                </span>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2`}>
                <div className={`${darkMode ? 'bg-green-600' : 'bg-green-500'} h-2 rounded-full`} style={{
                width: '90%'
              }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  System
                </span>
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  15 actions
                </span>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2`}>
                <div className={`${darkMode ? 'bg-gray-500' : 'bg-gray-500'} h-2 rounded-full`} style={{
                width: '30%'
              }}></div>
              </div>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg`}>
            <h3 className={`text-md font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-2`}>
              Action Types
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Created/Added
                </span>
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  32 logs
                </span>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2`}>
                <div className={`${darkMode ? 'bg-green-600' : 'bg-green-500'} h-2 rounded-full`} style={{
                width: '64%'
              }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Updated/Modified
                </span>
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  48 logs
                </span>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2`}>
                <div className={`${darkMode ? 'bg-blue-600' : 'bg-blue-500'} h-2 rounded-full`} style={{
                width: '96%'
              }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Deleted/Removed
                </span>
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  8 logs
                </span>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2`}>
                <div className={`${darkMode ? 'bg-red-600' : 'bg-red-500'} h-2 rounded-full`} style={{
                width: '16%'
              }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Login/Logout
                </span>
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  25 logs
                </span>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2`}>
                <div className={`${darkMode ? 'bg-yellow-600' : 'bg-yellow-500'} h-2 rounded-full`} style={{
                width: '50%'
              }}></div>
              </div>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg`}>
            <h3 className={`text-md font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-2`}>
              Time Distribution
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Last 24 hours
                </span>
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  42 logs
                </span>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2`}>
                <div className={`${darkMode ? 'bg-teal-600' : 'bg-teal-500'} h-2 rounded-full`} style={{
                width: '84%'
              }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  1-3 days ago
                </span>
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  38 logs
                </span>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2`}>
                <div className={`${darkMode ? 'bg-teal-600' : 'bg-teal-500'} h-2 rounded-full`} style={{
                width: '76%'
              }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  4-7 days ago
                </span>
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  25 logs
                </span>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2`}>
                <div className={`${darkMode ? 'bg-teal-600' : 'bg-teal-500'} h-2 rounded-full`} style={{
                width: '50%'
              }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Older than 7 days
                </span>
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  15 logs
                </span>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2`}>
                <div className={`${darkMode ? 'bg-teal-600' : 'bg-teal-500'} h-2 rounded-full`} style={{
                width: '30%'
              }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};