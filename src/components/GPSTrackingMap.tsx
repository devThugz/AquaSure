import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPinIcon, PhoneIcon, NavigationIcon, UsersIcon, AlertTriangleIcon, SearchIcon, RefreshCwIcon, ClockIcon, MapIcon, LayersIcon } from 'lucide-react';
import { DEFAULT_MAP_SETTINGS, SATELLITE_TILE_LAYER_URL, SATELLITE_TILE_LAYER_ATTRIBUTION, ENHANCED_SATELLITE_TILE_LAYER_URL, ENHANCED_SATELLITE_TILE_LAYER_ATTRIBUTION, TILE_LAYER_URL, TILE_LAYER_ATTRIBUTION, MODERN_MAP_STYLES } from './LeafletConfig';
// Fix Leaflet marker icon issue
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
// Map type switcher component
const MapTypeSwitcher = ({
  mapType,
  setMapType
}) => {
  const mapRef = useRef(null);
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    // This effect handles changing the base tile layer
    const layers = map._layers;
    for (const layerId in layers) {
      const layer = layers[layerId];
      if (layer.options && layer.options.attribution) {
        map.removeLayer(layer);
      }
    }
    if (mapType === 'satellite') {
      L.tileLayer(ENHANCED_SATELLITE_TILE_LAYER_URL, {
        attribution: ENHANCED_SATELLITE_TILE_LAYER_ATTRIBUTION,
        maxZoom: 19
      }).addTo(map);
    } else if (mapType === 'satellite-streets') {
      L.tileLayer(SATELLITE_TILE_LAYER_URL, {
        attribution: SATELLITE_TILE_LAYER_ATTRIBUTION,
        maxZoom: 19
      }).addTo(map);
    } else {
      L.tileLayer(TILE_LAYER_URL, {
        attribution: TILE_LAYER_ATTRIBUTION,
        maxZoom: 19
      }).addTo(map);
    }
    // Apply modern styling to map container
    if (mapType.includes('satellite') && map._container) {
      map._container.style.filter = MODERN_MAP_STYLES.satellite.mapStyle.filter;
    } else if (map._container) {
      map._container.style.filter = 'none';
    }
  }, [mapRef, mapType]);
  return null;
};
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;
interface GPSTrackingMapProps {
  isSuperAdmin: boolean;
}
const GPSTrackingMap: React.FC<GPSTrackingMapProps> = ({
  isSuperAdmin
}) => {
  // Map state - setting enhanced satellite as default
  const [mapType, setMapType] = useState('satellite');
  const [lng, setLng] = useState(DEFAULT_MAP_SETTINGS.center[1]);
  const [lat, setLat] = useState(DEFAULT_MAP_SETTINGS.center[0]);
  const [zoom, setZoom] = useState(DEFAULT_MAP_SETTINGS.zoom);
  const [map, setMap] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [secondsSinceUpdate, setSecondsSinceUpdate] = useState(0);
  // Fisher data state
  const [fishers, setFishers] = useState([]);
  const [selectedFisher, setSelectedFisher] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  // Mock fishermen location data
  const mockFishers = [{
    id: 1,
    name: 'Juan Dela Cruz',
    boatId: 'BT-2023-001',
    status: 'active',
    lastActive: '0 seconds ago',
    region: 'Batangas',
    organization: 'Batangas Fishing Association',
    phone: '+63 956 789 0123',
    location: {
      lat: 13.7565,
      lng: 121.0583
    },
    departureTime: '05:00 AM today',
    returnTime: '03:30 PM today',
    distance: '5 km'
  }, {
    id: 2,
    name: 'Maria Santos',
    boatId: 'BT-2023-015',
    status: 'active',
    lastActive: '0 seconds ago',
    region: 'Palawan',
    organization: 'Palawan Fishers Cooperative',
    phone: '+63 923 456 7890',
    location: {
      lat: 13.7612,
      lng: 121.0498
    },
    departureTime: '04:30 AM today',
    returnTime: '02:00 PM today',
    distance: '7.2 km'
  }, {
    id: 3,
    name: 'Pedro Reyes',
    boatId: 'BT-2023-042',
    status: 'inactive',
    lastActive: '40 minutes ago',
    region: 'Cebu',
    organization: 'Cebu Fishing Alliance',
    phone: '+63 934 567 8901',
    location: {
      lat: 13.7421,
      lng: 121.0621
    },
    departureTime: '06:15 AM yesterday',
    returnTime: '04:45 PM yesterday',
    distance: '0 km'
  }, {
    id: 4,
    name: 'Ana Gonzales',
    boatId: 'BT-2023-078',
    status: 'sos',
    lastActive: '5 minutes ago',
    region: 'Mindoro',
    organization: 'Mindoro Sustainable Fishing',
    phone: '+63 945 678 9012',
    location: {
      lat: 13.7689,
      lng: 121.0412
    },
    departureTime: '03:45 AM today',
    returnTime: 'Unknown',
    distance: '12.3 km'
  }, {
    id: 5,
    name: 'Roberto Lim',
    boatId: 'BT-2023-019',
    status: 'active',
    lastActive: '0 seconds ago',
    region: 'Batangas',
    organization: 'Batangas Fishing Association',
    phone: '+63 956 789 9123',
    location: {
      lat: 13.7532,
      lng: 121.0701
    },
    departureTime: '05:00 AM today',
    returnTime: '03:30 PM today',
    distance: '5 km'
  }];
  // Create custom marker icon for fishermen with futuristic style
  const createCustomIcon = status => {
    let color, glowColor;
    switch (status) {
      case 'active':
        color = '#22c55e';
        glowColor = 'rgba(34, 197, 94, 0.6)';
        break;
      case 'inactive':
        color = '#94a3b8';
        glowColor = 'rgba(148, 163, 184, 0.6)';
        break;
      case 'sos':
        color = '#ef4444';
        glowColor = 'rgba(239, 68, 68, 0.7)';
        break;
      case 'weather':
        color = '#eab308';
        glowColor = 'rgba(234, 179, 8, 0.7)';
        break;
      default:
        color = '#22c55e';
        glowColor = 'rgba(34, 197, 94, 0.6)';
    }
    return L.divIcon({
      className: 'custom-div-icon',
      html: `
        <div style="
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
        ">
          <!-- Outer glow -->
          <div style="
            position: absolute;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: radial-gradient(circle, ${glowColor} 0%, rgba(0,212,255,0) 70%);
            opacity: 0.8;
            filter: blur(5px);
            animation: pulse 2.5s infinite ease-in-out;
          "></div>
          <!-- Middle glow -->
          <div style="
            position: absolute;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background-color: ${color};
            opacity: 0.3;
            filter: blur(4px);
            animation: pulse 2s infinite ease-in-out;
            animation-delay: 0.2s;
          "></div>
          <!-- Core marker -->
          <div style="
            position: absolute;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background-color: ${color};
            box-shadow: 0 0 10px ${glowColor}, inset 0 0 5px rgba(255, 255, 255, 0.8);
            z-index: 2;
            border: 2px solid rgba(255, 255, 255, 0.7);
          "></div>
          ${status === 'active' ? `
            <!-- Ping animation for active markers -->
            <div style="
              position: absolute;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              border: 2px solid ${color};
              opacity: 0.7;
              animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
            "></div>
            <!-- Holographic ring -->
            <div style="
              position: absolute;
              width: 34px;
              height: 34px;
              border-radius: 50%;
              border: 1px solid rgba(255, 255, 255, 0.3);
              opacity: 0.5;
              animation: rotate 4s linear infinite;
              z-index: 1;
              box-shadow: 0 0 5px ${glowColor};
              transform: rotate(45deg);
            "></div>
          ` : ''}
          ${status === 'sos' ? `
            <!-- Urgent alert indicator -->
            <div style="
              position: absolute;
              width: 100%;
              height: 100%;
              border-radius: 50%;
              background-color: transparent;
              border: 2px solid #ef4444;
              z-index: 3;
              animation: blink 1s infinite;
            "></div>
            <!-- SOS ripple effect -->
            <div style="
              position: absolute;
              width: 50px;
              height: 50px;
              border-radius: 50%;
              border: 2px solid #ef4444;
              opacity: 0.7;
              animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
            "></div>
          ` : ''}
          ${status === 'weather' ? `
            <!-- Weather warning indicator -->
            <div style="
              position: absolute;
              top: -8px;
              right: -8px;
              width: 12px;
              height: 12px;
              border-radius: 50%;
              background-color: #eab308;
              border: 1px solid white;
              z-index: 3;
              animation: pulse 1.5s infinite;
            "></div>
          ` : ''}
        </div>
      `,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
      popupAnchor: [0, -15]
    });
  };
  // Initialize fishers data
  useEffect(() => {
    setFishers(mockFishers);
    if (mockFishers.length > 0) {
      setSelectedFisher(mockFishers[0]);
    }
  }, []);
  // Update seconds since last update
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsSinceUpdate(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  // Simulate data refresh every 10 seconds
  useEffect(() => {
    const refreshInterval = setInterval(() => {
      setLastUpdated(new Date());
      setSecondsSinceUpdate(0);
      // Simulate data update - in a real app this would fetch from API
      const updatedFishers = [...mockFishers].map(fisher => ({
        ...fisher,
        lastActive: fisher.status === 'active' ? '0 seconds ago' : fisher.lastActive
      }));
      setFishers(updatedFishers);
    }, 10000);
    return () => clearInterval(refreshInterval);
  }, []);
  // Filter fishers based on status and search term
  const filteredFishers = fishers.filter(fisher => {
    const matchesFilter = filterType === 'all' || filterType === 'active' && fisher.status === 'active' || filterType === 'alerts' && (fisher.status === 'sos' || fisher.status === 'weather');
    const matchesSearch = searchTerm === '' || fisher.name.toLowerCase().includes(searchTerm.toLowerCase()) || fisher.boatId.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  // Handle map move end event
  const handleMapMoveEnd = () => {
    if (map) {
      const center = map.getCenter();
      setLat(center.lat);
      setLng(center.lng);
      setZoom(map.getZoom());
    }
  };
  // Handle fisher selection
  const handleFisherSelect = fisher => {
    setSelectedFisher(fisher);
    if (map) {
      map.setView([fisher.location.lat, fisher.location.lng], 14, {
        animate: true,
        duration: 1
      });
    }
  };
  // Toggle map type
  const toggleMapType = () => {
    if (mapType === 'satellite') {
      setMapType('satellite-streets');
    } else if (mapType === 'satellite-streets') {
      setMapType('standard');
    } else {
      setMapType('satellite');
    }
  };
  return <div>
      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(0.9);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
          100% {
            transform: scale(0.9);
            opacity: 0.7;
          }
        }
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
        .status-indicator {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 6px;
        }
        .status-active {
          background-color: #22c55e;
        }
        .status-inactive {
          background-color: #94a3b8;
        }
        .status-sos {
          background-color: #ef4444;
          animation: pulse 1s infinite;
        }
        .status-weather {
          background-color: #eab308;
        }
        .fisher-list-item {
          transition: all 0.2s ease;
          border-left: 3px solid transparent;
        }
        .fisher-list-item:hover {
          background-color: rgba(56, 189, 248, 0.05);
        }
        .fisher-list-item.selected {
          border-left-color: #0ea5e9;
          background-color: rgba(56, 189, 248, 0.1);
        }
        /* Modern map styling */
        .leaflet-container {
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          overflow: hidden;
        }
        .map-toggle-button {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.2s ease;
        }
        .map-toggle-button:hover {
          background: rgba(255, 255, 255, 1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        /* Water overlay effect */
        .water-overlay {
          background: linear-gradient(
            180deg,
            rgba(0, 30, 60, 0) 0%,
            rgba(0, 30, 60, 0.15) 100%
          );
          mix-blend-mode: soft-light;
          pointer-events: none;
        }
      `}</style>
      <div className="mb-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Filter buttons */}
          <div className="flex space-x-2 mb-2 sm:mb-0">
            <button onClick={() => setFilterType('all')} className={`px-3 py-1.5 rounded-md text-sm ${filterType === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}>
              All Fishers
            </button>
            <button onClick={() => setFilterType('active')} className={`px-3 py-1.5 rounded-md text-sm ${filterType === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}>
              Active Only
            </button>
            <button onClick={() => setFilterType('alerts')} className={`px-3 py-1.5 rounded-md text-sm ${filterType === 'alerts' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}>
              <AlertTriangleIcon className="h-4 w-4 inline-block mr-1" />
              Alerts
            </button>
          </div>
          {/* Update status */}
          <div className="flex items-center text-xs text-gray-500">
            <RefreshCwIcon className="h-3 w-3 mr-1" />
            Updates every 10 seconds • Last updated: {secondsSinceUpdate}{' '}
            seconds ago
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Map */}
        <div className="lg:col-span-2">
          <div className="h-96 rounded-lg overflow-hidden relative">
            <MapContainer center={[lat, lng]} zoom={zoom} style={{
            height: '100%',
            width: '100%'
          }} zoomControl={false} whenReady={mapInstance => {
            setMap(mapInstance.target);
            setMapLoaded(true);
            // Apply modern styling
            if (mapInstance.target._container) {
              mapInstance.target._container.style.filter = MODERN_MAP_STYLES.satellite.mapStyle.filter;
            }
          }}>
              <MapTypeSwitcher mapType={mapType} setMapType={setMapType} />
              <ZoomControl position="topright" />
              {fishers.map(fisher => <Marker key={fisher.id} position={[fisher.location.lat, fisher.location.lng]} icon={createCustomIcon(fisher.status)} eventHandlers={{
              click: () => handleFisherSelect(fisher)
            }}>
                  <Popup>
                    <div className="p-2">
                      <h4 className="font-medium text-sm">{fisher.name}</h4>
                      <p className="text-xs text-gray-500">{fisher.boatId}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        <span className={`inline-block w-2 h-2 rounded-full ${fisher.status === 'active' ? 'bg-green-500' : fisher.status === 'inactive' ? 'bg-gray-500' : fisher.status === 'sos' ? 'bg-red-500' : 'bg-yellow-500'} mr-1`}></span>
                        {fisher.status.toUpperCase()} • {fisher.lastActive}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {fisher.region}
                      </p>
                    </div>
                  </Popup>
                </Marker>)}
              {/* Map type toggle button */}
              <div className="absolute top-4 right-4 z-[1000] map-toggle-button p-2 cursor-pointer" onClick={toggleMapType}>
                {mapType === 'satellite' ? <LayersIcon className="h-5 w-5 text-gray-600" /> : mapType === 'satellite-streets' ? <MapIcon className="h-5 w-5 text-gray-600" /> : <LayersIcon className="h-5 w-5 text-gray-600" />}
              </div>
              {/* Map legend */}
              <div className="absolute bottom-4 left-4 z-[1000] bg-white bg-opacity-90 backdrop-filter backdrop-blur-md rounded-md shadow-md p-3">
                <div className="text-xs font-medium text-gray-700 mb-2">
                  Map Legend
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="status-indicator status-active"></span>
                    <span className="text-xs text-gray-600">Active</span>
                  </div>
                  <div className="flex items-center">
                    <span className="status-indicator status-inactive"></span>
                    <span className="text-xs text-gray-600">Inactive</span>
                  </div>
                  <div className="flex items-center">
                    <span className="status-indicator status-sos"></span>
                    <span className="text-xs text-gray-600">SOS</span>
                  </div>
                </div>
              </div>
              {/* Map type indicator */}
              <div className="absolute top-4 left-4 z-[1000] bg-white bg-opacity-80 backdrop-filter backdrop-blur-md rounded-lg shadow-md px-3 py-1 text-xs font-medium text-gray-700 border border-gray-100">
                {mapType === 'satellite' ? 'Satellite View' : mapType === 'satellite-streets' ? 'Satellite with Streets' : 'Standard View'}
              </div>
              {/* Water overlay for aesthetic effect */}
              {mapType.includes('satellite') && <div className="water-overlay absolute inset-0" style={{
              ...MODERN_MAP_STYLES.satellite.overlayStyle,
              zIndex: 400
            }}></div>}
            </MapContainer>
          </div>
        </div>
        {/* Fisher list */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-4 h-96 flex flex-col border border-gray-100">
            <div className="mb-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-4 w-4 text-gray-400" />
                </div>
                <input type="text" placeholder="Search fishers..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="mt-2 text-xs text-gray-500">
                <UsersIcon className="h-3 w-3 inline-block mr-1" />
                <span className="font-medium">
                  {filteredFishers.length}
                </span>{' '}
                fishers {filterType !== 'all' && '(filtered)'}
              </div>
            </div>
            <div className="overflow-y-auto flex-grow">
              {filteredFishers.length > 0 ? <div className="space-y-2">
                  {filteredFishers.map(fisher => <div key={fisher.id} className={`fisher-list-item p-3 rounded-lg cursor-pointer ${selectedFisher?.id === fisher.id ? 'selected' : ''}`} onClick={() => handleFisherSelect(fisher)}>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="flex items-center">
                            <span className={`status-indicator status-${fisher.status}`}></span>
                            <span className="font-medium text-gray-900">
                              {fisher.name}
                            </span>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {fisher.boatId}
                          </div>
                        </div>
                        {fisher.status === 'sos' && <span className="px-1.5 py-0.5 rounded-md bg-red-100 text-red-800 text-xs font-medium">
                            SOS
                          </span>}
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <div className="text-xs text-gray-500">
                          {fisher.region}
                        </div>
                        <div className="text-xs text-gray-500">
                          <ClockIcon className="h-3 w-3 inline-block mr-0.5" />
                          {fisher.lastActive}
                        </div>
                      </div>
                    </div>)}
                </div> : <div className="text-center py-8">
                  <UsersIcon className="mx-auto h-12 w-12 text-gray-300" />
                  <p className="mt-2 text-sm font-medium text-gray-900">
                    No fishers found
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Try adjusting your search or filter
                  </p>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default GPSTrackingMap;