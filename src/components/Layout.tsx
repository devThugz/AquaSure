import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useTheme } from '../contexts/ThemeContext';
import { FloatingAIBubble } from './FloatingAIBubble';
import { BottomNavigation } from './BottomNavigation';
interface LayoutProps {
  darkMode?: boolean;
  toggleDarkMode?: () => void;
}
export function Layout({
  darkMode,
  toggleDarkMode
}: LayoutProps) {
  const {
    darkMode: contextDarkMode,
    toggleDarkMode: contextToggleDarkMode
  } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // Use context values if props are not provided
  const effectiveDarkMode = darkMode !== undefined ? darkMode : contextDarkMode;
  const effectiveToggleDarkMode = toggleDarkMode || contextToggleDarkMode;
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
  return <div className={`min-h-screen ${effectiveDarkMode ? 'dark bg-ocean-deep' : 'bg-soft-white'} transition-colors duration-300`}>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar with mobile overlay */}
        <div className={`fixed inset-y-0 left-0 z-40 transition-transform duration-300 ease-in-out sm:relative sm:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <Sidebar />
        </div>
        {/* Overlay for mobile */}
        {isSidebarOpen && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 sm:hidden transition-opacity duration-300" onClick={toggleSidebar} />}
        <div className="flex flex-col flex-1 overflow-hidden min-w-0">
          <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} toggleDarkMode={effectiveToggleDarkMode} />
          <main className={`flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6 pb-20 sm:pb-6 ${effectiveDarkMode ? 'bg-ocean-deep text-soft-white' : 'bg-soft-white text-ocean-deep'}`}>
            <Outlet />
          </main>
        </div>
      </div>
      <BottomNavigation />
      <FloatingAIBubble persistent={true} />
    </div>;
}