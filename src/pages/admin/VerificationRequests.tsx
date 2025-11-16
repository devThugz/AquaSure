import React, { useState } from 'react';
import { ShieldIcon, CheckCircleIcon, ClockIcon, XCircleIcon, SearchIcon, FilterIcon, EyeIcon, CheckIcon, XIcon, UserIcon, FileTextIcon, MapPinIcon, MailIcon, PhoneIcon, CalendarIcon, DownloadIcon, ImageIcon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
export const VerificationRequests: React.FC = () => {
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
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          Verification Requests
        </h2>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
          Review and validate user registration requests
        </p>
      </div>
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow'} rounded-lg border transition-colors duration-300`}>
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 border-b border-gray-200">
          <div className={`${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-white border-gray-200'} rounded-lg border p-4 transition-colors duration-300`}>
            <div className="flex items-center">
              <div className={`rounded-full p-3 ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-600'}`}>
                <ClockIcon className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  Pending
                </h3>
                <p className={`text-2xl font-semibold ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                  {verificationRequests.filter(r => r.status === 'pending').length}
                </p>
              </div>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-white border-gray-200'} rounded-lg border p-4 transition-colors duration-300`}>
            <div className="flex items-center">
              <div className={`rounded-full p-3 ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'}`}>
                <CheckCircleIcon className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  Approved
                </h3>
                <p className={`text-2xl font-semibold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                  {verificationRequests.filter(r => r.status === 'approved').length}
                </p>
              </div>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-white border-gray-200'} rounded-lg border p-4 transition-colors duration-300`}>
            <div className="flex items-center">
              <div className={`rounded-full p-3 ${darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-600'}`}>
                <XCircleIcon className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  Rejected
                </h3>
                <p className={`text-2xl font-semibold ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                  {verificationRequests.filter(r => r.status === 'rejected').length}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Filters and Tabs */}
        <div className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-300`}>
          <div className="p-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex space-x-4">
              <button onClick={() => setActiveTab('pending')} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${activeTab === 'pending' ? darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800' : darkMode ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-700' : 'text-gray-500 hover:text-gray-700 bg-white hover:bg-gray-50'}`}>
                Pending
              </button>
              <button onClick={() => setActiveTab('approved')} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${activeTab === 'approved' ? darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800' : darkMode ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-700' : 'text-gray-500 hover:text-gray-700 bg-white hover:bg-gray-50'}`}>
                Approved
              </button>
              <button onClick={() => setActiveTab('rejected')} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${activeTab === 'rejected' ? darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800' : darkMode ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-700' : 'text-gray-500 hover:text-gray-700 bg-white hover:bg-gray-50'}`}>
                Rejected
              </button>
              <button onClick={() => setActiveTab('all')} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${activeTab === 'all' ? darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800' : darkMode ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-700' : 'text-gray-500 hover:text-gray-700 bg-white hover:bg-gray-50'}`}>
                All Requests
              </button>
            </div>
            <div className="flex items-center space-x-4 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-initial">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
                </div>
                <input type="text" className={`block w-full pl-10 pr-3 py-2 border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-teal-500 focus:border-teal-500' : 'bg-white border-gray-300 placeholder-gray-500 focus:ring-teal-500 focus:border-teal-500'} rounded-md leading-5 focus:outline-none sm:text-sm transition-colors duration-300`} placeholder="Search requests..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
              </div>
              <div className="flex items-center">
                <FilterIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'} mr-2`} />
                <select className={`block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-teal-500 focus:border-teal-500' : 'border-gray-300 focus:ring-teal-500 focus:border-teal-500'} sm:text-sm rounded-md transition-colors duration-300`} value={filterType} onChange={e => setFilterType(e.target.value)}>
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
          <table className={`min-w-full divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'} transition-colors duration-300`}>
            <thead className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} transition-colors duration-300`}>
              <tr>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                  Name
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                  Type
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                  Location
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                  Submitted
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                  Status
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className={`${darkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'} transition-colors duration-300`}>
              {filteredRequests.map(request => <tr key={request.id} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors duration-200`}>
                  <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                    <div className="flex items-center">
                      <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                        {request.name}
                      </div>
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                      {request.email}
                    </div>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                    <div className={`text-sm ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                      {request.type}
                    </div>
                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                      {request.documents.length} documents
                    </div>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                    <div className={`text-sm ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                      {request.location}
                    </div>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                    <div className={`text-sm ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                      {request.submittedDate}
                    </div>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full transition-colors duration-300 ${request.status === 'pending' ? darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800' : request.status === 'approved' ? darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800' : darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'}`}>
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium transition-colors duration-300`}>
                    <div className="flex space-x-2">
                      <button onClick={() => handleViewRequest(request)} className={`p-1 rounded-full ${darkMode ? 'text-teal-400 hover:bg-teal-900/30' : 'text-teal-600 hover:bg-teal-50'} transition-colors duration-300`}>
                        <EyeIcon className="h-5 w-5" />
                      </button>
                      {request.status === 'pending' && <>
                          <button onClick={() => handleApproveRequest(request.id)} className={`p-1 rounded-full ${darkMode ? 'text-green-400 hover:bg-green-900/30' : 'text-green-600 hover:bg-green-50'} transition-colors duration-300`}>
                            <CheckIcon className="h-5 w-5" />
                          </button>
                          <button onClick={() => {
                      setSelectedRequest(request);
                      openRejectionModal(request.id);
                    }} className={`p-1 rounded-full ${darkMode ? 'text-red-400 hover:bg-red-900/30' : 'text-red-600 hover:bg-red-50'} transition-colors duration-300`}>
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
            <ShieldIcon className={`mx-auto h-12 w-12 ${darkMode ? 'text-gray-500' : 'text-gray-400'} transition-colors duration-300`} />
            <h3 className={`mt-2 text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-900'} transition-colors duration-300`}>
              No verification requests found
            </h3>
            <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
          </div>}
        <div className={`px-6 py-4 ${darkMode ? 'bg-gray-700/50 border-t border-gray-700' : 'bg-gray-50 border-t border-gray-200'} sm:px-6 transition-colors duration-300`}>
          <div className="flex items-center justify-between">
            <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
              Showing{' '}
              <span className="font-medium">{filteredRequests.length}</span>{' '}
              results
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
      </div>
      {/* Detail Modal */}
      {isDetailModalOpen && selectedRequest && <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setIsDetailModalOpen(false)}></div>
          <div className={`relative ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg max-w-4xl w-full mx-auto p-6 shadow-xl transition-colors duration-300`}>
            <div className="flex justify-between items-start mb-6">
              <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                Verification Request Details
              </h3>
              <button onClick={() => setIsDetailModalOpen(false)} className={`${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-500'} transition-colors duration-300`}>
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 space-y-6">
                <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} p-4 rounded-md transition-colors duration-300`}>
                  <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-900'} mb-4 transition-colors duration-300`}>
                    Applicant Information
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                        Full Name
                      </p>
                      <p className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                        {selectedRequest.name}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <MailIcon className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-400'} mr-1 transition-colors duration-300`} />
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                        {selectedRequest.email}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <PhoneIcon className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-400'} mr-1 transition-colors duration-300`} />
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                        {selectedRequest.phone}
                      </p>
                    </div>
                    <div className="flex items-start">
                      <MapPinIcon className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-400'} mr-1 mt-0.5 transition-colors duration-300`} />
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                        {selectedRequest.address}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} p-4 rounded-md transition-colors duration-300`}>
                  <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-900'} mb-4 transition-colors duration-300`}>
                    Request Details
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                        Request Type
                      </p>
                      <p className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                        {selectedRequest.type}
                      </p>
                    </div>
                    <div>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                        Location
                      </p>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                        {selectedRequest.location}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-400'} mr-1 transition-colors duration-300`} />
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                        Submitted on {selectedRequest.submittedDate}
                      </p>
                    </div>
                    <div>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                        Status
                      </p>
                      <span className={`mt-1 inline-flex px-2 py-1 text-xs font-medium rounded-full transition-colors duration-300 ${selectedRequest.status === 'pending' ? darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800' : selectedRequest.status === 'approved' ? darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800' : darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'}`}>
                        {selectedRequest.status.charAt(0).toUpperCase() + selectedRequest.status.slice(1)}
                      </span>
                    </div>
                    {selectedRequest.status === 'approved' && <div>
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                          Approved On
                        </p>
                        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                          {selectedRequest.approvedDate} by{' '}
                          {selectedRequest.approvedBy}
                        </p>
                      </div>}
                    {selectedRequest.status === 'rejected' && <div>
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                          Rejected On
                        </p>
                        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                          {selectedRequest.rejectedDate} by{' '}
                          {selectedRequest.rejectedBy}
                        </p>
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-2 transition-colors duration-300`}>
                          Reason for Rejection
                        </p>
                        <p className={`text-sm ${darkMode ? 'text-red-400' : 'text-red-600'} transition-colors duration-300`}>
                          {selectedRequest.rejectionReason}
                        </p>
                      </div>}
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} p-4 rounded-md transition-colors duration-300`}>
                  <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-900'} mb-4 transition-colors duration-300`}>
                    Submitted Documents
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedRequest.documents.map((doc, index) => <div key={index} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-md overflow-hidden transition-colors duration-300`}>
                        {doc.type === 'image' ? <div>
                            <div className="h-40 overflow-hidden">
                              <img src={doc.url} alt={doc.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-3">
                              <p className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                                {doc.name}
                              </p>
                              <div className="mt-2 flex justify-end">
                                <button className={`inline-flex items-center text-xs ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} transition-colors duration-300`}>
                                  <DownloadIcon className="h-3 w-3 mr-1" />
                                  Download
                                </button>
                              </div>
                            </div>
                          </div> : <div className="p-4 flex items-start">
                            <FileTextIcon className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-500'} mr-3 transition-colors duration-300`} />
                            <div>
                              <p className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                                {doc.name}
                              </p>
                              <button className={`mt-2 inline-flex items-center text-xs ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} transition-colors duration-300`}>
                                <DownloadIcon className="h-3 w-3 mr-1" />
                                Download
                              </button>
                            </div>
                          </div>}
                      </div>)}
                  </div>
                </div>
                {selectedRequest.status === 'pending' && <div className="mt-6 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3">
                    <button onClick={() => handleRequestAdditionalDocuments()} className={`inline-flex items-center justify-center px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} shadow-sm text-sm font-medium rounded-md transition-colors duration-300`}>
                      Request Additional Documents
                    </button>
                    <button onClick={() => {
                openRejectionModal(selectedRequest.id);
              }} className={`inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md ${darkMode ? 'text-white bg-red-600 hover:bg-red-700' : 'text-white bg-red-600 hover:bg-red-700'} transition-colors duration-300`}>
                      <XIcon className="h-4 w-4 mr-2" />
                      Reject
                    </button>
                    <button onClick={() => handleApproveRequest(selectedRequest.id)} className={`inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md ${darkMode ? 'text-white bg-green-600 hover:bg-green-700' : 'text-white bg-green-600 hover:bg-green-700'} transition-colors duration-300`}>
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
          <div className={`relative ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg max-w-md w-full mx-auto p-6 shadow-xl transition-colors duration-300`}>
            <div className="flex justify-between items-start mb-4">
              <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                Reject Verification Request
              </h3>
              <button onClick={() => setIsRejectionModalOpen(false)} className={`${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-500'} transition-colors duration-300`}>
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 transition-colors duration-300`}>
              Please provide a reason for rejecting the verification request
              from <span className="font-medium">{selectedRequest.name}</span>.
            </p>
            <div className="mb-4">
              <label htmlFor="rejection-reason" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1 transition-colors duration-300`}>
                Rejection Reason
              </label>
              <textarea id="rejection-reason" rows={4} value={rejectionReason} onChange={e => setRejectionReason(e.target.value)} className={`block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-red-500 focus:border-red-500'} rounded-md shadow-sm py-2 px-3 sm:text-sm transition-colors duration-300`} placeholder="Explain why this request is being rejected..."></textarea>
            </div>
            <div className="flex justify-end space-x-3">
              <button onClick={() => setIsRejectionModalOpen(false)} className={`px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} rounded-md shadow-sm text-sm font-medium transition-colors duration-300`}>
                Cancel
              </button>
              <button onClick={handleRejectRequest} disabled={!rejectionReason.trim()} className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${darkMode ? 'bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:text-gray-400' : 'bg-red-600 hover:bg-red-700 disabled:bg-gray-300 disabled:text-gray-500'} transition-colors duration-300 disabled:cursor-not-allowed`}>
                Reject Request
              </button>
            </div>
          </div>
        </div>}
    </div>;
};