import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AdminHome } from './Home';
import { FisherFolks } from './FisherFolks';
import { WeatherAlerts } from './WeatherAlerts';
import { MarketOverview } from './MarketOverview';
import { VerificationRequests } from './VerificationRequests';
import { CommunityPrograms } from './CommunityPrograms';
import { Announcements } from './Announcements';
import { UserManagement } from '../admin/UserManagement';
import { SystemSettings } from '../admin/SystemSettings';
import { AdminFishHub } from '../admin/FishHub';
import { AdminGPSTracking } from '../admin/GPSTracking';
export const AdminDashboard: React.FC = () => {
  return <Routes>
      <Route index element={<AdminHome />} />
      <Route path="fishers" element={<FisherFolks />} />
      <Route path="weather" element={<WeatherAlerts />} />
      <Route path="market" element={<MarketOverview />} />
      <Route path="verification" element={<VerificationRequests />} />
      <Route path="community" element={<CommunityPrograms />} />
      <Route path="announcements" element={<Announcements />} />
      <Route path="fish-hub" element={<AdminFishHub />} />
      <Route path="gps-tracking" element={<AdminGPSTracking />} />
      <Route path="user-management" element={<UserManagement />} />
      <Route path="system-settings" element={<SystemSettings />} />
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Routes>;
};