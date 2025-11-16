import React, { useState } from 'react';
import { DashboardCard } from '../components/DashboardCard';
import { useGame } from '../contexts/GameContext';
import { useTheme } from '../contexts/ThemeContext';
import { ShoppingCartIcon, FishIcon, ShieldCheckIcon, CoinsIcon, TrendingUpIcon, InfoIcon, PlusIcon, HeartIcon, TagIcon, CheckIcon, XIcon, GiftIcon, StarIcon } from 'lucide-react';
import Aquarium from '../components/Aquarium';
import { RewardBubble } from '../components/RewardBubble';
export function InsuranceHub() {
  const {
    petFish,
    aquaBites,
    walletBalance,
    feedFish,
    unclaimedRewards,
    claimReward: claimGameReward
  } = useGame();
  const {
    darkMode
  } = useTheme();
  const [selectedTab, setSelectedTab] = useState('insurance');
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [selectedFish, setSelectedFish] = useState(null);
  const [showAdModal, setShowAdModal] = useState(false);
  const [currentAdSponsor, setCurrentAdSponsor] = useState('');
  const [currentAdReward, setCurrentAdReward] = useState('');
  // Map reward types to sponsors
  const rewardSponsors = {
    fishing_rod: 'Ocean Gear Co.',
    net: 'NetMaster Pro',
    bait: 'BaitMaster',
    tackle_box: 'TackleBox Inc.',
    gear_set: 'Elite Fishing Supplies'
  };
  const handleBubbleClaim = (rewardId: string) => {
    // Find the reward being claimed
    const reward = unclaimedRewards.find(r => r.id === rewardId);
    if (reward) {
      // Claim the reward through game context
      claimGameReward(rewardId);
      // Show advertisement from sponsor
      const sponsor = rewardSponsors[reward.type] || 'Our Partner';
      setCurrentAdSponsor(sponsor);
      setCurrentAdReward(reward.name);
      setShowAdModal(true);
    }
  };
  // Calculate insurance coverage based on fish level
  const calculateCoverage = () => {
    return (petFish.level * 10000).toLocaleString();
  };
  // Mock fish marketplace data
  const marketplaceFish = [{
    id: 1,
    name: 'Blue Tang',
    level: 5,
    price: 2500,
    health: 95,
    rarity: 'Uncommon',
    description: 'A vibrant blue fish with excellent navigation abilities',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }, {
    id: 2,
    name: 'Royal Angelfish',
    level: 10,
    price: 5000,
    health: 100,
    rarity: 'Rare',
    description: 'Majestic fish with distinctive yellow and blue patterns',
    image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }, {
    id: 3,
    name: 'Clownfish',
    level: 3,
    price: 1500,
    health: 90,
    rarity: 'Common',
    description: 'Small but resilient fish with orange and white stripes',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }, {
    id: 4,
    name: 'Lionfish',
    level: 15,
    price: 7500,
    health: 98,
    rarity: 'Epic',
    description: 'Venomous fish with striking red and white stripes',
    image: 'https://images.unsplash.com/photo-1544943910-4268335342e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }];
  // AquaBites packages
  const aquaBitesPackages = [{
    id: 1,
    name: 'Starter Pack',
    amount: 100,
    price: 500,
    discount: null
  }, {
    id: 2,
    name: 'Premium Pack',
    amount: 250,
    price: 1000,
    discount: '10%'
  }, {
    id: 3,
    name: 'Pro Pack',
    amount: 500,
    price: 1800,
    discount: '15%'
  }, {
    id: 4,
    name: 'Ultimate Pack',
    amount: 1000,
    price: 3000,
    discount: '25%'
  }];
  const handleBuyFish = fish => {
    setSelectedFish(fish);
    setShowBuyModal(true);
  };
  const handleFeed = () => {
    feedFish();
  };
  const handleTabChange = tab => {
    setSelectedTab(tab);
  };
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Insurance Hub</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Manage your pet fish and insurance coverage
        </p>
      </div>
      <div className="mb-6">
        <div className="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
          <button className={`py-3 px-4 sm:px-6 font-medium text-xs sm:text-sm whitespace-nowrap ${selectedTab === 'insurance' ? 'text-ocean-teal dark:text-ocean-light border-b-2 border-ocean-teal dark:border-ocean-light' : 'text-gray-500 dark:text-gray-400 hover:text-ocean-teal dark:hover:text-ocean-light'}`} onClick={() => handleTabChange('insurance')}>
            <ShieldCheckIcon className="inline-block mr-1 sm:mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Insurance Coverage</span>
            <span className="sm:hidden">Insurance</span>
          </button>
          <button className={`py-3 px-4 sm:px-6 font-medium text-xs sm:text-sm whitespace-nowrap ${selectedTab === 'marketplace' ? 'text-ocean-teal dark:text-ocean-light border-b-2 border-ocean-teal dark:border-ocean-light' : 'text-gray-500 dark:text-gray-400 hover:text-ocean-teal dark:hover:text-ocean-light'}`} onClick={() => handleTabChange('marketplace')}>
            <ShoppingCartIcon className="inline-block mr-1 sm:mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Buy & Sell Pet Fish</span>
            <span className="sm:hidden">Marketplace</span>
          </button>
          <button className={`py-3 px-4 sm:px-6 font-medium text-xs sm:text-sm whitespace-nowrap ${selectedTab === 'aquabites' ? 'text-ocean-teal dark:text-ocean-light border-b-2 border-ocean-teal dark:border-ocean-light' : 'text-gray-500 dark:text-gray-400 hover:text-ocean-teal dark:hover:text-ocean-light'}`} onClick={() => handleTabChange('aquabites')}>
            <CoinsIcon className="inline-block mr-1 sm:mr-2 h-4 w-4" />
            <span className="hidden sm:inline">AquaBites Shop</span>
            <span className="sm:hidden">Shop</span>
          </button>
        </div>
      </div>
      {selectedTab === 'insurance' && <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <DashboardCard className="p-5 col-span-1">
              <div className="flex items-center mb-4">
                <div className="rounded-full p-3 bg-gradient-accent">
                  <ShieldCheckIcon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Insurance Coverage</h3>
                  <p className="text-2xl font-semibold">
                    ₱ {calculateCoverage()}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    Base Coverage:
                  </span>
                  <span>₱ 10,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    Pet Fish Bonus:
                  </span>
                  <span>
                    ₱ {(petFish.level * 10000 - 10000).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-medium">
                  <span>Total Coverage:</span>
                  <span>₱ {calculateCoverage()}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Level up your pet fish to increase coverage
                  </span>
                  <button className="px-3 py-1 bg-ocean-teal text-white rounded-md hover:bg-ocean-blue focus:outline-none transition-colors text-sm">
                    Details
                  </button>
                </div>
              </div>
            </DashboardCard>
            <DashboardCard className="p-5 col-span-1">
              <div className="flex items-center mb-4">
                <div className="rounded-full p-3 bg-gradient-to-r from-blue-500 to-blue-600">
                  <WalletIcon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">AquaWallet Balance</h3>
                  <p className="text-2xl font-semibold">₱ {walletBalance}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    Available for Claims:
                  </span>
                  <span>₱ {walletBalance}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    Pending Transactions:
                  </span>
                  <span>₱ 0</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Last updated: Today at 10:30 AM
                  </span>
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none transition-colors text-sm">
                    Add Funds
                  </button>
                </div>
              </div>
            </DashboardCard>
            <DashboardCard className="p-5 col-span-1">
              <div className="flex items-center mb-4">
                <div className="rounded-full p-3 bg-gradient-to-r from-indigo-500 to-indigo-600">
                  <TrendingUpIcon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Pet Fish Level</h3>
                  <p className="text-2xl font-semibold">
                    Level {petFish.level}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    Current XP:
                  </span>
                  <span>
                    {petFish.xp} / {petFish.level * 100}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    AquaBites:
                  </span>
                  <span>{aquaBites} remaining</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Feed your fish to level up
                  </span>
                  <button className="px-3 py-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none transition-colors text-sm" onClick={handleFeed} disabled={aquaBites <= 0}>
                    Feed ({aquaBites})
                  </button>
                </div>
              </div>
            </DashboardCard>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <DashboardCard className="p-5 lg:col-span-2 relative">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
                <h3 className="text-lg font-medium">
                  Pet Fish Insurance Status
                </h3>
              </div>
              {/* Aquarium with integrated reward bubbles */}
              <Aquarium />
              <div className="mt-4">
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
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-indigo-200 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300">
                          Level Progress
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-indigo-600 dark:text-indigo-300">
                          {petFish.xp}/{petFish.level * 100} XP
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200 dark:bg-indigo-900/30">
                      <div style={{
                    width: `${petFish.xp / (petFish.level * 100) * 100}%`
                  }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-indigo-500 to-indigo-600"></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Feed your fish daily to maintain or increase your insurance
                  coverage! Click the floating bubbles to claim rewards.
                </p>
              </div>
            </DashboardCard>
            <DashboardCard className="p-5">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
                <h3 className="text-lg font-medium">Insurance Benefits</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="rounded-full p-2 bg-green-100 dark:bg-green-900/30 mt-1">
                    <CheckIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium">
                      Boat Damage Coverage
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Up to ₱{Math.floor(petFish.level * 5000).toLocaleString()}{' '}
                      coverage for boat repairs
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full p-2 bg-green-100 dark:bg-green-900/30 mt-1">
                    <CheckIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium">Medical Expenses</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Up to ₱{Math.floor(petFish.level * 3000).toLocaleString()}{' '}
                      for fishing-related injuries
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full p-2 bg-green-100 dark:bg-green-900/30 mt-1">
                    <CheckIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium">
                      Equipment Protection
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Up to ₱{Math.floor(petFish.level * 2000).toLocaleString()}{' '}
                      for damaged fishing equipment
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="rounded-full p-2 bg-green-100 dark:bg-green-900/30 mt-1">
                    <CheckIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium">Weather Disruption</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      ₱{Math.floor(petFish.level * 500).toLocaleString()} daily
                      allowance for weather disruptions
                    </p>
                  </div>
                </div>
                {petFish.level >= 10 && <div className="flex items-start">
                    <div className="rounded-full p-2 bg-green-100 dark:bg-green-900/30 mt-1">
                      <CheckIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium">
                        Premium Catch Loss
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Up to ₱
                        {Math.floor(petFish.level * 1000).toLocaleString()} for
                        lost premium catches
                      </p>
                    </div>
                  </div>}
                {petFish.level < 10 && <div className="flex items-start opacity-50">
                    <div className="rounded-full p-2 bg-gray-100 dark:bg-gray-800 mt-1">
                      <LockIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium">
                        Premium Catch Loss
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Unlocks at Level 10
                      </p>
                    </div>
                  </div>}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="w-full px-4 py-2 bg-ocean-teal text-white rounded-md hover:bg-ocean-blue focus:outline-none transition-colors">
                  View Full Insurance Policy
                </button>
              </div>
            </DashboardCard>
          </div>
        </>}
      {selectedTab === 'marketplace' && <div className="grid grid-cols-1 gap-6">
          <DashboardCard className="p-5">
            <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
              <h3 className="text-lg font-medium">Pet Fish Marketplace</h3>
              <div className="flex items-center">
                <span className="mr-2 text-sm text-gray-600 dark:text-gray-400">
                  Your Balance: ₱{walletBalance}
                </span>
                <button className="px-3 py-1 bg-ocean-teal text-white rounded-md hover:bg-ocean-blue focus:outline-none transition-colors text-sm flex items-center">
                  <PlusIcon className="h-4 w-4 mr-1" />
                  Sell Your Fish
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketplaceFish.map(fish => <div key={fish.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-glow transition-all">
                  <div className="h-40 overflow-hidden relative">
                    <img src={fish.image} alt={fish.name} className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full px-2 py-1 text-xs font-medium border border-gray-200 dark:border-gray-700">
                      {fish.rarity}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">{fish.name}</h4>
                      <span className="text-ocean-teal dark:text-ocean-light font-medium">
                        ₱{fish.price}
                      </span>
                    </div>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center text-sm">
                        <TrendingUpIcon className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
                        <span className="text-gray-600 dark:text-gray-400">
                          Level {fish.level}
                        </span>
                      </div>
                      <div className="flex items-center text-sm">
                        <HeartIcon className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                          <div className="bg-green-500 h-1.5 rounded-full" style={{
                      width: `${fish.health}%`
                    }}></div>
                        </div>
                        <span className="ml-1 text-gray-600 dark:text-gray-400">
                          {fish.health}%
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                      {fish.description}
                    </p>
                    <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                      <button onClick={() => handleBuyFish(fish)} className="w-full px-3 py-1.5 bg-ocean-teal text-white rounded-md hover:bg-ocean-blue focus:outline-none transition-colors text-sm flex items-center justify-center" disabled={walletBalance < fish.price}>
                        <ShoppingCartIcon className="h-4 w-4 mr-1" />
                        {walletBalance >= fish.price ? 'Buy Now' : 'Insufficient Funds'}
                      </button>
                    </div>
                  </div>
                </div>)}
            </div>
          </DashboardCard>
        </div>}
      {selectedTab === 'aquabites' && <div className="grid grid-cols-1 gap-6">
          <DashboardCard className="p-5">
            <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
              <h3 className="text-lg font-medium">AquaBites Shop</h3>
              <div className="flex items-center">
                <span className="mr-2 text-sm text-gray-600 dark:text-gray-400">
                  Your Balance: ₱{walletBalance}
                </span>
                <span className="px-3 py-1 bg-ocean-teal/10 dark:bg-ocean-teal/20 text-ocean-teal dark:text-ocean-light rounded-md text-sm flex items-center">
                  <CoinsIcon className="h-4 w-4 mr-1" />
                  {aquaBites} AquaBites
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aquaBitesPackages.map(pkg => <div key={pkg.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-glow transition-all">
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">{pkg.name}</h4>
                      {pkg.discount && <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs px-2 py-0.5 rounded-full">
                          Save {pkg.discount}
                        </span>}
                    </div>
                    <div className="mt-3 text-center">
                      <div className="text-3xl font-bold text-ocean-teal dark:text-ocean-light flex items-center justify-center">
                        <CoinsIcon className="h-6 w-6 mr-2" />
                        {pkg.amount}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        AquaBites
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <div className="text-lg font-medium">₱{pkg.price}</div>
                      {pkg.discount && <div className="text-xs text-gray-500 dark:text-gray-400 line-through">
                          ₱
                          {Math.round(pkg.price / (1 - parseInt(pkg.discount) / 100))}
                        </div>}
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                      <button className="w-full px-3 py-1.5 bg-ocean-teal text-white rounded-md hover:bg-ocean-blue focus:outline-none transition-colors text-sm flex items-center justify-center" disabled={walletBalance < pkg.price}>
                        <ShoppingCartIcon className="h-4 w-4 mr-1" />
                        {walletBalance >= pkg.price ? 'Purchase' : 'Insufficient Funds'}
                      </button>
                    </div>
                  </div>
                </div>)}
            </div>
            <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <div className="flex items-start">
                <div className="rounded-full p-2 bg-blue-100 dark:bg-blue-800 mt-1">
                  <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-blue-800 dark:text-blue-300">
                    About AquaBites
                  </h4>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                    AquaBites are special fish food that help your pet fish grow
                    and level up. Each time you feed your fish, it gains XP and
                    improves your insurance coverage. Higher level fish provide
                    better insurance benefits!
                  </p>
                </div>
              </div>
            </div>
          </DashboardCard>
        </div>}
      {/* Fish Purchase Modal */}
      {showBuyModal && selectedFish && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full mx-4 p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium">
                Purchase {selectedFish.name}
              </h3>
              <button onClick={() => setShowBuyModal(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden mr-4">
                <img src={selectedFish.image} alt={selectedFish.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-medium">{selectedFish.name}</h4>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Level {selectedFish.level}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Health: {selectedFish.health}%
                </div>
                <div className="text-sm font-medium text-ocean-teal dark:text-ocean-light">
                  ₱{selectedFish.price}
                </div>
              </div>
            </div>
            <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-sm text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              <div className="flex items-start">
                <InfoIcon className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <p>
                  Purchasing this fish will replace your current pet fish. Your
                  new fish will determine your insurance coverage level.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button onClick={() => setShowBuyModal(false)} className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none transition-colors">
                Cancel
              </button>
              <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-ocean-teal hover:bg-ocean-blue focus:outline-none transition-colors" disabled={walletBalance < selectedFish.price}>
                Confirm Purchase
              </button>
            </div>
          </div>
        </div>}
      {/* Advertisement Modal */}
      {showAdModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 w-full max-w-md text-center shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Sponsored by {currentAdSponsor}
            </h2>
            <div className="mb-6 p-8 bg-gradient-to-br from-ocean-teal/10 to-blue-500/10 dark:from-ocean-teal/20 dark:to-blue-500/20 rounded-lg border-2 border-ocean-teal/30 dark:border-ocean-light/30">
              <div className="mb-4">
                <div className="w-16 h-16 bg-ocean-teal/20 dark:bg-ocean-light/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <GiftIcon className="h-8 w-8 text-ocean-teal dark:text-ocean-light" />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">
                Advertisement
              </p>
              <p className="text-xl font-bold text-ocean-teal dark:text-ocean-light mb-2">
                {currentAdSponsor}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                You claimed:{' '}
                <span className="font-semibold">{currentAdReward}</span>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Thank you for claiming your reward!
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
                Supporting local fishing businesses
              </p>
            </div>
            <button onClick={() => setShowAdModal(false)} className="px-6 py-2 bg-ocean-teal text-white rounded-md hover:bg-ocean-blue transition-colors font-medium">
              Close
            </button>
          </div>
        </div>}
    </div>;
}
// Import necessary icons
const WalletIcon = ({
  className
}) => {
  return <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>;
};
const LockIcon = ({
  className
}) => {
  return <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>;
};