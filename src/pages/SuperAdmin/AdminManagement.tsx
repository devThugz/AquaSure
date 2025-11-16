import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Users2Icon, ShieldIcon, PlusIcon, SearchIcon, MapPinIcon, BarChart2Icon, CheckCircleIcon, XCircleIcon, AlertTriangleIcon, EyeIcon, EditIcon, TrashIcon, RefreshCwIcon, KeyIcon, GlobeIcon, CalendarIcon, ClockIcon, MailIcon, PhoneIcon, MessageSquareIcon, ArrowUpIcon, ArrowDownIcon, XIcon, SaveIcon } from 'lucide-react';
interface Admin {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  lgu: string;
  region: string;
  users: number;
  status: string;
  lastActive: string;
  joined: string;
  performance: {
    rating: number;
    verificationRate: number;
    responseTime: string;
    userSatisfaction: number;
    completedTasks: number;
  };
  avatar: string;
}
export const AdminManagement: React.FC = () => {
  const {
    darkMode
  } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRegion, setFilterRegion] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedAdmin, setSelectedAdmin] = useState<number | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState<Admin | null>(null);
  const [deletingAdmin, setDeletingAdmin] = useState<Admin | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    lgu: '',
    region: ''
  });
  // Mock admin data
  const [admins, setAdmins] = useState<Admin[]>([{
    id: 1,
    name: 'Maria Santos',
    email: 'maria@lgu.gov.ph',
    phone: '+63 912 345 6789',
    role: 'Regional Admin',
    lgu: 'Cebu City',
    region: 'Central Visayas',
    users: 234,
    status: 'Active',
    lastActive: '2 hours ago',
    joined: 'Jan 15, 2023',
    performance: {
      rating: 4.8,
      verificationRate: 98,
      responseTime: '1.2 hours',
      userSatisfaction: 92,
      completedTasks: 156
    },
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
  }, {
    id: 2,
    name: 'Jose Reyes',
    email: 'jose@lgu.gov.ph',
    phone: '+63 923 456 7890',
    role: 'Regional Admin',
    lgu: 'Davao City',
    region: 'Davao Region',
    users: 187,
    status: 'Active',
    lastActive: '5 hours ago',
    joined: 'Feb 22, 2023',
    performance: {
      rating: 4.5,
      verificationRate: 95,
      responseTime: '1.5 hours',
      userSatisfaction: 89,
      completedTasks: 132
    },
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
  }, {
    id: 3,
    name: 'Ana Lim',
    email: 'ana@lgu.gov.ph',
    phone: '+63 934 567 8901',
    role: 'Regional Admin',
    lgu: 'Iloilo City',
    region: 'Western Visayas',
    users: 156,
    status: 'Inactive',
    lastActive: '2 weeks ago',
    joined: 'Mar 10, 2023',
    performance: {
      rating: 3.9,
      verificationRate: 82,
      responseTime: '2.8 hours',
      userSatisfaction: 78,
      completedTasks: 95
    },
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
  }, {
    id: 4,
    name: 'Roberto Cruz',
    email: 'roberto@lgu.gov.ph',
    phone: '+63 945 678 9012',
    role: 'Regional Admin',
    lgu: 'Tacloban City',
    region: 'Eastern Visayas',
    users: 98,
    status: 'Active',
    lastActive: '1 day ago',
    joined: 'Apr 5, 2023',
    performance: {
      rating: 4.2,
      verificationRate: 90,
      responseTime: '1.8 hours',
      userSatisfaction: 85,
      completedTasks: 110
    },
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
  }, {
    id: 5,
    name: 'Elena Garcia',
    email: 'elena@lgu.gov.ph',
    phone: '+63 956 789 0123',
    role: 'Regional Admin',
    lgu: 'Zamboanga City',
    region: 'Zamboanga Peninsula',
    users: 112,
    status: 'Active',
    lastActive: '3 hours ago',
    joined: 'May 18, 2023',
    performance: {
      rating: 4.6,
      verificationRate: 94,
      responseTime: '1.3 hours',
      userSatisfaction: 91,
      completedTasks: 128
    },
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg'
  }, {
    id: 6,
    name: 'Carlos Tan',
    email: 'carlos@lgu.gov.ph',
    phone: '+63 967 890 1234',
    role: 'Regional Admin',
    lgu: 'Baguio City',
    region: 'Cordillera',
    users: 145,
    status: 'Active',
    lastActive: '6 hours ago',
    joined: 'Jun 7, 2023',
    performance: {
      rating: 4.4,
      verificationRate: 92,
      responseTime: '1.6 hours',
      userSatisfaction: 87,
      completedTasks: 118
    },
    avatar: 'https://randomuser.me/api/portraits/men/6.jpg'
  }, {
    id: 7,
    name: 'Rosario Mendoza',
    email: 'rosario@lgu.gov.ph',
    phone: '+63 978 901 2345',
    role: 'Regional Admin',
    lgu: 'Legazpi City',
    region: 'Bicol Region',
    users: 89,
    status: 'Suspended',
    lastActive: '1 month ago',
    joined: 'Jul 15, 2023',
    performance: {
      rating: 3.2,
      verificationRate: 76,
      responseTime: '3.5 hours',
      userSatisfaction: 68,
      completedTasks: 65
    },
    avatar: 'https://randomuser.me/api/portraits/women/7.jpg'
  }]);
  // Filter admins based on search and filters
  const filteredAdmins = admins.filter(admin => {
    const matchesSearch = admin.name.toLowerCase().includes(searchTerm.toLowerCase()) || admin.email.toLowerCase().includes(searchTerm.toLowerCase()) || admin.lgu.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = filterRegion === 'all' || admin.region === filterRegion;
    const matchesStatus = filterStatus === 'all' || admin.status === filterStatus;
    return matchesSearch && matchesRegion && matchesStatus;
  });
  // Calculate admin stats
  const totalAdmins = admins.length;
  const activeAdmins = admins.filter(a => a.status === 'Active').length;
  const inactiveAdmins = admins.filter(a => a.status === 'Inactive').length;
  const suspendedAdmins = admins.filter(a => a.status === 'Suspended').length;
  const totalUsers = admins.reduce((sum, admin) => sum + admin.users, 0);
  const avgRating = admins.reduce((sum, admin) => sum + admin.performance.rating, 0) / admins.length;
  const avgVerificationRate = admins.reduce((sum, admin) => sum + admin.performance.verificationRate, 0) / admins.length;
  const avgSatisfaction = admins.reduce((sum, admin) => sum + admin.performance.userSatisfaction, 0) / admins.length;
  const handleAddAdmin = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      lgu: '',
      region: ''
    });
    setShowAddModal(true);
  };
  const handleEditAdmin = (admin: Admin) => {
    setEditingAdmin(admin);
    setFormData({
      name: admin.name,
      email: admin.email,
      phone: admin.phone,
      lgu: admin.lgu,
      region: admin.region
    });
    setShowEditModal(true);
  };
  const handleDeleteAdmin = (admin: Admin) => {
    setDeletingAdmin(admin);
    setShowDeleteModal(true);
  };
  const handleSaveNewAdmin = () => {
    const newAdmin: Admin = {
      id: admins.length + 1,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      role: 'Regional Admin',
      lgu: formData.lgu,
      region: formData.region,
      users: 0,
      status: 'Active',
      lastActive: 'Just now',
      joined: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      performance: {
        rating: 0,
        verificationRate: 0,
        responseTime: '0 hours',
        userSatisfaction: 0,
        completedTasks: 0
      },
      avatar: 'https://randomuser.me/api/portraits/lego/1.jpg'
    };
    setAdmins([...admins, newAdmin]);
    setShowAddModal(false);
  };
  const handleSaveEditAdmin = () => {
    if (!editingAdmin) return;
    setAdmins(admins.map(admin => admin.id === editingAdmin.id ? {
      ...admin,
      ...formData
    } : admin));
    setShowEditModal(false);
    setEditingAdmin(null);
  };
  const handleConfirmDelete = () => {
    if (!deletingAdmin) return;
    setAdmins(admins.filter(admin => admin.id !== deletingAdmin.id));
    setShowDeleteModal(false);
    setDeletingAdmin(null);
    setSelectedAdmin(null);
  };
  const handleToggleStatus = (adminId: number) => {
    setAdmins(admins.map(admin => admin.id === adminId ? {
      ...admin,
      status: admin.status === 'Active' ? 'Inactive' : 'Active'
    } : admin));
  };
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
            Active
          </span>;
      case 'Inactive':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-gray-900/30 text-gray-400' : 'bg-gray-100 text-gray-800'}`}>
            Inactive
          </span>;
      case 'Suspended':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'}`}>
            Suspended
          </span>;
      default:
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-gray-900/30 text-gray-400' : 'bg-gray-100 text-gray-800'}`}>
            {status}
          </span>;
    }
  };
  const getRatingBadge = (rating: number) => {
    if (rating >= 4.5) {
      return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
          Excellent
        </span>;
    } else if (rating >= 4.0) {
      return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>
          Good
        </span>;
    } else if (rating >= 3.5) {
      return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800'}`}>
          Average
        </span>;
    } else {
      return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'}`}>
          Needs Improvement
        </span>;
    }
  };
  return <div className="max-w-full overflow-x-hidden">
      <div className="mb-6">
        <h1 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          Admin Management
        </h1>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Manage Local Government Unit administrators
        </p>
      </div>

      {/* Admin Stats Overview - with full dark mode and responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-4 rounded-lg shadow-sm border`}>
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-600'} mr-4`}>
              <ShieldIcon className="h-6 w-6" />
            </div>
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Total Admins
              </p>
              <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                {totalAdmins}
              </p>
              <div className="flex items-center mt-1">
                <div className={`h-1 w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full`}>
                  <div className={`h-1 ${darkMode ? 'bg-purple-600' : 'bg-purple-500'} rounded-full`} style={{
                  width: '100%'
                }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-4 rounded-lg shadow-sm border`}>
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'} mr-4`}>
              <CheckCircleIcon className="h-6 w-6" />
            </div>
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Active Admins
              </p>
              <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                {activeAdmins}
              </p>
              <div className="flex items-center mt-1">
                <div className={`h-1 w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full`}>
                  <div className={`h-1 ${darkMode ? 'bg-green-600' : 'bg-green-500'} rounded-full`} style={{
                  width: `${activeAdmins / totalAdmins * 100}%`
                }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-4 rounded-lg shadow-sm border`}>
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'} mr-4`}>
              <Users2Icon className="h-6 w-6" />
            </div>
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Total Users Managed
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
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-4 rounded-lg shadow-sm border`}>
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-600'} mr-4`}>
              <XCircleIcon className="h-6 w-6" />
            </div>
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Inactive/Suspended
              </p>
              <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                {inactiveAdmins + suspendedAdmins}
              </p>
              <div className="flex items-center mt-1">
                <div className={`h-1 w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full`}>
                  <div className={`h-1 ${darkMode ? 'bg-red-600' : 'bg-red-500'} rounded-full`} style={{
                  width: `${(inactiveAdmins + suspendedAdmins) / totalAdmins * 100}%`
                }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics - responsive */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-4 rounded-lg shadow-sm border mb-6`}>
        <h2 className={`text-base sm:text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
          Admin Performance Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-3 rounded-lg`}>
            <div className="flex items-center justify-between mb-1">
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Average Rating
              </p>
              <p className={`text-lg font-semibold ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                {avgRating.toFixed(1)}/5.0
              </p>
            </div>
            <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-1.5 mb-1`}>
              <div className={`${darkMode ? 'bg-teal-600' : 'bg-teal-500'} h-1.5 rounded-full`} style={{
              width: `${avgRating / 5 * 100}%`
            }}></div>
            </div>
            <div className={`flex justify-between text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <span>0</span>
              <span>2.5</span>
              <span>5.0</span>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-3 rounded-lg`}>
            <div className="flex items-center justify-between mb-1">
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Verification Rate
              </p>
              <p className={`text-lg font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {avgVerificationRate.toFixed(1)}%
              </p>
            </div>
            <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-1.5 mb-1`}>
              <div className={`${darkMode ? 'bg-blue-600' : 'bg-blue-500'} h-1.5 rounded-full`} style={{
              width: `${avgVerificationRate}%`
            }}></div>
            </div>
            <div className={`flex justify-between text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-3 rounded-lg`}>
            <div className="flex items-center justify-between mb-1">
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                User Satisfaction
              </p>
              <p className={`text-lg font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                {avgSatisfaction.toFixed(1)}%
              </p>
            </div>
            <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-1.5 mb-1`}>
              <div className={`${darkMode ? 'bg-purple-600' : 'bg-purple-500'} h-1.5 rounded-full`} style={{
              width: `${avgSatisfaction}%`
            }}></div>
            </div>
            <div className={`flex justify-between text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Admin Table - responsive */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-4 sm:p-6 rounded-lg shadow-sm border`}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className={`text-base sm:text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            All Admins
          </h2>
          <button className={`w-full sm:w-auto px-4 py-2 ${darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-600 hover:bg-teal-700'} text-white rounded-md flex items-center justify-center`} onClick={handleAddAdmin}>
            <PlusIcon className="h-4 w-4 mr-2" />
            Add New Admin
          </button>
        </div>

        <div className="mb-6 flex flex-col gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className={`h-5 w-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
            </div>
            <input type="text" placeholder="Search admins by name, email, or LGU..." className={`block w-full pl-10 pr-3 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300 placeholder-gray-500' : 'border-gray-300 bg-white text-gray-900'} rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 text-sm`} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <select className={`block w-full sm:w-auto pl-3 pr-10 py-2 text-base ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-900'} focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-sm rounded-md`} value={filterRegion} onChange={e => setFilterRegion(e.target.value)}>
              <option value="all">All Regions</option>
              <option value="Central Visayas">Central Visayas</option>
              <option value="Davao Region">Davao Region</option>
              <option value="Western Visayas">Western Visayas</option>
              <option value="Eastern Visayas">Eastern Visayas</option>
              <option value="Zamboanga Peninsula">Zamboanga Peninsula</option>
              <option value="Cordillera">Cordillera</option>
              <option value="Bicol Region">Bicol Region</option>
            </select>
            <select className={`block w-full sm:w-auto pl-3 pr-10 py-2 text-base ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-900'} focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-sm rounded-md`} value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
              <option value="all">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Suspended">Suspended</option>
            </select>
            <button className={`inline-flex items-center justify-center px-4 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300 hover:bg-gray-600' : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'} shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500`}>
              <RefreshCwIcon className="h-4 w-4 mr-2" />
              Refresh
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle px-4 sm:px-0">
              <table className={`min-w-full divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
                  <tr>
                    <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                      Name
                    </th>
                    <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                      LGU
                    </th>
                    <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                      Users
                    </th>
                    <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                      Status
                    </th>
                    <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                      Performance
                    </th>
                    <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className={`${darkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}`}>
                  {filteredAdmins.map(admin => <tr key={admin.id} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} ${selectedAdmin === admin.id ? darkMode ? 'bg-gray-700' : 'bg-blue-50' : ''}`} onClick={() => setSelectedAdmin(admin.id)}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img className="h-10 w-10 rounded-full" src={admin.avatar} alt={admin.name} />
                          </div>
                          <div className="ml-4">
                            <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                              {admin.name}
                            </div>
                            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {admin.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                          {admin.lgu}
                        </div>
                        <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {admin.region}
                        </div>
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        {admin.users}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(admin.status)}
                        <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                          Last active: {admin.lastActive}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => <div key={i} className={`h-3 w-3 ${i < Math.floor(admin.performance.rating) ? 'text-yellow-400' : darkMode ? 'text-gray-600' : 'text-gray-300'}`}>
                                ★
                              </div>)}
                          </div>
                          <span className={`ml-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            {admin.performance.rating}
                          </span>
                        </div>
                        <div className="mt-1">
                          {getRatingBadge(admin.performance.rating)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-900'}`} title="View Details" onClick={e => {
                        e.stopPropagation();
                        setSelectedAdmin(admin.id);
                      }}>
                            <EyeIcon className="h-5 w-5" />
                          </button>
                          <button className={`${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-900'}`} title="Edit Admin" onClick={e => {
                        e.stopPropagation();
                        handleEditAdmin(admin);
                      }}>
                            <EditIcon className="h-5 w-5" />
                          </button>
                          {admin.status === 'Active' ? <button className={`${darkMode ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-900'}`} title="Suspend Admin" onClick={e => {
                        e.stopPropagation();
                        handleToggleStatus(admin.id);
                      }}>
                              <XCircleIcon className="h-5 w-5" />
                            </button> : <button className={`${darkMode ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-900'}`} title="Activate Admin" onClick={e => {
                        e.stopPropagation();
                        handleToggleStatus(admin.id);
                      }}>
                              <CheckCircleIcon className="h-5 w-5" />
                            </button>}
                          <button className={`${darkMode ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-900'}`} title="Delete Admin" onClick={e => {
                        e.stopPropagation();
                        handleDeleteAdmin(admin);
                      }}>
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>

          {/* Admin Details Sidebar - responsive */}
          {selectedAdmin && <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
              {admins.filter(a => a.id === selectedAdmin).map(admin => <div key={admin.id} className="space-y-4">
                    <div className="flex flex-col items-center">
                      <img src={admin.avatar} alt={admin.name} className="h-20 w-20 rounded-full mb-2" />
                      <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                        {admin.name}
                      </h3>
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {admin.role}
                      </div>
                      <div className="flex items-center mt-1">
                        {getStatusBadge(admin.status)}
                      </div>
                    </div>

                    <div className={`border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'} pt-4`}>
                      <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} mb-2`}>
                        Contact Information
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <MailIcon className={`h-4 w-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'} mr-2`} />
                          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                            {admin.email}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <PhoneIcon className={`h-4 w-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'} mr-2`} />
                          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                            {admin.phone}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className={`border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'} pt-4`}>
                      <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} mb-2`}>
                        Location
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <MapPinIcon className={`h-4 w-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'} mr-2`} />
                          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                            {admin.lgu}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <GlobeIcon className={`h-4 w-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'} mr-2`} />
                          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                            {admin.region}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className={`border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'} pt-4`}>
                      <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} mb-2`}>
                        Performance Metrics
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              Rating
                            </span>
                            <span className={`text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                              {admin.performance.rating}/5.0
                            </span>
                          </div>
                          <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-1`}>
                            <div className={`${darkMode ? 'bg-teal-600' : 'bg-teal-500'} h-1 rounded-full`} style={{
                      width: `${admin.performance.rating / 5 * 100}%`
                    }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              Verification Rate
                            </span>
                            <span className={`text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                              {admin.performance.verificationRate}%
                            </span>
                          </div>
                          <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-1`}>
                            <div className={`${darkMode ? 'bg-blue-600' : 'bg-blue-500'} h-1 rounded-full`} style={{
                      width: `${admin.performance.verificationRate}%`
                    }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              Response Time
                            </span>
                            <span className={`text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                              {admin.performance.responseTime}
                            </span>
                          </div>
                          <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-1`}>
                            <div className={`${darkMode ? 'bg-purple-600' : 'bg-purple-500'} h-1 rounded-full`} style={{
                      width: `${100 - parseFloat(admin.performance.responseTime) / 4 * 100}%`
                    }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              User Satisfaction
                            </span>
                            <span className={`text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                              {admin.performance.userSatisfaction}%
                            </span>
                          </div>
                          <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-1`}>
                            <div className={`${darkMode ? 'bg-green-600' : 'bg-green-500'} h-1 rounded-full`} style={{
                      width: `${admin.performance.userSatisfaction}%`
                    }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'} pt-4`}>
                      <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} mb-2`}>
                        Account Information
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Joined
                          </p>
                          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                            {admin.joined}
                          </p>
                        </div>
                        <div>
                          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Last Active
                          </p>
                          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                            {admin.lastActive}
                          </p>
                        </div>
                        <div>
                          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Users Managed
                          </p>
                          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                            {admin.users}
                          </p>
                        </div>
                        <div>
                          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Tasks Completed
                          </p>
                          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                            {admin.performance.completedTasks}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className={`border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'} pt-4 flex flex-col space-y-2`}>
                      <button className={`inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-600 hover:bg-teal-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500`} onClick={() => handleEditAdmin(admin)}>
                        <EditIcon className="h-4 w-4 mr-2" />
                        Edit Admin
                      </button>
                      <button className={`inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}>
                        <KeyIcon className="h-4 w-4 mr-2" />
                        Reset Password
                      </button>
                      {admin.status === 'Active' ? <button className={`inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${darkMode ? 'bg-red-600 hover:bg-red-700' : 'bg-red-600 hover:bg-red-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`} onClick={() => handleToggleStatus(admin.id)}>
                          <XCircleIcon className="h-4 w-4 mr-2" />
                          Suspend Admin
                        </button> : <button className={`inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600 hover:bg-green-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`} onClick={() => handleToggleStatus(admin.id)}>
                          <CheckCircleIcon className="h-4 w-4 mr-2" />
                          Activate Admin
                        </button>}
                      <button className={`inline-flex items-center justify-center px-4 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 bg-white hover:bg-gray-50'} rounded-md shadow-sm text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500`}>
                        <MessageSquareIcon className="h-4 w-4 mr-2" />
                        Message Admin
                      </button>
                    </div>
                  </div>)}
            </div>}
        </div>
      </div>

      {/* Add Admin Modal */}
      {showAddModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 w-full max-w-md`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Add New Admin
              </h3>
              <button onClick={() => setShowAddModal(false)} className={`${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}>
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                  Full Name
                </label>
                <input type="text" value={formData.name} onChange={e => setFormData({
              ...formData,
              name: e.target.value
            })} className={`w-full px-3 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-900'} rounded-md focus:ring-teal-500 focus:border-teal-500`} placeholder="Enter admin name" />
              </div>
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                  Email
                </label>
                <input type="email" value={formData.email} onChange={e => setFormData({
              ...formData,
              email: e.target.value
            })} className={`w-full px-3 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-900'} rounded-md focus:ring-teal-500 focus:border-teal-500`} placeholder="admin@lgu.gov.ph" />
              </div>
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                  Phone
                </label>
                <input type="tel" value={formData.phone} onChange={e => setFormData({
              ...formData,
              phone: e.target.value
            })} className={`w-full px-3 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-900'} rounded-md focus:ring-teal-500 focus:border-teal-500`} placeholder="+63 912 345 6789" />
              </div>
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                  LGU
                </label>
                <input type="text" value={formData.lgu} onChange={e => setFormData({
              ...formData,
              lgu: e.target.value
            })} className={`w-full px-3 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-900'} rounded-md focus:ring-teal-500 focus:border-teal-500`} placeholder="City/Municipality" />
              </div>
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                  Region
                </label>
                <select value={formData.region} onChange={e => setFormData({
              ...formData,
              region: e.target.value
            })} className={`w-full px-3 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-900'} rounded-md focus:ring-teal-500 focus:border-teal-500`}>
                  <option value="">Select Region</option>
                  <option value="Central Visayas">Central Visayas</option>
                  <option value="Davao Region">Davao Region</option>
                  <option value="Western Visayas">Western Visayas</option>
                  <option value="Eastern Visayas">Eastern Visayas</option>
                  <option value="Zamboanga Peninsula">
                    Zamboanga Peninsula
                  </option>
                  <option value="Cordillera">Cordillera</option>
                  <option value="Bicol Region">Bicol Region</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button onClick={() => setShowAddModal(false)} className={`px-4 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300 hover:bg-gray-600' : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'} rounded-md text-sm font-medium`}>
                Cancel
              </button>
              <button onClick={handleSaveNewAdmin} className={`px-4 py-2 ${darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-600 hover:bg-teal-700'} text-white rounded-md text-sm font-medium flex items-center`}>
                <SaveIcon className="h-4 w-4 mr-2" />
                Add Admin
              </button>
            </div>
          </div>
        </div>}

      {/* Edit Admin Modal */}
      {showEditModal && editingAdmin && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 w-full max-w-md`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Edit Admin
              </h3>
              <button onClick={() => setShowEditModal(false)} className={`${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}>
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                  Full Name
                </label>
                <input type="text" value={formData.name} onChange={e => setFormData({
              ...formData,
              name: e.target.value
            })} className={`w-full px-3 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-900'} rounded-md focus:ring-teal-500 focus:border-teal-500`} />
              </div>
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                  Email
                </label>
                <input type="email" value={formData.email} onChange={e => setFormData({
              ...formData,
              email: e.target.value
            })} className={`w-full px-3 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-900'} rounded-md focus:ring-teal-500 focus:border-teal-500`} />
              </div>
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                  Phone
                </label>
                <input type="tel" value={formData.phone} onChange={e => setFormData({
              ...formData,
              phone: e.target.value
            })} className={`w-full px-3 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-900'} rounded-md focus:ring-teal-500 focus:border-teal-500`} />
              </div>
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                  LGU
                </label>
                <input type="text" value={formData.lgu} onChange={e => setFormData({
              ...formData,
              lgu: e.target.value
            })} className={`w-full px-3 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-900'} rounded-md focus:ring-teal-500 focus:border-teal-500`} />
              </div>
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                  Region
                </label>
                <select value={formData.region} onChange={e => setFormData({
              ...formData,
              region: e.target.value
            })} className={`w-full px-3 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-900'} rounded-md focus:ring-teal-500 focus:border-teal-500`}>
                  <option value="">Select Region</option>
                  <option value="Central Visayas">Central Visayas</option>
                  <option value="Davao Region">Davao Region</option>
                  <option value="Western Visayas">Western Visayas</option>
                  <option value="Eastern Visayas">Eastern Visayas</option>
                  <option value="Zamboanga Peninsula">
                    Zamboanga Peninsula
                  </option>
                  <option value="Cordillera">Cordillera</option>
                  <option value="Bicol Region">Bicol Region</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button onClick={() => setShowEditModal(false)} className={`px-4 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300 hover:bg-gray-600' : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'} rounded-md text-sm font-medium`}>
                Cancel
              </button>
              <button onClick={handleSaveEditAdmin} className={`px-4 py-2 ${darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-600 hover:bg-teal-700'} text-white rounded-md text-sm font-medium flex items-center`}>
                <SaveIcon className="h-4 w-4 mr-2" />
                Save Changes
              </button>
            </div>
          </div>
        </div>}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && deletingAdmin && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 w-full max-w-md`}>
            <div className="flex items-center mb-4">
              <div className={`flex-shrink-0 ${darkMode ? 'bg-red-900/30' : 'bg-red-100'} rounded-full p-3`}>
                <AlertTriangleIcon className={`h-6 w-6 ${darkMode ? 'text-red-400' : 'text-red-600'}`} />
              </div>
              <h3 className={`ml-3 text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Delete Admin
              </h3>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'} mb-4`}>
              Are you sure you want to delete{' '}
              <span className="font-semibold">{deletingAdmin.name}</span>? This
              action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button onClick={() => setShowDeleteModal(false)} className={`px-4 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300 hover:bg-gray-600' : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'} rounded-md text-sm font-medium`}>
                Cancel
              </button>
              <button onClick={handleConfirmDelete} className={`px-4 py-2 ${darkMode ? 'bg-red-600 hover:bg-red-700' : 'bg-red-600 hover:bg-red-700'} text-white rounded-md text-sm font-medium flex items-center`}>
                <TrashIcon className="h-4 w-4 mr-2" />
                Delete Admin
              </button>
            </div>
          </div>
        </div>}
    </div>;
};