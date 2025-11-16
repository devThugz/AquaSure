import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, onSnapshot, DocumentData } from 'firebase/firestore';
// Firebase configuration
// In a real application, these values would be in environment variables
const firebaseConfig = {
  apiKey: 'your-api-key',
  authDomain: 'your-auth-domain.firebaseapp.com',
  projectId: 'your-project-id',
  storageBucket: 'your-storage-bucket.appspot.com',
  messagingSenderId: 'your-messaging-sender-id',
  appId: 'your-app-id'
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Fisher location type
export interface FisherLocation {
  userId: string;
  name: string;
  latitude: number;
  longitude: number;
  lastUpdated: Date;
  region?: string;
  municipality?: string;
  status: 'active' | 'inactive';
  boatId?: string;
  phone?: string;
  organization?: string;
  alert?: 'sos' | 'weather' | 'boundary' | null;
  tripStart?: string;
  estimatedReturn?: string;
  distanceFromShore?: string;
}
// Get all fisher locations
export const getAllFisherLocations = (callback: (locations: FisherLocation[]) => void) => {
  const locationsRef = collection(db, 'fisher_locations');
  return onSnapshot(locationsRef, snapshot => {
    const locations: FisherLocation[] = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      locations.push({
        userId: doc.id,
        name: data.name || 'Unknown Fisher',
        latitude: data.latitude,
        longitude: data.longitude,
        lastUpdated: data.lastUpdated?.toDate() || new Date(),
        region: data.region,
        municipality: data.municipality,
        status: data.status || 'active',
        boatId: data.boatId,
        phone: data.phone,
        organization: data.organization,
        alert: data.alert,
        tripStart: data.tripStart,
        estimatedReturn: data.estimatedReturn,
        distanceFromShore: data.distanceFromShore
      });
    });
    callback(locations);
  });
};
// Get fisher locations by region (for Admin users)
export const getRegionFisherLocations = (region: string, callback: (locations: FisherLocation[]) => void) => {
  const locationsRef = collection(db, 'fisher_locations');
  const regionQuery = query(locationsRef, where('region', '==', region));
  return onSnapshot(regionQuery, snapshot => {
    const locations: FisherLocation[] = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      locations.push({
        userId: doc.id,
        name: data.name || 'Unknown Fisher',
        latitude: data.latitude,
        longitude: data.longitude,
        lastUpdated: data.lastUpdated?.toDate() || new Date(),
        region: data.region,
        municipality: data.municipality,
        status: data.status || 'active',
        boatId: data.boatId,
        phone: data.phone,
        organization: data.organization,
        alert: data.alert,
        tripStart: data.tripStart,
        estimatedReturn: data.estimatedReturn,
        distanceFromShore: data.distanceFromShore
      });
    });
    callback(locations);
  });
};
// Mock data for development/testing
export const getMockFisherLocations = (): FisherLocation[] => {
  return [{
    userId: '1',
    name: 'Juan Dela Cruz',
    latitude: 13.7565,
    longitude: 121.0583,
    lastUpdated: new Date(Date.now() - 2 * 60 * 1000),
    // 2 minutes ago
    region: 'Batangas',
    municipality: 'Batangas City',
    status: 'active',
    boatId: 'BT-2023-001',
    phone: '+63 912 345 6789',
    organization: 'Batangas Fishing Association',
    alert: null,
    tripStart: '05:30 AM today',
    estimatedReturn: '03:00 PM today',
    distanceFromShore: '12 km'
  }, {
    userId: '2',
    name: 'Maria Santos',
    latitude: 13.7685,
    longitude: 121.0493,
    lastUpdated: new Date(Date.now() - 5 * 60 * 1000),
    // 5 minutes ago
    region: 'Batangas',
    municipality: 'Batangas City',
    status: 'active',
    boatId: 'BT-2023-015',
    phone: '+63 923 456 7890',
    organization: 'Batangas Fishing Association',
    alert: null,
    tripStart: '04:45 AM today',
    estimatedReturn: '02:30 PM today',
    distanceFromShore: '8 km'
  }, {
    userId: '3',
    name: 'Pedro Reyes',
    latitude: 13.7515,
    longitude: 121.0623,
    lastUpdated: new Date(Date.now() - 3 * 60 * 60 * 1000),
    // 3 hours ago
    region: 'Batangas',
    municipality: 'Batangas City',
    status: 'inactive',
    boatId: 'BT-2023-008',
    phone: '+63 934 567 8901',
    organization: 'Batangas Fishing Association',
    alert: null,
    tripStart: 'N/A',
    estimatedReturn: 'N/A',
    distanceFromShore: 'N/A'
  }, {
    userId: '4',
    name: 'Ana Lim',
    latitude: 13.7605,
    longitude: 121.0703,
    lastUpdated: new Date(Date.now() - 10 * 60 * 1000),
    // 10 minutes ago
    region: 'Batangas',
    municipality: 'Lipa City',
    status: 'active',
    boatId: 'LP-2023-022',
    phone: '+63 945 678 9012',
    organization: 'Lipa Fishers Cooperative',
    alert: 'weather',
    tripStart: '06:15 AM today',
    estimatedReturn: '04:00 PM today',
    distanceFromShore: '15 km'
  }, {
    userId: '5',
    name: 'Roberto Cruz',
    latitude: 13.7525,
    longitude: 121.0453,
    lastUpdated: new Date(Date.now() - 7 * 60 * 1000),
    // 7 minutes ago
    region: 'Batangas',
    municipality: 'Batangas City',
    status: 'active',
    boatId: 'BT-2023-019',
    phone: '+63 956 789 0123',
    organization: 'Batangas Fishing Association',
    alert: null,
    tripStart: '05:00 AM today',
    estimatedReturn: '03:30 PM today',
    distanceFromShore: '5 km'
  }, {
    userId: '6',
    name: 'Elena Garcia',
    latitude: 10.3157,
    longitude: 123.8854,
    lastUpdated: new Date(Date.now() - 15 * 60 * 1000),
    // 15 minutes ago
    region: 'Cebu',
    municipality: 'Cebu City',
    status: 'active',
    boatId: 'CB-2023-033',
    phone: '+63 967 890 1234',
    organization: 'Cebu Fishing Cooperative',
    alert: null,
    tripStart: '04:30 AM today',
    estimatedReturn: '01:00 PM today',
    distanceFromShore: '9 km'
  }, {
    userId: '7',
    name: 'Carlos Tan',
    latitude: 10.7202,
    longitude: 122.5621,
    lastUpdated: new Date(Date.now() - 3 * 60 * 1000),
    // 3 minutes ago
    region: 'Iloilo',
    municipality: 'Iloilo City',
    status: 'active',
    boatId: 'IL-2023-047',
    phone: '+63 978 901 2345',
    organization: 'Iloilo Fishermen Association',
    alert: 'boundary',
    tripStart: '05:45 AM today',
    estimatedReturn: '04:15 PM today',
    distanceFromShore: '7 km'
  }, {
    userId: '8',
    name: 'Mariano Bautista',
    latitude: 7.1907,
    longitude: 125.4553,
    lastUpdated: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    // 2 days ago
    region: 'Davao',
    municipality: 'Davao City',
    status: 'inactive',
    boatId: 'DV-2023-051',
    phone: '+63 989 012 3456',
    organization: 'Davao Fishing Cooperative',
    alert: null,
    tripStart: 'N/A',
    estimatedReturn: 'N/A',
    distanceFromShore: 'N/A'
  }, {
    userId: '9',
    name: 'Rosa Villanueva',
    latitude: 15.1324,
    longitude: 120.0997,
    lastUpdated: new Date(Date.now() - 20 * 60 * 1000),
    // 20 minutes ago
    region: 'Zambales',
    municipality: 'Olongapo City',
    status: 'active',
    boatId: 'ZM-2023-029',
    phone: '+63 990 123 4567',
    organization: 'Zambales Fishermen Group',
    alert: null,
    tripStart: '06:00 AM today',
    estimatedReturn: '02:00 PM today',
    distanceFromShore: '11 km'
  }, {
    userId: '10',
    name: 'Antonio Mendoza',
    latitude: 20.4487,
    longitude: 121.9702,
    lastUpdated: new Date(Date.now() - 8 * 60 * 1000),
    // 8 minutes ago
    region: 'Batanes',
    municipality: 'Basco',
    status: 'active',
    boatId: 'BN-2023-012',
    phone: '+63 901 234 5678',
    organization: 'Batanes Fishing Community',
    alert: 'sos',
    tripStart: '05:15 AM today',
    estimatedReturn: '03:45 PM today',
    distanceFromShore: '14 km'
  }];
};