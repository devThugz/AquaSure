import React, { useEffect, useState } from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { BrainIcon, TrendingUpIcon, AlertTriangleIcon, UsersIcon, MapPinIcon, CalendarIcon, ArrowUpIcon, ArrowDownIcon, RefreshCwIcon, BarChart2Icon, PieChartIcon, CloudRainIcon, AnchorIcon } from 'lucide-react';
import { predictFishing, predictRegionalRisk, forecastEngagement, getAISummaryInsights, FishingPrediction, RegionalRisk, EngagementForecast } from '../../../services/aiPredictionService';
export const AIPredictiveInsights: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState<string>('All Regions');
  const [fishingPredictions, setFishingPredictions] = useState<FishingPrediction[]>([]);
  const [regionalRisks, setRegionalRisks] = useState<RegionalRisk[]>([]);
  const [engagementForecasts, setEngagementForecasts] = useState<EngagementForecast[]>([]);
  const [summaryInsights, setSummaryInsights] = useState<{
    fishingTrend: string;
    fishingGrowth: number;
    highRiskRegions: string[];
    highRiskCount: number;
    engagementTrend: string;
    engagementChange: number;
  } | null>(null);
  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        const [fishing, risks, engagement, summary] = await Promise.all([predictFishing(), predictRegionalRisk(), forecastEngagement(), getAISummaryInsights()]);
        setFishingPredictions(fishing);
        setRegionalRisks(risks);
        setEngagementForecasts(engagement);
        setSummaryInsights(summary);
      } catch (error) {
        console.error('Error fetching AI prediction data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, []);
  const refreshData = () => {
    // Re-fetch all data
    const fetchAllData = async () => {
      setLoading(true);
      try {
        const [fishing, risks, engagement, summary] = await Promise.all([predictFishing(), predictRegionalRisk(), forecastEngagement(), getAISummaryInsights()]);
        setFishingPredictions(fishing);
        setRegionalRisks(risks);
        setEngagementForecasts(engagement);
        setSummaryInsights(summary);
      } catch (error) {
        console.error('Error refreshing AI prediction data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  };
  // Filter fishing predictions by selected region
  const filteredFishingPredictions = selectedRegion === 'All Regions' ? fishingPredictions : fishingPredictions.filter(pred => pred.region === selectedRegion);
  // Group fishing predictions by date for "All Regions" view
  const groupedFishingPredictions = filteredFishingPredictions.reduce((acc, curr) => {
    const existingDate = acc.find(item => item.date === curr.date);
    if (existingDate) {
      existingDate.predictedCatch += curr.predictedCatch;
      existingDate.lowerBound += curr.lowerBound;
      existingDate.upperBound += curr.upperBound;
      existingDate.count += 1;
    } else {
      acc.push({
        ...curr,
        count: 1
      });
    }
    return acc;
  }, [] as (FishingPrediction & {
    count: number;
  })[]);
  // Calculate averages for grouped data
  const averagedFishingPredictions = groupedFishingPredictions.map(item => ({
    ...item,
    predictedCatch: selectedRegion === 'All Regions' ? Math.round(item.predictedCatch / item.count) : item.predictedCatch,
    lowerBound: selectedRegion === 'All Regions' ? Math.round(item.lowerBound / item.count) : item.lowerBound,
    upperBound: selectedRegion === 'All Regions' ? Math.round(item.upperBound / item.count) : item.upperBound
  })).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  // Get unique regions for the filter
  const regions = ['All Regions', ...new Set(fishingPredictions.map(p => p.region))];
  // Format date for display
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          AI Predictive Insights
        </h1>
        <p className="text-sm text-gray-500">
          Machine learning-powered forecasts and predictions for AquaSure
          platform
        </p>
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {loading ? Array(3).fill(0).map((_, i) => <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-10 bg-gray-200 rounded w-1/2"></div>
              </div>) : summaryInsights ? <>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-md p-3 bg-blue-600 text-white">
                  <AnchorIcon className="h-6 w-6" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Next Week Fishing Output
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {summaryInsights.fishingGrowth >= 0 ? <span className="text-green-600">
                          ↑ {summaryInsights.fishingGrowth}% Growth
                        </span> : <span className="text-red-600">
                          ↓ {Math.abs(summaryInsights.fishingGrowth)}% Decline
                        </span>}
                    </div>
                  </dd>
                  <p className="mt-2 text-sm text-gray-500">
                    {summaryInsights.fishingGrowth >= 0 ? 'Favorable conditions expected' : 'Challenging conditions ahead'}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-md p-3 bg-red-600 text-white">
                  <AlertTriangleIcon className="h-6 w-6" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    High-Risk Zones
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {summaryInsights.highRiskCount} Regions
                    </div>
                  </dd>
                  <p className="mt-2 text-sm text-gray-500">
                    {summaryInsights.highRiskRegions.join(', ')}
                  </p>
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
                    Platform Engagement
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {summaryInsights.engagementChange >= 0 ? <span className="text-green-600">
                          ↑ {summaryInsights.engagementChange}% Growth
                        </span> : <span className="text-red-600">
                          ↓ {Math.abs(summaryInsights.engagementChange)}%
                          Decline
                        </span>}
                    </div>
                  </dd>
                  <p className="mt-2 text-sm text-gray-500">
                    Forecast for next 14 days
                  </p>
                </div>
              </div>
            </div>
          </> : null}
      </div>
      {/* Predictive Fishing Trends */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium text-gray-900 flex items-center">
            <TrendingUpIcon className="h-5 w-5 mr-2 text-blue-600" />
            Predictive Fishing Trends
          </h2>
          <div className="flex space-x-2">
            <select className="block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md" value={selectedRegion} onChange={e => setSelectedRegion(e.target.value)}>
              {regions.map(region => <option key={region} value={region}>
                  {region}
                </option>)}
            </select>
            <button onClick={refreshData} className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              <RefreshCwIcon className="h-4 w-4 mr-1" />
              Refresh
            </button>
          </div>
        </div>
        {loading ? <div className="h-80 bg-gray-100 animate-pulse rounded flex items-center justify-center">
            <p className="text-gray-500">Loading predictions...</p>
          </div> : <>
            <div className="mb-4">
              <p className="text-sm text-gray-500">
                AI forecasts expected catch volume for the next 7 days based on
                historical data, weather patterns, and tidal conditions. Shaded
                area shows confidence interval.
              </p>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={averagedFishingPredictions} margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" tickFormatter={formatDate} />
                  <YAxis />
                  <Tooltip formatter={value => [`${value} kg`, 'Predicted Catch']} labelFormatter={label => `Date: ${formatDate(label)}`} />
                  <Legend />
                  <defs>
                    <linearGradient id="colorConfidence" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.1} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="upperBound" stackId="1" stroke="none" fill="url(#colorConfidence)" name="Upper Bound" />
                  <Area type="monotone" dataKey="lowerBound" stackId="2" stroke="none" fill="#fff" name="Lower Bound" />
                  <Line type="monotone" dataKey="predictedCatch" stroke="#8884d8" strokeWidth={2} name="Predicted Catch (kg)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </>}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
        {/* Regional Risk Index */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 flex items-center mb-4">
            <AlertTriangleIcon className="h-5 w-5 mr-2 text-red-600" />
            Regional Risk Index
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            AI predicts fishing difficulty and storm probability for each region
            based on weather forecasts and historical patterns.
          </p>
          {loading ? <div className="h-64 bg-gray-100 animate-pulse rounded flex items-center justify-center">
              <p className="text-gray-500">Loading risk assessment...</p>
            </div> : <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Region
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Risk Level
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Storm Probability
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fishing Difficulty
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {regionalRisks.map((risk, index) => <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
                        <MapPinIcon className="h-4 w-4 mr-1 text-gray-400" />
                        {risk.region}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${risk.riskLevel === 'High' ? 'bg-red-100 text-red-800' : risk.riskLevel === 'Moderate' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                          {risk.riskLevel}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <span className="mr-2">{risk.stormProbability}%</span>
                          <div className="w-24 bg-gray-200 rounded-full h-1.5">
                            <div className={`h-1.5 rounded-full ${risk.stormProbability > 60 ? 'bg-red-500' : risk.stormProbability > 30 ? 'bg-yellow-500' : 'bg-green-500'}`} style={{
                        width: `${risk.stormProbability}%`
                      }}></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <span className="mr-2">
                            {risk.fishingDifficulty}%
                          </span>
                          <div className="w-24 bg-gray-200 rounded-full h-1.5">
                            <div className={`h-1.5 rounded-full ${risk.fishingDifficulty > 60 ? 'bg-red-500' : risk.fishingDifficulty > 30 ? 'bg-yellow-500' : 'bg-green-500'}`} style={{
                        width: `${risk.fishingDifficulty}%`
                      }}></div>
                          </div>
                        </div>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>}
        </div>
        {/* Engagement Forecast */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 flex items-center mb-4">
            <UsersIcon className="h-5 w-5 mr-2 text-teal-600" />
            Engagement Forecast
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Prediction of user engagement trends over the next two weeks based
            on historical patterns and platform activity.
          </p>
          {loading ? <div className="h-64 bg-gray-100 animate-pulse rounded flex items-center justify-center">
              <p className="text-gray-500">Loading engagement forecast...</p>
            </div> : <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={engagementForecasts} margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" tickFormatter={formatDate} />
                  <YAxis yAxisId="left" orientation="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip formatter={(value, name) => [value, name]} labelFormatter={label => `Date: ${formatDate(label)}`} />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="activeUsers" name="Active Users" stroke="#8884d8" activeDot={{
                r: 8
              }} />
                  <Line yAxisId="right" type="monotone" dataKey="predictedEngagement" name="Engagement Score" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>}
        </div>
      </div>
      {/* Risk Factors and Weather Impact */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <h2 className="text-lg font-medium text-gray-900 flex items-center mb-6">
          <CloudRainIcon className="h-5 w-5 mr-2 text-blue-600" />
          Risk Factors by Region
        </h2>
        {loading ? <div className="h-64 bg-gray-100 animate-pulse rounded flex items-center justify-center">
            <p className="text-gray-500">Loading risk factors...</p>
          </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {regionalRisks.map((risk, index) => <div key={index} className={`p-4 rounded-lg border ${risk.riskLevel === 'High' ? 'bg-red-50 border-red-200' : risk.riskLevel === 'Moderate' ? 'bg-yellow-50 border-yellow-200' : 'bg-green-50 border-green-200'}`}>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-gray-900">{risk.region}</h3>
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${risk.riskLevel === 'High' ? 'bg-red-100 text-red-800' : risk.riskLevel === 'Moderate' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                    {risk.riskLevel} Risk
                  </span>
                </div>
                <ul className="space-y-1">
                  {risk.factors.map((factor, i) => <li key={i} className="text-sm text-gray-600 flex items-start">
                      <span className="mr-2">•</span>
                      {factor}
                    </li>)}
                </ul>
              </div>)}
          </div>}
      </div>
      {/* AI Model Performance */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 flex items-center mb-4">
          <BrainIcon className="h-5 w-5 mr-2 text-purple-600" />
          AI Model Performance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Fishing Prediction Accuracy
            </h3>
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-900 mr-2">92.4%</div>
              <span className="text-xs text-green-600 font-medium">↑ 1.2%</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Last updated: Today</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Risk Assessment Precision
            </h3>
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-900 mr-2">87.6%</div>
              <span className="text-xs text-green-600 font-medium">↑ 0.8%</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Last updated: Today</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Engagement Prediction
            </h3>
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-900 mr-2">89.2%</div>
              <span className="text-xs text-green-600 font-medium">↑ 0.5%</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Last updated: Today</p>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Data Sources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-medium text-gray-600">
                Fishing Predictions
              </h4>
              <ul className="mt-1 text-xs text-gray-500">
                <li>• Historical catch data (2018-2023)</li>
                <li>• Weather API integration</li>
                <li>• Tidal patterns & moon phases</li>
                <li>• Seasonal fish migration patterns</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-gray-600">
                Risk Assessment
              </h4>
              <ul className="mt-1 text-xs text-gray-500">
                <li>• Weather forecasts (7-day predictions)</li>
                <li>• Historical storm patterns</li>
                <li>• Ocean current data</li>
                <li>• Wave height & wind speed forecasts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>;
};