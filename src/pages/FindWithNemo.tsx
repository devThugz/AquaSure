import React, { useState } from 'react';
import { SearchIcon, CameraIcon, MessageCircleIcon, BookOpenIcon, DollarSignIcon, InfoIcon, TrendingUpIcon } from 'lucide-react';
export function FindWithNemo() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([{
    sender: 'nemo',
    message: "Hello! I'm Nemo, your fishing assistant. How can I help you today?",
    timestamp: new Date(Date.now() - 60000)
  }]);
  const handleSendMessage = e => {
    e.preventDefault();
    if (!message.trim()) return;
    // Add user message to chat
    const userMessage = {
      sender: 'user',
      message: message.trim(),
      timestamp: new Date()
    };
    setChatHistory([...chatHistory, userMessage]);
    setMessage('');
    // Simulate AI response after a short delay
    setTimeout(() => {
      const nemoResponse = {
        sender: 'nemo',
        message: getAIResponse(message.trim()),
        timestamp: new Date()
      };
      setChatHistory(prev => [...prev, nemoResponse]);
    }, 1000);
  };
  // Mock AI response function
  const getAIResponse = userMessage => {
    const lowerCaseMessage = userMessage.toLowerCase();
    if (lowerCaseMessage.includes('tuna') || lowerCaseMessage.includes('yellowfin')) {
      return "Yellowfin tuna are currently in season! They're typically found in deeper waters, about 15-20 km offshore. The current market price is around ₱280-320 per kilo for Grade A.";
    } else if (lowerCaseMessage.includes('weather') || lowerCaseMessage.includes('forecast')) {
      return "Based on current forecasts, fishing conditions will be favorable tomorrow morning from 5 AM to 10 AM. There's a small craft advisory in effect for the afternoon due to increasing wind speeds.";
    } else if (lowerCaseMessage.includes('price') || lowerCaseMessage.includes('market')) {
      return 'Current market prices for common catches:\n- Bangus: ₱180-220/kg\n- Tilapia: ₱120-150/kg\n- Galunggong: ₱240-280/kg\n- Lapu-lapu: ₱350-400/kg\nPrices tend to be higher on weekends and early mornings.';
    } else if (lowerCaseMessage.includes('technique') || lowerCaseMessage.includes('how to catch')) {
      return 'For inshore fishing this season, I recommend using bottom fishing techniques with live bait. The reef fish are particularly active during early morning and late afternoon hours.';
    } else {
      return "I'm here to help with fish identification, fishing techniques, market prices, and more. Could you be more specific about what you'd like to know?";
    }
  };
  const formatTime = date => {
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Find with Nemo</h2>
        <p className="text-gray-600 mt-1">
          Your AI assistant for all fishing-related knowledge
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col h-[600px]">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-teal-500 flex items-center">
              <div className="bg-white rounded-full p-2 mr-3">
                <img src="https://images.unsplash.com/photo-1579064225784-69dfe8e08b8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Nemo" className="h-10 w-10 rounded-full object-cover" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Nemo</h3>
                <p className="text-blue-100 text-sm">AI Fishing Assistant</p>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              {chatHistory.map((chat, index) => <div key={index} className={`mb-4 flex ${chat.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-lg p-3 ${chat.sender === 'user' ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
                    <p className="whitespace-pre-line">{chat.message}</p>
                    <p className={`text-xs mt-1 ${chat.sender === 'user' ? 'text-teal-100' : 'text-gray-500'}`}>
                      {formatTime(chat.timestamp)}
                    </p>
                  </div>
                </div>)}
            </div>
            <div className="p-4 border-t border-gray-200">
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <button type="button" className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
                  <CameraIcon className="h-6 w-6" />
                </button>
                <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Ask Nemo about fish, techniques, or prices..." className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                <button type="submit" className="p-2 rounded-full bg-teal-500 text-white hover:bg-teal-600">
                  <MessageCircleIcon className="h-6 w-6" />
                </button>
              </form>
              <div className="mt-2 flex justify-center space-x-2">
                <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">
                  Fish identification
                </button>
                <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">
                  Market prices
                </button>
                <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">
                  Fishing techniques
                </button>
                <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">
                  Regulations
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <div className="rounded-full p-2 bg-teal-100">
                <CameraIcon className="h-5 w-5 text-teal-600" />
              </div>
              <h3 className="ml-2 text-lg font-medium text-gray-900">
                Catch Identification
              </h3>
            </div>
            <div className="p-4 border-2 border-dashed border-gray-300 rounded-md text-center">
              <CameraIcon className="h-10 w-10 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-3">
                Snap a photo of your catch for instant identification
              </p>
              <button className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none w-full">
                Take Photo
              </button>
              <p className="text-xs text-gray-500 mt-2">
                or drag and drop an image here
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <div className="rounded-full p-2 bg-blue-100">
                <BookOpenIcon className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="ml-2 text-lg font-medium text-gray-900">
                Knowledge Database
              </h3>
            </div>
            <div className="space-y-3">
              <a href="#" className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100">
                <InfoIcon className="h-5 w-5 text-gray-500 mr-2" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    Fish Species Guide
                  </h4>
                  <p className="text-xs text-gray-600">
                    150+ local species with details
                  </p>
                </div>
              </a>
              <a href="#" className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100">
                <TrendingUpIcon className="h-5 w-5 text-gray-500 mr-2" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    Fishing Techniques
                  </h4>
                  <p className="text-xs text-gray-600">
                    Methods suited for each fish type
                  </p>
                </div>
              </a>
              <a href="#" className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100">
                <DollarSignIcon className="h-5 w-5 text-gray-500 mr-2" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    Market Price Trends
                  </h4>
                  <p className="text-xs text-gray-600">
                    Historical and current pricing data
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <div className="rounded-full p-2 bg-amber-100">
                <DollarSignIcon className="h-5 w-5 text-amber-600" />
              </div>
              <h3 className="ml-2 text-lg font-medium text-gray-900">
                Fish Price Estimator
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="fish-type" className="block text-sm font-medium text-gray-700 mb-1">
                  Fish Type
                </label>
                <select id="fish-type" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm" defaultValue="">
                  <option value="" disabled>
                    Select fish type
                  </option>
                  <option value="bangus">Bangus (Milkfish)</option>
                  <option value="tilapia">Tilapia</option>
                  <option value="tuna">Yellowfin Tuna</option>
                  <option value="galunggong">Galunggong (Mackerel)</option>
                </select>
              </div>
              <div>
                <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                  Estimated Weight (kg)
                </label>
                <input type="number" id="weight" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm" placeholder="Enter weight" min="0.1" step="0.1" />
              </div>
              <div>
                <label htmlFor="freshness" className="block text-sm font-medium text-gray-700 mb-1">
                  Freshness
                </label>
                <select id="freshness" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm" defaultValue="fresh">
                  <option value="very-fresh">Very Fresh (Caught today)</option>
                  <option value="fresh">Fresh (Within 24 hours)</option>
                  <option value="day-old">Day-old</option>
                </select>
              </div>
              <button className="w-full px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 focus:outline-none">
                Estimate Price
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
}