import React, { useState, Component } from 'react';
import { MegaphoneIcon, CalendarIcon, BellIcon, CheckCircleIcon, PlusIcon, SearchIcon, FilterIcon, EditIcon, TrashIcon, EyeIcon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
export const Announcements: React.FC = () => {
  const {
    darkMode
  } = useTheme();
  const [showNewAnnouncementForm, setShowNewAnnouncementForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPriority, setFilterPriority] = useState('all');
  // Stat Card Component - Aligned with Admin Dashboard style
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
  const announcements = [{
    id: 'ANN-001',
    title: 'Weather Advisory for Eastern Coast',
    content: 'Strong winds and high waves expected along the eastern coast for the next 48 hours.',
    type: 'Weather',
    status: 'Active',
    publishDate: '2023-05-18',
    readCount: 245,
    totalRecipients: 320
  }, {
    id: 'ANN-002',
    title: 'New Verification Process',
    content: 'We have updated our verification process to make it faster and easier.',
    type: 'System',
    status: 'Active',
    publishDate: '2023-05-15',
    readCount: 412,
    totalRecipients: 520
  }, {
    id: 'ANN-003',
    title: 'Community Meeting',
    content: 'Join us for a community meeting on sustainable fishing practices on May 25, 2023.',
    type: 'Event',
    status: 'Scheduled',
    publishDate: '2023-05-20',
    readCount: 0,
    totalRecipients: 180
  }];
  const getStatusBadge = status => {
    switch (status) {
      case 'Active':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
            Active
          </span>;
      case 'Scheduled':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>
            Scheduled
          </span>;
      default:
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
            {status}
          </span>;
    }
  };
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          Announcements
        </h1>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Create and manage announcements for fishers in your region
        </p>
      </div>
      {/* 2×2 Grid Layout - Aligned with Admin Dashboard */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
        <StatCard icon={MegaphoneIcon} title="Total Announcements" value="42" change="+3 this week" color="bg-gradient-to-r from-blue-500 to-blue-600" />
        <StatCard icon={BellIcon} title="Active Announcements" value="12" change="+1 today" color="bg-gradient-to-r from-green-500 to-green-600" />
        <StatCard icon={CalendarIcon} title="Scheduled" value="5" change="+2 this week" color="bg-gradient-to-r from-purple-500 to-purple-600" />
        <StatCard icon={CheckCircleIcon} title="Read Rate" value="82.5%" change="+1.8% vs last week" color="bg-gradient-to-r from-teal-500 to-teal-600" />
      </div>
      {/* New Announcement Button */}
      <div className="flex justify-end mb-6">
        <button onClick={() => setShowNewAnnouncementForm(!showNewAnnouncementForm)} className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-600 hover:bg-teal-700'} focus:outline-none transition-colors duration-300`}>
          <PlusIcon className="h-4 w-4 mr-2" />
          Create Announcement
        </button>
      </div>
      {/* Announcements List */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-2xl border transition-colors duration-300`}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className={`text-base sm:text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            All Announcements
          </h2>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-initial">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
              </div>
              <input type="text" className={`block w-full pl-10 pr-3 py-2 border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'bg-white border-gray-300 placeholder-gray-500'} rounded-md leading-5 sm:text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500`} placeholder="Search announcements..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <div className="flex items-center">
              <FilterIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'} mr-2`} />
              <select className={`block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md`} value={filterPriority} onChange={e => setFilterPriority(e.target.value)}>
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="scheduled">Scheduled</option>
                <option value="expired">Expired</option>
              </select>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className={`min-w-full divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
            <thead className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
              <tr>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  ID
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Title
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Type
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Publish Date
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Status
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Read Rate
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className={`${darkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}`}>
              {announcements.map(announcement => {
              const readRate = Math.round(announcement.readCount / announcement.totalRecipients * 100) || 0;
              return <tr key={announcement.id} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors duration-200`}>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      {announcement.id}
                    </td>
                    <td className={`px-6 py-4 text-sm ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                      {announcement.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>
                        {announcement.type}
                      </span>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {new Date(announcement.publishDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(announcement.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {announcement.status === 'Scheduled' ? <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          Not published yet
                        </span> : <div className="flex items-center">
                          <span className={`text-sm ${darkMode ? 'text-gray-200' : 'text-gray-900'} mr-2`}>
                            {readRate}%
                          </span>
                          <div className={`w-16 ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2`}>
                            <div className={`h-2 rounded-full ${readRate >= 80 ? darkMode ? 'bg-green-500/70' : 'bg-green-500' : readRate >= 60 ? darkMode ? 'bg-blue-500/70' : 'bg-blue-500' : darkMode ? 'bg-yellow-500/70' : 'bg-yellow-500'}`} style={{
                        width: `${readRate}%`
                      }}></div>
                          </div>
                        </div>}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className={`p-1 rounded-full ${darkMode ? 'text-blue-400 hover:bg-blue-900/30' : 'text-blue-600 hover:bg-blue-50'}`}>
                          <EyeIcon className="h-5 w-5" />
                        </button>
                        <button className={`p-1 rounded-full ${darkMode ? 'text-teal-400 hover:bg-teal-900/30' : 'text-teal-600 hover:bg-teal-50'}`}>
                          <EditIcon className="h-5 w-5" />
                        </button>
                        <button className={`p-1 rounded-full ${darkMode ? 'text-red-400 hover:bg-red-900/30' : 'text-red-600 hover:bg-red-50'}`}>
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>;
            })}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};