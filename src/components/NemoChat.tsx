import React, { useEffect, useState, useRef } from 'react';
import { BrainIcon, SendIcon, ChevronDownIcon, ChevronUpIcon, ThumbsUpIcon, ThumbsDownIcon, PinIcon, FishIcon, CloudLightningIcon, AlertTriangleIcon, MinimizeIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
interface NemoChatProps {
  expanded?: boolean;
  showRecommendations?: boolean;
  onMinimize?: () => void;
}
const NemoChat: React.FC<NemoChatProps> = ({
  expanded = false,
  showRecommendations = false,
  onMinimize
}) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{
    type: 'bot',
    text: "Hello! I'm Nemo, your AI fishing assistant. How can I help you today?",
    time: new Date()
  }]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const {
    darkMode
  } = useTheme();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;
    // Add user message
    setMessages(prev => [...prev, {
      type: 'user',
      text: input,
      time: new Date()
    }]);
    setInput('');
    // Simulate bot typing
    setIsTyping(true);
    // Simulate response after a delay
    setTimeout(() => {
      const responses = ['Based on current weather patterns, fishing conditions are optimal in the eastern coast today.', 'I recommend using smaller bait today as the water temperature has dropped slightly.', 'Your insurance coverage is currently at ₱50,000. Feeding your pet fish can increase this!', 'Weather alert: Moderate waves expected this afternoon. Consider returning to shore by 2 PM.', 'The current market price for Yellowfin Tuna is ₱280 per kilogram, up 5% from yesterday.'];
      setMessages(prev => [...prev, {
        type: 'bot',
        text: responses[Math.floor(Math.random() * responses.length)],
        time: new Date()
      }]);
      setIsTyping(false);
    }, 1500);
  };
  // Handle minimize button click
  const handleMinimize = () => {
    if (onMinimize) {
      onMinimize();
    }
  };
  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }, [messages, isTyping]);
  // Quick suggestions that users can click on
  const quickSuggestions = ["Today's weather forecast", 'Fish species in my area', 'Insurance coverage details', 'Report an emergency', 'Market prices for catch'];
  return <div className={`flex flex-col h-[500px] ${darkMode ? 'bg-ocean-deep' : 'bg-white'} border border-aqua-500/30 rounded-2xl shadow-lg overflow-hidden`}>
      {/* Header */}
      <div className="px-4 py-3 bg-gradient-accent flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-white rounded-full p-1 mr-2">
            <BrainIcon className="h-5 w-5 text-ocean-teal" />
          </div>
          <div>
            <h3 className="font-medium text-white">Nemo AI Assistant</h3>
            <p className="text-xs text-aqua-100">Always here to help</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={handleMinimize} className="text-white hover:text-aqua-100 transition-colors" aria-label="Minimize Nemo AI Assistant">
            <MinimizeIcon className="h-5 w-5 cursor-pointer" />
          </button>
        </div>
      </div>

      {/* Chat messages */}
      <div className={`flex-grow overflow-y-auto p-4 ${darkMode ? 'bg-ocean-deep' : 'bg-gray-50'}`}>
        {messages.map((message, index) => <div key={index} className={`mb-4 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            {message.type === 'bot' && <div className="h-8 w-8 rounded-full bg-gradient-accent flex items-center justify-center mr-2 flex-shrink-0">
                <BrainIcon className="h-4 w-4 text-white" />
              </div>}
            <div className={`px-4 py-2 rounded-2xl max-w-[80%] ${message.type === 'user' ? `bg-gradient-accent text-white` : darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} ${message.type === 'bot' ? 'shadow-sm' : ''}`}>
              <p className="text-sm">{message.text}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.time.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit'
            })}
              </p>
            </div>
            {message.type === 'user' && <div className="h-8 w-8 rounded-full bg-ocean-teal flex items-center justify-center ml-2 flex-shrink-0">
                <span className="text-white text-sm">You</span>
              </div>}
          </div>)}
        {isTyping && <div className="mb-4 flex justify-start">
            <div className="h-8 w-8 rounded-full bg-gradient-accent flex items-center justify-center mr-2">
              <BrainIcon className="h-4 w-4 text-white" />
            </div>
            <div className={`px-4 py-3 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
              <div className="flex space-x-1">
                <div className="h-2 w-2 bg-ocean-teal rounded-full animate-bounce" style={{
              animationDelay: '0ms'
            }}></div>
                <div className="h-2 w-2 bg-ocean-teal rounded-full animate-bounce" style={{
              animationDelay: '200ms'
            }}></div>
                <div className="h-2 w-2 bg-ocean-teal rounded-full animate-bounce" style={{
              animationDelay: '400ms'
            }}></div>
              </div>
            </div>
          </div>}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick suggestions */}
      <div className={`px-4 py-2 ${darkMode ? 'bg-gray-800 border-t border-gray-700' : 'bg-white border-t border-gray-200'}`}>
        <div className="flex flex-wrap gap-2">
          {quickSuggestions.map((suggestion, index) => <button key={index} className="px-3 py-1 text-xs rounded-full border border-aqua-500/30 bg-aqua-500/10 text-aqua-600 dark:text-aqua-300 hover:bg-aqua-500/20 transition-colors" onClick={() => {
          setInput(suggestion);
          // Auto-submit after a short delay
          setTimeout(() => {
            const form = document.getElementById('nemo-chat-form') as HTMLFormElement;
            if (form) form.dispatchEvent(new Event('submit', {
              cancelable: true,
              bubbles: true
            }));
          }, 300);
        }}>
              {suggestion}
            </button>)}
        </div>
      </div>

      {/* Input form */}
      <form id="nemo-chat-form" className={`p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`} onSubmit={handleSubmit}>
        <div className="flex items-center">
          <input type="text" value={input} onChange={e => setInput(e.target.value)} className={`flex-grow px-4 py-2 rounded-l-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 border-gray-300 text-gray-800'} focus:outline-none focus:ring-2 focus:ring-ocean-teal`} placeholder="Ask Nemo something..." />
          <button type="submit" className="bg-gradient-accent text-white px-4 py-2 rounded-r-full">
            <SendIcon className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>;
};
export default NemoChat;