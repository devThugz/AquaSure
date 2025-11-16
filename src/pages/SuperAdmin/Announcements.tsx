import React, { useState } from 'react';
import { MegaphoneIcon, CalendarIcon, GlobeIcon, UsersIcon, BellIcon, CheckCircleIcon, ClockIcon, PlusIcon } from 'lucide-react';
export const Announcements: React.FC = () => {
  const [showNewAnnouncementForm, setShowNewAnnouncementForm] = useState(false);
  const announcementStats = [{
    name: 'Total Announcements',
    value: '142',
    change: '+8',
    icon: <MegaphoneIcon className="h-6 w-6" />,
    color: 'bg-blue-600'
  }, {
    name: 'Active Announcements',
    value: '24',
    change: '+2',
    icon: <BellIcon className="h-6 w-6" />,
    color: 'bg-green-600'
  }, {
    name: 'Scheduled',
    value: '12',
    change: '+5',
    icon: <CalendarIcon className="h-6 w-6" />,
    color: 'bg-purple-600'
  }, {
    name: 'Read Rate',
    value: '87.5%',
    change: '+2.3%',
    icon: <CheckCircleIcon className="h-6 w-6" />,
    color: 'bg-teal-600'
  }];
  const announcements = [{
    id: 'ANN-001',
    title: 'System Maintenance Notice',
    content: 'The AquaSure system will be undergoing maintenance on May 20, 2023 from 2:00 AM to 5:00 AM. Some features may be unavailable during this time.',
    type: 'System',
    audience: 'All Users',
    regions: 'All Regions',
    status: 'Active',
    publishDate: '2023-05-15',
    expiryDate: '2023-05-21',
    readCount: 8456,
    totalRecipients: 12458
  }, {
    id: 'ANN-002',
    title: 'Storm Warning for Eastern Regions',
    content: 'A strong storm is expected to hit eastern coastal areas on May 18-19. Please take necessary precautions and secure your boats and equipment.',
    type: 'Weather',
    audience: 'Fishers',
    regions: 'Eastern Regions',
    status: 'Active',
    publishDate: '2023-05-15',
    expiryDate: '2023-05-20',
    readCount: 2845,
    totalRecipients: 3250
  }, {
    id: 'ANN-003',
    title: 'New Insurance Plans Available',
    content: 'We have updated our insurance plans with better coverage and benefits. Check out the Insurance Hub to learn more and upgrade your plan.',
    type: 'Insurance',
    audience: 'Fishers',
    regions: 'All Regions',
    status: 'Active',
    publishDate: '2023-05-14',
    expiryDate: '2023-05-28',
    readCount: 5842,
    totalRecipients: 8500
  }, {
    id: 'ANN-004',
    title: 'Admin Dashboard Updates',
    content: 'We have added new features to the admin dashboard. Check out the new verification tools and reporting features.',
    type: 'System',
    audience: 'Admins',
    regions: 'All Regions',
    status: 'Active',
    publishDate: '2023-05-12',
    expiryDate: '2023-05-19',
    readCount: 42,
    totalRecipients: 48
  }, {
    id: 'ANN-005',
    title: 'Upcoming Fisheries Training',
    content: 'Free training sessions on sustainable fishing practices will be held next month. Registration opens on May 25.',
    type: 'Event',
    audience: 'Fishers',
    regions: 'Western Regions',
    status: 'Scheduled',
    publishDate: '2023-05-25',
    expiryDate: '2023-06-10',
    readCount: 0,
    totalRecipients: 4200
  }];
  const getStatusBadge = status => {
    switch (status) {
      case 'Active':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Active
          </span>;
      case 'Scheduled':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
            Scheduled
          </span>;
      case 'Expired':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            Expired
          </span>;
      case 'Draft':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
            Draft
          </span>;
      default:
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            {status}
          </span>;
    }
  };
  const getTypeBadge = type => {
    switch (type) {
      case 'System':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
            System
          </span>;
      case 'Weather':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            Weather
          </span>;
      case 'Insurance':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
            Insurance
          </span>;
      case 'Event':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Event
          </span>;
      case 'Market':
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
            Market
          </span>;
      default:
        return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            {type}
          </span>;
    }
  };
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Announcements</h1>
        <p className="text-sm text-gray-500">
          Create and manage announcements for all users
        </p>
      </div>
      {/* Announcement Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {announcementStats.map(stat => <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className={`flex-shrink-0 rounded-md p-3 ${stat.color} text-white`}>
                {stat.icon}
              </div>
              <div className="ml-5 w-0 flex-1">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  {stat.name}
                </dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                    {stat.change}
                  </div>
                </dd>
              </div>
            </div>
          </div>)}
      </div>
      {/* New Announcement Form */}
      {showNewAnnouncementForm ? <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-900">
              Create New Announcement
            </h2>
            <button onClick={() => setShowNewAnnouncementForm(false)} className="text-gray-400 hover:text-gray-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <form>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <div className="mt-1">
                  <input type="text" name="title" id="title" className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Announcement title" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                  Type
                </label>
                <div className="mt-1">
                  <select id="type" name="type" className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md">
                    <option>System</option>
                    <option>Weather</option>
                    <option>Insurance</option>
                    <option>Event</option>
                    <option>Market</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-6">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                  Content
                </label>
                <div className="mt-1">
                  <textarea id="content" name="content" rows={4} className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Announcement content"></textarea>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="audience" className="block text-sm font-medium text-gray-700">
                  Audience
                </label>
                <div className="mt-1">
                  <select id="audience" name="audience" className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md">
                    <option>All Users</option>
                    <option>Fishers</option>
                    <option>Admins</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="regions" className="block text-sm font-medium text-gray-700">
                  Regions
                </label>
                <div className="mt-1">
                  <select id="regions" name="regions" className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md">
                    <option>All Regions</option>
                    <option>Eastern Regions</option>
                    <option>Western Regions</option>
                    <option>Northern Regions</option>
                    <option>Southern Regions</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="publishDate" className="block text-sm font-medium text-gray-700">
                  Publish Date
                </label>
                <div className="mt-1">
                  <input type="date" name="publishDate" id="publishDate" className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <div className="mt-1">
                  <input type="date" name="expiryDate" id="expiryDate" className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>
              <div className="sm:col-span-6">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="urgent" name="urgent" type="checkbox" className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="urgent" className="font-medium text-gray-700">
                      Mark as Urgent
                    </label>
                    <p className="text-gray-500">
                      This will send push notifications to all recipients
                      immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button type="button" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500" onClick={() => setShowNewAnnouncementForm(false)}>
                Cancel
              </button>
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                Save as Draft
              </button>
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Publish
              </button>
            </div>
          </form>
        </div> : <div className="flex justify-end mb-6">
          <button onClick={() => setShowNewAnnouncementForm(true)} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
            <PlusIcon className="h-4 w-4 mr-2" />
            Create Announcement
          </button>
        </div>}
      {/* Announcements List */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-6">
          All Announcements
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Audience
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Publish Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Expiry Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Read Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {announcements.map((announcement, index) => {
              const readRate = Math.round(announcement.readCount / announcement.totalRecipients * 100) || 0;
              return <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {announcement.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {announcement.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getTypeBadge(announcement.type)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <UsersIcon className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{announcement.audience}</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        <GlobeIcon className="h-3 w-3 inline mr-1" />
                        <span>{announcement.regions}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(announcement.publishDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(announcement.expiryDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(announcement.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {announcement.status === 'Scheduled' ? <span className="text-sm text-gray-500">
                          Not published yet
                        </span> : <div className="flex items-center">
                          <span className="text-sm text-gray-900 mr-2">
                            {readRate}%
                          </span>
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div className={`h-2 rounded-full ${readRate >= 80 ? 'bg-green-500' : readRate >= 60 ? 'bg-blue-500' : readRate >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                        width: `${readRate}%`
                      }}></div>
                          </div>
                        </div>}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-teal-600 hover:text-teal-900 mr-3">
                        Edit
                      </button>
                      {announcement.status === 'Active' && <button className="text-red-600 hover:text-red-900">
                          End
                        </button>}
                      {announcement.status === 'Scheduled' && <button className="text-blue-600 hover:text-blue-900">
                          Publish Now
                        </button>}
                    </td>
                  </tr>;
            })}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};