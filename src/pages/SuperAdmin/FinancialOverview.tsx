import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { DollarSignIcon, TrendingUpIcon, BarChart2Icon, PieChartIcon, ArrowUpIcon, ArrowDownIcon, FishIcon, ShieldIcon, ShoppingCartIcon, CreditCardIcon, CalendarIcon, FilterIcon, DownloadIcon, RefreshCwIcon, ChevronRightIcon, GlobeIcon, HeartIcon, AlertTriangleIcon, CheckCircleIcon, Users2Icon } from 'lucide-react';
export const FinancialOverview: React.FC = () => {
  const [timeRange, setTimeRange] = useState('monthly');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const {
    darkMode
  } = useTheme();
  const financialStats = [{
    name: 'Total Revenue',
    value: '₱28.5M',
    change: '+15.3%',
    icon: <DollarSignIcon className="h-6 w-6" />,
    color: 'bg-green-600'
  }, {
    name: 'AquaBite Sales',
    value: '₱12.8M',
    change: '+18.7%',
    icon: <FishIcon className="h-6 w-6" />,
    color: 'bg-blue-600'
  }, {
    name: 'Insurance Revenue',
    value: '₱8.4M',
    change: '+9.2%',
    icon: <ShieldIcon className="h-6 w-6" />,
    color: 'bg-purple-600'
  }, {
    name: 'Trading Volume',
    value: '₱42.6M',
    change: '+22.1%',
    icon: <ShoppingCartIcon className="h-6 w-6" />,
    color: 'bg-teal-600'
  }];
  const revenueBreakdown = [{
    source: 'AquaBite Sales',
    amount: 12800000,
    percentage: 45,
    color: 'bg-blue-500'
  }, {
    source: 'Insurance Premiums',
    amount: 8400000,
    percentage: 29,
    color: 'bg-purple-500'
  }, {
    source: 'Trading Fees',
    amount: 4250000,
    percentage: 15,
    color: 'bg-teal-500'
  }, {
    source: 'Verification Fees',
    amount: 1850000,
    percentage: 6,
    color: 'bg-green-500'
  }, {
    source: 'Other Services',
    amount: 1200000,
    percentage: 5,
    color: 'bg-amber-500'
  }];
  const monthlyRevenue = [{
    month: 'Jan',
    revenue: 1850000,
    insurance: 650000,
    aquabites: 850000,
    trading: 350000
  }, {
    month: 'Feb',
    revenue: 2100000,
    insurance: 700000,
    aquabites: 950000,
    trading: 450000
  }, {
    month: 'Mar',
    revenue: 2300000,
    insurance: 750000,
    aquabites: 1050000,
    trading: 500000
  }, {
    month: 'Apr',
    revenue: 2450000,
    insurance: 800000,
    aquabites: 1100000,
    trading: 550000
  }, {
    month: 'May',
    revenue: 2650000,
    insurance: 850000,
    aquabites: 1200000,
    trading: 600000
  }, {
    month: 'Jun',
    revenue: 2850000,
    insurance: 900000,
    aquabites: 1300000,
    trading: 650000
  }];
  const regionalData = [{
    region: 'Cebu',
    revenue: 8500000,
    growth: '+18%',
    isPositive: true,
    users: 2456
  }, {
    region: 'Davao',
    revenue: 6200000,
    growth: '+15%',
    isPositive: true,
    users: 1845
  }, {
    region: 'Palawan',
    revenue: 4800000,
    growth: '+12%',
    isPositive: true,
    users: 1240
  }, {
    region: 'Iloilo',
    revenue: 3500000,
    growth: '+9%',
    isPositive: true,
    users: 950
  }, {
    region: 'Zamboanga',
    revenue: 2800000,
    growth: '+7%',
    isPositive: true,
    users: 720
  }];
  // Insurance metrics
  const insuranceMetrics = {
    totalCoverage: '₱85.4M',
    activePolicies: 8942,
    premiumRevenue: '₱8.4M',
    claimsPaid: '₱3.2M',
    avgPremium: '₱940',
    claimRate: '3.8%',
    renewalRate: '87%',
    growth: '+12.3%'
  };
  // Claims data
  const claimsData = [{
    id: 'CLM-001245',
    fisher: 'Juan Dela Cruz',
    region: 'Cebu',
    amount: '₱25,000',
    status: 'Approved',
    date: '2023-05-15'
  }, {
    id: 'CLM-001246',
    fisher: 'Maria Santos',
    region: 'Davao',
    amount: '₱18,500',
    status: 'Pending',
    date: '2023-05-14'
  }, {
    id: 'CLM-001247',
    fisher: 'Pedro Reyes',
    region: 'Palawan',
    amount: '₱32,000',
    status: 'Approved',
    date: '2023-05-12'
  }, {
    id: 'CLM-001248',
    fisher: 'Ana Lim',
    region: 'Iloilo',
    amount: '₱15,000',
    status: 'Rejected',
    date: '2023-05-10'
  }, {
    id: 'CLM-001249',
    fisher: 'Roberto Cruz',
    region: 'Zamboanga',
    amount: '₱22,500',
    status: 'Approved',
    date: '2023-05-08'
  }];
  // AquaBites sales data
  const aquabitesData = {
    totalSold: '1.25M',
    revenue: '₱12.8M',
    avgPurchase: '₱850',
    topSeller: 'Premium Pack (5000)',
    growth: '+18.7%'
  };
  // Trading data
  const tradingData = {
    volume: '₱42.6M',
    transactions: '15,842',
    avgTransaction: '₱2,689',
    fees: '₱4.25M',
    growth: '+22.1%'
  };
  // Function to get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Approved':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
            Approved
          </span>;
      case 'Pending':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800'}`}>
            Pending
          </span>;
      case 'Rejected':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'}`}>
            Rejected
          </span>;
      default:
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
            {status}
          </span>;
    }
  };
  return <div>
      <div className="mb-6">
        <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          Financial Overview
        </h1>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Comprehensive view of AquaSure's financial performance
        </p>
      </div>
      {/* Time range and filters */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 rounded-lg border mb-6 transition-colors duration-300`}>
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center space-x-4">
            <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Financial Dashboard
            </h2>
            <div className={`flex border ${darkMode ? 'border-gray-600' : 'border-gray-300'} rounded-md overflow-hidden`}>
              <button className={`px-3 py-1.5 text-sm ${timeRange === 'daily' ? darkMode ? 'bg-teal-900 text-teal-100' : 'bg-teal-500 text-white' : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700'}`} onClick={() => setTimeRange('daily')}>
                Daily
              </button>
              <button className={`px-3 py-1.5 text-sm ${timeRange === 'weekly' ? darkMode ? 'bg-teal-900 text-teal-100' : 'bg-teal-500 text-white' : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700'}`} onClick={() => setTimeRange('weekly')}>
                Weekly
              </button>
              <button className={`px-3 py-1.5 text-sm ${timeRange === 'monthly' ? darkMode ? 'bg-teal-900 text-teal-100' : 'bg-teal-500 text-white' : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700'}`} onClick={() => setTimeRange('monthly')}>
                Monthly
              </button>
              <button className={`px-3 py-1.5 text-sm ${timeRange === 'yearly' ? darkMode ? 'bg-teal-900 text-teal-100' : 'bg-teal-500 text-white' : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700'}`} onClick={() => setTimeRange('yearly')}>
                Yearly
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <select className={`block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-700'} focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md`} value={selectedRegion} onChange={e => setSelectedRegion(e.target.value)}>
                <option value="all">All Regions</option>
                <option value="Cebu">Cebu</option>
                <option value="Davao">Davao</option>
                <option value="Palawan">Palawan</option>
                <option value="Iloilo">Iloilo</option>
                <option value="Zamboanga">Zamboanga</option>
              </select>
            </div>
            <div className="relative">
              <select className={`block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-300 bg-white text-gray-700'} focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md`} value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                <option value="all">All Categories</option>
                <option value="aquabites">AquaBites</option>
                <option value="insurance">Insurance</option>
                <option value="trading">Trading</option>
                <option value="verification">Verification</option>
              </select>
            </div>
            <button className={`inline-flex items-center px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-300`}>
              <CalendarIcon className="h-4 w-4 mr-2" />
              Custom Date
            </button>
            <button className={`inline-flex items-center px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-300`}>
              <DownloadIcon className="h-4 w-4 mr-2" />
              Export
            </button>
          </div>
        </div>
      </div>
      {/* Financial Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {financialStats.map(stat => <div key={stat.name} className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
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
      {/* Revenue Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
            Monthly Revenue Trends
          </h2>
          <div className="h-64 relative">
            <div className="absolute inset-0 flex items-end justify-between px-8">
              {monthlyRevenue.map((month, i) => <div key={i} className="flex flex-col items-center">
                  <div className="relative w-12 mb-1">
                    <div className={`${darkMode ? 'bg-purple-600' : 'bg-purple-500'} absolute bottom-0 w-full rounded-t transition-colors duration-300`} style={{
                  height: `${month.insurance / month.revenue * 140}px`
                }}></div>
                    <div className={`${darkMode ? 'bg-blue-600' : 'bg-blue-500'} absolute bottom-0 w-full rounded-t transition-colors duration-300`} style={{
                  height: `${month.aquabites / month.revenue * 140}px`,
                  transform: `translateY(-${month.insurance / month.revenue * 140}px)`
                }}></div>
                    <div className={`${darkMode ? 'bg-teal-600' : 'bg-teal-500'} absolute bottom-0 w-full rounded-t transition-colors duration-300`} style={{
                  height: `${month.trading / month.revenue * 140}px`,
                  transform: `translateY(-${(month.insurance + month.aquabites) / month.revenue * 140}px)`
                }}></div>
                  </div>
                  <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-2`}>
                    {month.month}
                  </div>
                </div>)}
            </div>
            <div className={`absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <div>₱3.0M</div>
              <div>₱2.5M</div>
              <div>₱2.0M</div>
              <div>₱1.5M</div>
              <div>₱1.0M</div>
              <div>₱0.5M</div>
              <div>₱0</div>
            </div>
            <div className="absolute bottom-0 left-0 right-0">
              <div className="flex justify-center space-x-4 mt-2">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-blue-600' : 'bg-blue-500'}`}></div>
                  <span className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'} ml-1`}>
                    AquaBites
                  </span>
                </div>
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-purple-600' : 'bg-purple-500'}`}></div>
                  <span className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'} ml-1`}>
                    Insurance
                  </span>
                </div>
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-teal-600' : 'bg-teal-500'}`}></div>
                  <span className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'} ml-1`}>
                    Trading
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
            Revenue Breakdown
          </h2>
          <div className="h-64 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-48 h-48 rounded-full ${darkMode ? 'border-8 border-gray-700' : 'border-8 border-gray-100'} relative`}>
                {revenueBreakdown.map((item, i) => {
                // Calculate the rotation and position for each segment
                const prevTotal = revenueBreakdown.slice(0, i).reduce((sum, curr) => sum + curr.percentage, 0);
                const total = prevTotal + item.percentage;
                const prevAngle = prevTotal / 100 * 360;
                const angle = item.percentage / 100 * 360;
                // Position the label
                const labelAngle = (prevTotal + item.percentage / 2) / 100 * 360;
                const labelRadians = (labelAngle - 90) * (Math.PI / 180);
                const labelX = 80 * Math.cos(labelRadians);
                const labelY = 80 * Math.sin(labelRadians);
                // Adjust colors for dark mode
                const colors = {
                  'bg-blue-500': darkMode ? 'bg-blue-700' : 'bg-blue-500',
                  'bg-purple-500': darkMode ? 'bg-purple-700' : 'bg-purple-500',
                  'bg-teal-500': darkMode ? 'bg-teal-700' : 'bg-teal-500',
                  'bg-green-500': darkMode ? 'bg-green-700' : 'bg-green-500',
                  'bg-amber-500': darkMode ? 'bg-amber-700' : 'bg-amber-500'
                };
                return <div key={i} className="absolute inset-0">
                      <div className={`absolute top-0 left-0 w-full h-full ${colors[item.color]} transition-colors duration-300`} style={{
                    clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos((prevAngle - 90) * (Math.PI / 180))}% ${50 + 50 * Math.sin((prevAngle - 90) * (Math.PI / 180))}%, ${50 + 50 * Math.cos((prevAngle + angle - 90) * (Math.PI / 180))}% ${50 + 50 * Math.sin((prevAngle + angle - 90) * (Math.PI / 180))}%)`
                  }}></div>
                      <div className={`absolute text-xs font-medium ${darkMode ? 'text-gray-100' : 'text-white'}`} style={{
                    left: `calc(50% + ${labelX}px)`,
                    top: `calc(50% + ${labelY}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}>
                        {item.percentage}%
                      </div>
                    </div>;
              })}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-24 h-24 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-full flex items-center justify-center transition-colors duration-300`}>
                    <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Total Revenue
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0">
              <div className="flex flex-wrap justify-center gap-4">
                {revenueBreakdown.map((item, i) => {
                const colors = {
                  'bg-blue-500': darkMode ? 'bg-blue-700' : 'bg-blue-500',
                  'bg-purple-500': darkMode ? 'bg-purple-700' : 'bg-purple-500',
                  'bg-teal-500': darkMode ? 'bg-teal-700' : 'bg-teal-500',
                  'bg-green-500': darkMode ? 'bg-green-700' : 'bg-green-500',
                  'bg-amber-500': darkMode ? 'bg-amber-700' : 'bg-amber-500'
                };
                return <div key={i} className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${colors[item.color]} mr-1 transition-colors duration-300`}></div>
                      <span className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {item.source} (₱{(item.amount / 1000000).toFixed(1)}M)
                      </span>
                    </div>;
              })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Insurance Performance */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border mb-8 transition-colors duration-300`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            Insurance Performance
          </h2>
          <button className={`${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-800'} text-sm flex items-center`}>
            View Detailed Report
            <ChevronRightIcon className="h-4 w-4 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg transition-colors duration-300`}>
            <div className="flex items-center">
              <div className={`p-2 rounded-full ${darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-600'} mr-3`}>
                <ShieldIcon className="h-5 w-5" />
              </div>
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Total Coverage
                </p>
                <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {insuranceMetrics.totalCoverage}
                </p>
              </div>
            </div>
            <div className={`mt-2 flex items-center text-xs ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
              <ArrowUpIcon className="h-3 w-3 mr-1" />
              {insuranceMetrics.growth} from last month
            </div>
          </div>
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg transition-colors duration-300`}>
            <div className="flex items-center">
              <div className={`p-2 rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'} mr-3`}>
                <Users2Icon className="h-5 w-5" />
              </div>
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Active Policies
                </p>
                <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {insuranceMetrics.activePolicies.toLocaleString()}
                </p>
              </div>
            </div>
            <div className={`mt-2 flex items-center text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <p>Renewal Rate: {insuranceMetrics.renewalRate}</p>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg transition-colors duration-300`}>
            <div className="flex items-center">
              <div className={`p-2 rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'} mr-3`}>
                <DollarSignIcon className="h-5 w-5" />
              </div>
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Premium Revenue
                </p>
                <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {insuranceMetrics.premiumRevenue}
                </p>
              </div>
            </div>
            <div className={`mt-2 flex items-center text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <p>Avg Premium: {insuranceMetrics.avgPremium}</p>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg transition-colors duration-300`}>
            <div className="flex items-center">
              <div className={`p-2 rounded-full ${darkMode ? 'bg-amber-900/30 text-amber-400' : 'bg-amber-100 text-amber-600'} mr-3`}>
                <AlertTriangleIcon className="h-5 w-5" />
              </div>
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Claims Paid
                </p>
                <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {insuranceMetrics.claimsPaid}
                </p>
              </div>
            </div>
            <div className={`mt-2 flex items-center text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <p>Claim Rate: {insuranceMetrics.claimRate}</p>
            </div>
          </div>
        </div>
        <h3 className={`text-md font-medium ${darkMode ? 'text-gray-300' : 'text-gray-900'} mb-3`}>
          Recent Claims
        </h3>
        <div className="overflow-x-auto">
          <table className={`min-w-full divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
            <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <tr>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Claim ID
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Fisher
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Region
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Amount
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Status
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Date
                </th>
              </tr>
            </thead>
            <tbody className={`${darkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}`}>
              {claimsData.map((claim, index) => <tr key={index} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {claim.id}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                    {claim.fisher}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                    {claim.region}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                    {claim.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(claim.status)}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                    {claim.date}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      {/* AquaBites & Trading */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              AquaBites Sales
            </h2>
            <button className={`${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-800'} text-sm flex items-center`}>
              View Details
              <ChevronRightIcon className="h-4 w-4 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg transition-colors duration-300`}>
              <div className="flex items-center">
                <div className={`p-2 rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'} mr-3`}>
                  <FishIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Total Sold
                  </p>
                  <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {aquabitesData.totalSold}
                  </p>
                </div>
              </div>
            </div>
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg transition-colors duration-300`}>
              <div className="flex items-center">
                <div className={`p-2 rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'} mr-3`}>
                  <DollarSignIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Revenue
                  </p>
                  <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {aquabitesData.revenue}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Sales Growth
                </p>
                <p className={`text-sm font-medium ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                  {aquabitesData.growth}
                </p>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                <div className={`${darkMode ? 'bg-blue-600' : 'bg-blue-500'} h-2 rounded-full transition-colors duration-300`} style={{
                width: '75%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Top Seller
                </p>
                <p className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {aquabitesData.topSeller}
                </p>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                <div className={`${darkMode ? 'bg-teal-600' : 'bg-teal-500'} h-2 rounded-full transition-colors duration-300`} style={{
                width: '60%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Average Purchase
                </p>
                <p className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {aquabitesData.avgPurchase}
                </p>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                <div className={`${darkMode ? 'bg-purple-600' : 'bg-purple-500'} h-2 rounded-full transition-colors duration-300`} style={{
                width: '45%'
              }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Trading Activity
            </h2>
            <button className={`${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-800'} text-sm flex items-center`}>
              View Details
              <ChevronRightIcon className="h-4 w-4 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg transition-colors duration-300`}>
              <div className="flex items-center">
                <div className={`p-2 rounded-full ${darkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-100 text-teal-600'} mr-3`}>
                  <ShoppingCartIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Trading Volume
                  </p>
                  <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {tradingData.volume}
                  </p>
                </div>
              </div>
            </div>
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg transition-colors duration-300`}>
              <div className="flex items-center">
                <div className={`p-2 rounded-full ${darkMode ? 'bg-indigo-900/30 text-indigo-400' : 'bg-indigo-100 text-indigo-600'} mr-3`}>
                  <CreditCardIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Transactions
                  </p>
                  <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {tradingData.transactions}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Trading Growth
                </p>
                <p className={`text-sm font-medium ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                  {tradingData.growth}
                </p>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                <div className={`${darkMode ? 'bg-teal-600' : 'bg-teal-500'} h-2 rounded-full transition-colors duration-300`} style={{
                width: '85%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Fee Revenue
                </p>
                <p className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {tradingData.fees}
                </p>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                <div className={`${darkMode ? 'bg-green-600' : 'bg-green-500'} h-2 rounded-full transition-colors duration-300`} style={{
                width: '50%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Average Transaction
                </p>
                <p className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {tradingData.avgTransaction}
                </p>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
                <div className={`${darkMode ? 'bg-indigo-600' : 'bg-indigo-500'} h-2 rounded-full transition-colors duration-300`} style={{
                width: '65%'
              }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Regional Financial Performance */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border mb-8 transition-colors duration-300`}>
        <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
          Regional Financial Performance
        </h2>
        <div className="overflow-x-auto">
          <table className={`min-w-full divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
            <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <tr>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Region
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Revenue
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Growth
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Users
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Revenue per User
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Distribution
                </th>
              </tr>
            </thead>
            <tbody className={`${darkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}`}>
              {regionalData.map((region, index) => {
              const totalRevenue = regionalData.reduce((acc, r) => acc + r.revenue, 0);
              const percentage = (region.revenue / totalRevenue * 100).toFixed(1);
              const revenuePerUser = (region.revenue / region.users).toFixed(0);
              return <tr key={index} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      {region.region}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                      ₱{(region.revenue / 1000000).toFixed(1)}M
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`${region.isPositive ? darkMode ? 'text-green-400' : 'text-green-600' : darkMode ? 'text-red-400' : 'text-red-600'} flex items-center`}>
                        {region.isPositive ? <ArrowUpIcon className="h-4 w-4 mr-1" /> : <ArrowDownIcon className="h-4 w-4 mr-1" />}
                        {region.growth}
                      </span>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                      {region.users.toLocaleString()}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                      ₱{revenuePerUser}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`text-sm ${darkMode ? 'text-gray-100' : 'text-gray-900'} mr-2`}>
                          {percentage}%
                        </span>
                        <div className={`w-24 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5`}>
                          <div className={`${darkMode ? 'bg-teal-600' : 'bg-teal-500'} h-2.5 rounded-full transition-colors duration-300`} style={{
                        width: `${percentage}%`
                      }}></div>
                        </div>
                      </div>
                    </td>
                  </tr>;
            })}
            </tbody>
          </table>
        </div>
      </div>
      {/* Monthly Trends */}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
        <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
          Monthly Revenue Breakdown
        </h2>
        <div className="overflow-x-auto">
          <table className={`min-w-full divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
            <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <tr>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Month
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Total Revenue
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  AquaBite Sales
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Insurance Revenue
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Trading Revenue
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Growth
                </th>
              </tr>
            </thead>
            <tbody className={`${darkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}`}>
              {monthlyRevenue.map((month, index) => <tr key={index} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {month.month} 2023
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                    ₱{(month.revenue / 1000000).toFixed(2)}M
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                    ₱{(month.aquabites / 1000000).toFixed(2)}M
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                    ₱{(month.insurance / 1000000).toFixed(2)}M
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                    ₱{(month.trading / 1000000).toFixed(2)}M
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {index > 0 ? <span className={`flex items-center ${month.revenue > monthlyRevenue[index - 1].revenue ? darkMode ? 'text-green-400' : 'text-green-600' : darkMode ? 'text-red-400' : 'text-red-600'}`}>
                        {month.revenue > monthlyRevenue[index - 1].revenue ? <ArrowUpIcon className="h-4 w-4 mr-1" /> : <ArrowDownIcon className="h-4 w-4 mr-1" />}
                        {((month.revenue - monthlyRevenue[index - 1].revenue) / monthlyRevenue[index - 1].revenue * 100).toFixed(1)}
                        %
                      </span> : <span>-</span>}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};