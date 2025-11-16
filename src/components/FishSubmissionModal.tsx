import React, { useState } from 'react';
import { XIcon, UploadIcon, CameraIcon, MapPinIcon, ScaleIcon, FishIcon, AlertCircleIcon } from 'lucide-react';
import { useGame } from '../contexts/GameContext';
import { useTheme } from '../contexts/ThemeContext';
interface FishSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function FishSubmissionModal({
  isOpen,
  onClose
}: FishSubmissionModalProps) {
  const {
    submitFish
  } = useGame();
  const {
    darkMode
  } = useTheme();
  const [formData, setFormData] = useState({
    species: '',
    weight: '',
    location: '',
    description: '',
    imageUrl: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const weight = parseFloat(formData.weight);
      const aquaBitesReward = Math.floor(weight * 3) + 20;
      submitFish({
        species: formData.species,
        weight: weight,
        location: formData.location,
        imageUrl: formData.imageUrl || 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        aquaBitesReward
      });
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          species: '',
          weight: '',
          location: '',
          description: '',
          imageUrl: ''
        });
        onClose();
      }, 2000);
    }, 1000);
  };
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose}></div>

      <div className={`relative ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl w-full max-w-lg shadow-2xl border my-8 max-h-[90vh] flex flex-col`}>
        {/* Header - Fixed */}
        <div className="bg-gradient-to-r from-ocean-teal to-blue-500 p-4 sm:p-5 flex justify-between items-center rounded-t-xl flex-shrink-0">
          <div className="flex items-center">
            <div className="bg-white/20 p-2 rounded-full mr-3">
              <FishIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Submit New Species
              </h3>
              <p className="text-xs text-blue-100">
                Share your fishing success for verification
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-white hover:text-blue-100 transition-colors flex-shrink-0">
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Success Message */}
        {showSuccess && <div className="absolute inset-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
            <div className="text-center">
              <div className="mb-4">
                <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <svg className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                Submission Successful!
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Your catch has been sent for admin verification
              </p>
            </div>
          </div>}

        {/* Form - Scrollable */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6 space-y-4">
            {/* Species Text Input */}
            <div>
              <label className={`block text-sm font-bold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1.5`}>
                New Species *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FishIcon className={`h-5 w-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                </div>
                <input type="text" required value={formData.species} onChange={e => handleChange('species', e.target.value)} placeholder="Enter species name" className={`block w-full pl-10 pr-3 py-2.5 border-2 ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-100 placeholder-gray-400 focus:ring-ocean-light focus:border-ocean-light' : 'border-gray-300 bg-white placeholder-gray-500 focus:ring-ocean-teal focus:border-ocean-teal'} rounded-lg shadow-sm focus:outline-none transition-colors text-sm`} />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className={`block text-sm font-bold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1.5`}>
                Description *
              </label>
              <textarea required value={formData.description} onChange={e => handleChange('description', e.target.value)} placeholder="Provide details about the species..." rows={3} className={`block w-full px-3 py-2.5 border-2 ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-100 placeholder-gray-400 focus:ring-ocean-light focus:border-ocean-light' : 'border-gray-300 bg-white placeholder-gray-500 focus:ring-ocean-teal focus:border-ocean-teal'} rounded-lg shadow-sm focus:outline-none transition-colors resize-none text-sm`} />
            </div>

            {/* Weight and Location - Side by Side on larger screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Weight */}
              <div>
                <label className={`block text-sm font-bold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1.5`}>
                  Weight (kg) *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <ScaleIcon className={`h-5 w-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                  </div>
                  <input type="number" step="0.1" min="0.1" required value={formData.weight} onChange={e => handleChange('weight', e.target.value)} placeholder="e.g., 15.5" className={`block w-full pl-10 pr-3 py-2.5 border-2 ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-100 placeholder-gray-400 focus:ring-ocean-light focus:border-ocean-light' : 'border-gray-300 bg-white placeholder-gray-500 focus:ring-ocean-teal focus:border-ocean-teal'} rounded-lg shadow-sm focus:outline-none transition-colors text-sm`} />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className={`block text-sm font-bold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1.5`}>
                  Catch Location *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPinIcon className={`h-5 w-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                  </div>
                  <input type="text" required value={formData.location} onChange={e => handleChange('location', e.target.value)} placeholder="e.g., Batangas Bay" className={`block w-full pl-10 pr-3 py-2.5 border-2 ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-100 placeholder-gray-400 focus:ring-ocean-light focus:border-ocean-light' : 'border-gray-300 bg-white placeholder-gray-500 focus:ring-ocean-teal focus:border-ocean-teal'} rounded-lg shadow-sm focus:outline-none transition-colors text-sm`} />
                </div>
              </div>
            </div>

            {/* Image Upload - Compact */}
            <div>
              <label className={`block text-sm font-bold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1.5`}>
                Photo (Optional)
              </label>
              <div className={`border-2 border-dashed ${darkMode ? 'border-gray-600 bg-gray-700/50' : 'border-gray-300 bg-gray-50'} rounded-lg p-4 text-center`}>
                <CameraIcon className={`h-8 w-8 ${darkMode ? 'text-gray-500' : 'text-gray-400'} mx-auto mb-2`} />
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                  Take a photo or paste image URL
                </p>
                <input type="text" value={formData.imageUrl} onChange={e => handleChange('imageUrl', e.target.value)} placeholder="Paste image URL" className={`mt-2 block w-full px-3 py-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-100 placeholder-gray-500' : 'border-gray-300 bg-white placeholder-gray-400'} rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-ocean-teal`} />
              </div>
            </div>

            {/* Info Box - Compact */}
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-blue-900/20 border border-blue-900/30' : 'bg-blue-50 border border-blue-200'}`}>
              <div className="flex items-start">
                <AlertCircleIcon className={`h-4 w-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-2 mt-0.5 flex-shrink-0`} />
                <p className={`text-xs ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                  <strong>Verification Process:</strong> Your submission will be
                  reviewed by an admin. Once approved, you can claim AquaBites
                  in the Verify Fish section.
                </p>
              </div>
            </div>
          </div>

          {/* Buttons - Fixed at bottom */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4 sm:p-6 flex-shrink-0 bg-gray-50 dark:bg-gray-800/50 rounded-b-xl">
            <div className="flex flex-col-reverse sm:flex-row justify-between items-stretch sm:items-center gap-3">
              <button type="button" onClick={onClose} className={`px-5 py-2.5 border ${darkMode ? 'border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'} rounded-lg shadow-sm text-sm font-medium focus:outline-none transition-colors`}>
                Cancel
              </button>
              <button type="submit" disabled={isSubmitting} className={`px-5 py-2.5 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-ocean-teal to-blue-500 hover:from-ocean-blue hover:to-blue-600'} focus:outline-none transition-all transform hover:scale-105`}>
                {isSubmitting ? <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </> : <>
                    <UploadIcon className="h-4 w-4 mr-2 inline-block" />
                    Submit for Verification
                  </>}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>;
}