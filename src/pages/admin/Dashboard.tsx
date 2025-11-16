import React, { useEffect, useState, useRef, Component } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { UsersIcon, ShieldIcon, CloudLightningIcon, MapPinIcon, BellIcon, FishIcon, MegaphoneIcon, HeartPulseIcon, TrendingUpIcon, CheckIcon, XIcon, ClockIcon, TrendingDownIcon } from 'lucide-react';
import Chart from 'chart.js/auto';
export function AdminDashboard() {
  const {
    user
  } = useAuth();
  const navigate = useNavigate();
  const {
    darkMode
  } = useTheme();
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  // Redirect super admin to their dedicated dashboard
  useEffect(() => {
    if (user?.role === 'super_admin') {
      navigate('/super-admin', {
        replace: true
      });
    }
  }, [user, navigate]);
  // If super admin somehow gets here, show loading while redirect happens
  if (user?.role === 'super_admin') {
    return <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Redirecting to Super Admin Dashboard...
          </p>
        </div>
      </div>;
  }
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
  // Mock verification requests
  const verificationRequests = [{
    id: 1,
    name: 'Juan Dela Cruz',
    type: 'Fisher Registration',
    location: 'Batangas City',
    submitted: '2 days ago'
  }, {
    id: 2,
    name: 'Maria Santos',
    type: 'License Renewal',
    location: 'Palawan',
    submitted: '1 day ago'
  }, {
    id: 3,
    name: 'Pedro Reyes',
    type: 'Boat Registration',
    location: 'Cebu',
    submitted: '5 hours ago'
  }];
  // Mock weather alerts
  const weatherAlerts = [{
    id: 1,
    type: 'Storm Warning',
    description: 'Strong storm approaching from the east. Expected to hit coastal areas in 6-8 hours.',
    severity: 'high'
  }, {
    id: 2,
    type: 'High Waves Alert',
    description: 'Wave heights expected to reach 2-3 meters in the next 24 hours. Small boats advised to stay ashore.',
    severity: 'medium'
  }];
  // Mock recent announcements
  const recentAnnouncements = [{
    id: 1,
    title: 'New Fisheries Code Implementation',
    date: '2023-05-15',
    views: 245
  }, {
    id: 2,
    title: 'Fishing License Renewal Notice',
    date: '2023-05-10',
    views: 187
  }, {
    id: 3,
    title: 'Coastal Clean-up Drive Announcement',
    date: '2023-05-05',
    views: 156
  }];
  // Mock fish hub activity
  const fishHubActivity = [{
    id: 1,
    action: 'Added new species',
    species: 'Rabbitfish (Kitang)',
    user: 'Admin LGU',
    date: '2023-05-16'
  }, {
    id: 2,
    action: 'Updated information',
    species: 'Bangus (Milkfish)',
    user: 'Admin LGU',
    date: '2023-05-14'
  }, {
    id: 3,
    action: 'Added new species',
    species: 'Blue Marlin',
    user: 'Admin LGU',
    date: '2023-05-10'
  }];
  // Insurance status trends data for chart
  const insuranceTrendsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Active Policies',
      data: [485, 502, 528, 559, 592, 612],
      borderColor: 'rgba(16, 185, 129, 1)',
      backgroundColor: 'rgba(16, 185, 129, 0.2)',
      borderWidth: 2,
      tension: 0.4,
      fill: true
    }, {
      label: 'Expired Policies',
      data: [120, 115, 102, 95, 93, 88],
      borderColor: 'rgba(239, 68, 68, 1)',
      backgroundColor: 'rgba(239, 68, 68, 0.2)',
      borderWidth: 2,
      tension: 0.4,
      fill: true
    }, {
      label: 'New Registrations',
      data: [25, 32, 38, 42, 48, 55],
      borderColor: 'rgba(59, 130, 246, 1)',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderWidth: 2,
      tension: 0.4,
      fill: true
    }]
  };
  // Initialize and update chart when component mounts or dark mode changes
  useEffect(() => {
    if (chartRef.current) {
      // Destroy previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      // Create new chart
      const ctx = chartRef.current.getContext('2d');
      // Create gradient for active policies
      const activeGradient = ctx.createLinearGradient(0, 0, 0, 400);
      activeGradient.addColorStop(0, darkMode ? 'rgba(16, 185, 129, 0.3)' : 'rgba(16, 185, 129, 0.4)');
      activeGradient.addColorStop(1, darkMode ? 'rgba(16, 185, 129, 0.02)' : 'rgba(16, 185, 129, 0.05)');
      // Create gradient for expired policies
      const expiredGradient = ctx.createLinearGradient(0, 0, 0, 400);
      expiredGradient.addColorStop(0, darkMode ? 'rgba(239, 68, 68, 0.3)' : 'rgba(239, 68, 68, 0.4)');
      expiredGradient.addColorStop(1, darkMode ? 'rgba(239, 68, 68, 0.02)' : 'rgba(239, 68, 68, 0.05)');
      // Create gradient for new registrations
      const newRegGradient = ctx.createLinearGradient(0, 0, 0, 400);
      newRegGradient.addColorStop(0, darkMode ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.4)');
      newRegGradient.addColorStop(1, darkMode ? 'rgba(59, 130, 246, 0.02)' : 'rgba(59, 130, 246, 0.05)');
      // Apply gradients to datasets
      const chartData = {
        ...insuranceTrendsData,
        datasets: [{
          ...insuranceTrendsData.datasets[0],
          backgroundColor: activeGradient
        }, {
          ...insuranceTrendsData.datasets[1],
          backgroundColor: expiredGradient
        }, {
          ...insuranceTrendsData.datasets[2],
          backgroundColor: newRegGradient
        }]
      };
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
              labels: {
                usePointStyle: true,
                boxWidth: 6,
                font: {
                  size: 12
                },
                color: darkMode ? '#e5e7eb' : '#111827'
              }
            },
            tooltip: {
              backgroundColor: darkMode ? 'rgba(31, 41, 55, 0.9)' : 'rgba(255, 255, 255, 0.9)',
              titleColor: darkMode ? '#e5e7eb' : '#111827',
              bodyColor: darkMode ? '#d1d5db' : '#4B5563',
              borderColor: darkMode ? 'rgba(75, 85, 99, 0.3)' : 'rgba(59, 130, 246, 0.3)',
              borderWidth: 1,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              cornerRadius: 8,
              padding: 12,
              displayColors: true,
              usePointStyle: true,
              callbacks: {
                label: function (context) {
                  const label = context.dataset.label || '';
                  const value = context.parsed.y || 0;
                  return `${label}: ${value} policies`;
                }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: darkMode ? 'rgba(75, 85, 99, 0.15)' : 'rgba(156, 163, 175, 0.1)',
                drawBorder: false
              },
              ticks: {
                font: {
                  size: 11
                },
                color: darkMode ? '#9ca3af' : '#4b5563'
              }
            },
            x: {
              grid: {
                display: false
              },
              ticks: {
                font: {
                  size: 11
                },
                color: darkMode ? '#9ca3af' : '#4b5563'
              }
            }
          },
          elements: {
            point: {
              radius: 3,
              hoverRadius: 5,
              hitRadius: 10,
              hoverBorderWidth: 2
            },
            line: {
              borderWidth: 3
            }
          },
          animation: {
            duration: 1500,
            easing: 'easeOutQuart'
          }
        }
      });
    }
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [darkMode]);
  return <div className="max-w-7xl mx-auto">
      <div className="mb-4 sm:mb-6">
        <h2 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          Admin Dashboard
        </h2>
        <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
          Overview of AquaSure system and fisher activities
        </p>
      </div>
      {showWelcomeMessage && <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl shadow-lg p-4 sm:p-6 mb-6 text-white">
          <div className="flex justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-medium">
                Welcome, {user?.name || 'Admin'}!
              </h3>
              <p className="mt-1 text-sm sm:text-base text-teal-100">
                You're managing the AquaSure platform for your local fishing
                community. Here's what needs your attention today:
              </p>
              <div className="mt-4 flex flex-wrap gap-3 sm:gap-4">
                <div className="flex items-center">
                  <ShieldIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white mr-1" />
                  <span className="text-xs sm:text-sm">
                    8 verification requests
                  </span>
                </div>
                <div className="flex items-center">
                  <BellIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white mr-1" />
                  <span className="text-xs sm:text-sm">2 weather alerts</span>
                </div>
                <div className="flex items-center">
                  <MegaphoneIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white mr-1" />
                  <span className="text-xs sm:text-sm">
                    1 draft announcement
                  </span>
                </div>
              </div>
            </div>
            <button onClick={() => setShowWelcomeMessage(false)} className="text-white hover:text-teal-100 transition-colors">
              <XIcon className="h-5 w-5" />
            </button>
          </div>
        </div>}
      {/* 1×4 Desktop, 2×2 Mobile Grid Layout - Matching Fisher User Style */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
        <StatCard icon={UsersIcon} title="Registered Fishermen" value="843" change="+12 this week" color="bg-gradient-to-r from-blue-500 to-blue-600" />
        <StatCard icon={ShieldIcon} title="Verification Requests" value="24" change="8 pending review" color="bg-gradient-to-r from-teal-500 to-teal-600" />
        <StatCard icon={CloudLightningIcon} title="Active Weather Alerts" value="2" change="High priority" color="bg-gradient-to-r from-amber-500 to-amber-600" />
        <StatCard icon={MapPinIcon} title="Fishermen at Sea" value="156" change="Currently tracking" color="bg-gradient-to-r from-indigo-500 to-indigo-600" />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 sm:p-6 rounded-2xl border transition-colors duration-300`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-base sm:text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Recent Verification Requests
            </h2>
            <a href="/admin/verification" className={`text-xs sm:text-sm ${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-800'}`}>
              View all
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                <tr>
                  <th scope="col" className={`px-4 sm:px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                    User
                  </th>
                  <th scope="col" className={`px-4 sm:px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                    Type
                  </th>
                  <th scope="col" className={`px-4 sm:px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                    Location
                  </th>
                  <th scope="col" className={`px-4 sm:px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                    Submitted
                  </th>
                  <th scope="col" className={`px-4 sm:px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className={`${darkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}`}>
                {verificationRequests.map(request => <tr key={request.id} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-8 w-8 flex-shrink-0">
                          <div className={`h-8 w-8 rounded-full ${darkMode ? 'bg-teal-900/50 text-teal-400' : 'bg-teal-100 text-teal-600'} flex items-center justify-center`}>
                            <UsersIcon className="h-4 w-4" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                            {request.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={`px-4 sm:px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {request.type}
                    </td>
                    <td className={`px-4 sm:px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {request.location}
                    </td>
                    <td className={`px-4 sm:px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {request.submitted}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className={`p-1 rounded-full ${darkMode ? 'text-green-400 hover:bg-green-900/30' : 'text-green-600 hover:bg-green-50'}`}>
                          <CheckIcon className="h-5 w-5" />
                        </button>
                        <button className={`p-1 rounded-full ${darkMode ? 'text-red-400 hover:bg-red-900/30' : 'text-red-600 hover:bg-red-50'}`}>
                          <XIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 sm:p-6 rounded-2xl border transition-colors duration-300`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-base sm:text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Weather Alerts
            </h2>
            <a href="/admin/weather" className={`text-xs sm:text-sm ${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-800'}`}>
              Manage alerts
            </a>
          </div>
          <div className="space-y-4">
            {weatherAlerts.map(alert => <div key={alert.id} className={`p-4 ${alert.severity === 'high' ? darkMode ? 'bg-red-900/20 border border-red-900/50' : 'bg-red-50 border border-red-200' : darkMode ? 'bg-yellow-900/20 border border-yellow-900/50' : 'bg-yellow-50 border border-yellow-200'} rounded-xl`}>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CloudLightningIcon className={`h-5 w-5 ${alert.severity === 'high' ? darkMode ? 'text-red-400' : 'text-red-700' : darkMode ? 'text-yellow-400' : 'text-yellow-700'}`} />
                  </div>
                  <div className="ml-3 flex-1">
                    <h3 className={`text-sm font-medium ${alert.severity === 'high' ? darkMode ? 'text-red-400' : 'text-red-800' : darkMode ? 'text-yellow-400' : 'text-yellow-800'}`}>
                      {alert.type}
                    </h3>
                    <div className={`mt-1 text-sm ${alert.severity === 'high' ? darkMode ? 'text-red-300' : 'text-red-700' : darkMode ? 'text-yellow-300' : 'text-yellow-700'}`}>
                      <p>{alert.description}</p>
                    </div>
                    <div className="mt-2">
                      <div className="flex flex-wrap gap-2">
                        <button className={`${alert.severity === 'high' ? darkMode ? 'bg-red-900/50 text-red-300 hover:bg-red-900/70' : 'bg-red-100 text-red-800 hover:bg-red-200' : darkMode ? 'bg-yellow-900/50 text-yellow-300 hover:bg-yellow-900/70' : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'} px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors`}>
                          Send Alert to All
                        </button>
                        <button className={`${alert.severity === 'high' ? darkMode ? 'bg-gray-800 text-red-300 border border-red-900/50 hover:bg-gray-700' : 'bg-white text-red-800 border border-red-300 hover:bg-red-50' : darkMode ? 'bg-gray-800 text-yellow-300 border border-yellow-900/50 hover:bg-gray-700' : 'bg-white text-yellow-800 border border-yellow-300 hover:bg-yellow-50'} px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors`}>
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
            <button className={`w-full mt-2 px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} shadow-sm text-sm font-medium rounded-xl focus:outline-none transition-colors duration-300`}>
              Create New Weather Alert
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-8">
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 sm:p-6 rounded-2xl border transition-colors duration-300`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-base sm:text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Recent Announcements
            </h2>
            <a href="/admin/announcements" className={`text-xs sm:text-sm ${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-800'}`}>
              View all
            </a>
          </div>
          <div className="space-y-4">
            {recentAnnouncements.map(announcement => <div key={announcement.id} className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} pb-4 last:border-b-0 last:pb-0`}>
                <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {announcement.title}
                </h3>
                <div className="mt-1 flex justify-between items-center text-xs text-gray-500">
                  <div className="flex items-center">
                    <ClockIcon className={`h-4 w-4 mr-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                      {announcement.date}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <UsersIcon className={`h-4 w-4 mr-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                      {announcement.views} views
                    </span>
                  </div>
                </div>
              </div>)}
            <button className={`w-full mt-2 px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} shadow-sm text-sm font-medium rounded-xl focus:outline-none transition-colors duration-300`}>
              Create New Announcement
            </button>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 sm:p-6 rounded-2xl border transition-colors duration-300`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-base sm:text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Fish Hub Activity
            </h2>
            <a href="/admin/fish-hub" className={`text-xs sm:text-sm ${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-800'}`}>
              View Fish Hub
            </a>
          </div>
          <div className="space-y-4">
            {fishHubActivity.map(activity => <div key={activity.id} className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} pb-4 last:border-b-0 last:pb-0`}>
                <div className="flex items-start">
                  <div className={`rounded-full p-1 ${darkMode ? 'bg-teal-900/50 text-teal-400' : 'bg-teal-100 text-teal-600'} mr-3`}>
                    <FishIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      {activity.action}:{' '}
                      <span className={darkMode ? 'text-teal-400' : 'text-teal-600'}>
                        {activity.species}
                      </span>
                    </p>
                    <div className="mt-1 flex items-center text-xs text-gray-500">
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                        {activity.user}
                      </span>
                      <span className={`mx-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        •
                      </span>
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                        {activity.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>)}
            <button className={`w-full mt-2 px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} shadow-sm text-sm font-medium rounded-xl focus:outline-none transition-colors duration-300`}>
              Add New Fish Species
            </button>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 sm:p-6 rounded-2xl border transition-colors duration-300`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-base sm:text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Insurance Status
            </h2>
            <a href="#" className={`text-xs sm:text-sm ${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-800'}`}>
              View full report
            </a>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Total Insured
                </p>
                <p className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  685 (81%)
                </p>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5`}>
                <div className={`${darkMode ? 'bg-blue-500' : 'bg-blue-600'} h-2.5 rounded-full`} style={{
                width: '81%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Active Coverage
                </p>
                <p className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  592 (70%)
                </p>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5`}>
                <div className={`${darkMode ? 'bg-green-500' : 'bg-green-500'} h-2.5 rounded-full`} style={{
                width: '70%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  At Risk
                </p>
                <p className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  93 (11%)
                </p>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5`}>
                <div className={`${darkMode ? 'bg-yellow-500' : 'bg-yellow-500'} h-2.5 rounded-full`} style={{
                width: '11%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Uninsured
                </p>
                <p className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  158 (19%)
                </p>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5`}>
                <div className={`${darkMode ? 'bg-red-500' : 'bg-red-500'} h-2.5 rounded-full`} style={{
                width: '19%'
              }}></div>
              </div>
            </div>
            <div className={`pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} mt-4`}>
              <div className="flex items-center">
                <div className={`rounded-full p-2 ${darkMode ? 'bg-teal-900/50' : 'bg-teal-100'}`}>
                  <HeartPulseIcon className={`h-5 w-5 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`} />
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    Insurance Hub Health
                  </p>
                  <div className="flex items-center">
                    <TrendingUpIcon className={`h-4 w-4 ${darkMode ? 'text-green-400' : 'text-green-500'} mr-1`} />
                    <p className={`text-xs ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                      +5% coverage this month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Insurance Status Trends Chart */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 sm:p-6 rounded-2xl border transition-colors duration-300 mb-8`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-base sm:text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            Insurance Status Trends
          </h2>
          <div className="flex space-x-2">
            <div className="flex items-center text-xs">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Active
              </span>
            </div>
            <div className="flex items-center text-xs">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Expired
              </span>
            </div>
            <div className="flex items-center text-xs">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                New
              </span>
            </div>
          </div>
        </div>
        {/* 2x2 Grid for Performance Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className={`${darkMode ? 'bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-900/30' : 'bg-gradient-to-br from-green-50 to-blue-50 border border-green-100'} p-4 rounded-xl transition-colors duration-300`}>
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>
              Active Growth
            </div>
            <div className={`text-xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
              +3.4%
            </div>
            <div className="flex items-center mt-1">
              <TrendingUpIcon className={`h-4 w-4 mr-1 ${darkMode ? 'text-green-400' : 'text-green-500'}`} />
              <span className={`text-xs ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                vs. last month
              </span>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-900/30' : 'bg-gradient-to-br from-red-50 to-orange-50 border border-red-100'} p-4 rounded-xl transition-colors duration-300`}>
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>
              Expired Reduction
            </div>
            <div className={`text-xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
              -5.3%
            </div>
            <div className="flex items-center mt-1">
              <TrendingDownIcon className={`h-4 w-4 mr-1 ${darkMode ? 'text-green-400' : 'text-green-500'}`} />
              <span className={`text-xs ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                vs. last month
              </span>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-900/30' : 'bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100'} p-4 rounded-xl transition-colors duration-300`}>
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>
              New Registrations
            </div>
            <div className={`text-xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              +14.6%
            </div>
            <div className="flex items-center mt-1">
              <TrendingUpIcon className={`h-4 w-4 mr-1 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
              <span className={`text-xs ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                vs. last month
              </span>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-900/30' : 'bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100'} p-4 rounded-xl transition-colors duration-300`}>
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>
              Average Coverage Duration
            </div>
            <div className={`text-xl font-bold ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
              8.7 months
            </div>
            <div className="flex items-center mt-1">
              <TrendingUpIcon className={`h-4 w-4 mr-1 ${darkMode ? 'text-teal-400' : 'text-teal-500'}`} />
              <span className={`text-xs ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                +0.5 vs. last year
              </span>
            </div>
          </div>
        </div>
        <div className="h-80 relative">
          <canvas ref={chartRef}></canvas>
          {/* Futuristic overlay effects */}
          <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${darkMode ? 'via-blue-500' : 'via-blue-400'} to-transparent opacity-60`}></div>
          <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${darkMode ? 'via-blue-500' : 'via-blue-400'} to-transparent opacity-60`}></div>
        </div>
        <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
          <div className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
            Data updated: June 30, 2023
          </div>
          <div className="flex space-x-4">
            <button className={darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}>
              Monthly View
            </button>
            <button className={darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}>
              Quarterly View
            </button>
            <button className={darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}>
              Yearly View
            </button>
          </div>
        </div>
      </div>
    </div>;
}