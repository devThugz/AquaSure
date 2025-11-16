import React, { useEffect, useState } from 'react';
import { BrainIcon } from 'lucide-react';
import NemoChat from './NemoChat';
import { useTheme } from '../contexts/ThemeContext';
interface FloatingAIBubbleProps {
  persistent?: boolean;
}
export const FloatingAIBubble: React.FC<FloatingAIBubbleProps> = ({
  persistent = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    darkMode
  } = useTheme();
  // Initialize state from localStorage if available
  useEffect(() => {
    const savedState = localStorage.getItem('nemoAIState');
    if (savedState) {
      setIsOpen(JSON.parse(savedState).isOpen);
    } else if (persistent) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        saveState(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [persistent]);
  const toggleChat = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    saveState(newState);
  };
  const minimizeChat = () => {
    setIsOpen(false);
    saveState(false);
  };
  const saveState = (isOpenState: boolean) => {
    localStorage.setItem('nemoAIState', JSON.stringify({
      isOpen: isOpenState
    }));
  };
  return <>
      {isOpen ? <div className={`fixed bottom-4 right-4 z-50 w-80
            rounded-2xl shadow-lg overflow-hidden transition-all duration-300
            animate-float`}>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-ocean-aqua to-ocean-teal rounded-2xl blur opacity-70 animate-pulse-slow"></div>
          <div className="relative z-10">
            <NemoChat expanded={isExpanded} showRecommendations={true} onMinimize={minimizeChat} />
          </div>
        </div> : <button onClick={toggleChat} className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-accent 
            flex items-center justify-center shadow-lg hover:shadow-xl 
            transition-all duration-300 pulse animate-float" aria-label="Open Nemo AI Assistant">
          <div className="absolute inset-0 bg-gradient-accent rounded-full opacity-75 animate-ping"></div>
          <BrainIcon className="h-6 w-6 text-white" />
        </button>}
    </>;
};