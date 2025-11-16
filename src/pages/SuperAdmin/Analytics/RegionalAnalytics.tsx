import React, { useState } from 'react';
import { GlobeIcon, MapPinIcon, UsersIcon, TrendingUpIcon } from 'lucide-react';
export const RegionalAnalytics: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  // Mock data for regional user statistics
  const regions = [{
    name: 'Luzon',
    users: 6245,
    activeUsers: 4892,
    growth: '+12%'
  }, {
    name: 'Visayas',
    users: 4128,
    activeUsers: 3254,
    growth: '+8.5%'
  }, {
    name: 'Mindanao',
    users: 2085,
    activeUsers: 1696,
    growth: '+15.2%'
  }];
  // Mock data for active users by province
  const provinces = [{
    region: 'Luzon',
    name: 'Metro Manila',
    users: 1842,
    activeUsers: 1456,
    growth: '+9.2%'
  }, {
    region: 'Luzon',
    name: 'Batangas',
    users: 1245,
    activeUsers: 987,
    growth: '+11.5%'
  }, {
    region: 'Luzon',
    name: 'Pangasinan',
    users: 1058,
    activeUsers: 842,
    growth: '+14.2%'
  }, {
    region: 'Luzon',
    name: 'Pampanga',
    users: 985,
    activeUsers: 745,
    growth: '+10.8%'
  }, {
    region: 'Luzon',
    name: 'Ilocos Norte',
    users: 645,
    activeUsers: 487,
    growth: '+7.5%'
  }, {
    region: 'Luzon',
    name: 'Isabela',
    users: 470,
    activeUsers: 375,
    growth: '+6.2%'
  }, {
    region: 'Visayas',
    name: 'Cebu',
    users: 1456,
    activeUsers: 1245,
    growth: '+8.7%'
  }, {
    region: 'Visayas',
    name: 'Iloilo',
    users: 985,
    activeUsers: 756,
    growth: '+9.4%'
  }, {
    region: 'Visayas',
    name: 'Leyte',
    users: 845,
    activeUsers: 642,
    growth: '+7.8%'
  }, {
    region: 'Visayas',
    name: 'Bohol',
    users: 542,
    activeUsers: 412,
    growth: '+6.5%'
  }, {
    region: 'Visayas',
    name: 'Negros Occidental',
    users: 300,
    activeUsers: 199,
    growth: '+5.2%'
  }, {
    region: 'Mindanao',
    name: 'Davao',
    users: 985,
    activeUsers: 756,
    growth: '+16.5%'
  }, {
    region: 'Mindanao',
    name: 'Zamboanga',
    users: 542,
    activeUsers: 412,
    growth: '+14.2%'
  }, {
    region: 'Mindanao',
    name: 'South Cotabato',
    users: 358,
    activeUsers: 287,
    growth: '+12.8%'
  }, {
    region: 'Mindanao',
    name: 'Misamis Oriental',
    users: 200,
    activeUsers: 241,
    growth: '+18.5%'
  }];
  // Filter provinces by selected region
  const filteredProvinces = selectedRegion === 'All Regions' ? provinces : provinces.filter(province => province.region === selectedRegion);
  // Calculate totals
  const totalUsers = regions.reduce((sum, region) => sum + region.users, 0);
  const totalActiveUsers = regions.reduce((sum, region) => sum + region.activeUsers, 0);
  const averageGrowth = (regions.reduce((sum, region) => {
    return sum + parseFloat(region.growth.replace('+', '').replace('%', ''));
  }, 0) / regions.length).toFixed(1);
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Regional User Analytics
        </h1>
        <p className="text-sm text-gray-500">
          Track user distribution and activity across different regions
        </p>
      </div>
      {/* Regional Overview Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0 rounded-md p-3 bg-blue-600 text-white">
              <UsersIcon className="h-6 w-6" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Total Users
              </dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">
                  {totalUsers.toLocaleString()}
                </div>
              </dd>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0 rounded-md p-3 bg-teal-600 text-white">
              <UsersIcon className="h-6 w-6" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Active Users
              </dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">
                  {totalActiveUsers.toLocaleString()}
                </div>
                <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  {Math.round(totalActiveUsers / totalUsers * 100)}%
                </div>
              </dd>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0 rounded-md p-3 bg-indigo-600 text-white">
              <TrendingUpIcon className="h-6 w-6" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Average Growth
              </dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">
                  +{averageGrowth}%
                </div>
              </dd>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0 rounded-md p-3 bg-purple-600 text-white">
              <GlobeIcon className="h-6 w-6" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Regions Covered
              </dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">3</div>
                <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                  {provinces.length} provinces
                </div>
              </dd>
            </div>
          </div>
        </div>
      </div>
      {/* Regional Distribution Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          User Distribution by Region
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="h-64 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border-8 border-gray-100 relative">
                {regions.map((region, i) => {
                // Calculate the rotation and position for each segment
                const prevTotal = regions.slice(0, i).reduce((sum, curr) => sum + curr.users, 0);
                const total = regions.reduce((sum, curr) => sum + curr.users, 0);
                const prevAngle = prevTotal / total * 360;
                const angle = region.users / total * 360;
                // Generate a color based on index
                const colors = ['bg-blue-500', 'bg-teal-500', 'bg-indigo-500'];
                const color = colors[i % colors.length];
                // Position the label
                const labelAngle = (prevTotal + region.users / 2) / total * 360;
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
                        {Math.round(region.users / total * 100)}%
                      </div>
                    </div>;
              })}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-6 mt-4">
              {regions.map((region, i) => {
              const colors = ['bg-blue-500', 'bg-teal-500', 'bg-indigo-500'];
              const color = colors[i % colors.length];
              return <div key={i} className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${color} mr-1`}></div>
                    <span className="text-sm text-gray-600">{region.name}</span>
                  </div>;
            })}
            </div>
          </div>
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-3">
              Regional Statistics
            </h3>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Region
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Users
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Active Users
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Growth
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {regions.map((region, index) => <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {region.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {region.users.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {region.activeUsers.toLocaleString()} (
                      {Math.round(region.activeUsers / region.users * 100)}%)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {region.growth}
                      </span>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Active Users by Province */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">
            Active Users by Province
          </h2>
          <div className="flex space-x-2">
            <select className="text-sm border border-gray-300 rounded-md px-3 py-1" value={selectedRegion} onChange={e => setSelectedRegion(e.target.value)}>
              <option value="All Regions">All Regions</option>
              <option value="Luzon">Luzon</option>
              <option value="Visayas">Visayas</option>
              <option value="Mindanao">Mindanao</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Province
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Region
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Users
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Active Users
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Growth
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Activity Rate
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProvinces.map((province, index) => {
              const activityRate = Math.round(province.activeUsers / province.users * 100);
              let activityClass = 'bg-green-100 text-green-800';
              if (activityRate < 70) activityClass = 'bg-yellow-100 text-yellow-800';
              if (activityRate < 50) activityClass = 'bg-red-100 text-red-800';
              return <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {province.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {province.region}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {province.users.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {province.activeUsers.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {province.growth}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${activityClass}`}>
                          {activityRate}%
                        </span>
                        <div className="ml-2 w-16 bg-gray-200 rounded-full h-1.5">
                          <div className={`h-1.5 rounded-full ${activityRate >= 70 ? 'bg-green-500' : activityRate >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                        width: `${activityRate}%`
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
    </div>;
};