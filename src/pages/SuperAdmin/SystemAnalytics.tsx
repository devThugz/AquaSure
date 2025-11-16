import React from 'react';
import { BarChart } from 'lucide-react';
export const SystemAnalytics: React.FC = () => {
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">System Analytics</h1>
        <p className="text-sm text-gray-500">
          Performance metrics and usage statistics
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            User Activity
          </h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <BarChart className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-gray-500">
              User activity chart would go here
            </span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Feed Usage</h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <BarChart className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-gray-500">
              Feed usage chart would go here
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
        {[{
        title: 'Top Regions by Activity',
        description: 'Regions with most active users'
      }, {
        title: 'Feature Usage',
        description: 'Most used app features'
      }, {
        title: 'User Retention',
        description: 'User retention rates'
      }].map((chart, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-2">
              {chart.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{chart.description}</p>
            <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
              <BarChart className="h-6 w-6 text-gray-400" />
              <span className="ml-2 text-sm text-gray-500">
                Chart visualization
              </span>
            </div>
          </div>)}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          System Performance
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          {[{
          label: 'Server Uptime',
          value: '99.98%',
          status: 'good'
        }, {
          label: 'Avg. Response Time',
          value: '124ms',
          status: 'good'
        }, {
          label: 'Error Rate',
          value: '0.02%',
          status: 'good'
        }, {
          label: 'Active Sessions',
          value: '1,245',
          status: 'normal'
        }].map((metric, index) => <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">
                {metric.label}
              </h3>
              <div className="mt-1 flex items-baseline">
                <p className="text-xl font-semibold text-gray-900">
                  {metric.value}
                </p>
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${metric.status === 'good' ? 'bg-green-100 text-green-800' : metric.status === 'warning' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                  {metric.status === 'good' ? 'Good' : metric.status === 'warning' ? 'Warning' : 'Normal'}
                </span>
              </div>
            </div>)}
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[{
              event: 'Database Backup',
              status: 'Completed',
              time: '2 hours ago',
              details: 'Successful backup to cloud storage'
            }, {
              event: 'API Gateway Restart',
              status: 'Completed',
              time: '6 hours ago',
              details: 'Routine maintenance'
            }, {
              event: 'User Data Migration',
              status: 'Completed',
              time: '1 day ago',
              details: 'Schema update v2.3'
            }, {
              event: 'Security Audit',
              status: 'In Progress',
              time: 'Started 3 hours ago',
              details: 'Quarterly security review'
            }, {
              event: 'System Update',
              status: 'Scheduled',
              time: 'Tomorrow, 2:00 AM',
              details: 'Version 3.2.1 deployment'
            }].map((item, index) => <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.event}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === 'Completed' ? 'bg-green-100 text-green-800' : item.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.details}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};