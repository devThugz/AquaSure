import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Users2Icon, ShieldIcon, PlusIcon, SearchIcon, FilterIcon, MoreVerticalIcon, MapPinIcon, PhoneIcon, MailIcon, CheckCircleIcon, AlertTriangleIcon, BellIcon, EditIcon, TrashIcon, EyeIcon } from 'lucide-react';
export const LGUAdmins: React.FC = () => {
  const {
    darkMode
  } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRegion, setFilterRegion] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  // Mock data for LGU Admins
  const lguAdmins = [{
    id: 1,
    name: 'Maria Santos',
    email: 'maria.santos@lgu.gov.ph',
    phone: '+63 912 345 6789',
    region: 'Cebu',
    status: 'active',
    lastActive: '2 hours ago',
    fishersManaged: 245,
    dateJoined: '2022-05-15',
    verificationRate: 98
  }, {
    id: 2,
    name: 'Jose Reyes',
    email: 'jose.reyes@lgu.gov.ph',
    phone: '+63 917 876 5432',
    region: 'Davao',
    status: 'active',
    lastActive: '5 minutes ago',
    fishersManaged: 183,
    dateJoined: '2022-06-20',
    verificationRate: 92
  }, {
    id: 3,
    name: 'Ana Lim',
    email: 'ana.lim@lgu.gov.ph',
    phone: '+63 918 765 4321',
    region: 'Palawan',
    status: 'active',
    lastActive: '1 day ago',
    fishersManaged: 156,
    dateJoined: '2022-07-10',
    verificationRate: 95
  }, {
    id: 4,
    name: 'Roberto Cruz',
    email: 'roberto.cruz@lgu.gov.ph',
    phone: '+63 919 123 4567',
    region: 'Iloilo',
    status: 'inactive',
    lastActive: '2 weeks ago',
    fishersManaged: 112,
    dateJoined: '2022-08-05',
    verificationRate: 88
  }, {
    id: 5,
    name: 'Elena Magtanggol',
    email: 'elena.magtanggol@lgu.gov.ph',
    phone: '+63 920 987 6543',
    region: 'Zamboanga',
    status: 'pending',
    lastActive: 'Never',
    fishersManaged: 0,
    dateJoined: '2023-05-01',
    verificationRate: 0
  }];
  // Filter admins based on search and filters
  const filteredAdmins = lguAdmins.filter(admin => {
    const matchesSearch = admin.name.toLowerCase().includes(searchTerm.toLowerCase()) || admin.email.toLowerCase().includes(searchTerm.toLowerCase()) || admin.region.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = filterRegion === 'all' || admin.region === filterRegion;
    const matchesStatus = filterStatus === 'all' || admin.status === filterStatus;
    return matchesSearch && matchesRegion && matchesStatus;
  });
  const getStatusBadge = status => {
    switch (status) {
      case 'active':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
            Active
          </span>;
      case 'inactive':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'}`}>
            Inactive
          </span>;
      case 'pending':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800'}`}>
            Pending
          </span>;
      default:
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-gray-900/30 text-gray-400' : 'bg-gray-100 text-gray-800'}`}>
            {status}
          </span>;
    }
  };
  return <div className={`${darkMode ? 'bg-ocean-deep text-gray-100' : 'bg-white text-gray-900'} w-full min-h-full`}>
      <div className="mb-6">
        <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          LGU Admins Management
        </h1>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Manage Local Government Unit administrators across regions
        </p>
      </div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <div className="flex items-center">
            <div className={`flex-shrink-0 rounded-md p-3 ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
              <Users2Icon className="h-6 w-6" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dt className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'} truncate`}>
                Total LGU Admins
              </dt>
              <dd className="flex items-baseline">
                <div className={`text-2xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  48
                </div>
                <div className={`ml-2 flex items-baseline text-sm font-semibold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                  +5
                </div>
              </dd>
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <div className="flex items-center">
            <div className={`flex-shrink-0 rounded-md p-3 ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'}`}>
              <CheckCircleIcon className="h-6 w-6" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dt className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'} truncate`}>
                Active Admins
              </dt>
              <dd className="flex items-baseline">
                <div className={`text-2xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  42
                </div>
                <div className={`ml-2 flex items-baseline text-sm font-semibold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                  88%
                </div>
              </dd>
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <div className="flex items-center">
            <div className={`flex-shrink-0 rounded-md p-3 ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-600'}`}>
              <AlertTriangleIcon className="h-6 w-6" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dt className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'} truncate`}>
                Pending Approvals
              </dt>
              <dd className="flex items-baseline">
                <div className={`text-2xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  3
                </div>
                <div className={`ml-2 flex items-baseline text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Requires attention
                </div>
              </dd>
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <div className="flex items-center">
            <div className={`flex-shrink-0 rounded-md p-3 ${darkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-100 text-teal-600'}`}>
              <MapPinIcon className="h-6 w-6" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dt className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'} truncate`}>
                Regions Covered
              </dt>
              <dd className="flex items-baseline">
                <div className={`text-2xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  15
                </div>
                <div className={`ml-2 flex items-baseline text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  of 17 regions
                </div>
              </dd>
            </div>
          </div>
        </div>
      </div>
      {/* Admin Management Section */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-lg shadow-sm border mb-8 transition-colors duration-300`}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4 md:mb-0`}>
            LGU Administrators
          </h2>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className={`h-5 w-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
              </div>
              <input type="text" className={`focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 sm:text-sm ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300 placeholder-gray-500' : 'border-gray-300 bg-white text-gray-700 placeholder-gray-400'} rounded-md transition-colors duration-300`} placeholder="Search admins..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <div className="flex items-center">
              <FilterIcon className={`mr-2 h-5 w-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
              <select className={`rounded-md ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-700'} py-2 pl-3 pr-10 text-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 transition-colors duration-300`} value={filterRegion} onChange={e => setFilterRegion(e.target.value)}>
                <option value="all">All Regions</option>
                <option value="Cebu">Cebu</option>
                <option value="Davao">Davao</option>
                <option value="Palawan">Palawan</option>
                <option value="Iloilo">Iloilo</option>
                <option value="Zamboanga">Zamboanga</option>
              </select>
            </div>
            <div className="flex items-center">
              <FilterIcon className={`mr-2 h-5 w-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
              <select className={`rounded-md ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-700'} py-2 pl-3 pr-10 text-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 transition-colors duration-300`} value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <div></div>
          <button className={`inline-flex items-center px-4 py-2 ${darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-600 hover:bg-teal-700'} text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-300`}>
            <PlusIcon className="h-5 w-5 mr-2" />
            Add New Admin
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className={`min-w-full divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'} transition-colors duration-300`}>
            <thead className={darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}>
              <tr>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Admin
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Contact
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Region
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Status
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Metrics
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className={`${darkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'} transition-colors duration-300`}>
              {filteredAdmins.map(admin => <tr key={admin.id} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors duration-200`}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`flex-shrink-0 h-10 w-10 rounded-full ${darkMode ? 'bg-teal-900/50 text-teal-400' : 'bg-teal-100 text-teal-600'} flex items-center justify-center`}>
                        <ShieldIcon className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                          {admin.name}
                        </div>
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          Joined {admin.dateJoined}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">
                      <div className="flex items-center">
                        <MailIcon className={`h-4 w-4 mr-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                        <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {admin.email}
                        </span>
                      </div>
                      <div className="flex items-center mt-1">
                        <PhoneIcon className={`h-4 w-4 mr-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                        <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {admin.phone}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                    <div className="flex items-center">
                      <MapPinIcon className={`h-4 w-4 mr-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      {admin.region}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      {getStatusBadge(admin.status)}
                      <span className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {admin.status === 'pending' ? 'Awaiting approval' : `Last active: ${admin.lastActive}`}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">
                      <div className="flex items-center">
                        <Users2Icon className={`h-4 w-4 mr-1 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                        <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {admin.fishersManaged} fishers managed
                        </span>
                      </div>
                      <div className="flex items-center mt-1">
                        <CheckCircleIcon className={`h-4 w-4 mr-1 ${darkMode ? 'text-green-400' : 'text-green-500'}`} />
                        <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {admin.verificationRate}% verification rate
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className={`p-1 rounded-full ${darkMode ? 'text-blue-400 hover:bg-blue-900/30' : 'text-blue-600 hover:bg-blue-50'} transition-colors duration-200`}>
                        <EyeIcon className="h-5 w-5" />
                      </button>
                      <button className={`p-1 rounded-full ${darkMode ? 'text-green-400 hover:bg-green-900/30' : 'text-green-600 hover:bg-green-50'} transition-colors duration-200`}>
                        <EditIcon className="h-5 w-5" />
                      </button>
                      <button className={`p-1 rounded-full ${darkMode ? 'text-red-400 hover:bg-red-900/30' : 'text-red-600 hover:bg-red-50'} transition-colors duration-200`}>
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Showing <span className="font-medium">{filteredAdmins.length}</span>{' '}
            admins
          </div>
          <div className="flex-1 flex justify-end">
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
              <a href="#" className={`relative inline-flex items-center px-2 py-2 rounded-l-md border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-400 hover:bg-gray-600' : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'} text-sm font-medium transition-colors duration-200`}>
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className={`relative inline-flex items-center px-4 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300 hover:bg-gray-600' : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'} text-sm font-medium transition-colors duration-200`}>
                1
              </a>
              <a href="#" className={`relative inline-flex items-center px-2 py-2 rounded-r-md border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-400 hover:bg-gray-600' : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'} text-sm font-medium transition-colors duration-200`}>
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
      {/* Admin Performance Overview Section */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-lg shadow-sm border mb-8 transition-colors duration-300`}>
        <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
          Admin Performance Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} p-4 rounded-lg transition-colors duration-300`}>
            <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} mb-2`}>
              Average Rating
            </h3>
            <p className={`text-2xl font-bold ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
              4.2/5.0
            </p>
            <div className={`mt-2 w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2.5`}>
              <div className={`${darkMode ? 'bg-teal-500' : 'bg-teal-600'} h-2.5 rounded-full`} style={{
              width: '84%'
            }}></div>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} p-4 rounded-lg transition-colors duration-300`}>
            <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} mb-2`}>
              Verification Rate
            </h3>
            <p className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              89.6%
            </p>
            <div className={`mt-2 w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2.5`}>
              <div className={`${darkMode ? 'bg-blue-500' : 'bg-blue-600'} h-2.5 rounded-full`} style={{
              width: '89.6%'
            }}></div>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} p-4 rounded-lg transition-colors duration-300`}>
            <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} mb-2`}>
              User Satisfaction
            </h3>
            <p className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
              84.3%
            </p>
            <div className={`mt-2 w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2.5`}>
              <div className={`${darkMode ? 'bg-purple-500' : 'bg-purple-600'} h-2.5 rounded-full`} style={{
              width: '84.3%'
            }}></div>
            </div>
          </div>
        </div>
      </div>
      {/* Regional Distribution Map */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-lg shadow-sm border mb-8 transition-colors duration-300`}>
        <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
          Regional Admin Distribution
        </h2>
        <div className={`h-64 ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} rounded-lg flex items-center justify-center transition-colors duration-300`}>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Interactive map showing admin distribution would be displayed here
          </p>
        </div>
      </div>
    </div>;
};