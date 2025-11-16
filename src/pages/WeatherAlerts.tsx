import React, { useState } from 'react';
import { DashboardCard } from '../components/DashboardCard';
import { useTheme } from '../contexts/ThemeContext';
import { CloudIcon, CloudRainIcon, CloudLightningIcon, SunIcon, WindIcon, DropletIcon, ThermometerIcon, ArrowUpIcon, ArrowDownIcon, BellIcon, CheckIcon, AlertTriangleIcon, CompassIcon, WavesIcon, MapPinIcon, ChevronRightIcon, CalendarIcon, ClockIcon, InfoIcon } from 'lucide-react';
export function WeatherAlerts() {
  const {
    darkMode
  } = useTheme();
  const [activeTab, setActiveTab] = useState('current');
  const [selectedLocation, setSelectedLocation] = useState('current');
  // Mock weather data
  const currentWeather = {
    location: 'Batangas Bay',
    coordinates: [13.7565, 121.0583],
    timestamp: 'Updated 10 minutes ago',
    condition: 'Partly Cloudy',
    temperature: 29,
    feelsLike: 32,
    humidity: 78,
    pressure: 1012,
    windSpeed: 15,
    windDirection: 'SE',
    visibility: 10,
    uvIndex: 7,
    precipitation: 0,
    waveHeight: 0.8,
    waveDirection: 'E',
    waterTemperature: 27,
    sunrise: '5:42 AM',
    sunset: '6:15 PM',
    moonPhase: 'Waxing Gibbous',
    tides: [{
      time: '4:15 AM',
      type: 'Low',
      height: 0.3
    }, {
      time: '10:30 AM',
      type: 'High',
      height: 1.5
    }, {
      time: '4:45 PM',
      type: 'Low',
      height: 0.4
    }, {
      time: '11:00 PM',
      type: 'High',
      height: 1.3
    }]
  };
  // Mock forecast data
  const forecastData = [{
    day: 'Today',
    date: 'Aug 15',
    condition: 'Partly Cloudy',
    icon: <CloudIcon className="h-6 w-6" />,
    highTemp: 31,
    lowTemp: 26,
    precipitation: 10,
    windSpeed: 15,
    waveHeight: 0.8,
    warning: null
  }, {
    day: 'Tomorrow',
    date: 'Aug 16',
    condition: 'Rainy',
    icon: <CloudRainIcon className="h-6 w-6" />,
    highTemp: 29,
    lowTemp: 25,
    precipitation: 80,
    windSpeed: 25,
    waveHeight: 1.5,
    warning: 'Strong winds and moderate waves'
  }, {
    day: 'Friday',
    date: 'Aug 17',
    condition: 'Thunderstorms',
    icon: <CloudLightningIcon className="h-6 w-6" />,
    highTemp: 28,
    lowTemp: 25,
    precipitation: 90,
    windSpeed: 35,
    waveHeight: 2.2,
    warning: 'Severe weather alert'
  }, {
    day: 'Saturday',
    date: 'Aug 18',
    condition: 'Heavy Rain',
    icon: <CloudRainIcon className="h-6 w-6" />,
    highTemp: 27,
    lowTemp: 24,
    precipitation: 95,
    windSpeed: 30,
    waveHeight: 2.0,
    warning: 'Flash flood warning'
  }, {
    day: 'Sunday',
    date: 'Aug 19',
    condition: 'Cloudy',
    icon: <CloudIcon className="h-6 w-6" />,
    highTemp: 29,
    lowTemp: 25,
    precipitation: 40,
    windSpeed: 20,
    waveHeight: 1.2,
    warning: null
  }, {
    day: 'Monday',
    date: 'Aug 20',
    condition: 'Sunny',
    icon: <SunIcon className="h-6 w-6" />,
    highTemp: 32,
    lowTemp: 26,
    precipitation: 5,
    windSpeed: 10,
    waveHeight: 0.5,
    warning: null
  }];
  // Mock alert data
  const alertsData = [{
    id: 1,
    type: 'Weather Warning',
    title: 'Tropical Storm Warning',
    severity: 'high',
    description: 'Tropical Storm "Maring" is expected to intensify and bring heavy rainfall and strong winds to the region within the next 48 hours.',
    issueTime: 'August 15, 2023 - 8:30 AM',
    expiryTime: 'August 18, 2023 - 8:30 AM',
    affectedAreas: ['Batangas Bay', 'Mindoro Strait', 'Tayabas Bay'],
    recommendations: ['Avoid sailing until the storm passes', 'Secure boats and equipment', 'Monitor updates regularly'],
    source: 'PAGASA',
    isRead: false
  }, {
    id: 2,
    type: 'Marine Advisory',
    title: 'Strong Current Advisory',
    severity: 'medium',
    description: 'Strong underwater currents expected in Batangas Bay due to changing tides and wind patterns.',
    issueTime: 'August 15, 2023 - 10:15 AM',
    expiryTime: 'August 16, 2023 - 10:15 AM',
    affectedAreas: ['Batangas Bay', 'Verde Island Passage'],
    recommendations: ['Exercise caution when swimming or diving', 'Use proper anchoring techniques', 'Be aware of changing tide patterns'],
    source: 'Philippine Coast Guard',
    isRead: true
  }, {
    id: 3,
    type: 'High Wave Alert',
    title: 'Increased Wave Activity',
    severity: 'medium',
    description: 'Waves expected to reach 2-3 meters in height due to the approaching tropical storm system.',
    issueTime: 'August 15, 2023 - 11:45 AM',
    expiryTime: 'August 17, 2023 - 11:45 AM',
    affectedAreas: ['Batangas Bay', 'Mindoro Strait', 'Tayabas Bay'],
    recommendations: ['Small boats should not venture out to sea', 'Larger vessels should secure cargo properly', 'Monitor wave conditions before sailing'],
    source: 'PAGASA',
    isRead: false
  }];
  // Mock saved locations
  const savedLocations = [{
    id: 'current',
    name: 'Current Location',
    coordinates: [13.7565, 121.0583]
  }, {
    id: 'batangas',
    name: 'Batangas Bay',
    coordinates: [13.7565, 121.0583]
  }, {
    id: 'mindoro',
    name: 'Mindoro Strait',
    coordinates: [13.4125, 120.7074]
  }, {
    id: 'tayabas',
    name: 'Tayabas Bay',
    coordinates: [13.8839, 121.6109]
  }];
  // Get weather icon based on condition
  const getWeatherIcon = condition => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <SunIcon className="h-10 w-10 text-yellow-500" />;
      case 'partly cloudy':
        return <CloudIcon className="h-10 w-10 text-gray-400" />;
      case 'cloudy':
        return <CloudIcon className="h-10 w-10 text-gray-500" />;
      case 'rainy':
      case 'heavy rain':
        return <CloudRainIcon className="h-10 w-10 text-blue-500" />;
      case 'thunderstorms':
        return <CloudLightningIcon className="h-10 w-10 text-purple-500" />;
      default:
        return <CloudIcon className="h-10 w-10 text-gray-400" />;
    }
  };
  // Get severity color
  const getSeverityColor = severity => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-red-200 dark:border-red-800';
      case 'medium':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800';
      case 'low':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700';
    }
  };
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Weather & Sea Alerts</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Real-time weather information and maritime conditions
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <select className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ocean-teal dark:focus:ring-ocean-light transition-colors" value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)}>
            {savedLocations.map(location => <option key={location.id} value={location.id}>
                {location.name}
              </option>)}
          </select>
          <button className="p-2 rounded-lg bg-ocean-teal text-white">
            <MapPinIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          <button className={`py-3 px-6 font-medium text-sm ${activeTab === 'current' ? 'text-ocean-teal dark:text-ocean-light border-b-2 border-ocean-teal dark:border-ocean-light' : 'text-gray-500 dark:text-gray-400 hover:text-ocean-teal dark:hover:text-ocean-light'}`} onClick={() => setActiveTab('current')}>
            <CloudIcon className="inline-block mr-2 h-4 w-4" />
            Current Conditions
          </button>
          <button className={`py-3 px-6 font-medium text-sm ${activeTab === 'forecast' ? 'text-ocean-teal dark:text-ocean-light border-b-2 border-ocean-teal dark:border-ocean-light' : 'text-gray-500 dark:text-gray-400 hover:text-ocean-teal dark:hover:text-ocean-light'}`} onClick={() => setActiveTab('forecast')}>
            <CalendarIcon className="inline-block mr-2 h-4 w-4" />
            7-Day Forecast
          </button>
          <button className={`py-3 px-6 font-medium text-sm ${activeTab === 'alerts' ? 'text-ocean-teal dark:text-ocean-light border-b-2 border-ocean-teal dark:border-ocean-light' : 'text-gray-500 dark:text-gray-400 hover:text-ocean-teal dark:hover:text-ocean-light'} relative`} onClick={() => setActiveTab('alerts')}>
            <BellIcon className="inline-block mr-2 h-4 w-4" />
            Alerts
            {alertsData.filter(alert => !alert.isRead).length > 0 && <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>}
          </button>
        </div>
      </div>
      {activeTab === 'current' && <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main weather card */}
          <DashboardCard className="p-5 lg:col-span-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium">
                  {currentWeather.location}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {currentWeather.timestamp}
                </p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold">
                  {currentWeather.temperature}°C
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Feels like {currentWeather.feelsLike}°C
                </p>
              </div>
            </div>
            <div className="flex items-center mt-6">
              <div className="mr-4">
                {getWeatherIcon(currentWeather.condition)}
              </div>
              <div>
                <div className="text-xl">{currentWeather.condition}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <WindIcon className="inline-block h-4 w-4 mr-1" />
                  {currentWeather.windSpeed} km/h {currentWeather.windDirection}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 flex items-center">
                  <DropletIcon className="h-3 w-3 mr-1" />
                  Humidity
                </div>
                <div className="text-lg font-medium">
                  {currentWeather.humidity}%
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 flex items-center">
                  <CloudRainIcon className="h-3 w-3 mr-1" />
                  Precipitation
                </div>
                <div className="text-lg font-medium">
                  {currentWeather.precipitation}%
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 flex items-center">
                  <WavesIcon className="h-3 w-3 mr-1" />
                  Wave Height
                </div>
                <div className="text-lg font-medium">
                  {currentWeather.waveHeight}m
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 flex items-center">
                  <ThermometerIcon className="h-3 w-3 mr-1" />
                  Water Temp
                </div>
                <div className="text-lg font-medium">
                  {currentWeather.waterTemperature}°C
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-sm font-medium mb-3">Today's Forecast</h4>
              <div className="grid grid-cols-6 gap-2">
                {['6AM', '9AM', '12PM', '3PM', '6PM', '9PM'].map((time, index) => <div key={time} className="text-center">
                      <div className="text-xs mb-1">{time}</div>
                      <div className="mx-auto">
                        {index === 0 && <CloudIcon className="h-5 w-5 mx-auto text-gray-400" />}
                        {index === 1 && <CloudIcon className="h-5 w-5 mx-auto text-gray-400" />}
                        {index === 2 && <SunIcon className="h-5 w-5 mx-auto text-yellow-500" />}
                        {index === 3 && <SunIcon className="h-5 w-5 mx-auto text-yellow-500" />}
                        {index === 4 && <CloudIcon className="h-5 w-5 mx-auto text-gray-400" />}
                        {index === 5 && <CloudIcon className="h-5 w-5 mx-auto text-gray-400" />}
                      </div>
                      <div className="text-xs mt-1">
                        {[28, 29, 31, 30, 29, 27][index]}°
                      </div>
                    </div>)}
              </div>
            </div>
          </DashboardCard>
          {/* Tide information */}
          <DashboardCard className="p-5 lg:col-span-1">
            <h3 className="text-lg font-medium mb-3">Tide Information</h3>
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm">
                <SunIcon className="inline-block h-4 w-4 mr-1 text-yellow-500" />
                Sunrise: {currentWeather.sunrise}
              </div>
              <div className="text-sm">
                <MoonIcon className="inline-block h-4 w-4 mr-1 text-gray-400" />
                Sunset: {currentWeather.sunset}
              </div>
            </div>
            <div className="relative h-32 bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-4 overflow-hidden">
              {/* Tide visualization */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-blue-200 dark:bg-blue-800/50 rounded-t-lg"></div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-blue-300 dark:bg-blue-700/50"></div>
              <div className="absolute top-0 left-0 right-0 h-full">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,50 C20,30 40,70 60,40 C80,10 100,50 100,50 L100,100 L0,100 Z" fill="rgba(59, 130, 246, 0.3)" className="dark:fill-blue-500/30" />
                </svg>
              </div>
              {/* Time markers */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 text-xs text-gray-600 dark:text-gray-300">
                <span>12AM</span>
                <span>6AM</span>
                <span>12PM</span>
                <span>6PM</span>
                <span>12AM</span>
              </div>
            </div>
            <h4 className="text-sm font-medium mb-2">Today's Tides</h4>
            <div className="space-y-3">
              {currentWeather.tides.map((tide, index) => <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center">
                    {tide.type === 'High' ? <ArrowUpIcon className="h-4 w-4 text-blue-500 mr-2" /> : <ArrowDownIcon className="h-4 w-4 text-blue-500 mr-2" />}
                    <span className="text-sm">{tide.type} Tide</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium mr-2">{tide.height}m</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {tide.time}
                    </span>
                  </div>
                </div>)}
            </div>
          </DashboardCard>
          {/* Marine conditions */}
          <DashboardCard className="p-5 lg:col-span-1">
            <h3 className="text-lg font-medium mb-3">Marine Conditions</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Wave Height
                </div>
                <div className="flex items-center">
                  <WavesIcon className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-lg font-medium">
                    {currentWeather.waveHeight}m
                  </span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Direction: {currentWeather.waveDirection} • Period: 6s
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Wind
                </div>
                <div className="flex items-center">
                  <WindIcon className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-lg font-medium">
                    {currentWeather.windSpeed} km/h
                  </span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Direction: {currentWeather.windDirection} • Gusts: 22 km/h
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Visibility
                </div>
                <div className="flex items-center">
                  <EyeIcon className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-lg font-medium">
                    {currentWeather.visibility} km
                  </span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Good visibility for navigation
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Water Temperature
                </div>
                <div className="flex items-center">
                  <ThermometerIcon className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-lg font-medium">
                    {currentWeather.waterTemperature}°C
                  </span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  1°C above average for August
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Fishing Conditions</span>
                <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                  Good
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Calm seas and moderate temperatures make for favorable fishing
                conditions today.
              </p>
            </div>
          </DashboardCard>
        </div>}
      {activeTab === 'forecast' && <div className="grid grid-cols-1 gap-6">
          <DashboardCard className="p-5">
            <h3 className="text-lg font-medium mb-4">7-Day Forecast</h3>
            <div className="space-y-4">
              {forecastData.map((day, index) => <div key={index} className={`p-4 rounded-lg ${index === 0 ? 'bg-ocean-teal/10 dark:bg-ocean-teal/20 border border-ocean-teal/30' : 'bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700'}`}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="mr-4">{day.icon}</div>
                      <div>
                        <div className="font-medium">{day.day}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {day.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                          Temp
                        </div>
                        <div className="flex items-center">
                          <ArrowUpIcon className="h-3 w-3 text-red-500 mr-1" />
                          <span className="text-sm font-medium">
                            {day.highTemp}°
                          </span>
                          <span className="mx-1 text-gray-400">/</span>
                          <ArrowDownIcon className="h-3 w-3 text-blue-500 mr-1" />
                          <span className="text-sm">{day.lowTemp}°</span>
                        </div>
                      </div>
                      <div className="text-center hidden sm:block">
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                          Precip
                        </div>
                        <div className="text-sm font-medium">
                          {day.precipitation}%
                        </div>
                      </div>
                      <div className="text-center hidden md:block">
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                          Wind
                        </div>
                        <div className="text-sm font-medium">
                          {day.windSpeed} km/h
                        </div>
                      </div>
                      <div className="text-center hidden lg:block">
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                          Waves
                        </div>
                        <div className="text-sm font-medium">
                          {day.waveHeight}m
                        </div>
                      </div>
                      <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  {day.warning && <div className="mt-3 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200 dark:border-yellow-800 text-xs text-yellow-800 dark:text-yellow-300 flex items-start">
                      <AlertTriangleIcon className="h-3 w-3 mr-1 mt-0.5 flex-shrink-0" />
                      <span>{day.warning}</span>
                    </div>}
                </div>)}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-start">
                <InfoIcon className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Weather forecast data is provided by PAGASA and is updated
                  every 3 hours. Marine conditions forecast includes wave
                  height, wind speed, and precipitation probability.
                </p>
              </div>
            </div>
          </DashboardCard>
        </div>}
      {activeTab === 'alerts' && <div className="grid grid-cols-1 gap-6">
          <DashboardCard className="p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Active Alerts</h3>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">
                  {alertsData.filter(alert => !alert.isRead).length} unread
                </span>
                <button className="text-sm text-ocean-teal dark:text-ocean-light hover:underline">
                  Mark all as read
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {alertsData.map(alert => <div key={alert.id} className={`p-4 rounded-lg border ${getSeverityColor(alert.severity)} ${!alert.isRead ? 'bg-opacity-50 dark:bg-opacity-50' : 'bg-opacity-30 dark:bg-opacity-30'}`}>
                  <div className="flex justify-between items-start">
                    <div className="flex items-start">
                      <AlertTriangleIcon className={`h-5 w-5 mr-3 mt-0.5 ${alert.severity === 'high' ? 'text-red-600 dark:text-red-400' : alert.severity === 'medium' ? 'text-yellow-600 dark:text-yellow-400' : 'text-blue-600 dark:text-blue-400'}`} />
                      <div>
                        <div className="font-medium">{alert.title}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                          {alert.type} • {alert.source} • {alert.issueTime}
                        </div>
                      </div>
                    </div>
                    {!alert.isRead && <div className="h-2 w-2 rounded-full bg-red-500"></div>}
                  </div>
                  <div className="mt-3 text-sm">
                    <p>{alert.description}</p>
                  </div>
                  <div className="mt-3">
                    <div className="text-xs font-medium mb-1">
                      Affected Areas:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {alert.affectedAreas.map((area, index) => <span key={index} className="inline-block px-2 py-0.5 bg-white/50 dark:bg-gray-800/50 rounded text-xs">
                          {area}
                        </span>)}
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="text-xs font-medium mb-1">
                      Recommendations:
                    </div>
                    <ul className="list-disc list-inside text-xs space-y-1">
                      {alert.recommendations.map((rec, index) => <li key={index}>{rec}</li>)}
                    </ul>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Valid until: {alert.expiryTime}
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                        Dismiss
                      </button>
                      <button className="px-3 py-1 bg-ocean-teal text-white text-xs rounded hover:bg-ocean-blue transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>)}
            </div>
          </DashboardCard>
        </div>}
    </div>;
}
// Helper components for icons
const MoonIcon = ({
  className
}) => {
  return <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>;
};
const EyeIcon = ({
  className
}) => {
  return <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>;
};