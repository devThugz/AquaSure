import React, { useEffect, useState, Component } from 'react';
import { Outlet } from 'react-router-dom';
import { AdminSidebar } from '../components/AdminSidebar';
import { SuperAdminSidebar } from '../components/SuperAdminSidebar';
import { Header } from '../components/Header';
import { BottomNavigation } from '../components/BottomNavigation';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
interface DashboardLayoutProps {
  role: 'super_admin' | 'admin' | 'user';
  children?: React.ReactNode;
}
export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  role,
  children
}) => {
  const {
    user
  } = useAuth();
  const {
    darkMode,
    toggleDarkMode
  } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // Close sidebar on mobile by default
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (window.innerWidth < 640) {
      setIsSidebarOpen(false);
    }
  }, [window.location.pathname]);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // Determine which sidebar to render based on role
  const isSuperAdmin = user?.role === 'super_admin';
  const SidebarComponent = isSuperAdmin ? SuperAdminSidebar : AdminSidebar;
  return <div className={`flex h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Sidebar - with mobile overlay */}
      <div className={`fixed inset-y-0 left-0 z-40 transition-transform duration-300 ease-in-out sm:relative sm:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <SidebarComponent />
      </div>
      {/* Overlay for mobile */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 sm:hidden transition-opacity duration-300" onClick={toggleSidebar} />}
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} toggleDarkMode={toggleDarkMode} />
        <main className={`flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6 pb-20 sm:pb-6 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
          {children || <Outlet />}
        </main>
      </div>
      {/* Bottom Navigation for mobile */}
      <BottomNavigation />
    </div>;
};