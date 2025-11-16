import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import Chart from 'chart.js/auto';
import { BrainIcon, BarChart2Icon, LineChartIcon, AlertTriangleIcon, CheckCircleIcon, XCircleIcon, ClockIcon, RefreshCwIcon, MessageSquareIcon, SearchIcon, FilterIcon, ChevronDownIcon, ChevronUpIcon, ZapIcon, ServerIcon, CpuIcon, DatabaseIcon, EyeIcon, FileTextIcon } from 'lucide-react';
export const AIMonitoring: React.FC = () => {
  const {
    darkMode
  } = useTheme();
  const [timeRange, setTimeRange] = useState('day');
  const [expandedAlert, setExpandedAlert] = useState<number | null>(null);
  const usageChartRef = useRef(null);
  const accuracyChartRef = useRef(null);
  // Mock data for AI system metrics
  const aiMetrics = [{
    name: 'API Calls',
    value: '32,845',
    change: '+12% vs. last week',
    trend: 'up',
    icon: <ZapIcon className="h-6 w-6" />,
    color: darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
  }, {
    name: 'Avg. Response Time',
    value: '245ms',
    change: '-18ms vs. last week',
    trend: 'down',
    icon: <ClockIcon className="h-6 w-6" />,
    color: darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'
  }, {
    name: 'Success Rate',
    value: '99.7%',
    change: '+0.2% vs. last week',
    trend: 'up',
    icon: <CheckCircleIcon className="h-6 w-6" />,
    color: darkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-100 text-teal-600'
  }, {
    name: 'Error Rate',
    value: '0.3%',
    change: '-0.2% vs. last week',
    trend: 'down',
    icon: <AlertTriangleIcon className="h-6 w-6" />,
    color: darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-600'
  }];
  // Mock data for AI features usage
  const aiFeatures = [{
    name: 'Weather Prediction',
    usage: 34,
    accuracy: 92
  }, {
    name: 'Fish Price Analysis',
    usage: 28,
    accuracy: 88
  }, {
    name: 'Catch Estimation',
    usage: 18,
    accuracy: 85
  }, {
    name: 'Navigation Assistance',
    usage: 12,
    accuracy: 94
  }, {
    name: 'Risk Assessment',
    usage: 8,
    accuracy: 90
  }];
  // Mock data for system alerts
  const systemAlerts = [{
    id: 1,
    title: 'High latency detected in prediction service',
    severity: 'warning',
    timestamp: '2023-06-16 14:22:15',
    message: 'The weather prediction service is experiencing higher than normal latency. Average response time has increased to 450ms from the baseline of 200ms. This might affect user experience for fishermen checking weather forecasts.',
    status: 'investigating',
    service: 'Weather Prediction API'
  }, {
    id: 2,
    title: 'Model accuracy drop in catch estimation',
    severity: 'alert',
    timestamp: '2023-06-15 09:15:33',
    message: 'The catch estimation model accuracy has dropped from 89% to 82% in the last 24 hours. This could be due to recent changes in seasonal patterns not yet incorporated into the model. Retraining is recommended.',
    status: 'in progress',
    service: 'Catch Estimation Model'
  }, {
    id: 3,
    title: 'API rate limiting triggered',
    severity: 'info',
    timestamp: '2023-06-15 02:45:18',
    message: 'Rate limiting was triggered for the Fish Price Analysis API due to unusually high traffic from the Central Visayas region. This might indicate either increased user activity or potential automated scraping.',
    status: 'resolved',
    service: 'Fish Price Analysis API'
  }];
  // Initialize charts when component mounts or when dark mode changes
  useEffect(() => {
    if (usageChartRef.current && accuracyChartRef.current) {
      // AI Features Usage chart
      const usageCtx = usageChartRef.current.getContext('2d');
      const usageChart = new Chart(usageCtx, {
        type: 'bar',
        data: {
          labels: aiFeatures.map(feature => feature.name),
          datasets: [{
            label: 'Usage (%)',
            data: aiFeatures.map(feature => feature.usage),
            backgroundColor: darkMode ? 'rgba(59, 130, 246, 0.7)' : 'rgba(37, 99, 235, 0.7)',
            borderColor: darkMode ? 'rgba(59, 130, 246, 1)' : 'rgba(37, 99, 235, 1)',
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
      // AI Model Accuracy chart
      const accuracyCtx = accuracyChartRef.current.getContext('2d');
      const accuracyChart = new Chart(accuracyCtx, {
        type: 'line',
        data: {
          labels: aiFeatures.map(feature => feature.name),
          datasets: [{
            label: 'Accuracy (%)',
            data: aiFeatures.map(feature => feature.accuracy),
            fill: false,
            borderColor: darkMode ? 'rgba(16, 185, 129, 1)' : 'rgba(5, 150, 105, 1)',
            backgroundColor: darkMode ? 'rgba(16, 185, 129, 0.2)' : 'rgba(5, 150, 105, 0.2)',
            tension: 0.4,
            borderWidth: 2,
            pointBackgroundColor: darkMode ? 'rgba(16, 185, 129, 1)' : 'rgba(5, 150, 105, 1)',
            pointRadius: 4
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
              min: 80,
              max: 100,
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
        usageChart.destroy();
        accuracyChart.destroy();
      };
    }
  }, [darkMode, aiFeatures]);
  const getSeverityBadge = severity => {
    switch (severity) {
      case 'alert':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'}`}>
            Alert
          </span>;
      case 'warning':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800'}`}>
            Warning
          </span>;
      case 'info':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>
            Info
          </span>;
      default:
        return null;
    }
  };
  const getStatusBadge = status => {
    switch (status) {
      case 'investigating':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-800'}`}>
            Investigating
          </span>;
      case 'in progress':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>
            In Progress
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
          AI System Monitoring
        </h1>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Monitor performance and health of AI models and services
        </p>
      </div>
      {/* AI System Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {aiMetrics.map((metric, index) => <div key={index} className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 rounded-lg border transition-colors duration-300`}>
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
                </div>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {metric.change}
                </p>
              </div>
            </div>
          </div>)}
      </div>
      {/* Time Range Filter */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className={`inline-flex rounded-md shadow-sm ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <button type="button" className={`px-4 py-2 text-sm font-medium rounded-l-md ${timeRange === 'day' ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white' : darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-200'}`} onClick={() => setTimeRange('day')}>
            24 Hours
          </button>
          <button type="button" className={`px-4 py-2 text-sm font-medium ${timeRange === 'week' ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white' : darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-200'}`} onClick={() => setTimeRange('week')}>
            Week
          </button>
          <button type="button" className={`px-4 py-2 text-sm font-medium rounded-r-md ${timeRange === 'month' ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white' : darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-200'}`} onClick={() => setTimeRange('month')}>
            Month
          </button>
        </div>
        <button className={`inline-flex items-center px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-300`}>
          <RefreshCwIcon className="h-4 w-4 mr-2" />
          Refresh Data
        </button>
      </div>
      {/* AI System Health */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300 mb-6`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            System Health
          </h2>
          <div className="flex items-center">
            <ServerIcon className={`h-5 w-5 ${darkMode ? 'text-teal-400' : 'text-teal-600'} mr-2`} />
            <span className={`text-sm font-medium px-2 py-1 rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
              Operational
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`p-4 ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} rounded-lg transition-colors duration-300`}>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <CpuIcon className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-2`} />
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  CPU Usage
                </span>
              </div>
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                42%
              </span>
            </div>
            <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2.5`}>
              <div className={`${darkMode ? 'bg-blue-500' : 'bg-blue-600'} h-2.5 rounded-full`} style={{
              width: '42%'
            }}></div>
            </div>
          </div>
          <div className={`p-4 ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} rounded-lg transition-colors duration-300`}>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <ServerIcon className={`h-5 w-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'} mr-2`} />
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  Memory Usage
                </span>
              </div>
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                68%
              </span>
            </div>
            <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2.5`}>
              <div className={`${darkMode ? 'bg-purple-500' : 'bg-purple-600'} h-2.5 rounded-full`} style={{
              width: '68%'
            }}></div>
            </div>
          </div>
          <div className={`p-4 ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} rounded-lg transition-colors duration-300`}>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <DatabaseIcon className={`h-5 w-5 ${darkMode ? 'text-green-400' : 'text-green-600'} mr-2`} />
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  Database Load
                </span>
              </div>
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                37%
              </span>
            </div>
            <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2.5`}>
              <div className={`${darkMode ? 'bg-green-500' : 'bg-green-600'} h-2.5 rounded-full`} style={{
              width: '37%'
            }}></div>
            </div>
          </div>
        </div>
      </div>
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* AI Features Usage */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              AI Features Usage
            </h2>
            <div className="flex items-center">
              <BarChart2Icon className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-1`} />
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Last 7 days
              </span>
            </div>
          </div>
          <div className="h-64">
            <canvas ref={usageChartRef}></canvas>
          </div>
        </div>
        {/* AI Model Accuracy */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              AI Model Accuracy
            </h2>
            <div className="flex items-center">
              <LineChartIcon className={`h-5 w-5 ${darkMode ? 'text-green-400' : 'text-green-600'} mr-1`} />
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Current
              </span>
            </div>
          </div>
          <div className="h-64">
            <canvas ref={accuracyChartRef}></canvas>
          </div>
        </div>
      </div>
      {/* System Alerts */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300 mb-6`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            System Alerts
          </h2>
          <div className="flex items-center">
            <AlertTriangleIcon className={`h-5 w-5 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'} mr-1`} />
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {systemAlerts.length} active alerts
            </span>
          </div>
        </div>
        <div className="space-y-4">
          {systemAlerts.map(alert => <div key={alert.id} className={`p-4 ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} rounded-lg transition-colors duration-300`}>
              <div className="flex justify-between">
                <div className="flex items-start">
                  <AlertTriangleIcon className={`h-5 w-5 mt-0.5 mr-3 flex-shrink-0 ${alert.severity === 'alert' ? darkMode ? 'text-red-400' : 'text-red-600' : alert.severity === 'warning' ? darkMode ? 'text-yellow-400' : 'text-yellow-600' : darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div>
                    <div className="flex items-center">
                      <p className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                        {alert.title}
                      </p>
                    </div>
                    <div className="mt-1 flex items-center space-x-2">
                      {getSeverityBadge(alert.severity)}
                      {getStatusBadge(alert.status)}
                      <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {alert.timestamp}
                      </span>
                    </div>
                    {expandedAlert === alert.id && <div className="mt-3">
                        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {alert.message}
                        </p>
                        <p className={`mt-2 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          Affected service:{' '}
                          <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {alert.service}
                          </span>
                        </p>
                      </div>}
                  </div>
                </div>
                <button onClick={() => setExpandedAlert(expandedAlert === alert.id ? null : alert.id)} className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}>
                  {expandedAlert === alert.id ? <ChevronUpIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} /> : <ChevronDownIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />}
                </button>
              </div>
              {expandedAlert === alert.id && <div className="mt-4 flex justify-end space-x-2">
                  <button className={`px-3 py-1 text-xs font-medium rounded ${darkMode ? 'bg-gray-600 text-gray-200 hover:bg-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                    View Details
                  </button>
                  {alert.status !== 'resolved' && <button className={`px-3 py-1 text-xs font-medium rounded ${darkMode ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-600 text-white hover:bg-green-700'}`}>
                      Mark Resolved
                    </button>}
                </div>}
            </div>)}
        </div>
      </div>
      {/* Recent AI Interactions */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            Recent AI Interactions
          </h2>
          <button className={`text-sm ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
            View All Logs
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className={`min-w-full divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'} transition-colors duration-300`}>
            <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors duration-300`}>
              <tr>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                  Timestamp
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                  Service
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                  Request Type
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                  User
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
              {[{
              time: '2023-06-16 15:45:12',
              service: 'Weather Prediction',
              type: 'Forecast Request',
              user: 'Juan Dela Cruz',
              status: 'success'
            }, {
              time: '2023-06-16 15:42:35',
              service: 'Fish Price Analysis',
              type: 'Market Trend',
              user: 'Maria Santos',
              status: 'success'
            }, {
              time: '2023-06-16 15:40:18',
              service: 'Catch Estimation',
              type: 'Prediction',
              user: 'Pedro Reyes',
              status: 'warning'
            }, {
              time: '2023-06-16 15:38:22',
              service: 'Navigation',
              type: 'Route Optimization',
              user: 'Ana Lim',
              status: 'success'
            }, {
              time: '2023-06-16 15:35:41',
              service: 'Weather Prediction',
              type: 'Storm Alert',
              user: 'System',
              status: 'error'
            }].map((log, index) => <tr key={index} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'} transition-colors duration-300`}>
                    {log.time}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                    <div className="flex items-center">
                      <BrainIcon className={`h-4 w-4 mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      <span className={`text-sm ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                        {log.service}
                      </span>
                    </div>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'} transition-colors duration-300`}>
                    {log.type}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'} transition-colors duration-300`}>
                    {log.user}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                    {log.status === 'success' ? <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
                        Success
                      </span> : log.status === 'warning' ? <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800'}`}>
                        Warning
                      </span> : <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'}`}>
                        Error
                      </span>}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium transition-colors duration-300`}>
                    <button className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-900'} transition-colors duration-300`}>
                      <EyeIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};