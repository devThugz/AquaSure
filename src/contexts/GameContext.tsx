import React, { useEffect, useState, createContext, useContext } from 'react';
interface PetFish {
  name: string;
  level: number;
  stage: string;
  health: number;
  isResting: boolean;
  xp: number;
  lastFed: string;
}
interface Reward {
  id: string;
  name: string;
  description: string;
  level: number;
  claimed: boolean;
  icon: string;
  type: 'fishing_rod' | 'net' | 'bait' | 'tackle_box' | 'gear_set';
}
interface FishSubmission {
  id: string;
  species: string;
  weight: number;
  location: string;
  imageUrl: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
  aquaBitesReward: number;
  claimed: boolean;
  rejectionReason?: string;
}
interface GameContextType {
  petFish: PetFish;
  aquaBites: number;
  walletBalance: number;
  fishAnimation: string | null;
  autoRenewInsurance: boolean;
  rewards: Reward[];
  unclaimedRewards: Reward[];
  fishSubmissions: FishSubmission[];
  feedFish: () => void;
  updateFishHealth: (amount: number) => void;
  levelUpFish: () => void;
  renameFish: (newName: string) => void;
  toggleAutoRenew: () => void;
  toggleRestMode: () => void;
  setFishAnimation: (animation: string | null) => void;
  claimReward: (rewardId: string) => void;
  submitFish: (fishData: Omit<FishSubmission, 'id' | 'status' | 'submittedAt' | 'claimed'>) => void;
  claimAquaBites: (submissionId: string) => void;
}
const GameContext = createContext<GameContextType | undefined>(undefined);
// Reward definitions by level
const LEVEL_REWARDS: Record<number, Omit<Reward, 'id' | 'claimed'>> = {
  3: {
    name: 'Basic Fishing Rod',
    description: 'A sturdy fishing rod for everyday catches',
    level: 3,
    icon: '🎣',
    type: 'fishing_rod'
  },
  5: {
    name: 'Fishing Net',
    description: 'Professional-grade net for larger catches',
    level: 5,
    icon: '🕸️',
    type: 'net'
  },
  7: {
    name: 'Premium Bait Set',
    description: 'High-quality bait to attract premium fish',
    level: 7,
    icon: '🪱',
    type: 'bait'
  },
  10: {
    name: 'Tackle Box',
    description: 'Complete tackle box with essential fishing tools',
    level: 10,
    icon: '🧰',
    type: 'tackle_box'
  },
  15: {
    name: 'Professional Fishing Gear Set',
    description: 'Elite fishing equipment for serious fishers',
    level: 15,
    icon: '⚓',
    type: 'gear_set'
  }
};
export const GameProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  // Initial state
  const [petFish, setPetFish] = useState<PetFish>({
    name: 'Goldie',
    level: 2,
    stage: 'Baby',
    health: 75,
    isResting: false,
    xp: 50,
    lastFed: new Date().toISOString()
  });
  const [aquaBites, setAquaBites] = useState(10);
  const [walletBalance, setWalletBalance] = useState(5000);
  const [fishAnimation, setFishAnimation] = useState<string | null>(null);
  const [autoRenewInsurance, setAutoRenewInsurance] = useState(true);
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [fishSubmissions, setFishSubmissions] = useState<FishSubmission[]>([
  // Mock approved submission for demo
  {
    id: 'sub_1',
    species: 'Yellowfin Tuna',
    weight: 15.5,
    location: 'Batangas Bay',
    imageUrl: 'https://images.unsplash.com/photo-1580845456874-3f1f2a8d3c45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    status: 'approved',
    submittedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    aquaBitesReward: 50,
    claimed: false
  }]);
  // Get unclaimed rewards
  const unclaimedRewards = rewards.filter(r => !r.claimed);
  // Feed the fish
  const feedFish = () => {
    if (aquaBites <= 0) return;
    // Play feeding animation
    setFishAnimation('feeding');
    // After animation completes
    setTimeout(() => {
      setFishAnimation(null);
      // Update fish stats
      setPetFish(prev => {
        const newXp = prev.xp + 10;
        const newHealth = Math.min(100, prev.health + 5);
        const xpNeeded = prev.level * 100;
        // Check for level up
        if (newXp >= xpNeeded) {
          const newLevel = prev.level + 1;
          let newStage = prev.stage;
          if (newLevel >= 10) {
            newStage = 'Legendary';
          } else if (newLevel >= 7) {
            newStage = 'Adult';
          } else if (newLevel >= 4) {
            newStage = 'Juvenile';
          }
          // Unlock reward for this level
          if (LEVEL_REWARDS[newLevel]) {
            const newReward: Reward = {
              ...LEVEL_REWARDS[newLevel],
              id: `reward_${newLevel}_${Date.now()}`,
              claimed: false
            };
            setRewards(prevRewards => [...prevRewards, newReward]);
          }
          return {
            ...prev,
            level: newLevel,
            stage: newStage,
            xp: newXp - xpNeeded,
            health: Math.max(50, newHealth),
            lastFed: new Date().toISOString()
          };
        }
        return {
          ...prev,
          xp: newXp,
          health: newHealth,
          lastFed: new Date().toISOString()
        };
      });
      // Decrease aquabites
      setAquaBites(prev => Math.max(0, prev - 1));
    }, 1500);
  };
  // Update fish health
  const updateFishHealth = (amount: number) => {
    setPetFish(prev => ({
      ...prev,
      health: Math.min(100, Math.max(0, prev.health + amount))
    }));
  };
  // Level up fish (manual trigger)
  const levelUpFish = () => {
    setPetFish(prev => {
      const newLevel = prev.level + 1;
      let newStage = prev.stage;
      if (newLevel >= 10) {
        newStage = 'Legendary';
      } else if (newLevel >= 7) {
        newStage = 'Adult';
      } else if (newLevel >= 4) {
        newStage = 'Juvenile';
      }
      // Unlock reward for this level
      if (LEVEL_REWARDS[newLevel]) {
        const newReward: Reward = {
          ...LEVEL_REWARDS[newLevel],
          id: `reward_${newLevel}_${Date.now()}`,
          claimed: false
        };
        setRewards(prevRewards => [...prevRewards, newReward]);
      }
      return {
        ...prev,
        level: newLevel,
        stage: newStage,
        health: 50
      };
    });
  };
  // Rename fish
  const renameFish = (newName: string) => {
    setPetFish(prev => ({
      ...prev,
      name: newName
    }));
  };
  // Toggle auto-renew insurance
  const toggleAutoRenew = () => {
    setAutoRenewInsurance(prev => !prev);
  };
  // Toggle rest mode
  const toggleRestMode = () => {
    setPetFish(prev => ({
      ...prev,
      isResting: !prev.isResting
    }));
  };
  // Claim reward
  const claimReward = (rewardId: string) => {
    setRewards(prevRewards => prevRewards.map(reward => reward.id === rewardId ? {
      ...reward,
      claimed: true
    } : reward));
  };
  // Submit fish for verification
  const submitFish = (fishData: Omit<FishSubmission, 'id' | 'status' | 'submittedAt' | 'claimed'>) => {
    const newSubmission: FishSubmission = {
      ...fishData,
      id: `sub_${Date.now()}`,
      status: 'pending',
      submittedAt: new Date().toISOString(),
      claimed: false
    };
    setFishSubmissions(prev => [...prev, newSubmission]);
  };
  // Claim AquaBites from approved fish submission
  const claimAquaBites = (submissionId: string) => {
    const submission = fishSubmissions.find(s => s.id === submissionId);
    if (!submission || submission.claimed || submission.status !== 'approved') {
      return;
    }
    // Add AquaBites to balance
    setAquaBites(prev => prev + submission.aquaBitesReward);
    // Mark submission as claimed
    setFishSubmissions(prevSubmissions => prevSubmissions.map(sub => sub.id === submissionId ? {
      ...sub,
      claimed: true
    } : sub));
  };
  // Context value
  const value = {
    petFish,
    aquaBites,
    walletBalance,
    fishAnimation,
    autoRenewInsurance,
    rewards,
    unclaimedRewards,
    fishSubmissions,
    feedFish,
    updateFishHealth,
    levelUpFish,
    renameFish,
    toggleAutoRenew,
    toggleRestMode,
    setFishAnimation,
    claimReward,
    submitFish,
    claimAquaBites
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
// Hook for using the game context
export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
// Export types
export type { PetFish, Reward, FishSubmission };