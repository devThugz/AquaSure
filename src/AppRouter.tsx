import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { InsuranceHub } from './pages/InsuranceHub';
import { WeatherAlerts } from './pages/WeatherAlerts';
import { FishHub } from './pages/FishHub';
import { GPSTracking } from './pages/GPSTracking';
import { EmergencyReport } from './pages/EmergencyReport';
import { Community } from './pages/Community';
import { Verification } from './pages/Verification';
import { UserManagement } from './pages/admin/UserManagement';
import { SystemSettings } from './pages/admin/SystemSettings';
import { AdminWeatherAlerts } from './pages/admin/WeatherAlerts';
import { AdminGPSTracking } from './pages/admin/GPSTracking';
import { AdminCommunity } from './pages/admin/Community';
import { AdminVerification } from './pages/admin/Verification';
import { AdminFishHub } from './pages/admin/FishHub';
import { Layout } from './components/Layout';
import { useAuth } from './contexts/AuthContext';
import { SuperAdminDashboard } from './pages/SuperAdmin/Dashboard';
import { AdminDashboard } from './pages/Admin/Dashboard';
import { DashboardLayout } from './layouts/DashboardLayout';
import { SuperAdminLayout } from './layouts/SuperAdminLayout';
import { Landing } from './pages/Landing';
import { Analytics } from './pages/admin/Analytics';
import { CommunityPrograms } from './pages/admin/CommunityPrograms';
import { VerificationRequests } from './pages/admin/VerificationRequests';
import { DataMarketplace } from './pages/DataMarketplace';
import { useTheme } from './contexts/ThemeContext';
function ProtectedRoute({
  children,
  allowedRoles
}) {
  const {
    user
  } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
}
export function AppRouter() {
  const {
    user
  } = useAuth();
  const {
    darkMode,
    toggleDarkMode
  } = useTheme();
  return <BrowserRouter>
      <Routes>
        {/* Landing Page - Only for non-authenticated users */}
        <Route path="/" element={user ? <Navigate to="/dashboard" replace /> : <Landing />} />
        {/* Data Marketplace - Public route */}
        <Route path="/data-marketplace" element={<DataMarketplace />} />
        {/* Login Page */}
        <Route path="/login" element={user ? <Navigate to="/dashboard" replace /> : <Login />} />
        {/* Signup Page */}
        <Route path="/signup" element={user ? <Navigate to="/dashboard" replace /> : <Signup />} />
        {/* Super Admin Routes */}
        <Route path="/super-admin/*" element={<ProtectedRoute allowedRoles={['super_admin']}>
              <SuperAdminLayout>
                <SuperAdminDashboard />
              </SuperAdminLayout>
            </ProtectedRoute>} />
        {/* Admin Routes */}
        <Route path="/admin/*" element={<ProtectedRoute allowedRoles={['admin']}>
              <DashboardLayout role="admin">
                <AdminDashboard />
              </DashboardLayout>
            </ProtectedRoute>} />
        {/* Admin Analytics Route */}
        <Route path="/admin/analytics" element={<ProtectedRoute allowedRoles={['admin']}>
              <DashboardLayout role="admin">
                <Analytics />
              </DashboardLayout>
            </ProtectedRoute>} />
        {/* Admin Community Programs Route */}
        <Route path="/admin/community" element={<ProtectedRoute allowedRoles={['admin']}>
              <DashboardLayout role="admin">
                <CommunityPrograms />
              </DashboardLayout>
            </ProtectedRoute>} />
        {/* Admin Verification Requests Route */}
        <Route path="/admin/verification" element={<ProtectedRoute allowedRoles={['admin']}>
              <DashboardLayout role="admin">
                <VerificationRequests />
              </DashboardLayout>
            </ProtectedRoute>} />
        {/* Admin User Management Route */}
        <Route path="/admin/user-management" element={<ProtectedRoute allowedRoles={['admin']}>
              <DashboardLayout role="admin">
                <UserManagement />
              </DashboardLayout>
            </ProtectedRoute>} />
        {/* Admin System Settings Route */}
        <Route path="/admin/system-settings" element={<ProtectedRoute allowedRoles={['admin']}>
              <DashboardLayout role="admin">
                <SystemSettings />
              </DashboardLayout>
            </ProtectedRoute>} />
        {/* Regular User Routes - Fixed to prevent Landing page reappearance */}
        <Route path="/dashboard" element={<ProtectedRoute allowedRoles={['super_admin', 'admin', 'user']}>
              <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </ProtectedRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="insurance-hub" element={<InsuranceHub />} />
          <Route path="weather-alerts" element={<WeatherAlerts />} />
          <Route path="fish-hub" element={<FishHub />} />
          <Route path="gps-tracking" element={<GPSTracking />} />
          <Route path="emergency-report" element={<EmergencyReport />} />
          <Route path="community" element={<Community />} />
          <Route path="verification" element={<Verification />} />
        </Route>
        {/* Fallback redirect */}
        <Route path="*" element={<Navigate to={user ? '/dashboard' : '/'} replace />} />
      </Routes>
    </BrowserRouter>;
}