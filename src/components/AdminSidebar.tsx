import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HomeIcon, UsersIcon, ShieldIcon, SettingsIcon, UserIcon, ChevronDownIcon, ChevronRightIcon, MapPinIcon, CompassIcon, MessageSquareIcon, MegaphoneIcon, CloudLightningIcon, BarChartIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
export function AdminSidebar() {
  const {
    user
  } = useAuth();
  const {
    darkMode
  } = useTheme();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };
  const NavItem = ({
    to,
    icon: Icon,
    children
  }) => {
    // Check if this route is active by comparing with location.pathname
    // Using exact match for direct routes and partial match for nested routes
    const isActive = to === location.pathname || to !== '/admin' && location.pathname.startsWith(to);
    const isHovered = hoveredItem === to;
    return <NavLink to={to} className={`flex items-center px-4 py-2 my-1 text-sm font-medium rounded-md transition-all duration-300 relative ${isActive ? darkMode ? 'bg-teal-900 text-teal-200' : 'bg-teal-100 text-teal-700' : darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`} onMouseEnter={() => setHoveredItem(to)} onMouseLeave={() => setHoveredItem(null)}>
        <Icon className={`mr-3 h-5 w-5 transition-all duration-300 ${isActive ? darkMode ? 'text-teal-400' : 'text-teal-500' : darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
        {children}
        {/* Animated underline for hovered items that aren't active */}
        {!isActive && isHovered && <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${darkMode ? 'from-teal-600 to-blue-600' : 'from-teal-400 to-blue-400'} transition-all duration-300 rounded-full`} style={{
        opacity: 0.7
      }}></div>}
        {/* Glow indicator for active items */}
        {isActive && <div className={`absolute -inset-0.5 rounded-lg ${darkMode ? 'bg-teal-700/20' : 'bg-teal-400/20'} blur-sm -z-10`}></div>}
      </NavLink>;
  };
  const NavSection = ({
    title,
    icon: Icon,
    children,
    id
  }) => {
    // Check if any child route is active
    const isActive = location.pathname.includes(`/${id}`);
    const isExpanded = expandedSection === id || isActive;
    const isHovered = hoveredItem === `section-${id}`;
    return <div className="mb-2">
        <button onClick={() => toggleSection(id)} className={`w-full flex items-center justify-between px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 relative ${isActive ? darkMode ? 'text-teal-300' : 'text-teal-700' : darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`} onMouseEnter={() => setHoveredItem(`section-${id}`)} onMouseLeave={() => setHoveredItem(null)}>
          <div className="flex items-center">
            <Icon className={`mr-3 h-5 w-5 transition-all duration-300 ${isActive ? darkMode ? 'text-teal-400' : 'text-teal-500' : darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
            {title}
          </div>
          {isExpanded ? <ChevronDownIcon className="h-4 w-4" /> : <ChevronRightIcon className="h-4 w-4" />}
          {/* Animated underline for hovered sections that aren't active */}
          {!isActive && isHovered && <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${darkMode ? 'from-teal-600 to-blue-600' : 'from-teal-400 to-blue-400'} transition-all duration-300 rounded-full`} style={{
          opacity: 0.7
        }}></div>}
          {/* Glow indicator for active sections */}
          {isActive && <div className={`absolute -inset-0.5 rounded-lg ${darkMode ? 'bg-teal-700/10' : 'bg-teal-400/10'} blur-sm -z-10`}></div>}
        </button>
        {isExpanded && <div className="ml-4 mt-1">{children}</div>}
      </div>;
  };
  return <div className={`hidden sm:flex sm:flex-col w-64 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r h-full transition-colors duration-300`}>
      <div className={`flex items-center justify-center h-16 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-300`}>
        <h1 className={`text-2xl font-bold ${darkMode ? 'text-teal-400' : 'text-teal-600'} transition-colors duration-300`}>
          AquaSure
        </h1>
      </div>
      <div className="flex flex-col flex-grow p-4 overflow-y-auto">
        <div className="space-y-1">
          <NavItem to="/admin" icon={HomeIcon}>
            Dashboard
          </NavItem>
          <NavItem to="/admin/fishers" icon={UsersIcon}>
            Fisher Folks
          </NavItem>
          <NavItem to="/admin/fish-hub" icon={CompassIcon}>
            Fish Hub
          </NavItem>
          <NavItem to="/admin/gps-tracking" icon={MapPinIcon}>
            GPS Tracking
          </NavItem>
          <NavItem to="/admin/weather" icon={CloudLightningIcon}>
            Weather Alerts
          </NavItem>
          <NavItem to="/admin/analytics" icon={BarChartIcon}>
            Analytics
          </NavItem>
          <NavSection title="Community" icon={MessageSquareIcon} id="community">
            <NavItem to="/admin/community" icon={UsersIcon}>
              Community Programs
            </NavItem>
            <NavItem to="/admin/announcements" icon={MegaphoneIcon}>
              Announcements
            </NavItem>
          </NavSection>
          <NavItem to="/admin/verification" icon={ShieldIcon}>
            Verification Requests
          </NavItem>
          <NavSection title="Admin Controls" icon={SettingsIcon} id="admin-controls">
            <NavItem to="/admin/user-management" icon={UserIcon}>
              User Management
            </NavItem>
            <NavItem to="/admin/system-settings" icon={SettingsIcon}>
              System Settings
            </NavItem>
          </NavSection>
        </div>
      </div>
      <div className={`p-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-300`}>
        <div className="flex items-center">
          {user?.avatar ? <div className="relative">
              <div className={`absolute inset-0 rounded-full ${darkMode ? 'bg-teal-500/30' : 'bg-teal-500/20'} blur-md -z-10 transition-colors duration-300`}></div>
              <img className={`h-8 w-8 rounded-full border-2 ${darkMode ? 'border-teal-500/30' : 'border-teal-500/30'} transition-colors duration-300`} src={user.avatar} alt={user.name} />
            </div> : <div className={`h-8 w-8 rounded-full bg-gradient-to-br ${darkMode ? 'from-teal-600 to-blue-600' : 'from-teal-500 to-blue-500'} flex items-center justify-center transition-colors duration-300`}>
              <UserIcon className="h-5 w-5 text-white" />
            </div>}
          <div className="ml-3">
            <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'} transition-colors duration-300`}>
              {user?.name}
            </p>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
              LGU Admin
            </p>
          </div>
        </div>
      </div>
    </div>;
}