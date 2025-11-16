import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { AlertTriangleIcon, XIcon, MapPinIcon, PhoneIcon, MessageSquareIcon } from 'lucide-react';
interface EmergencyReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  location: [number, number];
}
const EmergencyReportModal: React.FC<EmergencyReportModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  location
}) => {
  const {
    darkMode
  } = useTheme();
  const [emergencyType, setEmergencyType] = useState('medical');
  const [description, setDescription] = useState('');
  const [requestType, setRequestType] = useState<string[]>([]);
  if (!isOpen) return null;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      emergencyType,
      description,
      requestType,
      location,
      timestamp: new Date()
    });
  };
  const toggleRequestType = (type: string) => {
    if (requestType.includes(type)) {
      setRequestType(requestType.filter(t => t !== type));
    } else {
      setRequestType([...requestType, type]);
    }
  };
  return <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
        <div className={`inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-xl border ${darkMode ? 'border-red-900' : 'border-red-200'}`}>
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <div className={`p-2 rounded-full ${darkMode ? 'bg-red-900/30' : 'bg-red-100'} mr-3`}>
                <AlertTriangleIcon className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-medium text-red-600">
                Emergency Report
              </h3>
            </div>
            <button onClick={onClose} className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}>
              <XIcon className="h-5 w-5" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Emergency Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button type="button" className={`py-2 px-3 rounded-md text-sm flex items-center justify-center ${emergencyType === 'medical' ? `${darkMode ? 'bg-red-900/50 border-red-700' : 'bg-red-100 border-red-300'} border text-red-600` : `${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} border`}`} onClick={() => setEmergencyType('medical')}>
                  Medical Emergency
                </button>
                <button type="button" className={`py-2 px-3 rounded-md text-sm flex items-center justify-center ${emergencyType === 'boat' ? `${darkMode ? 'bg-red-900/50 border-red-700' : 'bg-red-100 border-red-300'} border text-red-600` : `${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} border`}`} onClick={() => setEmergencyType('boat')}>
                  Boat Malfunction
                </button>
                <button type="button" className={`py-2 px-3 rounded-md text-sm flex items-center justify-center ${emergencyType === 'weather' ? `${darkMode ? 'bg-red-900/50 border-red-700' : 'bg-red-100 border-red-300'} border text-red-600` : `${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} border`}`} onClick={() => setEmergencyType('weather')}>
                  Weather Danger
                </button>
                <button type="button" className={`py-2 px-3 rounded-md text-sm flex items-center justify-center ${emergencyType === 'other' ? `${darkMode ? 'bg-red-900/50 border-red-700' : 'bg-red-100 border-red-300'} border text-red-600` : `${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} border`}`} onClick={() => setEmergencyType('other')}>
                  Other Emergency
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Description
              </label>
              <textarea value={description} onChange={e => setDescription(e.target.value)} className={`w-full px-3 py-2 rounded-md ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-red-500`} rows={3} placeholder="Briefly describe your emergency..." />
            </div>
            <div className="mb-4">
              <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Request Type
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="rescue" checked={requestType.includes('rescue')} onChange={() => toggleRequestType('rescue')} className="h-4 w-4 text-red-600 focus:ring-red-500 rounded" />
                  <label htmlFor="rescue" className="ml-2 text-sm">
                    Need immediate rescue
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="medical" checked={requestType.includes('medical')} onChange={() => toggleRequestType('medical')} className="h-4 w-4 text-red-600 focus:ring-red-500 rounded" />
                  <label htmlFor="medical" className="ml-2 text-sm">
                    Medical assistance required
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="mechanical" checked={requestType.includes('mechanical')} onChange={() => toggleRequestType('mechanical')} className="h-4 w-4 text-red-600 focus:ring-red-500 rounded" />
                  <label htmlFor="mechanical" className="ml-2 text-sm">
                    Mechanical/boat assistance
                  </label>
                </div>
              </div>
            </div>
            <div className={`p-3 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mb-4`}>
              <div className="flex items-center mb-2">
                <MapPinIcon className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-xs font-medium">
                  Your current location will be shared
                </span>
              </div>
              <div className="text-xs text-gray-500">
                Latitude: {location[0].toFixed(6)}, Longitude:{' '}
                {location[1].toFixed(6)}
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <button type="submit" className="w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-md flex items-center justify-center font-medium">
                <AlertTriangleIcon className="h-5 w-5 mr-2" />
                Send Emergency Alert
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button type="button" className={`py-2 rounded-md text-sm flex items-center justify-center ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}>
                  <PhoneIcon className="h-4 w-4 mr-1" />
                  Call Coast Guard
                </button>
                <button type="button" className={`py-2 rounded-md text-sm flex items-center justify-center ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}>
                  <MessageSquareIcon className="h-4 w-4 mr-1" />
                  Message Nearby
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>;
};
export default EmergencyReportModal;