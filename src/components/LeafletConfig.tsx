import React from 'react';
import 'leaflet/dist/leaflet.css';
// Default map settings
export const DEFAULT_MAP_SETTINGS = {
  center: [13.7565, 121.0583],
  zoom: 10
};
// OpenStreetMap tile layer (fallback)
export const OSM_TILE_LAYER_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
export const OSM_TILE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
// Esri World Imagery satellite layer (primary)
export const ESRI_SATELLITE_TILE_LAYER_URL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
export const ESRI_SATELLITE_TILE_LAYER_ATTRIBUTION = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
// Esri World Imagery with labels
export const ESRI_SATELLITE_LABELS_TILE_LAYER_URL = 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}';
export const ESRI_SATELLITE_LABELS_TILE_LAYER_ATTRIBUTION = 'Tiles &copy; Esri &mdash; Source: Esri';
// Terrain view (alternative)
export const TERRAIN_TILE_LAYER_URL = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
export const TERRAIN_TILE_LAYER_ATTRIBUTION = 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)';
// Map style configurations for modern look
export const MODERN_MAP_STYLES = {
  satellite: {
    mapStyle: {
      filter: 'contrast(1.1) saturate(1.1)'
    },
    overlayStyle: {
      backgroundColor: 'rgba(0, 30, 60, 0.1)',
      mixBlendMode: 'soft-light'
    }
  }
};
// Risk overlay configuration
export const RISK_OVERLAY_CONFIG = {
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