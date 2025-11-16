import React from 'react';
import { useGame } from '../contexts/GameContext';
import { Clock as ClockIcon, TrendingUp as TrendingUpIcon, Heart as HeartIcon } from 'lucide-react';
const FishJournal: React.FC = () => {
  const {
    feedingLogs
  } = useGame();
  // Format timestamp
  const formatTimestamp = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  return <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Feeding Journal
      </h3>
      {feedingLogs.length === 0 ? <div className="text-center py-6 text-gray-500">
          <p>No feeding activity yet.</p>
          <p className="text-sm mt-1">Feed your fish to see the logs here!</p>
        </div> : <div className="space-y-3 max-h-60 overflow-y-auto">
          {feedingLogs.map((log, index) => <div key={index} className="border-l-4 border-teal-500 pl-3 py-2">
              <div className="flex items-center text-sm text-gray-500 mb-1">
                <ClockIcon className="h-4 w-4 mr-1" />
                {formatTimestamp(log.timestamp)}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center text-sm">
                  <TrendingUpIcon className="h-4 w-4 text-blue-500 mr-1" />
                  <span>+{log.xpGained} XP gained</span>
                </div>
                <div className="flex items-center text-sm">
                  <HeartIcon className="h-4 w-4 text-red-500 mr-1" />
                  <span>+{log.healthGained} Health restored</span>
                </div>
              </div>
            </div>)}
        </div>}
    </div>;
};
export default FishJournal;