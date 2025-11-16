import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from 'recharts';
import { TrendingUpIcon, BarChart3Icon, PieChartIcon, CloudLightningIcon } from 'lucide-react';
const monthlyFishingData = [{
  name: 'Jan',
  amount: 35
}, {
  name: 'Feb',
  amount: 42
}, {
  name: 'Mar',
  amount: 48
}, {
  name: 'Apr',
  amount: 52
}, {
  name: 'May',
  amount: 58
}, {
  name: 'Jun',
  amount: 62
}, {
  name: 'Jul',
  amount: 68
}, {
  name: 'Aug',
  amount: 72
}, {
  name: 'Sep',
  amount: 65
}, {
  name: 'Oct',
  amount: 58
}, {
  name: 'Nov',
  amount: 52
}, {
  name: 'Dec',
  amount: 45
}];
const insuranceClaimData = [{
  name: 'Jan',
  claims: 2
}, {
  name: 'Feb',
  claims: 1
}, {
  name: 'Mar',
  claims: 0
}, {
  name: 'Apr',
  claims: 3
}, {
  name: 'May',
  claims: 2
}, {
  name: 'Jun',
  claims: 1
}, {
  name: 'Jul',
  claims: 0
}, {
  name: 'Aug',
  claims: 1
}, {
  name: 'Sep',
  claims: 4
}, {
  name: 'Oct',
  claims: 2
}, {
  name: 'Nov',
  claims: 1
}, {
  name: 'Dec',
  claims: 2
}];
const catchVolumeData = [{
  name: 'Tuna',
  value: 45
}, {
  name: 'Mackerel',
  value: 28
}, {
  name: 'Tilapia',
  value: 15
}, {
  name: 'Others',
  value: 12
}];
const COLORS = ['#00E6E6', '#0099A8', '#66FFF9', '#012840'];
const weatherRiskData = [{
  date: '1',
  risk: 20
}, {
  date: '5',
  risk: 35
}, {
  date: '10',
  risk: 25
}, {
  date: '15',
  risk: 45
}, {
  date: '20',
  risk: 30
}, {
  date: '25',
  risk: 65
}, {
  date: '30',
  risk: 40
}];
export const DashboardAnalytics: React.FC = () => {
  const {
    darkMode
  } = useTheme();
  const textColor = darkMode ? '#F4FAFB' : '#012840';
  const gridColor = darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  const tooltipStyle = {
    backgroundColor: darkMode ? '#001824' : '#FFFFFF',
    border: `1px solid ${darkMode ? '#0099A8' : '#E6ECEF'}`,
    borderRadius: '8px',
    color: textColor
  };
  return <div className="mb-6">
      <h3 className="text-lg font-semibold mb-4">Fishing Analytics</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Fishing Trends */}
        <div className={`dashboard-card p-5 ${darkMode ? 'glassmorphism' : ''}`}>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium flex items-center">
              <TrendingUpIcon className="h-5 w-5 mr-2 text-ocean-teal" />
              Monthly Fishing Trends
            </h4>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Last 12 months
            </span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyFishingData} margin={{
              top: 5,
              right: 10,
              left: 0,
              bottom: 20
            }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                <XAxis dataKey="name" tick={{
                fill: textColor,
                fontSize: 12
              }} axisLine={{
                stroke: gridColor
              }} tickLine={{
                stroke: gridColor
              }} />
                <YAxis tick={{
                fill: textColor,
                fontSize: 12
              }} axisLine={{
                stroke: gridColor
              }} tickLine={{
                stroke: gridColor
              }} />
                <Tooltip contentStyle={tooltipStyle} cursor={{
                fill: darkMode ? 'rgba(0, 230, 230, 0.1)' : 'rgba(0, 153, 168, 0.1)'
              }} />
                <Bar dataKey="amount" name="Catch (kg)" fill="#00E6E6" radius={[4, 4, 0, 0]} background={{
                fill: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)'
              }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Insurance Claim Frequency */}
        <div className={`dashboard-card p-5 ${darkMode ? 'glassmorphism' : ''}`}>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium flex items-center">
              <BarChart3Icon className="h-5 w-5 mr-2 text-ocean-teal" />
              Insurance Claim Frequency
            </h4>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Monthly reports
            </span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={insuranceClaimData} margin={{
              top: 5,
              right: 10,
              left: 0,
              bottom: 20
            }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                <XAxis dataKey="name" tick={{
                fill: textColor,
                fontSize: 12
              }} axisLine={{
                stroke: gridColor
              }} tickLine={{
                stroke: gridColor
              }} />
                <YAxis tick={{
                fill: textColor,
                fontSize: 12
              }} axisLine={{
                stroke: gridColor
              }} tickLine={{
                stroke: gridColor
              }} />
                <Tooltip contentStyle={tooltipStyle} />
                <Line type="monotone" dataKey="claims" name="Claims" stroke="#0099A8" strokeWidth={3} dot={{
                fill: '#0099A8',
                strokeWidth: 2,
                r: 4
              }} activeDot={{
                fill: '#00E6E6',
                strokeWidth: 0,
                r: 6
              }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Average Catch Volume */}
        <div className={`dashboard-card p-5 ${darkMode ? 'glassmorphism' : ''}`}>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium flex items-center">
              <PieChartIcon className="h-5 w-5 mr-2 text-ocean-teal" />
              Average Catch Volume
            </h4>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              By species
            </span>
          </div>
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={catchVolumeData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value" label={({
                name,
                percent
              }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {catchVolumeData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
                <Legend layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{
                fontSize: '12px',
                color: textColor
              }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Weather Risk Analytics */}
        <div className={`dashboard-card p-5 ${darkMode ? 'glassmorphism' : ''}`}>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium flex items-center">
              <CloudLightningIcon className="h-5 w-5 mr-2 text-ocean-teal" />
              Weather Risk Analytics
            </h4>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Next 30 days forecast
            </span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weatherRiskData} margin={{
              top: 5,
              right: 10,
              left: 0,
              bottom: 20
            }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                <XAxis dataKey="date" tick={{
                fill: textColor,
                fontSize: 12
              }} axisLine={{
                stroke: gridColor
              }} tickLine={{
                stroke: gridColor
              }} />
                <YAxis tick={{
                fill: textColor,
                fontSize: 12
              }} axisLine={{
                stroke: gridColor
              }} tickLine={{
                stroke: gridColor
              }} />
                <Tooltip contentStyle={tooltipStyle} />
                <Line type="monotone" dataKey="risk" name="Risk Level" stroke="#66FFF9" strokeWidth={2} dot={{
                fill: '#66FFF9',
                strokeWidth: 2,
                r: 4
              }} activeDot={{
                fill: '#00E6E6',
                strokeWidth: 0,
                r: 6
              }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 flex justify-between">
            <span>Low Risk</span>
            <span className="text-yellow-500 dark:text-yellow-400">
              Medium Risk
            </span>
            <span className="text-red-500 dark:text-red-400">High Risk</span>
          </div>
        </div>
      </div>
    </div>;
};