import React, { useState } from 'react';
import { MegaphoneIcon, PlusIcon, SearchIcon, FilterIcon, EditIcon, TrashIcon, ClockIcon, SendIcon, PaperclipIcon, ImageIcon, UploadIcon, ExternalLinkIcon, CheckIcon, XIcon, EyeIcon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
export function AdminAnnouncement() {
  const [isAddAnnouncementOpen, setIsAddAnnouncementOpen] = useState(false);
  const [announcementTitle, setAnnouncementTitle] = useState('');
  const [announcementContent, setAnnouncementContent] = useState('');
  const [announcementAttachments, setAnnouncementAttachments] = useState([]);
  const [announcementPriority, setAnnouncementPriority] = useState('normal');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPriority, setFilterPriority] = useState('all');
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const {
    darkMode
  } = useTheme();
  // Mock announcements data
  const [announcements, setAnnouncements] = useState([{
    id: 1,
    title: 'New Fisheries Code Implementation',
    content: 'The Bureau of Fisheries and Aquatic Resources (BFAR) is implementing the updated Fisheries Code starting June 1, 2023. All fishermen are required to comply with the new regulations. Please attend the orientation session at the Municipal Hall on May 25, 2023.',
    priority: 'high',
    status: 'published',
    publishedAt: '2023-05-15T10:00:00',
    author: 'Admin LGU',
    views: 245,
    attachments: [{
      type: 'document',
      name: 'fisheries_code_2023.pdf',
      size: '2.3 MB'
    }]
  }, {
    id: 2,
    title: 'Fishing License Renewal Notice',
    content: 'This is a reminder that fishing licenses for the year 2023-2024 must be renewed by July 31, 2023. Please visit the Municipal Fisheries Office with your old license, valid ID, and boat registration documents.',
    priority: 'normal',
    status: 'published',
    publishedAt: '2023-05-10T14:30:00',
    author: 'Admin LGU',
    views: 187,
    attachments: [{
      type: 'document',
      name: 'license_renewal_requirements.pdf',
      size: '1.1 MB'
    }]
  }, {
    id: 3,
    title: 'Coastal Clean-up Drive Announcement',
    content: 'In celebration of Ocean Month, the LGU is organizing a coastal clean-up drive on June 10, 2023, from 6:00 AM to 10:00 AM. All fishing communities are encouraged to participate. Assembly point will be at the Municipal Pier.',
    priority: 'normal',
    status: 'published',
    publishedAt: '2023-05-05T09:15:00',
    author: 'Admin LGU',
    views: 156,
    attachments: [{
      type: 'image',
      name: 'coastal_cleanup_poster.jpg',
      size: '1.5 MB',
      url: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }]
  }, {
    id: 4,
    title: 'Subsidized Fishing Equipment Program',
    content: "The Department of Agriculture in partnership with the LGU is launching a subsidized fishing equipment program for registered fishermen. Applications will be accepted from May 20 to June 20, 2023. Please prepare your fisherman's ID and proof of residence.",
    priority: 'high',
    status: 'draft',
    publishedAt: null,
    author: 'Admin LGU',
    views: 0,
    attachments: []
  }]);
  const filteredAnnouncements = announcements.filter(announcement => {
    const matchesSearch = announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) || announcement.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority = filterPriority === 'all' || announcement.priority === filterPriority;
    return matchesSearch && matchesPriority;
  });
  const handleCreateAnnouncement = () => {
    const newAnnouncement = {
      id: announcements.length + 1,
      title: announcementTitle,
      content: announcementContent,
      priority: announcementPriority,
      status: 'published',
      publishedAt: new Date().toISOString(),
      author: 'Admin LGU',
      views: 0,
      attachments: announcementAttachments
    };
    setAnnouncements([newAnnouncement, ...announcements]);
    setIsAddAnnouncementOpen(false);
    resetForm();
  };
  const resetForm = () => {
    setAnnouncementTitle('');
    setAnnouncementContent('');
    setAnnouncementAttachments([]);
    setAnnouncementPriority('normal');
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
    setAnnouncementAttachments([...announcementAttachments, ...newAttachments]);
  };
  const handleDeleteAnnouncement = id => {
    setAnnouncements(announcements.filter(announcement => announcement.id !== id));
    if (selectedAnnouncement && selectedAnnouncement.id === id) {
      setSelectedAnnouncement(null);
    }
  };
  const handlePublishDraft = id => {
    setAnnouncements(announcements.map(announcement => announcement.id === id ? {
      ...announcement,
      status: 'published',
      publishedAt: new Date().toISOString()
    } : announcement));
    if (selectedAnnouncement && selectedAnnouncement.id === id) {
      setSelectedAnnouncement({
        ...selectedAnnouncement,
        status: 'published',
        publishedAt: new Date().toISOString()
      });
    }
  };
  const formatDate = dateString => {
    if (!dateString) return 'Not published';
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
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
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            Announcements
          </h2>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
            Create and manage official announcements for fishermen
          </p>
        </div>
        <button onClick={() => setIsAddAnnouncementOpen(true)} className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-600 hover:bg-teal-700'} focus:outline-none transition-colors duration-300`}>
          <PlusIcon className="h-5 w-5 mr-2" />
          Create Announcement
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white shadow'} rounded-lg mb-6 transition-colors duration-300`}>
            <div className={`p-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-300`}>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
                  </div>
                  <input type="text" className={`block w-full pl-10 pr-3 py-2 border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:placeholder-gray-300 focus:ring-teal-500 focus:border-teal-500' : 'bg-white border-gray-300 placeholder-gray-500 focus:placeholder-gray-400 focus:ring-teal-500 focus:border-teal-500'} rounded-md leading-5 sm:text-sm transition-colors duration-300`} placeholder="Search announcements..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                </div>
                <div className="sm:w-64 flex items-center">
                  <FilterIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'} mr-2`} />
                  <select className={`block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:outline-none focus:ring-teal-500 focus:border-teal-500' : 'border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500'} sm:text-sm rounded-md transition-colors duration-300`} value={filterPriority} onChange={e => setFilterPriority(e.target.value)}>
                    <option value="all">All Priorities</option>
                    <option value="high">High Priority</option>
                    <option value="normal">Normal Priority</option>
                    <option value="low">Low Priority</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {filteredAnnouncements.length > 0 ? filteredAnnouncements.map(announcement => <div key={announcement.id} className={`p-4 border rounded-lg ${selectedAnnouncement && selectedAnnouncement.id === announcement.id ? darkMode ? 'border-teal-600 bg-teal-900/20' : 'border-teal-300 bg-teal-50' : darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'} cursor-pointer transition-colors duration-300`} onClick={() => setSelectedAnnouncement(announcement)}>
                      <div className="flex items-start">
                        <div className={`flex-shrink-0 rounded-full p-2 ${announcement.priority === 'high' ? darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-600' : announcement.priority === 'normal' ? darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600' : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                          <MegaphoneIcon className="h-5 w-5" />
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                              {announcement.title}
                            </h3>
                            <div className="flex items-center">
                              {announcement.status === 'draft' ? <span className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800'} mr-2`}>
                                  Draft
                                </span> : null}
                              <span className={`px-2 py-1 text-xs rounded-full ${announcement.priority === 'high' ? darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800' : announcement.priority === 'normal' ? darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800' : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
                                {announcement.priority === 'high' ? 'High Priority' : announcement.priority === 'normal' ? 'Normal Priority' : 'Low Priority'}
                              </span>
                            </div>
                          </div>
                          <div className={`mt-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} line-clamp-2`}>
                            {announcement.content}
                          </div>
                          <div className="mt-2 flex justify-between items-center">
                            <div className={`flex items-center text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              <ClockIcon className="h-4 w-4 mr-1" />
                              {formatDate(announcement.publishedAt)}
                              {announcement.status === 'published' && <>
                                  <EyeIcon className="h-4 w-4 ml-3 mr-1" />
                                  {announcement.views} views
                                </>}
                            </div>
                            <div className="flex space-x-2">
                              {announcement.status === 'draft' && <button onClick={e => {
                          e.stopPropagation();
                          handlePublishDraft(announcement.id);
                        }} className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>
                                  <SendIcon className="h-4 w-4" />
                                </button>}
                              <button onClick={e => {
                          e.stopPropagation();
                          handleDeleteAnnouncement(announcement.id);
                        }} className={`${darkMode ? 'text-gray-400 hover:text-red-400' : 'text-gray-400 hover:text-red-500'}`}>
                                <TrashIcon className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>) : <div className="text-center py-10">
                    <MegaphoneIcon className={`mx-auto h-12 w-12 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                    <h3 className={`mt-2 text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                      No announcements found
                    </h3>
                    <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Get started by creating a new announcement.
                    </p>
                    <div className="mt-6">
                      <button onClick={() => setIsAddAnnouncementOpen(true)} className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-600 hover:bg-teal-700'} focus:outline-none transition-colors duration-300`}>
                        <PlusIcon className="h-5 w-5 mr-2" />
                        Create New Announcement
                      </button>
                    </div>
                  </div>}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          {selectedAnnouncement ? <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white shadow'} rounded-lg p-6 transition-colors duration-300`}>
              <div className="flex justify-between items-start mb-4">
                <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  Announcement Details
                </h3>
                <div className="flex space-x-2">
                  <button className={`${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-400 hover:text-blue-500'}`}>
                    <EditIcon className="h-5 w-5" />
                  </button>
                  <button onClick={() => handleDeleteAnnouncement(selectedAnnouncement.id)} className={`${darkMode ? 'text-gray-400 hover:text-red-400' : 'text-gray-400 hover:text-red-500'}`}>
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Title
                  </p>
                  <p className={`mt-1 text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {selectedAnnouncement.title}
                  </p>
                </div>
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Content
                  </p>
                  <p className={`mt-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                    {selectedAnnouncement.content}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Status
                    </p>
                    <span className={`mt-1 inline-flex px-2 py-1 text-xs font-medium rounded-full ${selectedAnnouncement.status === 'published' ? darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800' : darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-100 text-yellow-800'}`}>
                      {selectedAnnouncement.status === 'published' ? 'Published' : 'Draft'}
                    </span>
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Priority
                    </p>
                    <span className={`mt-1 inline-flex px-2 py-1 text-xs font-medium rounded-full ${selectedAnnouncement.priority === 'high' ? darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800' : selectedAnnouncement.priority === 'normal' ? darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-800' : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
                      {selectedAnnouncement.priority === 'high' ? 'High Priority' : selectedAnnouncement.priority === 'normal' ? 'Normal Priority' : 'Low Priority'}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Published
                    </p>
                    <p className={`mt-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                      {formatDate(selectedAnnouncement.publishedAt)}
                    </p>
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Author
                    </p>
                    <p className={`mt-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                      {selectedAnnouncement.author}
                    </p>
                  </div>
                </div>
                {selectedAnnouncement.attachments.length > 0 && <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-2`}>
                      Attachments
                    </p>
                    <div className="space-y-2">
                      {selectedAnnouncement.attachments.map((attachment, index) => <div key={index}>
                            {attachment.type === 'image' ? <div className="relative">
                                <img src={attachment.url || 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'} alt={attachment.name} className="w-full h-48 object-cover rounded-lg" />
                                <p className={`mt-1 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                  {attachment.name} ({attachment.size})
                                </p>
                              </div> : <div className={`flex items-center p-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg transition-colors duration-300`}>
                                <PaperclipIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'} mr-2`} />
                                <div className="flex-1 min-w-0">
                                  <p className={`text-sm font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} truncate`}>
                                    {attachment.name}
                                  </p>
                                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {attachment.size}
                                  </p>
                                </div>
                                <button className={`ml-4 ${darkMode ? 'bg-gray-600 hover:bg-gray-500 text-gray-200' : 'bg-white hover:bg-gray-50 text-gray-700'} py-1 px-2 border ${darkMode ? 'border-gray-600' : 'border-gray-300'} rounded-md text-xs font-medium transition-colors duration-300`}>
                                  Download
                                </button>
                              </div>}
                          </div>)}
                    </div>
                  </div>}
                <div className="pt-4">
                  {selectedAnnouncement.status === 'draft' ? <button onClick={() => handlePublishDraft(selectedAnnouncement.id)} className={`w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-600 hover:bg-teal-700'} focus:outline-none transition-colors duration-300`}>
                      <SendIcon className="h-5 w-5 mr-2" />
                      Publish Announcement
                    </button> : <button className={`w-full inline-flex items-center justify-center px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} rounded-md shadow-sm text-sm font-medium focus:outline-none transition-colors duration-300`}>
                      <ExternalLinkIcon className="h-5 w-5 mr-2" />
                      View Public Announcement
                    </button>}
                </div>
              </div>
            </div> : <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white shadow'} rounded-lg p-6 transition-colors duration-300`}>
              <div className="text-center py-8">
                <MegaphoneIcon className={`mx-auto h-12 w-12 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                <h3 className={`mt-2 text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                  No announcement selected
                </h3>
                <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Select an announcement to view its details
                </p>
              </div>
            </div>}
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white shadow'} rounded-lg p-6 transition-colors duration-300`}>
            <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
              Announcement Stats
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Total Announcements
                  </p>
                  <p className={`text-2xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {announcements.length}
                  </p>
                </div>
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Published
                  </p>
                  <p className={`text-2xl font-semibold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                    {announcements.filter(a => a.status === 'published').length}
                  </p>
                </div>
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Drafts
                  </p>
                  <p className={`text-2xl font-semibold ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                    {announcements.filter(a => a.status === 'draft').length}
                  </p>
                </div>
              </div>
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>
                  High Priority
                </p>
                <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5 transition-colors duration-300`}>
                  <div className={`${darkMode ? 'bg-red-600/70' : 'bg-red-600'} h-2.5 rounded-full`} style={{
                  width: `${announcements.filter(a => a.priority === 'high').length / announcements.length * 100}%`
                }}></div>
                </div>
                <p className={`mt-1 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {announcements.filter(a => a.priority === 'high').length}{' '}
                  announcements
                </p>
              </div>
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>
                  Normal Priority
                </p>
                <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5 transition-colors duration-300`}>
                  <div className={`${darkMode ? 'bg-blue-600/70' : 'bg-blue-600'} h-2.5 rounded-full`} style={{
                  width: `${announcements.filter(a => a.priority === 'normal').length / announcements.length * 100}%`
                }}></div>
                </div>
                <p className={`mt-1 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {announcements.filter(a => a.priority === 'normal').length}{' '}
                  announcements
                </p>
              </div>
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>
                  Low Priority
                </p>
                <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5 transition-colors duration-300`}>
                  <div className={`${darkMode ? 'bg-gray-500/70' : 'bg-gray-600'} h-2.5 rounded-full`} style={{
                  width: `${announcements.filter(a => a.priority === 'low').length / announcements.length * 100}%`
                }}></div>
                </div>
                <p className={`mt-1 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {announcements.filter(a => a.priority === 'low').length}{' '}
                  announcements
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Create Announcement Modal */}
      {isAddAnnouncementOpen && <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setIsAddAnnouncementOpen(false)}></div>
          <div className={`relative ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg max-w-2xl w-full mx-auto p-6 shadow-xl transition-colors duration-300`}>
            <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
              Create New Announcement
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="announcement-title" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Announcement Title
                </label>
                <input type="text" id="announcement-title" value={announcementTitle} onChange={e => setAnnouncementTitle(e.target.value)} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-teal-500 focus:border-teal-500' : 'border-gray-300 focus:ring-teal-500 focus:border-teal-500'} rounded-md shadow-sm py-2 px-3 sm:text-sm transition-colors duration-300`} placeholder="Enter a title for your announcement" />
              </div>
              <div>
                <label htmlFor="announcement-content" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Announcement Content
                </label>
                <textarea id="announcement-content" rows={4} value={announcementContent} onChange={e => setAnnouncementContent(e.target.value)} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-teal-500 focus:border-teal-500' : 'border-gray-300 focus:ring-teal-500 focus:border-teal-500'} rounded-md shadow-sm py-2 px-3 sm:text-sm transition-colors duration-300`} placeholder="Write your announcement content here..."></textarea>
              </div>
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Priority Level
                </label>
                <div className="mt-2 flex space-x-4">
                  <label className="inline-flex items-center">
                    <input type="radio" name="priority" value="high" checked={announcementPriority === 'high'} onChange={() => setAnnouncementPriority('high')} className={`h-4 w-4 text-red-600 focus:ring-red-500 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300'} transition-colors duration-300`} />
                    <span className={`ml-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      High Priority
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="priority" value="normal" checked={announcementPriority === 'normal'} onChange={() => setAnnouncementPriority('normal')} className={`h-4 w-4 text-blue-600 focus:ring-blue-500 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300'} transition-colors duration-300`} />
                    <span className={`ml-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Normal Priority
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="priority" value="low" checked={announcementPriority === 'low'} onChange={() => setAnnouncementPriority('low')} className={`h-4 w-4 ${darkMode ? 'text-gray-500 focus:ring-gray-500 border-gray-600 bg-gray-700' : 'text-gray-600 focus:ring-gray-500 border-gray-300'} transition-colors duration-300`} />
                    <span className={`ml-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Low Priority
                    </span>
                  </label>
                </div>
              </div>
              {announcementAttachments.length > 0 && <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Attachments
                  </label>
                  <div className="space-y-2">
                    {announcementAttachments.map((attachment, index) => <div key={index} className={`flex items-center p-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-md transition-colors duration-300`}>
                        {attachment.type === 'image' ? <ImageIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'} mr-2`} /> : <PaperclipIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'} mr-2`} />}
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-900'} truncate`}>
                            {attachment.name}
                          </p>
                          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {attachment.size}
                          </p>
                        </div>
                        <button type="button" className={`ml-2 ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-500'}`} onClick={() => setAnnouncementAttachments(announcementAttachments.filter((_, i) => i !== index))}>
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </div>)}
                  </div>
                </div>}
              <div className="flex justify-between pt-4">
                <div className="flex space-x-2">
                  <label className={`inline-flex items-center px-3 py-1.5 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} rounded-md shadow-sm text-sm font-medium cursor-pointer transition-colors duration-300`}>
                    <ImageIcon className="h-4 w-4 mr-1" />
                    Add Image
                    <input type="file" className="sr-only" accept="image/*" onChange={handleFileUpload} />
                  </label>
                  <label className={`inline-flex items-center px-3 py-1.5 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} rounded-md shadow-sm text-sm font-medium cursor-pointer transition-colors duration-300`}>
                    <PaperclipIcon className="h-4 w-4 mr-1" />
                    Add File
                    <input type="file" className="sr-only" onChange={handleFileUpload} />
                  </label>
                </div>
                <div className="flex space-x-3">
                  <button type="button" onClick={() => {
                setIsAddAnnouncementOpen(false);
                resetForm();
              }} className={`px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} rounded-md shadow-sm text-sm font-medium focus:outline-none transition-colors duration-300`}>
                    Cancel
                  </button>
                  <button type="button" onClick={handleCreateAnnouncement} disabled={!announcementTitle || !announcementContent} className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${darkMode ? 'bg-teal-600 hover:bg-teal-700 disabled:bg-gray-600 disabled:cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed'} focus:outline-none transition-colors duration-300`}>
                    <SendIcon className="h-4 w-4 mr-2 inline-block" />
                    Publish Announcement
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>}
    </div>;
}