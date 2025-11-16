import React, { useState } from 'react';
import SatelliteMap from '../../components/Map/SatelliteMap';
import { useAuth } from '../../contexts/AuthContext';
import { MapIcon, FilterIcon, UsersIcon, RefreshCwIcon, SearchIcon, ListIcon, AlertTriangleIcon } from 'lucide-react';
export function AdminGPSTracking() {
  const {
    user
  } = useAuth();
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            GPS Tracking
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Monitor fisher locations in {user?.region || 'your region'}
          </p>
        </div>
        {/* Filter controls */}
        <div className="flex space-x-2">
          <button onClick={() => setFilterType('all')} className={`px-3 py-1.5 rounded-lg text-sm ${filterType === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}>
            <UsersIcon className="h-4 w-4 inline-block mr-1" />
            All Fishers
          </button>
          <button onClick={() => setFilterType('active')} className={`px-3 py-1.5 rounded-lg text-sm ${filterType === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}>
            Active Only
          </button>
          <button onClick={() => setFilterType('alerts')} className={`px-3 py-1.5 rounded-lg text-sm ${filterType === 'alerts' ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}>
            <AlertTriangleIcon className="h-4 w-4 inline-block mr-1" />
            Alerts
          </button>
        </div>
      </div>

      {/* Search and refresh controls */}
      <div className="mb-4 flex flex-wrap gap-4 items-center">
        <div className="relative flex-grow max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input type="text" placeholder="Search by name or boat ID..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <RefreshCwIcon className="h-4 w-4 mr-1" />
          Auto-updating every 10 seconds
        </div>
        <div className="flex ml-auto space-x-2">
          <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
            <MapIcon className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
            <ListIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Map component */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        <SatelliteMap isAdmin={true} region={user?.region} height="h-[600px]" />
      </div>
    </div>;
}