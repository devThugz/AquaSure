import React, { useState } from 'react';
import { TrendingUpIcon, UserPlusIcon, UserMinusIcon, UsersIcon, ActivityIcon, CalendarIcon, LineChartIcon, BarChart2Icon, BarChartIcon } from 'lucide-react';
export const GrowthTrendsAnalytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('yearly');
  // Mock data for user growth over time
  const userGrowthData = [{
    month: 'Jan',
    users: 8542,
    newUsers: 342,
    churnedUsers: 120
  }, {
    month: 'Feb',
    users: 8764,
    newUsers: 328,
    churnedUsers: 106
  }, {
    month: 'Mar',
    users: 9042,
    newUsers: 356,
    churnedUsers: 78
  }, {
    month: 'Apr',
    users: 9358,
    newUsers: 387,
    churnedUsers: 71
  }, {
    month: 'May',
    users: 9745,
    newUsers: 452,
    churnedUsers: 65
  }, {
    month: 'Jun',
    users: 10132,
    newUsers: 478,
    churnedUsers: 91
  }, {
    month: 'Jul',
    users: 10587,
    newUsers: 524,
    churnedUsers: 69
  }, {
    month: 'Aug',
    users: 10985,
    newUsers: 485,
    churnedUsers: 87
  }, {
    month: 'Sep',
    users: 11342,
    newUsers: 442,
    churnedUsers: 85
  }, {
    month: 'Oct',
    users: 11756,
    newUsers: 487,
    churnedUsers: 73
  }, {
    month: 'Nov',
    users: 12102,
    newUsers: 425,
    churnedUsers: 79
  }, {
    month: 'Dec',
    users: 12458,
    newUsers: 438,
    churnedUsers: 82
  }];
  // Retention cohorts
  const retentionCohorts = [{
    cohort: 'Jan 2023',
    users: 342,
    m1: 92,
    m2: 87,
    m3: 82,
    m6: 74
  }, {
    cohort: 'Feb 2023',
    users: 328,
    m1: 91,
    m2: 85,
    m3: 81,
    m6: 72
  }, {
    cohort: 'Mar 2023',
    users: 356,
    m1: 93,
    m2: 88,
    m3: 84,
    m6: 76
  }, {
    cohort: 'Apr 2023',
    users: 387,
    m1: 94,
    m2: 89,
    m3: 85,
    m6: 78
  }, {
    cohort: 'May 2023',
    users: 452,
    m1: 95,
    m2: 90,
    m3: 86,
    m6: null
  }, {
    cohort: 'Jun 2023',
    users: 478,
    m1: 94,
    m2: 89,
    m3: null,
    m6: null
  }, {
    cohort: 'Jul 2023',
    users: 524,
    m1: 93,
    m2: null,
    m3: null,
    m6: null
  }, {
    cohort: 'Aug 2023',
    users: 485,
    m1: 92,
    m2: null,
    m3: null,
    m6: null
  }, {
    cohort: 'Sep 2023',
    users: 442,
    m1: null,
    m2: null,
    m3: null,
    m6: null
  }];
  // User engagement metrics
  const engagementMetrics = [{
    name: 'Daily Active Users',
    value: '5,842',
    change: '+8.3%',
    icon: <UsersIcon className="h-5 w-5" />,
    color: 'bg-blue-600'
  }, {
    name: 'New Registrations',
    value: '138',
    change: '+12.5%',
    icon: <UserPlusIcon className="h-5 w-5" />,
    color: 'bg-green-600'
  }, {
    name: 'Churn Rate',
    value: '1.2%',
    change: '-0.3%',
    icon: <UserMinusIcon className="h-5 w-5" />,
    color: 'bg-amber-600'
  }, {
    name: 'Avg. Session Time',
    value: '12m 24s',
    change: '+1m 15s',
    icon: <ActivityIcon className="h-5 w-5" />,
    color: 'bg-purple-600'
  }];
  // User acquisition sources
  const acquisitionSources = [{
    source: 'Organic Search',
    users: 4256,
    percentage: 34
  }, {
    source: 'Direct',
    users: 3128,
    percentage: 25
  }, {
    source: 'Referral',
    users: 2456,
    percentage: 20
  }, {
    source: 'Social Media',
    users: 1542,
    percentage: 12
  }, {
    source: 'Email Campaigns',
    users: 876,
    percentage: 7
  }, {
    source: 'Other',
    users: 200,
    percentage: 2
  }];
  // Calculate growth metrics
  const totalNewUsers = userGrowthData.reduce((sum, month) => sum + month.newUsers, 0);
  const totalChurnedUsers = userGrowthData.reduce((sum, month) => sum + month.churnedUsers, 0);
  const netGrowth = totalNewUsers - totalChurnedUsers;
  const growthRate = ((userGrowthData[userGrowthData.length - 1].users - userGrowthData[0].users) / userGrowthData[0].users * 100).toFixed(1);
  const avgMonthlyGrowth = (netGrowth / userGrowthData.length).toFixed(0);
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Growth Trends & Engagement
        </h1>
        <p className="text-sm text-gray-500">
          Analyze user growth, retention, and engagement patterns
        </p>
      </div>
      {/* Growth Summary */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0 rounded-md p-3 bg-teal-600 text-white">
              <UsersIcon className="h-6 w-6" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Total Users
              </dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">
                  {userGrowthData[userGrowthData.length - 1].users.toLocaleString()}
                </div>
              </dd>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0 rounded-md p-3 bg-green-600 text-white">
              <TrendingUpIcon className="h-6 w-6" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Growth Rate
              </dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">
                  +{growthRate}%
                </div>
                <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  Annual
                </div>
              </dd>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0 rounded-md p-3 bg-blue-600 text-white">
              <UserPlusIcon className="h-6 w-6" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dt className="text-sm font-medium text-gray-500 truncate">
                New Users
              </dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">
                  {totalNewUsers.toLocaleString()}
                </div>
                <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  Last Year
                </div>
              </dd>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0 rounded-md p-3 bg-indigo-600 text-white">
              <BarChartIcon className="h-6 w-6" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Avg. Monthly Growth
              </dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">
                  +{avgMonthlyGrowth}
                </div>
                <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  Users
                </div>
              </dd>
            </div>
          </div>
        </div>
      </div>
      {/* User Growth Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium text-gray-900">
            User Growth Trends
          </h2>
          <div className="flex space-x-2">
            <button onClick={() => setTimeRange('quarterly')} className={`px-3 py-1 text-sm rounded-md ${timeRange === 'quarterly' ? 'bg-teal-100 text-teal-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              Quarterly
            </button>
            <button onClick={() => setTimeRange('yearly')} className={`px-3 py-1 text-sm rounded-md ${timeRange === 'yearly' ? 'bg-teal-100 text-teal-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              Yearly
            </button>
          </div>
        </div>
        <div className="h-80 relative">
          <div className="absolute inset-0">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
                  <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
                </linearGradient>
              </defs>
              {/* Area under the line */}
              <path d={`
                  M 0 ${100 - userGrowthData[0].users / 13000 * 80}
                  ${userGrowthData.map((point, i) => `L ${i / (userGrowthData.length - 1) * 100} ${100 - point.users / 13000 * 80}`).join(' ')}
                  L 100 100
                  L 0 100
                  Z
                `} fill="url(#gradient)" />
              {/* Line */}
              <path d={`
                  M 0 ${100 - userGrowthData[0].users / 13000 * 80}
                  ${userGrowthData.map((point, i) => `L ${i / (userGrowthData.length - 1) * 100} ${100 - point.users / 13000 * 80}`).join(' ')}
                `} fill="none" stroke="#0284c7" strokeWidth="1.5" />
              {/* Points */}
              {userGrowthData.map((point, i) => <circle key={i} cx={`${i / (userGrowthData.length - 1) * 100}`} cy={`${100 - point.users / 13000 * 80}`} r="1.5" fill="#0284c7" />)}
            </svg>
          </div>
          {/* X-axis labels */}
          <div className="absolute left-0 right-0 bottom-0 flex justify-between text-xs text-gray-500">
            {userGrowthData.filter((_, i) => i % Math.ceil(userGrowthData.length / 6) === 0).map((point, i) => <div key={i} className="text-center">
                  {point.month}
                </div>)}
          </div>
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-500">
            <div>13K</div>
            <div>11K</div>
            <div>9K</div>
            <div>7K</div>
            <div>5K</div>
          </div>
        </div>
      </div>
      {/* User Engagement Metrics */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-6">
          User Engagement Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {engagementMetrics.map((metric, index) => <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className={`p-2 rounded-full ${metric.color.replace('bg-', 'bg-opacity-20 ')} ${metric.color.replace('bg-', 'text-')}`}>
                  {metric.icon}
                </div>
                <p className="ml-2 text-sm font-medium text-gray-700">
                  {metric.name}
                </p>
              </div>
              <div className="flex items-baseline">
                <p className="text-xl font-bold text-gray-900">
                  {metric.value}
                </p>
                <p className="ml-2 text-xs font-medium text-green-600">
                  {metric.change}
                </p>
              </div>
            </div>)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Acquisition Sources */}
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-3">
              User Acquisition Sources
            </h3>
            <div className="space-y-4">
              {acquisitionSources.map((source, index) => <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">
                      {source.source}
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {source.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className={`h-2.5 rounded-full ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-teal-500' : index === 2 ? 'bg-green-500' : index === 3 ? 'bg-indigo-500' : index === 4 ? 'bg-purple-500' : 'bg-gray-500'}`} style={{
                  width: `${source.percentage}%`
                }}></div>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    {source.users.toLocaleString()} users
                  </p>
                </div>)}
            </div>
          </div>
          {/* User Activity by Time */}
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-3">
              Monthly User Growth
            </h3>
            <div className="h-64 relative">
              <div className="absolute inset-0 flex items-end justify-between px-2">
                {userGrowthData.map((item, i) => <div key={i} className="flex flex-col items-center w-1/12">
                    <div className="relative w-12">
                      <div className="bg-green-500 absolute bottom-0 w-full rounded-t" style={{
                    height: `${item.newUsers / 550 * 180}px`
                  }}></div>
                      <div className="bg-red-500 absolute bottom-0 w-full rounded-t" style={{
                    height: `${item.churnedUsers / 550 * 180}px`,
                    transform: `translateX(${-40}%)`
                  }}></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      {item.month}
                    </div>
                  </div>)}
              </div>
              <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-500">
                <div>550</div>
                <div>400</div>
                <div>250</div>
                <div>100</div>
                <div>0</div>
              </div>
            </div>
            <div className="flex justify-center space-x-6 mt-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                <span className="text-xs text-gray-600">New Users</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                <span className="text-xs text-gray-600">Churned Users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Retention Cohorts */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          User Retention Cohorts
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cohort
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  New Users
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Month 1
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Month 2
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Month 3
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Month 6
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {retentionCohorts.map((cohort, index) => <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {cohort.cohort}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {cohort.users}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {cohort.m1 !== null ? <div className="flex items-center">
                        <span className="text-sm text-gray-900 mr-2">
                          {cohort.m1}%
                        </span>
                        <div className="w-16 bg-gray-200 rounded-full h-1.5">
                          <div className="bg-green-500 h-1.5 rounded-full" style={{
                      width: `${cohort.m1}%`
                    }}></div>
                        </div>
                      </div> : <span className="text-sm text-gray-400">-</span>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {cohort.m2 !== null ? <div className="flex items-center">
                        <span className="text-sm text-gray-900 mr-2">
                          {cohort.m2}%
                        </span>
                        <div className="w-16 bg-gray-200 rounded-full h-1.5">
                          <div className="bg-teal-500 h-1.5 rounded-full" style={{
                      width: `${cohort.m2}%`
                    }}></div>
                        </div>
                      </div> : <span className="text-sm text-gray-400">-</span>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {cohort.m3 !== null ? <div className="flex items-center">
                        <span className="text-sm text-gray-900 mr-2">
                          {cohort.m3}%
                        </span>
                        <div className="w-16 bg-gray-200 rounded-full h-1.5">
                          <div className="bg-blue-500 h-1.5 rounded-full" style={{
                      width: `${cohort.m3}%`
                    }}></div>
                        </div>
                      </div> : <span className="text-sm text-gray-400">-</span>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {cohort.m6 !== null ? <div className="flex items-center">
                        <span className="text-sm text-gray-900 mr-2">
                          {cohort.m6}%
                        </span>
                        <div className="w-16 bg-gray-200 rounded-full h-1.5">
                          <div className="bg-indigo-500 h-1.5 rounded-full" style={{
                      width: `${cohort.m6}%`
                    }}></div>
                        </div>
                      </div> : <span className="text-sm text-gray-400">-</span>}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};