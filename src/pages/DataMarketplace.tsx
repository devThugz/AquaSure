import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { DatabaseIcon, BarChartIcon, TrendingUpIcon, DownloadIcon, CheckCircleIcon, ArrowRightIcon, SearchIcon, MapPinIcon, CalendarIcon, FishIcon, ShoppingCartIcon, ZapIcon, DollarSignIcon, ActivityIcon, LockIcon, XIcon, CreditCardIcon, WalletIcon } from 'lucide-react';
export function DataMarketplace() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  // Free Marine Species Data - Basic Information
  const freeMarineSpecies = [{
    id: 1,
    name: 'Bangus',
    scientificName: 'Chanos chanos',
    commonName: 'Milkfish',
    description: 'The national fish of the Philippines, known for its silvery appearance and mild flavor.',
    habitat: 'Coastal waters, brackish waters, fish ponds',
    location: 'Throughout Philippine waters, especially in Luzon and Visayas',
    marketInfo: 'High demand in local markets, ₱120-180/kg',
    season: 'Year-round availability',
    image: '/fish_hub/bangus.jpg',
    category: 'free',
    price: 'Free'
  }, {
    id: 2,
    name: 'Tilapia',
    scientificName: 'Oreochromis niloticus',
    commonName: 'Nile Tilapia',
    description: 'Freshwater fish widely cultivated in the Philippines, known for fast growth and adaptability.',
    habitat: 'Freshwater lakes, rivers, fish ponds',
    location: 'Laguna, Pampanga, Batangas, and major freshwater bodies',
    marketInfo: 'Steady demand, ₱80-120/kg',
    season: 'Year-round availability',
    image: '/fish_hub/tilapia.jpg',
    category: 'free',
    price: 'Free'
  }, {
    id: 3,
    name: 'Galunggong',
    scientificName: 'Decapterus macrosoma',
    commonName: 'Round Scad',
    description: 'One of the most popular and affordable fish in Philippine markets.',
    habitat: 'Pelagic waters, coastal areas',
    location: 'Manila Bay, Visayan Sea, Mindanao waters',
    marketInfo: 'Very high demand, ₱100-150/kg',
    season: 'Peak season: September to February',
    image: '/fish_hub/galunggong.jpg',
    category: 'free',
    price: 'Free'
  }, {
    id: 4,
    name: 'Lapu-Lapu',
    scientificName: 'Epinephelus spp.',
    commonName: 'Grouper',
    description: 'Premium fish species named after the Filipino hero, highly valued in restaurants.',
    habitat: 'Coral reefs, rocky bottoms',
    location: 'Palawan, Mindoro, Visayas coral reef areas',
    marketInfo: 'Premium pricing, ₱350-500/kg',
    season: 'Year-round, peak April-June',
    image: '/fish_hub/grouper.jpg',
    category: 'free',
    price: 'Free'
  }, {
    id: 5,
    name: 'Maya-Maya',
    scientificName: 'Lutjanus campechanus',
    commonName: 'Red Snapper',
    description: 'Prized for its firm white flesh and excellent flavor, popular in fine dining.',
    habitat: 'Reef areas, offshore waters',
    location: 'Zambales, Palawan, Mindanao offshore areas',
    marketInfo: 'High-value species, ₱300-450/kg',
    season: 'Best catches March-May',
    image: '/fish_hub/hito.jpg',
    category: 'free',
    price: 'Free'
  }, {
    id: 6,
    name: 'Tuna',
    scientificName: 'Thunnus albacares',
    commonName: 'Yellowfin Tuna',
    description: 'Major export species, essential to Philippine fishing industry.',
    habitat: 'Deep ocean waters, pelagic zones',
    location: 'General Santos, Davao Gulf, Pacific waters',
    marketInfo: 'Export quality, ₱200-400/kg (varies by grade)',
    season: 'Peak season: November-April',
    image: '/fish_hub/tuna.jpg',
    category: 'free',
    price: 'Free'
  }];
  // Premium Marine Species Data - Advanced Analytics
  const premiumMarineSpecies = [{
    id: 7,
    name: 'Bangus (Premium Analytics)',
    scientificName: 'Chanos chanos',
    description: 'Advanced data package including migration patterns, optimal harvest times, and market forecasting.',
    features: ['Historical catch data (10 years)', 'Seasonal migration patterns', 'Temperature preference analysis', 'Market price predictions', 'Optimal fishing zone mapping', 'Disease outbreak alerts'],
    price: '₱2,500',
    icon: TrendingUpIcon,
    category: 'premium'
  }, {
    id: 8,
    name: 'Tuna (Premium Analytics)',
    scientificName: 'Thunnus albacares',
    description: 'Comprehensive tuna fishing analytics with real-time tracking and market intelligence.',
    features: ['Real-time school tracking data', 'Ocean current correlation analysis', 'Export market pricing trends', 'Seasonal abundance forecasting', 'Fishing ground recommendations', 'Quality grading predictions'],
    price: '₱5,000',
    icon: BarChartIcon,
    category: 'premium'
  }, {
    id: 9,
    name: 'Lapu-Lapu (Premium Analytics)',
    scientificName: 'Epinephelus spp.',
    description: 'Premium reef fish analytics with habitat mapping and restaurant demand forecasting.',
    features: ['Reef habitat quality assessment', 'Restaurant demand analytics', 'Size distribution predictions', 'Breeding season tracking', 'Sustainable catch recommendations', 'Premium market connections'],
    price: '₱3,500',
    icon: ActivityIcon,
    category: 'premium'
  }];
  // Extended Marine Species Datasets
  const extendedMarineDatasets = [{
    id: 10,
    name: 'Complete Philippine Marine Species Archive',
    scientificName: 'Multi-species database',
    description: '10 years of comprehensive data covering 500+ Philippine marine species including catch records, habitat data, and market trends.',
    size: '500 GB',
    records: '500+ species, 10M+ data points',
    price: '₱15,000',
    icon: DatabaseIcon,
    features: ['Complete species identification guides', 'Historical catch records', 'Habitat and distribution maps', 'Market price history', 'Seasonal availability data', 'Conservation status information'],
    category: 'extended'
  }, {
    id: 11,
    name: 'Reef Fish Biodiversity Dataset',
    scientificName: 'Coral reef species collection',
    description: 'Detailed data on Philippine coral reef fish species with population assessments and ecological indicators.',
    size: '100 GB',
    records: '200+ reef species, 50,000+ observations',
    price: '₱12,000',
    icon: FishIcon,
    features: ['Species distribution maps', 'Population density estimates', 'Reef health correlations', 'Breeding behavior data', 'Feeding pattern analysis', 'Conservation priority rankings'],
    category: 'extended'
  }, {
    id: 12,
    name: 'Commercial Species Market Intelligence',
    scientificName: 'Top 50 commercial species',
    description: 'Comprehensive market data for the Philippines top commercial fish species with pricing trends and demand forecasting.',
    size: '50 GB',
    records: '50 species, 5 years of market data',
    price: '₱8,000',
    icon: DollarSignIcon,
    features: ['Daily market price tracking', 'Demand forecasting models', 'Export market analysis', 'Seasonal price variations', 'Supply chain insights', 'Competitor analysis'],
    category: 'extended'
  }];
  const allSpecies = [...freeMarineSpecies, ...premiumMarineSpecies, ...extendedMarineDatasets];
  const filteredSpecies = allSpecies.filter(species => {
    const matchesCategory = selectedCategory === 'all' || species.category === selectedCategory;
    const matchesSearch = species.name.toLowerCase().includes(searchQuery.toLowerCase()) || species.scientificName && species.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) || species.commonName && species.commonName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const handlePurchaseClick = item => {
    setSelectedItem(item);
    if (!isSignedIn) {
      setShowSignInModal(true);
    } else {
      setShowPaymentModal(true);
    }
  };
  const handleGoogleSignIn = () => {
    // Simulate Google sign-in
    setIsSignedIn(true);
    setShowSignInModal(false);
    setShowPaymentModal(true);
  };
  const handlePaymentMethodSelect = method => {
    // Handle payment method selection
    alert(`Processing payment via ${method} for ${selectedItem.name}`);
    setShowPaymentModal(false);
    setSelectedItem(null);
  };
  return <div className="min-h-screen bg-gradient-to-b from-ocean-navy via-ocean-navy/95 to-ocean-blue/90 text-soft-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-ocean-navy shadow-md py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img src="/AQUA.png" alt="AquaSure Logo" className="h-10 w-10 sm:h-12 sm:w-12 mr-2 sm:mr-3" />
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  AquaSure
                </h1>
                <p className="text-[10px] sm:text-xs text-aqua-300">
                  Marine Species Data Marketplace
                </p>
              </div>
            </Link>
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
              <Link to="/" className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base text-soft-white hover:text-aqua-500 transition-colors font-medium">
                Home
              </Link>
              <Link to="/login" className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base border border-aqua-500 text-aqua-500 rounded-full hover:bg-aqua-500/10 hover:shadow-glow transition-all font-medium whitespace-nowrap">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-accent text-white text-sm font-medium mb-6 shadow-glow-sm">
              PHILIPPINE MARINE SPECIES DATABASE
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Explore Philippine <br />
              <span className="gradient-text">Marine Species Data</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Access comprehensive data on Philippine marine species - from
              basic information to advanced analytics and market intelligence.
            </p>
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input type="text" placeholder="Search species by name..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-ocean-navy/40 backdrop-blur-md border border-aqua-500/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-aqua-500/50" />
              </div>
            </div>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button onClick={() => setSelectedCategory('all')} className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === 'all' ? 'bg-gradient-accent text-white shadow-glow' : 'bg-ocean-navy/40 border border-aqua-500/30 text-gray-300 hover:bg-aqua-500/20'}`}>
                All Species
              </button>
              <button onClick={() => setSelectedCategory('free')} className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === 'free' ? 'bg-gradient-accent text-white shadow-glow' : 'bg-ocean-navy/40 border border-aqua-500/30 text-gray-300 hover:bg-aqua-500/20'}`}>
                Free Data
              </button>
              <button onClick={() => setSelectedCategory('premium')} className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === 'premium' ? 'bg-gradient-accent text-white shadow-glow' : 'bg-ocean-navy/40 border border-aqua-500/30 text-gray-300 hover:bg-aqua-500/20'}`}>
                Premium Analytics
              </button>
              <button onClick={() => setSelectedCategory('extended')} className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === 'extended' ? 'bg-gradient-accent text-white shadow-glow' : 'bg-ocean-navy/40 border border-aqua-500/30 text-gray-300 hover:bg-aqua-500/20'}`}>
                Extended Datasets
              </button>
            </div>
          </motion.div>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} className="bg-ocean-navy/40 backdrop-blur-md border border-aqua-500/20 rounded-xl p-6 text-center">
              <FishIcon className="h-10 w-10 text-aqua-500 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-sm text-gray-400">Marine Species</div>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="bg-ocean-navy/40 backdrop-blur-md border border-aqua-500/20 rounded-xl p-6 text-center">
              <DatabaseIcon className="h-10 w-10 text-aqua-500 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">10M+</div>
              <div className="text-sm text-gray-400">Data Records</div>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="bg-ocean-navy/40 backdrop-blur-md border border-aqua-500/20 rounded-xl p-6 text-center">
              <MapPinIcon className="h-10 w-10 text-aqua-500 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">200+</div>
              <div className="text-sm text-gray-400">Fishing Zones</div>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }} className="bg-ocean-navy/40 backdrop-blur-md border border-aqua-500/20 rounded-xl p-6 text-center">
              <ZapIcon className="h-10 w-10 text-aqua-500 mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">Daily</div>
              <div className="text-sm text-gray-400">Updates</div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Species Grid */}
      <section className="py-20 relative bg-ocean-deep/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredSpecies.length === 0 ? <div className="text-center py-20">
              <FishIcon className="h-20 w-20 text-gray-500 mx-auto mb-4" />
              <p className="text-xl text-gray-400">
                No species found matching your search.
              </p>
            </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSpecies.map((species, index) => <motion.div key={species.id} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.05
          }} viewport={{
            once: true
          }} className="bg-ocean-navy/40 backdrop-blur-md border border-aqua-500/20 rounded-xl overflow-hidden hover:shadow-glow transition-all">
                  {/* Species Image (for free species) */}
                  {species.category === 'free' && species.image && <div className="relative h-48 overflow-hidden">
                      <img src={species.image} alt={species.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ocean-navy to-transparent"></div>
                      <div className="absolute top-3 right-3 px-3 py-1 bg-green-500/80 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                        FREE
                      </div>
                    </div>}
                  {/* Premium/Extended Badge */}
                  {(species.category === 'premium' || species.category === 'extended') && <div className="relative h-32 bg-gradient-to-br from-aqua-500/20 to-ocean-navy/80 flex items-center justify-center">
                      <species.icon className="h-16 w-16 text-aqua-500" />
                      <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-accent backdrop-blur-sm rounded-full text-white text-xs font-medium flex items-center">
                        <LockIcon className="h-3 w-3 mr-1" />
                        {species.category === 'premium' ? 'PREMIUM' : 'EXTENDED'}
                      </div>
                    </div>}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{species.name}</h3>
                    {species.scientificName && <p className="text-sm text-aqua-400 italic mb-3">
                        {species.scientificName}
                      </p>}
                    {species.commonName && <p className="text-sm text-gray-400 mb-3">
                        Common Name: {species.commonName}
                      </p>}
                    <p className="text-sm text-gray-300 mb-4">
                      {species.description}
                    </p>
                    {/* Free Species Details */}
                    {species.category === 'free' && <div className="space-y-3 mb-4">
                        <div className="flex items-start">
                          <MapPinIcon className="h-4 w-4 text-aqua-500 mr-2 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-xs text-gray-400">
                              Habitat & Location
                            </p>
                            <p className="text-sm">{species.habitat}</p>
                            <p className="text-sm text-gray-300">
                              {species.location}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <DollarSignIcon className="h-4 w-4 text-aqua-500 mr-2 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-xs text-gray-400">
                              Market Information
                            </p>
                            <p className="text-sm">{species.marketInfo}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CalendarIcon className="h-4 w-4 text-aqua-500 mr-2 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-xs text-gray-400">Season</p>
                            <p className="text-sm">{species.season}</p>
                          </div>
                        </div>
                      </div>}
                    {/* Premium/Extended Features */}
                    {(species.category === 'premium' || species.category === 'extended') && <>
                        {species.size && species.records && <div className="space-y-2 mb-4">
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-400">
                                Dataset Size:
                              </span>
                              <span className="font-medium">
                                {species.size}
                              </span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-400">Records:</span>
                              <span className="font-medium">
                                {species.records}
                              </span>
                            </div>
                          </div>}
                        <div className="text-2xl font-bold text-aqua-400 mb-4">
                          {species.price}
                        </div>
                        <ul className="space-y-2 mb-4">
                          {species.features.map((feature, idx) => <li key={idx} className="flex items-start text-sm">
                              <CheckCircleIcon className="h-4 w-4 text-aqua-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>)}
                        </ul>
                      </>}
                    {/* Purchase Button */}
                    <button onClick={() => handlePurchaseClick(species)} className={`w-full px-4 py-2 rounded-lg text-white font-medium transition-all flex items-center justify-center ${species.category === 'free' ? 'bg-gradient-accent hover:shadow-glow' : 'bg-white/10 backdrop-blur-md border border-aqua-500/30 hover:bg-aqua-500/20'}`}>
                      <ShoppingCartIcon className="h-4 w-4 mr-2" />
                      {species.category === 'free' ? 'Download Free Data' : 'Purchase Dataset'}
                    </button>
                  </div>
                </motion.div>)}
            </div>}
        </div>
      </section>
      {/* Sign In Modal */}
      <AnimatePresence>
        {showSignInModal && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setShowSignInModal(false)}>
            <motion.div initial={{
          scale: 0.9,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.9,
          opacity: 0
        }} className="bg-ocean-navy border border-aqua-500/30 rounded-2xl p-8 max-w-md w-full relative" onClick={e => e.stopPropagation()}>
              <button onClick={() => setShowSignInModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
                <XIcon className="h-6 w-6" />
              </button>
              <div className="text-center mb-6">
                <div className="h-16 w-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCartIcon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Sign In Required</h2>
                <p className="text-gray-300">
                  Please sign in with your Google account to purchase this
                  dataset.
                </p>
              </div>
              <div className="space-y-4">
                <button onClick={handleGoogleSignIn} className="w-full px-6 py-3 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition-all flex items-center justify-center">
                  <svg className="h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Sign in with Google
                </button>
                <button onClick={() => setShowSignInModal(false)} className="w-full px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white font-medium hover:bg-white/20 transition-all">
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
      {/* Payment Modal */}
      <AnimatePresence>
        {showPaymentModal && selectedItem && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setShowPaymentModal(false)}>
            <motion.div initial={{
          scale: 0.9,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} exit={{
          scale: 0.9,
          opacity: 0
        }} className="bg-ocean-navy border border-aqua-500/30 rounded-2xl p-8 max-w-md w-full relative" onClick={e => e.stopPropagation()}>
              <button onClick={() => setShowPaymentModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
                <XIcon className="h-6 w-6" />
              </button>
              <div className="text-center mb-6">
                <div className="h-16 w-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCardIcon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  Select Payment Method
                </h2>
                <p className="text-gray-300 mb-4">
                  Choose how you would like to pay for:
                </p>
                <div className="bg-ocean-navy/60 border border-aqua-500/20 rounded-lg p-4">
                  <p className="font-bold text-lg">{selectedItem.name}</p>
                  <p className="text-aqua-400 text-2xl font-bold mt-2">
                    {selectedItem.price}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <button onClick={() => handlePaymentMethodSelect('Credit Card')} className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-aqua-500/30 rounded-lg text-white font-medium hover:bg-aqua-500/20 transition-all flex items-center justify-between">
                  <div className="flex items-center">
                    <CreditCardIcon className="h-5 w-5 mr-3" />
                    <span>Credit / Debit Card</span>
                  </div>
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
                <button onClick={() => handlePaymentMethodSelect('GCash')} className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-aqua-500/30 rounded-lg text-white font-medium hover:bg-aqua-500/20 transition-all flex items-center justify-between">
                  <div className="flex items-center">
                    <WalletIcon className="h-5 w-5 mr-3" />
                    <span>GCash</span>
                  </div>
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
                <button onClick={() => handlePaymentMethodSelect('PayMaya')} className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-aqua-500/30 rounded-lg text-white font-medium hover:bg-aqua-500/20 transition-all flex items-center justify-between">
                  <div className="flex items-center">
                    <WalletIcon className="h-5 w-5 mr-3" />
                    <span>PayMaya</span>
                  </div>
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
                <button onClick={() => setShowPaymentModal(false)} className="w-full px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white font-medium hover:bg-white/20 transition-all mt-4">
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="bg-gradient-to-r from-ocean-teal to-blue-500 rounded-2xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent"></div>
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
                Ready to Explore Philippine Marine Species?
              </h2>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                Join thousands of fishers, researchers, and marine enthusiasts
                accessing our comprehensive species database.
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-2">
                <Link to="/login" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-ocean-teal rounded-full font-medium text-base sm:text-lg hover:shadow-glow transition-all flex items-center justify-center min-h-[44px]">
                    Get Started
                    <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-10 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <img src="/AQUA.png" alt="AquaSure Logo" className="h-10 w-10 mr-3" />
              <span className="text-xl font-bold text-white">
                AquaSure Marine Species Data
              </span>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} AquaSure. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>;
}