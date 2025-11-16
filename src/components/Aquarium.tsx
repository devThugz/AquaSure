import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from '../contexts/GameContext';
import { useTheme } from '../contexts/ThemeContext';
import { RewardBubble } from './RewardBubble';
import { GiftIcon, XIcon } from 'lucide-react';
// Fish component that will be animated
const Fish: React.FC<{
  stage: string;
  isResting: boolean;
  animation: string | null;
  darkMode: boolean;
  level: number;
}> = ({
  stage,
  isResting,
  animation,
  darkMode,
  level
}) => {
  // Fish images based on level
  const blueFishImage = "/fish_level/level-2.png";
  const yellowFishImage = "/fish_level/level-3.png";
  let fishImage;
  if (level === 2) {
    fishImage = blueFishImage;
  } else if (level >= 3) {
    fishImage = yellowFishImage;
  } else {
    fishImage = "/fish_level/level-2.png";
  }
  const fallbackFishImages = {
    Baby: "/fish_level/level-1.png",
    Juvenile: '/fish_level/level-2.png',
    Adult: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    Legendary: 'https://images.unsplash.com/photo-1513039464749-94912b3841ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  };
  const swimVariants = {
    idle: {
      x: [0, 10, 0, -10, 0],
      y: [0, 5, 0, -5, 0],
      transition: {
        x: {
          repeat: Infinity,
          duration: 4,
          ease: 'easeInOut'
        },
        y: {
          repeat: Infinity,
          duration: 3,
          ease: 'easeInOut'
        }
      }
    },
    resting: {
      y: [0, -2, 0],
      transition: {
        y: {
          repeat: Infinity,
          duration: 2,
          ease: 'easeInOut'
        }
      }
    },
    feeding: {
      scale: [1, 1.1, 1],
      y: [0, -10, 0],
      transition: {
        duration: 0.5
      }
    }
  };
  return <motion.div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{
    left: '50%',
    top: '50%',
    filter: isResting ? 'brightness(0.7)' : 'brightness(1)'
  }} variants={swimVariants} animate={isResting ? 'resting' : animation === 'feeding' ? 'feeding' : 'idle'}>
      <div className={`relative ${darkMode ? 'glow-effect' : ''}`}>
        <img src={fishImage} alt={`${stage} Fish`} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain" style={{
        filter: darkMode ? 'drop-shadow(0 0 8px rgba(0, 230, 230, 0.6))' : 'none'
      }} onError={e => {
        ;
        (e.target as HTMLImageElement).src = fallbackFishImages[stage];
      }} />
        {darkMode && <div className="absolute inset-0 rounded-full bg-ocean-teal/20 filter blur-md -z-10"></div>}
      </div>
      {isResting && <div className="absolute -top-1 -right-1 sm:top-0 sm:right-0">
          <span className="text-base sm:text-lg md:text-xl">💤</span>
        </div>}
    </motion.div>;
};
// Bubble component
const Bubble: React.FC<{
  delay: number;
  size: number;
  left: string;
}> = ({
  delay,
  size,
  left
}) => {
  return <motion.div className="absolute bottom-0 rounded-full bg-white bg-opacity-50" style={{
    width: size,
    height: size,
    left
  }} animate={{
    y: [0, -300],
    opacity: [0.7, 0]
  }} transition={{
    duration: 3 + Math.random() * 2,
    delay,
    repeat: Infinity,
    ease: 'easeOut'
  }} />;
};
// Main Aquarium component
const Aquarium: React.FC = () => {
  const {
    petFish,
    fishAnimation,
    feedFish,
    unclaimedRewards,
    claimReward
  } = useGame();
  const {
    darkMode
  } = useTheme();
  const [bubbles, setBubbles] = useState<Array<{
    id: number;
    size: number;
    delay: number;
    left: string;
  }>>([]);
  const [showFeedingBubbles, setShowFeedingBubbles] = useState(false);
  const [showClaimSuccess, setShowClaimSuccess] = useState(false);
  const [claimedRewardName, setClaimedRewardName] = useState('');
  const [showAdModal, setShowAdModal] = useState(false);
  const [currentAdSponsor, setCurrentAdSponsor] = useState('');
  const [currentAdReward, setCurrentAdReward] = useState('');
  const [pendingRewardId, setPendingRewardId] = useState<string | null>(null);
  // Map reward types to sponsors
  const rewardSponsors = {
    fishing_rod: 'Ocean Gear Co.',
    net: 'NetMaster Pro',
    bait: 'BaitMaster',
    tackle_box: 'TackleBox Inc.',
    gear_set: 'Elite Fishing Supplies'
  };
  // Generate random bubbles
  useEffect(() => {
    const bubbleCount = 15;
    const newBubbles = [];
    for (let i = 0; i < bubbleCount; i++) {
      newBubbles.push({
        id: i,
        size: 5 + Math.random() * 15,
        delay: Math.random() * 5,
        left: `${5 + Math.random() * 90}%`
      });
    }
    setBubbles(newBubbles);
  }, []);
  // Handle feeding bubble animation
  useEffect(() => {
    if (fishAnimation === 'feeding') {
      setShowFeedingBubbles(true);
      const timer = setTimeout(() => {
        setShowFeedingBubbles(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [fishAnimation]);
  // Handle reward claim with sequential flow: Ad Modal → Reward Claim
  const handleClaimReward = (rewardId: string) => {
    const reward = unclaimedRewards.find(r => r.id === rewardId);
    if (reward) {
      // Store reward details for later
      setPendingRewardId(rewardId);
      setClaimedRewardName(reward.name);
      // Show advertisement first
      const sponsor = rewardSponsors[reward.type] || 'Our Partner';
      setCurrentAdSponsor(sponsor);
      setCurrentAdReward(reward.name);
      setShowAdModal(true);
    }
  };
  // Handle closing ad modal and showing reward claim
  const handleCloseAdModal = () => {
    setShowAdModal(false);
    // After ad modal closes, claim the reward and show success notification
    if (pendingRewardId) {
      claimReward(pendingRewardId);
      setPendingRewardId(null);
      // Show success notification after a brief delay
      setTimeout(() => {
        setShowClaimSuccess(true);
        // Hide success notification after 3 seconds
        setTimeout(() => {
          setShowClaimSuccess(false);
        }, 3000);
      }, 300);
    }
  };
  return <>
      <div className={`relative w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-xl ${darkMode ? 'bg-gradient-to-b from-blue-900 to-blue-950' : 'bg-gradient-to-b from-blue-300 to-blue-500'} overflow-hidden ${darkMode ? 'border border-ocean-teal/30' : ''}`}>
        {/* Water surface animation */}
        <motion.div className={`absolute top-0 left-0 right-0 h-3 sm:h-4 ${darkMode ? 'bg-blue-800' : 'bg-blue-200'} bg-opacity-30`} animate={{
        y: [0, 2, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }} />
        {/* Decorative elements - responsive sizing */}
        <div className={`absolute bottom-0 left-0 right-0 h-8 sm:h-10 md:h-12 ${darkMode ? 'bg-amber-900' : 'bg-amber-200'} bg-opacity-80`} />
        <div className={`absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/4 w-10 h-12 sm:w-12 sm:h-16 md:w-16 md:h-20 ${darkMode ? 'bg-green-900' : 'bg-green-700'} bg-opacity-60 rounded-t-lg`} />
        <div className={`absolute bottom-8 sm:bottom-10 md:bottom-12 right-1/4 w-8 h-10 sm:w-10 sm:h-12 md:w-12 md:h-16 ${darkMode ? 'bg-green-800' : 'bg-green-600'} bg-opacity-60 rounded-t-lg`} />
        {/* Regular bubbles */}
        {bubbles.map(bubble => <Bubble key={bubble.id} size={bubble.size} delay={bubble.delay} left={bubble.left} />)}
        {/* Reward Bubbles Container - constrained within aquarium bounds */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="relative w-full h-full pointer-events-auto">
            <AnimatePresence>
              {unclaimedRewards.map((reward, index) => <RewardBubble key={reward.id} reward={reward} onClaim={handleClaimReward} index={index} />)}
            </AnimatePresence>
          </div>
        </div>
        {/* Claim Success Notification - Enhanced Mobile Responsiveness */}
        <AnimatePresence>
          {showClaimSuccess && <motion.div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} onClick={() => setShowClaimSuccess(false)}>
              <motion.div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-4 border-yellow-400 w-full max-w-[340px] sm:max-w-sm overflow-hidden" initial={{
            scale: 0,
            rotate: -10
          }} animate={{
            scale: 1,
            rotate: 0
          }} exit={{
            scale: 0,
            rotate: 10
          }} transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20
          }} onClick={e => e.stopPropagation()}>
                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 text-center">
                  <motion.div className="text-5xl sm:text-6xl" initial={{
                scale: 0
              }} animate={{
                scale: 1
              }} transition={{
                delay: 0.2,
                type: 'spring',
                stiffness: 200
              }}>
                    🎉
                  </motion.div>
                </div>
                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    Reward Claimed!
                  </h3>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4 mb-4 border-2 border-yellow-200 dark:border-yellow-700">
                    <p className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 break-words">
                      {claimedRewardName}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                    Your reward has been added to your inventory
                  </p>
                  {/* Close button */}
                  <button onClick={() => setShowClaimSuccess(false)} className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-xl font-bold text-base hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg active:scale-95">
                    Awesome!
                  </button>
                </div>
              </motion.div>
            </motion.div>}
        </AnimatePresence>
        {/* Feeding bubbles */}
        {showFeedingBubbles && <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2">
            {Array.from({
          length: 8
        }).map((_, i) => <motion.div key={i} className="absolute rounded-full bg-white bg-opacity-70" style={{
          width: 3 + Math.random() * 6,
          height: 3 + Math.random() * 6,
          left: (Math.random() - 0.5) * 40,
          top: (Math.random() - 0.5) * 40
        }} animate={{
          y: [0, -60 - Math.random() * 40],
          opacity: [0.8, 0]
        }} transition={{
          duration: 1 + Math.random(),
          delay: Math.random() * 0.5
        }} />)}
          </div>}
        {/* Fish */}
        <Fish stage={petFish.stage} isResting={petFish.isResting} animation={fishAnimation} darkMode={darkMode} level={petFish.level} />
        {/* Feeding animation */}
        <AnimatePresence>
          {fishAnimation === 'feeding' && <motion.div className="absolute top-0 left-1/2 transform -translate-x-1/2" initial={{
          y: -20,
          opacity: 0
        }} animate={{
          y: 100,
          opacity: [0, 1, 0]
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 1.5
        }}>
              <div className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${darkMode ? 'bg-amber-500' : 'bg-amber-300'} rounded-full`} />
            </motion.div>}
        </AnimatePresence>
        {/* Fish name display - responsive text */}
        <div className={`absolute top-2 left-2 ${darkMode ? 'bg-gray-800 bg-opacity-70' : 'bg-white bg-opacity-70'} px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium ${darkMode ? 'text-aqua-300 shadow-glow' : 'text-ocean-deep'}`}>
          <span className="hidden sm:inline">
            {petFish.name} - Level {petFish.level} {petFish.stage}
          </span>
          <span className="sm:hidden">Lvl {petFish.level}</span>
        </div>
        {/* Reward indicator - responsive */}
        {unclaimedRewards.length > 0 && <motion.div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs font-bold shadow-lg" animate={{
        scale: [1, 1.05, 1]
      }} transition={{
        duration: 1,
        repeat: Infinity
      }}>
            <span className="hidden sm:inline">
              🎁 {unclaimedRewards.length} Reward
              {unclaimedRewards.length > 1 ? 's' : ''} Available
            </span>
            <span className="sm:hidden">🎁 {unclaimedRewards.length}</span>
          </motion.div>}
      </div>
      {/* Advertisement Modal - Enhanced Mobile Responsiveness */}
      <AnimatePresence>
        {showAdModal && <motion.div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }}>
            <motion.div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-[340px] sm:max-w-md shadow-2xl overflow-hidden" initial={{
          scale: 0.8,
          opacity: 0,
          y: 50
        }} animate={{
          scale: 1,
          opacity: 1,
          y: 0
        }} exit={{
          scale: 0.8,
          opacity: 0,
          y: 50
        }} transition={{
          type: 'spring',
          damping: 25,
          stiffness: 300
        }} onClick={e => e.stopPropagation()}>
              {/* Header */}
              <div className="bg-gradient-to-r from-ocean-teal to-blue-500 p-4 text-center relative">
                <button onClick={handleCloseAdModal} className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/20" aria-label="Close advertisement">
                  <XIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
                <h2 className="text-lg sm:text-xl font-bold text-white pt-2">
                  Sponsored Message
                </h2>
              </div>
              {/* Content */}
              <div className="p-5 sm:p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-ocean-teal/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-ocean-teal/30">
                    <GiftIcon className="h-8 w-8 sm:h-10 sm:w-10 text-ocean-teal dark:text-ocean-light" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide font-medium">
                    Advertisement from
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-ocean-teal dark:text-ocean-light mb-4 break-words px-2">
                    {currentAdSponsor}
                  </h3>
                  <div className="bg-gradient-to-br from-ocean-teal/10 to-blue-500/10 dark:from-ocean-teal/20 dark:to-blue-500/20 rounded-xl p-4 sm:p-5 border-2 border-ocean-teal/20 dark:border-ocean-light/20 mb-4">
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2">
                      You're about to receive:
                    </p>
                    <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white break-words">
                      {currentAdReward}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">
                    Thank you for supporting local fishing businesses
                  </p>
                </div>
                {/* Action button */}
                <button onClick={handleCloseAdModal} className="w-full px-6 py-3 bg-gradient-to-r from-ocean-teal to-blue-500 text-white rounded-xl font-bold text-base hover:from-ocean-blue hover:to-blue-600 transition-all shadow-lg active:scale-95">
                  Close & Continue
                </button>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </>;
};
export default Aquarium;