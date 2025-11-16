import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { DashboardCard } from '../components/DashboardCard';
import SatelliteMap from '../components/Map/SatelliteMap';
import { useTheme } from '../contexts/ThemeContext';
import { MapPinIcon, AlertTriangleIcon, UsersIcon, InfoIcon, SettingsIcon, LayersIcon, UserIcon, MessageSquareIcon } from 'lucide-react';
export function GPSTracking() {
  const {
    user
  } = useAuth();
  const {
    darkMode
  } = useTheme();
  const [activeTab, setActiveTab] = useState('map');
  return <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">GPS Tracking</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Monitor your location and nearby fishers in real-time
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <DashboardCard className="p-0 overflow-hidden">
            <div className="border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center">
              <h3 className="text-lg font-medium">Live Map</h3>
              <div className="flex space-x-2">
                <button className={`p-2 rounded-md ${activeTab === 'map' ? 'bg-ocean-teal/20 text-ocean-teal dark:text-ocean-light' : darkMode ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-500 hover:bg-gray-100'}`} onClick={() => setActiveTab('map')}>
                  <MapPinIcon className="h-5 w-5" />
                </button>
                <button className={`p-2 rounded-md ${activeTab === 'alerts' ? 'bg-ocean-teal/20 text-ocean-teal dark:text-ocean-light' : darkMode ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-500 hover:bg-gray-100'}`} onClick={() => setActiveTab('alerts')}>
                  <AlertTriangleIcon className="h-5 w-5" />
                </button>
                <button className={`p-2 rounded-md ${activeTab === 'fishers' ? 'bg-ocean-teal/20 text-ocean-teal dark:text-ocean-light' : darkMode ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-500 hover:bg-gray-100'}`} onClick={() => setActiveTab('fishers')}>
                  <UsersIcon className="h-5 w-5" />
                </button>
                <button className={`p-2 rounded-md ${activeTab === 'settings' ? 'bg-ocean-teal/20 text-ocean-teal dark:text-ocean-light' : darkMode ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-500 hover:bg-gray-100'}`} onClick={() => setActiveTab('settings')}>
                  <SettingsIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            {activeTab === 'map' && <div className="h-[600px]">
                <SatelliteMap height="h-[600px]" showEmergencyButton={true} />
              </div>}
            {activeTab === 'alerts' && <div className="p-4 h-[600px] overflow-y-auto">
                <h4 className="text-lg font-medium mb-4">Active Alerts</h4>
                <div className={`mb-4 p-4 rounded-lg border ${darkMode ? 'bg-red-900/20 border-red-800' : 'bg-red-50 border-red-200'}`}>
                  <div className="flex items-start">
                    <div className={`p-2 rounded-full ${darkMode ? 'bg-red-900' : 'bg-red-100'} mr-3`}>
                      <AlertTriangleIcon className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <h5 className={`font-medium ${darkMode ? 'text-red-300' : 'text-red-700'}`}>
                        SOS Alert
                      </h5>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Pedro Reyes has triggered an emergency alert
                      </p>
                      <div className="mt-2 text-xs text-gray-500">
                        3 minutes ago
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <button className={`px-3 py-1 text-xs rounded-md ${darkMode ? 'bg-red-700 text-white' : 'bg-red-600 text-white'}`}>
                          Respond
                        </button>
                        <button className={`px-3 py-1 text-xs rounded-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'}`}>
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`mb-4 p-4 rounded-lg border ${darkMode ? 'bg-yellow-900/20 border-yellow-800' : 'bg-yellow-50 border-yellow-200'}`}>
                  <div className="flex items-start">
                    <div className={`p-2 rounded-full ${darkMode ? 'bg-yellow-900' : 'bg-yellow-100'} mr-3`}>
                      <AlertTriangleIcon className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div>
                      <h5 className={`font-medium ${darkMode ? 'text-yellow-300' : 'text-yellow-700'}`}>
                        Weather Warning
                      </h5>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Strong winds expected in your area
                      </p>
                      <div className="mt-2 text-xs text-gray-500">
                        25 minutes ago
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <button className={`px-3 py-1 text-xs rounded-md ${darkMode ? 'bg-yellow-700 text-white' : 'bg-yellow-600 text-white'}`}>
                          View Forecast
                        </button>
                        <button className={`px-3 py-1 text-xs rounded-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'}`}>
                          Dismiss
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-medium mt-8 mb-4">Alert History</h4>
                <div className={`mb-4 p-4 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-start">
                    <div className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mr-3`}>
                      <AlertTriangleIcon className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <h5 className="font-medium">Boundary Warning</h5>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        You were approaching a restricted fishing zone
                      </p>
                      <div className="mt-2 text-xs text-gray-500">
                        Yesterday, 3:45 PM
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`mb-4 p-4 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-start">
                    <div className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mr-3`}>
                      <AlertTriangleIcon className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <h5 className="font-medium">Weather Advisory</h5>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Moderate waves expected in your area
                      </p>
                      <div className="mt-2 text-xs text-gray-500">
                        2 days ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>}
            {activeTab === 'fishers' && <div className="p-4 h-[600px] overflow-y-auto">
                <h4 className="text-lg font-medium mb-4">Nearby Fishers</h4>
                <div className="space-y-4">
                  <div className={`p-4 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} flex items-center justify-between`}>
                    <div className="flex items-center">
                      <div className={`h-10 w-10 rounded-full ${darkMode ? 'bg-ocean-deep' : 'bg-ocean-teal/10'} flex items-center justify-center mr-3`}>
                        <UsersIcon className={`h-5 w-5 ${darkMode ? 'text-ocean-teal' : 'text-ocean-blue'}`} />
                      </div>
                      <div>
                        <h5 className="font-medium">Juan Dela Cruz</h5>
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          5.2 km away • Boat ID: BT-123
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-2">
                        Active
                      </span>
                      <button className={`p-1 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
                        <MessageSquareIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg border ${darkMode ? 'bg-red-900/20 border-red-800' : 'bg-red-50 border-red-200'} flex items-center justify-between`}>
                    <div className="flex items-center">
                      <div className={`h-10 w-10 rounded-full ${darkMode ? 'bg-red-900' : 'bg-red-100'} flex items-center justify-center mr-3`}>
                        <UsersIcon className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <h5 className={`font-medium ${darkMode ? 'text-red-300' : 'text-red-700'}`}>
                          Pedro Reyes
                        </h5>
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          8.1 km away • Boat ID: BT-789
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 mr-2">
                        SOS
                      </span>
                      <button className={`p-1 rounded-md ${darkMode ? 'bg-red-700 hover:bg-red-600 text-white' : 'bg-red-200 hover:bg-red-300'}`}>
                        <AlertTriangleIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} flex items-center justify-between`}>
                    <div className="flex items-center">
                      <div className={`h-10 w-10 rounded-full ${darkMode ? 'bg-ocean-deep' : 'bg-ocean-teal/10'} flex items-center justify-center mr-3`}>
                        <UsersIcon className={`h-5 w-5 ${darkMode ? 'text-ocean-teal' : 'text-ocean-blue'}`} />
                      </div>
                      <div>
                        <h5 className="font-medium">Maria Santos</h5>
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          6.7 km away • Boat ID: BT-456
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-2">
                        Active
                      </span>
                      <button className={`p-1 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
                        <MessageSquareIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} flex items-center justify-between`}>
                    <div className="flex items-center">
                      <div className={`h-10 w-10 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center mr-3`}>
                        <UsersIcon className="h-5 w-5 text-gray-500" />
                      </div>
                      <div>
                        <h5 className="font-medium">Ana Lim</h5>
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          3.5 km away • Boat ID: BT-012
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mr-2">
                        Inactive
                      </span>
                      <button className={`p-1 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
                        <MessageSquareIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg border ${darkMode ? 'bg-yellow-900/20 border-yellow-800' : 'bg-yellow-50 border-yellow-200'} flex items-center justify-between`}>
                    <div className="flex items-center">
                      <div className={`h-10 w-10 rounded-full ${darkMode ? 'bg-yellow-900' : 'bg-yellow-100'} flex items-center justify-center mr-3`}>
                        <UsersIcon className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div>
                        <h5 className={`font-medium ${darkMode ? 'text-yellow-300' : 'text-yellow-700'}`}>
                          Roberto Santos
                        </h5>
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          7.3 km away • Boat ID: BT-345
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mr-2">
                        Weather Alert
                      </span>
                      <button className={`p-1 rounded-md ${darkMode ? 'bg-yellow-700 hover:bg-yellow-600' : 'bg-yellow-100 hover:bg-yellow-200'}`}>
                        <MessageSquareIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>}
            {activeTab === 'settings' && <div className="p-4 h-[600px] overflow-y-auto">
                <h4 className="text-lg font-medium mb-4">Map Settings</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-sm font-medium mb-3">Map Type</h5>
                    <div className="grid grid-cols-2 gap-3">
                      <button className={`p-3 rounded-lg border flex items-center justify-center ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200'}`}>
                        <LayersIcon className="h-5 w-5 mr-2 text-ocean-teal" />
                        <span>Satellite</span>
                      </button>
                      <button className={`p-3 rounded-lg border flex items-center justify-center ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200'}`}>
                        <MapPinIcon className="h-5 w-5 mr-2 text-ocean-blue" />
                        <span>Standard</span>
                      </button>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h5 className="text-sm font-medium mb-3">
                      Display Options
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <UsersIcon className="h-5 w-5 mr-2 text-ocean-teal" />
                          <span>Show Other Fishers</span>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input type="checkbox" id="toggle-fishers" defaultChecked={true} className="absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer focus:outline-none checked:right-0 checked:border-ocean-teal" />
                          <label htmlFor="toggle-fishers" className={`block overflow-hidden h-6 rounded-full cursor-pointer ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></label>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <AlertTriangleIcon className="h-5 w-5 mr-2 text-red-500" />
                          <span>Show Risk Areas</span>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input type="checkbox" id="toggle-risk" defaultChecked={true} className="absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer focus:outline-none checked:right-0 checked:border-ocean-teal" />
                          <label htmlFor="toggle-risk" className={`block overflow-hidden h-6 rounded-full cursor-pointer ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></label>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <InfoIcon className="h-5 w-5 mr-2 text-ocean-blue" />
                          <span>Show Map Legend</span>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input type="checkbox" id="toggle-legend" defaultChecked={true} className="absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer focus:outline-none checked:right-0 checked:border-ocean-teal" />
                          <label htmlFor="toggle-legend" className={`block overflow-hidden h-6 rounded-full cursor-pointer ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h5 className="text-sm font-medium mb-3">
                      Location Sharing
                    </h5>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center">
                            <MapPinIcon className="h-5 w-5 mr-2 text-green-500" />
                            <span>Share My Location</span>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-7">
                            Allow other fishers to see your location
                          </p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input type="checkbox" id="toggle-location" defaultChecked={true} className="absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer focus:outline-none checked:right-0 checked:border-ocean-teal" />
                          <label htmlFor="toggle-location" className={`block overflow-hidden h-6 rounded-full cursor-pointer ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></label>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center">
                            <AlertTriangleIcon className="h-5 w-5 mr-2 text-yellow-500" />
                            <span>Emergency Alerts</span>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-7">
                            Receive alerts from nearby fishers
                          </p>
                        </div>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input type="checkbox" id="toggle-alerts" defaultChecked={true} className="absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer focus:outline-none checked:right-0 checked:border-ocean-teal" />
                          <label htmlFor="toggle-alerts" className={`block overflow-hidden h-6 rounded-full cursor-pointer ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button className={`w-full py-2 rounded-md ${darkMode ? 'bg-ocean-deep text-ocean-teal border border-ocean-teal/30' : 'bg-ocean-teal/10 text-ocean-blue'}`}>
                      Reset to Default Settings
                    </button>
                  </div>
                </div>
              </div>}
          </DashboardCard>
        </div>
        <div className="lg:col-span-1">
          <DashboardCard className="p-5 mb-6">
            <h3 className="text-lg font-medium mb-4">GPS Status</h3>
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-green-900/20' : 'bg-green-50'} flex items-center mb-4`}>
              <div className={`h-3 w-3 rounded-full bg-green-500 mr-2 animate-pulse`}></div>
              <span className={`text-sm ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
                Signal: Strong
              </span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  Current Location
                </div>
                <div className="text-sm font-medium">13.7565, 121.0583</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  Distance from Shore
                </div>
                <div className="text-sm font-medium">5.2 km</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  Last Updated
                </div>
                <div className="text-sm font-medium">Just now</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button className="w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                <div className="flex items-center justify-center">
                  <AlertTriangleIcon className="h-5 w-5 mr-2" />
                  Send SOS Alert
                </div>
              </button>
            </div>
          </DashboardCard>
          <DashboardCard className="p-5">
            <h3 className="text-lg font-medium mb-4">Nearby Fishers</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`h-8 w-8 rounded-full ${darkMode ? 'bg-ocean-deep' : 'bg-ocean-teal/10'} flex items-center justify-center mr-2`}>
                    <UsersIcon className={`h-4 w-4 ${darkMode ? 'text-ocean-teal' : 'text-ocean-blue'}`} />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Juan Dela Cruz</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      5.2 km away
                    </div>
                  </div>
                </div>
                <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`h-8 w-8 rounded-full ${darkMode ? 'bg-red-900' : 'bg-red-100'} flex items-center justify-center mr-2`}>
                    <UsersIcon className="h-4 w-4 text-red-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Pedro Reyes</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      8.1 km away
                    </div>
                  </div>
                </div>
                <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-red-100 text-red-800">
                  SOS
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`h-8 w-8 rounded-full ${darkMode ? 'bg-ocean-deep' : 'bg-ocean-teal/10'} flex items-center justify-center mr-2`}>
                    <UsersIcon className={`h-4 w-4 ${darkMode ? 'text-ocean-teal' : 'text-ocean-blue'}`} />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Maria Santos</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      6.7 km away
                    </div>
                  </div>
                </div>
                <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
              </div>
            </div>
            <button className={`mt-4 w-full py-2 rounded-md text-sm ${darkMode ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors`}>
              View All Fishers
            </button>
          </DashboardCard>
        </div>
      </div>
    </div>;
}