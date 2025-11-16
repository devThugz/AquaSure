import React, { useState } from 'react';
import { ClockIcon, CalendarIcon, UsersIcon, ActivityIcon, BarChart2Icon } from 'lucide-react';
export const PeakActivityHours: React.FC = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [viewType, setViewType] = useState('hourly');
  // Mock data for hourly activity
  const hourlyActivityData = [{
    hour: '00:00',
    users: 120
  }, {
    hour: '01:00',
    users: 85
  }, {
    hour: '02:00',
    users: 62
  }, {
    hour: '03:00',
    users: 48
  }, {
    hour: '04:00',
    users: 35
  }, {
    hour: '05:00',
    users: 42
  }, {
    hour: '06:00',
    users: 78
  }, {
    hour: '07:00',
    users: 156
  }, {
    hour: '08:00',
    users: 342
  }, {
    hour: '09:00',
    users: 487
  }, {
    hour: '10:00',
    users: 520
  }, {
    hour: '11:00',
    users: 495
  }, {
    hour: '12:00',
    users: 468
  }, {
    hour: '13:00',
    users: 502
  }, {
    hour: '14:00',
    users: 542
  }, {
    hour: '15:00',
    users: 521
  }, {
    hour: '16:00',
    users: 489
  }, {
    hour: '17:00',
    users: 435
  }, {
    hour: '18:00',
    users: 380
  }, {
    hour: '19:00',
    users: 320
  }, {
    hour: '20:00',
    users: 278
  }, {
    hour: '21:00',
    users: 245
  }, {
    hour: '22:00',
    users: 210
  }, {
    hour: '23:00',
    users: 165
  }];
  // Mock data for daily activity by hour (heatmap data)
  const weekdayHourlyData = [{
    day: 'Monday',
    hour: '00:00',
    value: 10
  }, {
    day: 'Monday',
    hour: '03:00',
    value: 5
  }, {
    day: 'Monday',
    hour: '06:00',
    value: 15
  }, {
    day: 'Monday',
    hour: '09:00',
    value: 45
  }, {
    day: 'Monday',
    hour: '12:00',
    value: 40
  }, {
    day: 'Monday',
    hour: '15:00',
    value: 50
  }, {
    day: 'Monday',
    hour: '18:00',
    value: 35
  }, {
    day: 'Monday',
    hour: '21:00',
    value: 20
  }, {
    day: 'Tuesday',
    hour: '00:00',
    value: 8
  }, {
    day: 'Tuesday',
    hour: '03:00',
    value: 4
  }, {
    day: 'Tuesday',
    hour: '06:00',
    value: 16
  }, {
    day: 'Tuesday',
    hour: '09:00',
    value: 48
  }, {
    day: 'Tuesday',
    hour: '12:00',
    value: 42
  }, {
    day: 'Tuesday',
    hour: '15:00',
    value: 53
  }, {
    day: 'Tuesday',
    hour: '18:00',
    value: 32
  }, {
    day: 'Tuesday',
    hour: '21:00',
    value: 18
  }, {
    day: 'Wednesday',
    hour: '00:00',
    value: 12
  }, {
    day: 'Wednesday',
    hour: '03:00',
    value: 6
  }, {
    day: 'Wednesday',
    hour: '06:00',
    value: 18
  }, {
    day: 'Wednesday',
    hour: '09:00',
    value: 52
  }, {
    day: 'Wednesday',
    hour: '12:00',
    value: 45
  }, {
    day: 'Wednesday',
    hour: '15:00',
    value: 55
  }, {
    day: 'Wednesday',
    hour: '18:00',
    value: 38
  }, {
    day: 'Wednesday',
    hour: '21:00',
    value: 22
  }, {
    day: 'Thursday',
    hour: '00:00',
    value: 11
  }, {
    day: 'Thursday',
    hour: '03:00',
    value: 5
  }, {
    day: 'Thursday',
    hour: '06:00',
    value: 17
  }, {
    day: 'Thursday',
    hour: '09:00',
    value: 49
  }, {
    day: 'Thursday',
    hour: '12:00',
    value: 43
  }, {
    day: 'Thursday',
    hour: '15:00',
    value: 54
  }, {
    day: 'Thursday',
    hour: '18:00',
    value: 36
  }, {
    day: 'Thursday',
    hour: '21:00',
    value: 21
  }, {
    day: 'Friday',
    hour: '00:00',
    value: 9
  }, {
    day: 'Friday',
    hour: '03:00',
    value: 4
  }, {
    day: 'Friday',
    hour: '06:00',
    value: 14
  }, {
    day: 'Friday',
    hour: '09:00',
    value: 46
  }, {
    day: 'Friday',
    hour: '12:00',
    value: 38
  }, {
    day: 'Friday',
    hour: '15:00',
    value: 48
  }, {
    day: 'Friday',
    hour: '18:00',
    value: 42
  }, {
    day: 'Friday',
    hour: '21:00',
    value: 28
  }, {
    day: 'Saturday',
    hour: '00:00',
    value: 15
  }, {
    day: 'Saturday',
    hour: '03:00',
    value: 8
  }, {
    day: 'Saturday',
    hour: '06:00',
    value: 12
  }, {
    day: 'Saturday',
    hour: '09:00',
    value: 30
  }, {
    day: 'Saturday',
    hour: '12:00',
    value: 35
  }, {
    day: 'Saturday',
    hour: '15:00',
    value: 40
  }, {
    day: 'Saturday',
    hour: '18:00',
    value: 45
  }, {
    day: 'Saturday',
    hour: '21:00',
    value: 32
  }, {
    day: 'Sunday',
    hour: '00:00',
    value: 14
  }, {
    day: 'Sunday',
    hour: '03:00',
    value: 7
  }, {
    day: 'Sunday',
    hour: '06:00',
    value: 10
  }, {
    day: 'Sunday',
    hour: '09:00',
    value: 25
  }, {
    day: 'Sunday',
    hour: '12:00',
    value: 30
  }, {
    day: 'Sunday',
    hour: '15:00',
    value: 38
  }, {
    day: 'Sunday',
    hour: '18:00',
    value: 42
  }, {
    day: 'Sunday',
    hour: '21:00',
    value: 30
  }];
  // Find max value for scaling
  const maxHourlyUsers = Math.max(...hourlyActivityData.map(item => item.users));
  // Activity summary stats
  const activityStats = [{
    name: 'Peak Hour',
    value: '2:00 PM',
    change: '542 users',
    icon: <ClockIcon className="h-6 w-6" />,
    color: 'bg-blue-600'
  }, {
    name: 'Off-Peak Hour',
    value: '4:00 AM',
    change: '35 users',
    icon: <ClockIcon className="h-6 w-6" />,
    color: 'bg-teal-600'
  }, {
    name: 'Busiest Day',
    value: 'Wednesday',
    change: '+15% vs avg',
    icon: <CalendarIcon className="h-6 w-6" />,
    color: 'bg-indigo-600'
  }, {
    name: 'Avg. Session Time',
    value: '18m 42s',
    change: '+2m vs last week',
    icon: <ActivityIcon className="h-6 w-6" />,
    color: 'bg-purple-600'
  }];
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Peak Activity Hours
        </h1>
        <p className="text-sm text-gray-500">
          Analyze when users are most active on the platform
        </p>
      </div>
      {/* Time range filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button onClick={() => setTimeRange('day')} className={`px-4 py-2 rounded-full text-sm font-medium ${timeRange === 'day' ? 'bg-teal-100 text-teal-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
          Today
        </button>
        <button onClick={() => setTimeRange('week')} className={`px-4 py-2 rounded-full text-sm font-medium ${timeRange === 'week' ? 'bg-teal-100 text-teal-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
          This Week
        </button>
        <button onClick={() => setTimeRange('month')} className={`px-4 py-2 rounded-full text-sm font-medium ${timeRange === 'month' ? 'bg-teal-100 text-teal-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
          This Month
        </button>
      </div>
      {/* View type filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button onClick={() => setViewType('hourly')} className={`px-4 py-2 rounded-full text-sm font-medium ${viewType === 'hourly' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
          Hourly Distribution
        </button>
        <button onClick={() => setViewType('heatmap')} className={`px-4 py-2 rounded-full text-sm font-medium ${viewType === 'heatmap' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
          Weekly Heatmap
        </button>
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
                  <div className="ml-2 flex items-baseline text-sm font-semibold text-gray-600">
                    {stat.change}
                  </div>
                </dd>
              </div>
            </div>
          </div>)}
      </div>
      {/* Hourly Activity Chart */}
      {viewType === 'hourly' && <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-900">
              Hourly User Activity
            </h2>
            <div className="flex items-center text-sm text-gray-500">
              <UsersIcon className="h-4 w-4 mr-1" />
              <span>
                Total users:{' '}
                {hourlyActivityData.reduce((sum, item) => sum + item.users, 0)}
              </span>
            </div>
          </div>
          <div className="h-80 relative">
            <div className="absolute inset-0 flex items-end justify-between px-2">
              {hourlyActivityData.map((item, i) => <div key={i} className="flex flex-col items-center w-1/24">
                  <div className="bg-teal-500 rounded-t w-8" style={{
              height: `${item.users / maxHourlyUsers * 180}px`,
              maxHeight: '180px',
              minHeight: '5px'
            }}>
                    <div className="relative">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 bg-teal-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.users} users
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    {item.hour.split(':')[0]}
                  </div>
                </div>)}
            </div>
            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-500">
              <div>{maxHourlyUsers}</div>
              <div>{Math.round(maxHourlyUsers * 0.75)}</div>
              <div>{Math.round(maxHourlyUsers * 0.5)}</div>
              <div>{Math.round(maxHourlyUsers * 0.25)}</div>
              <div>0</div>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Peak activity occurs between{' '}
              <span className="font-semibold">10:00 AM and 3:00 PM</span>, with
              the highest user count at{' '}
              <span className="font-semibold">2:00 PM</span>
            </p>
          </div>
        </div>}
      {/* Weekly Heatmap */}
      {viewType === 'heatmap' && <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-900">
              Weekly Activity Heatmap
            </h2>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-max">
              <div className="grid grid-cols-8 gap-1 mb-2">
                <div className="h-10"></div>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => <div key={day} className="h-10 flex items-center justify-center text-sm font-medium text-gray-700">
                    {day}
                  </div>)}
              </div>
              {['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'].map(hour => {
            const hourData = weekdayHourlyData.filter(item => item.hour === hour);
            const maxValue = Math.max(...hourData.map(item => item.value));
            return <div key={hour} className="grid grid-cols-8 gap-1 mb-1">
                    <div className="flex items-center justify-end pr-2 text-xs text-gray-500">
                      {hour}
                    </div>
                    {hourData.map((item, index) => {
                // Calculate color intensity based on value
                const intensity = Math.max(20, Math.min(100, Math.round(item.value / 55 * 100)));
                return <div key={index} className="h-10 rounded flex items-center justify-center text-xs font-medium" style={{
                  backgroundColor: `rgba(13, 148, 136, ${intensity / 100})`,
                  color: intensity > 60 ? 'white' : '#1f2937'
                }} title={`${item.day} at ${item.hour}: ${item.value} users`}>
                          {item.value}
                        </div>;
              })}
                  </div>;
          })}
            </div>
          </div>
          <div className="flex items-center justify-center mt-6">
            <div className="flex items-center">
              <div className="w-full h-2 bg-gradient-to-r from-teal-100 to-teal-600 rounded-full w-32"></div>
              <div className="flex justify-between w-32 mt-1">
                <span className="text-xs text-gray-500">Low</span>
                <span className="text-xs text-gray-500">High</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Weekday afternoons show the highest activity, with Wednesday at
              3:00 PM being the peak
            </p>
          </div>
        </div>}
      {/* User Activity Insights */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Activity Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-md font-medium text-gray-700">
              Peak Hours Analysis
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                </div>
                <p className="ml-2">
                  <span className="font-medium">Highest activity:</span> 10:00
                  AM to 3:00 PM on weekdays
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                </div>
                <p className="ml-2">
                  <span className="font-medium">Secondary peak:</span> 6:00 PM
                  to 8:00 PM, likely after working hours
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                </div>
                <p className="ml-2">
                  <span className="font-medium">Weekend patterns:</span> More
                  distributed activity throughout the day
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                </div>
                <p className="ml-2">
                  <span className="font-medium">Low activity:</span> 1:00 AM to
                  5:00 AM consistently across all days
                </p>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-medium text-gray-700">
              Recommendations
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                </div>
                <p className="ml-2">
                  Schedule system maintenance during off-peak hours (2:00 AM -
                  4:00 AM)
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                </div>
                <p className="ml-2">
                  Optimize server resources to handle peak loads during 10:00 AM
                  - 3:00 PM
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                </div>
                <p className="ml-2">
                  Schedule important announcements around 10:00 AM for maximum
                  visibility
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                </div>
                <p className="ml-2">
                  Consider sending notifications during secondary peak (6:00 PM
                  - 8:00 PM)
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>;
};