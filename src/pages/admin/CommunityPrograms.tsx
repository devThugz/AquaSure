import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { PlusIcon, CalendarIcon, MapPinIcon, ClockIcon, EditIcon, TrashIcon, ImageIcon, SaveIcon, XIcon, SearchIcon, FilterIcon, ExternalLinkIcon } from 'lucide-react';
export const CommunityPrograms: React.FC = () => {
  const {
    darkMode
  } = useTheme();
  const [isAddProgramModalOpen, setIsAddProgramModalOpen] = useState(false);
  const [isEditProgramModalOpen, setIsEditProgramModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterAudience, setFilterAudience] = useState('all');
  const [selectedProgram, setSelectedProgram] = useState(null);
  // Form state for new program
  const [newProgram, setNewProgram] = useState({
    title: '',
    description: '',
    audience: 'all',
    specificCommunity: '',
    date: '',
    time: '',
    location: '',
    image: ''
  });
  // Mock community programs data
  const [programs, setPrograms] = useState([{
    id: 1,
    title: 'Sustainable Fishing Workshop',
    description: 'Learn sustainable fishing practices to preserve marine resources for future generations. This workshop will cover topics such as proper fishing techniques, gear selection, and understanding marine conservation.',
    audience: 'all',
    specificCommunity: '',
    date: '2023-06-15',
    time: '09:00',
    location: 'Batangas City Fish Port Complex',
    image: 'https://images.unsplash.com/photo-1545816250-3ea49e1df71f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    createdAt: '2023-05-10',
    createdBy: 'Admin LGU'
  }, {
    id: 2,
    title: 'Safety at Sea Training',
    description: 'Essential safety training for all fishermen. Learn emergency procedures, first aid, navigation safety, and how to use safety equipment properly while at sea.',
    audience: 'all',
    specificCommunity: '',
    date: '2023-06-20',
    time: '08:30',
    location: 'Batangas Maritime Academy',
    image: 'https://images.unsplash.com/photo-1520443240718-fce21901db79?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    createdAt: '2023-05-12',
    createdBy: 'Admin LGU'
  }, {
    id: 3,
    title: 'Fish Processing Workshop',
    description: 'Learn value-adding techniques for fish products. This workshop will teach methods for preserving, packaging, and marketing fish products to increase income opportunities.',
    audience: 'specific',
    specificCommunity: "Women's Fisheries Association",
    date: '2023-06-25',
    time: '13:00',
    location: 'Lipa City Community Center',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    createdAt: '2023-05-15',
    createdBy: 'Admin LGU'
  }, {
    id: 4,
    title: 'Financial Management for Fishers',
    description: 'Learn how to manage your finances effectively as a fishing professional. Topics include budgeting, saving, accessing micro-loans, and planning for seasonal income variations.',
    audience: 'specific',
    specificCommunity: "San Juan Fishermen's Cooperative",
    date: '2023-07-05',
    time: '14:00',
    location: 'San Juan Municipal Hall',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    createdAt: '2023-05-18',
    createdBy: 'Admin LGU'
  }]);
  // Filter programs based on search term and audience filter
  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) || program.description.toLowerCase().includes(searchTerm.toLowerCase()) || program.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAudience = filterAudience === 'all' || program.audience === filterAudience;
    return matchesSearch && matchesAudience;
  });
  const handleAddProgram = () => {
    const programToAdd = {
      id: programs.length + 1,
      ...newProgram,
      // If no image is provided, use a default one
      image: newProgram.image || 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      createdAt: new Date().toISOString().split('T')[0],
      createdBy: 'Admin LGU'
    };
    setPrograms([programToAdd, ...programs]);
    setIsAddProgramModalOpen(false);
    resetForm();
  };
  const handleUpdateProgram = () => {
    if (!selectedProgram) return;
    setPrograms(programs.map(program => program.id === selectedProgram.id ? selectedProgram : program));
    setIsEditProgramModalOpen(false);
  };
  const handleDeleteProgram = id => {
    setPrograms(programs.filter(program => program.id !== id));
    if (selectedProgram && selectedProgram.id === id) {
      setSelectedProgram(null);
    }
  };
  const resetForm = () => {
    setNewProgram({
      title: '',
      description: '',
      audience: 'all',
      specificCommunity: '',
      date: '',
      time: '',
      location: '',
      image: ''
    });
  };
  const handleEditClick = program => {
    setSelectedProgram({
      ...program
    });
    setIsEditProgramModalOpen(true);
  };
  const formatDate = dateString => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
            Community Programs
          </h2>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
            Manage and organize programs for fisher communities
          </p>
        </div>
        <button onClick={() => setIsAddProgramModalOpen(true)} className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-600 hover:bg-teal-700'} focus:outline-none transition-colors duration-300`}>
          <PlusIcon className="h-5 w-5 mr-2" />
          Create Program
        </button>
      </div>
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700 shadow-md' : 'bg-white border-gray-200 shadow-sm'} rounded-lg p-6 mb-6 border transition-colors duration-300`}>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
            </div>
            <input type="text" className={`block w-full pl-10 pr-3 py-2 border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' : 'bg-white border-gray-300 placeholder-gray-500'} rounded-md leading-5 focus:outline-none focus:placeholder-gray-400 focus:ring-1 ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`} placeholder="Search programs..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          <div className="sm:w-64 flex items-center">
            <FilterIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'} mr-2`} />
            <select className={`block w-full pl-3 pr-10 py-2 text-base ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300'} focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm rounded-md transition-colors duration-300`} value={filterAudience} onChange={e => setFilterAudience(e.target.value)}>
              <option value="all">All Audiences</option>
              <option value="specific">Specific Communities</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map(program => <div key={program.id} className={`${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'} border rounded-lg overflow-hidden transition-colors duration-300`}>
              <div className="relative h-48">
                <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                {program.audience === 'specific' && <div className={`absolute top-2 right-2 px-2 py-1 rounded-full ${darkMode ? 'bg-blue-900/70 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                    <span className="text-xs font-medium">
                      Specific Community
                    </span>
                  </div>}
              </div>
              <div className="p-4">
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-2`}>
                  {program.title}
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4 line-clamp-2`}>
                  {program.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <CalendarIcon className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'} mr-2`} />
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {formatDate(program.date)} at {program.time}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'} mr-2`} />
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {program.location}
                    </span>
                  </div>
                  {program.audience === 'specific' && <div className="flex items-center">
                      <div className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'} mr-2`} />
                      <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {program.specificCommunity}
                      </span>
                    </div>}
                </div>
                <div className="flex justify-end space-x-2 border-t pt-3 mt-2">
                  <button onClick={() => handleEditClick(program)} className={`p-1.5 rounded-md ${darkMode ? 'bg-gray-600 hover:bg-gray-500 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} transition-colors duration-300`}>
                    <EditIcon className="h-4 w-4" />
                  </button>
                  <button onClick={() => handleDeleteProgram(program.id)} className={`p-1.5 rounded-md ${darkMode ? 'bg-red-900/30 hover:bg-red-900/50 text-red-300' : 'bg-red-50 hover:bg-red-100 text-red-600'} transition-colors duration-300`}>
                    <TrashIcon className="h-4 w-4" />
                  </button>
                  <button className={`p-1.5 rounded-md ${darkMode ? 'bg-gray-600 hover:bg-gray-500 text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} transition-colors duration-300`}>
                    <ExternalLinkIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>)}
        </div>
        {filteredPrograms.length === 0 && <div className="text-center py-12">
            <div className={`mx-auto h-12 w-12 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
            <h3 className={`mt-2 text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
              No community programs found
            </h3>
            <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Get started by creating a new community program.
            </p>
            <div className="mt-6">
              <button onClick={() => setIsAddProgramModalOpen(true)} className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-600 hover:bg-teal-700'} focus:outline-none transition-colors duration-300`}>
                <PlusIcon className="h-5 w-5 mr-2" />
                Create Program
              </button>
            </div>
          </div>}
      </div>
      {/* Add Program Modal */}
      {isAddProgramModalOpen && <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setIsAddProgramModalOpen(false)}></div>
          <div className={`relative ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg max-w-2xl w-full mx-auto p-6 shadow-xl transition-colors duration-300`}>
            <div className="flex justify-between items-start mb-4">
              <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Create New Community Program
              </h3>
              <button onClick={() => setIsAddProgramModalOpen(false)} className={`${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-500'}`}>
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="title" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Program Title
                </label>
                <input type="text" id="title" value={newProgram.title} onChange={e => setNewProgram({
              ...newProgram,
              title: e.target.value
            })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`} placeholder="Enter program title" />
              </div>
              <div>
                <label htmlFor="description" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Description
                </label>
                <textarea id="description" rows={3} value={newProgram.description} onChange={e => setNewProgram({
              ...newProgram,
              description: e.target.value
            })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`} placeholder="Describe the program details and objectives"></textarea>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Date
                  </label>
                  <input type="date" id="date" value={newProgram.date} onChange={e => setNewProgram({
                ...newProgram,
                date: e.target.value
              })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`} />
                </div>
                <div>
                  <label htmlFor="time" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Time
                  </label>
                  <input type="time" id="time" value={newProgram.time} onChange={e => setNewProgram({
                ...newProgram,
                time: e.target.value
              })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`} />
                </div>
              </div>
              <div>
                <label htmlFor="location" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Location
                </label>
                <input type="text" id="location" value={newProgram.location} onChange={e => setNewProgram({
              ...newProgram,
              location: e.target.value
            })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`} placeholder="Enter program location" />
              </div>
              <div>
                <label htmlFor="audience" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Target Audience
                </label>
                <select id="audience" value={newProgram.audience} onChange={e => setNewProgram({
              ...newProgram,
              audience: e.target.value
            })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`}>
                  <option value="all">All Fisher Communities</option>
                  <option value="specific">
                    Specific Community/Organization
                  </option>
                </select>
              </div>
              {newProgram.audience === 'specific' && <div>
                  <label htmlFor="specificCommunity" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Specify Community/Organization
                  </label>
                  <input type="text" id="specificCommunity" value={newProgram.specificCommunity} onChange={e => setNewProgram({
              ...newProgram,
              specificCommunity: e.target.value
            })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`} placeholder="Enter name of specific community or organization" />
                </div>}
              <div>
                <label htmlFor="image" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Program Image URL (Optional)
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input type="text" id="image" value={newProgram.image} onChange={e => setNewProgram({
                ...newProgram,
                image: e.target.value
              })} className={`flex-1 min-w-0 block w-full px-3 py-2 border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-l-md focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`} placeholder="Enter image URL" />
                  <span className={`inline-flex items-center px-3 py-2 border border-l-0 ${darkMode ? 'bg-gray-600 border-gray-600 text-gray-300' : 'bg-gray-50 border-gray-300 text-gray-500'} rounded-r-md transition-colors duration-300`}>
                    <ImageIcon className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <div className="flex justify-end space-x-3 pt-4 border-t">
                <button type="button" onClick={() => setIsAddProgramModalOpen(false)} className={`px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} rounded-md shadow-sm text-sm font-medium transition-colors duration-300`}>
                  Cancel
                </button>
                <button type="button" onClick={handleAddProgram} disabled={!newProgram.title || !newProgram.description || !newProgram.date || !newProgram.time || !newProgram.location || newProgram.audience === 'specific' && !newProgram.specificCommunity} className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${darkMode ? 'bg-teal-600 hover:bg-teal-700 disabled:bg-gray-600 disabled:text-gray-400' : 'bg-teal-600 hover:bg-teal-700 disabled:bg-gray-300 disabled:text-gray-500'} transition-colors duration-300 disabled:cursor-not-allowed`}>
                  <SaveIcon className="h-4 w-4 mr-2 inline-block" />
                  Create Program
                </button>
              </div>
            </form>
          </div>
        </div>}
      {/* Edit Program Modal */}
      {isEditProgramModalOpen && selectedProgram && <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setIsEditProgramModalOpen(false)}></div>
          <div className={`relative ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg max-w-2xl w-full mx-auto p-6 shadow-xl transition-colors duration-300`}>
            <div className="flex justify-between items-start mb-4">
              <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Edit Community Program
              </h3>
              <button onClick={() => setIsEditProgramModalOpen(false)} className={`${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-500'}`}>
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="edit-title" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Program Title
                </label>
                <input type="text" id="edit-title" value={selectedProgram.title} onChange={e => setSelectedProgram({
              ...selectedProgram,
              title: e.target.value
            })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`} />
              </div>
              <div>
                <label htmlFor="edit-description" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Description
                </label>
                <textarea id="edit-description" rows={3} value={selectedProgram.description} onChange={e => setSelectedProgram({
              ...selectedProgram,
              description: e.target.value
            })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`}></textarea>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="edit-date" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Date
                  </label>
                  <input type="date" id="edit-date" value={selectedProgram.date} onChange={e => setSelectedProgram({
                ...selectedProgram,
                date: e.target.value
              })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`} />
                </div>
                <div>
                  <label htmlFor="edit-time" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Time
                  </label>
                  <input type="time" id="edit-time" value={selectedProgram.time} onChange={e => setSelectedProgram({
                ...selectedProgram,
                time: e.target.value
              })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`} />
                </div>
              </div>
              <div>
                <label htmlFor="edit-location" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Location
                </label>
                <input type="text" id="edit-location" value={selectedProgram.location} onChange={e => setSelectedProgram({
              ...selectedProgram,
              location: e.target.value
            })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`} />
              </div>
              <div>
                <label htmlFor="edit-audience" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Target Audience
                </label>
                <select id="edit-audience" value={selectedProgram.audience} onChange={e => setSelectedProgram({
              ...selectedProgram,
              audience: e.target.value
            })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`}>
                  <option value="all">All Fisher Communities</option>
                  <option value="specific">
                    Specific Community/Organization
                  </option>
                </select>
              </div>
              {selectedProgram.audience === 'specific' && <div>
                  <label htmlFor="edit-specificCommunity" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Specify Community/Organization
                  </label>
                  <input type="text" id="edit-specificCommunity" value={selectedProgram.specificCommunity} onChange={e => setSelectedProgram({
              ...selectedProgram,
              specificCommunity: e.target.value
            })} className={`mt-1 block w-full border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`} />
                </div>}
              <div>
                <label htmlFor="edit-image" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Program Image URL
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input type="text" id="edit-image" value={selectedProgram.image} onChange={e => setSelectedProgram({
                ...selectedProgram,
                image: e.target.value
              })} className={`flex-1 min-w-0 block w-full px-3 py-2 border ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'border-gray-300'} rounded-l-md focus:outline-none ${darkMode ? 'focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-blue-500 focus:border-blue-500'} sm:text-sm transition-colors duration-300`} />
                  <span className={`inline-flex items-center px-3 py-2 border border-l-0 ${darkMode ? 'bg-gray-600 border-gray-600 text-gray-300' : 'bg-gray-50 border-gray-300 text-gray-500'} rounded-r-md transition-colors duration-300`}>
                    <ImageIcon className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <div className="flex justify-end space-x-3 pt-4 border-t">
                <button type="button" onClick={() => setIsEditProgramModalOpen(false)} className={`px-4 py-2 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} rounded-md shadow-sm text-sm font-medium transition-colors duration-300`}>
                  Cancel
                </button>
                <button type="button" onClick={handleUpdateProgram} disabled={!selectedProgram.title || !selectedProgram.description || !selectedProgram.date || !selectedProgram.time || !selectedProgram.location || selectedProgram.audience === 'specific' && !selectedProgram.specificCommunity} className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${darkMode ? 'bg-teal-600 hover:bg-teal-700 disabled:bg-gray-600 disabled:text-gray-400' : 'bg-teal-600 hover:bg-teal-700 disabled:bg-gray-300 disabled:text-gray-500'} transition-colors duration-300 disabled:cursor-not-allowed`}>
                  <SaveIcon className="h-4 w-4 mr-2 inline-block" />
                  Update Program
                </button>
              </div>
            </form>
          </div>
        </div>}
    </div>;
};