import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FishIcon, HeartIcon, ShieldIcon, TrendingUpIcon, DropletIcon, MoonIcon, InfoIcon, XIcon } from 'lucide-react';
import { useGame, PetFish } from '../contexts/GameContext';
// Fish images for different levels
const fishImages = {
  1: "/fish_level/level-1.png",
  2: "/fish_level/level-1.png",
  3: "/%E2%80%94Pngtree%E2%80%94yellow_cartoon_fish_clipart_4151882.png",
  // Higher levels can use these images cyclically or have their own
  4: "/%E2%80%94Pngtree%E2%80%94yellow_cartoon_fish_clipart_4151882.png",
  5: "/%E2%80%94Pngtree%E2%80%94yellow_cartoon_fish_clipart_4151882.png"
};
// Get appropriate fish image based on level
const getFishImage = (level: number) => {
  if (level >= 3) return fishImages[3]; // Yellow fish for level 3+
  if (level === 2) return fishImages[2]; // Blue fish for level 2
  return fishImages[1]; // Default fish for level 1
};
// Fallback fish images if assets aren't available
const fallbackFishImages = {
  Baby: 'https://images.unsplash.com/photo-1545816250-0c2c90e5f59a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  Juvenile: 'https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  Adult: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  Legendary: 'https://images.unsplash.com/photo-1513039464749-94912b3841ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
};
interface PetFishCardProps {
  className?: string;
  showStats?: boolean;
  showFeeding?: boolean;
}
const PetFishCard: React.FC<PetFishCardProps> = ({
  className = '',
  showStats = true,
  showFeeding = true
}) => {
  const {
    petFish,
    feedFish,
    aquaBites,
    toggleRestMode,
    fishAnimation,
    setFishAnimation
  } = useGame();
  const [showDetails, setShowDetails] = useState(false);
  const [levelUpAnimation, setLevelUpAnimation] = useState(false);
  const [previousLevel, setPreviousLevel] = useState(petFish.level);
  // Check for level up
  useEffect(() => {
    if (petFish.level > previousLevel) {
      setLevelUpAnimation(true);
      setTimeout(() => setLevelUpAnimation(false), 3000);
    }
    setPreviousLevel(petFish.level);
  }, [petFish.level, previousLevel]);
  // Calculate XP percentage
  const xpPercentage = petFish.xp / (petFish.level * 100) * 100;
  // Calculate insurance coverage based on fish level
  const insuranceCoverage = petFish.level * 10000;
  // Handle feeding
  const handleFeed = () => {
    if (aquaBites > 0 && petFish.health < 100) {
      feedFish();
    }
  };
  // Get fish image based on level
  const fishImage = getFishImage(petFish.level);
  return <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden ${className}`}>
      {/* Pet fish card header */}
      <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <FishIcon className="h-6 w-6 text-white mr-2" />
          <div>
            <h3 className="text-lg font-medium text-white">{petFish.name}</h3>
            <div className="flex items-center">
              <span className="text-xs text-blue-100">
                Level {petFish.level}
              </span>
              <span className="mx-2 text-blue-200">•</span>
              <span className="text-xs text-blue-100">{petFish.stage}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={() => toggleRestMode()} className={`p-1.5 rounded-full ${petFish.isResting ? 'bg-indigo-100 text-indigo-600' : 'bg-white/20 text-white hover:bg-white/30'}`} aria-label={petFish.isResting ? 'Wake up fish' : 'Put fish to rest'}>
            <MoonIcon className="h-4 w-4" />
          </button>
          <button onClick={() => setShowDetails(true)} className="p-1.5 rounded-full bg-white/20 text-white hover:bg-white/30" aria-label="Show fish details">
            <InfoIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
      {/* Fish aquarium area */}
      <div className="relative h-48 bg-gradient-to-b from-blue-300 to-blue-500 overflow-hidden">
        {/* Water surface animation */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-blue-200 bg-opacity-30"></div>
        {/* Sand bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-amber-200 bg-opacity-80"></div>
        {/* Decorative elements */}
        <div className="absolute bottom-8 left-1/4 w-12 h-16 bg-green-700 bg-opacity-60 rounded-t-lg"></div>
        <div className="absolute bottom-8 right-1/4 w-8 h-12 bg-green-600 bg-opacity-60 rounded-t-lg"></div>
        {/* Fish image with animations */}
        <AnimatePresence>
          {levelUpAnimation && <motion.div className="absolute inset-0 bg-yellow-500 bg-opacity-30 flex items-center justify-center z-10" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.5
        }}>
              <motion.div className="text-center" initial={{
            scale: 0.8,
            y: 20
          }} animate={{
            scale: 1.2,
            y: 0
          }} transition={{
            duration: 0.8,
            type: 'spring',
            stiffness: 200
          }}>
                <div className="text-yellow-100 text-3xl font-bold drop-shadow-lg">
                  Level Up!
                </div>
                <div className="text-white font-medium text-lg">
                  Your fish is now level {petFish.level}
                </div>
              </motion.div>
            </motion.div>}
        </AnimatePresence>
        <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" animate={{
        x: fishAnimation === 'feeding' ? [0, 10, -10, 0] : 0,
        y: fishAnimation === 'feeding' ? [0, -5, 0] : 0,
        scale: fishAnimation === 'feeding' ? [1, 1.1, 1] : 1,
        rotate: fishAnimation === 'feeding' ? [0, 5, -5, 0] : 0
      }} transition={{
        duration: fishAnimation === 'feeding' ? 1 : 0.5,
        type: 'spring',
        stiffness: 100
      }}>
          <img src={fishImage} alt={`${petFish.name} - Level ${petFish.level} ${petFish.stage}`} className={`h-32 w-auto object-contain transition-all duration-300 ${petFish.isResting ? 'opacity-70' : 'opacity-100'}`} onError={e => {
          // Fallback to stage-based image if level-based image fails
          ;
          (e.target as HTMLImageElement).src = fallbackFishImages[petFish.stage];
        }} />
          {/* Resting indicator */}
          {petFish.isResting && <div className="absolute top-0 right-0">
              <span className="text-xl">💤</span>
            </div>}
        </motion.div>
        {/* Feeding animation */}
        <AnimatePresence>
          {fishAnimation === 'feeding' && <motion.div className="absolute top-0 left-1/2 transform -translate-x-1/2" initial={{
          y: -20,
          opacity: 0
        }} animate={{
          y: 80,
          opacity: [0, 1, 0]
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 1.5
        }}>
              <div className="w-6 h-6 bg-amber-300 rounded-full" />
            </motion.div>}
        </AnimatePresence>
        {/* Level badge */}
        <div className="absolute top-2 left-2 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-80 rounded-full px-2 py-0.5 shadow-md">
          <div className="flex items-center">
            <TrendingUpIcon className="h-3 w-3 text-blue-500 mr-1" />
            <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
              Level {petFish.level}
            </span>
          </div>
        </div>
      </div>
      {/* Stats and controls */}
      {showStats && <div className="p-4 space-y-3">
          {/* Health bar */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center">
                <HeartIcon className="h-4 w-4 text-red-500 mr-1" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Health
                </span>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {petFish.health}%
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${petFish.health > 70 ? 'bg-green-500' : petFish.health > 30 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
            width: `${petFish.health}%`
          }}></div>
            </div>
          </div>
          {/* XP bar */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center">
                <TrendingUpIcon className="h-4 w-4 text-blue-500 mr-1" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Experience
                </span>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {petFish.xp}/{petFish.level * 100} XP
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{
            width: `${xpPercentage}%`
          }}></div>
            </div>
          </div>
          {/* Insurance coverage */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center">
              <ShieldIcon className="h-4 w-4 text-teal-500 mr-1" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Insurance Coverage
              </span>
            </div>
            <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
              ₱ {insuranceCoverage.toLocaleString()}
            </span>
          </div>
        </div>}
      {/* Feeding controls */}
      {showFeeding && <div className="px-4 pb-4 pt-2">
          <button onClick={handleFeed} disabled={aquaBites <= 0 || petFish.health >= 100 || petFish.isResting} className={`w-full py-2 px-4 rounded-lg flex items-center justify-center ${aquaBites <= 0 || petFish.health >= 100 || petFish.isResting ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700 text-white'}`}>
            <DropletIcon className="h-5 w-5 mr-2" />
            Feed Fish ({aquaBites} AquaBites)
          </button>
          {petFish.health >= 100 && <p className="text-center text-xs text-green-600 dark:text-green-400 mt-1">
              Your fish is at full health!
            </p>}
          {aquaBites <= 0 && <p className="text-center text-xs text-yellow-600 dark:text-yellow-400 mt-1">
              You need more AquaBites to feed your fish.
            </p>}
          {petFish.isResting && <p className="text-center text-xs text-blue-600 dark:text-blue-400 mt-1">
              Your fish is resting. Wake it up to feed.
            </p>}
        </div>}
      {/* Fish details modal */}
      <AnimatePresence>
        {showDetails && <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }}>
            <motion.div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl max-w-md w-full" initial={{
          scale: 0.9,
          y: 20
        }} animate={{
          scale: 1,
          y: 0
        }} exit={{
          scale: 0.9,
          y: 20
        }}>
              <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-4 flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">
                  {petFish.name} - Details
                </h3>
                <button onClick={() => setShowDetails(false)} className="text-white hover:text-blue-100">
                  <XIcon className="h-5 w-5" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex mb-4">
                  <div className="w-1/3 flex-shrink-0">
                    <img src={fishImage} alt={petFish.name} className="w-full h-auto rounded-lg" onError={e => {
                  ;
                  (e.target as HTMLImageElement).src = fallbackFishImages[petFish.stage];
                }} />
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">
                      Level {petFish.level} {petFish.stage}
                    </h4>
                    <div className="mt-1 space-y-2">
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <HeartIcon className="h-4 w-4 text-red-500 mr-2" />
                        Health: {petFish.health}%
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <TrendingUpIcon className="h-4 w-4 text-blue-500 mr-2" />
                        XP: {petFish.xp}/{petFish.level * 100}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <ShieldIcon className="h-4 w-4 text-teal-500 mr-2" />
                        Insurance: ₱ {insuranceCoverage.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Insurance Benefits
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <ShieldIcon className="h-4 w-4 text-teal-500 mr-2 mt-0.5" />
                      <span>
                        Basic coverage: ₱{' '}
                        {(petFish.level * 5000).toLocaleString()} for boat
                        damage
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ShieldIcon className="h-4 w-4 text-teal-500 mr-2 mt-0.5" />
                      <span>
                        Medical coverage: ₱{' '}
                        {(petFish.level * 2000).toLocaleString()} for injuries
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ShieldIcon className="h-4 w-4 text-teal-500 mr-2 mt-0.5" />
                      <span>
                        Equipment coverage: ₱{' '}
                        {(petFish.level * 3000).toLocaleString()} for gear loss
                      </span>
                    </li>
                    {petFish.level >= 5 && <li className="flex items-start">
                        <ShieldIcon className="h-4 w-4 text-teal-500 mr-2 mt-0.5" />
                        <span>
                          Premium benefit: Weather-related compensation
                        </span>
                      </li>}
                    {petFish.level >= 10 && <li className="flex items-start">
                        <ShieldIcon className="h-4 w-4 text-teal-500 mr-2 mt-0.5" />
                        <span>Elite benefit: Family protection coverage</span>
                      </li>}
                  </ul>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Feeding History
                  </h4>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Last fed: {new Date(petFish.lastFed).toLocaleString()}
                  </div>
                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Feed your fish daily to maintain health and increase XP!
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 flex justify-end">
                <button onClick={() => setShowDetails(false)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </div>;
};
export default PetFishCard;