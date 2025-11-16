import React, { useState } from 'react';
import { UsersIcon, PlusIcon, SearchIcon, CalendarIcon, ImageIcon, PaperclipIcon, SendIcon, UserPlusIcon, UserIcon, MessageSquareIcon, ThumbsUpIcon, TrashIcon, MoreHorizontalIcon, FilterIcon, UploadIcon, ClockIcon, MapPinIcon, EditIcon } from 'lucide-react';
export function AdminCommunity() {
  const [activeTab, setActiveTab] = useState('posts');
  const [isAddPostOpen, setIsAddPostOpen] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postAttachments, setPostAttachments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGroup, setFilterGroup] = useState('all');
  const [isAddGroupOpen, setIsAddGroupOpen] = useState(false);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  // Mock community posts data
  const [posts, setPosts] = useState([{
    id: 1,
    author: {
      name: 'Admin LGU',
      role: 'Admin',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    title: 'New Fishing Regulations Announced',
    content: 'The Bureau of Fisheries has announced new regulations for sustainable fishing practices. All fishermen are required to attend the orientation session next week.',
    attachments: [{
      type: 'document',
      name: 'fishing_regulations_2023.pdf',
      size: '1.2 MB'
    }],
    timestamp: '2023-05-15T10:30:00',
    likes: 12,
    comments: 5,
    group: 'All Fishermen'
  }, {
    id: 2,
    author: {
      name: 'Admin LGU',
      role: 'Admin',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    title: 'Upcoming Training Workshop',
    content: 'We are organizing a training workshop on modern fishing techniques and equipment maintenance. The workshop will be held at the Community Center on May 25, 2023.',
    attachments: [{
      type: 'image',
      name: 'workshop_poster.jpg',
      size: '800 KB',
      url: 'https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }],
    timestamp: '2023-05-14T14:45:00',
    likes: 8,
    comments: 3,
    group: 'Batangas Fishing Association'
  }, {
    id: 3,
    author: {
      name: 'Admin LGU',
      role: 'Admin',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    title: 'Community Clean-up Drive',
    content: 'Join us for a coastal clean-up drive this Saturday. We will meet at the main pier at 7:00 AM. Cleaning materials will be provided, but please bring your own water bottle and snacks.',
    attachments: [],
    timestamp: '2023-05-13T09:15:00',
    likes: 15,
    comments: 7,
    group: 'All Fishermen'
  }]);
  // Mock groups data
  const groups = [{
    id: 1,
    name: 'Batangas Fishing Association',
    members: 78,
    description: 'Official group for registered fishermen in Batangas province.',
    isOfficial: true
  }, {
    id: 2,
    name: 'Palawan Fishermen Group',
    members: 45,
    description: 'Community of fishermen operating in Palawan waters.',
    isOfficial: true
  }, {
    id: 3,
    name: 'Mindoro Fishers Cooperative',
    members: 32,
    description: 'Cooperative group for sustainable fishing practices in Mindoro.',
    isOfficial: true
  }];
  // Mock events data
  const events = [{
    id: 1,
    title: "Annual Fishermen's Festival",
    date: '2023-06-15',
    time: '9:00 AM - 5:00 PM',
    location: 'Municipal Plaza, Batangas City',
    description: 'Annual celebration of the fishing community with competitions, food, and cultural presentations.',
    organizer: 'Local Government Unit',
    attendees: 120
  }, {
    id: 2,
    title: 'Sustainable Fishing Workshop',
    date: '2023-05-25',
    time: '1:00 PM - 4:00 PM',
    location: 'Community Center, Batangas City',
    description: 'Learn about sustainable fishing practices and new regulations.',
    organizer: 'Bureau of Fisheries',
    attendees: 45
  }, {
    id: 3,
    title: 'Boat Safety Training',
    date: '2023-06-02',
    time: '8:00 AM - 12:00 PM',
    location: "Fishermen's Wharf, Batangas City",
    description: 'Mandatory safety training for all registered boat operators.',
    organizer: 'Coast Guard',
    attendees: 65
  }];
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGroup = filterGroup === 'all' || post.group === filterGroup;
    return matchesSearch && matchesGroup;
  });
  const handleAddPost = () => {
    const newPost = {
      id: posts.length + 1,
      author: {
        name: 'Admin LGU',
        role: 'Admin',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      title: postTitle,
      content: postContent,
      attachments: postAttachments,
      timestamp: new Date().toISOString(),
      likes: 0,
      comments: 0,
      group: filterGroup === 'all' ? 'All Fishermen' : filterGroup
    };
    setPosts([newPost, ...posts]);
    setIsAddPostOpen(false);
    resetPostForm();
  };
  const resetPostForm = () => {
    setPostTitle('');
    setPostContent('');
    setPostAttachments([]);
  };
  const handleFileUpload = e => {
    const files = Array.from(e.target.files);
    // In a real app, you'd upload these files to a server
    // For this demo, we'll just store the file information
    const newAttachments = files.map(file => ({
      type: file.type.startsWith('image/') ? 'image' : 'document',
      name: file.name,
      size: `${(file.size / 1024).toFixed(1)} KB`,
      url: file.type.startsWith('image/') ? URL.createObjectURL(file) : null
    }));
    setPostAttachments([...postAttachments, ...newAttachments]);
  };
  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Community</h2>
          <p className="text-gray-600 mt-1">
            Manage community posts, groups, and events
          </p>
        </div>
        <div className="flex space-x-3">
          <button onClick={() => setIsAddPostOpen(true)} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none">
            <PlusIcon className="h-5 w-5 mr-2" />
            Create Post
          </button>
          <div className="relative inline-block">
            <button onClick={() => setIsAddEventOpen(true)} className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
              <CalendarIcon className="h-5 w-5 mr-2" />
              Create Event
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button onClick={() => setActiveTab('posts')} className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'posts' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <div className="flex items-center">
                <MessageSquareIcon className="h-5 w-5 mr-2" />
                <span>Community Posts</span>
              </div>
            </button>
            <button onClick={() => setActiveTab('groups')} className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'groups' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <div className="flex items-center">
                <UsersIcon className="h-5 w-5 mr-2" />
                <span>Fishing Groups</span>
              </div>
            </button>
            <button onClick={() => setActiveTab('events')} className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'events' ? 'border-teal-500 text-teal-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>Community Events</span>
              </div>
            </button>
          </nav>
        </div>
        {/* Community Posts Tab */}
        {activeTab === 'posts' && <div className="p-6">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Search posts..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
              </div>
              <div className="sm:w-64 flex items-center">
                <FilterIcon className="h-5 w-5 text-gray-400 mr-2" />
                <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md" value={filterGroup} onChange={e => setFilterGroup(e.target.value)}>
                  <option value="all">All Groups</option>
                  <option value="All Fishermen">General (All Fishermen)</option>
                  {groups.map(group => <option key={group.id} value={group.name}>
                      {group.name}
                    </option>)}
                </select>
              </div>
            </div>
            <div className="space-y-6">
              {filteredPosts.length > 0 ? filteredPosts.map(post => <div key={post.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    <div className="p-5">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center">
                          <img className="h-10 w-10 rounded-full" src={post.author.avatar} alt={post.author.name} />
                          <div className="ml-3">
                            <div className="flex items-center">
                              <p className="text-sm font-medium text-gray-900">
                                {post.author.name}
                              </p>
                              <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                                {post.author.role}
                              </span>
                            </div>
                            <p className="text-sm text-gray-500">
                              {formatDate(post.timestamp)} • Posted to:{' '}
                              {post.group}
                            </p>
                          </div>
                        </div>
                        <div className="relative">
                          <button className="text-gray-400 hover:text-gray-500">
                            <MoreHorizontalIcon className="h-5 w-5" />
                          </button>
                          {/* Dropdown menu would go here */}
                        </div>
                      </div>
                      <div className="mt-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                          {post.content}
                        </p>
                      </div>
                      {post.attachments.length > 0 && <div className="mt-4">
                          {post.attachments.map((attachment, index) => <div key={index} className="mt-2">
                              {attachment.type === 'image' ? <div className="relative">
                                  <img src={attachment.url || 'https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'} alt={attachment.name} className="w-full h-64 object-cover rounded-lg" />
                                </div> : <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                  <PaperclipIcon className="h-5 w-5 text-gray-400 mr-2" />
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                      {attachment.name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                      {attachment.size}
                                    </p>
                                  </div>
                                  <button className="ml-4 bg-white py-1 px-2 border border-gray-300 rounded-md text-xs font-medium text-gray-700 hover:bg-gray-50">
                                    Download
                                  </button>
                                </div>}
                            </div>)}
                        </div>}
                      <div className="mt-4 flex justify-between items-center pt-4 border-t border-gray-200">
                        <div className="flex space-x-4">
                          <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                            <ThumbsUpIcon className="h-4 w-4 mr-1" />
                            {post.likes} Likes
                          </button>
                          <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                            <MessageSquareIcon className="h-4 w-4 mr-1" />
                            {post.comments} Comments
                          </button>
                        </div>
                        <div className="flex items-center">
                          <button className="text-sm text-red-600 hover:text-red-800">
                            <TrashIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>) : <div className="text-center py-10">
                  <MessageSquareIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">
                    No posts found
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Get started by creating a new post.
                  </p>
                  <div className="mt-6">
                    <button onClick={() => setIsAddPostOpen(true)} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none">
                      <PlusIcon className="h-5 w-5 mr-2" />
                      Create New Post
                    </button>
                  </div>
                </div>}
            </div>
          </div>}
        {/* Fishing Groups Tab */}
        {activeTab === 'groups' && <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-gray-900">
                Fishing Groups & Organizations
              </h3>
              <button onClick={() => setIsAddGroupOpen(true)} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none">
                <UsersIcon className="h-5 w-5 mr-2" />
                Create New Group
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groups.map(group => <div key={group.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-medium text-gray-900">
                        {group.name}
                      </h4>
                      {group.isOfficial && <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                          Official
                        </span>}
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      {group.description}
                    </p>
                    <div className="mt-4 flex items-center">
                      <UsersIcon className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">
                        {group.members} members
                      </span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between">
                      <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                        <UserPlusIcon className="h-4 w-4 mr-1" />
                        Manage Members
                      </button>
                      <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                        <MessageSquareIcon className="h-4 w-4 mr-1" />
                        Post to Group
                      </button>
                    </div>
                  </div>
                </div>)}
              <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                <UsersIcon className="h-12 w-12 text-gray-400 mb-3" />
                <h3 className="text-sm font-medium text-gray-900">
                  Create a New Group
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Organize fishermen into groups for better communication and
                  coordination
                </p>
                <button onClick={() => setIsAddGroupOpen(true)} className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none">
                  <PlusIcon className="h-5 w-5 mr-2" />
                  Create Group
                </button>
              </div>
            </div>
          </div>}
        {/* Community Events Tab */}
        {activeTab === 'events' && <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-gray-900">
                Upcoming Community Events
              </h3>
              <button onClick={() => setIsAddEventOpen(true)} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none">
                <CalendarIcon className="h-5 w-5 mr-2" />
                Create New Event
              </button>
            </div>
            <div className="space-y-6">
              {events.map(event => <div key={event.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-medium text-gray-900">
                        {event.title}
                      </h4>
                      <div className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        {new Date(event.date) > new Date() ? 'Upcoming' : 'Past'}
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center text-sm text-gray-500">
                          <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
                          <span>
                            {new Date(event.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                          </span>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <MapPinIcon className="h-5 w-5 text-gray-400 mr-2" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">
                          {event.description}
                        </p>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <UserIcon className="h-5 w-5 text-gray-400 mr-2" />
                          <span>Organizer: {event.organizer}</span>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <UsersIcon className="h-5 w-5 text-gray-400 mr-2" />
                          <span>{event.attendees} attending</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200 flex justify-end space-x-3">
                      <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                        <UsersIcon className="h-4 w-4 mr-1" />
                        Manage Attendees
                      </button>
                      <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                        <EditIcon className="h-4 w-4 mr-1" />
                        Edit Event
                      </button>
                      <button className="inline-flex items-center px-3 py-1.5 border border-red-300 text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none">
                        <TrashIcon className="h-4 w-4 mr-1" />
                        Cancel Event
                      </button>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>}
      </div>
      {/* Create Post Modal */}
      {isAddPostOpen && <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setIsAddPostOpen(false)}></div>
          <div className="relative bg-white rounded-lg max-w-2xl w-full mx-auto p-6 shadow-xl">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Create New Community Post
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="post-title" className="block text-sm font-medium text-gray-700">
                  Post Title
                </label>
                <input type="text" id="post-title" value={postTitle} onChange={e => setPostTitle(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Enter a title for your post" />
              </div>
              <div>
                <label htmlFor="post-content" className="block text-sm font-medium text-gray-700">
                  Post Content
                </label>
                <textarea id="post-content" rows={4} value={postContent} onChange={e => setPostContent(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" placeholder="Write your post content here..."></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Post To
                </label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md" value={filterGroup === 'all' ? 'All Fishermen' : filterGroup} onChange={e => setFilterGroup(e.target.value)}>
                  <option value="All Fishermen">All Fishermen</option>
                  {groups.map(group => <option key={group.id} value={group.name}>
                      {group.name}
                    </option>)}
                </select>
              </div>
              {postAttachments.length > 0 && <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Attachments
                  </label>
                  <div className="space-y-2">
                    {postAttachments.map((attachment, index) => <div key={index} className="flex items-center p-2 bg-gray-50 rounded-md">
                        {attachment.type === 'image' ? <ImageIcon className="h-5 w-5 text-gray-400 mr-2" /> : <PaperclipIcon className="h-5 w-5 text-gray-400 mr-2" />}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {attachment.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {attachment.size}
                          </p>
                        </div>
                        <button type="button" className="ml-2 text-gray-400 hover:text-gray-500" onClick={() => setPostAttachments(postAttachments.filter((_, i) => i !== index))}>
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </div>)}
                  </div>
                </div>}
              <div className="flex justify-between pt-4">
                <div className="flex space-x-2">
                  <label className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                    <ImageIcon className="h-4 w-4 mr-1" />
                    Add Image
                    <input type="file" className="sr-only" accept="image/*" onChange={handleFileUpload} />
                  </label>
                  <label className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                    <PaperclipIcon className="h-4 w-4 mr-1" />
                    Add File
                    <input type="file" className="sr-only" onChange={handleFileUpload} />
                  </label>
                </div>
                <div className="flex space-x-3">
                  <button type="button" onClick={() => {
                setIsAddPostOpen(false);
                resetPostForm();
              }} className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                    Cancel
                  </button>
                  <button type="button" onClick={handleAddPost} disabled={!postTitle || !postContent} className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none disabled:bg-gray-300 disabled:cursor-not-allowed">
                    <SendIcon className="h-4 w-4 mr-2 inline-block" />
                    Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>}
      {/* Create Group Modal - Would be implemented similarly to the Post modal */}
      {isAddGroupOpen && <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setIsAddGroupOpen(false)}></div>
          <div className="relative bg-white rounded-lg max-w-lg w-full mx-auto p-6 shadow-xl">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Create New Fishing Group
            </h3>
            <form className="space-y-4">
              {/* Form fields would go here */}
              <div className="flex justify-end space-x-3 pt-4">
                <button type="button" onClick={() => setIsAddGroupOpen(false)} className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                  Cancel
                </button>
                <button type="button" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none">
                  Create Group
                </button>
              </div>
            </form>
          </div>
        </div>}
      {/* Create Event Modal - Would be implemented similarly to the Post modal */}
      {isAddEventOpen && <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setIsAddEventOpen(false)}></div>
          <div className="relative bg-white rounded-lg max-w-lg w-full mx-auto p-6 shadow-xl">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Create New Community Event
            </h3>
            <form className="space-y-4">
              {/* Form fields would go here */}
              <div className="flex justify-end space-x-3 pt-4">
                <button type="button" onClick={() => setIsAddEventOpen(false)} className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
                  Cancel
                </button>
                <button type="button" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none">
                  Create Event
                </button>
              </div>
            </form>
          </div>
        </div>}
    </div>;
}