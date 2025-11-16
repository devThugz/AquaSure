import React from 'react';
import { EditIcon, TrashIcon, ExternalLinkIcon, InfoIcon } from 'lucide-react';
interface FishCardProps {
  fish: {
    id: number;
    name: string;
    scientificName: string;
    category: string;
    habitat: string;
    description: string;
    image: string;
  };
  onEdit?: (fish: any) => void;
  onDelete?: (id: number) => void;
  isAdmin?: boolean;
  darkMode?: boolean;
}
const FishCard: React.FC<FishCardProps> = ({
  fish,
  onEdit,
  onDelete,
  isAdmin = false,
  darkMode = false
}) => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };
  return <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} overflow-hidden rounded-lg border shadow-sm transition-colors duration-300`}>
      <div className="h-48 overflow-hidden relative">
        <img src={fish.image} alt={fish.name} className="w-full h-full object-cover" />
        <div className={`absolute top-0 right-0 p-2 ${darkMode ? 'bg-gray-800/70' : 'bg-white/70'} rounded-bl-lg`}>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${fish.category === 'Freshwater' ? darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-800' : fish.category === 'Saltwater' ? darkMode ? 'bg-teal-900/50 text-teal-300' : 'bg-teal-100 text-teal-800' : darkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-800'}`}>
            {fish.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              {fish.name}
            </h3>
            <p className={`text-sm italic ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {fish.scientificName}
            </p>
          </div>
          {isAdmin ? <div className="flex space-x-2">
              <button onClick={e => {
            e.stopPropagation();
            onEdit && onEdit(fish);
          }} className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}>
                <EditIcon className="h-4 w-4" />
              </button>
              <button onClick={e => {
            e.stopPropagation();
            onDelete && onDelete(fish.id);
          }} className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700 text-red-400' : 'hover:bg-gray-100 text-red-600'}`}>
                <TrashIcon className="h-4 w-4" />
              </button>
            </div> : <div className={`${darkMode ? 'text-ocean-light' : 'text-ocean-teal'}`}>
              <InfoIcon className="h-5 w-5" />
            </div>}
        </div>
        <div className="mt-3">
          <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Habitat
          </p>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {fish.habitat}
          </p>
        </div>
        <div className="mt-3">
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {truncateText(fish.description, 120)}
          </p>
        </div>
        <div className="mt-4 flex justify-end">
          <button className={`inline-flex items-center text-sm ${darkMode ? 'text-ocean-light hover:text-ocean-teal' : 'text-ocean-teal hover:text-ocean-blue'} transition-colors`} onClick={e => e.stopPropagation()}>
            View Details
            <ExternalLinkIcon className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </div>;
};
export default FishCard;