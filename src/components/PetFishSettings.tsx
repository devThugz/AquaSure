import React, { useEffect, useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { useTheme } from '../contexts/ThemeContext';
import { EditIcon, CheckIcon, XIcon, FishIcon, ShieldIcon, RefreshCwIcon, InfoIcon, AlertCircleIcon } from 'lucide-react';
interface PetFishSettingsProps {
  className?: string;
}
const PetFishSettings: React.FC<PetFishSettingsProps> = ({
  className = ''
}) => {
  const {
    petFish,
    renameFish,
    feedFish,
    aquaBites,
    autoRenewInsurance,
    toggleAutoRenew
  } = useGame();
  const {
    darkMode
  } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(petFish.name);
  const [isFeeding, setIsFeeding] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showRenewalInfo, setShowRenewalInfo] = useState(false);
  // Reset name field when not editing
  useEffect(() => {
    if (!isEditing) {
      setNewName(petFish.name);
    }
  }, [isEditing, petFish.name]);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };
  const handleNameSubmit = () => {
    if (newName.trim() && newName !== petFish.name) {
      renameFish(newName.trim());
    }
    setIsEditing(false);
  };
  const handleFeedPet = () => {
    if (isFeeding || aquaBites <= 0) return;
    setIsFeeding(true);
    feedFish();
    // Reset feeding state after animation completes
    setTimeout(() => {
      setIsFeeding(false);
    }, 2000);
  };
  return <div className={`${className} ${darkMode ? 'bg-ocean-deep border-gray-700' : 'bg-white border-gray-200'} border rounded-lg p-5 transition-all duration-300`}>
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4 flex justify-between items-center">
        <h3 className="text-lg font-medium">Pet Fish Settings</h3>
        <div className="relative">
          <InfoIcon className={`h-5 w-5 cursor-pointer ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`} onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} />
          {showTooltip && <div className="absolute right-0 mt-2 w-64 p-3 rounded-md shadow-lg z-10 text-xs bg-gray-800 text-gray-200">
              Your pet fish represents your insurance policy. Feed it regularly
              to maintain and increase your coverage level!
            </div>}
        </div>
      </div>
      <div className="space-y-5">
        {/* Pet Name Setting */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Pet Fish Name
          </label>
          <div className="flex items-center">
            {isEditing ? <>
                <input type="text" value={newName} onChange={handleNameChange} className={`flex-grow px-3 py-2 rounded-l-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-ocean-teal`} placeholder="Enter fish name" autoFocus maxLength={20} />
                <button onClick={handleNameSubmit} className="px-3 py-2 bg-ocean-teal text-white rounded-none hover:bg-ocean-blue focus:outline-none transition-colors">
                  <CheckIcon className="h-5 w-5" />
                </button>
                <button onClick={() => setIsEditing(false)} className="px-3 py-2 bg-gray-500 text-white rounded-r-md hover:bg-gray-600 focus:outline-none transition-colors">
                  <XIcon className="h-5 w-5" />
                </button>
              </> : <>
                <div className={`flex-grow px-3 py-2 rounded-l-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-800'}`}>
                  <span className="flex items-center">
                    <FishIcon className="h-4 w-4 mr-2 text-ocean-teal" />
                    {petFish.name}
                  </span>
                </div>
                <button onClick={() => setIsEditing(true)} className="px-3 py-2 bg-ocean-blue text-white rounded-r-md hover:bg-ocean-teal focus:outline-none transition-colors">
                  <EditIcon className="h-5 w-5" />
                </button>
              </>}
          </div>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            You can change your pet fish's name at any time.
          </p>
        </div>
        {/* Feed Pet Setting */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Feed Your Pet
          </label>
          <div className="flex items-center space-x-3">
            <button className={`px-4 py-2 rounded-md text-white bg-gradient-to-r from-ocean-aqua to-ocean-blue hover:shadow-glow focus:outline-none transition-all duration-300 flex items-center ${isFeeding ? 'animate-pulse opacity-70 cursor-not-allowed' : 'hover:scale-105'} ${aquaBites <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handleFeedPet} disabled={isFeeding || aquaBites <= 0}>
              <span className="mr-2">🐟</span>
              Feed Pet
            </button>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {aquaBites} AquaBites remaining
            </span>
          </div>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Feeding increases health and may level up your pet fish.
          </p>
        </div>
        {/* Insurance Renewal Setting */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Insurance Settings
          </label>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ShieldIcon className={`h-5 w-5 mr-2 ${autoRenewInsurance ? 'text-green-500' : 'text-gray-400'}`} />
              <span>Auto-renew insurance</span>
            </div>
            <div className="relative">
              <button onClick={() => toggleAutoRenew()} className={`relative w-12 h-6 transition-colors duration-300 rounded-full focus:outline-none ${autoRenewInsurance ? 'bg-ocean-teal' : darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}>
                <span className={`absolute left-1 top-1 w-4 h-4 transition-transform duration-300 transform ${autoRenewInsurance ? 'translate-x-6 bg-white' : 'bg-white'} rounded-full`}></span>
              </button>
              <button className="ml-2" onMouseEnter={() => setShowRenewalInfo(true)} onMouseLeave={() => setShowRenewalInfo(false)}>
                <AlertCircleIcon className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </button>
              {showRenewalInfo && <div className="absolute right-0 mt-2 w-64 p-3 rounded-md shadow-lg z-10 text-xs bg-gray-800 text-gray-200">
                  When enabled, your insurance will automatically renew when it
                  expires, using 50 AquaBites.
                </div>}
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex-grow">
              <div className="text-xs font-medium mb-1 text-gray-600 dark:text-gray-400">
                Current Coverage: ₱{(petFish.level * 10000).toLocaleString()}
              </div>
              <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
                <div className="h-full bg-gradient-to-r from-ocean-teal to-ocean-blue" style={{
                width: `${Math.min(100, petFish.level * 10)}%`
              }}></div>
              </div>
            </div>
            <button className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" title="Refresh coverage details">
              <RefreshCwIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default PetFishSettings;