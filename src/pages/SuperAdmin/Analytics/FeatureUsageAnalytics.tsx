import React, { useState } from 'react';
import { PieChartIcon, BarChartIcon, HeartIcon, CloudRainIcon, FishIcon, MapPinIcon, AlertTriangleIcon, UsersIcon, MegaphoneIcon, ShieldIcon, CalendarIcon } from 'lucide-react';
export const FeatureUsageAnalytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('30days');
  // Mock data for feature usage metrics
  const featureUsage = [{
    name: 'AquaSure Market',
    icon: <FishIcon className="h-5 w-5" />,
    color: 'bg-teal-100 text-teal-600',
    usage: 78,
    change: '+5.2%',
    avgTimeSpent: '8m 24s',
    sessions: 245872
  }, {
    name: 'Insurance Hub',
    icon: <HeartIcon className="h-5 w-5" />,
    color: 'bg-blue-100 text-blue-600',
    usage: 65,
    change: '+3.8%',
    avgTimeSpent: '6m 12s',
    sessions: 198542
  }, {
    name: 'GPS Tracking',
    icon: <MapPinIcon className="h-5 w-5" />,
    color: 'bg-indigo-100 text-indigo-600',
    usage: 52,
    change: '+7.5%',
    avgTimeSpent: '5m 48s',
    sessions: 156321
  }, {
    name: 'Weather Alerts',
    icon: <CloudRainIcon className="h-5 w-5" />,
    color: 'bg-purple-100 text-purple-600',
    usage: 48,
    change: '+2.1%',
    avgTimeSpent: '3m 42s',
    sessions: 142568
  }, {
    name: 'Community Chat',
    icon: <UsersIcon className="h-5 w-5" />,
    color: 'bg-green-100 text-green-600',
    usage: 42,
    change: '+4.3%',
    avgTimeSpent: '12m 36s',
    sessions: 124578
  }, {
    name: 'Verification',
    icon: <ShieldIcon className="h-5 w-5" />,
    color: 'bg-amber-100 text-amber-600',
    usage: 35,
    change: '+1.8%',
    avgTimeSpent: '4m 18s',
    sessions: 98745
  }, {
    name: 'Announcement',
    icon: <MegaphoneIcon className="h-5 w-5" />,
    color: 'bg-red-100 text-red-600',
    usage: 28,
    change: '+0.9%',
    avgTimeSpent: '2m 42s',
    sessions: 84521
  }, {
    name: 'Emergency Reports',
    icon: <AlertTriangleIcon className="h-5 w-5" />,
    color: 'bg-orange-100 text-orange-600',
    usage: 12,
    change: '+0.5%',
    avgTimeSpent: '5m 24s',
    sessions: 35842
  }];
  // Mock data for feature usage over time
  const usageOverTime = [{
    month: 'Jan',
    market: 65,
    insurance: 52,
    gps: 42,
    weather: 38,
    community: 35
  }, {
    month: 'Feb',
    market: 67,
    insurance: 54,
    gps: 44,
    weather: 40,
    community: 36
  }, {
    month: 'Mar',
    market: 70,
    insurance: 56,
    gps: 46,
    weather: 42,
    community: 38
  }, {
    month: 'Apr',
    market: 72,
    insurance: 58,
    gps: 48,
    weather: 44,
    community: 40
  }, {
    month: 'May',
    market: 75,
    insurance: 60,
    gps: 50,
    weather: 46,
    community: 41
  }, {
    month: 'Jun',
    market: 78,
    insurance: 62,
    gps: 52,
    weather: 48,
    community: 42
  }];
  // Mock data for user engagement by feature
  const userEngagement = [{
    feature: 'AquaSure Market',
    daily: 35,
    weekly: 68,
    monthly: 78
  }, {
    feature: 'Insurance Hub',
    daily: 28,
    weekly: 52,
    monthly: 65
  }, {
    feature: 'GPS Tracking',
    daily: 22,
    weekly: 42,
    monthly: 52
  }, {
    feature: 'Weather Alerts',
    daily: 18,
    weekly: 38,
    monthly: 48
  }, {
    feature: 'Community Chat',
    daily: 15,
    weekly: 32,
    monthly: 42
  }];
  // Mock data for feature interaction flow
  const featureFlow = [{
    from: 'Dashboard',
    to: 'AquaSure Market',
    value: 42
  }, {
    from: 'Dashboard',
    to: 'Insurance Hub',
    value: 35
  }, {
    from: 'Dashboard',
    to: 'GPS Tracking',
    value: 28
  }, {
    from: 'AquaSure Market',
    to: 'Insurance Hub',
    value: 18
  }, {
    from: 'AquaSure Market',
    to: 'Community Chat',
    value: 12
  }, {
    from: 'Insurance Hub',
    to: 'Weather Alerts',
    value: 15
  }, {
    from: 'GPS Tracking',
    to: 'Emergency Reports',
    value: 8
  }, {
    from: 'Weather Alerts',
    to: 'GPS Tracking',
    value: 22
  }];
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Feature Usage Analytics
        </h1>
        <p className="text-sm text-gray-500">
          Track how users are engaging with different features of the platform
        </p>
      </div>
      {/* Time Range Selector */}
      <div className="mb-6 flex justify-end">
        <div className="flex space-x-2">
          <button onClick={() => setTimeRange('7days')} className={`px-3 py-1 text-sm rounded-md ${timeRange === '7days' ? 'bg-teal-100 text-teal-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            Last 7 Days
          </button>
          <button onClick={() => setTimeRange('30days')} className={`px-3 py-1 text-sm rounded-md ${timeRange === '30days' ? 'bg-teal-100 text-teal-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            Last 30 Days
          </button>
          <button onClick={() => setTimeRange('90days')} className={`px-3 py-1 text-sm rounded-md ${timeRange === '90days' ? 'bg-teal-100 text-teal-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            Last 90 Days
          </button>
          <button onClick={() => setTimeRange('year')} className={`px-3 py-1 text-sm rounded-md ${timeRange === 'year' ? 'bg-teal-100 text-teal-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            Last Year
          </button>
        </div>
      </div>
      {/* Feature Usage Overview */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-6">
          Feature Usage Overview
        </h2>
        <div className="space-y-6">
          {featureUsage.map((feature, index) => <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className={`rounded-full p-2 ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <h3 className="ml-2 text-sm font-medium text-gray-700">
                    {feature.name}
                  </h3>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-900 mr-2">
                    {feature.usage}%
                  </span>
                  <span className="text-xs font-medium text-green-600">
                    {feature.change}
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div className={`h-2.5 rounded-full ${feature.usage >= 70 ? 'bg-teal-500' : feature.usage >= 50 ? 'bg-blue-500' : feature.usage >= 30 ? 'bg-indigo-500' : 'bg-purple-500'}`} style={{
              width: `${feature.usage}%`
            }}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Avg. Time: {feature.avgTimeSpent}</span>
                <span>{feature.sessions.toLocaleString()} sessions</span>
              </div>
            </div>)}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
        {/* Feature Usage Over Time */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Feature Usage Over Time
          </h2>
          <div className="h-80 relative">
            <div className="absolute inset-0 flex items-end justify-between px-2">
              {usageOverTime.map((item, i) => <div key={i} className="flex flex-col items-center w-1/6">
                  <div className="relative w-12 h-60">
                    <div className="bg-teal-500 absolute bottom-0 w-full rounded-t" style={{
                  height: `${item.market * 0.6}px`
                }}></div>
                    <div className="bg-blue-500 absolute bottom-0 w-full rounded-t" style={{
                  height: `${item.insurance * 0.6}px`,
                  transform: `translateX(${-20}%)`
                }}></div>
                    <div className="bg-indigo-500 absolute bottom-0 w-full rounded-t" style={{
                  height: `${item.gps * 0.6}px`,
                  transform: `translateX(${-40}%)`
                }}></div>
                    <div className="bg-purple-500 absolute bottom-0 w-full rounded-t" style={{
                  height: `${item.weather * 0.6}px`,
                  transform: `translateX(${20}%)`
                }}></div>
                    <div className="bg-green-500 absolute bottom-0 w-full rounded-t" style={{
                  height: `${item.community * 0.6}px`,
                  transform: `translateX(${40}%)`
                }}></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">{item.month}</div>
                </div>)}
            </div>
            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-500">
              <div>80%</div>
              <div>60%</div>
              <div>40%</div>
              <div>20%</div>
              <div>0%</div>
            </div>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-teal-500 mr-1"></div>
              <span className="text-xs text-gray-600">Market</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
              <span className="text-xs text-gray-600">Insurance</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-indigo-500 mr-1"></div>
              <span className="text-xs text-gray-600">GPS</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-purple-500 mr-1"></div>
              <span className="text-xs text-gray-600">Weather</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
              <span className="text-xs text-gray-600">Community</span>
            </div>
          </div>
        </div>
        {/* User Engagement by Feature */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            User Engagement by Feature
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Daily Users
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Weekly Users
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Monthly Users
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {userEngagement.map((item, index) => <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-900 mr-2">
                          {item.daily}%
                        </span>
                        <div className="w-16 bg-gray-200 rounded-full h-1.5">
                          <div className="bg-blue-500 h-1.5 rounded-full" style={{
                        width: `${item.daily}%`
                      }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-900 mr-2">
                          {item.weekly}%
                        </span>
                        <div className="w-16 bg-gray-200 rounded-full h-1.5">
                          <div className="bg-teal-500 h-1.5 rounded-full" style={{
                        width: `${item.weekly}%`
                      }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-900 mr-2">
                          {item.monthly}%
                        </span>
                        <div className="w-16 bg-gray-200 rounded-full h-1.5">
                          <div className="bg-indigo-500 h-1.5 rounded-full" style={{
                        width: `${item.monthly}%`
                      }}></div>
                        </div>
                      </div>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Feature Flow */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Feature Interaction Flow
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  From Feature
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  To Feature
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Flow Strength
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Percentage
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {featureFlow.map((flow, index) => <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {flow.from}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {flow.to}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`h-2 rounded-full ${flow.value >= 35 ? 'bg-teal-500' : flow.value >= 20 ? 'bg-blue-500' : flow.value >= 10 ? 'bg-indigo-500' : 'bg-purple-500'}`} style={{
                    width: `${flow.value * 2}%`
                  }}></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {flow.value}%
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};