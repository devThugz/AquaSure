import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SuperAdminHome } from './Home';
import { AdminManagement } from './AdminManagement';
import { UserManagement } from './UserManagement';
import { InsurancePlans } from './InsurancePlans';
import { SystemAnalytics } from './SystemAnalytics';
import { AIMonitoring } from './AIMonitoring';
import { FinancialOverview } from './FinancialOverview';
import { InsuranceClaims } from './InsuranceClaims';
import { RegionalPerformance } from './RegionalPerformance';
import { SupportFeedback } from './SupportFeedback';
import { Sustainability } from './Sustainability';
import { ActivityLogs } from './ActivityLogs';
import { AdminPerformance } from './AdminPerformance';
import { UserVerification } from './UserVerification';
import { FishHub } from '../FishHub';
import { Community } from '../Community';
import { Verification } from '../Verification';
import { SystemSettings } from '../admin/SystemSettings';
import { GPSTracking } from '../GPSTracking';
import { AnalyticsInsights } from './AnalyticsInsights';
import { RegionalAnalytics } from './Analytics/RegionalAnalytics';
import { FeatureUsageAnalytics } from './Analytics/FeatureUsageAnalytics';
import { UserActivityAnalytics } from './Analytics/UserActivityAnalytics';
import { GrowthTrendsAnalytics } from './Analytics/GrowthTrendsAnalytics';
import { AIPredictiveInsights } from './Analytics/AIPredictiveInsights';
import { PeakActivityHours } from './Analytics/PeakActivityHours';
export const SuperAdminDashboard: React.FC = () => {
  return <Routes>
      {/* Main dashboard */}
      <Route index element={<SuperAdminHome />} />
      {/* Admin management */}
      <Route path="admins" element={<AdminManagement />} />
      <Route path="admins/performance" element={<AdminPerformance />} />
      {/* User management */}
      <Route path="users" element={<UserManagement />} />
      <Route path="users/verification" element={<UserVerification />} />
      {/* Finance */}
      <Route path="finance/overview" element={<FinancialOverview />} />
      <Route path="finance/insurance" element={<InsuranceClaims />} />
      <Route path="insurance" element={<InsurancePlans />} />
      {/* New unified Analytics & Insights page */}
      <Route path="analytics" element={<AnalyticsInsights />} />
      {/* Keeping old routes for backward compatibility - all redirect to the new unified page */}
      <Route path="analytics/system" element={<Navigate to="/super-admin/analytics" replace />} />
      <Route path="analytics/user-activity" element={<Navigate to="/super-admin/analytics" replace />} />
      <Route path="analytics/growth-trends" element={<Navigate to="/super-admin/analytics" replace />} />
      <Route path="analytics/peak-activity" element={<Navigate to="/super-admin/analytics" replace />} />
      <Route path="analytics/regional-analysis" element={<Navigate to="/super-admin/analytics" replace />} />
      <Route path="analytics/feature-usage" element={<Navigate to="/super-admin/analytics" replace />} />
      <Route path="analytics/ai-insights" element={<Navigate to="/super-admin/analytics" replace />} />
      {/* Core features */}
      <Route path="fish-hub" element={<FishHub />} />
      <Route path="gps-tracking" element={<GPSTracking />} />
      <Route path="community" element={<Community />} />
      <Route path="verification" element={<Verification />} />
      <Route path="system-settings" element={<SystemSettings />} />
      <Route path="ai-monitoring" element={<AIMonitoring />} />
      <Route path="regions" element={<RegionalPerformance />} />
      <Route path="support" element={<SupportFeedback />} />
      <Route path="sustainability" element={<Sustainability />} />
      <Route path="activity-logs" element={<ActivityLogs />} />
      {/* Redirects for compatibility with old routes */}
      <Route path="analytics/regional" element={<Navigate to="/super-admin/analytics" replace />} />
      <Route path="analytics/features" element={<Navigate to="/super-admin/analytics" replace />} />
      <Route path="analytics/active-users" element={<Navigate to="/super-admin/analytics" replace />} />
      {/* Fallback redirect */}
      <Route path="*" element={<Navigate to="/super-admin" replace />} />
    </Routes>;
};