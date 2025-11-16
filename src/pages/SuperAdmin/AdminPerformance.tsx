import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { BarChart2Icon, TrendingUpIcon, TrendingDownIcon, CheckCircleIcon, ClockIcon, AlertTriangleIcon, UserIcon, MapPinIcon, FilterIcon, DownloadIcon, CalendarIcon, ArrowUpIcon, ArrowDownIcon, UsersIcon } from 'lucide-react';
import Chart from 'chart.js/auto';
export const AdminPerformance: React.FC = () => {
  const {
    darkMode
  } = useTheme();
  const verificationChartRef = useRef(null);
  const responseTimeChartRef = useRef(null);
  const userSatisfactionChartRef = useRef(null);
  // Charts initialization
  useEffect(() => {
    let verificationChart, responseTimeChart, userSatisfactionChart;
    if (verificationChartRef.current) {
      const ctx = verificationChartRef.current.getContext('2d');
      verificationChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Cebu', 'Davao', 'Palawan', 'Iloilo', 'Zamboanga'],
          datasets: [{
            label: 'Verification Rate (%)',
            data: [98, 92, 95, 88, 85],
            backgroundColor: darkMode ? 'rgba(56, 189, 248, 0.6)' : 'rgba(56, 189, 248, 0.8)',
            borderColor: darkMode ? 'rgba(56, 189, 248, 0.8)' : 'rgba(56, 189, 248, 1)',
            borderWidth: 1,
            borderRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              grid: {
                color: darkMode ? 'rgba(75, 85, 99, 0.2)' : 'rgba(156, 163, 175, 0.1)'
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
          }
        }
      });
    }
    if (responseTimeChartRef.current) {
      const ctx = responseTimeChartRef.current.getContext('2d');
      responseTimeChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Average Response Time (hours)',
            data: [8.2, 7.5, 6.8, 5.2, 4.5, 3.8],
            fill: true,
            backgroundColor: darkMode ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)',
            borderColor: darkMode ? 'rgba(16, 185, 129, 0.8)' : 'rgba(16, 185, 129, 1)',
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: darkMode ? 'rgba(75, 85, 99, 0.2)' : 'rgba(156, 163, 175, 0.1)'
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
          }
        }
      });
    }
    if (userSatisfactionChartRef.current) {
      const ctx = userSatisfactionChartRef.current.getContext('2d');
      userSatisfactionChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Very Satisfied', 'Satisfied', 'Neutral', 'Unsatisfied'],
          datasets: [{
            data: [65, 25, 8, 2],
            backgroundColor: [darkMode ? 'rgba(16, 185, 129, 0.8)' : 'rgba(16, 185, 129, 0.8)', darkMode ? 'rgba(56, 189, 248, 0.8)' : 'rgba(56, 189, 248, 0.8)', darkMode ? 'rgba(251, 191, 36, 0.8)' : 'rgba(251, 191, 36, 0.8)', darkMode ? 'rgba(239, 68, 68, 0.8)' : 'rgba(239, 68, 68, 0.8)'],
            borderColor: darkMode ? '#1f2937' : '#ffffff',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                usePointStyle: true,
                padding: 20,
                color: darkMode ? '#d1d5db' : '#4b5563'
              }
            }
          },
          cutout: '70%'
        }
      });
    }
    return () => {
      if (verificationChart) verificationChart.destroy();
      if (responseTimeChart) responseTimeChart.destroy();
      if (userSatisfactionChart) userSatisfactionChart.destroy();
    };
  }, [darkMode]);
  const topPerformers = [{
    name: 'Maria Santos',
    region: 'Cebu',
    verificationRate: 98,
    responseTime: 2.5,
    fishersManaged: 245,
    trend: 'up'
  }, {
    name: 'Jose Reyes',
    region: 'Davao',
    verificationRate: 96,
    responseTime: 2.8,
    fishersManaged: 183,
    trend: 'up'
  }, {
    name: 'Ana Lim',
    region: 'Palawan',
    verificationRate: 95,
    responseTime: 3.1,
    fishersManaged: 156,
    trend: 'up'
  }];
  const needsImprovement = [{
    name: 'Roberto Cruz',
    region: 'Iloilo',
    verificationRate: 78,
    responseTime: 8.5,
    fishersManaged: 112,
    trend: 'down'
  }, {
    name: 'Elena Magtanggol',
    region: 'Zamboanga',
    verificationRate: 75,
    responseTime: 9.2,
    fishersManaged: 98,
    trend: 'down'
  }];
  return <div>
      <div className="mb-6">
        <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          LGU Admin Performance
        </h1>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Monitor and evaluate the performance of Local Government Unit
          administrators
        </p>
      </div>
      {/* Performance Overview */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Overall Verification Rate
            </h2>
            <div className={`p-2 rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'}`}>
              <CheckCircleIcon className="h-6 w-6" />
            </div>
          </div>
          <div className="flex items-end space-x-2">
            <div className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              92%
            </div>
            <div className={`flex items-center text-sm ${darkMode ? 'text-green-400' : 'text-green-600'} pb-1`}>
              <TrendingUpIcon className="h-4 w-4 mr-1" />
              +2.5%
            </div>
          </div>
          <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Average across all regions
          </p>
          <div className={`mt-4 w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5`}>
            <div className={`${darkMode ? 'bg-green-600' : 'bg-green-600'} h-2.5 rounded-full`} style={{
            width: '92%'
          }}></div>
          </div>
          <div className="mt-4 flex justify-between text-xs">
            <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
              Target: 95%
            </span>
            <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              92%
            </span>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Avg. Response Time
            </h2>
            <div className={`p-2 rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
              <ClockIcon className="h-6 w-6" />
            </div>
          </div>
          <div className="flex items-end space-x-2">
            <div className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              4.2
            </div>
            <div className={`flex items-center text-sm ${darkMode ? 'text-green-400' : 'text-green-600'} pb-1`}>
              <TrendingDownIcon className="h-4 w-4 mr-1" />
              -0.8
            </div>
          </div>
          <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Hours to respond to requests
          </p>
          <div className={`mt-4 w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5`}>
            <div className={`${darkMode ? 'bg-blue-600' : 'bg-blue-600'} h-2.5 rounded-full`} style={{
            width: '65%'
          }}></div>
          </div>
          <div className="mt-4 flex justify-between text-xs">
            <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
              Target: 3 hours
            </span>
            <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              4.2 hours
            </span>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              User Satisfaction
            </h2>
            <div className={`p-2 rounded-full ${darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
              <UsersIcon className="h-6 w-6" />
            </div>
          </div>
          <div className="flex items-end space-x-2">
            <div className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              4.5
            </div>
            <div className={`flex items-center text-sm ${darkMode ? 'text-green-400' : 'text-green-600'} pb-1`}>
              <TrendingUpIcon className="h-4 w-4 mr-1" />
              +0.2
            </div>
          </div>
          <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Average rating (out of 5)
          </p>
          <div className={`mt-4 w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5`}>
            <div className={`${darkMode ? 'bg-purple-600' : 'bg-purple-600'} h-2.5 rounded-full`} style={{
            width: '90%'
          }}></div>
          </div>
          <div className="mt-4 flex justify-between text-xs">
            <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
              Target: 4.7
            </span>
            <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              4.5
            </span>
          </div>
        </div>
      </div>
      {/* Performance Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-8">
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-lg shadow-sm border`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-md font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Verification Rates by Region
            </h2>
            <div className="flex space-x-2">
              <button className={`p-1 rounded-md ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <DownloadIcon className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </button>
            </div>
          </div>
          <div className="h-64">
            <canvas ref={verificationChartRef}></canvas>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-lg shadow-sm border`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-md font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Response Time Trend
            </h2>
            <div className="flex space-x-2">
              <button className={`p-1 rounded-md ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <FilterIcon className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </button>
              <button className={`p-1 rounded-md ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <DownloadIcon className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </button>
            </div>
          </div>
          <div className="h-64">
            <canvas ref={responseTimeChartRef}></canvas>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-lg shadow-sm border`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-md font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              User Satisfaction
            </h2>
            <div className="flex space-x-2">
              <button className={`p-1 rounded-md ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <CalendarIcon className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </button>
            </div>
          </div>
          <div className="h-64">
            <canvas ref={userSatisfactionChartRef}></canvas>
          </div>
        </div>
      </div>
      {/* Top Performers & Needs Improvement */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-lg shadow-sm border`}>
          <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
            Top Performing Admins
          </h2>
          <div className="space-y-4">
            {topPerformers.map((admin, index) => <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`h-10 w-10 rounded-full ${darkMode ? 'bg-green-900/50 text-green-400' : 'bg-green-100 text-green-600'} flex items-center justify-center`}>
                      <UserIcon className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                        {admin.name}
                      </div>
                      <div className="flex items-center text-xs">
                        <MapPinIcon className={`h-3 w-3 mr-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                        <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {admin.region}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={`flex items-center ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                    <ArrowUpIcon className="h-4 w-4 mr-1" />
                    <span className="text-xs font-medium">Top 5%</span>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Verification
                    </div>
                    <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      {admin.verificationRate}%
                    </div>
                  </div>
                  <div>
                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Response
                    </div>
                    <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      {admin.responseTime}h
                    </div>
                  </div>
                  <div>
                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Fishers
                    </div>
                    <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      {admin.fishersManaged}
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-lg shadow-sm border`}>
          <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
            Needs Improvement
          </h2>
          <div className="space-y-4">
            {needsImprovement.map((admin, index) => <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`h-10 w-10 rounded-full ${darkMode ? 'bg-yellow-900/50 text-yellow-400' : 'bg-yellow-100 text-yellow-600'} flex items-center justify-center`}>
                      <UserIcon className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                        {admin.name}
                      </div>
                      <div className="flex items-center text-xs">
                        <MapPinIcon className={`h-3 w-3 mr-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                        <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {admin.region}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={`flex items-center ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                    <AlertTriangleIcon className="h-4 w-4 mr-1" />
                    <span className="text-xs font-medium">Needs attention</span>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Verification
                    </div>
                    <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      {admin.verificationRate}%
                    </div>
                  </div>
                  <div>
                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Response
                    </div>
                    <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      {admin.responseTime}h
                    </div>
                  </div>
                  <div>
                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Fishers
                    </div>
                    <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      {admin.fishersManaged}
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <button className={`w-full py-1 text-xs font-medium ${darkMode ? 'bg-gray-600 hover:bg-gray-500 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'} rounded`}>
                    Schedule Training
                  </button>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};