import React, { useState } from 'react';
import { CompassIcon, PlusIcon, SearchIcon, FilterIcon, BrainIcon, MapPinIcon, CloudSunIcon, DropletIcon, BarChartIcon, ThumbsUpIcon, AlertTriangleIcon, ExternalLinkIcon, XIcon, CalendarIcon, DollarSignIcon, TagIcon, InfoIcon, ClockIcon, CheckCircleIcon, XCircleIcon } from 'lucide-react';
import FishCard from '../components/FishCard';
import { DashboardCard } from '../components/DashboardCard';
import { useTheme } from '../contexts/ThemeContext';
import { useGame } from '../contexts/GameContext';
import NemoChat from '../components/NemoChat';
import { FishSubmissionModal } from '../components/FishSubmissionModal';
import SatelliteMap from '../components/Map/SatelliteMap';
export function FishHub() {
  const [isAddFishModalOpen, setIsAddFishModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showNemoAI, setShowNemoAI] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('Palawan');
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedFish, setSelectedFish] = useState(null);
  const [showSubmissions, setShowSubmissions] = useState(false);
  const {
    darkMode
  } = useTheme();
  const {
    fishSubmissions
  } = useGame();
  // Mock fish species data
  const fishSpecies = [{
    id: 1,
    name: 'Bangus (Milkfish)',
    scientificName: 'Chanos chanos',
    category: 'Freshwater',
    habitat: 'Rivers, Lakes, Brackish water',
    description: 'The national fish of the Philippines, commonly farmed in fishponds and fish pens. Known for its silver color and delicate flavor, it is one of the most important aquaculture species in Southeast Asia.',
    image: '/fish_hub/bangus.jpg',
    marketPrice: 'PHP 150-180 per kg',
    availability: 'Year-round',
    catchRegion: 'Laguna de Bay, Pangasinan, Iloilo',
    regulations: 'No size restrictions for farmed bangus',
    averageSize: '30-45 cm',
    bestSeason: 'Year-round, best quality during dry season'
  }, {
    id: 2,
    name: 'Tilapia',
    scientificName: 'Oreochromis niloticus',
    category: 'Freshwater',
    habitat: 'Rivers, Lakes, Ponds',
    description: 'A popular freshwater fish that is easy to farm and widely consumed. Tilapia is known for its mild taste, firm texture, and adaptability to various cooking methods.',
    image: '/fish_hub/tilapia.jpg',
    marketPrice: 'PHP 100-130 per kg',
    availability: 'Year-round',
    catchRegion: 'Laguna de Bay, Taal Lake, Pampanga',
    regulations: 'Minimum harvest size of 150g for commercial farming',
    averageSize: '20-30 cm',
    bestSeason: 'Year-round'
  }, {
    id: 3,
    name: 'Tuna (Yellowfin)',
    scientificName: 'Thunnus albacares',
    category: 'Saltwater',
    habitat: 'Open ocean, Deep sea',
    description: 'A large, commercially important fish found in open waters. Known for its high-quality meat, yellowfin tuna is prized in both local and export markets for its rich flavor and firm texture.',
    image: '/fish_hub/tuna.jpg',
    marketPrice: 'PHP 200-350 per kg',
    availability: 'Peak season March-October',
    catchRegion: 'General Santos, Davao Gulf, Sulu Sea',
    regulations: 'Minimum catch size of 3.2kg, closed season from November to February in some areas',
    averageSize: '1-1.8m, 30-70kg',
    bestSeason: 'March to June'
  }, {
    id: 4,
    name: 'Lapu-Lapu (Grouper)',
    scientificName: 'Epinephelus lanceolatus',
    category: 'Saltwater',
    habitat: 'Coral reefs, Rocky areas',
    description: 'A high-value fish with firm white flesh, commonly found around coral reefs. Prized in Asian cuisine, especially for steaming and in soups due to its tender texture and sweet flavor.',
    image: '/fish_hub/grouper.jpg',
    marketPrice: 'PHP 400-600 per kg',
    availability: 'Year-round, best quality December-May',
    catchRegion: 'Palawan, Visayas, Zamboanga',
    regulations: 'Protected in marine sanctuaries, minimum catch size of 500g',
    averageSize: '40-60 cm for market size',
    bestSeason: 'December to May'
  }, {
    id: 5,
    name: 'Galunggong (Mackerel Scad)',
    scientificName: 'Decapterus macarellus',
    category: 'Saltwater',
    habitat: 'Coastal waters',
    description: "Often called the 'poor man's fish', it's an affordable and widely consumed fish in the Philippines. A staple in Filipino cuisine, known for its versatility and relatively low cost.",
    image: '/fish_hub/galunggong.jpg',
    marketPrice: 'PHP 80-120 per kg',
    availability: 'Year-round, scarce during typhoon season',
    catchRegion: 'Manila Bay, Zambales, Mindoro Strait',
    regulations: 'No specific size restrictions, but closed season may apply in certain areas',
    averageSize: '15-25 cm',
    bestSeason: 'October to February'
  }, {
    id: 6,
    name: 'Hito (Catfish)',
    scientificName: 'Clarias batrachus',
    category: 'Freshwater',
    habitat: 'Rivers, Swamps, Rice fields',
    description: 'A hardy fish that can survive in low-oxygen environments, commonly farmed in the Philippines. Popular in Filipino cuisine, especially when grilled or in stews like "adobo".',
    image: '/fish_hub/hito.jpg',
    marketPrice: 'PHP 120-160 per kg',
    availability: 'Year-round',
    catchRegion: 'Central Luzon, Pampanga, Bulacan',
    regulations: 'No specific restrictions for farmed catfish',
    averageSize: '25-40 cm',
    bestSeason: 'Year-round, best growth during rainy season'
  }];
  // Mock Nemo AI recommendations
  const nemoRecommendations = [{
    id: 1,
    name: 'Yellowfin Tuna',
    confidence: 95,
    season: 'Currently in season',
    trend: 'High catch rates reported',
    location: 'Offshore, 15-20km from coast',
    coordinates: {
      lat: 13.85,
      lng: 121.15
    }
  }, {
    id: 2,
    name: 'Mackerel Scad',
    confidence: 88,
    season: 'Peak season',
    trend: 'Abundant catches this week',
    location: 'Coastal waters, 5-8km from shore',
    coordinates: {
      lat: 13.78,
      lng: 121.05
    }
  }, {
    id: 3,
    name: 'Blue Marlin',
    confidence: 72,
    season: 'Early season',
    trend: 'Increasing sightings',
    location: 'Deep waters, 25km+ offshore',
    coordinates: {
      lat: 13.92,
      lng: 121.25
    }
  }];
  // Filter fish based on search term and category
  const filteredFish = fishSpecies.filter(fish => {
    const matchesSearch = fish.name.toLowerCase().includes(searchTerm.toLowerCase()) || fish.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || fish.category === filterCategory;
    return matchesSearch && matchesCategory;
  });
  // Handle view details for fish card click
  const handleViewDetails = fish => {
    setSelectedFish({
      ...fish
    });
    setIsDetailModalOpen(true);
  };
  // Get status info for submissions
  const getSubmissionStatusInfo = (status: string) => {
    switch (status) {
      case 'approved':
        return {
          color: 'text-green-600 dark:text-green-400',
          bgColor: 'bg-green-100 dark:bg-green-900/30',
          icon: <CheckCircleIcon className="h-4 w-4" />
        };
      case 'pending':
        return {
          color: 'text-yellow-600 dark:text-yellow-400',
          bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
          icon: <ClockIcon className="h-4 w-4" />
        };
      case 'rejected':
        return {
          color: 'text-red-600 dark:text-red-400',
          bgColor: 'bg-red-100 dark:bg-red-900/30',
          icon: <XCircleIcon className="h-4 w-4" />
        };
      default:
        return {
          color: 'text-gray-600 dark:text-gray-400',
          bgColor: 'bg-gray-100 dark:bg-gray-800',
          icon: <InfoIcon className="h-4 w-4" />
        };
    }
  };
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex justify-between items-start gap-2">
        <div className="flex-1 min-w-0">
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'} truncate`}>
            Fish Hub
          </h2>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1 text-sm truncate`}>
            Manage and explore fish species information
          </p>
        </div>
        <div className="flex gap-1.5 sm:gap-2 flex-shrink-0">
          <button onClick={() => setShowSubmissions(!showSubmissions)} className={`inline-flex items-center justify-center px-2 sm:px-3 py-1.5 sm:py-2 border rounded-md transition-colors text-xs ${showSubmissions ? darkMode ? 'bg-ocean-teal/20 text-ocean-light border-ocean-teal/30' : 'bg-ocean-teal/10 text-ocean-teal border-ocean-teal/30' : darkMode ? 'border-gray-700 text-gray-300 bg-gray-800 hover:bg-gray-700' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} focus:outline-none whitespace-nowrap`}>
            <ClockIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 sm:mr-1.5 flex-shrink-0" />
            <span className="hidden sm:inline ml-1">
              Submissions ({fishSubmissions.length})
            </span>
            <span className="sm:hidden ml-1">({fishSubmissions.length})</span>
          </button>
          <button onClick={() => setShowNemoAI(!showNemoAI)} className={`inline-flex items-center justify-center px-2 sm:px-3 py-1.5 sm:py-2 border rounded-md transition-colors text-xs ${showNemoAI ? darkMode ? 'bg-ocean-teal/20 text-ocean-light border-ocean-teal/30' : 'bg-ocean-teal/10 text-ocean-teal border-ocean-teal/30' : darkMode ? 'border-gray-700 text-gray-300 bg-gray-800 hover:bg-gray-700' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} focus:outline-none whitespace-nowrap`}>
            <BrainIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
            <span className="hidden md:inline ml-1.5">Nemo AI</span>
          </button>
          <button onClick={() => setIsAddFishModalOpen(true)} className={`inline-flex items-center justify-center px-2 sm:px-3 py-1.5 sm:py-2 border border-transparent text-xs font-medium rounded-md shadow-sm text-white ${darkMode ? 'bg-ocean-teal hover:bg-ocean-blue' : 'bg-ocean-teal hover:bg-ocean-blue'} focus:outline-none transition-colors whitespace-nowrap`}>
            <PlusIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
            <span className="hidden md:inline ml-1.5">Submit</span>
          </button>
        </div>
      </div>

      {/* My Submissions Panel */}
      {showSubmissions && <DashboardCard className="p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">My Fish Submissions</h3>
            <button onClick={() => setShowSubmissions(false)} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          {fishSubmissions.length > 0 ? <div className="space-y-4">
              {fishSubmissions.map(submission => {
          const statusInfo = getSubmissionStatusInfo(submission.status);
          return <div key={submission.id} className={`p-4 rounded-lg border ${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="flex items-start space-x-4">
                      <img src={submission.imageUrl} alt={submission.species} className="w-20 h-20 rounded-lg object-cover" />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-lg">
                              {submission.species}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {submission.weight} kg • {submission.location}
                            </p>
                          </div>
                          <div className={`flex items-center ${statusInfo.bgColor} ${statusInfo.color} px-3 py-1 rounded-full text-xs font-medium`}>
                            {statusInfo.icon}
                            <span className="ml-1 capitalize">
                              {submission.status}
                            </span>
                          </div>
                        </div>
                        <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                          Submitted{' '}
                          {new Date(submission.submittedAt).toLocaleDateString()}
                        </div>
                        {submission.status === 'approved' && !submission.claimed && <div className="mt-2 text-sm text-green-600 dark:text-green-400 font-medium">
                              ✓ Ready to claim {submission.aquaBitesReward}{' '}
                              AquaBites in Verify Fish section
                            </div>}
                        {submission.claimed && <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            ✓ Claimed {submission.aquaBitesReward} AquaBites
                          </div>}
                      </div>
                    </div>
                  </div>;
        })}
            </div> : <div className="text-center py-8">
              <CompassIcon className={`mx-auto h-12 w-12 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
              <h3 className={`mt-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                No submissions yet
              </h3>
              <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Submit your catches to earn AquaBites rewards!
              </p>
            </div>}
        </DashboardCard>}

      {/* Nemo AI Panel */}
      {showNemoAI && <DashboardCard className="p-6 mb-6 overflow-hidden gradient-border" glowEffect={true}>
          <div className="absolute inset-0 bg-gradient-accent opacity-10 pointer-events-none"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="flex items-center">
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-2 rounded-full shadow-lg`}>
                <BrainIcon className="h-6 w-6 text-ocean-teal" />
              </div>
              <div className="ml-3">
                <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  Nemo AI Fishing Assistant
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Intelligent recommendations based on current conditions
                </p>
              </div>
            </div>
            <button onClick={() => setShowNemoAI(false)} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className={`${darkMode ? 'bg-white/5 border-white/10' : 'bg-white/10 border-white/20'} backdrop-blur-sm rounded-lg p-4 border`}>
              <div className="flex items-center mb-2">
                <MapPinIcon className="h-5 w-5 mr-2 text-ocean-teal dark:text-ocean-light" />
                <h4 className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  Location
                </h4>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {currentLocation}
              </p>
            </div>
            <div className={`${darkMode ? 'bg-white/5 border-white/10' : 'bg-white/10 border-white/20'} backdrop-blur-sm rounded-lg p-4 border`}>
              <div className="flex items-center mb-2">
                <CloudSunIcon className="h-5 w-5 mr-2 text-ocean-teal dark:text-ocean-light" />
                <h4 className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  Weather
                </h4>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Partly Cloudy, 29°C
              </p>
            </div>
            <div className={`${darkMode ? 'bg-white/5 border-white/10' : 'bg-white/10 border-white/20'} backdrop-blur-sm rounded-lg p-4 border`}>
              <div className="flex items-center mb-2">
                <DropletIcon className="h-5 w-5 mr-2 text-ocean-teal dark:text-ocean-light" />
                <h4 className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  Water Temp
                </h4>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                26°C, Calm seas
              </p>
            </div>
            <div className={`${darkMode ? 'bg-white/5 border-white/10' : 'bg-white/10 border-white/20'} backdrop-blur-sm rounded-lg p-4 border`}>
              <div className="flex items-center mb-2">
                <BarChartIcon className="h-5 w-5 mr-2 text-ocean-teal dark:text-ocean-light" />
                <h4 className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  Season
                </h4>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Peak fishing season
              </p>
            </div>
          </div>
          <h4 className={`text-lg font-medium mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            Today's Top Recommendations
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {nemoRecommendations.map(fish => <div key={fish.id} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} rounded-lg shadow-lg overflow-hidden border`}>
                <div className="h-2 bg-gradient-accent"></div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h5 className={`font-medium text-lg ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      {fish.name}
                    </h5>
                    <div className={`${darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800'} text-xs font-medium px-2 py-1 rounded-full`}>
                      {fish.confidence}% match
                    </div>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center text-sm">
                      <ThumbsUpIcon className="h-4 w-4 text-ocean-teal dark:text-ocean-light mr-2" />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {fish.season}
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <BarChartIcon className="h-4 w-4 text-ocean-teal dark:text-ocean-light mr-2" />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {fish.trend}
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPinIcon className="h-4 w-4 text-ocean-teal dark:text-ocean-light mr-2" />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {fish.location}
                      </span>
                    </div>
                  </div>
                  <div className={`mt-4 pt-3 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} flex justify-between`}>
                    <button className={`text-sm ${darkMode ? 'text-ocean-light hover:text-ocean-teal' : 'text-ocean-blue hover:text-ocean-teal'} transition-colors`}>
                      View Details
                    </button>
                    <button className={`text-sm ${darkMode ? 'text-ocean-teal hover:text-blue-400' : 'text-ocean-teal hover:text-ocean-blue'} transition-colors`}>
                      Set as Target
                    </button>
                  </div>
                </div>
              </div>)}
          </div>
          {/* Fishing Location Map */}
          <div className="mt-6">
            <h4 className={`text-lg font-medium mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Recommended Fishing Locations
            </h4>
            <div className={`rounded-lg overflow-hidden border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="h-96">
                <SatelliteMap showEmergencyButton={false} customMarkers={nemoRecommendations.map(fish => ({
              position: [fish.coordinates.lat, fish.coordinates.lng],
              label: fish.name,
              description: `${fish.confidence}% confidence - ${fish.trend}`
            }))} />
              </div>
            </div>
            <div className="mt-3 flex items-start space-x-2">
              <MapPinIcon className="h-5 w-5 text-ocean-teal dark:text-ocean-light flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The map shows the most abundant locations for each recommended
                species. Click on a marker to view more details about that
                fishing spot.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button className={`px-4 py-2 ${darkMode ? 'bg-gray-800 text-ocean-light hover:bg-gray-700' : 'bg-white text-ocean-teal hover:bg-gray-50'} rounded-md focus:outline-none transition-colors border ${darkMode ? 'border-ocean-teal/20' : 'border-ocean-teal/30'}`}>
              View All Recommendations
            </button>
          </div>
        </DashboardCard>}
      <DashboardCard className="p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className={`h-5 w-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
            </div>
            <input type="text" className={`block w-full pl-10 pr-3 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-100 placeholder-gray-400 focus:ring-ocean-light focus:border-ocean-light' : 'border-gray-300 bg-white placeholder-gray-500 focus:ring-ocean-teal focus:border-ocean-teal'} rounded-md leading-5 focus:outline-none transition-colors`} placeholder="Search fish species..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          <div className="sm:w-64 flex items-center">
            <FilterIcon className={`h-5 w-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'} mr-2`} />
            <select className={`block w-full pl-3 pr-10 py-2 text-base border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-100 focus:ring-ocean-light focus:border-ocean-light' : 'border-gray-300 bg-white focus:ring-ocean-teal focus:border-ocean-teal'} rounded-md focus:outline-none transition-colors`} value={filterCategory} onChange={e => setFilterCategory(e.target.value)}>
              <option value="all">All Categories</option>
              <option value="Freshwater">Freshwater</option>
              <option value="Saltwater">Saltwater</option>
              <option value="Brackish">Brackish</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFish.map(fish => <div key={fish.id} onClick={() => handleViewDetails(fish)} className={`cursor-pointer transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg`}>
              <FishCard fish={fish} darkMode={darkMode} />
            </div>)}
        </div>
        {filteredFish.length === 0 && <div className="text-center py-12">
            <CompassIcon className={`mx-auto h-12 w-12 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
            <h3 className={`mt-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              No fish species found
            </h3>
            <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
          </div>}
      </DashboardCard>
      {/* Fish Submission Modal */}
      <FishSubmissionModal isOpen={isAddFishModalOpen} onClose={() => setIsAddFishModalOpen(false)} />
      {/* Fish Detail Modal */}
      {isDetailModalOpen && selectedFish && <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity backdrop-blur-sm" onClick={() => setIsDetailModalOpen(false)}></div>
          <div className={`relative ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg max-w-4xl w-full mx-auto shadow-xl transition-colors duration-300`}>
            <div className="flex md:flex-row flex-col">
              <div className="md:w-2/5 relative">
                <img src={selectedFish.image} alt={selectedFish.name} className="w-full h-full object-cover rounded-l-lg md:h-auto" />
                <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full ${selectedFish.category === 'Freshwater' ? darkMode ? 'bg-blue-900/70 text-blue-200' : 'bg-blue-100 text-blue-800' : selectedFish.category === 'Saltwater' ? darkMode ? 'bg-teal-900/70 text-teal-200' : 'bg-teal-100 text-teal-800' : darkMode ? 'bg-green-900/70 text-green-200' : 'bg-green-100 text-green-800'}`}>
                  <span className="text-sm font-medium">
                    {selectedFish.category}
                  </span>
                </div>
              </div>
              <div className="md:w-3/5 p-6 md:overflow-y-auto max-h-[80vh]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      {selectedFish.name}
                    </h2>
                    <p className={`text-sm italic ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {selectedFish.scientificName}
                    </p>
                  </div>
                  <button onClick={() => setIsDetailModalOpen(false)} className={`p-1 rounded-full ${darkMode ? 'text-gray-400 hover:bg-gray-700 hover:text-gray-300' : 'text-gray-400 hover:bg-gray-100 hover:text-gray-500'}`}>
                    <XIcon className="h-6 w-6" />
                  </button>
                </div>
                <div className={`mt-4 p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                  <h3 className={`text-lg font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    Description
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {selectedFish.description}
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                    <h3 className={`text-md font-medium mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'} flex items-center`}>
                      <MapPinIcon className="h-5 w-5 mr-2" />
                      Habitat & Location
                    </h3>
                    <div className="space-y-2">
                      <div>
                        <span className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          Habitat:
                        </span>
                        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {selectedFish.habitat}
                        </p>
                      </div>
                      {selectedFish.catchRegion && <div>
                          <span className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Catch Regions:
                          </span>
                          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {selectedFish.catchRegion}
                          </p>
                        </div>}
                      {selectedFish.averageSize && <div>
                          <span className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Average Size:
                          </span>
                          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {selectedFish.averageSize}
                          </p>
                        </div>}
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                    <h3 className={`text-md font-medium mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'} flex items-center`}>
                      <DollarSignIcon className="h-5 w-5 mr-2" />
                      Market Information
                    </h3>
                    <div className="space-y-2">
                      {selectedFish.marketPrice && <div>
                          <span className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Market Price:
                          </span>
                          <p className={`text-sm font-medium ${darkMode ? 'text-ocean-light' : 'text-ocean-teal'}`}>
                            {selectedFish.marketPrice}
                          </p>
                        </div>}
                      {selectedFish.availability && <div>
                          <span className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Availability:
                          </span>
                          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {selectedFish.availability}
                          </p>
                        </div>}
                      {selectedFish.bestSeason && <div>
                          <span className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Best Season:
                          </span>
                          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {selectedFish.bestSeason}
                          </p>
                        </div>}
                    </div>
                  </div>
                </div>
                {selectedFish.regulations && <div className={`mt-4 p-4 rounded-lg ${darkMode ? 'bg-yellow-900/20 border border-yellow-900/30' : 'bg-yellow-50 border border-yellow-200'}`}>
                    <h3 className={`text-md font-medium mb-2 flex items-center ${darkMode ? 'text-yellow-300' : 'text-yellow-800'}`}>
                      <AlertTriangleIcon className="h-5 w-5 mr-2" />
                      Fishing Regulations
                    </h3>
                    <p className={`text-sm ${darkMode ? 'text-yellow-200' : 'text-yellow-700'}`}>
                      {selectedFish.regulations}
                    </p>
                  </div>}
                <div className="mt-6 flex justify-end space-x-3">
                  <button onClick={() => setIsDetailModalOpen(false)} className={`px-4 py-2 border ${darkMode ? 'bg-ocean-teal text-white hover:bg-ocean-blue' : 'bg-ocean-teal text-white hover:bg-ocean-blue'} rounded-md shadow-sm text-sm font-medium focus:outline-none transition-colors duration-300`}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>}
    </div>;
}