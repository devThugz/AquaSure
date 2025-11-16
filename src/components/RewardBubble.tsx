import React from 'react';
import { motion } from 'framer-motion';
import { GiftIcon } from 'lucide-react';
import { Reward } from '../contexts/GameContext';
interface RewardBubbleProps {
  reward: Reward & {
    sponsor?: string;
    rewardName?: string;
  };
  onClaim: (rewardId: string) => void;
  index: number;
}
export function RewardBubble({
  reward,
  onClaim,
  index
}: RewardBubbleProps) {
  // Different starting positions and final resting positions for falling animation
  const positions = [{
    left: '20%',
    startY: -100,
    endY: 60,
    animationDuration: 2.5
  }, {
    left: '35%',
    startY: -120,
    endY: 45,
    animationDuration: 2.8
  }, {
    left: '50%',
    startY: -110,
    endY: 70,
    animationDuration: 2.3
  }, {
    left: '65%',
    startY: -130,
    endY: 50,
    animationDuration: 2.6
  }, {
    left: '80%',
    startY: -115,
    endY: 65,
    animationDuration: 2.4
  }];
  const position = positions[index % positions.length];
  return <motion.div className="absolute cursor-pointer z-10 group" style={{
    left: position.left,
    top: '0%'
  }} initial={{
    y: position.startY,
    opacity: 0
  }} animate={{
    y: position.endY,
    opacity: 1
  }} transition={{
    duration: position.animationDuration,
    ease: 'easeOut',
    opacity: {
      duration: 0.5
    }
  }} whileHover={{
    scale: 1.15,
    y: position.endY - 5
  }} whileTap={{
    scale: 0.9
  }} onClick={() => onClaim(reward.id)}>
      <div className="relative">
        {/* Bubble with responsive sizing */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-lg flex flex-col items-center justify-center border-2 border-yellow-400 relative">
          {/* Icon */}
          <div className="text-lg sm:text-xl md:text-2xl mb-0.5">
            {reward.icon}
          </div>
          {/* Claim text - always visible */}
          <div className="text-xs sm:text-sm font-bold text-gray-800 bg-white/90 px-2 py-0.5 rounded-full shadow-sm">
            Claim
          </div>
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-yellow-400 rounded-full blur-md opacity-40"></div>
        {/* Enhanced tooltip on hover with reward name */}
        <div className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs sm:text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-lg">
          <div className="font-semibold">{reward.name}</div>
          <div className="text-xs text-gray-300">
            Level {reward.level} reward
          </div>
        </div>
      </div>
    </motion.div>;
}