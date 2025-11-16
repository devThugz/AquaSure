import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { SuperAdminSidebar } from './SuperAdminSidebar';
import { AdminSidebar } from './AdminSidebar';
import { useTheme } from '../contexts/ThemeContext';
import { HomeIcon, FishIcon, HeartPulseIcon, CloudRainIcon, CompassIcon, ShoppingCartIcon, MapPinIcon, UsersIcon, ShieldIcon, SettingsIcon, UserIcon, ChevronDownIcon, ChevronRightIcon, AlertTriangleIcon } from 'lucide-react';
interface SidebarProps {
  darkMode?: boolean;
}
export function Sidebar({
  darkMode
}: SidebarProps) {
  const {
    user
  } = useAuth();
  const location = useLocation();
  const {
    darkMode: contextDarkMode
  } = useTheme();
  const [isAdminMenuOpen, setIsAdminMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  // Use role-specific sidebar components for admin and super admin
  const isSuperAdmin = user?.role === 'super_admin';
  const isAdmin = user?.role === 'admin' || isSuperAdmin;
  if (isSuperAdmin) {
    return <SuperAdminSidebar />;
  }
  if (isAdmin) {
    return <AdminSidebar />;
  }
  // Regular user sidebar below - HIDDEN ON MOBILE
  const NavItem = ({
    to,
    icon: Icon,
    children,
    end = false
  }) => {
    // Check if this route is active by comparing with location.pathname
    // Using exact match for direct routes and partial match for nested routes
    const isActive = end ? to === location.pathname : to === location.pathname || to !== '/dashboard' && location.pathname.startsWith(to);
    const isHovered = hoveredItem === to;
    return <NavLink to={to} end={end} className={`flex items-center px-4 py-3 my-1 text-sm font-medium rounded-lg transition-all duration-300 relative ${isActive ? contextDarkMode ? 'bg-ocean-deep text-ocean-light' : 'bg-ocean-teal/10 text-ocean-blue' : contextDarkMode ? 'text-gray-300 hover:bg-gray-700/50' : 'text-gray-600 hover:bg-gray-100'}`} onMouseEnter={() => setHoveredItem(to)} onMouseLeave={() => setHoveredItem(null)}>
        <Icon className={`mr-3 h-5 w-5 transition-all duration-300 ${isActive ? contextDarkMode ? 'text-ocean-teal' : 'text-ocean-blue' : contextDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
        {children}
        {/* Animated underline for hovered items that aren't active */}
        {!isActive && isHovered && <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-accent transition-all duration-300 rounded-full`} style={{
        opacity: 0.7
      }}></div>}
        {/* Glow indicator for active items */}
        {isActive && <div className={`absolute -inset-0.5 rounded-lg ${contextDarkMode ? 'bg-ocean-teal/20' : 'bg-ocean-teal/10'} blur-sm -z-10`}></div>}
      </NavLink>;
  };
  return <div className={`hidden sm:flex sm:flex-col w-64 ${contextDarkMode ? 'bg-ocean-deep/95 border-gray-700' : 'bg-white border-gray-200'} border-r h-full transition-all duration-300`}>
      <div className={`flex items-center justify-center h-16 border-b ${contextDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h1 className={`text-2xl font-bold gradient-text transition-colors duration-300`}>
          AquaSure
        </h1>
      </div>
      <div className="flex flex-col flex-grow p-4 overflow-y-auto">
        <div className="space-y-1">
          <NavItem to="/dashboard" icon={HomeIcon} end>
            Dashboard
          </NavItem>
          <NavItem to="/dashboard/insurance-hub" icon={HeartPulseIcon}>
            Insurance Hub
          </NavItem>
          <NavItem to="/dashboard/weather-alerts" icon={CloudRainIcon}>
            Weather Alerts
          </NavItem>
          <NavItem to="/dashboard/fish-hub" icon={CompassIcon}>
            Fish Hub
          </NavItem>
          <NavItem to="/dashboard/gps-tracking" icon={MapPinIcon}>
            GPS Tracking
          </NavItem>
          <NavItem to="/dashboard/emergency-report" icon={AlertTriangleIcon}>
            Emergency Report
          </NavItem>
          <NavItem to="/dashboard/community" icon={UsersIcon}>
            Community
          </NavItem>
          <NavItem to="/dashboard/verification" icon={ShieldIcon}>
            Verification
          </NavItem>
        </div>
      </div>
      <div className={`p-4 border-t ${contextDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex items-center">
          {user?.avatar ? <div className="relative">
              <div className={`absolute inset-0 rounded-full ${contextDarkMode ? 'bg-ocean-teal/30' : 'bg-ocean-teal/20'} blur-md -z-10`}></div>
              <img className="h-8 w-8 rounded-full border-2 border-ocean-teal/30" src={user.avatar} alt={user.name} />
            </div> : <div className="h-8 w-8 rounded-full bg-gradient-accent flex items-center justify-center">
              <UserIcon className="h-5 w-5 text-white" />
            </div>}
          <div className="ml-3">
            <p className={`text-sm font-medium ${contextDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              {user?.name}
            </p>
            <p className={`text-xs ${contextDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Fisher
            </p>
          </div>
        </div>
      </div>
    </div>;
}