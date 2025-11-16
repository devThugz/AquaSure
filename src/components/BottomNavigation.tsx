import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { HomeIcon, HeartPulseIcon, CloudRainIcon, CompassIcon, MapPinIcon, UsersIcon, ShieldIcon, AlertTriangleIcon, BarChartIcon, SettingsIcon, BriefcaseIcon, MoreHorizontalIcon, XIcon, MessageSquareIcon, DollarSignIcon, BrainIcon, GlobeIcon, ClipboardListIcon, MegaphoneIcon, CloudLightningIcon } from 'lucide-react';
export function BottomNavigation() {
  const {
    user
  } = useAuth();
  const {
    darkMode
  } = useTheme();
  const location = useLocation();
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const isSuperAdmin = user?.role === 'super_admin';
  const isAdmin = user?.role === 'admin';
  const isUser = user?.role === 'user';
  const NavItem = ({
    to,
    icon: Icon,
    label,
    end = false,
    onClick = null
  }) => {
    const isActive = end ? to === location.pathname : location.pathname.startsWith(to);
    const handleClick = e => {
      if (onClick) {
        e.preventDefault();
        onClick();
      }
    };
    return <NavLink to={to} end={end} onClick={handleClick} className={`flex flex-col items-center justify-center py-2 px-1 min-w-0 flex-1 transition-colors duration-200 ${isActive ? darkMode ? 'text-teal-400' : 'text-teal-600' : darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        <Icon className={`h-6 w-6 mb-1 ${isActive ? 'scale-110' : ''} transition-transform`} />
        <span className="text-xs font-medium truncate w-full text-center">
          {label}
        </span>
      </NavLink>;
  };
  // User navigation items (primary 4 + more)
  const userPrimaryNavItems = [{
    to: '/dashboard',
    icon: HomeIcon,
    label: 'Home',
    end: true
  }, {
    to: '/dashboard/insurance-hub',
    icon: HeartPulseIcon,
    label: 'Insurance'
  }, {
    to: '/dashboard/fish-hub',
    icon: CompassIcon,
    label: 'Fish Hub'
  }, {
    to: '/dashboard/gps-tracking',
    icon: MapPinIcon,
    label: 'GPS'
  }];
  const userAllNavItems = [...userPrimaryNavItems, {
    to: '/dashboard/weather-alerts',
    icon: CloudRainIcon,
    label: 'Weather Alerts'
  }, {
    to: '/dashboard/emergency-report',
    icon: AlertTriangleIcon,
    label: 'Emergency Report'
  }, {
    to: '/dashboard/community',
    icon: UsersIcon,
    label: 'Community'
  }, {
    to: '/dashboard/verification',
    icon: ShieldIcon,
    label: 'Verification'
  }];
  // Admin navigation items (primary 4 + more)
  const adminPrimaryNavItems = [{
    to: '/admin',
    icon: HomeIcon,
    label: 'Home',
    end: true
  }, {
    to: '/admin/fishers',
    icon: UsersIcon,
    label: 'Fishers'
  }, {
    to: '/admin/analytics',
    icon: BarChartIcon,
    label: 'Analytics'
  }, {
    to: '/admin/verification',
    icon: ShieldIcon,
    label: 'Verify'
  }];
  const adminAllNavItems = [...adminPrimaryNavItems, {
    to: '/admin/fish-hub',
    icon: CompassIcon,
    label: 'Fish Hub'
  }, {
    to: '/admin/gps-tracking',
    icon: MapPinIcon,
    label: 'GPS Tracking'
  }, {
    to: '/admin/weather',
    icon: CloudLightningIcon,
    label: 'Weather Alerts'
  }, {
    to: '/admin/community',
    icon: UsersIcon,
    label: 'Community Programs'
  }, {
    to: '/admin/announcements',
    icon: MegaphoneIcon,
    label: 'Announcements'
  }, {
    to: '/admin/user-management',
    icon: SettingsIcon,
    label: 'User Management'
  }, {
    to: '/admin/system-settings',
    icon: SettingsIcon,
    label: 'System Settings'
  }];
  // Super Admin navigation items (primary 4 + more)
  const superAdminPrimaryNavItems = [{
    to: '/super-admin',
    icon: HomeIcon,
    label: 'Home',
    end: true
  }, {
    to: '/super-admin/users',
    icon: UsersIcon,
    label: 'Users'
  }, {
    to: '/super-admin/analytics',
    icon: BarChartIcon,
    label: 'Analytics'
  }, {
    to: '/super-admin/admins',
    icon: BriefcaseIcon,
    label: 'Admins'
  }];
  const superAdminAllNavItems = [...superAdminPrimaryNavItems, {
    to: '/super-admin/fish-hub',
    icon: CompassIcon,
    label: 'Fish Hub'
  }, {
    to: '/super-admin/gps-tracking',
    icon: MapPinIcon,
    label: 'GPS Tracking'
  }, {
    to: '/super-admin/community',
    icon: UsersIcon,
    label: 'Community'
  }, {
    to: '/super-admin/verification',
    icon: ShieldIcon,
    label: 'Verification'
  }, {
    to: '/super-admin/regions',
    icon: GlobeIcon,
    label: 'Regional Performance'
  }, {
    to: '/super-admin/finance/overview',
    icon: DollarSignIcon,
    label: 'Financial Overview'
  }, {
    to: '/super-admin/ai-monitoring',
    icon: BrainIcon,
    label: 'AI Monitoring'
  }, {
    to: '/super-admin/activity-logs',
    icon: ClipboardListIcon,
    label: 'Activity Logs'
  }, {
    to: '/super-admin/system-settings',
    icon: SettingsIcon,
    label: 'System Settings'
  }];
  let primaryNavItems = userPrimaryNavItems;
  let allNavItems = userAllNavItems;
  if (isSuperAdmin) {
    primaryNavItems = superAdminPrimaryNavItems;
    allNavItems = superAdminAllNavItems;
  } else if (isAdmin) {
    primaryNavItems = adminPrimaryNavItems;
    allNavItems = adminAllNavItems;
  }
  return <>
      <nav className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t shadow-lg`}>
        <div className="flex justify-around items-center h-16 max-w-screen-xl mx-auto px-2">
          {primaryNavItems.map(item => <NavItem key={item.to} {...item} />)}
          {/* More Button */}
          <button onClick={() => setShowMoreMenu(true)} className={`flex flex-col items-center justify-center py-2 px-1 min-w-0 flex-1 transition-colors duration-200 ${darkMode ? 'text-gray-400 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'}`}>
            <MoreHorizontalIcon className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium">More</span>
          </button>
        </div>
      </nav>
      {/* More Menu Drawer */}
      {showMoreMenu && <div className="fixed inset-0 z-[100] bg-black bg-opacity-50 backdrop-blur-sm sm:hidden animate-fadeIn" onClick={() => setShowMoreMenu(false)}>
          <div className={`fixed bottom-0 left-0 right-0 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-t-3xl shadow-2xl max-h-[80vh] overflow-y-auto animate-slideUp`} onClick={e => e.stopPropagation()}>
            {/* Header */}
            <div className={`sticky top-0 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-6 py-4 flex items-center justify-between z-10`}>
              <h3 className={`text-lg font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Navigation Menu
              </h3>
              <button onClick={() => setShowMoreMenu(false)} className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} transition-colors`}>
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            {/* Navigation Items Grid */}
            <div className="p-6 grid grid-cols-3 gap-4">
              {allNavItems.map(item => {
            const isActive = item.end ? item.to === location.pathname : location.pathname.startsWith(item.to);
            return <NavLink key={item.to} to={item.to} end={item.end} onClick={() => setShowMoreMenu(false)} className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-200 ${isActive ? darkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-100 text-teal-700' : darkMode ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-700' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}>
                    <item.icon className="h-7 w-7 mb-2" />
                    <span className="text-xs font-medium text-center leading-tight">
                      {item.label}
                    </span>
                  </NavLink>;
          })}
            </div>
          </div>
        </div>}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>;
}