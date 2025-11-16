import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { MessageSquareIcon, CheckCircleIcon, XCircleIcon, AlertTriangleIcon, SearchIcon, FilterIcon, UserIcon, ClockIcon, StarIcon, ThumbsUpIcon, ThumbsDownIcon, SendIcon, ChevronDownIcon, ChevronUpIcon, PlusCircleIcon, TagIcon, BarChart2Icon, MailIcon, TrendingUpIcon, TrendingDownIcon } from 'lucide-react';
export const SupportFeedback: React.FC = () => {
  const {
    darkMode
  } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [selectedTicket, setSelectedTicket] = useState<number | null>(1); // Default to first ticket
  const [replyText, setReplyText] = useState('');
  const [expandedFeedback, setExpandedFeedback] = useState<number | null>(null);
  // Mock support tickets
  const tickets = [{
    id: 1,
    subject: 'Cannot update my boat registration',
    user: 'Juan Dela Cruz',
    userAvatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    userType: 'Fisher',
    region: 'MIMAROPA',
    status: 'Open',
    priority: 'Medium',
    category: 'Account',
    created: '2023-06-15 09:45',
    lastUpdated: '2023-06-16 14:22',
    messages: [{
      id: 101,
      from: 'user',
      name: 'Juan Dela Cruz',
      avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
      content: "I'm trying to update my boat registration details but I keep getting an error message saying 'Unable to update at this time'. I've been trying for the past 2 days but no success. Can you help?",
      timestamp: '2023-06-15 09:45'
    }, {
      id: 102,
      from: 'agent',
      name: 'Maria Santos',
      avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
      content: "Hello Juan, I'm sorry you're experiencing this issue. Can you please provide me with your boat registration number and a screenshot of the error message you're seeing?",
      timestamp: '2023-06-15 10:15'
    }, {
      id: 103,
      from: 'user',
      name: 'Juan Dela Cruz',
      avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
      content: "My boat registration number is PL-2023-0123. I'm attaching a screenshot of the error message.",
      timestamp: '2023-06-15 11:30'
    }, {
      id: 104,
      from: 'agent',
      name: 'Maria Santos',
      avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
      content: "Thank you for providing that information. I've checked your account and there seems to be a technical issue with the system. I've forwarded this to our technical team and they're working on it. We'll get back to you as soon as it's resolved.",
      timestamp: '2023-06-16 14:22'
    }]
  }, {
    id: 2,
    subject: 'Insurance claim status inquiry',
    user: 'Maria Santos',
    userAvatar: 'https://randomuser.me/api/portraits/women/11.jpg',
    userType: 'Fisher',
    region: 'Central Visayas',
    status: 'In Progress',
    priority: 'High',
    category: 'Insurance',
    created: '2023-06-14 15:30',
    lastUpdated: '2023-06-15 16:45',
    messages: [{
      id: 201,
      from: 'user',
      name: 'Maria Santos',
      avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
      content: "I submitted an insurance claim (CLM-2023-0014) for medical expenses 5 days ago but haven't heard anything back. Could you please check the status of my claim?",
      timestamp: '2023-06-14 15:30'
    }, {
      id: 202,
      from: 'agent',
      name: 'Eduardo Lim',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
      content: "Hello Maria, thank you for reaching out. I'll check on your claim status right away.",
      timestamp: '2023-06-14 16:10'
    }, {
      id: 203,
      from: 'agent',
      name: 'Eduardo Lim',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
      content: "I've checked your claim (CLM-2023-0014) and it's currently under review by our medical assessment team. They typically take 7-10 business days to complete their review. I've marked your claim as priority, so you should receive an update within the next 2 business days.",
      timestamp: '2023-06-15 16:45'
    }]
  }, {
    id: 3,
    subject: 'Weather alert not working',
    user: 'Pedro Reyes',
    userAvatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    userType: 'Fisher',
    region: 'CALABARZON',
    status: 'Closed',
    priority: 'Low',
    category: 'App',
    created: '2023-06-10 08:15',
    lastUpdated: '2023-06-12 11:20',
    messages: [{
      id: 301,
      from: 'user',
      name: 'Pedro Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
      content: "I'm not receiving any weather alerts on my phone even though I've enabled them in the settings. This is concerning as I need to know about weather conditions before heading out to sea.",
      timestamp: '2023-06-10 08:15'
    }, {
      id: 302,
      from: 'agent',
      name: 'Ana Reyes',
      avatar: 'https://randomuser.me/api/portraits/women/13.jpg',
      content: "Hello Pedro, I'm sorry to hear you're having trouble with weather alerts. Let's troubleshoot this issue. Could you please tell me what type of phone you're using and confirm that you've granted the app permission to send notifications?",
      timestamp: '2023-06-10 09:30'
    }, {
      id: 303,
      from: 'user',
      name: 'Pedro Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
      content: "I'm using a Samsung Galaxy A52. I've checked and notifications are enabled for the app in my phone settings.",
      timestamp: '2023-06-11 10:15'
    }, {
      id: 304,
      from: 'agent',
      name: 'Ana Reyes',
      avatar: 'https://randomuser.me/api/portraits/women/13.jpg',
      content: "Thank you for that information. There seems to be a known issue with notifications on some Samsung devices. Please try the following: 1) Go to your phone Settings > Apps > AquaSure > Battery > and set to 'Unrestricted'. This prevents the system from optimizing battery usage which can sometimes block notifications. Let me know if this resolves the issue.",
      timestamp: '2023-06-11 11:45'
    }, {
      id: 305,
      from: 'user',
      name: 'Pedro Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
      content: 'That worked! I just received a test weather alert. Thank you for your help!',
      timestamp: '2023-06-12 10:30'
    }, {
      id: 306,
      from: 'agent',
      name: 'Ana Reyes',
      avatar: 'https://randomuser.me/api/portraits/women/13.jpg',
      content: "Excellent! I'm glad that resolved the issue. If you have any other questions or concerns, please don't hesitate to reach out. I'll close this ticket now, but feel free to respond if the issue returns.",
      timestamp: '2023-06-12 11:20'
    }]
  }];
  // Mock feedback data
  const feedback = [{
    id: 1,
    type: 'App',
    rating: 4,
    comment: 'The app is very useful for checking weather conditions and tracking my insurance. I especially like the GPS tracking feature. However, it would be great if the app could work offline for basic features since we often lose signal at sea.',
    user: 'Juan Dela Cruz',
    userAvatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    date: '2023-06-15',
    region: 'MIMAROPA',
    status: 'Reviewed'
  }, {
    id: 2,
    type: 'Insurance',
    rating: 5,
    comment: 'The insurance claim process was quick and easy. I received my payout within a week of approval. The staff was very helpful throughout the process.',
    user: 'Maria Santos',
    userAvatar: 'https://randomuser.me/api/portraits/women/11.jpg',
    date: '2023-06-14',
    region: 'Central Visayas',
    status: 'Pending'
  }, {
    id: 3,
    type: 'Support',
    rating: 2,
    comment: 'I had to wait too long to get a response from support. It took 3 days before anyone replied to my query about registration issues.',
    user: 'Pedro Reyes',
    userAvatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    date: '2023-06-12',
    region: 'CALABARZON',
    status: 'Reviewed'
  }, {
    id: 4,
    type: 'Weather',
    rating: 5,
    comment: "The weather alerts are accurate and timely. They've saved me from heading out during dangerous conditions several times. Great feature!",
    user: 'Ana Lim',
    userAvatar: 'https://randomuser.me/api/portraits/women/13.jpg',
    date: '2023-06-10',
    region: 'Davao Region',
    status: 'Pending'
  }];
  // Filter tickets based on search and filters
  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) || ticket.user.toLowerCase().includes(searchTerm.toLowerCase()) || ticket.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || ticket.status === filterStatus;
    const matchesType = filterType === 'all' || ticket.category === filterType;
    return matchesSearch && matchesStatus && matchesType;
  });
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Open':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>
            Open
          </span>;
      case 'In Progress':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800'}`}>
            In Progress
          </span>;
      case 'Closed':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
            Closed
          </span>;
      case 'Pending':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800'}`}>
            Pending
          </span>;
      case 'Reviewed':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
            Reviewed
          </span>;
      default:
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
            {status}
          </span>;
    }
  };
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'High':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'}`}>
            High
          </span>;
      case 'Medium':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800'}`}>
            Medium
          </span>;
      case 'Low':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
            Low
          </span>;
      default:
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
            {priority}
          </span>;
    }
  };
  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'Account':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800'}`}>
            Account
          </span>;
      case 'Insurance':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-800'}`}>
            Insurance
          </span>;
      case 'App':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-100 text-teal-800'}`}>
            App
          </span>;
      case 'Weather':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-cyan-900/30 text-cyan-400' : 'bg-cyan-100 text-cyan-800'}`}>
            Weather
          </span>;
      case 'Support':
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-orange-900/30 text-orange-400' : 'bg-orange-100 text-orange-800'}`}>
            Support
          </span>;
      default:
        return <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
            {category}
          </span>;
    }
  };
  const renderStars = (rating: number) => {
    return <div className="flex">
        {Array.from({
        length: 5
      }, (_, i) => <StarIcon key={i} className={`h-4 w-4 ${i < rating ? darkMode ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-500 fill-yellow-500' : darkMode ? 'text-gray-600' : 'text-gray-300'}`} />)}
      </div>;
  };
  const handleSendReply = () => {
    if (replyText.trim()) {
      // In a real app, this would send the reply to the backend
      console.log('Sending reply:', replyText);
      setReplyText('');
    }
  };
  return <div>
      <div className="mb-6">
        <h1 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
          Support & Feedback
        </h1>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Manage support tickets and user feedback
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 rounded-lg border transition-colors duration-300`}>
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
              <MessageSquareIcon className="h-6 w-6" />
            </div>
            <div className="ml-3">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Open Tickets
              </p>
              <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                {tickets.filter(t => t.status === 'Open' || t.status === 'In Progress').length}
              </p>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {tickets.filter(t => t.priority === 'High').length} high
                priority
              </p>
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 rounded-lg border transition-colors duration-300`}>
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'}`}>
              <CheckCircleIcon className="h-6 w-6" />
            </div>
            <div className="ml-3">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Resolved Today
              </p>
              <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                12
              </p>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Avg. resolution time: 1.5 hours
              </p>
            </div>
          </div>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-4 rounded-lg border transition-colors duration-300`}>
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-600'}`}>
              <StarIcon className="h-6 w-6" />
            </div>
            <div className="ml-3">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Feedback Rating
              </p>
              <p className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                4.2/5
              </p>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Based on {feedback.length} reviews
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Support Tickets Section */}
        <div className="lg:col-span-2">
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300 mb-6`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Support Tickets
              </h2>
              <button className={`inline-flex items-center px-3 py-1.5 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} text-sm font-medium rounded-md`}>
                <PlusCircleIcon className="h-4 w-4 mr-1" />
                New Ticket
              </button>
            </div>
            <div className="mb-4 flex flex-col sm:flex-row gap-2">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className={`h-5 w-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                </div>
                <input type="text" placeholder="Search tickets..." className={`block w-full pl-10 pr-3 py-2 border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'border-gray-300 text-gray-900 placeholder-gray-500'} rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm transition-colors duration-300`} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="relative">
                  <select className={`block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300 text-gray-900'} focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md transition-colors duration-300`} value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                    <option value="all">All Status</option>
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
                <div className="relative">
                  <select className={`block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300 text-gray-900'} focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md transition-colors duration-300`} value={filterType} onChange={e => setFilterType(e.target.value)}>
                    <option value="all">All Categories</option>
                    <option value="Account">Account</option>
                    <option value="Insurance">Insurance</option>
                    <option value="App">App</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto mb-4">
              <table className={`min-w-full divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'} transition-colors duration-300`}>
                <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors duration-300`}>
                  <tr>
                    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                      Ticket
                    </th>
                    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                      User
                    </th>
                    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                      Status
                    </th>
                    <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider transition-colors duration-300`}>
                      Last Updated
                    </th>
                  </tr>
                </thead>
                <tbody className={`${darkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'} transition-colors duration-300`}>
                  {filteredTickets.map(ticket => <tr key={ticket.id} className={`${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} ${selectedTicket === ticket.id ? darkMode ? 'bg-blue-900/20' : 'bg-blue-50' : ''} transition-colors duration-200 cursor-pointer`} onClick={() => setSelectedTicket(ticket.id)}>
                      <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                        <div className="flex items-start">
                          <div className={`flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                            <MessageSquareIcon className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                          </div>
                          <div className="ml-4">
                            <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                              {ticket.subject}
                            </div>
                            <div className="flex space-x-2 mt-1">
                              {getPriorityBadge(ticket.priority)}
                              {getCategoryBadge(ticket.category)}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                        <div className="flex items-center">
                          <div className="h-8 w-8 flex-shrink-0">
                            <img className="h-8 w-8 rounded-full" src={ticket.userAvatar} alt={ticket.user} />
                          </div>
                          <div className="ml-3">
                            <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} transition-colors duration-300`}>
                              {ticket.user}
                            </div>
                            <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                              {ticket.region}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap transition-colors duration-300`}>
                        {getStatusBadge(ticket.status)}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-300' : 'text-gray-500'} transition-colors duration-300`}>
                        {ticket.lastUpdated}
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>
          {/* Selected Ticket Detail */}
          {selectedTicket && <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
              {tickets.filter(t => t.id === selectedTicket).map(ticket => <div key={ticket.id}>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                          {ticket.subject}
                        </h3>
                        <div className="flex items-center mt-1 space-x-2">
                          {getStatusBadge(ticket.status)}
                          {getPriorityBadge(ticket.priority)}
                          {getCategoryBadge(ticket.category)}
                          <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Ticket #{ticket.id}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        {ticket.status !== 'Closed' && <button className={`inline-flex items-center px-3 py-1.5 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} text-sm font-medium rounded-md`}>
                            <TagIcon className="h-4 w-4 mr-1" />
                            Change Status
                          </button>}
                        {ticket.status !== 'Closed' && <button className={`inline-flex items-center px-3 py-1.5 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} text-sm font-medium rounded-md`}>
                            <MailIcon className="h-4 w-4 mr-1" />
                            Email User
                          </button>}
                      </div>
                    </div>
                    <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} pt-4 mb-4`}>
                      <div className="flex justify-between items-center mb-2">
                        <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                          Conversation
                        </h4>
                        <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          Created: {ticket.created}
                        </span>
                      </div>
                      <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                        {ticket.messages.map(message => <div key={message.id} className={`flex ${message.from === 'user' ? 'justify-start' : 'justify-end'}`}>
                            <div className={`max-w-lg rounded-lg p-4 ${message.from === 'user' ? darkMode ? 'bg-gray-700' : 'bg-gray-100' : darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                              <div className="flex items-center mb-2">
                                <div className="h-8 w-8 flex-shrink-0">
                                  <img className="h-8 w-8 rounded-full" src={message.avatar} alt={message.name} />
                                </div>
                                <div className="ml-2">
                                  <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                                    {message.name}
                                  </div>
                                  <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {message.timestamp}
                                  </div>
                                </div>
                              </div>
                              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {message.content}
                              </p>
                            </div>
                          </div>)}
                      </div>
                    </div>
                    {ticket.status !== 'Closed' && <div className="mt-4">
                        <div className="mb-2">
                          <label htmlFor="reply" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Reply
                          </label>
                        </div>
                        <div className="relative">
                          <textarea id="reply" rows={3} className={`block w-full px-3 py-2 border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'border-gray-300 text-gray-900 placeholder-gray-500'} rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm transition-colors duration-300`} placeholder="Type your reply here..." value={replyText} onChange={e => setReplyText(e.target.value)} />
                          <button className={`absolute bottom-2 right-2 inline-flex items-center justify-center p-2 rounded-full ${darkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`} onClick={handleSendReply}>
                            <SendIcon className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="flex justify-end mt-2">
                          <button className={`inline-flex items-center px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} text-sm font-medium rounded-md mr-2`}>
                            Save Draft
                          </button>
                          <button className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600 hover:bg-green-700'}`}>
                            <CheckCircleIcon className="h-4 w-4 mr-2" />
                            Resolve & Close
                          </button>
                        </div>
                      </div>}
                  </div>)}
            </div>}
        </div>
        {/* Feedback Section */}
        <div className="lg:col-span-1">
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300 mb-6`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                User Feedback
              </h2>
              <div className="flex items-center">
                <BarChart2Icon className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-1`} />
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Insights
                </span>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Overall Rating
                </span>
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  4.2/5
                </span>
              </div>
              <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5`}>
                <div className={`${darkMode ? 'bg-yellow-500' : 'bg-yellow-500'} h-2.5 rounded-full`} style={{
                width: '84%'
              }}></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} p-3 rounded-lg transition-colors duration-300`}>
                <div className="flex items-center mb-1">
                  <ThumbsUpIcon className={`h-4 w-4 ${darkMode ? 'text-green-400' : 'text-green-600'} mr-1`} />
                  <span className={`text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Positive
                  </span>
                </div>
                <p className={`text-lg font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  75%
                </p>
              </div>
              <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} p-3 rounded-lg transition-colors duration-300`}>
                <div className="flex items-center mb-1">
                  <ThumbsDownIcon className={`h-4 w-4 ${darkMode ? 'text-red-400' : 'text-red-600'} mr-1`} />
                  <span className={`text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Negative
                  </span>
                </div>
                <p className={`text-lg font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  25%
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {feedback.map(item => <div key={item.id} className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} p-4 rounded-lg transition-colors duration-300`}>
                  <div className="flex justify-between">
                    <div className="flex items-start">
                      <div className="h-8 w-8 flex-shrink-0">
                        <img className="h-8 w-8 rounded-full" src={item.userAvatar} alt={item.user} />
                      </div>
                      <div className="ml-3">
                        <div className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                          {item.user}
                        </div>
                        <div className="flex items-center mt-1">
                          {renderStars(item.rating)}
                          <span className={`ml-2 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {item.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => setExpandedFeedback(expandedFeedback === item.id ? null : item.id)} className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}>
                      {expandedFeedback === item.id ? <ChevronUpIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} /> : <ChevronDownIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />}
                    </button>
                  </div>
                  <div className="mt-2 flex space-x-2">
                    {getCategoryBadge(item.type)}
                    {getStatusBadge(item.status)}
                  </div>
                  {(expandedFeedback === item.id || item.comment.length < 100) && <p className={`mt-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.comment}
                    </p>}
                  {expandedFeedback !== item.id && item.comment.length >= 100 && <p className={`mt-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {item.comment.substring(0, 100)}...
                      </p>}
                  {expandedFeedback === item.id && <div className="mt-3 flex justify-end space-x-2">
                      <button className={`px-2 py-1 text-xs font-medium rounded ${darkMode ? 'bg-gray-600 text-gray-200 hover:bg-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                        Reply
                      </button>
                      {item.status !== 'Reviewed' && <button className={`px-2 py-1 text-xs font-medium rounded ${darkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                          Mark as Reviewed
                        </button>}
                    </div>}
                </div>)}
              <button className={`w-full mt-2 px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} shadow-sm text-sm font-medium rounded-md focus:outline-none transition-colors duration-300`}>
                View All Feedback
              </button>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} p-6 rounded-lg border transition-colors duration-300`}>
            <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
              Common Issues
            </h2>
            <div className="space-y-3">
              {[{
              issue: 'App login problems',
              count: 24,
              trend: 'up'
            }, {
              issue: 'Insurance claim delays',
              count: 18,
              trend: 'down'
            }, {
              issue: 'Weather alert not received',
              count: 15,
              trend: 'up'
            }, {
              issue: 'Boat registration errors',
              count: 12,
              trend: 'down'
            }, {
              issue: 'Payment processing issues',
              count: 8,
              trend: 'down'
            }].map((issue, index) => <div key={index} className={`flex items-center justify-between p-3 ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} rounded-lg`}>
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {issue.issue}
                  </span>
                  <div className="flex items-center">
                    <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'} mr-2`}>
                      {issue.count}
                    </span>
                    {issue.trend === 'up' ? <TrendingUpIcon className={`h-4 w-4 ${darkMode ? 'text-red-400' : 'text-red-600'}`} /> : <TrendingDownIcon className={`h-4 w-4 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />}
                  </div>
                </div>)}
            </div>
            <div className="mt-4">
              <button className={`w-full px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} shadow-sm text-sm font-medium rounded-md focus:outline-none transition-colors duration-300`}>
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};