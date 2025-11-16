import React, { useState } from 'react';
import SatelliteMap from '../../components/Map/SatelliteMap';
import { useAuth } from '../../contexts/AuthContext';
import { MapIcon, FilterIcon, UsersIcon, RefreshCwIcon, SearchIcon, ListIcon, AlertTriangleIcon, GlobeIcon } from 'lucide-react';
export function GPSTracking() {
  const {
    user
  } = useAuth();
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  // List of regions
  const regions = ['All Regions', 'Batangas', 'Cebu', 'Davao', 'Iloilo', 'Zambales', 'Palawan', 'Mindoro'];
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Global GPS Tracking
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Monitor all fisher locations across regions
          </p>
        </div>
        {/* Region selector */}
        <div className="flex items-center">
          <GlobeIcon className="h-5 w-5 text-gray-400 mr-2" />
          <select value={selectedRegion || 'All Regions'} onChange={e => setSelectedRegion(e.target.value === 'All Regions' ? null : e.target.value)} className="block w-40 pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-lg">
            {regions.map(region => <option key={region} value={region}>
                {region}
              </option>)}
          </select>
        </div>
      </div>

      {/* Filter controls */}
      <div className="mb-4 flex flex-wrap gap-4 items-center">
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
        <div className="relative flex-grow max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input type="text" placeholder="Search by name, boat ID, or region..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 ml-auto">
          <RefreshCwIcon className="h-4 w-4 mr-1" />
          Auto-updating every 10 seconds
        </div>
      </div>

      {/* Map component */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        <SatelliteMap isSuperAdmin={true} isAdmin={true} region={selectedRegion} height="h-[700px]" />
      </div>
    </div>;
}