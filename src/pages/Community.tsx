import React, { useEffect, useState, useRef } from 'react';
import { DashboardCard } from '../components/DashboardCard';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { UsersIcon, SendIcon, PaperclipIcon, SmileIcon, ImageIcon, MicIcon, BellIcon, PlusIcon, UserPlusIcon, SearchIcon, MessageSquareIcon, CalendarIcon, MapPinIcon, ChevronRightIcon, ThumbsUpIcon, MessageCircleIcon, ShareIcon, FishIcon, CloudIcon, InfoIcon, XIcon } from 'lucide-react';
export function Community() {
  const {
    darkMode
  } = useTheme();
  const {
    user
  } = useAuth();
  const [activeTab, setActiveTab] = useState('discussions');
  const [activeChat, setActiveChat] = useState('general');
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showEventModal, setShowEventModal] = useState(false);
  const messagesEndRef = useRef(null);
  // Mock chat data
  const chats = [{
    id: 'general',
    name: 'General Discussion',
    unread: 3,
    lastMessage: 'Does anyone know the weather forecast for tomorrow?',
    lastSender: 'Maria Santos',
    lastTime: '10:45 AM',
    isGroup: true,
    members: 156
  }, {
    id: 'batangas',
    name: 'Batangas Fishers',
    unread: 0,
    lastMessage: 'Meeting scheduled for Saturday, 9 AM at the town hall',
    lastSender: 'Pedro Reyes',
    lastTime: 'Yesterday',
    isGroup: true,
    members: 87
  }, {
    id: 'market',
    name: 'Market Updates',
    unread: 2,
    lastMessage: 'Tuna prices are up by 5% this week',
    lastSender: 'Antonio Mendoza',
    lastTime: '2 days ago',
    isGroup: true,
    members: 124
  }, {
    id: 'weather',
    name: 'Weather Alerts',
    unread: 0,
    lastMessage: 'Storm warning has been lifted for coastal areas',
    lastSender: 'Weather Bot',
    lastTime: '3 days ago',
    isGroup: true,
    members: 210
  }];
  // Mock messages data
  const messages = {
    general: [{
      id: 1,
      sender: 'Maria Santos',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
      message: 'Good morning everyone! How are the fishing conditions today?',
      time: '9:30 AM',
      isCurrentUser: false
    }, {
      id: 2,
      sender: 'Juan Dela Cruz',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      message: 'The weather is good in Batangas Bay. Calm seas and good visibility.',
      time: '9:35 AM',
      isCurrentUser: false
    }, {
      id: 3,
      sender: 'Pedro Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      message: 'I caught some nice yellowfin tuna yesterday near Verde Island Passage. About 5km offshore.',
      time: '9:42 AM',
      isCurrentUser: false
    }, {
      id: 4,
      sender: 'You',
      avatar: user?.avatar || 'https://randomuser.me/api/portraits/men/22.jpg',
      message: 'That sounds great! What bait were you using?',
      time: '9:50 AM',
      isCurrentUser: true
    }, {
      id: 5,
      sender: 'Pedro Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      message: 'I was using live squid. They seem to be working really well this season.',
      time: '10:05 AM',
      isCurrentUser: false
    }, {
      id: 6,
      sender: 'Maria Santos',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
      message: 'Does anyone know the weather forecast for tomorrow? I heard there might be a storm coming.',
      time: '10:45 AM',
      isCurrentUser: false
    }]
  };
  // Mock posts data
  const posts = [{
    id: 1,
    author: 'Pedro Reyes',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    time: '2 hours ago',
    content: 'Had a great day fishing today! Caught several yellowfin tuna near Verde Island Passage. The water conditions were perfect with calm seas and good visibility.',
    image: 'https://images.unsplash.com/photo-1545816250-0c2c90e5f59a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    likes: 24,
    comments: 8,
    shares: 3,
    liked: false
  }, {
    id: 2,
    author: 'Batangas Fishing Association',
    avatar: 'https://randomuser.me/api/portraits/men/68.jpg',
    time: '5 hours ago',
    content: 'ANNOUNCEMENT: Monthly meeting this Saturday at 9 AM at the town hall. We will discuss the new regulations for sustainable fishing practices and distribute updated fishing calendars. All members are encouraged to attend.',
    image: null,
    likes: 15,
    comments: 5,
    shares: 12,
    liked: true
  }, {
    id: 3,
    author: 'Maria Santos',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    time: 'Yesterday',
    content: 'Market prices update: Yellowfin Tuna ₱280-320/kg (↑5%), Mackerel ₱140-160/kg (↓3%), Blue Marlin ₱350-400/kg (stable), Milkfish ₱180-200/kg (↑2%). Best time to sell is early morning!',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    likes: 42,
    comments: 17,
    shares: 8,
    liked: false
  }];
  // Mock events data
  const events = [{
    id: 1,
    title: 'Monthly Fishermen Meeting',
    date: 'August 20, 2023',
    time: '9:00 AM - 11:00 AM',
    location: 'Batangas Town Hall',
    description: 'Monthly meeting to discuss fishing regulations, market prices, and community concerns.',
    organizer: 'Batangas Fishing Association',
    attendees: 45
  }, {
    id: 2,
    title: 'Sustainable Fishing Workshop',
    date: 'August 25, 2023',
    time: '1:00 PM - 4:00 PM',
    location: 'Batangas Community Center',
    description: 'Learn about sustainable fishing practices and how to protect marine resources for future generations.',
    organizer: 'Department of Agriculture - BFAR',
    attendees: 32
  }, {
    id: 3,
    title: 'Fish Market Festival',
    date: 'September 5, 2023',
    time: '6:00 AM - 2:00 PM',
    location: 'Batangas Public Market',
    description: 'Annual festival celebrating the local fishing industry with special discounts, cooking demonstrations, and cultural performances.',
    organizer: 'Batangas LGU',
    attendees: 124
  }];
  // Scroll to bottom of chat when messages change
  useEffect(() => {
    if (messagesEndRef.current && activeTab === 'chats') {
      messagesEndRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [activeChat, activeTab]);
  // Handle sending a message
  const handleSendMessage = () => {
    if (!message.trim()) return;
    // In a real app, this would send the message to a backend
    setMessage('');
  };
  // Filter chats based on search term
  const filteredChats = chats.filter(chat => chat.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Community</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Connect with other fishers and stay updated
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <UserPlusIcon className="h-5 w-5 mr-2" />
            Find Fishers
          </button>
          <button className="px-4 py-2 bg-ocean-teal text-white rounded-lg flex items-center hover:bg-ocean-blue transition-colors" onClick={() => setShowEventModal(true)}>
            <PlusIcon className="h-5 w-5 mr-2" />
            Create Event
          </button>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          <button className={`py-3 px-6 font-medium text-sm ${activeTab === 'discussions' ? 'text-ocean-teal dark:text-ocean-light border-b-2 border-ocean-teal dark:border-ocean-light' : 'text-gray-500 dark:text-gray-400 hover:text-ocean-teal dark:hover:text-ocean-light'}`} onClick={() => setActiveTab('discussions')}>
            <MessageSquareIcon className="inline-block mr-2 h-4 w-4" />
            Discussions
          </button>
          <button className={`py-3 px-6 font-medium text-sm ${activeTab === 'chats' ? 'text-ocean-teal dark:text-ocean-light border-b-2 border-ocean-teal dark:border-ocean-light' : 'text-gray-500 dark:text-gray-400 hover:text-ocean-teal dark:hover:text-ocean-light'}`} onClick={() => setActiveTab('chats')}>
            <UsersIcon className="inline-block mr-2 h-4 w-4" />
            Group Chats
          </button>
          <button className={`py-3 px-6 font-medium text-sm ${activeTab === 'events' ? 'text-ocean-teal dark:text-ocean-light border-b-2 border-ocean-teal dark:border-ocean-light' : 'text-gray-500 dark:text-gray-400 hover:text-ocean-teal dark:hover:text-ocean-light'}`} onClick={() => setActiveTab('events')}>
            <CalendarIcon className="inline-block mr-2 h-4 w-4" />
            Events
          </button>
        </div>
      </div>
      {activeTab === 'discussions' && <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <DashboardCard className="p-4">
              <div className="flex items-center space-x-3 mb-4">
                {user?.avatar ? <img src={user.avatar} alt={user.name} className="h-12 w-12 rounded-full object-cover border-2 border-ocean-teal/30" /> : <div className="h-12 w-12 rounded-full bg-gradient-accent flex items-center justify-center text-white font-medium">
                    {user?.name?.charAt(0) || 'U'}
                  </div>}
                <div>
                  <h3 className="font-medium">{user?.name || 'User'}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Batangas Bay Fisher
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <div className="flex items-center">
                    <MessageCircleIcon className="h-4 w-4 text-ocean-teal dark:text-ocean-light mr-2" />
                    <span className="text-sm">My Posts</span>
                  </div>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                    12
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 text-ocean-teal dark:text-ocean-light mr-2" />
                    <span className="text-sm">My Events</span>
                  </div>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                    3
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <BellIcon className="h-4 w-4 text-ocean-teal dark:text-ocean-light mr-2" />
                    <span className="text-sm">Notifications</span>
                  </div>
                  <span className="text-xs bg-ocean-teal text-white px-2 py-0.5 rounded-full">
                    5
                  </span>
                </div>
              </div>
            </DashboardCard>
            <DashboardCard className="p-4">
              <h3 className="font-medium mb-3">Trending Topics</h3>
              <div className="space-y-3">
                <div className="flex items-center p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <FishIcon className="h-4 w-4 text-ocean-teal dark:text-ocean-light mr-2" />
                  <div>
                    <div className="text-sm font-medium">#TunaFishing</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      142 posts
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors">
                  <CloudIcon className="h-4 w-4 text-ocean-teal dark:text-ocean-light mr-2" />
                  <div>
                    <div className="text-sm font-medium">#StormPreparation</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      98 posts
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors">
                  <MapPinIcon className="h-4 w-4 text-ocean-teal dark:text-ocean-light mr-2" />
                  <div>
                    <div className="text-sm font-medium">#BatangasBay</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      76 posts
                    </div>
                  </div>
                </div>
              </div>
            </DashboardCard>
            <DashboardCard className="p-4">
              <h3 className="font-medium mb-3">Upcoming Events</h3>
              <div className="space-y-3">
                <div className="p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <div className="text-sm font-medium">
                    Monthly Fishermen Meeting
                  </div>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <CalendarIcon className="h-3 w-3 mr-1" />
                    August 20, 9:00 AM
                  </div>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <MapPinIcon className="h-3 w-3 mr-1" />
                    Batangas Town Hall
                  </div>
                </div>
                <button className="text-sm text-ocean-teal dark:text-ocean-light hover:underline w-full text-center mt-2">
                  View All Events
                </button>
              </div>
            </DashboardCard>
          </div>
          {/* Main content - posts */}
          <div className="lg:col-span-3 space-y-6">
            {/* Create post card */}
            <DashboardCard className="p-4">
              <div className="flex space-x-3">
                {user?.avatar ? <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full object-cover" /> : <div className="h-10 w-10 rounded-full bg-gradient-accent flex items-center justify-center text-white font-medium">
                    {user?.name?.charAt(0) || 'U'}
                  </div>}
                <div className="flex-1">
                  <textarea className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ocean-teal dark:focus:ring-ocean-light transition-colors resize-none" placeholder="Share something with the community..." rows={3}></textarea>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex space-x-2">
                      <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <ImageIcon className="h-5 w-5 text-ocean-teal dark:text-ocean-light" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <MapPinIcon className="h-5 w-5 text-ocean-teal dark:text-ocean-light" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <SmileIcon className="h-5 w-5 text-ocean-teal dark:text-ocean-light" />
                      </button>
                    </div>
                    <button className="px-4 py-2 bg-ocean-teal text-white rounded-lg hover:bg-ocean-blue transition-colors">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </DashboardCard>
            {/* Posts */}
            {posts.map(post => <DashboardCard key={post.id} className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex space-x-3">
                    <img src={post.avatar} alt={post.author} className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <h3 className="font-medium">{post.author}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {post.time}
                      </p>
                    </div>
                  </div>
                  <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                </div>
                <div className="mt-3">
                  <p className="text-sm">{post.content}</p>
                </div>
                {post.image && <div className="mt-3 rounded-lg overflow-hidden">
                    <img src={post.image} alt="Post" className="w-full h-auto object-cover" />
                  </div>}
                <div className="mt-3 flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                  <span>{post.likes} likes</span>
                  <span>{post.comments} comments</span>
                  <span>{post.shares} shares</span>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                  <button className={`flex-1 flex items-center justify-center py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${post.liked ? 'text-blue-500' : ''}`}>
                    <ThumbsUpIcon className="h-5 w-5 mr-2" />
                    Like
                  </button>
                  <button className="flex-1 flex items-center justify-center py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <MessageCircleIcon className="h-5 w-5 mr-2" />
                    Comment
                  </button>
                  <button className="flex-1 flex items-center justify-center py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <ShareIcon className="h-5 w-5 mr-2" />
                    Share
                  </button>
                </div>
              </DashboardCard>)}
          </div>
        </div>}
      {activeTab === 'chats' && <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Chat list sidebar */}
          <div className="lg:col-span-1">
            <DashboardCard className="p-4 h-[calc(100vh-220px)] flex flex-col">
              <div className="relative mb-4">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input type="text" placeholder="Search chats..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ocean-teal dark:focus:ring-ocean-light transition-colors" />
              </div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium">Group Chats</h3>
                <button className="text-ocean-teal dark:text-ocean-light hover:underline text-sm">
                  New Group
                </button>
              </div>
              <div className="flex-1 overflow-y-auto space-y-2">
                {filteredChats.map(chat => <div key={chat.id} className={`p-3 rounded-lg cursor-pointer transition-colors ${activeChat === chat.id ? 'bg-ocean-teal/10 dark:bg-ocean-teal/20 border border-ocean-teal/30 dark:border-ocean-teal/30' : 'hover:bg-gray-100 dark:hover:bg-gray-800 border border-transparent'}`} onClick={() => setActiveChat(chat.id)}>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gradient-accent flex items-center justify-center text-white font-medium mr-3">
                          {chat.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium text-sm flex items-center">
                            {chat.name}
                            {chat.isGroup && <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                                ({chat.members})
                              </span>}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[150px]">
                            {chat.lastSender !== 'You' && `${chat.lastSender}: `}
                            {chat.lastMessage}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {chat.lastTime}
                        </div>
                        {chat.unread > 0 && <div className="mt-1 bg-ocean-teal text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {chat.unread}
                          </div>}
                      </div>
                    </div>
                  </div>)}
                {filteredChats.length === 0 && <div className="text-center py-4 text-gray-500 dark:text-gray-400 text-sm">
                    No chats found
                  </div>}
              </div>
            </DashboardCard>
          </div>
          {/* Chat area */}
          <div className="lg:col-span-3">
            <DashboardCard className="p-0 h-[calc(100vh-220px)] flex flex-col">
              {/* Chat header */}
              <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-accent flex items-center justify-center text-white font-medium mr-3">
                    {chats.find(c => c.id === activeChat)?.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium">
                      {chats.find(c => c.id === activeChat)?.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {chats.find(c => c.id === activeChat)?.members} members
                      • Active now
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Chat messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages[activeChat]?.map(msg => <div key={msg.id} className={`flex ${msg.isCurrentUser ? 'justify-end' : 'justify-start'}`}>
                    {!msg.isCurrentUser && <img src={msg.avatar} alt={msg.sender} className="h-8 w-8 rounded-full mr-2 mt-1" />}
                    <div className={`max-w-[70%]`}>
                      {!msg.isCurrentUser && <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                          {msg.sender}
                        </div>}
                      <div className={`rounded-lg px-4 py-2 ${msg.isCurrentUser ? 'bg-ocean-teal text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'}`}>
                        <p className="text-sm">{msg.message}</p>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-right">
                        {msg.time}
                      </div>
                    </div>
                  </div>)}
                <div ref={messagesEndRef} />
              </div>
              {/* Chat input */}
              <div className="p-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="flex space-x-2 mr-2">
                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <PaperclipIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <ImageIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <SmileIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </button>
                  </div>
                  <div className="relative flex-1">
                    <input type="text" value={message} onChange={e => setMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSendMessage()} placeholder="Type a message..." className="w-full px-4 py-2 pr-10 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ocean-teal dark:focus:ring-ocean-light transition-colors" />
                    <button onClick={handleSendMessage} disabled={!message.trim()} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-ocean-teal dark:text-ocean-light hover:text-ocean-blue dark:hover:text-blue-400 disabled:text-gray-400 dark:disabled:text-gray-600 transition-colors">
                      <SendIcon className="h-5 w-5" />
                    </button>
                  </div>
                  <button className="p-2 ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <MicIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
              </div>
            </DashboardCard>
          </div>
        </div>}
      {activeTab === 'events' && <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <DashboardCard className="p-4">
              <h3 className="font-medium mb-3">Event Categories</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-ocean-teal/10 dark:bg-ocean-teal/20 rounded-lg border border-ocean-teal/30 dark:border-ocean-teal/30">
                  <span className="text-sm">All Events</span>
                  <span className="text-xs bg-ocean-teal text-white px-2 py-0.5 rounded-full">
                    {events.length}
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <span className="text-sm">Meetings</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                    1
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <span className="text-sm">Workshops</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                    1
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <span className="text-sm">Festivals</span>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                    1
                  </span>
                </div>
              </div>
            </DashboardCard>
            <DashboardCard className="p-4">
              <h3 className="font-medium mb-3">Calendar</h3>
              <div className="p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <button className="text-gray-500 dark:text-gray-400">
                    <ChevronLeftIcon className="h-5 w-5" />
                  </button>
                  <h4 className="text-sm font-medium">August 2023</h4>
                  <button className="text-gray-500 dark:text-gray-400">
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-xs mb-1">
                  <div>Su</div>
                  <div>Mo</div>
                  <div>Tu</div>
                  <div>We</div>
                  <div>Th</div>
                  <div>Fr</div>
                  <div>Sa</div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-xs">
                  {[...Array(31)].map((_, i) => {
                const day = i + 1;
                const hasEvent = [5, 20, 25].includes(day);
                return <div key={i} className={`p-1 rounded-full ${hasEvent ? 'bg-ocean-teal text-white' : day === 15 ? 'bg-gray-200 dark:bg-gray-700' : ''}`}>
                        {day}
                      </div>;
              })}
                </div>
              </div>
              <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center mb-1">
                  <div className="h-2 w-2 rounded-full bg-ocean-teal mr-2"></div>
                  <span>Event scheduled</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600 mr-2"></div>
                  <span>Today</span>
                </div>
              </div>
            </DashboardCard>
          </div>
          {/* Main content - events */}
          <div className="lg:col-span-3 space-y-6">
            <DashboardCard className="p-4">
              <h3 className="text-lg font-medium mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {events.map(event => <div key={event.id} className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-lg">{event.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Organized by {event.organizer}
                        </p>
                      </div>
                      <div className="text-center bg-ocean-teal/10 dark:bg-ocean-teal/20 text-ocean-teal dark:text-ocean-light p-2 rounded-lg">
                        <div className="text-sm font-medium">
                          {event.date.split(',')[0].split(' ')[1]}
                        </div>
                        <div className="text-lg font-bold">
                          {event.date.split(',')[0].split(' ')[0]}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-sm">
                        <CalendarIcon className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
                        <span>
                          {event.date} • {event.time}
                        </span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPinIcon className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <UsersIcon className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
                        <span>{event.attendees} people attending</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {event.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                      <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                        More Info
                      </button>
                      <button className="px-4 py-2 bg-ocean-teal text-white rounded-lg hover:bg-ocean-blue transition-colors">
                        Attend
                      </button>
                    </div>
                  </div>)}
              </div>
            </DashboardCard>
          </div>
        </div>}
      {/* Create Event Modal */}
      {showEventModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full mx-4 p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium">Create New Event</h3>
              <button onClick={() => setShowEventModal(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Event Title
                </label>
                <input className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ocean-teal dark:focus:ring-ocean-light transition-colors" placeholder="Enter event title" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Date
                  </label>
                  <input type="date" className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ocean-teal dark:focus:ring-ocean-light transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Time
                  </label>
                  <input type="time" className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ocean-teal dark:focus:ring-ocean-light transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Location
                </label>
                <input className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ocean-teal dark:focus:ring-ocean-light transition-colors" placeholder="Enter location" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Description
                </label>
                <textarea className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ocean-teal dark:focus:ring-ocean-light transition-colors" placeholder="Describe your event" rows={3}></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Category
                </label>
                <select className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ocean-teal dark:focus:ring-ocean-light transition-colors">
                  <option>Meeting</option>
                  <option>Workshop</option>
                  <option>Festival</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <button onClick={() => setShowEventModal(false)} className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none transition-colors">
                Cancel
              </button>
              <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-ocean-teal hover:bg-ocean-blue focus:outline-none transition-colors">
                Create Event
              </button>
            </div>
          </div>
        </div>}
    </div>;
}
// Helper components for icons
const ChevronLeftIcon = ({
  className
}) => {
  return <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>;
};