import React, { useState } from 'react';
import { CompassIcon, PlusIcon, SearchIcon, FilterIcon, BrainIcon, MapPinIcon, CloudSunIcon, DropletIcon, BarChartIcon, ThumbsUpIcon, AlertTriangleIcon, SaveIcon, CheckIcon, XIcon, CalendarIcon, DollarSignIcon, TagIcon, InfoIcon } from 'lucide-react';
import FishCard from '../../components/FishCard';
import { useTheme } from '../../contexts/ThemeContext';
export function AdminFishHub() {
  const {
    darkMode
  } = useTheme();
  const [isAddFishModalOpen, setIsAddFishModalOpen] = useState(false);
  const [isEditFishModalOpen, setIsEditFishModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showNemoAI, setShowNemoAI] = useState(false);
  const [selectedFish, setSelectedFish] = useState(null);
  const [newFish, setNewFish] = useState({
    name: '',
    scientificName: '',
    category: 'Freshwater',
    habitat: '',
    description: '',
    image: ''
  });
  // Mock fish species data
  const [fishSpecies, setFishSpecies] = useState([{
    id: 1,
    name: 'Bangus (Milkfish)',
    scientificName: 'Chanos chanos',
    category: 'Freshwater',
    habitat: 'Rivers, Lakes, Brackish water',
    description: 'The national fish of the Philippines, commonly farmed in fishponds and fish pens. Known for its silver color and delicate flavor, it is one of the most important aquaculture species in Southeast Asia.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1580845456874-3f1f2a8d3c45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1583255448430-17c5eda08e5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    marketPrice: 'PHP 120-160 per kg',
    availability: 'Year-round',
    catchRegion: 'Central Luzon, Pampanga, Bulacan',
    regulations: 'No specific restrictions for farmed catfish',
    averageSize: '25-40 cm',
    bestSeason: 'Year-round, best growth during rainy season'
  }]);
  // Mock Nemo AI recommendations and insights
  const nemoInsights = {
    dataValidation: [{
      field: 'scientificName',
      value: 'Chanos chanos',
      status: 'valid',
      message: 'Scientific name is correctly formatted'
    }, {
      field: 'habitat',
      value: 'Rivers, Lakes, Brackish water',
      status: 'valid',
      message: 'Habitat information is complete'
    }, {
      field: 'category',
      value: 'Freshwater',
      status: 'warning',
      message: 'Bangus is also found in brackish water, consider updating category'
    }],
    suggestions: [{
      type: 'content',
      message: 'Add information about typical size and weight range for better identification'
    }, {
      type: 'content',
      message: 'Include details about fishing seasons and best catching methods'
    }, {
      type: 'category',
      message: 'Consider adding "Brackish" as an additional category for this species'
    }],
    similarSpecies: [{
      name: 'Rabbitfish (Kitang)',
      scientificName: 'Siganus sp.',
      similarityScore: 0.72
    }, {
      name: 'Mullet (Banak)',
      scientificName: 'Mugil cephalus',
      similarityScore: 0.68
    }]
  };
  // Filter fish based on search term and category
  const filteredFish = fishSpecies.filter(fish => {
    const matchesSearch = fish.name.toLowerCase().includes(searchTerm.toLowerCase()) || fish.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || fish.category === filterCategory;
    return matchesSearch && matchesCategory;
  });
  const handleAddFish = () => {
    const fishToAdd = {
      id: fishSpecies.length + 1,
      ...newFish,
      // If no image is provided, use a default one
      image: newFish.image || 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    };
    setFishSpecies([...fishSpecies, fishToAdd]);
    setIsAddFishModalOpen(false);
    resetForm();
  };
  const handleUpdateFish = () => {
    if (!selectedFish) return;
    setFishSpecies(fishSpecies.map(fish => fish.id === selectedFish.id ? selectedFish : fish));
    setIsEditFishModalOpen(false);
  };
  const handleDeleteFish = id => {
    setFishSpecies(fishSpecies.filter(fish => fish.id !== id));
    if (selectedFish && selectedFish.id === id) {
      setSelectedFish(null);
    }
  };
  const resetForm = () => {
    setNewFish({
      name: '',
      scientificName: '',
      category: 'Freshwater',
      habitat: '',
      description: '',
      image: ''
    });
  };
  const handleEditClick = fish => {
    setSelectedFish({
      ...fish
    });
    setIsEditFishModalOpen(true);
  };
  const handleViewDetails = fish => {
    setSelectedFish({
      ...fish
    });
    setIsDetailModalOpen(true);
  };
  const getNemoAIRecommendations = () => {
    // In a real application, this would call an AI service
    // For this demo, we'll just return mock data
    setShowNemoAI(true);
  };
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            Fish Hub
          </h2>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
            Manage and explore fish species information
          </p>
        </div>
        <div className="flex space-x-3">
          <button onClick={getNemoAIRecommendations} className={`inline-flex items-center px-4 py-2 border ${showNemoAI ? darkMode ? 'bg-blue-900/20 text-blue-400 border-blue-900/50' : 'bg-blue-50 text-blue-700 border-blue-200' : darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} rounded-md transition-colors duration-300 focus:outline-none`}>
            <BrainIcon className="h-5 w-5 mr-2" />
            Nemo AI Assistant
          </button>
          <button onClick={() => setIsAddFishModalOpen(true)} className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-600 hover:bg-teal-700'} focus:outline-none transition-colors duration-300`}>
            <PlusIcon className="h-5 w-5 mr-2" />
            Add New Species
          </button>
        </div>
      </div>
      {/* Nemo AI Panel */}
      {showNemoAI && <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg shadow-lg p-6 mb-6 text-white">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-full">
                <BrainIcon className="h-6 w-6 text-blue-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium">
                  Finding with Nemo AI Assistant
                </h3>
                <p className="text-sm text-blue-100">
                  Intelligent insights and recommendations for fish data
                  management
                </p>
              </div>
            </div>
            <button onClick={() => setShowNemoAI(false)} className="text-white hover:text-blue-100">
              <XIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-2 bg-white bg-opacity-10 rounded-lg p-5">
              <h4 className="font-medium text-white mb-3">
                Data Validation Results
              </h4>
              <div className="space-y-3">
                {nemoInsights.dataValidation.map((item, index) => <div key={index} className={`p-3 rounded-md ${item.status === 'valid' ? 'bg-green-400 bg-opacity-20' : item.status === 'warning' ? 'bg-yellow-400 bg-opacity-20' : 'bg-red-400 bg-opacity-20'}`}>
                    <div className="flex items-start">
                      <div className="mt-0.5">
                        {item.status === 'valid' ? <CheckIcon className="h-5 w-5 text-green-300" /> : item.status === 'warning' ? <AlertTriangleIcon className="h-5 w-5 text-yellow-300" /> : <XIcon className="h-5 w-5 text-red-300" />}
                      </div>
                      <div className="ml-2">
                        <p className="text-sm font-medium text-white">
                          {item.field}: {item.value}
                        </p>
                        <p className="text-xs text-blue-100">{item.message}</p>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-5">
              <h4 className="font-medium text-white mb-3">
                Improvement Suggestions
              </h4>
              <div className="space-y-3">
                {nemoInsights.suggestions.map((suggestion, index) => <div key={index} className="p-3 bg-white bg-opacity-10 rounded-md">
                    <div className="flex items-start">
                      <div className="mt-0.5">
                        <ThumbsUpIcon className="h-4 w-4 text-blue-200" />
                      </div>
                      <div className="ml-2">
                        <p className="text-xs text-white">
                          {suggestion.message}
                        </p>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-5">
            <h4 className="font-medium text-white mb-3">
              Similar Species Analysis
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {nemoInsights.similarSpecies.map((species, index) => <div key={index} className="p-3 bg-white bg-opacity-10 rounded-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-white">
                        {species.name}
                      </p>
                      <p className="text-xs text-blue-100">
                        {species.scientificName}
                      </p>
                    </div>
                    <div className="px-2 py-1 bg-white bg-opacity-20 rounded-full">
                      <span className="text-xs text-white">
                        {Math.round(species.similarityScore * 100)}% similar
                      </span>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
          <div className="mt-4 text-center">
            <button className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-blue-50 focus:outline-none">
              Generate Comprehensive Report
            </button>
          </div>
        </div>}
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} rounded-lg p-6 mb-6 transition-colors duration-300`}>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
            </div>
            <input type="text" className={`block w-full pl-10 pr-3 py-2 border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'bg-white border-gray-300 placeholder-gray-500'} rounded-md leading-5 focus:outline-none focus:placeholder-gray-400 focus:ring-1 ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`} placeholder="Search fish species..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          <div className="sm:w-64 flex items-center">
            <FilterIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'} mr-2`} />
            <select className={`block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300'} focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm rounded-md transition-colors duration-300`} value={filterCategory} onChange={e => setFilterCategory(e.target.value)}>
              <option value="all">All Categories</option>
              <option value="Freshwater">Freshwater</option>
              <option value="Saltwater">Saltwater</option>
              <option value="Brackish">Brackish</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFish.map(fish => <div key={fish.id} className={`${darkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-200 hover:bg-gray-50'} border rounded-lg overflow-hidden transition-colors duration-300 cursor-pointer`} onClick={() => handleViewDetails(fish)}>
              <div className="relative h-48">
                <img src={fish.image} alt={fish.name} className="w-full h-full object-cover" />
                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full ${fish.category === 'Freshwater' ? darkMode ? 'bg-blue-900/70 text-blue-200' : 'bg-blue-100 text-blue-800' : fish.category === 'Saltwater' ? darkMode ? 'bg-teal-900/70 text-teal-200' : 'bg-teal-100 text-teal-800' : darkMode ? 'bg-green-900/70 text-green-200' : 'bg-green-100 text-green-800'}`}>
                  <span className="text-xs font-medium">{fish.category}</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      {fish.name}
                    </h3>
                    <p className={`text-sm italic ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {fish.scientificName}
                    </p>
                  </div>
                  <div className={`${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                    <InfoIcon className="h-5 w-5" />
                  </div>
                </div>
                <p className={`mt-2 text-sm line-clamp-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {fish.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs ${darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
                    <MapPinIcon className="h-3 w-3 mr-1" />
                    {fish.habitat}
                  </span>
                  {fish.marketPrice && <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs ${darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
                      <DollarSignIcon className="h-3 w-3 mr-1" />
                      {fish.marketPrice}
                    </span>}
                </div>
                <div className="mt-4 pt-4 border-t flex justify-end space-x-2">
                  <button onClick={e => {
                e.stopPropagation();
                handleEditClick(fish);
              }} className={`p-1.5 rounded-md ${darkMode ? 'bg-gray-600 hover:bg-gray-500 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}>
                    <SaveIcon className="h-4 w-4" />
                  </button>
                  <button onClick={e => {
                e.stopPropagation();
                handleDeleteFish(fish.id);
              }} className={`p-1.5 rounded-md ${darkMode ? 'bg-red-900/30 hover:bg-red-900/50 text-red-300' : 'bg-red-50 hover:bg-red-100 text-red-600'}`}>
                    <XIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>)}
        </div>
        {filteredFish.length === 0 && <div className="text-center py-12">
            <CompassIcon className={`mx-auto h-12 w-12 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
            <h3 className={`mt-2 text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
              No fish species found
            </h3>
            <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
          </div>}
      </div>
      {/* Add Fish Modal */}
      {isAddFishModalOpen && <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsAddFishModalOpen(false)}></div>
          <div className={`relative ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg max-w-lg w-full mx-auto p-6 shadow-xl transition-colors duration-300`}>
            <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
              Add New Fish Species
            </h3>
            <form className="space-y-4">
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Common Name
                </label>
                <input type="text" value={newFish.name} onChange={e => setNewFish({
              ...newFish,
              name: e.target.value
            })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`} />
              </div>
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Scientific Name
                </label>
                <input type="text" value={newFish.scientificName} onChange={e => setNewFish({
              ...newFish,
              scientificName: e.target.value
            })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`} />
              </div>
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Category
                </label>
                <select value={newFish.category} onChange={e => setNewFish({
              ...newFish,
              category: e.target.value
            })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`}>
                  <option value="Freshwater">Freshwater</option>
                  <option value="Saltwater">Saltwater</option>
                  <option value="Brackish">Brackish</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Habitat
                </label>
                <input type="text" value={newFish.habitat} onChange={e => setNewFish({
              ...newFish,
              habitat: e.target.value
            })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`} />
              </div>
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Description
                </label>
                <textarea rows={3} value={newFish.description} onChange={e => setNewFish({
              ...newFish,
              description: e.target.value
            })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`}></textarea>
              </div>
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Image URL
                </label>
                <input type="text" value={newFish.image} onChange={e => setNewFish({
              ...newFish,
              image: e.target.value
            })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`} />
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button type="button" className={`px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} rounded-md shadow-sm text-sm font-medium focus:outline-none transition-colors duration-300`} onClick={() => setIsAddFishModalOpen(false)}>
                  Cancel
                </button>
                <button type="button" className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-600 hover:bg-teal-700'} focus:outline-none transition-colors duration-300`} onClick={handleAddFish} disabled={!newFish.name || !newFish.scientificName}>
                  <SaveIcon className="h-4 w-4 mr-2 inline-block" />
                  Save Species
                </button>
              </div>
            </form>
          </div>
        </div>}
      {/* Edit Fish Modal */}
      {isEditFishModalOpen && selectedFish && <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsEditFishModalOpen(false)}></div>
          <div className={`relative ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg max-w-lg w-full mx-auto p-6 shadow-xl transition-colors duration-300`}>
            <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
              Edit Fish Species
            </h3>
            <form className="space-y-4">
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Common Name
                </label>
                <input type="text" value={selectedFish.name} onChange={e => setSelectedFish({
              ...selectedFish,
              name: e.target.value
            })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`} />
              </div>
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Scientific Name
                </label>
                <input type="text" value={selectedFish.scientificName} onChange={e => setSelectedFish({
              ...selectedFish,
              scientificName: e.target.value
            })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`} />
              </div>
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Category
                </label>
                <select value={selectedFish.category} onChange={e => setSelectedFish({
              ...selectedFish,
              category: e.target.value
            })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`}>
                  <option value="Freshwater">Freshwater</option>
                  <option value="Saltwater">Saltwater</option>
                  <option value="Brackish">Brackish</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Habitat
                </label>
                <input type="text" value={selectedFish.habitat} onChange={e => setSelectedFish({
              ...selectedFish,
              habitat: e.target.value
            })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`} />
              </div>
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Description
                </label>
                <textarea rows={3} value={selectedFish.description} onChange={e => setSelectedFish({
              ...selectedFish,
              description: e.target.value
            })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`}></textarea>
              </div>
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Image URL
                </label>
                <input type="text" value={selectedFish.image} onChange={e => setSelectedFish({
              ...selectedFish,
              image: e.target.value
            })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`} />
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button type="button" className={`px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} rounded-md shadow-sm text-sm font-medium focus:outline-none transition-colors duration-300`} onClick={() => setIsEditFishModalOpen(false)}>
                  Cancel
                </button>
                <button type="button" className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-600 hover:bg-teal-700'} focus:outline-none transition-colors duration-300`} onClick={handleUpdateFish} disabled={!selectedFish.name || !selectedFish.scientificName}>
                  <SaveIcon className="h-4 w-4 mr-2 inline-block" />
                  Update Species
                </button>
              </div>
            </form>
          </div>
        </div>}
      {/* Fish Detail Modal */}
      {isDetailModalOpen && selectedFish && <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setIsDetailModalOpen(false)}></div>
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
                          <p className={`text-sm font-medium ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
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
                  <button onClick={() => {
                setIsDetailModalOpen(false);
                handleEditClick(selectedFish);
              }} className={`px-4 py-2 border ${darkMode ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-teal-600 text-white hover:bg-teal-700'} rounded-md shadow-sm text-sm font-medium focus:outline-none transition-colors duration-300`}>
                    Edit Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>}
    </div>;
}