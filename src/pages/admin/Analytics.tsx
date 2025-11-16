import React, { useState, Component } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'framer-motion';
import { UsersIcon, TrendingUpIcon, CalendarIcon, AlertTriangleIcon, ShieldCheckIcon, CloudLightningIcon, CompassIcon, MapPinIcon, Users2Icon, UserCheckIcon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
export function Analytics() {
  const [timeRange, setTimeRange] = useState('week');
  const {
    darkMode
  } = useTheme();
  // Stat Card Component matching Admin Dashboard style EXACTLY
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
  // Sample data for charts
  const userEngagementData = [{
    name: 'Mon',
    users: 120,
    newUsers: 20
  }, {
    name: 'Tue',
    users: 135,
    newUsers: 15
  }, {
    name: 'Wed',
    users: 142,
    newUsers: 22
  }, {
    name: 'Thu',
    users: 158,
    newUsers: 18
  }, {
    name: 'Fri',
    users: 165,
    newUsers: 25
  }, {
    name: 'Sat',
    users: 130,
    newUsers: 10
  }, {
    name: 'Sun',
    users: 110,
    newUsers: 8
  }];
  const featureUsageData = [{
    name: 'Insurance Hub',
    value: 35,
    color: darkMode ? '#4fb3ff' : '#3b82f6'
  }, {
    name: 'Weather Alerts',
    value: 25,
    color: darkMode ? '#34d399' : '#10b981'
  }, {
    name: 'Fish Hub',
    value: 15,
    color: darkMode ? '#818cf8' : '#6366f1'
  }, {
    name: 'GPS Tracking',
    value: 15,
    color: darkMode ? '#fbbf24' : '#f59e0b'
  }, {
    name: 'Community',
    value: 10,
    color: darkMode ? '#f472b6' : '#ec4899'
  }];
  const emergencyReportData = [{
    name: 'Week 1',
    reports: 5,
    resolved: 4
  }, {
    name: 'Week 2',
    reports: 7,
    resolved: 6
  }, {
    name: 'Week 3',
    reports: 3,
    resolved: 3
  }, {
    name: 'Week 4',
    reports: 8,
    resolved: 6
  }, {
    name: 'Week 5',
    reports: 4,
    resolved: 4
  }, {
    name: 'Week 6',
    reports: 6,
    resolved: 5
  }];
  const weatherAlertData = [{
    name: 'Storm',
    value: 45
  }, {
    name: 'High Waves',
    value: 30
  }, {
    name: 'Heavy Rain',
    value: 15
  }, {
    name: 'Fog',
    value: 10
  }];
  const COLORS = darkMode ? ['#4fb3ff', '#34d399', '#818cf8', '#fbbf24'] : ['#3b82f6', '#10b981', '#6366f1', '#f59e0b'];
  return <div className="max-w-7xl mx-auto">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }} className="mb-6">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          Analytics Dashboard
        </h2>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
          Comprehensive insights into AquaSure's ecosystem and user engagement
        </p>
      </motion.div>
      <div className="mb-6 flex flex-wrap gap-4">
        <button onClick={() => setTimeRange('day')} className={`px-4 py-2 rounded-full text-sm font-medium ${timeRange === 'day' ? darkMode ? 'bg-teal-900 text-teal-300' : 'bg-teal-100 text-teal-800' : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
          Today
        </button>
        <button onClick={() => setTimeRange('week')} className={`px-4 py-2 rounded-full text-sm font-medium ${timeRange === 'week' ? darkMode ? 'bg-teal-900 text-teal-300' : 'bg-teal-100 text-teal-800' : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
          This Week
        </button>
        <button onClick={() => setTimeRange('month')} className={`px-4 py-2 rounded-full text-sm font-medium ${timeRange === 'month' ? darkMode ? 'bg-teal-900 text-teal-300' : 'bg-teal-100 text-teal-800' : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
          This Month
        </button>
        <button onClick={() => setTimeRange('year')} className={`px-4 py-2 rounded-full text-sm font-medium ${timeRange === 'year' ? darkMode ? 'bg-teal-900 text-teal-300' : 'bg-teal-100 text-teal-800' : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
          This Year
        </button>
      </div>
      {/* Metric Cards - 2×2 Mobile, 1×4 Desktop - EXACTLY matching Admin Dashboard */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
        <StatCard icon={Users2Icon} title="Total Users" value="843" change="+12 this week" color="bg-gradient-to-r from-blue-500 to-blue-600" />
        <StatCard icon={UserCheckIcon} title="Active Users" value="692" change="82% of total" color="bg-gradient-to-r from-teal-500 to-teal-600" />
        <StatCard icon={AlertTriangleIcon} title="Emergency Reports" value="8" change="6 resolved" color="bg-gradient-to-r from-amber-500 to-amber-600" />
        <StatCard icon={CloudLightningIcon} title="Weather Alerts" value="3" change="Active now" color="bg-gradient-to-r from-indigo-500 to-indigo-600" />
      </div>
      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors duration-300`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              User Engagement
            </h3>
            <div className={`${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'} p-2 rounded-lg`}>
              <UsersIcon className="h-5 w-5" />
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={userEngagementData} margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? 'rgba(255, 255, 255, 0.1)' : '#f0f0f0'} />
                <XAxis dataKey="name" stroke={darkMode ? '#a3a3a3' : '#666666'} tick={{
                fill: darkMode ? '#d1d5db' : '#374151'
              }} />
                <YAxis stroke={darkMode ? '#a3a3a3' : '#666666'} tick={{
                fill: darkMode ? '#d1d5db' : '#374151'
              }} />
                <Tooltip contentStyle={{
                backgroundColor: darkMode ? '#1f2937' : '#fff',
                borderRadius: '0.5rem',
                border: darkMode ? '1px solid #374151' : '1px solid #e5e7eb',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                color: darkMode ? '#f9fafb' : '#111827'
              }} />
                <Legend />
                <Line type="monotone" dataKey="users" name="Active Users" stroke={darkMode ? '#60a5fa' : '#3b82f6'} strokeWidth={3} dot={{
                r: 4,
                fill: darkMode ? '#60a5fa' : '#3b82f6'
              }} activeDot={{
                r: 6,
                stroke: darkMode ? '#3b82f6' : '#2563eb',
                strokeWidth: 2
              }} />
                <Line type="monotone" dataKey="newUsers" name="New Users" stroke={darkMode ? '#34d399' : '#10b981'} strokeWidth={3} dot={{
                r: 4,
                fill: darkMode ? '#34d399' : '#10b981'
              }} activeDot={{
                r: 6,
                stroke: darkMode ? '#10b981' : '#059669',
                strokeWidth: 2
              }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.3
      }} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors duration-300`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Feature Usage
            </h3>
            <div className={`${darkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-100 text-teal-600'} p-2 rounded-lg`}>
              <CompassIcon className="h-5 w-5" />
            </div>
          </div>
          <div className="h-80 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={featureUsageData} cx="50%" cy="50%" innerRadius={80} outerRadius={120} fill="#8884d8" paddingAngle={5} dataKey="value" label={({
                name,
                percent
              }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                  {featureUsageData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip formatter={(value, name) => [`${value}%`, name]} contentStyle={{
                backgroundColor: darkMode ? '#1f2937' : '#fff',
                borderRadius: '0.5rem',
                border: darkMode ? '1px solid #374151' : '1px solid #e5e7eb',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                color: darkMode ? '#f9fafb' : '#111827'
              }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors duration-300`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Emergency Reports
            </h3>
            <div className={`${darkMode ? 'bg-amber-900/30 text-amber-400' : 'bg-amber-100 text-amber-600'} p-2 rounded-lg`}>
              <AlertTriangleIcon className="h-5 w-5" />
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={emergencyReportData} margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? 'rgba(255, 255, 255, 0.1)' : '#f0f0f0'} />
                <XAxis dataKey="name" stroke={darkMode ? '#a3a3a3' : '#666666'} tick={{
                fill: darkMode ? '#d1d5db' : '#374151'
              }} />
                <YAxis stroke={darkMode ? '#a3a3a3' : '#666666'} tick={{
                fill: darkMode ? '#d1d5db' : '#374151'
              }} />
                <Tooltip contentStyle={{
                backgroundColor: darkMode ? '#1f2937' : '#fff',
                borderRadius: '0.5rem',
                border: darkMode ? '1px solid #374151' : '1px solid #e5e7eb',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                color: darkMode ? '#f9fafb' : '#111827'
              }} />
                <Legend />
                <Bar dataKey="reports" name="Total Reports" fill={darkMode ? '#fbbf24' : '#f59e0b'} radius={[4, 4, 0, 0]} />
                <Bar dataKey="resolved" name="Resolved" fill={darkMode ? '#34d399' : '#10b981'} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.5
      }} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm transition-colors duration-300`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Weather Alert Types
            </h3>
            <div className={`${darkMode ? 'bg-indigo-900/30 text-indigo-400' : 'bg-indigo-100 text-indigo-600'} p-2 rounded-lg`}>
              <CloudLightningIcon className="h-5 w-5" />
            </div>
          </div>
          <div className="h-80 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={weatherAlertData} cx="50%" cy="50%" outerRadius={120} fill="#8884d8" dataKey="value" label={({
                name,
                percent
              }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                  {weatherAlertData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip formatter={(value, name) => [`${value}%`, name]} contentStyle={{
                backgroundColor: darkMode ? '#1f2937' : '#fff',
                borderRadius: '0.5rem',
                border: darkMode ? '1px solid #374151' : '1px solid #e5e7eb',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                color: darkMode ? '#f9fafb' : '#111827'
              }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
      {/* Insurance Section */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 0.6
    }} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-6 rounded-xl border shadow-sm mb-8 transition-colors duration-300`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            Insurance Status Overview
          </h3>
          <div className={`${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'} p-2 rounded-lg`}>
            <ShieldCheckIcon className="h-5 w-5" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {[{
          label: 'Total Insured',
          value: '685',
          percent: '81%',
          color: darkMode ? 'bg-blue-600/70' : 'bg-blue-600'
        }, {
          label: 'Active Coverage',
          value: '592',
          percent: '70%',
          color: darkMode ? 'bg-green-500/70' : 'bg-green-500'
        }, {
          label: 'At Risk',
          value: '93',
          percent: '11%',
          color: darkMode ? 'bg-yellow-500/70' : 'bg-yellow-500'
        }, {
          label: 'Uninsured',
          value: '158',
          percent: '19%',
          color: darkMode ? 'bg-red-500/70' : 'bg-red-500'
        }].map((stat, index) => <div key={index} className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} p-4 rounded-lg transition-colors duration-300`}>
              <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                {stat.label}
              </h3>
              <div className="mt-1">
                <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {stat.value}
                </p>
                <div className="mt-2">
                  <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2.5 transition-colors duration-300`}>
                    <motion.div initial={{
                  width: 0
                }} animate={{
                  width: stat.percent
                }} transition={{
                  duration: 1,
                  delay: 0.8
                }} className={`${stat.color} h-2.5 rounded-full`}></motion.div>
                  </div>
                  <p className={`mt-1 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {stat.percent} of registered fishermen
                  </p>
                </div>
              </div>
            </div>)}
        </div>
        <div className={`h-64 ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} rounded-lg p-4 flex items-center justify-center transition-colors duration-300`}>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-center`}>
            Insurance status trends chart would be displayed here, showing
            changes over time in coverage levels and participation rates.
          </p>
        </div>
      </motion.div>
    </div>;
}