import React, { useEffect, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, AreaChart, Area } from 'recharts';
import { UsersIcon, TrendingUpIcon, BarChartIcon, GlobeIcon, ShieldIcon, ActivityIcon, ServerIcon, ClockIcon, BrainIcon, LockIcon, AlertTriangleIcon, EyeIcon, CalendarIcon, BuildingIcon, UserCheckIcon, UserIcon } from 'lucide-react';
export const AnalyticsInsights: React.FC = () => {
  const [timeRange, setTimeRange] = useState('week');
  const {
    darkMode
  } = useTheme();
  // User Overview Data
  const userStats = [{
    title: 'Total Users',
    value: '12,458',
    change: '+156',
    changeType: 'positive',
    icon: <UsersIcon className="h-6 w-6" />,
    color: 'bg-blue-600',
    description: 'Registered users across all roles'
  }, {
    title: 'Active Today',
    value: '843',
    change: '+12%',
    changeType: 'positive',
    icon: <UserCheckIcon className="h-6 w-6" />,
    color: 'bg-teal-600',
    description: 'Users who logged in today'
  }, {
    title: 'Active This Week',
    value: '3,642',
    change: '+8%',
    changeType: 'positive',
    icon: <CalendarIcon className="h-6 w-6" />,
    color: 'bg-indigo-600',
    description: 'Weekly active users'
  }, {
    title: 'User Growth Rate',
    value: '16.2%',
    change: '+2.4%',
    changeType: 'positive',
    icon: <TrendingUpIcon className="h-6 w-6" />,
    color: 'bg-purple-600',
    description: 'Monthly growth rate'
  }];
  // User type distribution
  const userTypeData = [{
    name: 'Fishers',
    value: 11245
  }, {
    name: 'LGU Admins',
    value: 1124
  }, {
    name: 'Super Admins',
    value: 89
  }];
  // System Usage Data
  const systemUsageData = [{
    date: 'Mon',
    logins: 845,
    activities: 2156
  }, {
    date: 'Tue',
    logins: 932,
    activities: 2568
  }, {
    date: 'Wed',
    logins: 1054,
    activities: 3042
  }, {
    date: 'Thu',
    logins: 1208,
    activities: 3512
  }, {
    date: 'Fri',
    logins: 1380,
    activities: 3845
  }, {
    date: 'Sat',
    logins: 984,
    activities: 2845
  }, {
    date: 'Sun',
    logins: 756,
    activities: 1945
  }];
  // Regional Distribution Data
  const regionalData = [{
    region: 'Luzon',
    users: 6245,
    activePercent: 78
  }, {
    region: 'Visayas',
    users: 4128,
    activePercent: 72
  }, {
    region: 'Mindanao',
    users: 2085,
    activePercent: 81
  }];
  // Security Insights Data
  const securityData = [{
    date: 'Mon',
    suspicious: 12,
    breaches: 0
  }, {
    date: 'Tue',
    suspicious: 8,
    breaches: 0
  }, {
    date: 'Wed',
    suspicious: 15,
    breaches: 1
  }, {
    date: 'Thu',
    suspicious: 7,
    breaches: 0
  }, {
    date: 'Fri',
    suspicious: 9,
    breaches: 0
  }, {
    date: 'Sat',
    suspicious: 5,
    breaches: 0
  }, {
    date: 'Sun',
    suspicious: 3,
    breaches: 0
  }];
  // System Performance Data
  const performanceData = [{
    time: '00:00',
    responseTime: 145,
    uptime: 100
  }, {
    time: '04:00',
    responseTime: 128,
    uptime: 100
  }, {
    time: '08:00',
    responseTime: 185,
    uptime: 100
  }, {
    time: '12:00',
    responseTime: 245,
    uptime: 99.8
  }, {
    time: '16:00',
    responseTime: 205,
    uptime: 100
  }, {
    time: '20:00',
    responseTime: 165,
    uptime: 100
  }];
  // AI Predictive Insights
  const predictiveData = [{
    month: 'Jan',
    actual: 8456,
    predicted: 8456
  }, {
    month: 'Feb',
    actual: 9125,
    predicted: 9125
  }, {
    month: 'Mar',
    actual: 9845,
    predicted: 9845
  }, {
    month: 'Apr',
    actual: 10254,
    predicted: 10254
  }, {
    month: 'May',
    actual: 10896,
    predicted: 10896
  }, {
    month: 'Jun',
    actual: 11458,
    predicted: 11458
  }, {
    month: 'Jul',
    actual: 12458,
    predicted: 12458
  }, {
    month: 'Aug',
    actual: null,
    predicted: 13245
  }, {
    month: 'Sep',
    actual: null,
    predicted: 14102
  }, {
    month: 'Oct',
    actual: null,
    predicted: 15024
  }, {
    month: 'Nov',
    actual: null,
    predicted: 15984
  }, {
    month: 'Dec',
    actual: null,
    predicted: 16854
  }];
  // Colors for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  return <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          Analytics & Insights Dashboard
        </h1>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
          Comprehensive system overview and performance metrics
        </p>
      </div>
      {/* Time Range Filter */}
      <div className="flex flex-wrap gap-4">
        <button onClick={() => setTimeRange('day')} className={`px-4 py-2 rounded-full text-sm font-medium ${timeRange === 'day' ? darkMode ? 'bg-teal-900 text-teal-200' : 'bg-teal-100 text-teal-800' : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-colors duration-300`}>
          Today
        </button>
        <button onClick={() => setTimeRange('week')} className={`px-4 py-2 rounded-full text-sm font-medium ${timeRange === 'week' ? darkMode ? 'bg-teal-900 text-teal-200' : 'bg-teal-100 text-teal-800' : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-colors duration-300`}>
          This Week
        </button>
        <button onClick={() => setTimeRange('month')} className={`px-4 py-2 rounded-full text-sm font-medium ${timeRange === 'month' ? darkMode ? 'bg-teal-900 text-teal-200' : 'bg-teal-100 text-teal-800' : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-colors duration-300`}>
          This Month
        </button>
        <button onClick={() => setTimeRange('quarter')} className={`px-4 py-2 rounded-full text-sm font-medium ${timeRange === 'quarter' ? darkMode ? 'bg-teal-900 text-teal-200' : 'bg-teal-100 text-teal-800' : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-colors duration-300`}>
          Last Quarter
        </button>
      </div>
      {/* 1. User Overview Section */}
      <section>
        <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
          User Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {userStats.map((stat, index) => <div key={index} className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
              <div className="flex items-center">
                <div className={`flex-shrink-0 rounded-md p-3 ${stat.color} text-white`}>
                  {stat.icon}
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dt className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'} truncate`}>
                    {stat.title}
                  </dt>
                  <dd className="flex items-baseline">
                    <div className={`text-2xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      {stat.value}
                    </div>
                    <div className={`ml-2 flex items-baseline text-sm font-semibold ${stat.changeType === 'positive' ? darkMode ? 'text-green-400' : 'text-green-600' : darkMode ? 'text-red-400' : 'text-red-600'}`}>
                      {stat.change}
                    </div>
                  </dd>
                  <p className={`mt-1 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Type Distribution */}
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border col-span-1 transition-colors duration-300`}>
            <h3 className={`text-base font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4 flex items-center`}>
              <UserIcon className={`h-5 w-5 mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
              User Type Distribution
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={userTypeData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value" label={({
                  name,
                  percent
                }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                    {userTypeData.map((entry, index) => <Cell key={`cell-${index}`} fill={darkMode ? COLORS[index % COLORS.length] + '99' : COLORS[index % COLORS.length]} />)}
                  </Pie>
                  <Tooltip formatter={value => [value, 'Users']} contentStyle={{
                  backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                  borderColor: darkMode ? '#374151' : '#e5e7eb',
                  color: darkMode ? '#e5e7eb' : '#111827'
                }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* User Growth Over Time */}
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border col-span-2 transition-colors duration-300`}>
            <h3 className={`text-base font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4 flex items-center`}>
              <TrendingUpIcon className={`h-5 w-5 mr-2 ${darkMode ? 'text-teal-400' : 'text-teal-500'}`} />
              User Growth Over Time
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={predictiveData.filter(item => item.actual !== null)} margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
              }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                  <XAxis dataKey="month" stroke={darkMode ? '#9ca3af' : '#6b7280'} tick={{
                  fill: darkMode ? '#d1d5db' : '#4b5563'
                }} />
                  <YAxis stroke={darkMode ? '#9ca3af' : '#6b7280'} tick={{
                  fill: darkMode ? '#d1d5db' : '#4b5563'
                }} />
                  <Tooltip contentStyle={{
                  backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                  borderColor: darkMode ? '#374151' : '#e5e7eb',
                  color: darkMode ? '#e5e7eb' : '#111827'
                }} />
                  <Area type="monotone" dataKey="actual" stroke={darkMode ? '#14b8a6' : '#0d9488'} fill={darkMode ? 'rgba(20, 184, 166, 0.2)' : 'rgba(13, 148, 136, 0.2)'} name="Total Users" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
      {/* 2. System Usage Analytics Section */}
      <section>
        <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
          System Usage Analytics
        </h2>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-base font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} flex items-center`}>
              <BarChartIcon className={`h-5 w-5 mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
              System Activity Metrics
            </h3>
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {timeRange === 'day' ? 'Today' : timeRange === 'week' ? 'This Week' : 'This Month'}
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={systemUsageData} margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                <XAxis dataKey="date" stroke={darkMode ? '#9ca3af' : '#6b7280'} tick={{
                fill: darkMode ? '#d1d5db' : '#4b5563'
              }} />
                <YAxis stroke={darkMode ? '#9ca3af' : '#6b7280'} tick={{
                fill: darkMode ? '#d1d5db' : '#4b5563'
              }} />
                <Tooltip contentStyle={{
                backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                borderColor: darkMode ? '#374151' : '#e5e7eb',
                color: darkMode ? '#e5e7eb' : '#111827'
              }} />
                <Legend />
                <Bar dataKey="logins" name="Logins" fill={darkMode ? '#60a5fa' : '#3b82f6'} />
                <Bar dataKey="activities" name="Total Activities" fill={darkMode ? '#34d399' : '#10b981'} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={`p-4 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'} rounded-lg transition-colors duration-300`}>
              <div className="flex items-center justify-between">
                <div className={`${darkMode ? 'text-blue-300' : 'text-blue-700'} text-sm font-medium`}>
                  Average Daily Logins
                </div>
                <div className={`${darkMode ? 'text-blue-200' : 'text-blue-800'} text-lg font-semibold`}>
                  1,023
                </div>
              </div>
              <div className={`mt-1 text-xs ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                +12% from last week
              </div>
            </div>
            <div className={`p-4 ${darkMode ? 'bg-teal-900/20' : 'bg-teal-50'} rounded-lg transition-colors duration-300`}>
              <div className="flex items-center justify-between">
                <div className={`${darkMode ? 'text-teal-300' : 'text-teal-700'} text-sm font-medium`}>
                  Peak Activity Time
                </div>
                <div className={`${darkMode ? 'text-teal-200' : 'text-teal-800'} text-lg font-semibold`}>
                  2:00 PM
                </div>
              </div>
              <div className={`mt-1 text-xs ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                Friday is busiest day
              </div>
            </div>
            <div className={`p-4 ${darkMode ? 'bg-indigo-900/20' : 'bg-indigo-50'} rounded-lg transition-colors duration-300`}>
              <div className="flex items-center justify-between">
                <div className={`${darkMode ? 'text-indigo-300' : 'text-indigo-700'} text-sm font-medium`}>
                  Most Used Feature
                </div>
                <div className={`${darkMode ? 'text-indigo-200' : 'text-indigo-800'} text-lg font-semibold`}>
                  GPS Tracking
                </div>
              </div>
              <div className={`mt-1 text-xs ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                42% of all activities
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3. Regional Distribution Section */}
      <section>
        <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
          Regional Distribution
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
            <h3 className={`text-base font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4 flex items-center`}>
              <GlobeIcon className={`h-5 w-5 mr-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-500'}`} />
              User Distribution by Region
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={regionalData} margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke={darkMode ? '#374151' : '#e5e7eb'} />
                  <XAxis type="number" stroke={darkMode ? '#9ca3af' : '#6b7280'} tick={{
                  fill: darkMode ? '#d1d5db' : '#4b5563'
                }} />
                  <YAxis dataKey="region" type="category" stroke={darkMode ? '#9ca3af' : '#6b7280'} tick={{
                  fill: darkMode ? '#d1d5db' : '#4b5563'
                }} />
                  <Tooltip contentStyle={{
                  backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                  borderColor: darkMode ? '#374151' : '#e5e7eb',
                  color: darkMode ? '#e5e7eb' : '#111827'
                }} />
                  <Bar dataKey="users" name="Total Users" fill={darkMode ? '#818cf8' : '#6366f1'} radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
            <h3 className={`text-base font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4 flex items-center`}>
              <BuildingIcon className={`h-5 w-5 mr-2 ${darkMode ? 'text-purple-400' : 'text-purple-500'}`} />
              Regional Activity Rates
            </h3>
            <div className="space-y-6">
              {regionalData.map((region, i) => <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {region.region}
                    </div>
                    <div className={`text-sm font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      {region.activePercent}% Active
                    </div>
                  </div>
                  <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5`}>
                    <div className={`h-2.5 rounded-full ${darkMode ? 'bg-purple-600' : 'bg-purple-600'}`} style={{
                  width: `${region.activePercent}%`
                }}></div>
                  </div>
                  <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {region.users.toLocaleString()} total registered users
                  </div>
                </div>)}
            </div>
            <div className={`mt-6 p-4 ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'} rounded-lg transition-colors duration-300`}>
              <div className="flex items-center">
                <div className={`p-2 ${darkMode ? 'bg-purple-800' : 'bg-purple-100'} rounded-md`}>
                  <TrendingUpIcon className={`h-5 w-5 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`} />
                </div>
                <div className="ml-3">
                  <div className={`text-sm font-medium ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                    Mindanao shows highest activity rate
                  </div>
                  <div className={`text-xs ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                    81% of users active in the last 30 days
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 4. Data Privacy & Security Insights Section */}
      <section>
        <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
          Data Privacy & Security Insights
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border lg:col-span-2 transition-colors duration-300`}>
            <h3 className={`text-base font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4 flex items-center`}>
              <ShieldIcon className={`h-5 w-5 mr-2 ${darkMode ? 'text-red-400' : 'text-red-500'}`} />
              Security Events
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={securityData} margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                  <XAxis dataKey="date" stroke={darkMode ? '#9ca3af' : '#6b7280'} tick={{
                  fill: darkMode ? '#d1d5db' : '#4b5563'
                }} />
                  <YAxis stroke={darkMode ? '#9ca3af' : '#6b7280'} tick={{
                  fill: darkMode ? '#d1d5db' : '#4b5563'
                }} />
                  <Tooltip contentStyle={{
                  backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                  borderColor: darkMode ? '#374151' : '#e5e7eb',
                  color: darkMode ? '#e5e7eb' : '#111827'
                }} />
                  <Legend />
                  <Line type="monotone" dataKey="suspicious" name="Suspicious Activities" stroke={darkMode ? '#fbbf24' : '#f59e0b'} strokeWidth={2} dot={{
                  r: 4
                }} />
                  <Line type="monotone" dataKey="breaches" name="Security Breaches" stroke={darkMode ? '#f87171' : '#ef4444'} strokeWidth={2} dot={{
                  r: 4
                }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
            <h3 className={`text-base font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4 flex items-center`}>
              <LockIcon className={`h-5 w-5 mr-2 ${darkMode ? 'text-amber-400' : 'text-amber-500'}`} />
              Security Summary
            </h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className={`p-2 ${darkMode ? 'bg-amber-900/30' : 'bg-amber-100'} rounded-md`}>
                  <EyeIcon className={`h-5 w-5 ${darkMode ? 'text-amber-300' : 'text-amber-700'}`} />
                </div>
                <div className="ml-3">
                  <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    Data Access Logs
                  </div>
                  <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    5,842 authorized accesses this week
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className={`p-2 ${darkMode ? 'bg-red-900/30' : 'bg-red-100'} rounded-md`}>
                  <AlertTriangleIcon className={`h-5 w-5 ${darkMode ? 'text-red-300' : 'text-red-700'}`} />
                </div>
                <div className="ml-3">
                  <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    Suspicious Login Attempts
                  </div>
                  <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    59 blocked attempts this week
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className={`p-2 ${darkMode ? 'bg-green-900/30' : 'bg-green-100'} rounded-md`}>
                  <ShieldIcon className={`h-5 w-5 ${darkMode ? 'text-green-300' : 'text-green-700'}`} />
                </div>
                <div className="ml-3">
                  <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    Security Status
                  </div>
                  <div className={`text-xs ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                    All systems secure
                  </div>
                </div>
              </div>
            </div>
            <div className={`mt-6 p-4 ${darkMode ? 'bg-amber-900/10' : 'bg-amber-50'} rounded-lg transition-colors duration-300`}>
              <div className={`text-sm font-medium ${darkMode ? 'text-amber-300' : 'text-amber-800'}`}>
                Security Recommendations
              </div>
              <ul className={`mt-2 text-xs ${darkMode ? 'text-amber-400' : 'text-amber-700'} space-y-1 list-disc pl-4`}>
                <li>Enable 2FA for all admin accounts</li>
                <li>Review unusual login patterns from Luzon</li>
                <li>Update security policies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* 5. System Performance Metrics Section */}
      <section>
        <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
          System Performance Metrics
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border lg:col-span-2 transition-colors duration-300`}>
            <h3 className={`text-base font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4 flex items-center`}>
              <ActivityIcon className={`h-5 w-5 mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
              API Response Time
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData} margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                  <XAxis dataKey="time" stroke={darkMode ? '#9ca3af' : '#6b7280'} tick={{
                  fill: darkMode ? '#d1d5db' : '#4b5563'
                }} />
                  <YAxis stroke={darkMode ? '#9ca3af' : '#6b7280'} tick={{
                  fill: darkMode ? '#d1d5db' : '#4b5563'
                }} />
                  <Tooltip contentStyle={{
                  backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                  borderColor: darkMode ? '#374151' : '#e5e7eb',
                  color: darkMode ? '#e5e7eb' : '#111827'
                }} formatter={(value, name) => [name === 'responseTime' ? `${value} ms` : `${value}%`, name === 'responseTime' ? 'Response Time' : 'Uptime']} />
                  <Legend />
                  <Line type="monotone" dataKey="responseTime" name="Response Time (ms)" stroke={darkMode ? '#60a5fa' : '#3b82f6'} strokeWidth={2} dot={{
                  r: 4
                }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
            <h3 className={`text-base font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4 flex items-center`}>
              <ServerIcon className={`h-5 w-5 mr-2 ${darkMode ? 'text-green-400' : 'text-green-500'}`} />
              System Health
            </h3>
            {/* Performance Health Gauge */}
            <div className="flex justify-center mb-6">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke={darkMode ? '#374151' : '#e5e7eb'} strokeWidth="10" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke={darkMode ? '#34d399' : '#10b981'} strokeWidth="10" strokeDasharray="282.6" strokeDashoffset="28.26" strokeLinecap="round" transform="rotate(-90 50 50)" />
                  <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="18" fontWeight="bold" fill={darkMode ? '#d1d5db' : '#111827'}>
                    99.8%
                  </text>
                  <text x="50" y="65" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill={darkMode ? '#9ca3af' : '#6b7280'}>
                    Uptime
                  </text>
                </svg>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    CPU Usage
                  </span>
                  <span className={`${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    38%
                  </span>
                </div>
                <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                  <div className={`${darkMode ? 'bg-blue-600' : 'bg-blue-600'} h-2 rounded-full`} style={{
                  width: '38%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Memory Usage
                  </span>
                  <span className={`${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    45%
                  </span>
                </div>
                <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                  <div className={`${darkMode ? 'bg-purple-600' : 'bg-purple-600'} h-2 rounded-full`} style={{
                  width: '45%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Disk Usage
                  </span>
                  <span className={`${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    62%
                  </span>
                </div>
                <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                  <div className={`${darkMode ? 'bg-amber-500' : 'bg-amber-500'} h-2 rounded-full`} style={{
                  width: '62%'
                }}></div>
                </div>
              </div>
            </div>
            <div className={`mt-6 text-sm text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Last system maintenance:{' '}
              <span className={`font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                July 12, 2023
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* 6. AI Predictive Insights Section */}
      <section>
        <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
          AI Predictive Insights
        </h2>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <h3 className={`text-base font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4 flex items-center`}>
            <BrainIcon className={`h-5 w-5 mr-2 ${darkMode ? 'text-purple-400' : 'text-purple-500'}`} />
            User Growth Prediction
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={predictiveData} margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#e5e7eb'} />
                <XAxis dataKey="month" stroke={darkMode ? '#9ca3af' : '#6b7280'} tick={{
                fill: darkMode ? '#d1d5db' : '#4b5563'
              }} />
                <YAxis stroke={darkMode ? '#9ca3af' : '#6b7280'} tick={{
                fill: darkMode ? '#d1d5db' : '#4b5563'
              }} />
                <Tooltip contentStyle={{
                backgroundColor: darkMode ? '#1f2937' : '#ffffff',
                borderColor: darkMode ? '#374151' : '#e5e7eb',
                color: darkMode ? '#e5e7eb' : '#111827'
              }} />
                <Legend />
                <Line type="monotone" dataKey="actual" name="Actual Users" stroke={darkMode ? '#a78bfa' : '#8884d8'} strokeWidth={2} dot={{
                r: 4
              }} />
                <Line type="monotone" dataKey="predicted" name="Predicted Users" stroke={darkMode ? '#6ee7b7' : '#82ca9d'} strokeWidth={2} strokeDasharray="5 5" dot={{
                r: 4
              }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-4 ${darkMode ? 'bg-purple-900/20' : 'bg-purple-50'} rounded-lg transition-colors duration-300`}>
              <div className="flex items-start">
                <div className={`p-2 ${darkMode ? 'bg-purple-800' : 'bg-purple-100'} rounded-md`}>
                  <TrendingUpIcon className={`h-5 w-5 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`} />
                </div>
                <div className="ml-3">
                  <div className={`text-sm font-medium ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                    Growth Prediction
                  </div>
                  <div className={`mt-1 text-sm ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                    User base is expected to grow by{' '}
                    <span className="font-semibold">35.3%</span> in the next 6
                    months, reaching approximately{' '}
                    <span className="font-semibold">16,854</span> users by
                    December.
                  </div>
                </div>
              </div>
            </div>
            <div className={`p-4 ${darkMode ? 'bg-indigo-900/20' : 'bg-indigo-50'} rounded-lg transition-colors duration-300`}>
              <div className="flex items-start">
                <div className={`p-2 ${darkMode ? 'bg-indigo-800' : 'bg-indigo-100'} rounded-md`}>
                  <ClockIcon className={`h-5 w-5 ${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`} />
                </div>
                <div className="ml-3">
                  <div className={`text-sm font-medium ${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>
                    Peak Usage Prediction
                  </div>
                  <div className={`mt-1 text-sm ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                    System load is predicted to peak in{' '}
                    <span className="font-semibold">October</span> during
                    harvest season, with an estimated{' '}
                    <span className="font-semibold">42%</span> increase in daily
                    active users.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};