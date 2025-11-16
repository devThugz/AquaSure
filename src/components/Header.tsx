import React, { useEffect, useState, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon, BellIcon, MessageSquareIcon, UserIcon, LogOutIcon, SettingsIcon, ChevronDownIcon } from 'lucide-react';
interface HeaderProps {
  toggleSidebar?: () => void;
  isSidebarOpen?: boolean;
  toggleDarkMode: () => void;
}
export function Header({
  toggleSidebar,
  isSidebarOpen,
  toggleDarkMode
}: HeaderProps) {
  const {
    user,
    logout
  } = useAuth();
  const {
    darkMode
  } = useTheme();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);
  const handleLogout = () => {
    logout();
    setShowProfileDropdown(false);
  };
  return <header className={`h-14 sm:h-16 flex items-center justify-between px-3 sm:px-6 border-b ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} transition-colors duration-300 sticky top-0 z-30`}>
      <div className="flex items-center">
        {toggleSidebar && <button onClick={toggleSidebar} className={`mr-2 sm:mr-4 p-2 rounded-lg sm:hidden transition-colors ${darkMode ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`} aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isSidebarOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>}
        <div className="flex items-center sm:hidden">
          <img src="/AQUA.png" alt="AquaSure" className="h-8 w-8" />
        </div>
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button onClick={toggleDarkMode} className={`rounded-full p-2 transition-colors ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
          {darkMode ? <SunIcon className="h-4 w-4 sm:h-5 sm:w-5" /> : <MoonIcon className="h-4 w-4 sm:h-5 sm:w-5" />}
        </button>
        <button className={`rounded-full p-2 transition-colors hidden sm:block ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
          <BellIcon className="h-5 w-5" />
        </button>
        <button className={`rounded-full p-2 transition-colors hidden sm:block ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
          <MessageSquareIcon className="h-5 w-5" />
        </button>
        <div className="relative" ref={dropdownRef}>
          <button className="flex items-center focus:outline-none min-w-0" onClick={() => setShowProfileDropdown(!showProfileDropdown)}>
            <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full overflow-hidden bg-gradient-accent p-[2px] flex items-center">
              {user?.avatar ? <img className="h-full w-full rounded-full object-cover border-2 border-transparent" src={user.avatar} alt={user.name} /> : <div className="h-full w-full rounded-full bg-ocean-deep flex items-center justify-center">
                  <UserIcon className="h-4 w-4 text-white" />
                </div>}
            </div>
            <ChevronDownIcon className="h-4 w-4 ml-1 text-gray-500 hidden sm:block" />
          </button>
          {showProfileDropdown && <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg py-1 z-50 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
              <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  {user?.name}
                </p>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {user?.role === 'super_admin' ? 'Super Admin' : user?.role === 'admin' ? 'LGU Admin' : 'Fisher'}
                </p>
              </div>
              <a href="#" className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} flex items-center`}>
                <SettingsIcon className="h-4 w-4 mr-2" />
                Profile Settings
              </a>
              <button onClick={handleLogout} className={`block w-full text-left px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} flex items-center`}>
                <LogOutIcon className="h-4 w-4 mr-2" />
                Log Out
              </button>
            </div>}
        </div>
      </div>
    </header>;
}