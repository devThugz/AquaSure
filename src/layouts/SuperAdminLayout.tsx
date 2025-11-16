import React, { useEffect, useState } from 'react';
import { SuperAdminSidebar } from '../components/SuperAdminSidebar';
import { Header } from '../components/Header';
import { BottomNavigation } from '../components/BottomNavigation';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
interface SuperAdminLayoutProps {
  children?: React.ReactNode;
}
export function SuperAdminLayout({
  children
}: SuperAdminLayoutProps) {
  const {
    user
  } = useAuth();
  const {
    darkMode,
    toggleDarkMode
  } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isSuperAdmin = user?.role === 'super_admin';
  // Handle responsive sidebar
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
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // Redirect or show error if not super admin
  if (!isSuperAdmin) {
    return <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
          <p className="mt-2">You don't have permission to access this area.</p>
        </div>
      </div>;
  }
  return <div className={`flex h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Sidebar with mobile overlay */}
      <div className={`fixed inset-y-0 left-0 z-40 transition-transform duration-300 ease-in-out sm:relative sm:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <SuperAdminSidebar />
      </div>
      {/* Overlay for mobile */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 sm:hidden transition-opacity duration-300" onClick={toggleSidebar} />}
      <div className="flex flex-col flex-1 overflow-hidden min-w-0">
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} toggleDarkMode={toggleDarkMode} />
        <main className={`flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 pb-20 sm:pb-6 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
          {children}
        </main>
      </div>
      {/* Bottom Navigation for mobile */}
      <BottomNavigation />
    </div>;
}