import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import Chart from 'chart.js/auto';
import { TrendingUpIcon, TrendingDownIcon, BarChart2Icon, PieChartIcon, LineChartIcon, CalendarIcon, UsersIcon, AwardIcon, AlertCircleIcon, CheckCircleIcon, XCircleIcon, ClockIcon, FilterIcon, DownloadIcon } from 'lucide-react';
export const Performance: React.FC = () => {
  const {
    darkMode
  } = useTheme();
  const [timeRange, setTimeRange] = useState('month');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const activityChartRef = useRef(null);
  const verificationChartRef = useRef(null);
  const userGrowthChartRef = useRef(null);
  // Mock data for performance metrics
  const performanceMetrics = [{
    name: 'User Engagement',
    value: '78%',
    change: '+5.2%',
    trend: 'up',
    icon: <UsersIcon className="h-6 w-6" />,
    color: darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
  }, {
    name: 'Verification Rate',
    value: '92%',
    change: '+3.8%',
    trend: 'up',
    icon: <CheckCircleIcon className="h-6 w-6" />,
    color: darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'
  }, {
    name: 'Response Time',
    value: '1.4h',
    change: '-12.5%',
    trend: 'down',
    icon: <ClockIcon className="h-6 w-6" />,
    color: darkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-100 text-teal-600'
  }, {
    name: 'System Uptime',
    value: '99.8%',
    change: '+0.2%',
    trend: 'up',
    icon: <AwardIcon className="h-6 w-6" />,
    color: darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-600'
  }];
  // Top performing regions
  const topRegions = [{
    name: 'Central Visayas',
    score: 96,
    users: 412,
    verificationRate: 98,
    responseTime: '0.9h'
  }, {
    name: 'MIMAROPA',
    score: 94,
    users: 324,
    verificationRate: 95,
    responseTime: '1.2h'
  }, {
    name: 'Davao Region',
    score: 92,
    users: 356,
    verificationRate: 97,
    responseTime: '1.1h'
  }, {
    name: 'CALABARZON',
    score: 89,
    users: 287,
    verificationRate: 92,
    responseTime: '1.8h'
  }, {
    name: 'Western Visayas',
    score: 87,
    users: 245,
    verificationRate: 90,
    responseTime: '2.0h'
  }];
  // Recent performance issues
  const performanceIssues = [{
    id: 1,
    issue: 'Slow response times in Eastern Visayas region',
    severity: 'medium',
    timestamp: '2023-06-15 14:22',
    status: 'investigating'
  }, {
    id: 2,
    issue: 'Verification backlog in SOCCSKSARGEN region',
    severity: 'high',
    timestamp: '2023-06-14 09:15',
    status: 'in progress'
  }, {
    id: 3,
    issue: 'Low user engagement in CAR region',
    severity: 'low',
    timestamp: '2023-06-10 11:30',
    status: 'monitoring'
  }];
  // Initialize charts when component mounts or when dark mode changes
  useEffect(() => {
    // Activity by region chart
    if (activityChartRef.current) {
      const activityCtx = activityChartRef.current.getContext('2d');
      const activityChart = new Chart(activityCtx, {
        type: 'bar',
        data: {
          labels: ['MIMAROPA', 'Central Visayas', 'CALABARZON', 'Davao Region', 'Western Visayas'],
          datasets: [{
            label: 'User Activity',
            data: [78, 92, 65, 85, 72],
            backgroundColor: darkMode ? 'rgba(56, 189, 248, 0.7)' : 'rgba(59, 130, 246, 0.7)',
            borderColor: darkMode ? 'rgba(56, 189, 248, 1)' : 'rgba(59, 130, 246, 1)',
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
      // Verification rate chart
      const verificationCtx = verificationChartRef.current.getContext('2d');
      const verificationChart = new Chart(verificationCtx, {
        type: 'doughnut',
        data: {
          labels: ['Verified', 'Pending', 'Rejected'],
          datasets: [{
            data: [82, 13, 5],
            backgroundColor: [darkMode ? 'rgba(16, 185, 129, 0.7)' : 'rgba(5, 150, 105, 0.7)', darkMode ? 'rgba(251, 191, 36, 0.7)' : 'rgba(245, 158, 11, 0.7)', darkMode ? 'rgba(239, 68, 68, 0.7)' : 'rgba(220, 38, 38, 0.7)'],
            borderColor: [darkMode ? 'rgba(16, 185, 129, 1)' : 'rgba(5, 150, 105, 1)', darkMode ? 'rgba(251, 191, 36, 1)' : 'rgba(245, 158, 11, 1)', darkMode ? 'rgba(239, 68, 68, 1)' : 'rgba(220, 38, 38, 1)'],
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
      // User growth chart
      const growthCtx = userGrowthChartRef.current.getContext('2d');
      const growthChart = new Chart(growthCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'User Growth',
            data: [1245, 1580, 1890, 2150, 2420, 2680],
            fill: true,
            backgroundColor: darkMode ? 'rgba(124, 58, 237, 0.2)' : 'rgba(109, 40, 217, 0.1)',
            borderColor: darkMode ? 'rgba(139, 92, 246, 1)' : 'rgba(109, 40, 217, 1)',
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
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
        activityChart.destroy();
        verificationChart.destroy();
        growthChart.destroy();
      };
    }
  }, [darkMode]);
  const getSeverityBadge = severity => {
    switch (severity) {
      case 'high':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'}`}>
            High
          </span>;
      case 'medium':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800'}`}>
            Medium
          </span>;
      case 'low':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
            Low
          </span>;
      default:
        return null;
    }
  };
  const getStatusBadge = status => {
    switch (status) {
      case 'investigating':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>
            Investigating
          </span>;
      case 'in progress':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-800'}`}>
            In Progress
          </span>;
      case 'monitoring':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-100 text-teal-800'}`}>
            Monitoring
          </span>;
      case 'resolved':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
            Resolved
          </span>;
      default:
        return null;
    }
  };
  return <div>
      <div className="mb-6">
        <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          System Performance
        </h1>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Monitor and analyze performance metrics across all regions
        </p>
      </div>
      {/* Performance Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {performanceMetrics.map((metric, index) => <div key={index} className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 rounded-lg border transition-colors duration-300`}>
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
                  <div className={`ml-2 flex items-center text-sm font-medium ${metric.trend === 'up' ? darkMode ? 'text-green-400' : 'text-green-600' : darkMode ? 'text-red-400' : 'text-red-600'}`}>
                    {metric.trend === 'up' ? <TrendingUpIcon className="h-4 w-4 mr-1" /> : <TrendingDownIcon className="h-4 w-4 mr-1" />}
                    {metric.change}
                  </div>
                </div>
              </div>
            </div>
          </div>)}
      </div>
      {/* Time Range and Region Filter */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className={`inline-flex rounded-md shadow-sm ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <button type="button" className={`px-4 py-2 text-sm font-medium rounded-l-md ${timeRange === 'week' ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white' : darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-200'}`} onClick={() => setTimeRange('week')}>
            Week
          </button>
          <button type="button" className={`px-4 py-2 text-sm font-medium ${timeRange === 'month' ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white' : darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-200'}`} onClick={() => setTimeRange('month')}>
            Month
          </button>
          <button type="button" className={`px-4 py-2 text-sm font-medium rounded-r-md ${timeRange === 'year' ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white' : darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-200'}`} onClick={() => setTimeRange('year')}>
            Year
          </button>
        </div>
        <select className={`block pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300 text-gray-900'} focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md transition-colors duration-300`} value={selectedRegion} onChange={e => setSelectedRegion(e.target.value)}>
          <option value="all">All Regions</option>
          <option value="MIMAROPA">MIMAROPA</option>
          <option value="Central Visayas">Central Visayas</option>
          <option value="CALABARZON">CALABARZON</option>
          <option value="Davao Region">Davao Region</option>
          <option value="Western Visayas">Western Visayas</option>
        </select>
        <button className={`inline-flex items-center px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-300`}>
          <DownloadIcon className="h-4 w-4 mr-2" />
          Export Report
        </button>
      </div>
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* User Activity by Region */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              User Activity by Region
            </h2>
            <div className="flex items-center">
              <BarChart2Icon className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-1`} />
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Last 30 days
              </span>
            </div>
          </div>
          <div className="h-64">
            <canvas ref={activityChartRef}></canvas>
          </div>
        </div>
        {/* Verification Rate */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Verification Status Distribution
            </h2>
            <div className="flex items-center">
              <PieChartIcon className={`h-5 w-5 ${darkMode ? 'text-green-400' : 'text-green-600'} mr-1`} />
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Overall
              </span>
            </div>
          </div>
          <div className="h-64">
            <canvas ref={verificationChartRef}></canvas>
          </div>
        </div>
      </div>
      {/* User Growth Chart */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300 mb-6`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            User Growth Trend
          </h2>
          <div className="flex items-center">
            <LineChartIcon className={`h-5 w-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'} mr-1`} />
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Last 6 months
            </span>
          </div>
        </div>
        <div className="h-64">
          <canvas ref={userGrowthChartRef}></canvas>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Top Performing Regions */}
        <div className={`lg:col-span-2 ${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
            Top Performing Regions
          </h2>
          <div className="overflow-x-auto">
            <table className={`min-w-full divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'} transition-colors duration-300`}>
              <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors duration-300`}>
                <tr>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                    Region
                  </th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                    Performance Score
                  </th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                    Users
                  </th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                    Verification
                  </th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                    Response Time
                  </th>
                </tr>
              </thead>
              <tbody className={`${darkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'} transition-colors duration-300`}>
                {topRegions.map((region, index) => <tr key={index} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                      <div className="flex items-center">
                        <span className={`flex items-center justify-center h-6 w-6 rounded-full ${index < 3 ? darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800' : darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-600'} mr-2`}>
                          {index + 1}
                        </span>
                        {region.name}
                      </div>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                      <div className="flex items-center">
                        <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-1.5 mr-2 w-24`}>
                          <div className={`${darkMode ? 'bg-teal-500' : 'bg-teal-600'} h-1.5 rounded-full`} style={{
                        width: `${region.score}%`
                      }}></div>
                        </div>
                        <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {region.score}%
                        </span>
                      </div>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'} transition-colors duration-300`}>
                      {region.users}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'} transition-colors duration-300`}>
                      {region.verificationRate}%
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'} transition-colors duration-300`}>
                      {region.responseTime}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
        {/* Performance Issues */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
            Performance Issues
          </h2>
          <div className="space-y-4">
            {performanceIssues.map(issue => <div key={issue.id} className={`p-4 ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} rounded-lg transition-colors duration-300`}>
                <div className="flex items-start">
                  <AlertCircleIcon className={`h-5 w-5 ${issue.severity === 'high' ? darkMode ? 'text-red-400' : 'text-red-600' : issue.severity === 'medium' ? darkMode ? 'text-yellow-400' : 'text-yellow-600' : darkMode ? 'text-green-400' : 'text-green-600'} mt-0.5 mr-3 flex-shrink-0`} />
                  <div>
                    <p className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      {issue.issue}
                    </p>
                    <div className="mt-1 flex items-center text-xs space-x-2">
                      {getSeverityBadge(issue.severity)}
                      {getStatusBadge(issue.status)}
                    </div>
                    <p className={`mt-1 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Reported: {issue.timestamp}
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex justify-end space-x-2">
                  <button className={`px-2 py-1 text-xs font-medium rounded ${darkMode ? 'bg-gray-600 text-gray-200 hover:bg-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                    Details
                  </button>
                  <button className={`px-2 py-1 text-xs font-medium rounded ${darkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                    Resolve
                  </button>
                </div>
              </div>)}
            <button className={`w-full mt-2 px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} shadow-sm text-sm font-medium rounded-md focus:outline-none transition-colors duration-300`}>
              View All Issues
            </button>
          </div>
        </div>
      </div>
    </div>;
};