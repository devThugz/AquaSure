import React, { useState } from 'react';
import { BadgeCheckIcon, UserIcon, CheckCircleIcon, XCircleIcon, ClockIcon, FilterIcon, SearchIcon, MapPinIcon, CalendarIcon, EyeIcon } from 'lucide-react';
export const UserVerification: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const verificationStats = [{
    name: 'Total Verifications',
    value: '8,245',
    change: '+124',
    icon: <BadgeCheckIcon className="h-6 w-6" />,
    color: 'bg-blue-600'
  }, {
    name: 'Pending Review',
    value: '87',
    change: '-12',
    icon: <ClockIcon className="h-6 w-6" />,
    color: 'bg-yellow-600'
  }, {
    name: 'Approved Today',
    value: '42',
    change: '+18',
    icon: <CheckCircleIcon className="h-6 w-6" />,
    color: 'bg-green-600'
  }, {
    name: 'Rejected',
    value: '15',
    change: '+3',
    icon: <XCircleIcon className="h-6 w-6" />,
    color: 'bg-red-600'
  }];
  const verificationRequests = [{
    id: 'VER-001245',
    user: 'Juan Dela Cruz',
    region: 'Cebu',
    documentType: 'Fisher ID',
    documentNumber: 'FID-12345-2023',
    submittedDate: '2023-05-15',
    status: 'Pending',
    assignedTo: 'Maria Santos (Cebu Admin)',
    notes: ''
  }, {
    id: 'VER-001246',
    user: 'Maria Reyes',
    region: 'Davao',
    documentType: 'Boat Registration',
    documentNumber: 'BR-56789-2023',
    submittedDate: '2023-05-14',
    status: 'Under Review',
    assignedTo: 'Jose Reyes (Davao Admin)',
    notes: 'Checking boat registration details with coast guard'
  }, {
    id: 'VER-001247',
    user: 'Pedro Santos',
    region: 'Palawan',
    documentType: 'Fisher ID',
    documentNumber: 'FID-23456-2023',
    submittedDate: '2023-05-14',
    status: 'Approved',
    assignedTo: 'System',
    notes: 'All documents verified successfully'
  }, {
    id: 'VER-001248',
    user: 'Ana Lim',
    region: 'Iloilo',
    documentType: 'Business Permit',
    documentNumber: 'BP-34567-2023',
    submittedDate: '2023-05-13',
    status: 'Rejected',
    assignedTo: 'System',
    notes: 'Expired business permit. Please submit updated document.'
  }, {
    id: 'VER-001249',
    user: 'Roberto Cruz',
    region: 'Zamboanga',
    documentType: 'Fisher ID',
    documentNumber: 'FID-45678-2023',
    submittedDate: '2023-05-12',
    status: 'Pending',
    assignedTo: 'Elena Garcia (Zamboanga Admin)',
    notes: ''
  }];
  const filteredRequests = verificationRequests.filter(request => {
    const matchesStatus = filterStatus === 'all' || request.status.toLowerCase() === filterStatus.toLowerCase();
    const matchesSearch = request.id.toLowerCase().includes(searchTerm.toLowerCase()) || request.user.toLowerCase().includes(searchTerm.toLowerCase()) || request.documentType.toLowerCase().includes(searchTerm.toLowerCase()) || request.documentNumber.toLowerCase().includes(searchTerm.toLowerCase()) || request.region.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });
  const getStatusBadge = status => {
    switch (status) {
      case 'Pending':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
            Pending
          </span>;
      case 'Under Review':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
            Under Review
          </span>;
      case 'Approved':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Approved
          </span>;
      case 'Rejected':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            Rejected
          </span>;
      default:
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            {status}
          </span>;
    }
  };
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">User Verification</h1>
        <p className="text-sm text-gray-500">
          Review and manage user verification requests
        </p>
      </div>
      {/* Verification Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {verificationStats.map(stat => <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className={`flex-shrink-0 rounded-md p-3 ${stat.color} text-white`}>
                {stat.icon}
              </div>
              <div className="ml-5 w-0 flex-1">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  {stat.name}
                </dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </div>
                  <div className={`ml-2 flex items-baseline text-sm font-semibold ${(stat.name === 'Pending Review' || stat.name === 'Rejected') && stat.change.startsWith('-') ? 'text-green-600' : (stat.name === 'Pending Review' || stat.name === 'Rejected') && !stat.change.startsWith('-') ? 'text-red-600' : stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </div>
                </dd>
              </div>
            </div>
          </div>)}
      </div>
      {/* Verification Requests */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4 sm:mb-0">
            Verification Requests
          </h2>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input type="text" className="focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Search requests..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <div className="flex items-center">
              <FilterIcon className="mr-2 h-5 w-5 text-gray-400" />
              <select className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="under review">Under Review</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Request ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Document
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Submitted
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assigned To
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRequests.map((request, index) => <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {request.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <UserIcon className="h-4 w-4 text-gray-500" />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          {request.user}
                        </div>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <MapPinIcon className="h-3 w-3 mr-1" />
                          {request.region}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {request.documentType}
                    </div>
                    <div className="text-xs text-gray-500">
                      {request.documentNumber}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="h-4 w-4 mr-1 text-gray-400" />
                      {new Date(request.submittedDate).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(request.status)}
                    {request.notes && <div className="text-xs text-gray-500 mt-1 max-w-xs truncate">
                        {request.notes}
                      </div>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {request.assignedTo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-teal-600 hover:text-teal-900 mr-3">
                      <div className="flex items-center">
                        <EyeIcon className="h-4 w-4 mr-1" />
                        View
                      </div>
                    </button>
                    {(request.status === 'Pending' || request.status === 'Under Review') && <>
                        <button className="text-green-600 hover:text-green-900 mr-3">
                          <div className="flex items-center">
                            <CheckCircleIcon className="h-4 w-4 mr-1" />
                            Approve
                          </div>
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <div className="flex items-center">
                            <XCircleIcon className="h-4 w-4 mr-1" />
                            Reject
                          </div>
                        </button>
                      </>}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing{' '}
            <span className="font-medium">{filteredRequests.length}</span>{' '}
            requests
          </div>
          <div className="flex-1 flex justify-end">
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                1
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                3
              </a>
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>;
};