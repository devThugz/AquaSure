import React, { useState } from 'react';
import { CloudLightningIcon, CloudRainIcon, WindIcon, SunIcon, PlusIcon, SearchIcon, FilterIcon, AlertTriangleIcon, SendIcon, EditIcon, TrashIcon, SaveIcon } from 'lucide-react';
export function AdminWeatherAlerts() {
  const [isAddAlertOpen, setIsAddAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertTitle, setAlertTitle] = useState('');
  const [alertDescription, setAlertDescription] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('medium');
  const [alertDuration, setAlertDuration] = useState('24');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSeverity, setFilterSeverity] = useState('all');
  const [selectedAlert, setSelectedAlert] = useState(null);
  // Mock weather alerts data
  const [weatherAlerts, setWeatherAlerts] = useState([{
    id: 1,
    type: 'storm',
    title: 'Tropical Storm Warning',
    description: 'Tropical Storm "Amihan" approaching from the east. Expected landfall in 24-36 hours. Strong winds and heavy rainfall expected. All fishing activities are suspended until further notice.',
    severity: 'high',
    icon: <CloudLightningIcon className="h-5 w-5" />,
    created: '2023-05-15T06:00:00',
    validUntil: '2023-05-16T18:00:00',
    sentTo: 'All fishermen',
    status: 'active'
  }, {
    id: 2,
    type: 'wind',
    title: 'Strong Wind Advisory',
    description: 'Strong winds of 25-35 km/h with gusts up to 45 km/h expected. Small boats are advised to take necessary precautions.',
    severity: 'medium',
    icon: <WindIcon className="h-5 w-5" />,
    created: '2023-05-14T16:00:00',
    validUntil: '2023-05-16T04:00:00',
    sentTo: 'Coastal area fishermen',
    status: 'active'
  }, {
    id: 3,
    type: 'rain',
    title: 'Heavy Rainfall Alert',
    description: 'Heavy rainfall expected in the next 12 hours. Possible flash floods in low-lying areas. Fishing activities may be affected.',
    severity: 'medium',
    icon: <CloudRainIcon className="h-5 w-5" />,
    created: '2023-05-13T10:00:00',
    validUntil: '2023-05-14T10:00:00',
    sentTo: 'All fishermen',
    status: 'expired'
  }]);
  const filteredAlerts = weatherAlerts.filter(alert => {
    const matchesSearch = alert.title.toLowerCase().includes(searchTerm.toLowerCase()) || alert.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = filterSeverity === 'all' || alert.severity === filterSeverity;
    return matchesSearch && matchesSeverity;
  });
  const handleCreateAlert = () => {
    const newAlert = {
      id: weatherAlerts.length + 1,
      type: alertType,
      title: alertTitle,
      description: alertDescription,
      severity: alertSeverity,
      icon: alertType === 'storm' ? <CloudLightningIcon className="h-5 w-5" /> : alertType === 'wind' ? <WindIcon className="h-5 w-5" /> : alertType === 'rain' ? <CloudRainIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />,
      created: new Date().toISOString(),
      validUntil: new Date(Date.now() + parseInt(alertDuration) * 60 * 60 * 1000).toISOString(),
      sentTo: 'All fishermen',
      status: 'active'
    };
    setWeatherAlerts([newAlert, ...weatherAlerts]);
    setIsAddAlertOpen(false);
    resetForm();
  };
  const resetForm = () => {
    setAlertType('');
    setAlertTitle('');
    setAlertDescription('');
    setAlertSeverity('medium');
    setAlertDuration('24');
  };
  const handleDeleteAlert = id => {
    setWeatherAlerts(weatherAlerts.filter(alert => alert.id !== id));
    if (selectedAlert && selectedAlert.id === id) {
      setSelectedAlert(null);
    }
  };
  const handleSendToAll = alert => {
    // In a real application, this would send the alert to all users
    alert('Alert sent to all fishermen!');
  };
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Weather Alerts</h2>
          <p className="text-gray-600 mt-1">
            Create and manage weather alerts for fishermen
          </p>
        </div>
        <button onClick={() => setIsAddAlertOpen(true)} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none">
          <PlusIcon className="h-5 w-5 mr-2" />
          Create New Alert
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow mb-6">
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Search alerts..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                </div>
                <div className="sm:w-64 flex items-center">
                  <FilterIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md" value={filterSeverity} onChange={e => setFilterSeverity(e.target.value)}>
                    <option value="all">All Severities</option>
                    <option value="high">High Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="low">Low Priority</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {filteredAlerts.length > 0 ? filteredAlerts.map(alert => <div key={alert.id} className={`p-4 border rounded-lg ${selectedAlert && selectedAlert.id === alert.id ? 'border-teal-300 bg-teal-50' : 'border-gray-200 hover:bg-gray-50'} cursor-pointer`} onClick={() => setSelectedAlert(alert)}>
                      <div className="flex items-start">
                        <div className={`flex-shrink-0 rounded-full p-2 ${alert.severity === 'high' ? 'bg-red-100 text-red-700' : alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'}`}>
                          {alert.icon}
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-gray-900">
                              {alert.title}
                            </h3>
                            <span className={`px-2 py-1 text-xs rounded-full ${alert.severity === 'high' ? 'bg-red-100 text-red-800' : alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                              {alert.severity === 'high' ? 'High Priority' : alert.severity === 'medium' ? 'Medium Priority' : 'Low Priority'}
                            </span>
                          </div>
                          <div className="mt-1 text-sm text-gray-700 line-clamp-2">
                            {alert.description}
                          </div>
                          <div className="mt-2 flex justify-between items-center">
                            <div className="text-xs text-gray-500">
                              {new Date(alert.created).toLocaleString()} •
                              {alert.status === 'active' ? ' Active' : ' Expired'}
                            </div>
                            <div className="flex space-x-2">
                              <button onClick={e => {
                          e.stopPropagation();
                          handleDeleteAlert(alert.id);
                        }} className="text-gray-400 hover:text-red-500">
                                <TrashIcon className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>) : <div className="text-center py-10">
                    <AlertTriangleIcon className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">
                      No alerts found
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Try adjusting your search or filter to find what you're
                      looking for.
                    </p>
                  </div>}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          {selectedAlert ? <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Alert Details
                </h3>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-blue-500">
                    <EditIcon className="h-5 w-5" />
                  </button>
                  <button onClick={() => handleDeleteAlert(selectedAlert.id)} className="text-gray-400 hover:text-red-500">
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Alert Type</p>
                  <div className="flex items-center mt-1">
                    <div className={`rounded-full p-1 ${selectedAlert.severity === 'high' ? 'bg-red-100 text-red-700' : selectedAlert.severity === 'medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'}`}>
                      {selectedAlert.icon}
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-900">
                      {selectedAlert.type.charAt(0).toUpperCase() + selectedAlert.type.slice(1)}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Title</p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {selectedAlert.title}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Description</p>
                  <p className="mt-1 text-sm text-gray-900">
                    {selectedAlert.description}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Created</p>
                    <p className="mt-1 text-sm text-gray-900">
                      {new Date(selectedAlert.created).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Valid Until</p>
                    <p className="mt-1 text-sm text-gray-900">
                      {new Date(selectedAlert.validUntil).toLocaleString()}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Sent To</p>
                  <p className="mt-1 text-sm text-gray-900">
                    {selectedAlert.sentTo}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <span className={`mt-1 inline-flex px-2 py-1 text-xs font-medium rounded-full ${selectedAlert.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {selectedAlert.status.charAt(0).toUpperCase() + selectedAlert.status.slice(1)}
                  </span>
                </div>
                <div className="pt-4">
                  <button onClick={() => handleSendToAll(selectedAlert)} className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none">
                    <SendIcon className="h-5 w-5 mr-2" />
                    Send to All Fishermen
                  </button>
                </div>
              </div>
            </div> : <div className="bg-white rounded-lg shadow p-6">
              <div className="text-center py-8">
                <AlertTriangleIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No alert selected
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Select an alert to view its details
                </p>
              </div>
            </div>}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Current Weather
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-blue-50 p-3 rounded-full">
                  <SunIcon className="h-10 w-10 text-yellow-500" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">29°C</p>
                  <p className="text-sm text-gray-500">Partly Cloudy</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Wind: 15 km/h</p>
                <p className="text-sm text-gray-500">Humidity: 78%</p>
                <p className="text-sm text-gray-500">Visibility: 10 km</p>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                View Full Weather Report
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Create Alert Modal */}
      {isAddAlertOpen && <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setIsAddAlertOpen(false)}></div>
          <div className="relative bg-white rounded-lg max-w-lg w-full mx-auto p-6 shadow-xl">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Create New Weather Alert
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Alert Type
                </label>
                <div className="mt-2 grid grid-cols-4 gap-2">
                  <button type="button" onClick={() => setAlertType('storm')} className={`flex flex-col items-center justify-center p-3 border rounded-md ${alertType === 'storm' ? 'bg-teal-50 border-teal-300 text-teal-700' : 'border-gray-300 hover:bg-gray-50'}`}>
                    <CloudLightningIcon className="h-6 w-6 mb-1" />
                    <span className="text-xs">Storm</span>
                  </button>
                  <button type="button" onClick={() => setAlertType('wind')} className={`flex flex-col items-center justify-center p-3 border rounded-md ${alertType === 'wind' ? 'bg-teal-50 border-teal-300 text-teal-700' : 'border-gray-300 hover:bg-gray-50'}`}>
                    <WindIcon className="h-6 w-6 mb-1" />
                    <span className="text-xs">Wind</span>
                  </button>
                  <button type="button" onClick={() => setAlertType('rain')} className={`flex flex-col items-center justify-center p-3 border rounded-md ${alertType === 'rain' ? 'bg-teal-50 border-teal-300 text-teal-700' : 'border-gray-300 hover:bg-gray-50'}`}>
                    <CloudRainIcon className="h-6 w-6 mb-1" />
                    <span className="text-xs">Rain</span>
                  </button>
                  <button type="button" onClick={() => setAlertType('other')} className={`flex flex-col items-center justify-center p-3 border rounded-md ${alertType === 'other' ? 'bg-teal-50 border-teal-300 text-teal-700' : 'border-gray-300 hover:bg-gray-50'}`}>
                    <AlertTriangleIcon className="h-6 w-6 mb-1" />
                    <span className="text-xs">Other</span>
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="alert-title" className="block text-sm font-medium text-gray-700">
                  Alert Title
                </label>
                <input type="text" id="alert-title" value={alertTitle} onChange={e => setAlertTitle(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="e.g., Tropical Storm Warning" />
              </div>
              <div>
                <label htmlFor="alert-description" className="block text-sm font-medium text-gray-700">
                  Alert Description
                </label>
                <textarea id="alert-description" rows={4} value={alertDescription} onChange={e => setAlertDescription(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Provide detailed information about the weather alert..."></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Alert Severity
                </label>
                <div className="mt-2 flex space-x-4">
                  <label className="inline-flex items-center">
                    <input type="radio" name="severity" value="high" checked={alertSeverity === 'high'} onChange={() => setAlertSeverity('high')} className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300" />
                    <span className="ml-2 text-sm text-gray-700">
                      High Priority
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="severity" value="medium" checked={alertSeverity === 'medium'} onChange={() => setAlertSeverity('medium')} className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300" />
                    <span className="ml-2 text-sm text-gray-700">
                      Medium Priority
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="severity" value="low" checked={alertSeverity === 'low'} onChange={() => setAlertSeverity('low')} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                    <span className="ml-2 text-sm text-gray-700">
                      Low Priority
                    </span>
                  </label>
                </div>
              </div>
              <div>
                <label htmlFor="alert-duration" className="block text-sm font-medium text-gray-700">
                  Valid Duration (hours)
                </label>
                <input type="number" id="alert-duration" value={alertDuration} onChange={e => setAlertDuration(e.target.value)} min="1" max="72" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button type="button" onClick={() => {
              setIsAddAlertOpen(false);
              resetForm();
            }} className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                  Cancel
                </button>
                <button type="button" onClick={handleCreateAlert} disabled={!alertType || !alertTitle || !alertDescription} className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none disabled:bg-gray-300 disabled:cursor-not-allowed">
                  <SaveIcon className="h-4 w-4 mr-2 inline-block" />
                  Create Alert
                </button>
              </div>
            </form>
          </div>
        </div>}
    </div>;
}