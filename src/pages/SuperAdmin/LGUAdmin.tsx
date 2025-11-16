import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Users2Icon, MapPinIcon, CheckCircleIcon, XCircleIcon, AlertTriangleIcon, EyeIcon, EditIcon, TrashIcon, SearchIcon, FilterIcon, DownloadIcon, RefreshCwIcon, BarChart2Icon, ShieldIcon } from 'lucide-react';
export const LGUAdmin: React.FC = () => {
  const {
    darkMode
  } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRegion, setFilterRegion] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedAdmin, setSelectedAdmin] = useState<number | null>(null);
  // Mock admin data
  const admins = [{
    id: 1,
    name: 'Maria Reyes',
    email: 'maria@lgu.gov.ph',
    region: 'MIMAROPA',
    location: 'Puerto Princesa City',
    status: 'Active',
    role: 'LGU Administrator',
    lastActive: '2 hours ago',
    joined: 'Jan 15, 2023',
    managedUsers: 324,
    verificationRate: 95,
    responseTime: '1.2 hours',
    avatar: 'https://randomuser.me/api/portraits/women/11.jpg'
  }, {
    id: 2,
    name: 'Antonio Mendoza',
    email: 'antonio@lgu.gov.ph',
    region: 'Central Visayas',
    location: 'Cebu City',
    status: 'Active',
    role: 'LGU Administrator',
    lastActive: '1 day ago',
    joined: 'Mar 22, 2023',
    managedUsers: 412,
    verificationRate: 88,
    responseTime: '2.5 hours',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg'
  }, {
    id: 3,
    name: 'Sofia Bautista',
    email: 'sofia@lgu.gov.ph',
    region: 'CALABARZON',
    location: 'Batangas City',
    status: 'Inactive',
    role: 'LGU Administrator',
    lastActive: '2 weeks ago',
    joined: 'Nov 5, 2022',
    managedUsers: 287,
    verificationRate: 92,
    responseTime: '1.8 hours',
    avatar: 'https://randomuser.me/api/portraits/women/13.jpg'
  }, {
    id: 4,
    name: 'Eduardo Santos',
    email: 'eduardo@lgu.gov.ph',
    region: 'Davao Region',
    location: 'Davao City',
    status: 'Active',
    role: 'LGU Administrator',
    lastActive: '5 hours ago',
    joined: 'Feb 18, 2023',
    managedUsers: 356,
    verificationRate: 97,
    responseTime: '0.9 hours',
    avatar: 'https://randomuser.me/api/portraits/men/14.jpg'
  }, {
    id: 5,
    name: 'Isabella Cruz',
    email: 'isabella@lgu.gov.ph',
    region: 'Western Visayas',
    location: 'Iloilo City',
    status: 'Pending',
    role: 'LGU Administrator',
    lastActive: 'Never',
    joined: 'Apr 30, 2023',
    managedUsers: 0,
    verificationRate: 0,
    responseTime: 'N/A',
    avatar: 'https://randomuser.me/api/portraits/women/15.jpg'
  }];
  // Filter admins based on search and filters
  const filteredAdmins = admins.filter(admin => {
    const matchesSearch = admin.name.toLowerCase().includes(searchTerm.toLowerCase()) || admin.email.toLowerCase().includes(searchTerm.toLowerCase()) || admin.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = filterRegion === 'all' || admin.region === filterRegion;
    const matchesStatus = filterStatus === 'all' || admin.status === filterStatus;
    return matchesSearch && matchesRegion && matchesStatus;
  });
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
            Active
          </span>;
      case 'Inactive':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
            Inactive
          </span>;
      case 'Pending':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800'}`}>
            Pending
          </span>;
      case 'Suspended':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'}`}>
            Suspended
          </span>;
      default:
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
            {status}
          </span>;
    }
  };
  return <div>
      <div className="mb-6">
        <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          LGU Admin Management
        </h1>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Manage Local Government Unit administrators across all regions
        </p>
      </div>
      {/* Admin Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 rounded-lg border transition-colors duration-300`}>
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
              <Users2Icon className="h-6 w-6" />
            </div>
            <div className="ml-3">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Total Admins
              </p>
              <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                {admins.length}
              </p>
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 rounded-lg border transition-colors duration-300`}>
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'}`}>
              <CheckCircleIcon className="h-6 w-6" />
            </div>
            <div className="ml-3">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Active Admins
              </p>
              <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                {admins.filter(a => a.status === 'Active').length}
              </p>
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 rounded-lg border transition-colors duration-300`}>
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
              <MapPinIcon className="h-6 w-6" />
            </div>
            <div className="ml-3">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Regions Covered
              </p>
              <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                5
              </p>
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 rounded-lg border transition-colors duration-300`}>
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-600'}`}>
              <BarChart2Icon className="h-6 w-6" />
            </div>
            <div className="ml-3">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Avg. Performance
              </p>
              <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                92%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
        <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
          LGU Administrators
        </h2>
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className={`h-5 w-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
            </div>
            <input type="text" placeholder="Search by name, email, or location..." className={`block w-full pl-10 pr-3 py-2 border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'border-gray-300 text-gray-900 placeholder-gray-500'} rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm transition-colors duration-300`} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <select className={`block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300 text-gray-900'} focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md transition-colors duration-300`} value={filterRegion} onChange={e => setFilterRegion(e.target.value)}>
                <option value="all">All Regions</option>
                <option value="MIMAROPA">MIMAROPA</option>
                <option value="Central Visayas">Central Visayas</option>
                <option value="CALABARZON">CALABARZON</option>
                <option value="Davao Region">Davao Region</option>
                <option value="Western Visayas">Western Visayas</option>
              </select>
            </div>
            <div className="relative">
              <select className={`block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300 text-gray-900'} focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md transition-colors duration-300`} value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                <option value="all">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            <button className={`inline-flex items-center px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-300`}>
              <FilterIcon className="h-4 w-4 mr-2" />
              More Filters
            </button>
          </div>
          <div className="flex gap-2">
            <button className={`inline-flex items-center px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-300`}>
              <DownloadIcon className="h-4 w-4 mr-2" />
              Export
            </button>
            <button className={`inline-flex items-center px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-300`}>
              <RefreshCwIcon className="h-4 w-4 mr-2" />
              Refresh
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-3/4 overflow-x-auto">
            <table className={`min-w-full divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'} transition-colors duration-300`}>
              <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors duration-300`}>
                <tr>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                    Admin
                  </th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                    Region
                  </th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                    Status
                  </th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                    Performance
                  </th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className={`${darkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'} transition-colors duration-300`}>
                {filteredAdmins.map(admin => <tr key={admin.id} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} ${selectedAdmin === admin.id ? darkMode ? 'bg-blue-900/20' : 'bg-blue-50' : ''} transition-colors duration-200`} onClick={() => setSelectedAdmin(admin.id)}>
                    <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img className="h-10 w-10 rounded-full" src={admin.avatar} alt={admin.name} />
                        </div>
                        <div className="ml-4">
                          <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                            {admin.name}
                          </div>
                          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                            {admin.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                      <div className={`text-sm ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                        {admin.region}
                      </div>
                      <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                        {admin.location}
                      </div>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                      {getStatusBadge(admin.status)}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'} transition-colors duration-300`}>
                      {admin.status === 'Pending' ? <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          Not available yet
                        </span> : <div>
                          <div className="flex items-center">
                            <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-1.5 mr-2`}>
                              <div className={`${darkMode ? 'bg-teal-500' : 'bg-teal-600'} h-1.5 rounded-full`} style={{
                          width: `${admin.verificationRate}%`
                        }}></div>
                            </div>
                            <span className={`text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              {admin.verificationRate}%
                            </span>
                          </div>
                          <div className={`mt-1 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {admin.managedUsers} users · {admin.responseTime}{' '}
                            avg. response
                          </div>
                        </div>}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium transition-colors duration-300`}>
                      <div className="flex space-x-2">
                        <button className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-900'} transition-colors duration-300`} title="View Details">
                          <EyeIcon className="h-5 w-5" />
                        </button>
                        <button className={`${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-900'} transition-colors duration-300`} title="Edit Admin">
                          <EditIcon className="h-5 w-5" />
                        </button>
                        {admin.status === 'Active' ? <button className={`${darkMode ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-900'} transition-colors duration-300`} title="Suspend Admin">
                            <XCircleIcon className="h-5 w-5" />
                          </button> : <button className={`${darkMode ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-900'} transition-colors duration-300`} title="Activate Admin">
                            <CheckCircleIcon className="h-5 w-5" />
                          </button>}
                      </div>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          {selectedAdmin && <div className={`lg:w-1/4 ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} rounded-lg p-4 transition-colors duration-300`}>
              {admins.filter(a => a.id === selectedAdmin).map(admin => <div key={admin.id} className="space-y-4">
                    <div className="flex flex-col items-center">
                      <img src={admin.avatar} alt={admin.name} className="h-20 w-20 rounded-full mb-2" />
                      <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                        {admin.name}
                      </h3>
                      <div className="flex items-center mt-1">
                        {getStatusBadge(admin.status)}
                        <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'} transition-colors duration-300`}>
                          {admin.role}
                        </span>
                      </div>
                    </div>
                    <div className={`border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'} pt-4 transition-colors duration-300`}>
                      <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} mb-2 transition-colors duration-300`}>
                        Admin Information
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                            Email
                          </p>
                          <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300`}>
                            {admin.email}
                          </p>
                        </div>
                        <div>
                          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                            Joined
                          </p>
                          <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300`}>
                            {admin.joined}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                          Location
                        </p>
                        <div className="flex items-center">
                          <MapPinIcon className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-400'} mr-1 transition-colors duration-300`} />
                          <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300`}>
                            {admin.location}, {admin.region}
                          </p>
                        </div>
                      </div>
                    </div>
                    {admin.status !== 'Pending' && <div className={`border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'} pt-4 transition-colors duration-300`}>
                        <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} mb-2 transition-colors duration-300`}>
                          Performance Metrics
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                                Verification Rate
                              </p>
                              <p className={`text-xs font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300`}>
                                {admin.verificationRate}%
                              </p>
                            </div>
                            <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-1.5`}>
                              <div className={`${darkMode ? 'bg-teal-500' : 'bg-teal-600'} h-1.5 rounded-full`} style={{
                      width: `${admin.verificationRate}%`
                    }}></div>
                            </div>
                          </div>
                          <div>
                            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                              Managed Users
                            </p>
                            <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300`}>
                              {admin.managedUsers} fishermen
                            </p>
                          </div>
                          <div>
                            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                              Avg. Response Time
                            </p>
                            <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300`}>
                              {admin.responseTime}
                            </p>
                          </div>
                          <div>
                            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                              Last Active
                            </p>
                            <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300`}>
                              {admin.lastActive}
                            </p>
                          </div>
                        </div>
                      </div>}
                    <div className={`border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'} pt-4 flex flex-col space-y-2 transition-colors duration-300`}>
                      <button className={`inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-600 hover:bg-teal-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-300`}>
                        <EditIcon className="h-4 w-4 mr-2" />
                        Edit Admin
                      </button>
                      {admin.status === 'Active' ? <button className={`inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${darkMode ? 'bg-red-600 hover:bg-red-700' : 'bg-red-600 hover:bg-red-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300`}>
                          <XCircleIcon className="h-4 w-4 mr-2" />
                          Suspend Admin
                        </button> : admin.status === 'Pending' ? <button className={`inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600 hover:bg-green-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300`}>
                          <CheckCircleIcon className="h-4 w-4 mr-2" />
                          Approve Admin
                        </button> : <button className={`inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600 hover:bg-green-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300`}>
                          <CheckCircleIcon className="h-4 w-4 mr-2" />
                          Activate Admin
                        </button>}
                      <button className={`inline-flex items-center justify-center px-4 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300 hover:bg-gray-600' : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'} rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300`}>
                        <ShieldIcon className="h-4 w-4 mr-2" />
                        Manage Permissions
                      </button>
                    </div>
                  </div>)}
            </div>}
        </div>
      </div>
    </div>;
};