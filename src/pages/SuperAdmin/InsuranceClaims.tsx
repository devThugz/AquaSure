import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import Chart from 'chart.js/auto';
import { DollarSignIcon, ShieldIcon, CheckCircleIcon, XCircleIcon, AlertTriangleIcon, BarChart2Icon, ClockIcon, SearchIcon, FilterIcon, DownloadIcon, EyeIcon, FileTextIcon, MapPinIcon, CalendarIcon } from 'lucide-react';
export const InsuranceClaims: React.FC = () => {
  const {
    darkMode
  } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [selectedClaim, setSelectedClaim] = useState<number | null>(null);
  const claimsChartRef = useRef(null);
  const payoutChartRef = useRef(null);
  // Mock data for insurance overview
  const insuranceMetrics = [{
    name: 'Total Insured',
    value: '6,845',
    percent: '81%',
    icon: <ShieldIcon className="h-6 w-6" />,
    color: darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
  }, {
    name: 'Active Claims',
    value: '142',
    percent: '2.1%',
    icon: <FileTextIcon className="h-6 w-6" />,
    color: darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-600'
  }, {
    name: 'Approved Claims',
    value: '1,247',
    percent: '92%',
    icon: <CheckCircleIcon className="h-6 w-6" />,
    color: darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'
  }, {
    name: 'Total Payouts',
    value: '₱4.2M',
    percent: 'YTD',
    icon: <DollarSignIcon className="h-6 w-6" />,
    color: darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-600'
  }];
  // Mock claims data
  const claims = [{
    id: 1,
    claimNumber: 'CLM-2023-0015',
    fisherName: 'Juan Dela Cruz',
    type: 'Boat Damage',
    location: 'Palawan, MIMAROPA',
    amount: '₱25,000',
    status: 'Pending',
    submitted: '2023-06-15',
    details: 'Boat damaged during typhoon Odette. Requires hull repairs and engine maintenance.',
    documents: ['Claim Form', 'Boat Registration', 'Damage Photos', 'Repair Estimate'],
    timeline: [{
      date: '2023-06-15',
      action: 'Claim Submitted',
      user: 'Juan Dela Cruz'
    }, {
      date: '2023-06-16',
      action: 'Initial Review',
      user: 'Maria Santos (Agent)'
    }, {
      date: '2023-06-18',
      action: 'Documentation Request',
      user: 'Maria Santos (Agent)'
    }]
  }, {
    id: 2,
    claimNumber: 'CLM-2023-0014',
    fisherName: 'Maria Santos',
    type: 'Medical',
    location: 'Cebu, Central Visayas',
    amount: '₱15,000',
    status: 'Approved',
    submitted: '2023-06-10',
    details: 'Medical expenses for injury sustained during fishing operation. Includes hospital bills and medication.',
    documents: ['Claim Form', 'Medical Certificate', 'Hospital Bills', 'Prescription'],
    timeline: [{
      date: '2023-06-10',
      action: 'Claim Submitted',
      user: 'Maria Santos'
    }, {
      date: '2023-06-11',
      action: 'Initial Review',
      user: 'Eduardo Lim (Agent)'
    }, {
      date: '2023-06-13',
      action: 'Documentation Complete',
      user: 'Eduardo Lim (Agent)'
    }, {
      date: '2023-06-14',
      action: 'Claim Approved',
      user: 'Supervisor'
    }]
  }, {
    id: 3,
    claimNumber: 'CLM-2023-0013',
    fisherName: 'Pedro Reyes',
    type: 'Equipment Loss',
    location: 'Batangas, CALABARZON',
    amount: '₱18,500',
    status: 'In Review',
    submitted: '2023-06-12',
    details: 'Loss of fishing nets and equipment during strong storm. Complete replacement needed.',
    documents: ['Claim Form', 'Police Report', 'Equipment Invoice', 'Witness Statement'],
    timeline: [{
      date: '2023-06-12',
      action: 'Claim Submitted',
      user: 'Pedro Reyes'
    }, {
      date: '2023-06-13',
      action: 'Initial Review',
      user: 'Ana Reyes (Agent)'
    }, {
      date: '2023-06-15',
      action: 'Field Investigation Scheduled',
      user: 'Ana Reyes (Agent)'
    }]
  }, {
    id: 4,
    claimNumber: 'CLM-2023-0012',
    fisherName: 'Ana Lim',
    type: 'Boat Damage',
    location: 'Davao, Davao Region',
    amount: '₱32,000',
    status: 'Rejected',
    submitted: '2023-06-08',
    details: 'Claim for boat damage. Rejected due to policy exclusions and lack of proper documentation.',
    documents: ['Claim Form', 'Boat Registration'],
    timeline: [{
      date: '2023-06-08',
      action: 'Claim Submitted',
      user: 'Ana Lim'
    }, {
      date: '2023-06-09',
      action: 'Initial Review',
      user: 'Carlos Tan (Agent)'
    }, {
      date: '2023-06-11',
      action: 'Documentation Request',
      user: 'Carlos Tan (Agent)'
    }, {
      date: '2023-06-14',
      action: 'Claim Rejected',
      user: 'Supervisor'
    }]
  }, {
    id: 5,
    claimNumber: 'CLM-2023-0011',
    fisherName: 'Roberto Cruz',
    type: 'Income Protection',
    location: 'Iloilo, Western Visayas',
    amount: '₱12,000',
    status: 'Paid',
    submitted: '2023-06-05',
    details: 'Income protection claim due to fishing ban during spawning season. Three months of support.',
    documents: ['Claim Form', 'Government Notice', 'Income Statement', 'Bank Details'],
    timeline: [{
      date: '2023-06-05',
      action: 'Claim Submitted',
      user: 'Roberto Cruz'
    }, {
      date: '2023-06-06',
      action: 'Initial Review',
      user: 'Isabella Garcia (Agent)'
    }, {
      date: '2023-06-08',
      action: 'Claim Approved',
      user: 'Supervisor'
    }, {
      date: '2023-06-10',
      action: 'Payment Processed',
      user: 'Finance Department'
    }, {
      date: '2023-06-12',
      action: 'Payment Received',
      user: 'System'
    }]
  }];
  // Filter claims based on search and filters
  const filteredClaims = claims.filter(claim => {
    const matchesSearch = claim.claimNumber.toLowerCase().includes(searchTerm.toLowerCase()) || claim.fisherName.toLowerCase().includes(searchTerm.toLowerCase()) || claim.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || claim.status === filterStatus;
    const matchesType = filterType === 'all' || claim.type === filterType;
    return matchesSearch && matchesStatus && matchesType;
  });
  // Initialize charts when component mounts or when dark mode changes
  useEffect(() => {
    if (claimsChartRef.current && payoutChartRef.current) {
      // Claims by type chart
      const claimsCtx = claimsChartRef.current.getContext('2d');
      const claimsChart = new Chart(claimsCtx, {
        type: 'doughnut',
        data: {
          labels: ['Boat Damage', 'Medical', 'Equipment Loss', 'Income Protection', 'Life Insurance'],
          datasets: [{
            data: [35, 25, 20, 15, 5],
            backgroundColor: [darkMode ? 'rgba(59, 130, 246, 0.7)' : 'rgba(37, 99, 235, 0.7)', darkMode ? 'rgba(16, 185, 129, 0.7)' : 'rgba(5, 150, 105, 0.7)', darkMode ? 'rgba(245, 158, 11, 0.7)' : 'rgba(217, 119, 6, 0.7)', darkMode ? 'rgba(139, 92, 246, 0.7)' : 'rgba(109, 40, 217, 0.7)', darkMode ? 'rgba(239, 68, 68, 0.7)' : 'rgba(220, 38, 38, 0.7)'],
            borderColor: [darkMode ? 'rgba(59, 130, 246, 1)' : 'rgba(37, 99, 235, 1)', darkMode ? 'rgba(16, 185, 129, 1)' : 'rgba(5, 150, 105, 1)', darkMode ? 'rgba(245, 158, 11, 1)' : 'rgba(217, 119, 6, 1)', darkMode ? 'rgba(139, 92, 246, 1)' : 'rgba(109, 40, 217, 1)', darkMode ? 'rgba(239, 68, 68, 1)' : 'rgba(220, 38, 38, 1)'],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
              labels: {
                color: darkMode ? '#e5e7eb' : '#111827'
              }
            }
          }
        }
      });
      // Monthly payout chart
      const payoutCtx = payoutChartRef.current.getContext('2d');
      const payoutChart = new Chart(payoutCtx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Monthly Payouts (in ₱1,000)',
            data: [420, 580, 690, 820, 950, 740],
            backgroundColor: darkMode ? 'rgba(139, 92, 246, 0.7)' : 'rgba(109, 40, 217, 0.7)',
            borderColor: darkMode ? 'rgba(139, 92, 246, 1)' : 'rgba(109, 40, 217, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: darkMode ? 'rgba(75, 85, 99, 0.2)' : 'rgba(209, 213, 219, 0.2)'
              },
              ticks: {
                color: darkMode ? '#9ca3af' : '#4b5563'
              }
            },
            x: {
              grid: {
                display: false
              },
              ticks: {
                color: darkMode ? '#9ca3af' : '#4b5563'
              }
            }
          },
          plugins: {
            legend: {
              labels: {
                color: darkMode ? '#e5e7eb' : '#111827'
              }
            }
          }
        }
      });
      return () => {
        claimsChart.destroy();
        payoutChart.destroy();
      };
    }
  }, [darkMode]);
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Pending':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800'}`}>
            Pending
          </span>;
      case 'In Review':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>
            In Review
          </span>;
      case 'Approved':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
            Approved
          </span>;
      case 'Paid':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-100 text-teal-800'}`}>
            Paid
          </span>;
      case 'Rejected':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'}`}>
            Rejected
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
          Insurance & Claims
        </h1>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Manage insurance policies and claims for fisher folk
        </p>
      </div>
      {/* Insurance Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {insuranceMetrics.map((metric, index) => <div key={index} className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 rounded-lg border transition-colors duration-300`}>
            <div className="flex items-center">
              <div className={`p-3 rounded-full ${metric.color}`}>
                {metric.icon}
              </div>
              <div className="ml-3">
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {metric.name}
                </p>
                <div className="flex items-center">
                  <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {metric.value}
                  </p>
                  <span className={`ml-2 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {metric.percent}
                  </span>
                </div>
              </div>
            </div>
          </div>)}
      </div>
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Claims by Type */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Claims by Type
            </h2>
            <div className="flex items-center">
              <BarChart2Icon className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-1`} />
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                2023 YTD
              </span>
            </div>
          </div>
          <div className="h-64">
            <canvas ref={claimsChartRef}></canvas>
          </div>
        </div>
        {/* Monthly Payouts */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Monthly Payouts
            </h2>
            <div className="flex items-center">
              <DollarSignIcon className={`h-5 w-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'} mr-1`} />
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Last 6 months
              </span>
            </div>
          </div>
          <div className="h-64">
            <canvas ref={payoutChartRef}></canvas>
          </div>
        </div>
      </div>
      {/* Claims Management */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
        <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
          Claims Management
        </h2>
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className={`h-5 w-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
            </div>
            <input type="text" placeholder="Search by claim number, fisher name, or location..." className={`block w-full pl-10 pr-3 py-2 border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'border-gray-300 text-gray-900 placeholder-gray-500'} rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm transition-colors duration-300`} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <select className={`block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300 text-gray-900'} focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md transition-colors duration-300`} value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                <option value="all">All Status</option>
                <option value="Pending">Pending</option>
                <option value="In Review">In Review</option>
                <option value="Approved">Approved</option>
                <option value="Paid">Paid</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div className="relative">
              <select className={`block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300 text-gray-900'} focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md transition-colors duration-300`} value={filterType} onChange={e => setFilterType(e.target.value)}>
                <option value="all">All Types</option>
                <option value="Boat Damage">Boat Damage</option>
                <option value="Medical">Medical</option>
                <option value="Equipment Loss">Equipment Loss</option>
                <option value="Income Protection">Income Protection</option>
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
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-3/4 overflow-x-auto">
            <table className={`min-w-full divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'} transition-colors duration-300`}>
              <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors duration-300`}>
                <tr>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                    Claim
                  </th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                    Type
                  </th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                    Amount
                  </th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                    Status
                  </th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                    Submitted
                  </th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className={`${darkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'} transition-colors duration-300`}>
                {filteredClaims.map(claim => <tr key={claim.id} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} ${selectedClaim === claim.id ? darkMode ? 'bg-blue-900/20' : 'bg-blue-50' : ''} transition-colors duration-200`} onClick={() => setSelectedClaim(claim.id)}>
                    <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                      <div className="flex items-center">
                        <div className={`p-2 rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'} mr-3`}>
                          <FileTextIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                            {claim.claimNumber}
                          </div>
                          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                            {claim.fisherName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'} transition-colors duration-300`}>
                      {claim.type}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                      {claim.amount}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                      {getStatusBadge(claim.status)}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'} transition-colors duration-300`}>
                      {claim.submitted}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium transition-colors duration-300`}>
                      <div className="flex space-x-2">
                        <button className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-900'} transition-colors duration-300`} title="View Details">
                          <EyeIcon className="h-5 w-5" />
                        </button>
                        {claim.status === 'Pending' || claim.status === 'In Review' ? <>
                            <button className={`${darkMode ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-900'} transition-colors duration-300`} title="Approve Claim">
                              <CheckCircleIcon className="h-5 w-5" />
                            </button>
                            <button className={`${darkMode ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-900'} transition-colors duration-300`} title="Reject Claim">
                              <XCircleIcon className="h-5 w-5" />
                            </button>
                          </> : null}
                      </div>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          {selectedClaim && <div className={`lg:w-1/4 ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} rounded-lg p-4 transition-colors duration-300`}>
              {claims.filter(c => c.id === selectedClaim).map(claim => <div key={claim.id} className="space-y-4">
                    <div>
                      <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                        Claim Details
                      </h3>
                      <div className="mt-1 flex items-center">
                        {getStatusBadge(claim.status)}
                        <span className={`ml-2 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                          {claim.claimNumber}
                        </span>
                      </div>
                    </div>
                    <div className={`border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'} pt-4 transition-colors duration-300`}>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                            Claimant
                          </p>
                          <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300`}>
                            {claim.fisherName}
                          </p>
                        </div>
                        <div>
                          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                            Claim Type
                          </p>
                          <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300`}>
                            {claim.type}
                          </p>
                        </div>
                        <div>
                          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                            Amount
                          </p>
                          <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300`}>
                            {claim.amount}
                          </p>
                        </div>
                        <div>
                          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                            Submitted
                          </p>
                          <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'} transition-colors duration-300`}>
                            {claim.submitted}
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
                            {claim.location}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={`border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'} pt-4 transition-colors duration-300`}>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                        Claim Details
                      </p>
                      <p className={`mt-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                        {claim.details}
                      </p>
                    </div>
                    <div className={`border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'} pt-4 transition-colors duration-300`}>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                        Documents
                      </p>
                      <ul className={`mt-2 space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                        {claim.documents.map((doc, index) => <li key={index} className="text-sm flex items-center">
                            <FileTextIcon className={`h-4 w-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-2`} />
                            {doc}
                          </li>)}
                      </ul>
                    </div>
                    <div className={`border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'} pt-4 transition-colors duration-300`}>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                        Timeline
                      </p>
                      <div className={`mt-2 space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                        {claim.timeline.map((event, index) => <div key={index} className="relative pl-6">
                            <div className={`absolute left-0 top-1 h-3 w-3 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
                            <p className="text-sm font-medium">
                              {event.action}
                            </p>
                            <div className="flex items-center text-xs">
                              <CalendarIcon className="h-3 w-3 mr-1" />
                              <span>{event.date}</span>
                              <span className="mx-1">•</span>
                              <span>{event.user}</span>
                            </div>
                          </div>)}
                      </div>
                    </div>
                    {(claim.status === 'Pending' || claim.status === 'In Review') && <div className={`border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'} pt-4 flex flex-col space-y-2 transition-colors duration-300`}>
                        <button className={`inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600 hover:bg-green-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300`}>
                          <CheckCircleIcon className="h-4 w-4 mr-2" />
                          Approve Claim
                        </button>
                        <button className={`inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${darkMode ? 'bg-red-600 hover:bg-red-700' : 'bg-red-600 hover:bg-red-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300`}>
                          <XCircleIcon className="h-4 w-4 mr-2" />
                          Reject Claim
                        </button>
                        <button className={`inline-flex items-center justify-center px-4 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300 hover:bg-gray-600' : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'} rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300`}>
                          <AlertTriangleIcon className="h-4 w-4 mr-2" />
                          Request More Information
                        </button>
                      </div>}
                  </div>)}
            </div>}
        </div>
      </div>
    </div>;
};