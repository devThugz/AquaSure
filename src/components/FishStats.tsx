import React from 'react';
import { motion } from 'framer-motion';
import { useGame } from '../contexts/GameContext';
import { Activity as ActivityIcon, Heart as HeartIcon, Award as AwardIcon, Clock as ClockIcon, Zap as ZapIcon, Fish as FishIcon } from 'lucide-react';
const FishStats: React.FC = () => {
  const {
    petFish,
    toggleRestMode,
    feedFish,
    aquaBites
  } = useGame();
  // Calculate time since last fed
  const getTimeSinceLastFed = () => {
    const lastFed = new Date(petFish.lastFed);
    const now = new Date();
    const diffMs = now.getTime() - lastFed.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minutes ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours} hours ago`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} days ago`;
  };
  // Calculate XP progress percentage
  const xpProgressPercentage = petFish.xp / (petFish.level * 100) * 100;
  return <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Fish Stats</h3>
        <div className="flex items-center">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${petFish.isResting ? 'bg-gray-100 text-gray-800' : petFish.health > 70 ? 'bg-green-100 text-green-800' : petFish.health > 30 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
            {petFish.isResting ? 'Resting' : petFish.health > 70 ? 'Healthy' : petFish.health > 30 ? 'Hungry' : 'Starving'}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {/* Level and XP */}
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center mb-2">
            <AwardIcon className="h-4 w-4 text-blue-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">
              Level {petFish.level}
            </span>
          </div>
          <div className="relative pt-1">
            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-100">
              <motion.div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500" initial={{
              width: 0
            }} animate={{
              width: `${xpProgressPercentage}%`
            }} transition={{
              duration: 0.5
            }} />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>XP: {petFish.xp}</span>
              <span>Next: {petFish.level * 100}</span>
            </div>
          </div>
        </div>
        {/* Health */}
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center mb-2">
            <HeartIcon className="h-4 w-4 text-red-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">Health</span>
          </div>
          <div className="relative pt-1">
            <div className="overflow-hidden h-2 text-xs flex rounded bg-red-100">
              <motion.div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500" initial={{
              width: 0
            }} animate={{
              width: `${petFish.health}%`
            }} transition={{
              duration: 0.5
            }} />
            </div>
            <div className="text-xs text-gray-500 mt-1">
              <span>{petFish.health}%</span>
            </div>
          </div>
        </div>
        {/* Stage */}
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center">
            <FishIcon className="h-4 w-4 text-teal-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">Stage</span>
          </div>
          <div className="text-sm text-gray-600 mt-1">{petFish.stage}</div>
        </div>
        {/* Last Fed */}
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 text-purple-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">Last Fed</span>
          </div>
          <div className="text-sm text-gray-600 mt-1">
            {getTimeSinceLastFed()}
          </div>
        </div>
      </div>
      <div className="flex space-x-2 pt-2">
        <button onClick={feedFish} disabled={aquaBites <= 0 || petFish.health >= 100} className={`flex-1 px-3 py-2 rounded-md text-sm font-medium ${aquaBites > 0 && petFish.health < 100 ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}>
          <div className="flex items-center justify-center">
            <ZapIcon className="h-4 w-4 mr-1" />
            Feed Fish ({aquaBites} left)
          </div>
        </button>
        <button onClick={toggleRestMode} className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
          {petFish.isResting ? 'Wake Up' : 'Rest Mode'}
        </button>
      </div>
    </div>;
};
export default FishStats;