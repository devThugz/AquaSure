import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { ShieldCheckIcon, ClockIcon, CheckCircleIcon, XCircleIcon, EyeIcon, CheckIcon, XIcon, UserIcon, MapPinIcon, SearchIcon, FilterIcon, CalendarIcon, MailIcon, FileTextIcon } from 'lucide-react';
export const VerificationRequests: React.FC = () => {
  const {
    darkMode
  } = useTheme();
  const [activeTab, setActiveTab] = useState('pending');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  // Mock verification requests data
  const verificationRequests = [{
    id: 1,
    name: 'Juan Dela Cruz',
    email: 'juan.delacruz@email.com',
    type: 'Fisher Registration',
    location: 'Batangas City',
    barangay: 'Barangay San Pedro',
    submitted: '2023-05-10',
    status: 'pending',
    documents: ['Valid ID', 'Fishing License', 'Barangay Clearance'],
    avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
    phone: '+63 912 345 6789'
  }, {
    id: 2,
    name: 'Maria Santos',
    email: 'maria.santos@email.com',
    type: 'License Renewal',
    location: 'Palawan',
    barangay: 'Barangay Santa Ana',
    submitted: '2023-05-09',
    status: 'pending',
    documents: ['Valid ID', 'Old License', 'Medical Certificate'],
    avatar: 'https://randomuser.me/api/portraits/women/21.jpg',
    phone: '+63 923 456 7890'
  }, {
    id: 3,
    name: 'Pedro Reyes',
    email: 'pedro.reyes@email.com',
    type: 'Boat Registration',
    location: 'Cebu',
    barangay: 'Barangay San Juan',
    submitted: '2023-05-08',
    status: 'pending',
    documents: ['Valid ID', 'Boat Ownership', 'Safety Inspection'],
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    phone: '+63 934 567 8901'
  }, {
    id: 4,
    name: 'Ana Lim',
    email: 'ana.lim@email.com',
    type: 'Fisher Registration',
    location: 'Davao',
    barangay: 'Barangay Santo Niño',
    submitted: '2023-05-07',
    status: 'approved',
    documents: ['Valid ID', 'Fishing License', 'Barangay Clearance'],
    avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
    phone: '+63 945 678 9012',
    approvedDate: '2023-05-17',
    approvedBy: 'Admin LGU'
  }, {
    id: 5,
    name: 'Roberto Cruz',
    email: 'roberto.cruz@email.com',
    type: 'License Renewal',
    location: 'Iloilo',
    barangay: 'Barangay Central',
    submitted: '2023-05-06',
    status: 'rejected',
    documents: ['Valid ID', 'Old License'],
    avatar: 'https://randomuser.me/api/portraits/men/24.jpg',
    phone: '+63 956 789 0123',
    rejectedDate: '2023-05-15',
    rejectedBy: 'Admin LGU',
    rejectionReason: 'Incomplete documentation. Missing medical certificate.'
  }];
  const pendingRequests = verificationRequests.filter(r => r.status === 'pending');
  const approvedRequests = verificationRequests.filter(r => r.status === 'approved');
  const rejectedRequests = verificationRequests.filter(r => r.status === 'rejected');
  // Filter requests based on active tab, search, and type
  const filteredRequests = verificationRequests.filter(request => {
    const matchesTab = activeTab === 'all' || request.status === activeTab;
    const matchesSearch = request.name.toLowerCase().includes(searchTerm.toLowerCase()) || request.email.toLowerCase().includes(searchTerm.toLowerCase()) || request.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || request.type === filterType;
    return matchesTab && matchesSearch && matchesType;
  });
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <span className={`px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800'}`}>
            Pending
          </span>;
      case 'approved':
        return <span className={`px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
            Approved
          </span>;
      case 'rejected':
        return <span className={`px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'}`}>
            Rejected
          </span>;
      default:
        return null;
    }
  };
  return <div className="max-w-7xl mx-auto">
      {/* Header - Matching Announcements style */}
      <div className="mb-6">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          Verification Requests
        </h2>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
          Review and validate user registration requests
        </p>
      </div>
      {/* Stats Overview - Horizontal layout with borders only */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className={`${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg border p-6`}>
          <div className="flex items-center">
            <div className={`rounded-full p-3 ${darkMode ? 'bg-yellow-900/30' : 'bg-yellow-100'}`}>
              <ClockIcon className={`h-6 w-6 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
            </div>
            <div className="ml-4">
              <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Pending
              </h3>
              <p className={`text-2xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                {pendingRequests.length}
              </p>
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg border p-6`}>
          <div className="flex items-center">
            <div className={`rounded-full p-3 ${darkMode ? 'bg-green-900/30' : 'bg-green-100'}`}>
              <CheckCircleIcon className={`h-6 w-6 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
            </div>
            <div className="ml-4">
              <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Approved
              </h3>
              <p className={`text-2xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                {approvedRequests.length}
              </p>
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg border p-6`}>
          <div className="flex items-center">
            <div className={`rounded-full p-3 ${darkMode ? 'bg-red-900/30' : 'bg-red-100'}`}>
              <XCircleIcon className={`h-6 w-6 ${darkMode ? 'text-red-400' : 'text-red-600'}`} />
            </div>
            <div className="ml-4">
              <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Rejected
              </h3>
              <p className={`text-2xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                {rejectedRequests.length}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Tabs and Filters - Matching Announcements style */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex space-x-2">
          <button onClick={() => setActiveTab('pending')} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'pending' ? darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800' : darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}>
            Pending
          </button>
          <button onClick={() => setActiveTab('approved')} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'approved' ? darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800' : darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}>
            Approved
          </button>
          <button onClick={() => setActiveTab('rejected')} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'rejected' ? darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800' : darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}>
            Rejected
          </button>
          <button onClick={() => setActiveTab('all')} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'all' ? darkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-100 text-teal-800' : darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}>
            All Requests
          </button>
        </div>
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-initial">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
            </div>
            <input type="text" className={`block w-full pl-10 pr-3 py-2 border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'bg-white border-gray-300 placeholder-gray-500'} rounded-md leading-5 sm:text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500`} placeholder="Search requests..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          <div className="flex items-center">
            <FilterIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'} mr-2`} />
            <select className={`block pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300'} focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md`} value={filterType} onChange={e => setFilterType(e.target.value)}>
              <option value="all">All Types</option>
              <option value="Fisher Registration">Fisher Registration</option>
              <option value="License Renewal">License Renewal</option>
              <option value="Boat Registration">Boat Registration</option>
            </select>
          </div>
        </div>
      </div>
      {/* Verification Request Cards - Matching Announcements card style */}
      <div className="space-y-6">
        {filteredRequests.map(request => <div key={request.id} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow overflow-hidden border`}>
            <div className="md:flex">
              {/* Avatar/Image Section */}
              <div className="md:flex-shrink-0">
                <div className="h-48 w-full md:h-full md:w-48 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                  <img className="h-32 w-32 rounded-full border-4 border-white shadow-lg" src={request.avatar} alt={request.name} />
                </div>
              </div>
              {/* Content Section */}
              <div className="p-6 flex-1">
                <div className="flex items-center mb-2">
                  {getStatusBadge(request.status)}
                  <div className={`flex items-center text-sm ml-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {new Date(request.submitted).toLocaleDateString()}
                  </div>
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {request.name}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className={`flex items-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <MailIcon className="h-4 w-4 mr-2" />
                    {request.email}
                  </div>
                  <div className={`flex items-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <MapPinIcon className="h-4 w-4 mr-2" />
                    {request.location} - {request.barangay}
                  </div>
                  <div className={`flex items-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <FileTextIcon className="h-4 w-4 mr-2" />
                    {request.type}
                  </div>
                </div>
                <div className="mb-4">
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-2`}>
                    Documents: {request.documents.join(', ')}
                  </p>
                </div>
                {request.status === 'approved' && <div className={`text-sm ${darkMode ? 'text-green-400' : 'text-green-600'} mb-4`}>
                    Approved on {request.approvedDate} by {request.approvedBy}
                  </div>}
                {request.status === 'rejected' && <div className={`text-sm ${darkMode ? 'text-red-400' : 'text-red-600'} mb-4`}>
                    <p className="font-medium">
                      Rejected on {request.rejectedDate} by {request.rejectedBy}
                    </p>
                    <p className="mt-1">Reason: {request.rejectionReason}</p>
                  </div>}
                <div className="flex justify-between items-center">
                  <div className={`flex items-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <UserIcon className="h-4 w-4 mr-1" />
                    {request.documents.length} documents submitted
                  </div>
                  <div className="flex space-x-2">
                    <button className={`p-2 rounded-full ${darkMode ? 'text-teal-400 hover:bg-teal-900/30' : 'text-teal-600 hover:bg-teal-50'} transition-colors`} title="View Details">
                      <EyeIcon className="h-5 w-5" />
                    </button>
                    {request.status === 'pending' && <>
                        <button className={`p-2 rounded-full ${darkMode ? 'text-green-400 hover:bg-green-900/30' : 'text-green-600 hover:bg-green-50'} transition-colors`} title="Approve">
                          <CheckIcon className="h-5 w-5" />
                        </button>
                        <button className={`p-2 rounded-full ${darkMode ? 'text-red-400 hover:bg-red-900/30' : 'text-red-600 hover:bg-red-50'} transition-colors`} title="Reject">
                          <XIcon className="h-5 w-5" />
                        </button>
                      </>}
                  </div>
                </div>
              </div>
            </div>
          </div>)}
      </div>
      {filteredRequests.length === 0 && <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow border p-12 text-center`}>
          <ShieldCheckIcon className={`mx-auto h-12 w-12 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
          <h3 className={`mt-2 text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            No verification requests found
          </h3>
          <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>}
    </div>;
};