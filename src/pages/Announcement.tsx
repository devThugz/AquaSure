import React, { useState } from 'react';
import { MegaphoneIcon, PlusIcon, CalendarIcon, UserIcon, ThumbsUpIcon, MessageCircleIcon, EyeIcon, EditIcon, TrashIcon } from 'lucide-react';
export function Announcement() {
  const [isCreateAnnouncementModalOpen, setIsCreateAnnouncementModalOpen] = useState(false);
  // Mock announcements data
  const announcements = [{
    id: 1,
    title: 'New Fishing Regulations Starting Next Month',
    content: 'The Bureau of Fisheries and Aquatic Resources (BFAR) has announced new fishing regulations that will take effect starting next month. All registered fishermen are required to comply with these regulations to ensure sustainable fishing practices.',
    author: 'Admin LGU',
    date: '2023-05-10',
    category: 'Regulation',
    likes: 24,
    comments: 8,
    image: 'https://images.unsplash.com/photo-1545566239-0d774a5a3ddf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 2,
    title: 'Coastal Cleanup Drive This Weekend',
    content: "Join us for a community coastal cleanup drive this weekend. Let's work together to keep our beaches and waters clean for better marine life and fishing conditions.",
    author: 'Admin LGU',
    date: '2023-05-08',
    category: 'Community',
    likes: 45,
    comments: 12,
    image: 'https'
  }, {
    id: 3,
    title: 'Fisheries Development Fund Now Available',
    content: 'The local government has allocated funds to support small-scale fishermen in upgrading their equipment and boats. Applications for funding are now open until the end of the month.',
    author: 'Admin LGU',
    date: '2023-05-05',
    category: 'Funding',
    likes: 67,
    comments: 15,
    image: 'https://images.unsplash.com/photo-1589841063088-85f5ff5e7ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 4,
    title: 'Sustainable Fishing Workshop Series',
    content: 'Learn about sustainable fishing practices in our upcoming workshop series. Expert fishermen and marine biologists will share valuable insights and techniques.',
    author: 'Admin LGU',
    date: '2023-05-03',
    category: 'Education',
    likes: 32,
    comments: 7,
    image: 'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }];
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Announcements</h2>
          <p className="text-gray-600 mt-1">
            Post and manage public announcements for the fishing community
          </p>
        </div>
        <button onClick={() => setIsCreateAnnouncementModalOpen(true)} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus-outline-none">
          <PlusIcon className="h-5 w-5 mr-2" />
          Create Announcement
        </button>
      </div>
      <div className="space-y-6">
        {announcements.map(announcement => <div key={announcement.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="md:flex">
              {announcement.image && <div className="md:flex-shrink-0">
                  <img className="h-48 w-full object-cover md:h-full md:w-48" src={announcement.image} alt={announcement.title} />
                </div>}
              <div className="p-6 flex-1">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800 mr-2">
                    {announcement.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {new Date(announcement.date).toLocaleDateString()}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {announcement.title}
                </h3>
                <p className="text-gray-600 mb-4">{announcement.content}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500">
                    <UserIcon className="h-4 w-4 mr-1" />
                    {announcement.author}
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <ThumbsUpIcon className="h-4 w-4 mr-1" />
                      {announcement.likes}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MessageCircleIcon className="h-4 w-4 mr-1" />
                      {announcement.comments}
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-1 rounded-full text-teal-600 hover:bg-teal-50">
                        <EyeIcon className="h-5 w-5" />
                      </button>
                      <button className="p-1 rounded-full text-blue-600 hover:bg-blue-50">
                        <EditIcon className="h-5 w-5" />
                      </button>
                      <button className="p-1 rounded-full text-red-600 hover:bg-red-50">
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>)}
      </div>
      {/* Create Announcement Modal - In a real implementation, this would be a separate component */}
      {isCreateAnnouncementModalOpen && <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsCreateAnnouncementModalOpen(false)}></div>
          <div className="relative bg-white rounded-lg max-w-2xl w-full mx-auto p-6 shadow-xl">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Create New Announcement
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus-outline-none focus-ring-teal-500 focus-border-teal-500 sm-text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus-outline-none focus-ring-teal-500 focus-border-teal-500 sm-text-sm">
                  <option>Regulation</option>
                  <option>Community</option>
                  <option>Funding</option>
                  <option>Education</option>
                  <option>Weather</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Content
                </label>
                <textarea rows={6} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus-outline-none focus-ring-teal-500 focus-border-teal-500 sm-text-sm"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Image URL (Optional)
                </label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus-outline-none focus-ring-teal-500 focus-border-teal-500 sm-text-sm" />
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" id="send-notification" />
                <label htmlFor="send-notification" className="ml-2 block text-sm text-gray-700">
                  Send push notification to all users
                </label>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button type="button" className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus-outline-none" onClick={() => setIsCreateAnnouncementModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus-outline-none">
                  Publish Announcement
                </button>
              </div>
            </form>
          </div>
        </div>}
    </div>;
}