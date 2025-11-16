import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { BarChart, Users2Icon, ShieldIcon, HeartIcon, TrendingUpIcon, DollarSignIcon, FishIcon, PercentIcon, ShoppingCartIcon, ArrowUpIcon, ArrowDownIcon, ActivityIcon, MapPinIcon, CheckCircleIcon, AlertTriangleIcon, BarChart2Icon, PieChartIcon, CalendarIcon, LineChartIcon, ClockIcon, RefreshCwIcon, UserPlusIcon, UserMinusIcon, CircleDollarSignIcon, Wallet, WalletIcon } from 'lucide-react';
export const SuperAdminHome: React.FC = () => {
  const {
    darkMode
  } = useTheme();
  const stats = [{
    name: 'Total Users',
    value: '12,458',
    change: '+12%',
    icon: <Users2Icon className="h-6 w-6" />,
    color: 'bg-blue-600'
  }, {
    name: 'Active Admins',
    value: '48',
    change: '+2',
    icon: <ShieldIcon className="h-6 w-6" />,
    color: 'bg-purple-600'
  }, {
    name: 'AquaBites Sold',
    value: '1.25M',
    change: '+18%',
    icon: <FishIcon className="h-6 w-6" />,
    color: 'bg-teal-600'
  }, {
    name: 'Insurance Coverage',
    value: '₱85.4M',
    change: '+8.2%',
    icon: <HeartIcon className="h-6 w-6" />,
    color: 'bg-green-600'
  }];
  const financialStats = [{
    name: 'Monthly Revenue',
    value: '₱2.8M',
    change: '+5.3%',
    isPositive: true
  }, {
    name: 'Insurance Claims',
    value: '₱450K',
    change: '+2.1%',
    isPositive: false
  }, {
    name: 'Trading Volume',
    value: '₱4.2M',
    change: '+12.4%',
    isPositive: true
  }, {
    name: 'Profit Margin',
    value: '32%',
    change: '+1.8%',
    isPositive: true
  }];
  // Additional platform statistics
  const platformStats = [{
    name: 'Active Fishers',
    value: '8,942',
    change: '+5.2%',
    icon: <Users2Icon className="h-5 w-5" />,
    color: 'bg-teal-100 text-teal-600'
  }, {
    name: 'Daily Trades',
    value: '245',
    change: '+12.7%',
    icon: <ShoppingCartIcon className="h-5 w-5" />,
    color: 'bg-blue-100 text-blue-600'
  }, {
    name: 'Verification Rate',
    value: '94%',
    change: '+2.3%',
    icon: <CheckCircleIcon className="h-5 w-5" />,
    color: 'bg-green-100 text-green-600'
  }, {
    name: 'GPS Tracking',
    value: '6,541',
    change: '+8.9%',
    icon: <MapPinIcon className="h-5 w-5" />,
    color: 'bg-indigo-100 text-indigo-600'
  }, {
    name: 'System Uptime',
    value: '99.98%',
    change: '+0.02%',
    icon: <ActivityIcon className="h-5 w-5" />,
    color: 'bg-purple-100 text-purple-600'
  }, {
    name: 'Active Alerts',
    value: '12',
    change: '-3',
    icon: <AlertTriangleIcon className="h-5 w-5" />,
    color: 'bg-amber-100 text-amber-600'
  }];
  // Daily AquaBites sales data
  const dailyAquaBitesSales = [{
    day: 'Mon',
    sales: 4200
  }, {
    day: 'Tue',
    sales: 3800
  }, {
    day: 'Wed',
    sales: 5100
  }, {
    day: 'Thu',
    sales: 4700
  }, {
    day: 'Fri',
    sales: 6200
  }, {
    day: 'Sat',
    sales: 7500
  }, {
    day: 'Sun',
    sales: 5800
  }];
  // Insurance coverage by region
  const insuranceCoverage = [{
    region: 'Cebu',
    coverage: 24.5
  }, {
    region: 'Davao',
    coverage: 18.2
  }, {
    region: 'Palawan',
    coverage: 15.7
  }, {
    region: 'Iloilo',
    coverage: 12.3
  }, {
    region: 'Zamboanga',
    coverage: 8.9
  }, {
    region: 'Others',
    coverage: 20.4
  }];
  // New: User growth data for the last 12 months
  const userGrowthData = [{
    month: 'Jun',
    users: 8250
  }, {
    month: 'Jul',
    users: 8650
  }, {
    month: 'Aug',
    users: 9120
  }, {
    month: 'Sep',
    users: 9580
  }, {
    month: 'Oct',
    users: 10050
  }, {
    month: 'Nov',
    users: 10680
  }, {
    month: 'Dec',
    users: 11240
  }, {
    month: 'Jan',
    users: 11580
  }, {
    month: 'Feb',
    users: 11890
  }, {
    month: 'Mar',
    users: 12150
  }, {
    month: 'Apr',
    users: 12320
  }, {
    month: 'May',
    users: 12458
  }];
  // New: Monthly revenue breakdown
  const monthlyRevenueData = [{
    month: 'Jun',
    aquabites: 0.8,
    insurance: 0.6,
    trading: 0.4
  }, {
    month: 'Jul',
    aquabites: 0.9,
    insurance: 0.7,
    trading: 0.5
  }, {
    month: 'Aug',
    aquabites: 1.0,
    insurance: 0.7,
    trading: 0.6
  }, {
    month: 'Sep',
    aquabites: 1.1,
    insurance: 0.8,
    trading: 0.7
  }, {
    month: 'Oct',
    aquabites: 1.2,
    insurance: 0.9,
    trading: 0.8
  }, {
    month: 'Nov',
    aquabites: 1.3,
    insurance: 1.0,
    trading: 0.9
  }, {
    month: 'Dec',
    aquabites: 1.5,
    insurance: 1.2,
    trading: 1.0
  }, {
    month: 'Jan',
    aquabites: 1.4,
    insurance: 1.1,
    trading: 0.9
  }, {
    month: 'Feb',
    aquabites: 1.3,
    insurance: 1.0,
    trading: 0.8
  }, {
    month: 'Mar',
    aquabites: 1.2,
    insurance: 0.9,
    trading: 0.7
  }, {
    month: 'Apr',
    aquabites: 1.3,
    insurance: 1.0,
    trading: 0.8
  }, {
    month: 'May',
    aquabites: 1.4,
    insurance: 1.1,
    trading: 0.9
  }];
  // New: Daily trading activity
  const dailyTradingData = [{
    hour: '00:00',
    volume: 15
  }, {
    hour: '02:00',
    volume: 8
  }, {
    hour: '04:00',
    volume: 5
  }, {
    hour: '06:00',
    volume: 12
  }, {
    hour: '08:00',
    volume: 28
  }, {
    hour: '10:00',
    volume: 42
  }, {
    hour: '12:00',
    volume: 35
  }, {
    hour: '14:00',
    volume: 40
  }, {
    hour: '16:00',
    volume: 45
  }, {
    hour: '18:00',
    volume: 32
  }, {
    hour: '20:00',
    volume: 25
  }, {
    hour: '22:00',
    volume: 18
  }];
  // New: User activity metrics
  const userActivityMetrics = [{
    name: 'Daily Active Users',
    value: '5,842',
    change: '+8.3%',
    icon: <Users2Icon className="h-5 w-5" />,
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
    icon: <ClockIcon className="h-5 w-5" />,
    color: 'bg-purple-600'
  }];
  // New: Financial performance indicators
  const financialPerformanceData = [{
    name: 'Total Revenue YTD',
    value: '₱16.5M',
    change: '+22.4%',
    icon: <DollarSignIcon className="h-5 w-5" />,
    color: 'bg-teal-600'
  }, {
    name: 'Total Profit YTD',
    value: '₱5.28M',
    change: '+18.7%',
    icon: <CircleDollarSignIcon className="h-5 w-5" />,
    color: 'bg-green-600'
  }, {
    name: 'Avg. Transaction Value',
    value: '₱852',
    change: '+5.3%',
    icon: <WalletIcon className="h-5 w-5" />,
    color: 'bg-blue-600'
  }, {
    name: 'Conversion Rate',
    value: '8.7%',
    change: '+1.2%',
    icon: <RefreshCwIcon className="h-5 w-5" />,
    color: 'bg-indigo-600'
  }];
  return <div>
      <div className="mb-6">
        <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          Super Admin Dashboard
        </h1>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Overview of the entire AquaSure ecosystem
        </p>
      </div>
      {/* Main KPI Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map(stat => <div key={stat.name} className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
            <div className="flex items-center">
              <div className={`flex-shrink-0 rounded-md p-3 ${stat.color} text-white`}>
                {stat.icon}
              </div>
              <div className="ml-5 w-0 flex-1">
                <dt className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'} truncate`}>
                  {stat.name}
                </dt>
                <dd className="flex items-baseline">
                  <div className={`text-2xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {stat.value}
                  </div>
                  <div className={`ml-2 flex items-baseline text-sm font-semibold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                    {stat.change}
                  </div>
                </dd>
              </div>
            </div>
          </div>)}
      </div>
      {/* Financial Overview */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            Financial Overview
          </h2>
          <div className="flex space-x-2">
            <select className={`text-sm border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-700'} rounded-md px-3 py-1`}>
              <option>Last 30 days</option>
              <option>Last Quarter</option>
              <option>Year to Date</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {financialStats.map((stat, index) => <div key={index} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg border p-4`}>
              <div className="flex justify-between items-start">
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {stat.name}
                  </p>
                  <p className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {stat.value}
                  </p>
                </div>
                <span className={`flex items-center text-sm ${stat.isPositive ? darkMode ? 'text-green-400' : 'text-green-600' : darkMode ? 'text-red-400' : 'text-red-600'}`}>
                  {stat.isPositive ? <ArrowUpIcon className="h-4 w-4 mr-1" /> : <ArrowDownIcon className="h-4 w-4 mr-1" />}
                  {stat.change}
                </span>
              </div>
            </div>)}
        </div>
      </div>
      {/* NEW: Detailed Financial Performance */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border mb-8 transition-colors duration-300`}>
        <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          Financial Performance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {financialPerformanceData.map((item, index) => <div key={index} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg`}>
              <div className="flex items-center mb-2">
                <div className={`p-2 rounded-full ${darkMode ? item.color.replace('bg-', 'bg-opacity-20 bg-') : item.color.replace('bg-', 'bg-opacity-20 bg-')} ${darkMode ? item.color.replace('bg-', 'text-').replace('600', '400') : item.color.replace('bg-', 'text-')}`}>
                  {item.icon}
                </div>
                <p className={`ml-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {item.name}
                </p>
              </div>
              <div className="flex items-baseline">
                <p className={`text-xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {item.value}
                </p>
                <p className={`ml-2 text-xs font-medium ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                  {item.change}
                </p>
              </div>
            </div>)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Monthly Revenue Breakdown */}
          <div>
            <h3 className={`text-md font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3`}>
              Monthly Revenue Breakdown (₱ Millions)
            </h3>
            <div className="h-64 relative">
              <div className="absolute inset-0 flex items-end justify-between px-2">
                {monthlyRevenueData.map((item, i) => {
                const total = item.aquabites + item.insurance + item.trading;
                const maxHeight = 180; // Maximum height in pixels
                const scale = maxHeight / 3; // Scale factor (assuming max value around 3M)
                return <div key={i} className="flex flex-col items-center w-1/12">
                      <div className="relative w-12">
                        <div className={`${darkMode ? 'bg-teal-600' : 'bg-teal-500'} absolute bottom-0 w-full rounded-t transition-colors duration-300`} style={{
                      height: `${item.aquabites * scale}px`
                    }}></div>
                        <div className={`${darkMode ? 'bg-blue-600' : 'bg-blue-500'} absolute bottom-0 w-full rounded-t transition-colors duration-300`} style={{
                      height: `${item.insurance * scale}px`,
                      transform: `translateY(-${item.aquabites * scale}px)`
                    }}></div>
                        <div className={`${darkMode ? 'bg-purple-600' : 'bg-purple-500'} absolute bottom-0 w-full rounded-t transition-colors duration-300`} style={{
                      height: `${item.trading * scale}px`,
                      transform: `translateY(-${(item.aquabites + item.insurance) * scale}px)`
                    }}></div>
                      </div>
                      <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-2`}>
                        {item.month}
                      </div>
                    </div>;
              })}
              </div>
              <div className={`absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <div>₱3.0M</div>
                <div>₱2.0M</div>
                <div>₱1.0M</div>
                <div>₱0</div>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mt-2">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-teal-600' : 'bg-teal-500'}`}></div>
                <span className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'} ml-1`}>
                  AquaBites
                </span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-blue-600' : 'bg-blue-500'}`}></div>
                <span className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'} ml-1`}>
                  Insurance
                </span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-purple-600' : 'bg-purple-500'}`}></div>
                <span className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'} ml-1`}>
                  Trading
                </span>
              </div>
            </div>
          </div>
          {/* Daily Trading Volume */}
          <div>
            <h3 className={`text-md font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3`}>
              24-Hour Trading Volume
            </h3>
            <div className="h-64 relative">
              <div className="absolute inset-0 flex items-end justify-between px-2">
                {dailyTradingData.map((item, i) => <div key={i} className="flex flex-col items-center w-1/12">
                    <div className={`${darkMode ? 'bg-indigo-600' : 'bg-indigo-500'} rounded-t w-8 transition-colors duration-300`} style={{
                  height: `${item.volume / 45 * 180}px`,
                  maxHeight: '180px',
                  minHeight: '5px'
                }}></div>
                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-2`}>
                      {item.hour}
                    </div>
                  </div>)}
              </div>
              <div className={`absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <div>45</div>
                <div>30</div>
                <div>15</div>
                <div>0</div>
              </div>
            </div>
            <div className="text-center mt-2">
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Total Trades Today: <span className="font-semibold">245</span>
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Total Volume: <span className="font-semibold">₱1.85M</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* NEW: User Activity & Growth */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border mb-8 transition-colors duration-300`}>
        <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          User Activity & Growth
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {userActivityMetrics.map((item, index) => <div key={index} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg`}>
              <div className="flex items-center mb-2">
                <div className={`p-2 rounded-full ${darkMode ? item.color.replace('bg-', 'bg-opacity-20 bg-') : item.color.replace('bg-', 'bg-opacity-20 bg-')} ${darkMode ? item.color.replace('bg-', 'text-').replace('600', '400') : item.color.replace('bg-', 'text-')}`}>
                  {item.icon}
                </div>
                <p className={`ml-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {item.name}
                </p>
              </div>
              <div className="flex items-baseline">
                <p className={`text-xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {item.value}
                </p>
                <p className={`ml-2 text-xs font-medium ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                  {item.change}
                </p>
              </div>
            </div>)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Growth Chart */}
          <div>
            <h3 className={`text-md font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3`}>
              User Growth (Last 12 Months)
            </h3>
            <div className="h-64 relative">
              <div className="absolute inset-0">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={darkMode ? 'rgba(56, 189, 248, 0.2)' : 'rgba(56, 189, 248, 0.3)'} />
                      <stop offset="100%" stopColor={darkMode ? 'rgba(56, 189, 248, 0)' : 'rgba(56, 189, 248, 0)'} />
                    </linearGradient>
                  </defs>
                  {/* Area under the line */}
                  <path d={`
                      M 0 ${100 - userGrowthData[0].users / 12500 * 100}
                      ${userGrowthData.map((point, i) => `L ${i / (userGrowthData.length - 1) * 100} ${100 - point.users / 12500 * 100}`).join(' ')}
                      L 100 100
                      L 0 100
                      Z
                    `} fill="url(#gradient)" />
                  {/* Line */}
                  <path d={`
                      M 0 ${100 - userGrowthData[0].users / 12500 * 100}
                      ${userGrowthData.map((point, i) => `L ${i / (userGrowthData.length - 1) * 100} ${100 - point.users / 12500 * 100}`).join(' ')}
                    `} fill="none" stroke={darkMode ? '#38bdf8' : '#0284c7'} strokeWidth="1.5" />
                  {/* Points */}
                  {userGrowthData.map((point, i) => <circle key={i} cx={`${i / (userGrowthData.length - 1) * 100}`} cy={`${100 - point.users / 12500 * 100}`} r="1.5" fill={darkMode ? '#38bdf8' : '#0284c7'} />)}
                </svg>
              </div>
              {/* Y-axis labels */}
              <div className={`absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <div>12.5K</div>
                <div>10.0K</div>
                <div>7.5K</div>
                <div>5.0K</div>
              </div>
              {/* X-axis labels */}
              <div className={`absolute left-0 right-0 bottom-0 flex justify-between text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {userGrowthData.filter((_, i) => i % 2 === 0).map((point, i) => <div key={i} className="text-center">
                      {point.month}
                    </div>)}
              </div>
            </div>
            <div className="text-center mt-4">
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <span className="font-semibold">+50.9%</span> user growth in the
                last 12 months
              </p>
            </div>
          </div>
          {/* User Activity by Feature */}
          <div>
            <h3 className={`text-md font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3`}>
              User Activity by Feature
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    AquaSure Market
                  </span>
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    78%
                  </span>
                </div>
                <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5`}>
                  <div className={`${darkMode ? 'bg-teal-600' : 'bg-teal-500'} h-2.5 rounded-full`} style={{
                  width: '78%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Insurance Hub
                  </span>
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    65%
                  </span>
                </div>
                <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5`}>
                  <div className={`${darkMode ? 'bg-blue-600' : 'bg-blue-500'} h-2.5 rounded-full`} style={{
                  width: '65%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    GPS Tracking
                  </span>
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    52%
                  </span>
                </div>
                <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5`}>
                  <div className={`${darkMode ? 'bg-indigo-600' : 'bg-indigo-500'} h-2.5 rounded-full`} style={{
                  width: '52%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Weather Alerts
                  </span>
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    48%
                  </span>
                </div>
                <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5`}>
                  <div className={`${darkMode ? 'bg-purple-600' : 'bg-purple-500'} h-2.5 rounded-full`} style={{
                  width: '48%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Community Chat
                  </span>
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    42%
                  </span>
                </div>
                <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5`}>
                  <div className={`${darkMode ? 'bg-green-600' : 'bg-green-500'} h-2.5 rounded-full`} style={{
                  width: '42%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Emergency Reports
                  </span>
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    12%
                  </span>
                </div>
                <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5`}>
                  <div className={`${darkMode ? 'bg-red-600' : 'bg-red-500'} h-2.5 rounded-full`} style={{
                  width: '12%'
                }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Platform Statistics */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border mb-8 transition-colors duration-300`}>
        <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
          Platform Statistics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {platformStats.map((stat, index) => <div key={index} className={`${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'} rounded-lg border p-4`}>
              <div className="flex items-center justify-center mb-2">
                <div className={`rounded-full p-2 ${darkMode ? stat.color.replace('bg-', 'bg-opacity-20 bg-').replace('text-', 'text-').replace('600', '400') : stat.color}`}>
                  {stat.icon}
                </div>
              </div>
              <div className="text-center">
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {stat.name}
                </p>
                <p className={`text-xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {stat.value}
                </p>
                <p className={`text-xs ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                  {stat.change}
                </p>
              </div>
            </div>)}
        </div>
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
            Daily AquaBites Sales
          </h2>
          <div className="h-64 relative">
            {/* Chart visualization */}
            <div className="absolute inset-0 flex items-end justify-between px-2">
              {dailyAquaBitesSales.map((item, i) => <div key={i} className="flex flex-col items-center w-1/7">
                  <div className={`${darkMode ? 'bg-teal-600' : 'bg-teal-500'} rounded-t w-12 transition-colors duration-300`} style={{
                height: `${item.sales / 8000 * 100}%`,
                maxHeight: '90%',
                minHeight: '10%'
              }}></div>
                  <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                    {item.day}
                  </div>
                </div>)}
            </div>
            <div className={`absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <div>8K</div>
              <div>6K</div>
              <div>4K</div>
              <div>2K</div>
              <div>0</div>
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
            Insurance Coverage by Region
          </h2>
          <div className="h-64 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-48 h-48 rounded-full border-8 ${darkMode ? 'border-gray-700' : 'border-gray-100'} relative`}>
                {insuranceCoverage.map((item, i) => {
                // Calculate the rotation and position for each segment
                const prevTotal = insuranceCoverage.slice(0, i).reduce((sum, curr) => sum + curr.coverage, 0);
                const total = prevTotal + item.coverage;
                const prevAngle = prevTotal / 100 * 360;
                const angle = item.coverage / 100 * 360;
                // Generate a color based on index
                const colors = [darkMode ? 'bg-teal-700' : 'bg-teal-500', darkMode ? 'bg-blue-700' : 'bg-blue-500', darkMode ? 'bg-indigo-700' : 'bg-indigo-500', darkMode ? 'bg-purple-700' : 'bg-purple-500', darkMode ? 'bg-green-700' : 'bg-green-500', darkMode ? 'bg-yellow-700' : 'bg-yellow-500'];
                const color = colors[i % colors.length];
                // Position the label
                const labelAngle = (prevTotal + item.coverage / 2) / 100 * 360;
                const labelRadians = (labelAngle - 90) * (Math.PI / 180);
                const labelX = 80 * Math.cos(labelRadians);
                const labelY = 80 * Math.sin(labelRadians);
                return <div key={i} className="absolute inset-0">
                      <div className={`absolute top-0 left-0 w-full h-full ${color} transition-colors duration-300`} style={{
                    clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos((prevAngle - 90) * (Math.PI / 180))}% ${50 + 50 * Math.sin((prevAngle - 90) * (Math.PI / 180))}%, ${50 + 50 * Math.cos((prevAngle + angle - 90) * (Math.PI / 180))}% ${50 + 50 * Math.sin((prevAngle + angle - 90) * (Math.PI / 180))}%)`
                  }}></div>
                      <div className={`absolute text-xs font-medium ${darkMode ? 'text-gray-100' : 'text-white'}`} style={{
                    left: `calc(50% + ${labelX}px)`,
                    top: `calc(50% + ${labelY}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}>
                        {item.coverage}%
                      </div>
                    </div>;
              })}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-24 h-24 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-full transition-colors duration-300`}></div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0">
              <div className="flex flex-wrap justify-center gap-4">
                {insuranceCoverage.map((item, i) => {
                const colors = [darkMode ? 'bg-teal-700' : 'bg-teal-500', darkMode ? 'bg-blue-700' : 'bg-blue-500', darkMode ? 'bg-indigo-700' : 'bg-indigo-500', darkMode ? 'bg-purple-700' : 'bg-purple-500', darkMode ? 'bg-green-700' : 'bg-green-500', darkMode ? 'bg-yellow-700' : 'bg-yellow-500'];
                const color = colors[i % colors.length];
                return <div key={i} className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${color} mr-1 transition-colors duration-300`}></div>
                      <span className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {item.region}
                      </span>
                    </div>;
              })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Regional Performance */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border mb-8 transition-colors duration-300`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            Regional Performance
          </h2>
          <a href="/super-admin/regions" className={`text-sm ${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-800'}`}>
            View All
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className={`min-w-full divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
            <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
              <tr>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Region
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Active Users
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Insurance Coverage
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Trading Volume
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody className={`${darkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}`}>
              {[{
              region: 'Cebu',
              users: 2456,
              coverage: '₱12.5M',
              volume: '₱1.2M',
              status: 'Excellent'
            }, {
              region: 'Davao',
              users: 1845,
              coverage: '₱9.8M',
              volume: '₱0.9M',
              status: 'Good'
            }, {
              region: 'Palawan',
              users: 1240,
              coverage: '₱7.2M',
              volume: '₱0.8M',
              status: 'Good'
            }, {
              region: 'Iloilo',
              users: 950,
              coverage: '₱5.1M',
              volume: '₱0.5M',
              status: 'Average'
            }, {
              region: 'Zamboanga',
              users: 720,
              coverage: '₱3.8M',
              volume: '₱0.3M',
              status: 'Needs Attention'
            }].map((region, index) => <tr key={index} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {region.region}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                    {region.users.toLocaleString()}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                    {region.coverage}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                    {region.volume}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${region.status === 'Excellent' ? darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800' : region.status === 'Good' ? darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800' : region.status === 'Average' ? darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800' : darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'}`}>
                      {region.status}
                    </span>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Recent Activity */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            Recent Activity
          </h2>
          <a href="/super-admin/activity-logs" className={`text-sm ${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-800'}`}>
            View All
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className={`min-w-full divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
            <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
              <tr>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Event
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  User
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Time
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody className={`${darkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}`}>
              {[{
              event: 'New Admin Added',
              user: 'Super Admin',
              time: '5 minutes ago',
              status: 'Completed'
            }, {
              event: 'Insurance Claim Approved',
              user: 'LGU Admin - Cebu',
              time: '1 hour ago',
              status: 'Completed'
            }, {
              event: 'System Update',
              user: 'System',
              time: '2 hours ago',
              status: 'Completed'
            }, {
              event: 'Database Backup',
              user: 'System',
              time: '6 hours ago',
              status: 'Completed'
            }, {
              event: 'New Announcement Created',
              user: 'Super Admin',
              time: '1 day ago',
              status: 'Completed'
            }].map((activity, index) => <tr key={index} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {activity.event}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                    {activity.user}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                    {activity.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
                      {activity.status}
                    </span>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};