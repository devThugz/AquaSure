import React from 'react';
import { LeafIcon, DropletIcon, FishIcon, BarChart2Icon, TrendingUpIcon, AwardIcon, GlobeIcon, ThermometerIcon } from 'lucide-react';
export const Sustainability: React.FC = () => {
  const sustainabilityMetrics = [{
    name: 'Avg. Eco Score',
    value: '78.5',
    change: '+2.3',
    icon: <LeafIcon className="h-6 w-6" />,
    color: 'bg-green-600'
  }, {
    name: 'Sustainable Catch',
    value: '92%',
    change: '+4%',
    icon: <FishIcon className="h-6 w-6" />,
    color: 'bg-blue-600'
  }, {
    name: 'Water Quality',
    value: '85.2',
    change: '+1.8',
    icon: <DropletIcon className="h-6 w-6" />,
    color: 'bg-teal-600'
  }, {
    name: 'Eco Rewards',
    value: '₱1.2M',
    change: '+15%',
    icon: <AwardIcon className="h-6 w-6" />,
    color: 'bg-purple-600'
  }];
  const regionalEcoScores = [{
    region: 'Palawan',
    score: 92.4,
    status: 'Excellent',
    trend: '+3.2',
    rewards: '₱320,000'
  }, {
    region: 'Cebu',
    score: 85.7,
    status: 'Good',
    trend: '+2.5',
    rewards: '₱285,000'
  }, {
    region: 'Davao',
    score: 81.2,
    status: 'Good',
    trend: '+1.8',
    rewards: '₱240,000'
  }, {
    region: 'Iloilo',
    score: 76.8,
    status: 'Average',
    trend: '+0.9',
    rewards: '₱195,000'
  }, {
    region: 'Zamboanga',
    score: 72.3,
    status: 'Average',
    trend: '-0.4',
    rewards: '₱160,000'
  }];
  const sustainablePractices = [{
    practice: 'Sustainable Fishing Methods',
    adoption: 78,
    impact: 'High',
    rewards: '₱350,000',
    description: 'Using eco-friendly fishing methods that minimize bycatch and habitat damage'
  }, {
    practice: 'Catch Monitoring',
    adoption: 92,
    impact: 'Medium',
    rewards: '₱280,000',
    description: 'Accurate reporting of catch quantities and species to prevent overfishing'
  }, {
    practice: 'Habitat Restoration',
    adoption: 65,
    impact: 'High',
    rewards: '₱320,000',
    description: 'Participating in coral reef and mangrove restoration projects'
  }, {
    practice: 'Waste Reduction',
    adoption: 84,
    impact: 'Medium',
    rewards: '₱250,000',
    description: 'Proper disposal of fishing gear and reduction of plastic waste'
  }];
  const getStatusBadge = status => {
    switch (status) {
      case 'Excellent':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Excellent
          </span>;
      case 'Good':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
            Good
          </span>;
      case 'Average':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
            Average
          </span>;
      case 'Poor':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            Poor
          </span>;
      default:
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            {status}
          </span>;
    }
  };
  const getImpactBadge = impact => {
    switch (impact) {
      case 'High':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            High
          </span>;
      case 'Medium':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
            Medium
          </span>;
      case 'Low':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
            Low
          </span>;
      default:
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            {impact}
          </span>;
    }
  };
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Eco & Sustainability
        </h1>
        <p className="text-sm text-gray-500">
          Monitor environmental impact and sustainable fishing practices
        </p>
      </div>
      {/* Sustainability Metrics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {sustainabilityMetrics.map(metric => <div key={metric.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className={`flex-shrink-0 rounded-md p-3 ${metric.color} text-white`}>
                {metric.icon}
              </div>
              <div className="ml-5 w-0 flex-1">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  {metric.name}
                </dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">
                    {metric.value}
                  </div>
                  <div className={`ml-2 flex items-baseline text-sm font-semibold ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change}
                  </div>
                </dd>
              </div>
            </div>
          </div>)}
      </div>
      {/* Sustainability Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Eco Score Trends
          </h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <TrendingUpIcon className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-gray-500">
              Eco score trends chart visualization
            </span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Sustainable Practices Adoption
          </h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <BarChart2Icon className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-gray-500">
              Sustainable practices chart visualization
            </span>
          </div>
        </div>
      </div>
      {/* Regional Eco Scores */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Regional Eco Scores
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Region
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Eco Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trend
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rewards Distributed
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Score Breakdown
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {regionalEcoScores.map((region, index) => <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {region.region}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {region.score}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(region.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`${region.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {region.trend}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {region.rewards}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className={`h-2.5 rounded-full ${region.score >= 90 ? 'bg-green-500' : region.score >= 80 ? 'bg-blue-500' : region.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                    width: `${region.score}%`
                  }}></div>
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Sustainable Practices */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Sustainable Practices
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Practice
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Adoption Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Impact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rewards
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sustainablePractices.map((practice, index) => <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {practice.practice}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {practice.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-900 mr-2">
                        {practice.adoption}%
                      </span>
                      <div className="w-24 bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{
                      width: `${practice.adoption}%`
                    }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getImpactBadge(practice.impact)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {practice.rewards}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Environmental Monitoring */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">
            Environmental Monitoring
          </h2>
          <button className="px-3 py-1 bg-teal-600 text-white text-sm rounded hover:bg-teal-700">
            View Full Report
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <ThermometerIcon className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="text-sm font-medium text-gray-900">
                Water Temperature
              </h3>
            </div>
            <div className="flex justify-between items-baseline">
              <p className="text-2xl font-bold text-gray-900">27.4°C</p>
              <p className="text-sm text-gray-500">+0.2°C from last month</p>
            </div>
            <div className="mt-2 h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-blue-500 rounded-full" style={{
              width: '65%'
            }}></div>
            </div>
            <p className="mt-1 text-xs text-gray-500">Within normal range</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <DropletIcon className="h-5 w-5 text-teal-600 mr-2" />
              <h3 className="text-sm font-medium text-gray-900">
                Water Quality Index
              </h3>
            </div>
            <div className="flex justify-between items-baseline">
              <p className="text-2xl font-bold text-gray-900">85.2</p>
              <p className="text-sm text-green-600">+1.8 from last month</p>
            </div>
            <div className="mt-2 h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-teal-500 rounded-full" style={{
              width: '85%'
            }}></div>
            </div>
            <p className="mt-1 text-xs text-gray-500">Good quality</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <FishIcon className="h-5 w-5 text-green-600 mr-2" />
              <h3 className="text-sm font-medium text-gray-900">
                Fish Population
              </h3>
            </div>
            <div className="flex justify-between items-baseline">
              <p className="text-2xl font-bold text-gray-900">92%</p>
              <p className="text-sm text-green-600">+4% from last year</p>
            </div>
            <div className="mt-2 h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-green-500 rounded-full" style={{
              width: '92%'
            }}></div>
            </div>
            <p className="mt-1 text-xs text-gray-500">Sustainable levels</p>
          </div>
        </div>
      </div>
    </div>;
};