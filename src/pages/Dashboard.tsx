import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { AdminDashboard } from './admin/Dashboard';
import { useGame } from '../contexts/GameContext';
import { useTheme } from '../contexts/ThemeContext';
import { DashboardCard } from '../components/DashboardCard';
import { DashboardAnalytics } from '../components/DashboardAnalytics';
import PetFishSettings from '../components/PetFishSettings';
import SatelliteMap from '../components/Map/SatelliteMap';
import { FishIcon, HeartPulseIcon, CloudRainIcon, TrendingUpIcon, UsersIcon, AlertTriangleIcon, WalletIcon, ActivityIcon, MapPinIcon, MessageCircleIcon, ShoppingCartIcon } from 'lucide-react';
export function Dashboard() {
  const {
    user
  } = useAuth();
  const navigate = useNavigate();
  const {
    petFish,
    aquaBites,
    walletBalance,
    feedFish
  } = useGame();
  const {
    darkMode
  } = useTheme();
  const [isFeeding, setIsFeeding] = useState(false);
  // Redirect super admin to their dedicated dashboard
  useEffect(() => {
    if (user?.role === 'super_admin') {
      navigate('/super-admin', {
        replace: true
      });
    }
  }, [user, navigate]);
  const isSuperAdmin = user?.role === 'super_admin';
  const isAdmin = user?.role === 'admin';
  const isFisher = user?.role === 'user';
  // If user is admin (but not super admin), show the admin dashboard
  if (isAdmin && !isSuperAdmin) {
    return <AdminDashboard />;
  }
  // If super admin somehow gets here, show loading while redirect happens
  if (isSuperAdmin) {
    return <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Redirecting to Super Admin Dashboard...
          </p>
        </div>
      </div>;
  }
  const StatCard = ({
    icon: Icon,
    title,
    value,
    color
  }) => <DashboardCard className="p-4 sm:p-5">
      <div className="flex items-center">
        <div className={`rounded-full p-2 sm:p-3 ${color}`}>
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </div>
        <div className="ml-3 sm:ml-4 min-w-0 flex-1">
          <h3 className="text-xs sm:text-sm md:text-base font-medium truncate">
            {title}
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold truncate">
            {value}
          </p>
        </div>
      </div>
    </DashboardCard>;
  // Calculate insurance coverage based on fish level
  const calculateCoverage = () => {
    return (petFish.level * 10000).toLocaleString();
  };
  // Handle feed pet button click
  const handleFeedPet = () => {
    if (isFeeding || aquaBites <= 0) return;
    setIsFeeding(true);
    feedFish();
    // Reset feeding state after animation completes
    setTimeout(() => {
      setIsFeeding(false);
    }, 2000);
  };
  return <div className="max-w-7xl mx-auto">
      <div className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold">Welcome, {user?.name}</h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1">
          {isFisher && 'Monitor and manage your fishing activities'}
        </p>
      </div>
      {/* Responsive Grid: 2x2 on mobile, 2 columns on tablet, 4 columns on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
        {isFisher && <>
            <StatCard icon={FishIcon} title="Insurance Coverage" value={`₱ ${calculateCoverage()}`} color="bg-gradient-to-r from-ocean-teal to-ocean-blue" />
            <StatCard icon={WalletIcon} title="AquaWallet Balance" value={`₱ ${walletBalance}`} color="bg-gradient-to-r from-blue-500 to-blue-600" />
            <StatCard icon={ActivityIcon} title="Pet Fish Level" value={`Level ${petFish.level}`} color="bg-gradient-to-r from-indigo-500 to-indigo-600" />
            <StatCard icon={CloudRainIcon} title="Weather Status" value="Favorable" color="bg-gradient-to-r from-green-500 to-green-600" />
          </>}
      </div>
      {isFisher && <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <DashboardCard className="p-4 sm:p-5 lg:col-span-2">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3 sm:pb-4 mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg font-medium">
                Pet Fish Insurance Status
              </h3>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-ocean-teal/20 text-ocean-teal dark:bg-ocean-teal/10 dark:text-ocean-light">
                    Fish Health
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-ocean-teal dark:text-ocean-light">
                    {petFish.health}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-ocean-teal/20 dark:bg-ocean-teal/10">
                <div style={{
              width: `${petFish.health}%`
            }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-accent"></div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                Feed your fish daily to maintain or increase your insurance
                coverage!
              </p>
              <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                <button className="px-3 sm:px-4 py-2 text-sm sm:text-base bg-ocean-teal text-white rounded-md hover:bg-ocean-blue focus:outline-none transition-colors" onClick={() => window.location.href = '/insurance-hub'}>
                  Go to Insurance Hub
                </button>
                <button className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md text-white bg-gradient-to-r from-ocean-aqua to-ocean-blue hover:shadow-glow focus:outline-none transition-all duration-300 flex items-center ${isFeeding ? 'animate-pulse opacity-70 cursor-not-allowed' : 'hover:scale-105'} ${aquaBites <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handleFeedPet} disabled={isFeeding || aquaBites <= 0}>
                  <span className="mr-2">🐟</span>
                  Feed Pet
                </button>
                <span className="ml-0 sm:ml-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400 self-center">
                  You have {aquaBites} AquaBites remaining
                </span>
              </div>
            </div>
          </DashboardCard>
          <DashboardCard className="p-4 sm:p-5">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3 sm:pb-4 mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg font-medium">
                Quick Actions
              </h3>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <a href="/dashboard/gps-tracking" className={`flex items-center p-2 sm:p-3 rounded-lg transition-colors ${darkMode ? 'bg-gray-800/40 hover:bg-gray-700/40' : 'bg-gray-50 hover:bg-gray-100'}`}>
                <div className={`rounded-full p-2 ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                  <MapPinIcon className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
                <div className="ml-2 sm:ml-3 min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-medium truncate">
                    GPS Tracking
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} truncate`}>
                    Track your location
                  </p>
                </div>
              </a>
              <a href="/dashboard/community" className={`flex items-center p-2 sm:p-3 rounded-lg transition-colors ${darkMode ? 'bg-gray-800/40 hover:bg-gray-700/40' : 'bg-gray-50 hover:bg-gray-100'}`}>
                <div className={`rounded-full p-2 ${darkMode ? 'bg-green-900/30' : 'bg-green-100'}`}>
                  <MessageCircleIcon className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                </div>
                <div className="ml-2 sm:ml-3 min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-medium truncate">
                    Community Chat
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} truncate`}>
                    Connect with fishermen
                  </p>
                </div>
              </a>
              <a href="/dashboard/insurance-hub" className={`flex items-center p-2 sm:p-3 rounded-lg transition-colors ${darkMode ? 'bg-gray-800/40 hover:bg-gray-700/40' : 'bg-gray-50 hover:bg-gray-100'}`}>
                <div className={`rounded-full p-2 ${darkMode ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
                  <ShoppingCartIcon className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                </div>
                <div className="ml-2 sm:ml-3 min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-medium truncate">
                    AquaSure Market
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} truncate`}>
                    Buy AquaBites
                  </p>
                </div>
              </a>
            </div>
          </DashboardCard>
          <PetFishSettings className="lg:col-span-3" />
          <DashboardCard className="p-4 sm:p-5 lg:col-span-3">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3 sm:pb-4 mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg font-medium">GPS Tracking</h3>
            </div>
            <div className="h-64 sm:h-80 md:h-96">
              <SatelliteMap showEmergencyButton={true} />
            </div>
          </DashboardCard>
          <DashboardCard className="p-4 sm:p-5 lg:col-span-3">
            <DashboardAnalytics />
          </DashboardCard>
          <DashboardCard className="p-4 sm:p-5 lg:col-span-3">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3 sm:pb-4 mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg font-medium">
                Recent Activity
              </h3>
            </div>
            <div className="flow-root">
              <ul className="-mb-8">
                <li>
                  <div className="relative pb-8">
                    <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700" aria-hidden="true"></span>
                    <div className="relative flex items-start space-x-3">
                      <div>
                        <div className="relative px-1">
                          <div className="h-8 w-8 bg-gradient-to-r from-ocean-teal to-ocean-blue rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-800">
                            <FishIcon className="h-5 w-5 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div>
                          <div className="text-sm">
                            <a href="#" className="font-medium">
                              Pet Fish Leveled Up
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                            Your fish reached Level {petFish.level}
                          </p>
                        </div>
                        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                          <p>
                            Your insurance coverage increased to ₱
                            {calculateCoverage()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="relative pb-8">
                    <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700" aria-hidden="true"></span>
                    <div className="relative flex items-start space-x-3">
                      <div>
                        <div className="relative px-1">
                          <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-800">
                            <MapPinIcon className="h-5 w-5 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div>
                          <div className="text-sm">
                            <a href="#" className="font-medium">
                              GPS Tracking Active
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                            Your location is being tracked for safety
                          </p>
                        </div>
                        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                          <p>Last updated: 5 minutes ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="relative pb-8">
                    <div className="relative flex items-start space-x-3">
                      <div>
                        <div className="relative px-1">
                          <div className="h-8 w-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center ring-8 ring-white dark:ring-gray-800">
                            <MessageCircleIcon className="h-5 w-5 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div>
                          <div className="text-sm">
                            <a href="#" className="font-medium">
                              New Announcement
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                            From Batangas Fishing Association
                          </p>
                        </div>
                        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                          <p>
                            "Reminder: Monthly meeting this Saturday at 9 AM"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </DashboardCard>
        </div>}
    </div>;
}