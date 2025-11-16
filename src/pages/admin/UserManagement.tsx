import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { UserIcon, SearchIcon, FilterIcon, CheckCircleIcon, XCircleIcon, PlusIcon, TrashIcon, MailIcon, PhoneIcon, CalendarIcon, MapPinIcon, ShieldIcon, EyeIcon, XIcon, CheckIcon } from 'lucide-react';
export function UserManagement() {
  const {
    darkMode
  } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedUser, setSelectedUser] = useState(null);
  const [isUserDetailModalOpen, setIsUserDetailModalOpen] = useState(false);
  const [isDeactivateModalOpen, setIsDeactivateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  // Mock user data
  const [users, setUsers] = useState([{
    id: 1,
    name: 'Juan Dela Cruz',
    email: 'juan@example.com',
    phone: '+63 912 345 6789',
    role: 'fisher',
    status: 'active',
    address: "123 Fisherman's Wharf, Batangas City",
    location: 'Batangas City',
    dateRegistered: '2023-04-15',
    lastActive: '2023-05-18',
    profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    verificationStatus: 'verified'
  }, {
    id: 2,
    name: 'Maria Santos',
    email: 'maria@example.com',
    phone: '+63 923 456 7890',
    role: 'fisher',
    status: 'active',
    address: '456 Coastal Road, Batangas City',
    location: 'Batangas City',
    dateRegistered: '2023-04-20',
    lastActive: '2023-05-17',
    profileImage: 'https://randomuser.me/api/portraits/women/1.jpg',
    verificationStatus: 'verified'
  }, {
    id: 3,
    name: 'Pedro Reyes',
    email: 'pedro@example.com',
    phone: '+63 934 567 8901',
    role: 'fisher',
    status: 'inactive',
    address: '789 Beach Road, San Juan',
    location: 'San Juan',
    dateRegistered: '2023-05-01',
    lastActive: '2023-05-10',
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
    verificationStatus: 'pending'
  }, {
    id: 4,
    name: 'Ana Gonzales',
    email: 'ana@example.com',
    phone: '+63 945 678 9012',
    role: 'vendor',
    status: 'active',
    address: '101 Main Street, Lipa City',
    location: 'Lipa City',
    dateRegistered: '2023-05-05',
    lastActive: '2023-05-18',
    profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
    verificationStatus: 'verified'
  }, {
    id: 5,
    name: 'Roberto Lim',
    email: 'roberto@example.com',
    phone: '+63 956 789 0123',
    role: 'fisher',
    status: 'active',
    address: '202 Harbor Drive, Batangas City',
    location: 'Batangas City',
    dateRegistered: '2023-05-08',
    lastActive: '2023-05-15',
    profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
    verificationStatus: 'verified'
  }, {
    id: 6,
    name: 'Elena Magtanggol',
    email: 'elena@example.com',
    phone: '+63 967 890 1234',
    role: 'buyer',
    status: 'active',
    address: '303 Market Street, Lipa City',
    location: 'Lipa City',
    dateRegistered: '2023-05-10',
    lastActive: '2023-05-17',
    profileImage: 'https://randomuser.me/api/portraits/women/3.jpg',
    verificationStatus: 'verified'
  }]);
  // Filter users based on search term, role, and status
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase()) || user.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });
  const handleViewUser = user => {
    setSelectedUser(user);
    setIsUserDetailModalOpen(true);
  };
  const handleActivateUser = id => {
    setUsers(users.map(user => user.id === id ? {
      ...user,
      status: 'active'
    } : user));
    if (selectedUser && selectedUser.id === id) {
      setSelectedUser({
        ...selectedUser,
        status: 'active'
      });
    }
  };
  const handleDeactivateUser = () => {
    if (!selectedUser) return;
    setUsers(users.map(user => user.id === selectedUser.id ? {
      ...user,
      status: 'inactive'
    } : user));
    setSelectedUser({
      ...selectedUser,
      status: 'inactive'
    });
    setIsDeactivateModalOpen(false);
  };
  const handleDeleteUser = () => {
    if (!selectedUser) return;
    setUsers(users.filter(user => user.id !== selectedUser.id));
    setSelectedUser(null);
    setIsDeleteModalOpen(false);
    setIsUserDetailModalOpen(false);
  };
  const formatDate = dateString => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const getRoleBadge = role => {
    switch (role) {
      case 'fisher':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>
            Fisher
          </span>;
      case 'vendor':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-800'}`}>
            Vendor
          </span>;
      case 'buyer':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-100 text-teal-800'}`}>
            Buyer
          </span>;
      default:
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </span>;
    }
  };
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
      default:
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>;
    }
  };
  const getVerificationBadge = status => {
    switch (status) {
      case 'verified':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
            Verified
          </span>;
      case 'pending':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800'}`}>
            Pending
          </span>;
      case 'rejected':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'}`}>
            Rejected
          </span>;
      default:
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>;
    }
  };
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          User Management
        </h2>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
          Manage registered users and their account status
        </p>
      </div>
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} rounded-lg p-6 mb-6 border transition-colors duration-300`}>
        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className={`${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'} p-4 rounded-lg border transition-colors duration-300`}>
            <div className="flex items-center">
              <div className={`rounded-full p-3 ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                <UserIcon className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  Total Users
                </h3>
                <p className={`text-2xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {users.length}
                </p>
              </div>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'} p-4 rounded-lg border transition-colors duration-300`}>
            <div className="flex items-center">
              <div className={`rounded-full p-3 ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'}`}>
                <CheckCircleIcon className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  Active Users
                </h3>
                <p className={`text-2xl font-semibold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                  {users.filter(u => u.status === 'active').length}
                </p>
              </div>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'} p-4 rounded-lg border transition-colors duration-300`}>
            <div className="flex items-center">
              <div className={`rounded-full p-3 ${darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-600'}`}>
                <XCircleIcon className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  Inactive Users
                </h3>
                <p className={`text-2xl font-semibold ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                  {users.filter(u => u.status === 'inactive').length}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
            </div>
            <input type="text" className={`block w-full pl-10 pr-3 py-2 border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'bg-white border-gray-300 placeholder-gray-500'} rounded-md leading-5 focus:outline-none focus:placeholder-gray-400 focus:ring-1 ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`} placeholder="Search users by name, email, or location..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          <div className="sm:w-40 flex items-center">
            <FilterIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'} mr-2`} />
            <select className={`block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300'} focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm rounded-md transition-colors duration-300`} value={filterRole} onChange={e => setFilterRole(e.target.value)}>
              <option value="all">All Roles</option>
              <option value="fisher">Fisher</option>
              <option value="vendor">Vendor</option>
              <option value="buyer">Buyer</option>
            </select>
          </div>
          <div className="sm:w-40 flex items-center">
            <FilterIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'} mr-2`} />
            <select className={`block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300'} focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm rounded-md transition-colors duration-300`} value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
        {/* Users List */}
        <div className="overflow-x-auto">
          <table className={`min-w-full divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'} transition-colors duration-300`}>
            <thead className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} transition-colors duration-300`}>
              <tr>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                  User
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                  Role
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                  Location
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                  Registered
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                  Status
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                  Verification
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
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={user.profileImage} alt={user.name} />
                      </div>
                      <div className="ml-4">
                        <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                          {user.name}
                        </div>
                        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                    {getRoleBadge(user.role)}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                    <div className={`text-sm ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                      {user.location}
                    </div>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'} transition-colors duration-300`}>
                    {formatDate(user.dateRegistered)}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                    {getStatusBadge(user.status)}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                    {getVerificationBadge(user.verificationStatus)}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium transition-colors duration-300`}>
                    <div className="flex space-x-2">
                      <button onClick={() => handleViewUser(user)} className={`p-1 rounded-full ${darkMode ? 'text-teal-400 hover:bg-teal-900/30' : 'text-teal-600 hover:bg-teal-50'} transition-colors duration-300`} title="View Details">
                        <EyeIcon className="h-5 w-5" />
                      </button>
                      {user.status === 'active' ? <button onClick={() => {
                    setSelectedUser(user);
                    setIsDeactivateModalOpen(true);
                  }} className={`p-1 rounded-full ${darkMode ? 'text-yellow-400 hover:bg-yellow-900/30' : 'text-yellow-600 hover:bg-yellow-50'} transition-colors duration-300`} title="Deactivate User">
                          <XCircleIcon className="h-5 w-5" />
                        </button> : <button onClick={() => handleActivateUser(user.id)} className={`p-1 rounded-full ${darkMode ? 'text-green-400 hover:bg-green-900/30' : 'text-green-600 hover:bg-green-50'} transition-colors duration-300`} title="Activate User">
                          <CheckCircleIcon className="h-5 w-5" />
                        </button>}
                      <button onClick={() => {
                    setSelectedUser(user);
                    setIsDeleteModalOpen(true);
                  }} className={`p-1 rounded-full ${darkMode ? 'text-red-400 hover:bg-red-900/30' : 'text-red-600 hover:bg-red-50'} transition-colors duration-300`} title="Delete User">
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        {filteredUsers.length === 0 && <div className="text-center py-12">
            <UserIcon className={`mx-auto h-12 w-12 ${darkMode ? 'text-gray-500' : 'text-gray-400'} transition-colors duration-300`} />
            <h3 className={`mt-2 text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-900'} transition-colors duration-300`}>
              No users found
            </h3>
            <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
              Try adjusting your search or filters to find what you're looking
              for.
            </p>
          </div>}
        <div className={`mt-6 flex items-center justify-between border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} pt-4 transition-colors duration-300`}>
          <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
            Showing <span className="font-medium">{filteredUsers.length}</span>{' '}
            of <span className="font-medium">{users.length}</span> users
          </div>
          <div className="flex-1 flex justify-end">
            <button className={`relative inline-flex items-center px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} text-sm font-medium rounded-md transition-colors duration-300`}>
              Previous
            </button>
            <button className={`ml-3 relative inline-flex items-center px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} text-sm font-medium rounded-md transition-colors duration-300`}>
              Next
            </button>
          </div>
        </div>
      </div>
      {/* User Detail Modal */}
      {isUserDetailModalOpen && selectedUser && <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setIsUserDetailModalOpen(false)}></div>
          <div className={`relative ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg max-w-2xl w-full mx-auto p-6 shadow-xl transition-colors duration-300`}>
            <div className="flex justify-between items-start mb-6">
              <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                User Details
              </h3>
              <button onClick={() => setIsUserDetailModalOpen(false)} className={`${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-500'} transition-colors duration-300`}>
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 flex flex-col items-center mb-6 md:mb-0">
                <div className="relative">
                  <img src={selectedUser.profileImage} alt={selectedUser.name} className="h-32 w-32 rounded-full object-cover border-4 border-teal-500" />
                  <div className={`absolute bottom-0 right-0 h-6 w-6 rounded-full border-2 ${darkMode ? 'border-gray-800' : 'border-white'} ${selectedUser.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                    {selectedUser.name}
                  </h4>
                  <div className="mt-1">{getRoleBadge(selectedUser.role)}</div>
                  <div className="mt-2">
                    {getVerificationBadge(selectedUser.verificationStatus)}
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 md:pl-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MailIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'} mr-2 transition-colors duration-300`} />
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                      {selectedUser.email}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'} mr-2 transition-colors duration-300`} />
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                      {selectedUser.phone}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <MapPinIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'} mr-2 mt-0.5 transition-colors duration-300`} />
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                      {selectedUser.address}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'} mr-2 transition-colors duration-300`} />
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                      Registered on {formatDate(selectedUser.dateRegistered)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <ShieldIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'} mr-2 transition-colors duration-300`} />
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                      Last active on {formatDate(selectedUser.lastActive)}
                    </span>
                  </div>
                </div>
                <div className={`mt-6 pt-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} flex justify-end space-x-3 transition-colors duration-300`}>
                  {selectedUser.status === 'active' ? <button onClick={() => {
                setIsUserDetailModalOpen(false);
                setIsDeactivateModalOpen(true);
              }} className={`px-4 py-2 border ${darkMode ? 'border-yellow-600 text-yellow-400 hover:bg-yellow-900/20' : 'border-yellow-300 text-yellow-700 hover:bg-yellow-50'} rounded-md shadow-sm text-sm font-medium transition-colors duration-300`}>
                      <XCircleIcon className="h-4 w-4 mr-2 inline-block" />
                      Deactivate User
                    </button> : <button onClick={() => {
                handleActivateUser(selectedUser.id);
                setIsUserDetailModalOpen(false);
              }} className={`px-4 py-2 border ${darkMode ? 'border-green-600 text-green-400 hover:bg-green-900/20' : 'border-green-300 text-green-700 hover:bg-green-50'} rounded-md shadow-sm text-sm font-medium transition-colors duration-300`}>
                      <CheckCircleIcon className="h-4 w-4 mr-2 inline-block" />
                      Activate User
                    </button>}
                  <button onClick={() => {
                setIsUserDetailModalOpen(false);
                setIsDeleteModalOpen(true);
              }} className={`px-4 py-2 border ${darkMode ? 'border-red-600 text-red-400 hover:bg-red-900/20' : 'border-red-300 text-red-700 hover:bg-red-50'} rounded-md shadow-sm text-sm font-medium transition-colors duration-300`}>
                    <TrashIcon className="h-4 w-4 mr-2 inline-block" />
                    Delete User
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>}
      {/* Deactivate User Modal */}
      {isDeactivateModalOpen && selectedUser && <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setIsDeactivateModalOpen(false)}></div>
          <div className={`relative ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg max-w-md w-full mx-auto p-6 shadow-xl transition-colors duration-300`}>
            <div className="flex items-center justify-center mb-4">
              <div className={`rounded-full p-3 ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-600'} transition-colors duration-300`}>
                <XCircleIcon className="h-6 w-6" />
              </div>
            </div>
            <h3 className={`text-lg font-medium text-center ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4 transition-colors duration-300`}>
              Deactivate User Account
            </h3>
            <p className={`text-sm text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 transition-colors duration-300`}>
              Are you sure you want to deactivate {selectedUser.name}'s account?
              They will not be able to log in until the account is reactivated.
            </p>
            <div className="flex justify-center space-x-3">
              <button onClick={() => setIsDeactivateModalOpen(false)} className={`px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} rounded-md shadow-sm text-sm font-medium transition-colors duration-300`}>
                Cancel
              </button>
              <button onClick={handleDeactivateUser} className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${darkMode ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-yellow-600 hover:bg-yellow-700'} transition-colors duration-300`}>
                Deactivate
              </button>
            </div>
          </div>
        </div>}
      {/* Delete User Modal */}
      {isDeleteModalOpen && selectedUser && <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setIsDeleteModalOpen(false)}></div>
          <div className={`relative ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg max-w-md w-full mx-auto p-6 shadow-xl transition-colors duration-300`}>
            <div className="flex items-center justify-center mb-4">
              <div className={`rounded-full p-3 ${darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-600'} transition-colors duration-300`}>
                <TrashIcon className="h-6 w-6" />
              </div>
            </div>
            <h3 className={`text-lg font-medium text-center ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4 transition-colors duration-300`}>
              Delete User Account
            </h3>
            <p className={`text-sm text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 transition-colors duration-300`}>
              Are you sure you want to permanently delete {selectedUser.name}'s
              account? This action cannot be undone and all user data will be
              lost.
            </p>
            <div className="flex justify-center space-x-3">
              <button onClick={() => setIsDeleteModalOpen(false)} className={`px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} rounded-md shadow-sm text-sm font-medium transition-colors duration-300`}>
                Cancel
              </button>
              <button onClick={handleDeleteUser} className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${darkMode ? 'bg-red-600 hover:bg-red-700' : 'bg-red-600 hover:bg-red-700'} transition-colors duration-300`}>
                Delete
              </button>
            </div>
          </div>
        </div>}
    </div>;
}