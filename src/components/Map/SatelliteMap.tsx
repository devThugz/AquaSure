import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, LayerGroup, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { MapPinIcon, PhoneIcon, MessageSquareIcon, NavigationIcon, AlertTriangleIcon, LayersIcon, UserIcon } from 'lucide-react';
// Default map settings for Philippines waters
const DEFAULT_MAP_SETTINGS = {
  center: [13.7565, 121.0583],
  zoom: 10
};
// Risk area data (areas with warnings)
const riskAreas = [{
  center: [13.7665, 121.0483],
  radius: 2000,
  level: 'high',
  reason: 'Strong currents and rough seas reported'
}, {
  center: [13.7465, 121.0783],
  radius: 1500,
  level: 'moderate',
  reason: 'Weather system approaching'
}, {
  center: [13.7865, 121.0183],
  radius: 1800,
  level: 'low',
  reason: 'Restricted fishing zone'
}];
// Risk overlay configuration
const RISK_OVERLAY_CONFIG = {
  high: {
    color: 'rgba(239, 68, 68, 0.4)',
    borderColor: 'rgba(239, 68, 68, 0.8)'
  },
  moderate: {
    color: 'rgba(234, 179, 8, 0.4)',
    borderColor: 'rgba(234, 179, 8, 0.8)'
  },
  low: {
    color: 'rgba(34, 197, 94, 0.4)',
    borderColor: 'rgba(34, 197, 94, 0.8)'
  }
};
// Tile layer configurations
const SATELLITE_TILE_LAYER_URL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
const SATELLITE_ATTRIBUTION = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
const OSM_TILE_LAYER_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const OSM_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
// Mock data generator for fisher locations
const getMockFisherLocations = () => {
  return [{
    userId: '1',
    name: 'Juan Dela Cruz',
    boatId: 'BT-123',
    status: 'active',
    alert: null,
    latitude: 13.7565,
    longitude: 121.0583,
    region: 'Batangas',
    municipality: 'Batangas City',
    distanceFromShore: '5.2 km',
    phone: '+63 912 345 6789',
    lastUpdated: new Date()
  }, {
    userId: '2',
    name: 'Maria Santos',
    boatId: 'BT-456',
    status: 'active',
    alert: null,
    latitude: 13.7665,
    longitude: 121.0683,
    region: 'Batangas',
    municipality: 'Batangas City',
    distanceFromShore: '6.7 km',
    phone: '+63 923 456 7890',
    lastUpdated: new Date()
  }, {
    userId: '3',
    name: 'Pedro Reyes',
    boatId: 'BT-789',
    status: 'active',
    alert: 'sos',
    latitude: 13.7765,
    longitude: 121.0483,
    region: 'Batangas',
    municipality: 'Batangas City',
    distanceFromShore: '8.1 km',
    phone: '+63 934 567 8901',
    lastUpdated: new Date()
  }, {
    userId: '4',
    name: 'Ana Lim',
    boatId: 'BT-012',
    status: 'inactive',
    alert: null,
    latitude: 13.7465,
    longitude: 121.0383,
    region: 'Batangas',
    municipality: 'Batangas City',
    distanceFromShore: '3.5 km',
    phone: '+63 945 678 9012',
    lastUpdated: new Date(Date.now() - 3600000) // 1 hour ago
  }, {
    userId: '5',
    name: 'Roberto Santos',
    boatId: 'BT-345',
    status: 'active',
    alert: 'weather',
    latitude: 13.7365,
    longitude: 121.0783,
    region: 'Batangas',
    municipality: 'Batangas City',
    distanceFromShore: '7.3 km',
    phone: '+63 956 789 0123',
    lastUpdated: new Date()
  }];
};
// Create custom marker icon based on fisher status and alert
const createCustomIcon = (status, alert) => {
  if (status === 'active') {
    if (alert === 'sos') {
      // SOS alert - red pulsing marker
      return L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="marker-pin sos-marker"></div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 30]
      });
    } else if (alert === 'weather') {
      // Weather alert - yellow marker
      return L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="marker-pin weather-marker"></div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 30]
      });
    } else {
      // Active fisher - green marker
      return L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="marker-pin active-marker"></div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 30]
      });
    }
  } else {
    // Inactive fisher - gray marker
    return L.divIcon({
      className: 'custom-div-icon',
      html: `<div class="marker-pin inactive-marker"></div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 30]
    });
  }
};
// Satellite Map component
interface SatelliteMapProps {
  isSuperAdmin?: boolean;
  isAdmin?: boolean;
  region?: string | null;
  height?: string;
  showEmergencyButton?: boolean;
}
const SatelliteMap: React.FC<SatelliteMapProps> = ({
  isSuperAdmin = false,
  isAdmin = false,
  region = null,
  height = 'h-96',
  showEmergencyButton = false
}) => {
  const {
    user
  } = useAuth();
  const {
    darkMode
  } = useTheme();
  const [mapType, setMapType] = useState('satellite');
  const [showRiskOverlay, setShowRiskOverlay] = useState(false);
  const [fishers, setFishers] = useState<any[]>([]);
  const [selectedFisher, setSelectedFisher] = useState<any | null>(null);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [userLocation, setUserLocation] = useState(DEFAULT_MAP_SETTINGS.center);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [map, setMap] = useState<L.Map | null>(null);
  // Load fisher locations
  useEffect(() => {
    // In a real app, this would use Firestore listeners
    const mockFishers = getMockFisherLocations();
    // Filter by region if admin
    const filteredFishers = region ? mockFishers.filter(fisher => fisher.region === region) : mockFishers;
    setFishers(filteredFishers);
    // Set up periodic refresh (simulating real-time updates)
    const refreshInterval = setInterval(() => {
      // In real app, this would be handled by Firestore listeners
      setLastUpdated(new Date());
      // Simulate some movement for active fishers
      const updatedFishers = filteredFishers.map(fisher => {
        if (fisher.status === 'active') {
          return {
            ...fisher,
            latitude: fisher.latitude + (Math.random() - 0.5) * 0.005,
            longitude: fisher.longitude + (Math.random() - 0.5) * 0.005,
            lastUpdated: new Date()
          };
        }
        return fisher;
      });
      setFishers(updatedFishers);
    }, 10000);
    // Get user's location if fisher
    if (!isSuperAdmin && !isAdmin && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      }, error => {
        console.error('Error getting location:', error);
      });
    }
    return () => clearInterval(refreshInterval);
  }, [isSuperAdmin, isAdmin, region]);
  // Center map on selected fisher
  useEffect(() => {
    if (selectedFisher && map) {
      map.setView([selectedFisher.latitude, selectedFisher.longitude], 14);
    }
  }, [selectedFisher, map]);
  // Update map layers when mapType changes or dark mode toggles
  useEffect(() => {
    if (!map) return;
    // Remove all existing tile layers
    map.eachLayer(layer => {
      if (layer instanceof L.TileLayer) {
        map.removeLayer(layer);
      }
    });
    // Add the appropriate tile layer based on mapType
    if (mapType === 'satellite') {
      L.tileLayer(SATELLITE_TILE_LAYER_URL, {
        attribution: SATELLITE_ATTRIBUTION,
        maxZoom: 19
      }).addTo(map);
    } else {
      L.tileLayer(OSM_TILE_LAYER_URL, {
        attribution: OSM_ATTRIBUTION,
        maxZoom: 19
      }).addTo(map);
    }
    // Reset any filters that might affect the map display
    const mapContainer = map.getContainer();
    if (mapContainer) {
      mapContainer.style.filter = 'none';
    }
  }, [map, mapType, darkMode]);
  // CSS for map markers and animations
  const mapStyles = `
    .marker-pin {
      width: 30px;
      height: 30px;
      border-radius: 50% 50% 50% 0;
      position: absolute;
      transform: rotate(-45deg);
      left: 50%;
      top: 50%;
      margin: -15px 0 0 -15px;
      border: 2px solid white;
      box-shadow: 0 0 5px rgba(0,0,0,0.5);
    }
    .active-marker {
      background-color: #22c55e;
    }
    .inactive-marker {
      background-color: #94a3b8;
    }
    .sos-marker {
      background-color: #ef4444;
      animation: pulse 1.5s infinite;
    }
    .weather-marker {
      background-color: #eab308;
    }
    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
      }
    }
  `;
  const handleEmergencyReport = data => {
    // In a real app, this would send to Firestore
    console.log('Emergency Report:', data);
    setIsEmergencyModalOpen(false);
    // Show success notification
    alert('Emergency report sent successfully. Help is on the way.');
  };
  return <div className="relative w-full">
      {/* Map CSS animations */}
      <style jsx global>{`
        ${mapStyles}
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
        .leaflet-container {
          border-radius: 0.75rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          overflow: hidden;
        }
        .map-controls-button {
          @apply rounded-lg shadow-lg p-2 m-2 transition-all duration-200;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .dark .map-controls-button {
          @apply bg-gray-800 text-gray-100 hover:bg-gray-700;
        }
        .map-controls-button {
          @apply bg-white text-gray-800 hover:bg-gray-100;
        }
      `}</style>
      <div className={`rounded-xl overflow-hidden shadow-lg ${height}`}>
        <MapContainer center={userLocation} zoom={DEFAULT_MAP_SETTINGS.zoom} style={{
        height: '100%',
        width: '100%'
      }} zoomControl={false} whenCreated={setMap}>
          {/* Base Tile Layer - Initial load */}
          <TileLayer url={SATELLITE_TILE_LAYER_URL} attribution={SATELLITE_ATTRIBUTION} maxZoom={19} />
          <ZoomControl position="topright" />
          {/* Map Controls */}
          <div className="absolute top-2 right-2 z-[1000] flex flex-col">
            <button className={`map-controls-button flex items-center justify-center mb-2 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`} onClick={() => setMapType(mapType === 'satellite' ? 'streets' : 'satellite')} aria-label="Toggle map type">
              <LayersIcon className="h-5 w-5" />
            </button>
            <button className={`map-controls-button flex items-center justify-center ${showRiskOverlay ? darkMode ? 'bg-red-900' : 'bg-red-100' : ''} ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`} onClick={() => setShowRiskOverlay(!showRiskOverlay)} aria-label="Toggle risk overlay">
              <AlertTriangleIcon className={`h-5 w-5 ${showRiskOverlay ? 'text-red-500' : ''}`} />
            </button>
          </div>
          {/* Risk Areas Overlay */}
          {showRiskOverlay && <LayerGroup>
              {riskAreas.map((area, index) => <Circle key={index} center={area.center} radius={area.radius} pathOptions={{
            color: RISK_OVERLAY_CONFIG[area.level].borderColor,
            fillColor: RISK_OVERLAY_CONFIG[area.level].color,
            fillOpacity: 0.5
          }}>
                  <Popup>
                    <div className="p-2">
                      <div className={`text-sm font-medium ${area.level === 'high' ? 'text-red-600' : area.level === 'moderate' ? 'text-yellow-600' : 'text-green-600'}`}>
                        {area.level.toUpperCase()} RISK AREA
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        {area.reason}
                      </p>
                    </div>
                  </Popup>
                </Circle>)}
            </LayerGroup>}
          {/* Markers for fishers */}
          <LayerGroup>
            {fishers.map(fisher => <Marker key={fisher.userId} position={[fisher.latitude, fisher.longitude]} icon={createCustomIcon(fisher.status, fisher.alert)} eventHandlers={{
            click: () => setSelectedFisher(fisher)
          }}>
                <Popup>
                  <div className="p-2 max-w-xs">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm">{fisher.name}</h4>
                      <div className={`inline-block w-2 h-2 rounded-full ${fisher.status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                    </div>
                    <p className="text-xs text-gray-500">
                      {fisher.boatId || 'No Boat ID'}
                    </p>
                    {fisher.alert && <div className={`mt-2 px-2 py-1 text-xs font-medium rounded-md ${fisher.alert === 'sos' ? 'bg-red-100 text-red-800' : fisher.alert === 'weather' ? 'bg-yellow-100 text-yellow-800' : 'bg-orange-100 text-orange-800'}`}>
                        {fisher.alert === 'sos' ? 'SOS EMERGENCY' : fisher.alert === 'weather' ? 'WEATHER WARNING' : 'BOUNDARY WARNING'}
                      </div>}
                    <div className="mt-2 space-y-1.5">
                      <div className="flex items-center text-xs">
                        <PhoneIcon className="h-3 w-3 mr-1.5 text-gray-400" />
                        <span>{fisher.phone || 'No phone'}</span>
                      </div>
                      <div className="flex items-center text-xs">
                        <NavigationIcon className="h-3 w-3 mr-1.5 text-gray-400" />
                        <span>
                          {fisher.distanceFromShore || 'Distance unknown'}
                        </span>
                      </div>
                      <div className="flex items-center text-xs">
                        <MapPinIcon className="h-3 w-3 mr-1.5 text-gray-400" />
                        <span>
                          {fisher.region}, {fisher.municipality || 'Unknown'}
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 pt-2 border-t border-gray-100 flex justify-between">
                      <button className="text-xs text-blue-600 hover:text-blue-800 flex items-center" onClick={e => {
                    e.stopPropagation();
                    // Open fisher profile
                    console.log('View profile:', fisher.userId);
                  }}>
                        <UserIcon className="h-3 w-3 mr-1" />
                        View Profile
                      </button>
                      <button className="text-xs text-teal-600 hover:text-teal-800 flex items-center" onClick={e => {
                    e.stopPropagation();
                    // Send message
                    console.log('Send message to:', fisher.userId);
                  }}>
                        <MessageSquareIcon className="h-3 w-3 mr-1" />
                        Message
                      </button>
                    </div>
                  </div>
                </Popup>
              </Marker>)}
            {/* User's own location marker if fisher */}
            {!isSuperAdmin && !isAdmin && <Marker position={userLocation} icon={L.divIcon({
            className: 'custom-div-icon',
            html: `
                    <div style="
                      width: 24px;
                      height: 24px;
                      border-radius: 50%;
                      background-color: #3b82f6;
                      border: 3px solid white;
                      box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
                    "></div>
                  `,
            iconSize: [24, 24],
            iconAnchor: [12, 12]
          })}>
                <Popup>
                  <div className="p-2">
                    <h4 className="font-medium text-sm">Your Location</h4>
                    <p className="text-xs text-gray-500">
                      {userLocation[0].toFixed(4)}, {userLocation[1].toFixed(4)}
                    </p>
                  </div>
                </Popup>
              </Marker>}
          </LayerGroup>
          {/* Map legend */}
          <div className={`absolute bottom-2 left-2 z-[1000] bg-opacity-90 backdrop-filter backdrop-blur-md rounded-md shadow-md p-3 ${darkMode ? 'bg-gray-800 bg-opacity-80' : 'bg-white'}`}>
            <div className={`text-xs font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              Map Legend
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                <span className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Active Fisher
                </span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-gray-400 mr-2"></span>
                <span className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Inactive
                </span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                <span className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  SOS Alert
                </span>
              </div>
              {showRiskOverlay && <>
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-red-400 mr-2"></span>
                    <span className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      High Risk Area
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
                    <span className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Moderate Risk
                    </span>
                  </div>
                </>}
            </div>
          </div>
          {/* Map type indicator */}
          <div className={`absolute top-2 left-2 z-[1000] bg-opacity-80 backdrop-filter backdrop-blur-md rounded-lg shadow-md px-3 py-1 text-xs font-medium border ${darkMode ? 'bg-gray-800 bg-opacity-70 text-gray-200 border-gray-700' : 'bg-white text-gray-700 border-gray-100'}`}>
            {mapType === 'satellite' ? 'Satellite View' : 'Street View'}
          </div>
          {/* Last updated indicator */}
          <div className={`absolute bottom-14 right-2 z-[1000] bg-opacity-80 backdrop-filter backdrop-blur-md rounded-lg shadow-md px-3 py-1 text-xs font-medium ${darkMode ? 'bg-gray-800 bg-opacity-70 text-gray-400' : 'bg-white text-gray-500'}`}>
            Last updated: {lastUpdated.toLocaleTimeString()}
          </div>
        </MapContainer>
      </div>
      {/* Emergency Report Button for Fisher users */}
      {showEmergencyButton && <button onClick={() => setIsEmergencyModalOpen(true)} className="absolute bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center transition-all duration-200 animate-pulse" aria-label="Report Emergency">
          <AlertTriangleIcon className="h-5 w-5 mr-2" />
          Report Emergency
        </button>}
    </div>;
};
export default SatelliteMap;