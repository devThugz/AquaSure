import React, { useState } from 'react';
import { LineChartIcon, CalendarIcon, UsersIcon, ActivityIcon, BarChart2Icon } from 'lucide-react';
export const UserActivityAnalytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('daily');
  // Mock data for daily active users
  const dailyActiveUsers = [{
    date: '05/01',
    users: 3842
  }, {
    date: '05/02',
    users: 4021
  }, {
    date: '05/03',
    users: 4256
  }, {
    date: '05/04',
    users: 3987
  }, {
    date: '05/05',
    users: 4102
  }, {
    date: '05/06',
    users: 3756
  }, {
    date: '05/07',
    users: 3542
  }, {
    date: '05/08',
    users: 3698
  }, {
    date: '05/09',
    users: 3842
  }, {
    date: '05/10',
    users: 4012
  }, {
    date: '05/11',
    users: 4187
  }, {
    date: '05/12',
    users: 4302
  }, {
    date: '05/13',
    users: 4056
  }, {
    date: '05/14',
    users: 3912
  }];
  // Mock data for weekly active users
  const weeklyActiveUsers = [{
    week: 'Week 1',
    users: 6842
  }, {
    week: 'Week 2',
    users: 7021
  }, {
    week: 'Week 3',
    users: 7256
  }, {
    week: 'Week 4',
    users: 7542
  }, {
    week: 'Week 5',
    users: 7812
  }, {
    week: 'Week 6',
    users: 8102
  }, {
    week: 'Week 7',
    users: 8342
  }, {
    week: 'Week 8',
    users: 8512
  }, {
    week: 'Week 9',
    users: 8756
  }, {
    week: 'Week 10',
    users: 9012
  }, {
    week: 'Week 11',
    users: 9287
  }, {
    week: 'Week 12',
    users: 9542
  }];
  // Mock data for monthly active users
  const monthlyActiveUsers = [{
    month: 'Jan',
    users: 8542
  }, {
    month: 'Feb',
    users: 8912
  }, {
    month: 'Mar',
    users: 9256
  }, {
    month: 'Apr',
    users: 9587
  }, {
    month: 'May',
    users: 10102
  }, {
    month: 'Jun',
    users: 10542
  }, {
    month: 'Jul',
    users: 10987
  }, {
    month: 'Aug',
    users: 11342
  }, {
    month: 'Sep',
    users: 11756
  }, {
    month: 'Oct',
    users: 12102
  }, {
    month: 'Nov',
    users: 12458
  }, {
    month: 'Dec',
    users: 12842
  }];
  // User activity by time of day
  const userActivityByHour = [{
    hour: '00:00',
    users: 1256
  }, {
    hour: '02:00',
    users: 856
  }, {
    hour: '04:00',
    users: 542
  }, {
    hour: '06:00',
    users: 1287
  }, {
    hour: '08:00',
    users: 3542
  }, {
    hour: '10:00',
    users: 4856
  }, {
    hour: '12:00',
    users: 5102
  }, {
    hour: '14:00',
    users: 4856
  }, {
    hour: '16:00',
    users: 4342
  }, {
    hour: '18:00',
    users: 3987
  }, {
    hour: '20:00',
    users: 3256
  }, {
    hour: '22:00',
    users: 2102
  }];
  // User device statistics
  const userDevices = [{
    device: 'Mobile',
    percentage: 68
  }, {
    device: 'Desktop',
    percentage: 24
  }, {
    device: 'Tablet',
    percentage: 8
  }];
  // Get the appropriate data based on the selected time range
  const getActiveUsersData = () => {
    switch (timeRange) {
      case 'daily':
        return dailyActiveUsers;
      case 'weekly':
        return weeklyActiveUsers;
      case 'monthly':
        return monthlyActiveUsers;
      default:
        return dailyActiveUsers;
    }
  };
  const activeUsersData = getActiveUsersData();
  const maxActiveUsers = Math.max(...activeUsersData.map(item => item.users));
  // Stats for the top cards
  const activityStats = [{
    name: 'Daily Active Users',
    value: '5,842',
    change: '+8.3%',
    icon: <UsersIcon className="h-6 w-6" />,
    color: 'bg-blue-600'
  }, {
    name: 'Weekly Active Users',
    value: '9,542',
    change: '+6.2%',
    icon: <UsersIcon className="h-6 w-6" />,
    color: 'bg-teal-600'
  }, {
    name: 'Monthly Active Users',
    value: '12,458',
    change: '+4.5%',
    icon: <UsersIcon className="h-6 w-6" />,
    color: 'bg-indigo-600'
  }, {
    name: 'Avg. Session Duration',
    value: '12m 24s',
    change: '+1m 15s',
    icon: <ActivityIcon className="h-6 w-6" />,
    color: 'bg-purple-600'
  }];
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          User Activity Analytics
        </h1>
        <p className="text-sm text-gray-500">
          Track user engagement and platform usage over time
        </p>
      </div>
      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {activityStats.map(stat => <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className={`flex-shrink-0 rounded-md p-3 ${stat.color} text-white`}>
                {stat.icon}
              </div>
              <div className="ml-5 w-0 flex-1">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  {stat.name}
                </dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                    {stat.change}
                  </div>
                </dd>
              </div>
            </div>
          </div>)}
      </div>
      {/* Active Users Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium text-gray-900">
            Active Users Over Time
          </h2>
          <div className="flex space-x-2">
            <button onClick={() => setTimeRange('daily')} className={`px-3 py-1 text-sm rounded-md ${timeRange === 'daily' ? 'bg-teal-100 text-teal-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              Daily
            </button>
            <button onClick={() => setTimeRange('weekly')} className={`px-3 py-1 text-sm rounded-md ${timeRange === 'weekly' ? 'bg-teal-100 text-teal-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              Weekly
            </button>
            <button onClick={() => setTimeRange('monthly')} className={`px-3 py-1 text-sm rounded-md ${timeRange === 'monthly' ? 'bg-teal-100 text-teal-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              Monthly
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
                  M 0 ${100 - activeUsersData[0].users / maxActiveUsers * 80}
                  ${activeUsersData.map((point, i) => `L ${i / (activeUsersData.length - 1) * 100} ${100 - point.users / maxActiveUsers * 80}`).join(' ')}
                  L 100 100
                  L 0 100
                  Z
                `} fill="url(#gradient)" />
              {/* Line */}
              <path d={`
                  M 0 ${100 - activeUsersData[0].users / maxActiveUsers * 80}
                  ${activeUsersData.map((point, i) => `L ${i / (activeUsersData.length - 1) * 100} ${100 - point.users / maxActiveUsers * 80}`).join(' ')}
                `} fill="none" stroke="#0284c7" strokeWidth="1.5" />
              {/* Points */}
              {activeUsersData.map((point, i) => <circle key={i} cx={`${i / (activeUsersData.length - 1) * 100}`} cy={`${100 - point.users / maxActiveUsers * 80}`} r="1.5" fill="#0284c7" />)}
            </svg>
          </div>
          {/* X-axis labels */}
          <div className="absolute left-0 right-0 bottom-0 flex justify-between text-xs text-gray-500">
            {activeUsersData.filter((_, i) => i % Math.ceil(activeUsersData.length / 12) === 0).map((point, i) => <div key={i} className="text-center">
                  {timeRange === 'daily' ? point.date : timeRange === 'weekly' ? point.week : point.month}
                </div>)}
          </div>
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-500">
            <div>{Math.round(maxActiveUsers * 1.0)}</div>
            <div>{Math.round(maxActiveUsers * 0.75)}</div>
            <div>{Math.round(maxActiveUsers * 0.5)}</div>
            <div>{Math.round(maxActiveUsers * 0.25)}</div>
            <div>0</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
        {/* User Activity by Time of Day */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            User Activity by Time of Day
          </h2>
          <div className="h-64 relative">
            <div className="absolute inset-0 flex items-end justify-between px-2">
              {userActivityByHour.map((item, i) => <div key={i} className="flex flex-col items-center w-1/12">
                  <div className="bg-indigo-500 rounded-t w-8" style={{
                height: `${item.users / 5200 * 180}px`,
                maxHeight: '180px',
                minHeight: '5px'
              }}></div>
                  <div className="text-xs text-gray-500 mt-2">{item.hour}</div>
                </div>)}
            </div>
            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-500">
              <div>5K</div>
              <div>4K</div>
              <div>3K</div>
              <div>2K</div>
              <div>1K</div>
              <div>0</div>
            </div>
          </div>
        </div>
        {/* User Devices */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            User Devices
          </h2>
          <div className="h-64 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full border-8 border-gray-100 relative">
              {userDevices.map((item, i) => {
              // Calculate the rotation and position for each segment
              const prevTotal = userDevices.slice(0, i).reduce((sum, curr) => sum + curr.percentage, 0);
              const total = prevTotal + item.percentage;
              const prevAngle = prevTotal / 100 * 360;
              const angle = item.percentage / 100 * 360;
              // Generate a color based on index
              const colors = ['bg-blue-500', 'bg-teal-500', 'bg-indigo-500'];
              const color = colors[i % colors.length];
              // Position the label
              const labelAngle = (prevTotal + item.percentage / 2) / 100 * 360;
              const labelRadians = (labelAngle - 90) * (Math.PI / 180);
              const labelX = 80 * Math.cos(labelRadians);
              const labelY = 80 * Math.sin(labelRadians);
              return <div key={i} className="absolute inset-0">
                    <div className={`absolute top-0 left-0 w-full h-full ${color}`} style={{
                  clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos((prevAngle - 90) * (Math.PI / 180))}% ${50 + 50 * Math.sin((prevAngle - 90) * (Math.PI / 180))}%, ${50 + 50 * Math.cos((prevAngle + angle - 90) * (Math.PI / 180))}% ${50 + 50 * Math.sin((prevAngle + angle - 90) * (Math.PI / 180))}%)`
                }}></div>
                    <div className="absolute text-xs font-medium text-white" style={{
                  left: `calc(50% + ${labelX}px)`,
                  top: `calc(50% + ${labelY}px)`,
                  transform: 'translate(-50%, -50%)'
                }}>
                      {item.percentage}%
                    </div>
                  </div>;
            })}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-6 mt-4">
            {userDevices.map((item, i) => {
            const colors = ['bg-blue-500', 'bg-teal-500', 'bg-indigo-500'];
            const color = colors[i % colors.length];
            return <div key={i} className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${color} mr-1`}></div>
                  <span className="text-sm text-gray-600">{item.device}</span>
                </div>;
          })}
          </div>
        </div>
      </div>
      {/* User Retention */}
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
                  Users
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Week 1
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Week 2
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Week 3
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Week 4
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Week 8
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[{
              month: 'May 2023',
              users: 1245,
              w1: '100%',
              w2: '86%',
              w3: '72%',
              w4: '68%',
              w8: '62%'
            }, {
              month: 'Apr 2023',
              users: 1187,
              w1: '100%',
              w2: '84%',
              w3: '70%',
              w4: '64%',
              w8: '58%'
            }, {
              month: 'Mar 2023',
              users: 1056,
              w1: '100%',
              w2: '82%',
              w3: '68%',
              w4: '62%',
              w8: '54%'
            }, {
              month: 'Feb 2023',
              users: 987,
              w1: '100%',
              w2: '80%',
              w3: '66%',
              w4: '60%',
              w8: '52%'
            }, {
              month: 'Jan 2023',
              users: 876,
              w1: '100%',
              w2: '78%',
              w3: '64%',
              w4: '58%',
              w8: '50%'
            }].map((cohort, index) => <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {cohort.month}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {cohort.users}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {cohort.w1}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {cohort.w2}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {cohort.w3}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {cohort.w4}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {cohort.w8}
                    </span>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};