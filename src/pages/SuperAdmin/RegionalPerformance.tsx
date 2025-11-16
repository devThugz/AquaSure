import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import Chart from 'chart.js/auto';
import { GlobeIcon, BarChart2Icon, MapPinIcon, Users2Icon, TrendingUpIcon, TrendingDownIcon, CheckCircleIcon, ClockIcon, FilterIcon, DownloadIcon, SearchIcon, ChevronDownIcon, ChevronUpIcon, ShieldIcon } from 'lucide-react';
export const RegionalPerformance: React.FC = () => {
  const {
    darkMode
  } = useTheme();
  const [timeRange, setTimeRange] = useState('month');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null);
  const userChartRef = useRef(null);
  const regionComparisonRef = useRef(null);
  // Mock data for regional metrics
  const regions = [{
    name: 'MIMAROPA',
    users: 1845,
    userGrowth: 12.5,
    userTrend: 'up',
    verificationRate: 95,
    responseTime: '1.2h',
    insuranceRate: 82,
    activeAdmins: 8,
    color: darkMode ? '#3b82f6' : '#2563eb'
  }, {
    name: 'Central Visayas',
    users: 2156,
    userGrowth: 15.2,
    userTrend: 'up',
    verificationRate: 92,
    responseTime: '0.9h',
    insuranceRate: 88,
    activeAdmins: 12,
    color: darkMode ? '#10b981' : '#059669'
  }, {
    name: 'CALABARZON',
    users: 1652,
    userGrowth: 8.7,
    userTrend: 'up',
    verificationRate: 90,
    responseTime: '1.5h',
    insuranceRate: 75,
    activeAdmins: 7,
    color: darkMode ? '#f59e0b' : '#d97706'
  }, {
    name: 'Davao Region',
    users: 1243,
    userGrowth: 10.3,
    userTrend: 'up',
    verificationRate: 94,
    responseTime: '1.0h',
    insuranceRate: 80,
    activeAdmins: 6,
    color: darkMode ? '#8b5cf6' : '#7c3aed'
  }, {
    name: 'Western Visayas',
    users: 1087,
    userGrowth: -2.1,
    userTrend: 'down',
    verificationRate: 88,
    responseTime: '1.8h',
    insuranceRate: 72,
    activeAdmins: 5,
    color: darkMode ? '#ec4899' : '#db2777'
  }];
  // Initialize charts when component mounts or when dark mode changes
  useEffect(() => {
    if (userChartRef.current && regionComparisonRef.current) {
      // User growth by region chart
      const userCtx = userChartRef.current.getContext('2d');
      const userChart = new Chart(userCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: regions.map(region => ({
            label: region.name,
            data: generateRandomData(6, 1000, 2500),
            borderColor: region.color,
            backgroundColor: `${region.color}20`,
            borderWidth: 2,
            tension: 0.4,
            fill: false
          }))
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
              position: 'top',
              labels: {
                color: darkMode ? '#e5e7eb' : '#111827'
              }
            }
          }
        }
      });
      // Region comparison chart
      const comparisonCtx = regionComparisonRef.current.getContext('2d');
      const comparisonChart = new Chart(comparisonCtx, {
        type: 'radar',
        data: {
          labels: ['User Growth', 'Verification Rate', 'Insurance Rate', 'Response Time', 'Admin Activity'],
          datasets: regions.map(region => ({
            label: region.name,
            data: [region.userGrowth, region.verificationRate, region.insuranceRate, 100 - parseFloat(region.responseTime) * 20, region.activeAdmins * 5 // Scale admin count for visualization
            ],
            borderColor: region.color,
            backgroundColor: `${region.color}40`,
            borderWidth: 2,
            pointBackgroundColor: region.color,
            pointRadius: 4
          }))
        },
        options: {
          responsive: true,
          scales: {
            r: {
              angleLines: {
                color: darkMode ? 'rgba(75, 85, 99, 0.2)' : 'rgba(209, 213, 219, 0.2)'
              },
              grid: {
                color: darkMode ? 'rgba(75, 85, 99, 0.2)' : 'rgba(209, 213, 219, 0.2)'
              },
              pointLabels: {
                color: darkMode ? '#e5e7eb' : '#111827'
              },
              ticks: {
                backdropColor: 'transparent',
                color: darkMode ? '#9ca3af' : '#4b5563'
              }
            }
          },
          plugins: {
            legend: {
              position: 'top',
              labels: {
                color: darkMode ? '#e5e7eb' : '#111827'
              }
            }
          }
        }
      });
      return () => {
        userChart.destroy();
        comparisonChart.destroy();
      };
    }
  }, [darkMode, regions]);
  // Helper function to generate random data for charts
  function generateRandomData(length, min, max) {
    return Array.from({
      length
    }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return <div>
      <div className="mb-6">
        <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          Regional Performance
        </h1>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Compare performance metrics across different regions
        </p>
      </div>
      {/* Regional Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 rounded-lg border transition-colors duration-300`}>
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
              <GlobeIcon className="h-6 w-6" />
            </div>
            <div className="ml-3">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Active Regions
              </p>
              <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                5
              </p>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Out of 17 regions
              </p>
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 rounded-lg border transition-colors duration-300`}>
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${darkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-100 text-teal-600'}`}>
              <Users2Icon className="h-6 w-6" />
            </div>
            <div className="ml-3">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Total Users
              </p>
              <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                7,983
              </p>
              <div className="flex items-center text-xs">
                <TrendingUpIcon className={`h-3 w-3 mr-1 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <span className={`${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                  +8.9% this month
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 rounded-lg border transition-colors duration-300`}>
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'}`}>
              <CheckCircleIcon className="h-6 w-6" />
            </div>
            <div className="ml-3">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Avg. Verification Rate
              </p>
              <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                91.8%
              </p>
              <div className="flex items-center text-xs">
                <TrendingUpIcon className={`h-3 w-3 mr-1 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <span className={`${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                  +2.3% vs. last month
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 rounded-lg border transition-colors duration-300`}>
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
              <ShieldIcon className="h-6 w-6" />
            </div>
            <div className="ml-3">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Avg. Insurance Rate
              </p>
              <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                79.4%
              </p>
              <div className="flex items-center text-xs">
                <TrendingUpIcon className={`h-3 w-3 mr-1 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <span className={`${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                  +5.2% vs. last month
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Time Range and Region Filter */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className={`inline-flex rounded-md shadow-sm ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <button type="button" className={`px-4 py-2 text-sm font-medium rounded-l-md ${timeRange === 'month' ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white' : darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-200'}`} onClick={() => setTimeRange('month')}>
            Month
          </button>
          <button type="button" className={`px-4 py-2 text-sm font-medium ${timeRange === 'quarter' ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white' : darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-200'}`} onClick={() => setTimeRange('quarter')}>
            Quarter
          </button>
          <button type="button" className={`px-4 py-2 text-sm font-medium rounded-r-md ${timeRange === 'year' ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white' : darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-200'}`} onClick={() => setTimeRange('year')}>
            Year
          </button>
        </div>
        <select className={`block pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300 text-gray-900'} focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md transition-colors duration-300`} value={selectedRegion} onChange={e => setSelectedRegion(e.target.value)}>
          <option value="all">All Regions</option>
          {regions.map(region => <option key={region.name} value={region.name}>
              {region.name}
            </option>)}
        </select>
        <button className={`inline-flex items-center px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-300`}>
          <DownloadIcon className="h-4 w-4 mr-2" />
          Export Report
        </button>
      </div>
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* User Growth by Region */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              User Growth by Region
            </h2>
            <div className="flex items-center">
              <BarChart2Icon className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-1`} />
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Last 6 months
              </span>
            </div>
          </div>
          <div className="h-64">
            <canvas ref={userChartRef}></canvas>
          </div>
        </div>
        {/* Regional Performance Comparison */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Regional Performance Comparison
            </h2>
            <div className="flex items-center">
              <GlobeIcon className={`h-5 w-5 ${darkMode ? 'text-teal-400' : 'text-teal-600'} mr-1`} />
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Current
              </span>
            </div>
          </div>
          <div className="h-64">
            <canvas ref={regionComparisonRef}></canvas>
          </div>
        </div>
      </div>
      {/* Regional Performance Table */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300 mb-6`}>
        <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
          Regional Performance Metrics
        </h2>
        <div className="overflow-x-auto">
          <table className={`min-w-full divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'} transition-colors duration-300`}>
            <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors duration-300`}>
              <tr>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                  Region
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                  Users
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                  Growth
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                  Verification
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                  Response Time
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                  Insurance
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className={`${darkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'} transition-colors duration-300`}>
              {regions.map(region => <tr key={region.name} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                  <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                    <div className="flex items-center">
                      <div style={{
                    backgroundColor: region.color + '40'
                  }} className={`p-2 rounded-full mr-3`}>
                        <MapPinIcon style={{
                      color: region.color
                    }} className="h-5 w-5" />
                      </div>
                      <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                        {region.name}
                      </div>
                    </div>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                    {region.users.toLocaleString()}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                    <div className="flex items-center">
                      {region.userTrend === 'up' ? <TrendingUpIcon className={`h-4 w-4 mr-1 ${darkMode ? 'text-green-400' : 'text-green-600'}`} /> : <TrendingDownIcon className={`h-4 w-4 mr-1 ${darkMode ? 'text-red-400' : 'text-red-600'}`} />}
                      <span className={`text-sm font-medium ${region.userTrend === 'up' ? darkMode ? 'text-green-400' : 'text-green-600' : darkMode ? 'text-red-400' : 'text-red-600'}`}>
                        {region.userTrend === 'up' ? '+' : ''}
                        {region.userGrowth}%
                      </span>
                    </div>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                          {region.verificationRate}%
                        </span>
                      </div>
                      <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-1.5`}>
                        <div className={`${darkMode ? 'bg-green-500' : 'bg-green-600'} h-1.5 rounded-full`} style={{
                      width: `${region.verificationRate}%`
                    }}></div>
                      </div>
                    </div>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'} transition-colors duration-300`}>
                    <div className="flex items-center">
                      <ClockIcon className={`h-4 w-4 mr-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      {region.responseTime}
                    </div>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                          {region.insuranceRate}%
                        </span>
                      </div>
                      <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-1.5`}>
                        <div className={`${darkMode ? 'bg-blue-500' : 'bg-blue-600'} h-1.5 rounded-full`} style={{
                      width: `${region.insuranceRate}%`
                    }}></div>
                      </div>
                    </div>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium transition-colors duration-300`}>
                    <button onClick={() => setExpandedRegion(expandedRegion === region.name ? null : region.name)} className={`px-3 py-1 text-xs font-medium rounded ${darkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                      {expandedRegion === region.name ? 'Hide Details' : 'View Details'}
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Regional Details */}
      {expandedRegion && <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300 mb-6`}>
          {regions.filter(r => r.name === expandedRegion).map(region => <div key={region.name}>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div style={{
              backgroundColor: region.color + '40'
            }} className={`p-2 rounded-full mr-3`}>
                      <MapPinIcon style={{
                color: region.color
              }} className="h-5 w-5" />
                    </div>
                    <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      {region.name} Regional Details
                    </h2>
                  </div>
                  <button onClick={() => setExpandedRegion(null)} className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                    <ChevronUpIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} p-4 rounded-lg transition-colors duration-300`}>
                    <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} mb-2`}>
                      User Demographics
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Registered Fishermen
                          </span>
                          <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                            {Math.round(region.users * 0.85).toLocaleString()}
                          </span>
                        </div>
                        <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-1.5`}>
                          <div className={`${darkMode ? 'bg-blue-500' : 'bg-blue-600'} h-1.5 rounded-full`} style={{
                    width: '85%'
                  }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Boat Owners
                          </span>
                          <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                            {Math.round(region.users * 0.62).toLocaleString()}
                          </span>
                        </div>
                        <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-1.5`}>
                          <div className={`${darkMode ? 'bg-green-500' : 'bg-green-600'} h-1.5 rounded-full`} style={{
                    width: '62%'
                  }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Crew Members
                          </span>
                          <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                            {Math.round(region.users * 0.38).toLocaleString()}
                          </span>
                        </div>
                        <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-1.5`}>
                          <div className={`${darkMode ? 'bg-yellow-500' : 'bg-yellow-600'} h-1.5 rounded-full`} style={{
                    width: '38%'
                  }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} p-4 rounded-lg transition-colors duration-300`}>
                    <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} mb-2`}>
                      Insurance Breakdown
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Premium Plan
                          </span>
                          <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                            {Math.round(region.users * region.insuranceRate / 100 * 0.25).toLocaleString()}
                          </span>
                        </div>
                        <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-1.5`}>
                          <div className={`${darkMode ? 'bg-purple-500' : 'bg-purple-600'} h-1.5 rounded-full`} style={{
                    width: '25%'
                  }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Standard Plan
                          </span>
                          <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                            {Math.round(region.users * region.insuranceRate / 100 * 0.45).toLocaleString()}
                          </span>
                        </div>
                        <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-1.5`}>
                          <div className={`${darkMode ? 'bg-blue-500' : 'bg-blue-600'} h-1.5 rounded-full`} style={{
                    width: '45%'
                  }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Basic Plan
                          </span>
                          <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                            {Math.round(region.users * region.insuranceRate / 100 * 0.3).toLocaleString()}
                          </span>
                        </div>
                        <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-1.5`}>
                          <div className={`${darkMode ? 'bg-teal-500' : 'bg-teal-600'} h-1.5 rounded-full`} style={{
                    width: '30%'
                  }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} p-4 rounded-lg transition-colors duration-300`}>
                    <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} mb-2`}>
                      Admin Performance
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Active Admins
                          </span>
                          <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                            {region.activeAdmins}
                          </span>
                        </div>
                        <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-1.5`}>
                          <div className={`${darkMode ? 'bg-blue-500' : 'bg-blue-600'} h-1.5 rounded-full`} style={{
                    width: `${region.activeAdmins / 12 * 100}%`
                  }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Avg. Response Time
                          </span>
                          <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                            {region.responseTime}
                          </span>
                        </div>
                        <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-1.5`}>
                          <div className={`${darkMode ? 'bg-green-500' : 'bg-green-600'} h-1.5 rounded-full`} style={{
                    width: `${1 / parseFloat(region.responseTime) * 100}%`
                  }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            User-to-Admin Ratio
                          </span>
                          <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                            {Math.round(region.users / region.activeAdmins)}:1
                          </span>
                        </div>
                        <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-1.5`}>
                          <div className={`${darkMode ? 'bg-yellow-500' : 'bg-yellow-600'} h-1.5 rounded-full`} style={{
                    width: `${Math.min(100, 300 / (region.users / region.activeAdmins))}%`
                  }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <button className={`px-3 py-1 text-sm font-medium rounded ${darkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    View Full Report
                  </button>
                  <button className={`px-3 py-1 text-sm font-medium rounded ${darkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                    Manage Region
                  </button>
                </div>
              </div>)}
        </div>}
    </div>;
};