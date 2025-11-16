import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { AlertTriangleIcon, MapPinIcon, PhoneIcon, MessageSquareIcon, SendIcon, InfoIcon, AnchorIcon, ThermometerIcon, HeartIcon } from 'lucide-react';
export function EmergencyReport() {
  const {
    darkMode
  } = useTheme();
  const [emergencyType, setEmergencyType] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState({
    lat: 13.7565,
    lng: 121.0583
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [showLocationPrompt, setShowLocationPrompt] = useState(false);
  // Mock function to get current location
  const getCurrentLocation = () => {
    setShowLocationPrompt(false);
    setIsLoading(true);
    // Simulate location fetching
    setTimeout(() => {
      setLocation({
        lat: 13.7565,
        lng: 121.0583
      });
      setIsLoading(false);
    }, 1500);
  };
  const sendEmergencyReport = () => {
    if (!emergencyType) {
      alert('Please select an emergency type');
      return;
    }
    setIsLoading(true);
    // Simulate sending report
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSent(false);
        setEmergencyType('');
        setDescription('');
      }, 5000);
    }, 2000);
  };
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Emergency Report
        </h2>
        <p className={`mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Quickly report emergencies and get help from local authorities
        </p>
      </div>
      {showLocationPrompt && <div className={`${darkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-400'} border-l-4 p-4 mb-6`}>
          <div className="flex">
            <div className="flex-shrink-0">
              <InfoIcon className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-400'}`} />
            </div>
            <div className="ml-3">
              <p className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                This feature needs your location to send accurate emergency
                reports. Would you like to share your location?
              </p>
              <div className="mt-2 flex space-x-3">
                <button onClick={getCurrentLocation} className={`px-3 py-1 rounded text-sm font-medium ${darkMode ? 'bg-blue-800 hover:bg-blue-700 text-blue-100' : 'bg-blue-100 hover:bg-blue-200 text-blue-800'}`}>
                  Share Location
                </button>
                <button onClick={() => setShowLocationPrompt(false)} className={`px-3 py-1 rounded text-sm font-medium border ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-600' : 'bg-white hover:bg-gray-100 text-gray-600 border-gray-300'}`}>
                  Not Now
                </button>
              </div>
            </div>
          </div>
        </div>}
      {isSent ? <div className={`${darkMode ? 'bg-green-900/20 border-green-700' : 'bg-green-50 border-green-200'} border rounded-lg p-6 text-center`}>
          <div className={`rounded-full ${darkMode ? 'bg-green-800/50' : 'bg-green-100'} p-3 mx-auto w-fit`}>
            <AlertTriangleIcon className={`h-8 w-8 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
          </div>
          <h3 className={`mt-4 text-lg font-medium ${darkMode ? 'text-green-400' : 'text-green-800'}`}>
            Emergency Report Sent!
          </h3>
          <p className={`mt-2 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>
            Your emergency report has been sent to local authorities. Help is on
            the way.
          </p>
          <p className={`mt-1 text-sm ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
            Stay in your current location if possible and keep your phone on.
          </p>
        </div> : <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className={`lg:col-span-2 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow p-6`}>
            <div className="mb-6">
              <h3 className={`text-lg font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Report an Emergency
              </h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Select the type of emergency and provide any relevant details
              </p>
            </div>
            <div className="mb-6">
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Emergency Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button type="button" onClick={() => setEmergencyType('boat')} className={`flex flex-col items-center justify-center p-4 rounded-lg ${emergencyType === 'boat' ? darkMode ? 'bg-red-900/30 border-red-700 text-red-400' : 'bg-red-50 border-red-300 text-red-700' : darkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-300 hover:bg-gray-50'} border`}>
                  <AnchorIcon className={`h-6 w-6 mb-2 ${emergencyType === 'boat' ? darkMode ? 'text-red-400' : 'text-red-500' : darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
                  <span className="text-sm font-medium">Boat Malfunction</span>
                </button>
                <button type="button" onClick={() => setEmergencyType('weather')} className={`flex flex-col items-center justify-center p-4 rounded-lg ${emergencyType === 'weather' ? darkMode ? 'bg-red-900/30 border-red-700 text-red-400' : 'bg-red-50 border-red-300 text-red-700' : darkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-300 hover:bg-gray-50'} border`}>
                  <ThermometerIcon className={`h-6 w-6 mb-2 ${emergencyType === 'weather' ? darkMode ? 'text-red-400' : 'text-red-500' : darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
                  <span className="text-sm font-medium">Weather Issue</span>
                </button>
                <button type="button" onClick={() => setEmergencyType('medical')} className={`flex flex-col items-center justify-center p-4 rounded-lg ${emergencyType === 'medical' ? darkMode ? 'bg-red-900/30 border-red-700 text-red-400' : 'bg-red-50 border-red-300 text-red-700' : darkMode ? 'border-gray-700 hover:bg-gray-700/50' : 'border-gray-300 hover:bg-gray-50'} border`}>
                  <HeartIcon className={`h-6 w-6 mb-2 ${emergencyType === 'medical' ? darkMode ? 'text-red-400' : 'text-red-500' : darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
                  <span className="text-sm font-medium">Medical Emergency</span>
                </button>
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="description" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Emergency Details
              </label>
              <textarea id="description" rows={4} className={`block w-full rounded-md shadow-sm sm:text-sm
                  ${darkMode ? 'bg-gray-700 border-gray-600 text-white focus:border-ocean-teal focus:ring-ocean-teal' : 'border-gray-300 focus:border-red-500 focus:ring-red-500'}`} placeholder="Describe your emergency situation..." value={description} onChange={e => setDescription(e.target.value)}></textarea>
            </div>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Your Current Location
                </label>
                <button type="button" onClick={() => setShowLocationPrompt(true)} className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                  Update Location
                </button>
              </div>
              <div className={`p-3 rounded-md flex items-center ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <MapPinIcon className="h-5 w-5 text-red-500 mr-2" />
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {isLoading ? 'Getting your location...' : `${location.lat.toFixed(4)}°N, ${location.lng.toFixed(4)}°E`}
                </span>
              </div>
              <p className={`mt-1 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                This location will be sent to emergency responders
              </p>
            </div>
            <div>
              <button type="button" onClick={sendEmergencyReport} disabled={isLoading} className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                  ${isLoading ? 'bg-red-300 dark:bg-red-800/50' : 'bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50`}>
                {isLoading ? <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </> : <>
                    <AlertTriangleIcon className="h-5 w-5 mr-2" />
                    Send Emergency Report
                  </>}
              </button>
            </div>
          </div>
          <div className="space-y-6">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow p-6`}>
              <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Emergency Contacts
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <PhoneIcon className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                      Coast Guard Hotline
                    </h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      +63 (2) 8527-8481
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <PhoneIcon className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                      Local Emergency
                    </h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      911
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <PhoneIcon className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                      LGU Office
                    </h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      +63 (2) 8123-4567
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow p-6`}>
              <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Emergency Tips
              </h3>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-1"></div>
                  </div>
                  <p className="ml-2">
                    Stay calm and provide clear information
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-1"></div>
                  </div>
                  <p className="ml-2">If possible, stay with your boat</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-1"></div>
                  </div>
                  <p className="ml-2">Preserve battery life on your phone</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-1"></div>
                  </div>
                  <p className="ml-2">Use emergency signals if available</p>
                </li>
              </ul>
            </div>
            <div className={`${darkMode ? 'bg-blue-900/20 border-blue-800' : 'bg-blue-50 border-blue-200'} rounded-lg p-4 border`}>
              <div className="flex">
                <div className="flex-shrink-0">
                  <InfoIcon className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-400'}`} />
                </div>
                <div className="ml-3">
                  <h3 className={`text-sm font-medium ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                    Non-Emergency Help
                  </h3>
                  <div className={`mt-2 text-sm ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                    <p>Need assistance but not an emergency?</p>
                    <button className={`mt-2 inline-flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
                      <MessageSquareIcon className="h-4 w-4 mr-1" />
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
    </div>;
}