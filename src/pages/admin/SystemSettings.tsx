import React, { useState } from 'react';
import { SettingsIcon, ServerIcon, CloudIcon, DatabaseIcon, ShieldIcon, BellIcon, SaveIcon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
export function SystemSettings() {
  const [activeTab, setActiveTab] = useState('general');
  const {
    darkMode
  } = useTheme();
  return <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          System Settings
        </h2>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
          Configure global AquaSure system settings
        </p>
      </div>
      <div className={`${darkMode ? 'bg-gray-800 shadow-md' : 'bg-white shadow'} rounded-lg transition-colors duration-300`}>
        <div className="sm:hidden">
          <select className={`block w-full ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-teal-500 focus:border-teal-500 border-gray-300'} rounded-md transition-colors duration-300`} value={activeTab} onChange={e => setActiveTab(e.target.value)}>
            <option value="general">General</option>
            <option value="api">API & Integrations</option>
            <option value="notifications">Notifications</option>
            <option value="security">Security</option>
            <option value="backup">Backup & Recovery</option>
          </select>
        </div>
        <div className="hidden sm:block">
          <div className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-300`}>
            <nav className="flex -mb-px">
              <button onClick={() => setActiveTab('general')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'general' ? darkMode ? 'border-teal-500 text-teal-400' : 'border-teal-500 text-teal-600' : darkMode ? 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} transition-colors duration-300`}>
                <div className="flex items-center">
                  <SettingsIcon className="h-5 w-5 mr-2" />
                  <span>General</span>
                </div>
              </button>
              <button onClick={() => setActiveTab('api')} className={`ml-8 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'api' ? darkMode ? 'border-teal-500 text-teal-400' : 'border-teal-500 text-teal-600' : darkMode ? 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} transition-colors duration-300`}>
                <div className="flex items-center">
                  <ServerIcon className="h-5 w-5 mr-2" />
                  <span>API & Integrations</span>
                </div>
              </button>
              <button onClick={() => setActiveTab('notifications')} className={`ml-8 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'notifications' ? darkMode ? 'border-teal-500 text-teal-400' : 'border-teal-500 text-teal-600' : darkMode ? 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} transition-colors duration-300`}>
                <div className="flex items-center">
                  <BellIcon className="h-5 w-5 mr-2" />
                  <span>Notifications</span>
                </div>
              </button>
              <button onClick={() => setActiveTab('security')} className={`ml-8 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'security' ? darkMode ? 'border-teal-500 text-teal-400' : 'border-teal-500 text-teal-600' : darkMode ? 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} transition-colors duration-300`}>
                <div className="flex items-center">
                  <ShieldIcon className="h-5 w-5 mr-2" />
                  <span>Security</span>
                </div>
              </button>
              <button onClick={() => setActiveTab('backup')} className={`ml-8 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'backup' ? darkMode ? 'border-teal-500 text-teal-400' : 'border-teal-500 text-teal-600' : darkMode ? 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} transition-colors duration-300`}>
                <div className="flex items-center">
                  <CloudIcon className="h-5 w-5 mr-2" />
                  <span>Backup & Recovery</span>
                </div>
              </button>
            </nav>
          </div>
        </div>
        <div className="p-6">
          {activeTab === 'general' && <div className="space-y-6">
              <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                General Settings
              </h3>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="app-name" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Application Name
                  </label>
                  <div className="mt-1">
                    <input type="text" name="app-name" id="app-name" defaultValue="AquaSure" className={`shadow-sm ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-teal-500 focus:border-teal-500 border-gray-300'} block w-full sm:text-sm rounded-md transition-colors duration-300`} />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="support-email" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Support Email
                  </label>
                  <div className="mt-1">
                    <input type="email" name="support-email" id="support-email" defaultValue="support@aquasure.com" className={`shadow-sm ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-teal-500 focus:border-teal-500 border-gray-300'} block w-full sm:text-sm rounded-md transition-colors duration-300`} />
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label htmlFor="timezone" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Default Timezone
                  </label>
                  <div className="mt-1">
                    <select id="timezone" name="timezone" className={`shadow-sm ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-teal-500 focus:border-teal-500 border-gray-300'} block w-full sm:text-sm rounded-md transition-colors duration-300`} defaultValue="Asia/Manila">
                      <option value="Asia/Manila">Asia/Manila (GMT+8)</option>
                      <option value="Asia/Singapore">
                        Asia/Singapore (GMT+8)
                      </option>
                      <option value="America/New_York">
                        America/New_York (GMT-4)
                      </option>
                      <option value="Europe/London">
                        Europe/London (GMT+1)
                      </option>
                      <option value="UTC">UTC</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label htmlFor="language" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Default Language
                  </label>
                  <div className="mt-1">
                    <select id="language" name="language" className={`shadow-sm ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-teal-500 focus:border-teal-500 border-gray-300'} block w-full sm:text-sm rounded-md transition-colors duration-300`} defaultValue="en">
                      <option value="en">English</option>
                      <option value="fil">Filipino</option>
                      <option value="es">Spanish</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="maintenance-mode" name="maintenance-mode" type="checkbox" className={`focus:ring-teal-500 h-4 w-4 text-teal-600 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300'} rounded transition-colors duration-300`} />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="maintenance-mode" className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Maintenance Mode
                      </label>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Enable this to put the application in maintenance mode.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          {activeTab === 'api' && <div className="space-y-6">
              <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                API & Integrations
              </h3>
              <div className={`${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'} p-4 rounded-md border transition-colors duration-300`}>
                <div className="flex items-center">
                  <ServerIcon className={`h-6 w-6 ${darkMode ? 'text-teal-400' : 'text-teal-500'}`} />
                  <h4 className={`ml-2 text-md font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    Weather API Configuration
                  </h4>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label htmlFor="weather-api-key" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      API Key
                    </label>
                    <div className="mt-1">
                      <input type="text" name="weather-api-key" id="weather-api-key" defaultValue="••••••••••••••••" className={`shadow-sm ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-teal-500 focus:border-teal-500 border-gray-300'} block w-full sm:text-sm rounded-md transition-colors duration-300`} />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="weather-update-interval" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Update Interval (minutes)
                    </label>
                    <div className="mt-1">
                      <input type="number" name="weather-update-interval" id="weather-update-interval" defaultValue="30" className={`shadow-sm ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-teal-500 focus:border-teal-500 border-gray-300'} block w-full sm:text-sm rounded-md transition-colors duration-300`} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'} p-4 rounded-md border transition-colors duration-300`}>
                <div className="flex items-center">
                  <DatabaseIcon className={`h-6 w-6 ${darkMode ? 'text-teal-400' : 'text-teal-500'}`} />
                  <h4 className={`ml-2 text-md font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    Database Configuration
                  </h4>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="db-host" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Host
                    </label>
                    <div className="mt-1">
                      <input type="text" name="db-host" id="db-host" defaultValue="db.aquasure.com" className={`shadow-sm ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-teal-500 focus:border-teal-500 border-gray-300'} block w-full sm:text-sm rounded-md transition-colors duration-300`} />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="db-port" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Port
                    </label>
                    <div className="mt-1">
                      <input type="text" name="db-port" id="db-port" defaultValue="5432" className={`shadow-sm ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-teal-500 focus:border-teal-500 border-gray-300'} block w-full sm:text-sm rounded-md transition-colors duration-300`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          {activeTab === 'notifications' && <div className="space-y-6">
              <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Notification Settings
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="enable-email" name="enable-email" type="checkbox" defaultChecked className={`focus:ring-teal-500 h-4 w-4 text-teal-600 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300'} rounded transition-colors duration-300`} />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="enable-email" className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Enable Email Notifications
                    </label>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Send system notifications via email.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="enable-sms" name="enable-sms" type="checkbox" defaultChecked className={`focus:ring-teal-500 h-4 w-4 text-teal-600 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300'} rounded transition-colors duration-300`} />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="enable-sms" className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Enable SMS Notifications
                    </label>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Send important alerts via SMS.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="enable-push" name="enable-push" type="checkbox" defaultChecked className={`focus:ring-teal-500 h-4 w-4 text-teal-600 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300'} rounded transition-colors duration-300`} />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="enable-push" className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Enable Push Notifications
                    </label>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Send push notifications to mobile devices.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'} p-4 rounded-md border transition-colors duration-300`}>
                <h4 className={`text-md font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
                  Notification Templates
                </h4>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="welcome-template" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Welcome Email
                    </label>
                    <div className="mt-1">
                      <textarea id="welcome-template" name="welcome-template" rows={3} className={`shadow-sm ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-teal-500 focus:border-teal-500 border-gray-300'} block w-full sm:text-sm rounded-md transition-colors duration-300`} defaultValue="Welcome to AquaSure, {{user_name}}! We're excited to have you join our community of fishermen. Get started by feeding your fish to build your insurance coverage."></textarea>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="alert-template" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Weather Alert
                    </label>
                    <div className="mt-1">
                      <textarea id="alert-template" name="alert-template" rows={3} className={`shadow-sm ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-teal-500 focus:border-teal-500 border-gray-300'} block w-full sm:text-sm rounded-md transition-colors duration-300`} defaultValue="WEATHER ALERT: {{alert_type}} expected in your area on {{date}} from {{start_time}} to {{end_time}}. Please take necessary precautions."></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          {activeTab === 'security' && <div className="space-y-6">
              <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Security Settings
              </h3>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="session-timeout" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Session Timeout (minutes)
                  </label>
                  <div className="mt-1">
                    <input type="number" name="session-timeout" id="session-timeout" defaultValue="60" className={`shadow-sm ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-teal-500 focus:border-teal-500 border-gray-300'} block w-full sm:text-sm rounded-md transition-colors duration-300`} />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="password-expiry" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Password Expiry (days)
                  </label>
                  <div className="mt-1">
                    <input type="number" name="password-expiry" id="password-expiry" defaultValue="90" className={`shadow-sm ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-teal-500 focus:border-teal-500 border-gray-300'} block w-full sm:text-sm rounded-md transition-colors duration-300`} />
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="two-factor-auth" name="two-factor-auth" type="checkbox" defaultChecked className={`focus:ring-teal-500 h-4 w-4 text-teal-600 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300'} rounded transition-colors duration-300`} />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="two-factor-auth" className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Require Two-Factor Authentication
                      </label>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Require admins to use two-factor authentication.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="login-attempts" name="login-attempts" type="checkbox" defaultChecked className={`focus:ring-teal-500 h-4 w-4 text-teal-600 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300'} rounded transition-colors duration-300`} />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="login-attempts" className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Limit Login Attempts
                      </label>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Lock accounts after 5 failed login attempts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          {activeTab === 'backup' && <div className="space-y-6">
              <h3 className={`text-lg font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Backup & Recovery
              </h3>
              <div className={`${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'} p-4 rounded-md border transition-colors duration-300`}>
                <h4 className={`text-md font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
                  Automated Backups
                </h4>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="backup-frequency" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Backup Frequency
                    </label>
                    <div className="mt-1">
                      <select id="backup-frequency" name="backup-frequency" className={`shadow-sm ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-teal-500 focus:border-teal-500 border-gray-300'} block w-full sm:text-sm rounded-md transition-colors duration-300`} defaultValue="daily">
                        <option value="hourly">Hourly</option>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="retention-period" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Retention Period (days)
                    </label>
                    <div className="mt-1">
                      <input type="number" name="retention-period" id="retention-period" defaultValue="30" className={`shadow-sm ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-teal-500 focus:border-teal-500 border-gray-300'} block w-full sm:text-sm rounded-md transition-colors duration-300`} />
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <label htmlFor="backup-location" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Backup Storage Location
                    </label>
                    <div className="mt-1">
                      <input type="text" name="backup-location" id="backup-location" defaultValue="s3://aquasure-backups/" className={`shadow-sm ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-teal-500 focus:border-teal-500' : 'focus:ring-teal-500 focus:border-teal-500 border-gray-300'} block w-full sm:text-sm rounded-md transition-colors duration-300`} />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <button type="button" className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-600 hover:bg-teal-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-300`}>
                    <CloudIcon className="h-4 w-4 mr-2" />
                    Create Manual Backup
                  </button>
                </div>
              </div>
              <div className={`${darkMode ? 'bg-gray-700/50 border-gray-600' : 'bg-gray-50 border-gray-200'} p-4 rounded-md border transition-colors duration-300`}>
                <h4 className={`text-md font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
                  Recent Backups
                </h4>
                <div className="overflow-x-auto">
                  <table className={`min-w-full divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                    <thead className={`${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                      <tr>
                        <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                          Date
                        </th>
                        <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                          Size
                        </th>
                        <th scope="col" className={`px-6 py-3 text-left text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                          Status
                        </th>
                        <th scope="col" className={`px-6 py-3 text-right text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className={`${darkMode ? 'bg-gray-800 divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}`}>
                      <tr>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                          May 15, 2023 - 01:00 AM
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          256 MB
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
                            Completed
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a href="#" className={`${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-900'}`}>
                            Restore
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                          May 14, 2023 - 01:00 AM
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          255 MB
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'}`}>
                            Completed
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a href="#" className={`${darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-900'}`}>
                            Restore
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>}
          <div className="mt-6 flex justify-end">
            <button type="button" className={`${darkMode ? 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'} py-2 px-4 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-300`}>
              Cancel
            </button>
            <button type="submit" className={`ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-600 hover:bg-teal-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-300`}>
              <SaveIcon className="h-4 w-4 mr-2" />
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>;
}