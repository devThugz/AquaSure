import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Users2Icon, SearchIcon, FilterIcon, SlidersIcon, DownloadIcon, RefreshCwIcon, CheckCircleIcon, XCircleIcon, AlertTriangleIcon, EyeIcon, EditIcon, TrashIcon, ShieldIcon, MapPinIcon, HeartIcon, FishIcon, BadgeCheckIcon, XIcon } from 'lucide-react';
export const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRegion, setFilterRegion] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterInsurance, setFilterInsurance] = useState('all');
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const {
    darkMode
  } = useTheme();
  // Mock user data
  const users = [{
    id: 1,
    name: 'Juan Dela Cruz',
    email: 'juan@fisherman.com',
    location: 'Palawan',
    region: 'MIMAROPA',
    status: 'Active',
    insurance: 'Premium',
    insuranceStatus: 'Active',
    joined: 'Jan 15, 2023',
    lastActive: '2 hours ago',
    verified: true,
    boatRegistration: 'PL-2023-0123',
    licenseNumber: 'FL-2023-5678',
    phone: '+63 912 345 6789',
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg'
  }, {
    id: 2,
    name: 'Maria Santos',
    email: 'maria@fisherman.com',
    location: 'Cebu',
    region: 'Central Visayas',
    status: 'Active',
    insurance: 'Standard',
    insuranceStatus: 'Active',
    joined: 'Mar 22, 2023',
    lastActive: '5 hours ago',
    verified: true,
    boatRegistration: 'CB-2023-0456',
    licenseNumber: 'FL-2023-7890',
    phone: '+63 923 456 7890',
    avatar: 'https://randomuser.me/api/portraits/women/11.jpg'
  }, {
    id: 3,
    name: 'Pedro Santos',
    email: 'pedro@fisherman.com',
    location: 'Batangas',
    region: 'CALABARZON',
    status: 'Inactive',
    insurance: 'Premium',
    insuranceStatus: 'Expired',
    joined: 'Nov 5, 2022',
    lastActive: '2 weeks ago',
    verified: true,
    boatRegistration: 'BT-2022-0789',
    licenseNumber: 'FL-2022-1234',
    phone: '+63 934 567 8901',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg'
  }, {
    id: 4,
    name: 'Ana Lim',
    email: 'ana@fisherman.com',
    location: 'Davao',
    region: 'Davao Region',
    status: 'Active',
    insurance: 'Basic',
    insuranceStatus: 'Active',
    joined: 'Feb 18, 2023',
    lastActive: '1 day ago',
    verified: true,
    boatRegistration: 'DV-2023-0234',
    licenseNumber: 'FL-2023-5678',
    phone: '+63 945 678 9012',
    avatar: 'https://randomuser.me/api/portraits/women/13.jpg'
  }, {
    id: 5,
    name: 'Roberto Cruz',
    email: 'roberto@fisherman.com',
    location: 'Iloilo',
    region: 'Western Visayas',
    status: 'Pending',
    insurance: 'None',
    insuranceStatus: 'Pending',
    joined: 'Apr 30, 2023',
    lastActive: '3 days ago',
    verified: false,
    boatRegistration: 'IL-2023-0567',
    licenseNumber: 'Pending',
    phone: '+63 956 789 0123',
    avatar: 'https://randomuser.me/api/portraits/men/14.jpg'
  }, {
    id: 6,
    name: 'Elena Garcia',
    email: 'elena@fisherman.com',
    location: 'Zamboanga',
    region: 'Zamboanga Peninsula',
    status: 'Active',
    insurance: 'Standard',
    insuranceStatus: 'Active',
    joined: 'Dec 10, 2022',
    lastActive: '12 hours ago',
    verified: true,
    boatRegistration: 'ZM-2022-0890',
    licenseNumber: 'FL-2022-9012',
    phone: '+63 967 890 1234',
    avatar: 'https://randomuser.me/api/portraits/women/15.jpg'
  }, {
    id: 7,
    name: 'Carlos Tan',
    email: 'carlos@fisherman.com',
    location: 'Leyte',
    region: 'Eastern Visayas',
    status: 'Suspended',
    insurance: 'Premium',
    insuranceStatus: 'Inactive',
    joined: 'May 8, 2023',
    lastActive: '1 month ago',
    verified: true,
    boatRegistration: 'LY-2023-0123',
    licenseNumber: 'FL-2023-3456',
    phone: '+63 978 901 2345',
    avatar: 'https://randomuser.me/api/portraits/men/16.jpg'
  }, {
    id: 8,
    name: 'Mariano Bautista',
    email: 'mariano@fisherman.com',
    location: 'Bohol',
    region: 'Central Visayas',
    status: 'Active',
    insurance: 'Basic',
    insuranceStatus: 'Active',
    joined: 'Jun 15, 2023',
    lastActive: '6 hours ago',
    verified: true,
    boatRegistration: 'BH-2023-0456',
    licenseNumber: 'FL-2023-7890',
    phone: '+63 989 012 3456',
    avatar: 'https://randomuser.me/api/portraits/men/17.jpg'
  }];
  // Filter users based on search and filters
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase()) || user.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = filterRegion === 'all' || user.region === filterRegion;
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    const matchesInsurance = filterInsurance === 'all' || user.insuranceStatus === filterInsurance;
    return matchesSearch && matchesRegion && matchesStatus && matchesInsurance;
  });
  // Get counts for the dashboard
  const totalUsers = users.length;
  const activeUsers = users.filter(u => u.status === 'Active').length;
  const inactiveUsers = users.filter(u => u.status === 'Inactive').length;
  const pendingUsers = users.filter(u => u.status === 'Pending').length;
  const suspendedUsers = users.filter(u => u.status === 'Suspended').length;
  const insuranceCounts = {
    premium: users.filter(u => u.insurance === 'Premium').length,
    standard: users.filter(u => u.insurance === 'Standard').length,
    basic: users.filter(u => u.insurance === 'Basic').length,
    none: users.filter(u => u.insurance === 'None').length
  };
  const handleViewUser = (userId: number) => {
    setSelectedUser(userId);
    setShowUserModal(true);
  };
  const handleCloseModal = () => {
    setShowUserModal(false);
    setTimeout(() => setSelectedUser(null), 300); // Wait for animation to complete
  };
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
  const getInsuranceBadge = (insurance: string) => {
    switch (insurance) {
      case 'Premium':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-800'}`}>
            Premium
          </span>;
      case 'Standard':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>
            Standard
          </span>;
      case 'Basic':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-100 text-teal-800'}`}>
            Basic
          </span>;
      case 'None':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
            None
          </span>;
      default:
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
            {insurance}
          </span>;
    }
  };
  const getInsuranceStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
            Active
          </span>;
      case 'Expired':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'}`}>
            Expired
          </span>;
      case 'Pending':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800'}`}>
            Pending
          </span>;
      case 'Inactive':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
            Inactive
          </span>;
      default:
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
            {status}
          </span>;
    }
  };
  return <div className="max-w-full overflow-x-hidden">
      <div className="mb-6">
        <h1 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          User Management
        </h1>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Manage Fisher Folk users across all regions
        </p>
      </div>
      {/* User Stats Overview - responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 rounded-lg border transition-colors duration-300`}>
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
              <Users2Icon className="h-6 w-6" />
            </div>
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Total Users
              </p>
              <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                {totalUsers}
              </p>
              <div className="flex items-center mt-1">
                <div className={`h-1 w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full`}>
                  <div className={`h-1 ${darkMode ? 'bg-blue-600' : 'bg-blue-500'} rounded-full`} style={{
                  width: '100%'
                }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 rounded-lg border transition-colors duration-300`}>
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'}`}>
              <CheckCircleIcon className="h-6 w-6" />
            </div>
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Active Users
              </p>
              <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                {activeUsers}
              </p>
              <div className="flex items-center mt-1">
                <div className={`h-1 w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full`}>
                  <div className={`h-1 ${darkMode ? 'bg-green-600' : 'bg-green-500'} rounded-full`} style={{
                  width: `${activeUsers / totalUsers * 100}%`
                }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 rounded-lg border transition-colors duration-300`}>
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-600'}`}>
              <AlertTriangleIcon className="h-6 w-6" />
            </div>
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Pending Verification
              </p>
              <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                {pendingUsers}
              </p>
              <div className="flex items-center mt-1">
                <div className={`h-1 w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full`}>
                  <div className={`h-1 ${darkMode ? 'bg-yellow-600' : 'bg-yellow-500'} rounded-full`} style={{
                  width: `${pendingUsers / totalUsers * 100}%`
                }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 rounded-lg border transition-colors duration-300`}>
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-600'}`}>
              <XCircleIcon className="h-6 w-6" />
            </div>
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Suspended/Inactive
              </p>
              <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                {inactiveUsers + suspendedUsers}
              </p>
              <div className="flex items-center mt-1">
                <div className={`h-1 w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full`}>
                  <div className={`h-1 ${darkMode ? 'bg-red-600' : 'bg-red-500'} rounded-full`} style={{
                  width: `${(inactiveUsers + suspendedUsers) / totalUsers * 100}%`
                }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Insurance Distribution - responsive */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 rounded-lg border mb-6 transition-colors duration-300`}>
        <h2 className={`text-base sm:text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
          Insurance Distribution
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} p-3 rounded-lg transition-colors duration-300`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 ${darkMode ? 'bg-purple-700' : 'bg-purple-500'} rounded-full mr-2`}></div>
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Premium
                </span>
              </div>
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                {insuranceCounts.premium}
              </span>
            </div>
            <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-1.5`}>
              <div className={`${darkMode ? 'bg-purple-700' : 'bg-purple-500'} h-1.5 rounded-full`} style={{
              width: `${insuranceCounts.premium / totalUsers * 100}%`
            }}></div>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} p-3 rounded-lg transition-colors duration-300`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 ${darkMode ? 'bg-blue-700' : 'bg-blue-500'} rounded-full mr-2`}></div>
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Standard
                </span>
              </div>
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                {insuranceCounts.standard}
              </span>
            </div>
            <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-1.5`}>
              <div className={`${darkMode ? 'bg-blue-700' : 'bg-blue-500'} h-1.5 rounded-full`} style={{
              width: `${insuranceCounts.standard / totalUsers * 100}%`
            }}></div>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} p-3 rounded-lg transition-colors duration-300`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 ${darkMode ? 'bg-teal-700' : 'bg-teal-500'} rounded-full mr-2`}></div>
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Basic
                </span>
              </div>
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                {insuranceCounts.basic}
              </span>
            </div>
            <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-1.5`}>
              <div className={`${darkMode ? 'bg-teal-700' : 'bg-teal-500'} h-1.5 rounded-full`} style={{
              width: `${insuranceCounts.basic / totalUsers * 100}%`
            }}></div>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} p-3 rounded-lg transition-colors duration-300`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 ${darkMode ? 'bg-gray-600' : 'bg-gray-500'} rounded-full mr-2`}></div>
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  None
                </span>
              </div>
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                {insuranceCounts.none}
              </span>
            </div>
            <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-1.5`}>
              <div className={`${darkMode ? 'bg-gray-500' : 'bg-gray-500'} h-1.5 rounded-full`} style={{
              width: `${insuranceCounts.none / totalUsers * 100}%`
            }}></div>
            </div>
          </div>
        </div>
      </div>
      {/* Main User Table - responsive */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 sm:p-6 rounded-lg border transition-colors duration-300`}>
        <h2 className={`text-base sm:text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
          Fisher Folk Users
        </h2>
        <div className="mb-6 flex flex-col gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className={`h-5 w-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
            </div>
            <input type="text" placeholder="Search users by name, email, or location..." className={`block w-full pl-10 pr-3 py-2 border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'border-gray-300 text-gray-900 placeholder-gray-500'} rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 text-sm transition-colors duration-300`} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-2">
            <div className="relative">
              <select className={`block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300 text-gray-900'} focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md transition-colors duration-300`} value={filterRegion} onChange={e => setFilterRegion(e.target.value)}>
                <option value="all">All Regions</option>
                <option value="MIMAROPA">MIMAROPA</option>
                <option value="Central Visayas">Central Visayas</option>
                <option value="CALABARZON">CALABARZON</option>
                <option value="Davao Region">Davao Region</option>
                <option value="Western Visayas">Western Visayas</option>
                <option value="Zamboanga Peninsula">Zamboanga Peninsula</option>
                <option value="Eastern Visayas">Eastern Visayas</option>
              </select>
            </div>
            <div className="relative">
              <select className={`block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300 text-gray-900'} focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md transition-colors duration-300`} value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                <option value="all">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending">Pending</option>
                <option value="Suspended">Suspended</option>
              </select>
            </div>
            <div className="relative">
              <select className={`block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300 text-gray-900'} focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md transition-colors duration-300`} value={filterInsurance} onChange={e => setFilterInsurance(e.target.value)}>
                <option value="all">All Insurance</option>
                <option value="Active">Active</option>
                <option value="Expired">Expired</option>
                <option value="Pending">Pending</option>
                <option value="Inactive">Inactive</option>
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
        <div className="flex flex-col gap-6">
          {/* Table wrapper with horizontal scroll on mobile */}
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle px-4 sm:px-0">
              <table className={`min-w-full divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'} transition-colors duration-300`}>
                <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors duration-300`}>
                  <tr>
                    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                      User
                    </th>
                    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                      Location
                    </th>
                    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                      Status
                    </th>
                    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                      Insurance
                    </th>
                    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                      Joined
                    </th>
                    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className={`${darkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'} transition-colors duration-300`}>
                  {filteredUsers.map(user => <tr key={user.id} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors duration-200`}>
                      <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img className="h-10 w-10 rounded-full" src={user.avatar} alt={user.name} />
                          </div>
                          <div className="ml-4">
                            <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                              {user.name}
                              {user.verified && <BadgeCheckIcon className={`h-4 w-4 ${darkMode ? 'text-blue-400' : 'text-blue-500'} inline ml-1`} />}
                            </div>
                            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                        <div className={`text-sm ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                          {user.location}
                        </div>
                        <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                          {user.region}
                        </div>
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                        {getStatusBadge(user.status)}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                        <div className="flex flex-col space-y-1">
                          {getInsuranceBadge(user.insurance)}
                          {getInsuranceStatusBadge(user.insuranceStatus)}
                        </div>
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'} transition-colors duration-300`}>
                        <div>{user.joined}</div>
                        <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-400'} transition-colors duration-300`}>
                          Last active: {user.lastActive}
                        </div>
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium transition-colors duration-300`}>
                        <div className="flex space-x-2">
                          <button className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-900'} transition-colors duration-300`} title="View Details" onClick={() => handleViewUser(user.id)}>
                            <EyeIcon className="h-5 w-5" />
                          </button>
                          <button className={`${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-900'} transition-colors duration-300`} title="Edit User">
                            <EditIcon className="h-5 w-5" />
                          </button>
                          {user.status === 'Active' ? <button className={`${darkMode ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-900'} transition-colors duration-300`} title="Suspend User">
                              <XCircleIcon className="h-5 w-5" />
                            </button> : <button className={`${darkMode ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-900'} transition-colors duration-300`} title="Activate User">
                              <CheckCircleIcon className="h-5 w-5" />
                            </button>}
                        </div>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Pagination - responsive */}
        <div className={`flex flex-col sm:flex-row justify-between items-center mt-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} pt-4 gap-4 transition-colors duration-300`}>
          <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300 text-center sm:text-left`}>
            Showing <span className="font-medium">1</span> to{' '}
            <span className="font-medium">{filteredUsers.length}</span> of{' '}
            <span className="font-medium">{filteredUsers.length}</span> users
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
      {/* User Details Modal */}
      {showUserModal && selectedUser && <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn" onClick={handleCloseModal}>
          <div className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl transform transition-all duration-300 animate-scaleIn`} onClick={e => e.stopPropagation()}>
            {/* Close Button */}
            <button onClick={handleCloseModal} className={`absolute top-4 right-4 p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-colors duration-200`}>
              <XIcon className="h-5 w-5" />
            </button>
            {users.filter(u => u.id === selectedUser).map(user => <div key={user.id} className="p-6 sm:p-8">
                  {/* User Header */}
                  <div className="flex flex-col items-center mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="relative mb-4">
                      <img src={user.avatar} alt={user.name} className="h-24 w-24 rounded-full border-4 border-teal-500 shadow-lg" />
                      {user.verified && <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                          <BadgeCheckIcon className="h-5 w-5 text-white" />
                        </div>}
                    </div>
                    <h3 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-2`}>
                      {user.name}
                    </h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-3`}>
                      {user.email}
                    </p>
                    <div className="flex items-center gap-2">
                      {getStatusBadge(user.status)}
                      {user.verified && <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>
                          Verified
                        </span>}
                    </div>
                  </div>
                  {/* User Information Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Contact Information */}
                    <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} p-4 rounded-xl`}>
                      <h4 className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3 uppercase tracking-wide`}>
                        Contact Information
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>
                            Email Address
                          </p>
                          <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                            {user.email}
                          </p>
                        </div>
                        <div>
                          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>
                            Phone Number
                          </p>
                          <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                            {user.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Location Information */}
                    <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} p-4 rounded-xl`}>
                      <h4 className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3 uppercase tracking-wide`}>
                        Location
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <MapPinIcon className={`h-5 w-5 ${darkMode ? 'text-teal-400' : 'text-teal-600'} mr-2 mt-0.5`} />
                          <div>
                            <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                              {user.location}
                            </p>
                            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {user.region}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Insurance Details */}
                  <div className={`${darkMode ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' : 'bg-gradient-to-br from-blue-50 to-purple-50'} p-5 rounded-xl mb-6`}>
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} rounded-xl`}>
                        <HeartIcon className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2 uppercase tracking-wide`}>
                          Insurance Details
                        </h4>
                        <div className="flex items-center gap-2 mb-2">
                          <p className={`text-lg font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                            {user.insurance} Plan
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Status:
                          </span>
                          {getInsuranceStatusBadge(user.insuranceStatus)}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Registration Details */}
                  <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} p-5 rounded-xl mb-6`}>
                    <h4 className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4 uppercase tracking-wide`}>
                      Registration Details
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>
                          Date Joined
                        </p>
                        <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                          {user.joined}
                        </p>
                      </div>
                      <div>
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>
                          Last Active
                        </p>
                        <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                          {user.lastActive}
                        </p>
                      </div>
                      <div>
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>
                          Boat Registration
                        </p>
                        <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                          {user.boatRegistration}
                        </p>
                      </div>
                      <div>
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>
                          License Number
                        </p>
                        <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                          {user.licenseNumber}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button className={`inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-200`}>
                      <EditIcon className="h-4 w-4 mr-2" />
                      Edit Profile
                    </button>
                    {user.status === 'Active' ? <button className={`inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200`}>
                        <XCircleIcon className="h-4 w-4 mr-2" />
                        Suspend User
                      </button> : <button className={`inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200`}>
                        <CheckCircleIcon className="h-4 w-4 mr-2" />
                        Activate User
                      </button>}
                    {!user.verified && <button className={`inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 sm:col-span-2`}>
                        <BadgeCheckIcon className="h-4 w-4 mr-2" />
                        Verify User
                      </button>}
                  </div>
                </div>)}
          </div>
        </div>}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>;
};