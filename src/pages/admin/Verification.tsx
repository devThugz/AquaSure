import React, { useState, Component } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { ShieldIcon, CheckCircleIcon, ClockIcon, XCircleIcon, SearchIcon, FilterIcon, EyeIcon, CheckIcon, XIcon, UserIcon, FileTextIcon, MapPinIcon, MailIcon, PhoneIcon, CalendarIcon, DownloadIcon, ShieldCheckIcon } from 'lucide-react';
export function AdminVerification() {
  const {
    darkMode
  } = useTheme();
  const [activeTab, setActiveTab] = useState('pending');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');
  const [isRejectionModalOpen, setIsRejectionModalOpen] = useState(false);
  // Mock verification requests data
  const [verificationRequests, setVerificationRequests] = useState([{
    id: 1,
    name: 'Juan Dela Cruz',
    email: 'juan@example.com',
    phone: '+63 912 345 6789',
    address: "123 Fisherman's Wharf, Batangas City",
    type: 'Fisher Registration',
    location: 'Batangas City',
    submittedDate: '2023-05-10',
    status: 'pending',
    documents: [{
      name: 'Valid ID (Front)',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1565529283021-7fa0dc3c5c8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }, {
      name: 'Valid ID (Back)',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1565529283021-7fa0dc3c5c8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }, {
      name: 'Proof of Residence',
      type: 'document',
      url: '#'
    }, {
      name: 'Boat Registration',
      type: 'document',
      url: '#'
    }]
  }, {
    id: 2,
    name: 'Maria Santos',
    email: 'maria@example.com',
    phone: '+63 923 456 7890',
    address: '456 Coastal Road, Batangas City',
    type: 'License Renewal',
    location: 'Batangas City',
    submittedDate: '2023-05-09',
    status: 'pending',
    documents: [{
      name: 'Old License',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1565529283021-7fa0dc3c5c8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }, {
      name: 'ID Card',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1565529283021-7fa0dc3c5c8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }, {
      name: 'Tax Certificate',
      type: 'document',
      url: '#'
    }]
  }, {
    id: 3,
    name: 'Pedro Reyes',
    email: 'pedro@example.com',
    phone: '+63 934 567 8901',
    address: '789 Beach Road, San Juan',
    type: 'Boat Registration',
    location: 'San Juan',
    submittedDate: '2023-05-08',
    status: 'pending',
    documents: [{
      name: 'Boat Photos',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1565529283021-7fa0dc3c5c8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }, {
      name: 'Ownership Papers',
      type: 'document',
      url: '#'
    }, {
      name: 'ID Card',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1565529283021-7fa0dc3c5c8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }]
  }, {
    id: 4,
    name: 'Ana Gonzales',
    email: 'ana@example.com',
    phone: '+63 945 678 9012',
    address: '101 Main Street, Lipa City',
    type: 'Fisher Registration',
    location: 'Lipa City',
    submittedDate: '2023-05-05',
    status: 'approved',
    documents: [{
      name: 'ID Card',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1565529283021-7fa0dc3c5c8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }, {
      name: 'Proof of Residence',
      type: 'document',
      url: '#'
    }, {
      name: 'Tax Certificate',
      type: 'document',
      url: '#'
    }],
    approvedDate: '2023-05-07',
    approvedBy: 'Admin LGU'
  }, {
    id: 5,
    name: 'Roberto Lim',
    email: 'roberto@example.com',
    phone: '+63 956 789 0123',
    address: '202 Harbor Drive, Batangas City',
    type: 'License Renewal',
    location: 'Batangas City',
    submittedDate: '2023-05-04',
    status: 'rejected',
    documents: [{
      name: 'Old License',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1565529283021-7fa0dc3c5c8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }, {
      name: 'ID Card',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1565529283021-7fa0dc3c5c8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }],
    rejectedDate: '2023-05-06',
    rejectedBy: 'Admin LGU',
    rejectionReason: 'Incomplete documentation. Missing tax certificate.'
  }]);
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
  // Filter verification requests based on active tab, search term, and filter type
  const filteredRequests = verificationRequests.filter(request => {
    const matchesTab = activeTab === 'all' || request.status === activeTab;
    const matchesSearch = request.name.toLowerCase().includes(searchTerm.toLowerCase()) || request.email.toLowerCase().includes(searchTerm.toLowerCase()) || request.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || request.type === filterType;
    return matchesTab && matchesSearch && matchesType;
  });
  const handleViewRequest = request => {
    setSelectedRequest(request);
    setIsDetailModalOpen(true);
  };
  const handleApproveRequest = id => {
    setVerificationRequests(verificationRequests.map(req => req.id === id ? {
      ...req,
      status: 'approved',
      approvedDate: new Date().toISOString().split('T')[0],
      approvedBy: 'Admin LGU'
    } : req));
    if (selectedRequest && selectedRequest.id === id) {
      setSelectedRequest({
        ...selectedRequest,
        status: 'approved',
        approvedDate: new Date().toISOString().split('T')[0],
        approvedBy: 'Admin LGU'
      });
    }
    setIsDetailModalOpen(false);
  };
  const openRejectionModal = id => {
    setRejectionReason('');
    setIsRejectionModalOpen(true);
  };
  const handleRejectRequest = () => {
    if (!selectedRequest || !rejectionReason.trim()) return;
    setVerificationRequests(verificationRequests.map(req => req.id === selectedRequest.id ? {
      ...req,
      status: 'rejected',
      rejectedDate: new Date().toISOString().split('T')[0],
      rejectedBy: 'Admin LGU',
      rejectionReason: rejectionReason
    } : req));
    setSelectedRequest({
      ...selectedRequest,
      status: 'rejected',
      rejectedDate: new Date().toISOString().split('T')[0],
      rejectedBy: 'Admin LGU',
      rejectionReason: rejectionReason
    });
    setIsRejectionModalOpen(false);
  };
  const handleRequestAdditionalDocuments = () => {
    // In a real app, this would send an email or notification to the user
    alert(`Request for additional documents sent to ${selectedRequest.name}`);
    setIsDetailModalOpen(false);
  };
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          Verification
        </h2>
        <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
          Review and validate user registration requests
        </p>
      </div>
      {/* 1×4 Desktop, 2×2 Mobile Grid Layout - Matching Fisher User Style */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
        <StatCard icon={ClockIcon} title="Pending Requests" value={verificationRequests.filter(r => r.status === 'pending').length.toString()} change="Need immediate review" color="bg-gradient-to-r from-yellow-500 to-yellow-600" />
        <StatCard icon={CheckCircleIcon} title="Approved Today" value={verificationRequests.filter(r => r.status === 'approved').length.toString()} change="+3 from yesterday" color="bg-gradient-to-r from-green-500 to-green-600" />
        <StatCard icon={XCircleIcon} title="Rejected Today" value={verificationRequests.filter(r => r.status === 'rejected').length.toString()} change="Requires documentation" color="bg-gradient-to-r from-red-500 to-red-600" />
        <StatCard icon={ShieldCheckIcon} title="Total Verified" value="843" change="This month" color="bg-gradient-to-r from-blue-500 to-blue-600" />
      </div>
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} rounded-2xl border transition-colors duration-300`}>
        {/* Filters and Tabs */}
        <div className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="p-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex space-x-4">
              <button onClick={() => setActiveTab('pending')} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'pending' ? darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800' : darkMode ? 'text-gray-400 hover:text-gray-300 bg-gray-700/50' : 'text-gray-500 hover:text-gray-700 bg-white'}`}>
                Pending
              </button>
              <button onClick={() => setActiveTab('approved')} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'approved' ? darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800' : darkMode ? 'text-gray-400 hover:text-gray-300 bg-gray-700/50' : 'text-gray-500 hover:text-gray-700 bg-white'}`}>
                Approved
              </button>
              <button onClick={() => setActiveTab('rejected')} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'rejected' ? darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800' : darkMode ? 'text-gray-400 hover:text-gray-300 bg-gray-700/50' : 'text-gray-500 hover:text-gray-700 bg-white'}`}>
                Rejected
              </button>
              <button onClick={() => setActiveTab('all')} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'all' ? darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800' : darkMode ? 'text-gray-400 hover:text-gray-300 bg-gray-700/50' : 'text-gray-500 hover:text-gray-700 bg-white'}`}>
                All Requests
              </button>
            </div>
            <div className="flex items-center space-x-4 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-initial">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className={`h-5 w-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                </div>
                <input type="text" className={`block w-full pl-10 pr-3 py-2 border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'} rounded-md leading-5 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm`} placeholder="Search requests..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
              </div>
              <div className="flex items-center">
                <FilterIcon className={`h-5 w-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'} mr-2`} />
                <select className={`block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300 text-gray-900'} focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md`} value={filterType} onChange={e => setFilterType(e.target.value)}>
                  <option value="all">All Types</option>
                  <option value="Fisher Registration">
                    Fisher Registration
                  </option>
                  <option value="License Renewal">License Renewal</option>
                  <option value="Boat Registration">Boat Registration</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* Verification Requests List */}
        <div className="overflow-x-auto">
          <table className={`min-w-full divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
            <thead className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
              <tr>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Name
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Type
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Location
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Submitted
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Status
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className={`${darkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}`}>
              {filteredRequests.map(request => <tr key={request.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-gray-900">
                        {request.name}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">{request.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{request.type}</div>
                    <div className="text-xs text-gray-500">
                      {request.documents.length} documents
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {request.location}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {request.submittedDate}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${request.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : request.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button onClick={() => handleViewRequest(request)} className="p-1 rounded-full text-teal-600 hover:bg-teal-50">
                        <EyeIcon className="h-5 w-5" />
                      </button>
                      {request.status === 'pending' && <>
                          <button onClick={() => handleApproveRequest(request.id)} className="p-1 rounded-full text-green-600 hover:bg-green-50">
                            <CheckIcon className="h-5 w-5" />
                          </button>
                          <button onClick={() => {
                      setSelectedRequest(request);
                      openRejectionModal(request.id);
                    }} className="p-1 rounded-full text-red-600 hover:bg-red-50">
                            <XIcon className="h-5 w-5" />
                          </button>
                        </>}
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        {filteredRequests.length === 0 && <div className="text-center py-12">
            <ShieldIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No verification requests found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
          </div>}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing{' '}
              <span className="font-medium">{filteredRequests.length}</span>{' '}
              results
            </div>
            <div className="flex-1 flex justify-end">
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </button>
              <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Detail Modal */}
      {isDetailModalOpen && selectedRequest && <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setIsDetailModalOpen(false)}></div>
          <div className="relative bg-white rounded-lg max-w-4xl w-full mx-auto p-6 shadow-xl">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-lg font-medium text-gray-900">
                Verification Request Details
              </h3>
              <button onClick={() => setIsDetailModalOpen(false)} className="text-gray-400 hover:text-gray-500">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 space-y-6">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="text-sm font-medium text-gray-900 mb-4">
                    Applicant Information
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-500">Full Name</p>
                      <p className="text-sm font-medium text-gray-900">
                        {selectedRequest.name}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <MailIcon className="h-4 w-4 text-gray-400 mr-1" />
                      <p className="text-sm text-gray-600">
                        {selectedRequest.email}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <PhoneIcon className="h-4 w-4 text-gray-400 mr-1" />
                      <p className="text-sm text-gray-600">
                        {selectedRequest.phone}
                      </p>
                    </div>
                    <div className="flex items-start">
                      <MapPinIcon className="h-4 w-4 text-gray-400 mr-1 mt-0.5" />
                      <p className="text-sm text-gray-600">
                        {selectedRequest.address}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="text-sm font-medium text-gray-900 mb-4">
                    Request Details
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-500">Request Type</p>
                      <p className="text-sm font-medium text-gray-900">
                        {selectedRequest.type}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Location</p>
                      <p className="text-sm text-gray-600">
                        {selectedRequest.location}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 text-gray-400 mr-1" />
                      <p className="text-sm text-gray-600">
                        Submitted on {selectedRequest.submittedDate}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Status</p>
                      <span className={`mt-1 inline-flex px-2 py-1 text-xs font-medium rounded-full ${selectedRequest.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : selectedRequest.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {selectedRequest.status.charAt(0).toUpperCase() + selectedRequest.status.slice(1)}
                      </span>
                    </div>
                    {selectedRequest.status === 'approved' && <div>
                        <p className="text-xs text-gray-500">Approved On</p>
                        <p className="text-sm text-gray-600">
                          {selectedRequest.approvedDate} by{' '}
                          {selectedRequest.approvedBy}
                        </p>
                      </div>}
                    {selectedRequest.status === 'rejected' && <div>
                        <p className="text-xs text-gray-500">Rejected On</p>
                        <p className="text-sm text-gray-600">
                          {selectedRequest.rejectedDate} by{' '}
                          {selectedRequest.rejectedBy}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          Reason for Rejection
                        </p>
                        <p className="text-sm text-red-600">
                          {selectedRequest.rejectionReason}
                        </p>
                      </div>}
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="text-sm font-medium text-gray-900 mb-4">
                    Submitted Documents
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedRequest.documents.map((doc, index) => <div key={index} className="bg-white border border-gray-200 rounded-md overflow-hidden">
                        {doc.type === 'image' ? <div>
                            <div className="h-40 overflow-hidden">
                              <img src={doc.url} alt={doc.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-3">
                              <p className="text-sm font-medium text-gray-900">
                                {doc.name}
                              </p>
                              <div className="mt-2 flex justify-end">
                                <button className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800">
                                  <DownloadIcon className="h-3 w-3 mr-1" />
                                  Download
                                </button>
                              </div>
                            </div>
                          </div> : <div className="p-4 flex items-start">
                            <FileTextIcon className="h-8 w-8 text-blue-500 mr-3" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {doc.name}
                              </p>
                              <button className="mt-2 inline-flex items-center text-xs text-blue-600 hover:text-blue-800">
                                <DownloadIcon className="h-3 w-3 mr-1" />
                                Download
                              </button>
                            </div>
                          </div>}
                      </div>)}
                  </div>
                </div>
                {selectedRequest.status === 'pending' && <div className="mt-6 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3">
                    <button onClick={() => handleRequestAdditionalDocuments()} className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                      Request Additional Documents
                    </button>
                    <button onClick={() => {
                openRejectionModal(selectedRequest.id);
              }} className="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none">
                      <XIcon className="h-4 w-4 mr-2" />
                      Reject
                    </button>
                    <button onClick={() => handleApproveRequest(selectedRequest.id)} className="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none">
                      <CheckIcon className="h-4 w-4 mr-2" />
                      Approve
                    </button>
                  </div>}
              </div>
            </div>
          </div>
        </div>}
      {/* Rejection Reason Modal */}
      {isRejectionModalOpen && selectedRequest && <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setIsRejectionModalOpen(false)}></div>
          <div className="relative bg-white rounded-lg max-w-md w-full mx-auto p-6 shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Reject Verification Request
              </h3>
              <button onClick={() => setIsRejectionModalOpen(false)} className="text-gray-400 hover:text-gray-500">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Please provide a reason for rejecting the verification request
              from <span className="font-medium">{selectedRequest.name}</span>.
            </p>
            <div className="mb-4">
              <label htmlFor="rejection-reason" className="block text-sm font-medium text-gray-700 mb-1">
                Rejection Reason
              </label>
              <textarea id="rejection-reason" rows={4} value={rejectionReason} onChange={e => setRejectionReason(e.target.value)} className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" placeholder="Explain why this request is being rejected..."></textarea>
            </div>
            <div className="flex justify-end space-x-3">
              <button onClick={() => setIsRejectionModalOpen(false)} className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                Cancel
              </button>
              <button onClick={handleRejectRequest} disabled={!rejectionReason.trim()} className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none disabled:bg-gray-300 disabled:cursor-not-allowed">
                Reject Request
              </button>
            </div>
          </div>
        </div>}
    </div>;
}