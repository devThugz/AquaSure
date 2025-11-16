import React from 'react';
import { useGame } from '../contexts/GameContext';
import { Trophy as TrophyIcon, Award as AwardIcon, MapPin as MapPinIcon, User as UserIcon } from 'lucide-react';
const InsuranceLeaderboard: React.FC = () => {
  const {
    leaderboard,
    petFish
  } = useGame();
  // Find user's rank in leaderboard
  const userRank = leaderboard.findIndex(entry => entry.fisherName === 'Fisher Juan') + 1;
  return <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900">
          Insurance Leaderboard
        </h3>
        <div className="bg-blue-50 px-3 py-1 rounded-full flex items-center">
          <TrophyIcon className="h-4 w-4 text-blue-600 mr-1" />
          <span className="text-sm font-medium text-blue-700">
            Your Rank:{' '}
            {userRank > 0 ? `${userRank}${userRank === 1 ? 'st' : userRank === 2 ? 'nd' : userRank === 3 ? 'rd' : 'th'}` : 'N/A'}
          </span>
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rank
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fisher
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fish
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Level
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leaderboard.map((entry, index) => <tr key={entry.id} className={entry.fisherName === 'Fisher Juan' ? 'bg-blue-50' : ''}>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900 flex items-center">
                    {index + 1}
                    {index < 3 && <span className="ml-1">
                        {index === 0 && '🥇'}
                        {index === 1 && '🥈'}
                        {index === 2 && '🥉'}
                      </span>}
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <UserIcon className="h-4 w-4 text-gray-600" />
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">
                        {entry.fisherName}
                      </div>
                      <div className="text-xs text-gray-500 flex items-center">
                        <MapPinIcon className="h-3 w-3 mr-1" />
                        {entry.region}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{entry.name}</div>
                  <div className="text-xs text-gray-500">{entry.stage}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <AwardIcon className="h-4 w-4 text-amber-500 mr-1" />
                    <span className="text-sm font-medium text-gray-900">
                      Level {entry.level}
                    </span>
                  </div>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
};
export default InsuranceLeaderboard;