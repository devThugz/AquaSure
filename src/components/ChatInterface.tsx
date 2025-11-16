import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send as SendIcon, Image as ImageIcon, Smile as SmileIcon, Paperclip as PaperclipIcon, User as UserIcon, Users as UsersIcon, ChevronRight as ChevronRightIcon, MoreVertical as MoreVerticalIcon, Phone as PhoneIcon, Video as VideoIcon } from 'lucide-react';
interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
  isRead: boolean;
}
interface ChatGroup {
  id: string;
  name: string;
  members: number;
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
  image?: string;
}
const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    text: 'Welcome to the Batangas Fishing Association chat!',
    sender: 'system',
    timestamp: new Date(Date.now() - 86400000),
    isRead: true
  }, {
    id: '2',
    text: 'Hi everyone! Has anyone been out fishing today?',
    sender: 'Maria Santos',
    timestamp: new Date(Date.now() - 3600000),
    isRead: true
  }, {
    id: '3',
    text: 'I just got back. The weather was great and caught some nice fish.',
    sender: 'Pedro Reyes',
    timestamp: new Date(Date.now() - 1800000),
    isRead: true
  }, {
    id: '4',
    text: "That's great! I'm planning to go out tomorrow morning. Anyone want to join?",
    sender: 'Juan Dela Cruz',
    timestamp: new Date(Date.now() - 900000),
    isRead: true
  }]);
  const [chatGroups, setChatGroups] = useState<ChatGroup[]>([{
    id: '1',
    name: 'Batangas Fishing Association',
    members: 78,
    lastMessage: 'Anyone want to join?',
    lastMessageTime: new Date(Date.now() - 900000),
    unreadCount: 0,
    image: 'https://images.unsplash.com/photo-1545566239-0d774a5a3ddf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    id: '2',
    name: 'Small-Scale Fishers Network',
    members: 124,
    lastMessage: 'Meeting scheduled for next week',
    lastMessageTime: new Date(Date.now() - 7200000),
    unreadCount: 3,
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    id: '3',
    name: 'Sustainable Fishing Practices',
    members: 56,
    lastMessage: 'Check out this new technique',
    lastMessageTime: new Date(Date.now() - 86400000),
    unreadCount: 0,
    image: 'https://images.unsplash.com/photo-1540976575976-0c4b88b42efa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    id: '4',
    name: 'Fishing Equipment Exchange',
    members: 92,
    lastMessage: 'I have some extra gear to trade',
    lastMessageTime: new Date(Date.now() - 172800000),
    unreadCount: 0,
    image: 'https://images.unsplash.com/photo-1500646953400-93ab8cca8284?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>(chatGroups[0].id);
  const [isTyping, setIsTyping] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }, [messages]);
  // Simulate typing indicator
  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      if (isTyping) {
        setIsTyping(false);
      }
    }, 3000);
    return () => clearTimeout(typingTimeout);
  }, [isTyping]);
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    const newMsg: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'Fisher Juan',
      timestamp: new Date(),
      isRead: false
    };
    setMessages([...messages, newMsg]);
    setNewMessage('');
    // Simulate response after a delay
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        const responseMsg: Message = {
          id: (Date.now() + 1).toString(),
          text: "Thanks for the message! I'll get back to you soon.",
          sender: 'Pedro Reyes',
          timestamp: new Date(),
          isRead: false
        };
        setMessages(prev => [...prev, responseMsg]);
        setIsTyping(false);
      }, 3000);
    }, 1000);
  };
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  const formatGroupTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    if (diff < 86400000) {
      // Less than 1 day
      return formatTime(date);
    } else if (diff < 604800000) {
      // Less than 1 week
      return date.toLocaleDateString([], {
        weekday: 'short'
      });
    } else {
      return date.toLocaleDateString([], {
        month: 'short',
        day: 'numeric'
      });
    }
  };
  return <div className="bg-white rounded-lg shadow-sm overflow-hidden h-[600px] flex">
      {/* Chat sidebar */}
      {showSidebar && <div className="w-full md:w-80 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">
              Community Chat
            </h3>
            <p className="text-sm text-gray-500">
              Connect with other fishermen
            </p>
          </div>
          <div className="flex-1 overflow-y-auto">
            {chatGroups.map(group => <div key={group.id} className={`p-3 flex items-center cursor-pointer ${selectedGroup === group.id ? 'bg-gray-100' : 'hover:bg-gray-50'}`} onClick={() => setSelectedGroup(group.id)}>
                {group.image ? <img src={group.image} alt={group.name} className="w-12 h-12 rounded-full object-cover" /> : <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                    <UsersIcon className="h-6 w-6 text-teal-600" />
                  </div>}
                <div className="ml-3 flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {group.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatGroupTime(group.lastMessageTime)}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-500 truncate">
                      {group.lastMessage}
                    </p>
                    {group.unreadCount > 0 && <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-teal-500 rounded-full">
                        {group.unreadCount}
                      </span>}
                  </div>
                </div>
              </div>)}
          </div>
        </div>}
      {/* Chat area */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className="p-3 border-b border-gray-200 flex items-center justify-between bg-white">
          <div className="flex items-center">
            <button className="md:hidden mr-2 text-gray-500" onClick={() => setShowSidebar(!showSidebar)}>
              {showSidebar ? <ChevronRightIcon className="h-5 w-5" /> : <UsersIcon className="h-5 w-5" />}
            </button>
            <div className="flex items-center">
              <img src="https://images.unsplash.com/photo-1545566239-0d774a5a3ddf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Chat" className="w-10 h-10 rounded-full object-cover" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  Batangas Fishing Association
                </p>
                <p className="text-xs text-gray-500">78 members • 5 online</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
              <PhoneIcon className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
              <VideoIcon className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
              <MoreVerticalIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        {/* Messages area */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          {messages.map(message => <div key={message.id} className={`mb-4 flex ${message.sender === 'Fisher Juan' ? 'justify-end' : message.sender === 'system' ? 'justify-center' : 'justify-start'}`}>
              {message.sender !== 'Fisher Juan' && message.sender !== 'system' && <div className="flex-shrink-0 mr-2">
                    <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center">
                      <UserIcon className="h-4 w-4 text-teal-600" />
                    </div>
                  </div>}
              <div className={`max-w-xs lg:max-w-md ${message.sender === 'system' ? 'bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm' : message.sender === 'Fisher Juan' ? 'bg-teal-600 text-white px-4 py-2 rounded-lg rounded-tr-none' : 'bg-white border border-gray-200 px-4 py-2 rounded-lg rounded-tl-none'}`}>
                {message.sender !== 'Fisher Juan' && message.sender !== 'system' && <p className="text-xs font-medium text-gray-900 mb-1">
                      {message.sender}
                    </p>}
                <p className={`text-sm ${message.sender === 'Fisher Juan' ? 'text-white' : 'text-gray-800'}`}>
                  {message.text}
                </p>
                <p className={`text-xs mt-1 text-right ${message.sender === 'Fisher Juan' ? 'text-teal-100' : 'text-gray-500'}`}>
                  {formatTime(message.timestamp)}
                  {message.sender === 'Fisher Juan' && <span className="ml-1">✓{message.isRead ? '✓' : ''}</span>}
                </p>
              </div>
            </div>)}
          {/* Typing indicator */}
          {isTyping && <div className="mb-4 flex justify-start">
              <div className="flex-shrink-0 mr-2">
                <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center">
                  <UserIcon className="h-4 w-4 text-teal-600" />
                </div>
              </div>
              <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg rounded-tl-none">
                <div className="flex space-x-1">
                  <motion.div className="w-2 h-2 rounded-full bg-gray-400" animate={{
                y: [0, -5, 0]
              }} transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 0.1
              }} />
                  <motion.div className="w-2 h-2 rounded-full bg-gray-400" animate={{
                y: [0, -5, 0]
              }} transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 0.2,
                delay: 0.1
              }} />
                  <motion.div className="w-2 h-2 rounded-full bg-gray-400" animate={{
                y: [0, -5, 0]
              }} transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 0.3,
                delay: 0.2
              }} />
                </div>
              </div>
            </div>}
          <div ref={messagesEndRef} />
        </div>
        {/* Input area */}
        <div className="p-3 border-t border-gray-200 bg-white">
          <div className="flex items-center">
            <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
              <PaperclipIcon className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
              <ImageIcon className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
              <SmileIcon className="h-5 w-5" />
            </button>
            <input type="text" className="flex-1 mx-2 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500" placeholder="Type a message..." value={newMessage} onChange={e => setNewMessage(e.target.value)} onKeyDown={e => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }} />
            <button className={`p-2 rounded-full ${newMessage.trim() ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`} onClick={handleSendMessage} disabled={!newMessage.trim()}>
              <SendIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default ChatInterface;