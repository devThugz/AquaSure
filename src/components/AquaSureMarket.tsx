import React, { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { ShoppingCart as ShoppingCartIcon, Wallet as WalletIcon, Fish as FishIcon, Star as StarIcon, AlertCircle as AlertCircleIcon } from 'lucide-react';
// Market items
const MARKET_ITEMS = [{
  id: 1,
  name: 'AquaBites (50 pack)',
  description: 'Fish food for your pet. Restores health and adds XP.',
  price: 200,
  quantity: 50,
  type: 'aquabites',
  image: 'https://images.unsplash.com/photo-1584283367830-7875dd4543a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
}, {
  id: 2,
  name: 'AquaBites (100 pack)',
  description: 'Bulk fish food for your pet. Better value!',
  price: 350,
  quantity: 100,
  type: 'aquabites',
  image: 'https://images.unsplash.com/photo-1584283367830-7875dd4543a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
}, {
  id: 3,
  name: 'Golden Koi',
  description: 'Rare fish pet sold by Pedro (4.8★ seller)',
  price: 1500,
  type: 'pet',
  sellerName: 'Pedro Reyes',
  sellerRating: 4.8,
  image: 'https://images.unsplash.com/photo-1513039464749-94912b3841ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
}, {
  id: 4,
  name: 'Blue Marlin',
  description: 'Exotic fish pet sold by Maria (4.5★ seller)',
  price: 2000,
  type: 'pet',
  sellerName: 'Maria Santos',
  sellerRating: 4.5,
  image: 'https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
}];
const AquaSureMarket: React.FC = () => {
  const {
    aquaBites,
    walletBalance,
    buyAquaBites
  } = useGame();
  const [selectedTab, setSelectedTab] = useState<'aquabites' | 'pets'>('aquabites');
  const [purchaseMessage, setPurchaseMessage] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);
  // Filter items by type
  const filteredItems = MARKET_ITEMS.filter(item => item.type === selectedTab);
  // Handle purchase
  const handlePurchase = item => {
    if (item.type === 'aquabites') {
      const success = buyAquaBites(item.price, item.quantity);
      if (success) {
        setPurchaseMessage({
          type: 'success',
          message: `Successfully purchased ${item.quantity} AquaBites!`
        });
      } else {
        setPurchaseMessage({
          type: 'error',
          message: 'Insufficient funds. Please add more credits to your wallet.'
        });
      }
    } else {
      // Pet purchase would be implemented with Firebase in a real app
      setPurchaseMessage({
        type: 'error',
        message: 'Pet purchases are currently unavailable. Coming soon!'
      });
    }
    // Clear message after 3 seconds
    setTimeout(() => {
      setPurchaseMessage(null);
    }, 3000);
  };
  return <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900">AquaSure Market</h3>
          <p className="text-sm text-gray-500">Purchase items for your fish</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <FishIcon className="h-5 w-5 text-teal-500 mr-1" />
            <span className="text-sm font-medium">{aquaBites} AquaBites</span>
          </div>
          <div className="flex items-center">
            <WalletIcon className="h-5 w-5 text-blue-500 mr-1" />
            <span className="text-sm font-medium">₱{walletBalance}</span>
          </div>
        </div>
      </div>
      {/* Purchase message */}
      {purchaseMessage && <div className={`mb-4 p-3 rounded-md ${purchaseMessage.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          <div className="flex items-center">
            <AlertCircleIcon className="h-5 w-5 mr-2" />
            <p className="text-sm">{purchaseMessage.message}</p>
          </div>
        </div>}
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-4">
        <button className={`px-4 py-2 text-sm font-medium ${selectedTab === 'aquabites' ? 'text-teal-600 border-b-2 border-teal-500' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`} onClick={() => setSelectedTab('aquabites')}>
          AquaBites
        </button>
        <button className={`px-4 py-2 text-sm font-medium ${selectedTab === 'pets' ? 'text-teal-600 border-b-2 border-teal-500' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`} onClick={() => setSelectedTab('pets')}>
          Fish Pets
        </button>
      </div>
      {/* Market items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map(item => <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="h-32 overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-3">
              <h4 className="text-md font-medium text-gray-900">{item.name}</h4>
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              {item.type === 'pet' && <div className="flex items-center mt-1">
                  <span className="text-xs text-gray-500">
                    Sold by: {item.sellerName}
                  </span>
                  <div className="flex items-center ml-2">
                    <StarIcon className="h-3 w-3 text-yellow-500" />
                    <span className="text-xs ml-1">{item.sellerRating}</span>
                  </div>
                </div>}
              <div className="flex items-center justify-between mt-3">
                <span className="text-teal-600 font-medium">₱{item.price}</span>
                <button onClick={() => handlePurchase(item)} className={`px-3 py-1 rounded-md text-sm font-medium ${walletBalance >= item.price ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`} disabled={walletBalance < item.price}>
                  <div className="flex items-center">
                    <ShoppingCartIcon className="h-4 w-4 mr-1" />
                    Buy Now
                  </div>
                </button>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
};
export default AquaSureMarket;