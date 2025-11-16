import React, { useState } from 'react'
import { DashboardCard } from '../components/DashboardCard'
import { useTheme } from '../contexts/ThemeContext'
import { useAuth } from '../contexts/AuthContext'
import { useGame } from '../contexts/GameContext'
import {
  ShieldCheckIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
  UploadIcon,
  PlusIcon,
  AlertTriangleIcon,
  CheckIcon,
  XIcon,
  InfoIcon,
  UserIcon,
  CameraIcon,
  FileTextIcon,
  CalendarIcon,
  MapPinIcon,
  FishIcon,
  CoinsIcon,
  GiftIcon,
  ScaleIcon,
} from 'lucide-react'
export function Verification() {
  const { darkMode } = useTheme()
  const { user } = useAuth()
  const { fishSubmissions, claimAquaBites, aquaBites } = useGame()
  const [activeTab, setActiveTab] = useState('verification')
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [claimingId, setClaimingId] = useState<string | null>(null)
  // Mock verification status
  const verificationStatus = {
    status: 'pending',
    dateSubmitted: 'August 10, 2023',
    dateReviewed: null,
    rejectionReason: null,
    requiredDocuments: [
      {
        id: 1,
        name: 'Valid ID',
        description: 'Government-issued ID (e.g., drivers license, passport)',
        status: 'submitted',
        dateSubmitted: 'August 10, 2023',
      },
      {
        id: 2,
        name: 'Proof of Fishing Activity',
        description: 'Recent photos of fishing activities or boat registration',
        status: 'submitted',
        dateSubmitted: 'August 10, 2023',
      },
      {
        id: 3,
        name: 'Barangay Certificate',
        description:
          'Certificate from local Barangay confirming fishing occupation',
        status: 'missing',
        dateSubmitted: null,
      },
    ],
  }
  // Mock profile data
  const profileData = {
    name: user?.name || 'Juan Dela Cruz',
    email: 'juan.delacruz@example.com',
    phone: '+63 912 345 6789',
    address: 'Brgy. San Roque, Batangas City, Philippines',
    occupation: 'Fisher',
    experience: '15 years',
    boatInfo: {
      name: 'Masaganang Dagat',
      registrationNumber: 'BT-2023-001',
      type: 'Small-scale fishing boat',
      capacity: '5 persons',
      length: '7 meters',
    },
    fishingAreas: ['Batangas Bay', 'Verde Island Passage'],
    targetSpecies: ['Tuna', 'Mackerel', 'Milkfish'],
  }
  // Get status color and icon
  const getStatusInfo = (status) => {
    switch (status) {
      case 'verified':
        return {
          color: 'text-green-600 dark:text-green-400',
          bgColor: 'bg-green-100 dark:bg-green-900/30',
          borderColor: 'border-green-200 dark:border-green-800',
          icon: <CheckCircleIcon className="h-5 w-5" />,
        }
      case 'pending':
        return {
          color: 'text-yellow-600 dark:text-yellow-400',
          bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
          borderColor: 'border-yellow-200 dark:border-yellow-800',
          icon: <ClockIcon className="h-5 w-5" />,
        }
      case 'rejected':
        return {
          color: 'text-red-600 dark:text-red-400',
          bgColor: 'bg-red-100 dark:bg-red-900/30',
          borderColor: 'border-red-200 dark:border-red-800',
          icon: <XCircleIcon className="h-5 w-5" />,
        }
      case 'submitted':
        return {
          color: 'text-blue-600 dark:text-blue-400',
          bgColor: 'bg-blue-100 dark:bg-blue-900/30',
          borderColor: 'border-blue-200 dark:border-blue-800',
          icon: <CheckIcon className="h-5 w-5" />,
        }
      case 'missing':
        return {
          color: 'text-gray-600 dark:text-gray-400',
          bgColor: 'bg-gray-100 dark:bg-gray-800',
          borderColor: 'border-gray-200 dark:border-gray-700',
          icon: <AlertTriangleIcon className="h-5 w-5" />,
        }
      default:
        return {
          color: 'text-gray-600 dark:text-gray-400',
          bgColor: 'bg-gray-100 dark:bg-gray-800',
          borderColor: 'border-gray-200 dark:border-gray-700',
          icon: <InfoIcon className="h-5 w-5" />,
        }
    }
  }
  // Get verification status text
  const getStatusText = (status) => {
    switch (status) {
      case 'verified':
        return 'Verified'
      case 'pending':
        return 'Pending Review'
      case 'rejected':
        return 'Verification Rejected'
      default:
        return 'Unknown Status'
    }
  }
  const statusInfo = getStatusInfo(verificationStatus.status)
  // Handle AquaBites claim
  const handleClaimAquaBites = (submissionId: string) => {
    setClaimingId(submissionId)
    setTimeout(() => {
      claimAquaBites(submissionId)
      setClaimingId(null)
    }, 1000)
  }
  // Get approved and unclaimed submissions
  const approvedSubmissions = fishSubmissions.filter(
    (sub) => sub.status === 'approved' && !sub.claimed,
  )
  // Get all approved submissions (including claimed)
  const allApprovedSubmissions = fishSubmissions.filter(
    (sub) => sub.status === 'approved',
  )
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex justify-between items-center gap-2">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold truncate">Verification</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm truncate">
            Verify your account and claim fish rewards
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          {approvedSubmissions.length > 0 && (
            <div className="px-2 sm:px-3 py-1.5 sm:py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg flex items-center font-medium text-xs whitespace-nowrap">
              <GiftIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
              <span className="hidden xs:inline">
                {approvedSubmissions.length} Reward
                {approvedSubmissions.length > 1 ? 's' : ''}
              </span>
              <span className="xs:hidden">{approvedSubmissions.length}</span>
            </div>
          )}
          <button
            className="px-2 sm:px-3 py-1.5 sm:py-2 bg-ocean-teal text-white rounded-lg flex items-center hover:bg-ocean-blue transition-colors text-xs whitespace-nowrap"
            onClick={() => setShowUploadModal(true)}
          >
            <UploadIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1 sm:mr-1.5 flex-shrink-0" />
            <span className="hidden sm:inline">Upload</span>
            <span className="sm:hidden">Upload</span>
          </button>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
          <button
            className={`py-3 px-4 sm:px-6 font-medium text-xs sm:text-sm whitespace-nowrap ${activeTab === 'verification' ? 'text-ocean-teal dark:text-ocean-light border-b-2 border-ocean-teal dark:border-ocean-light' : 'text-gray-500 dark:text-gray-400 hover:text-ocean-teal dark:hover:text-ocean-light'}`}
            onClick={() => setActiveTab('verification')}
          >
            <ShieldCheckIcon className="inline-block mr-1 sm:mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Verification Status</span>
            <span className="sm:hidden">Status</span>
          </button>
          <button
            className={`py-3 px-4 sm:px-6 font-medium text-xs sm:text-sm whitespace-nowrap ${activeTab === 'fish' ? 'text-ocean-teal dark:text-ocean-light border-b-2 border-ocean-teal dark:border-ocean-light' : 'text-gray-500 dark:text-gray-400 hover:text-ocean-teal dark:hover:text-ocean-light'}`}
            onClick={() => setActiveTab('fish')}
          >
            <FishIcon className="inline-block mr-1 sm:mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Verify Fish</span>
            <span className="sm:hidden">Fish</span>
            {approvedSubmissions.length > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">
                {approvedSubmissions.length}
              </span>
            )}
          </button>
          <button
            className={`py-3 px-4 sm:px-6 font-medium text-xs sm:text-sm whitespace-nowrap ${activeTab === 'profile' ? 'text-ocean-teal dark:text-ocean-light border-b-2 border-ocean-teal dark:border-ocean-light' : 'text-gray-500 dark:text-gray-400 hover:text-ocean-teal dark:hover:text-ocean-light'}`}
            onClick={() => setActiveTab('profile')}
          >
            <UserIcon className="inline-block mr-1 sm:mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Fisher Profile</span>
            <span className="sm:hidden">Profile</span>
          </button>
        </div>
      </div>
      {activeTab === 'fish' && (
        <div className="space-y-6">
          {/* Current Balance Card */}
          <DashboardCard className="p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="rounded-full p-3 bg-gradient-to-r from-ocean-teal to-blue-500">
                  <CoinsIcon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">
                    Your AquaBites Balance
                  </h3>
                  <p className="text-3xl font-bold text-ocean-teal dark:text-ocean-light">
                    {aquaBites} AquaBites
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {approvedSubmissions.length} pending claim
                  {approvedSubmissions.length !== 1 ? 's' : ''}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {allApprovedSubmissions.filter((s) => s.claimed).length} total
                  claimed
                </p>
              </div>
            </div>
          </DashboardCard>

          {/* Approved Fish - Ready to Claim */}
          {approvedSubmissions.length > 0 && (
            <DashboardCard className="p-5">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
                <h3 className="text-lg font-medium flex items-center">
                  <GiftIcon className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                  Ready to Claim
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Your verified catches are ready for rewards
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {approvedSubmissions.map((submission) => (
                  <div
                    key={submission.id}
                    className={`p-4 rounded-xl border-2 ${darkMode ? 'bg-gradient-to-br from-gray-700 to-gray-800 border-green-500/30' : 'bg-gradient-to-br from-green-50 to-blue-50 border-green-200'} shadow-lg`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <img
                          src={submission.imageUrl}
                          alt={submission.species}
                          className="w-24 h-24 rounded-lg object-cover"
                        />
                        <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1.5">
                          <CheckCircleIcon className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg">
                          {submission.species}
                        </h4>
                        <div className="mt-1 space-y-1">
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <ScaleIcon className="h-4 w-4 mr-1" />
                            {submission.weight} kg
                          </div>
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <MapPinIcon className="h-4 w-4 mr-1" />
                            {submission.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <CalendarIcon className="h-4 w-4 mr-1" />
                            {new Date(
                              submission.submittedAt,
                            ).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-ocean-teal dark:text-ocean-light font-bold">
                              <CoinsIcon className="h-5 w-5 mr-1" />
                              {submission.aquaBitesReward} AquaBites
                            </div>
                            <button
                              onClick={() =>
                                handleClaimAquaBites(submission.id)
                              }
                              disabled={claimingId === submission.id}
                              className={`px-4 py-2 rounded-lg text-sm font-bold text-white ${claimingId === submission.id ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'} transition-all transform hover:scale-105 shadow-md`}
                            >
                              {claimingId === submission.id ? (
                                <>
                                  <svg
                                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <circle
                                      className="opacity-25"
                                      cx="12"
                                      cy="12"
                                      r="10"
                                      stroke="currentColor"
                                      strokeWidth="4"
                                    ></circle>
                                    <path
                                      className="opacity-75"
                                      fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                  </svg>
                                  Claiming...
                                </>
                              ) : (
                                <>
                                  <GiftIcon className="h-4 w-4 mr-1 inline-block" />
                                  Claim Reward
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCard>
          )}
          {approvedSubmissions.length === 0 && (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <FishIcon className="h-8 w-8 text-gray-400 dark:text-gray-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                No Rewards Available
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Submit your catches in Fish Hub to earn AquaBites rewards
              </p>
              <button
                onClick={() => (window.location.href = '/fish-hub')}
                className="px-4 py-2 bg-ocean-teal text-white rounded-lg hover:bg-ocean-blue transition-colors"
              >
                Go to Fish Hub
              </button>
            </div>
          )}
          {/* Claimed History */}
          {allApprovedSubmissions.filter((s) => s.claimed).length > 0 && (
            <DashboardCard className="p-5">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
                <h3 className="text-lg font-medium">Claim History</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Previously claimed rewards
                </p>
              </div>
              <div className="space-y-3">
                {allApprovedSubmissions
                  .filter((s) => s.claimed)
                  .map((submission) => (
                    <div
                      key={submission.id}
                      className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/30' : 'bg-gray-50'}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <img
                            src={submission.imageUrl}
                            alt={submission.species}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <h4 className="font-medium">
                              {submission.species}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {submission.weight} kg • {submission.location}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-green-600 dark:text-green-400 font-medium">
                            <CheckCircleIcon className="h-4 w-4 mr-1" />
                            Claimed
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            +{submission.aquaBitesReward} AquaBites
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </DashboardCard>
          )}
          {/* Info Card */}
          <DashboardCard className="p-5">
            <div
              className={`p-4 rounded-lg ${darkMode ? 'bg-blue-900/20 border border-blue-900/30' : 'bg-blue-50 border border-blue-200'}`}
            >
              <div className="flex items-start">
                <InfoIcon
                  className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-3 mt-0.5 flex-shrink-0`}
                />
                <div>
                  <h4
                    className={`text-sm font-bold ${darkMode ? 'text-blue-300' : 'text-blue-800'} mb-2`}
                  >
                    How Fish Verification Works
                  </h4>
                  <ul
                    className={`text-xs ${darkMode ? 'text-blue-300' : 'text-blue-700'} space-y-1`}
                  >
                    <li>
                      • Submit your catches in Fish Hub with photos and details
                    </li>
                    <li>
                      • Admin reviews and verifies your submission (usually 1-2
                      days)
                    </li>
                    <li>• Once approved, claim your AquaBites reward here</li>
                    <li>
                      • Larger catches earn more AquaBites (3 per kg + 20 base)
                    </li>
                    <li>
                      • Use AquaBites to feed your pet fish and increase
                      insurance coverage
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </DashboardCard>
        </div>
      )}{' '}
      {activeTab === 'verification' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Status Card */}
          <DashboardCard className="p-5 lg:col-span-1">
            <h3 className="text-lg font-medium mb-4">Verification Status</h3>
            <div
              className={`p-4 rounded-lg ${statusInfo.bgColor} ${statusInfo.borderColor} border`}
            >
              <div className="flex items-center">
                <div className={`${statusInfo.color} mr-3`}>
                  {statusInfo.icon}
                </div>
                <div>
                  <div className={`font-medium ${statusInfo.color}`}>
                    {getStatusText(verificationStatus.status)}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Submitted on {verificationStatus.dateSubmitted}
                  </div>
                </div>
              </div>
              {verificationStatus.status === 'rejected' &&
                verificationStatus.rejectionReason && (
                  <div className="mt-3 text-sm text-red-600 dark:text-red-400">
                    Reason: {verificationStatus.rejectionReason}
                  </div>
                )}
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">
                Verification Benefits
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="rounded-full p-1 bg-green-100 dark:bg-green-900/30 mt-0.5">
                    <CheckIcon className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="ml-2 text-sm">
                    Access to insurance programs
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full p-1 bg-green-100 dark:bg-green-900/30 mt-0.5">
                    <CheckIcon className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="ml-2 text-sm">
                    Participation in community programs
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full p-1 bg-green-100 dark:bg-green-900/30 mt-0.5">
                    <CheckIcon className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="ml-2 text-sm">
                    Government assistance eligibility
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full p-1 bg-green-100 dark:bg-green-900/30 mt-0.5">
                    <CheckIcon className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="ml-2 text-sm">Premium market access</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-start">
                <InfoIcon className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Verification usually takes 2-3 business days after all
                  required documents have been submitted.
                </p>
              </div>
            </div>
          </DashboardCard>
          {/* Required Documents */}
          <DashboardCard className="p-5 lg:col-span-2">
            <h3 className="text-lg font-medium mb-4">Required Documents</h3>
            <div className="space-y-4">
              {verificationStatus.requiredDocuments.map((doc) => {
                const docStatus = getStatusInfo(doc.status)
                return (
                  <div
                    key={doc.id}
                    className={`p-4 rounded-lg border ${docStatus.borderColor}`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-start">
                        <div className={`${docStatus.color} mr-3 mt-1`}>
                          {docStatus.icon}
                        </div>
                        <div>
                          <div className="font-medium">{doc.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {doc.description}
                          </div>
                          {doc.status === 'submitted' && (
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                              Submitted on {doc.dateSubmitted}
                            </div>
                          )}
                        </div>
                      </div>
                      {doc.status === 'missing' && (
                        <button
                          className="px-3 py-1 bg-ocean-teal text-white text-sm rounded-lg hover:bg-ocean-blue transition-colors"
                          onClick={() => setShowUploadModal(true)}
                        >
                          Upload
                        </button>
                      )}
                      {doc.status === 'submitted' && (
                        <button className="text-sm text-ocean-teal dark:text-ocean-light hover:underline">
                          View
                        </button>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {
                    verificationStatus.requiredDocuments.filter(
                      (doc) => doc.status === 'submitted',
                    ).length
                  }{' '}
                  of {verificationStatus.requiredDocuments.length} documents
                  submitted
                </span>
                <button
                  className="px-4 py-2 bg-ocean-teal text-white rounded-lg hover:bg-ocean-blue transition-colors"
                  disabled={verificationStatus.requiredDocuments.some(
                    (doc) => doc.status === 'missing',
                  )}
                >
                  Submit for Review
                </button>
              </div>
            </div>
          </DashboardCard>
        </div>
      )}
      {activeTab === 'profile' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Basic Info */}
          <DashboardCard className="p-5 lg:col-span-1">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium">Basic Information</h3>
              <button className="text-sm text-ocean-teal dark:text-ocean-light hover:underline">
                Edit
              </button>
            </div>
            <div className="flex flex-col items-center mb-6">
              {user?.avatar ? (
                <img
                  src={user.avatar}
                  alt={profileData.name}
                  className="h-24 w-24 rounded-full object-cover border-4 border-ocean-teal/30"
                />
              ) : (
                <div className="h-24 w-24 rounded-full bg-gradient-accent flex items-center justify-center text-white text-2xl font-medium">
                  {profileData.name.charAt(0)}
                </div>
              )}
              <h4 className="font-medium text-lg mt-3">{profileData.name}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {profileData.occupation}
              </p>
              <div
                className={`mt-3 px-3 py-1 rounded-full text-xs font-medium ${statusInfo.bgColor} ${statusInfo.color} flex items-center`}
              >
                {statusInfo.icon}
                <span className="ml-1">
                  {getStatusText(verificationStatus.status)}
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  Email
                </div>
                <div className="text-sm">{profileData.email}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  Phone
                </div>
                <div className="text-sm">{profileData.phone}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  Address
                </div>
                <div className="text-sm">{profileData.address}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  Experience
                </div>
                <div className="text-sm">{profileData.experience}</div>
              </div>
            </div>
          </DashboardCard>
          {/* Fishing Details */}
          <DashboardCard className="p-5 lg:col-span-2">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium">Fishing Details</h3>
              <button className="text-sm text-ocean-teal dark:text-ocean-light hover:underline">
                Edit
              </button>
            </div>
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-3">Boat Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Boat Name
                  </div>
                  <div className="text-sm font-medium">
                    {profileData.boatInfo.name}
                  </div>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Registration Number
                  </div>
                  <div className="text-sm font-medium">
                    {profileData.boatInfo.registrationNumber}
                  </div>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Boat Type
                  </div>
                  <div className="text-sm font-medium">
                    {profileData.boatInfo.type}
                  </div>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Capacity
                  </div>
                  <div className="text-sm font-medium">
                    {profileData.boatInfo.capacity}
                  </div>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Length
                  </div>
                  <div className="text-sm font-medium">
                    {profileData.boatInfo.length}
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-3">Fishing Areas</h4>
              <div className="flex flex-wrap gap-2">
                {profileData.fishingAreas.map((area, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 bg-ocean-teal/10 dark:bg-ocean-teal/20 text-ocean-teal dark:text-ocean-light rounded-full text-sm"
                  >
                    <MapPinIcon className="h-3 w-3 inline-block mr-1" />
                    {area}
                  </div>
                ))}
                <button className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm flex items-center">
                  <PlusIcon className="h-3 w-3 mr-1" />
                  Add Area
                </button>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-3">Target Species</h4>
              <div className="flex flex-wrap gap-2">
                {profileData.targetSpecies.map((species, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                  >
                    <FishIcon className="h-3 w-3 inline-block mr-1" />
                    {species}
                  </div>
                ))}
                <button className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm flex items-center">
                  <PlusIcon className="h-3 w-3 mr-1" />
                  Add Species
                </button>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-start">
                <InfoIcon className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Keeping your profile information accurate and up-to-date helps
                  us provide better services and ensures you receive appropriate
                  assistance during emergencies.
                </p>
              </div>
            </div>
          </DashboardCard>
        </div>
      )}
      {/* Upload Document Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full mx-4 p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium">Upload Document</h3>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Document Type
                </label>
                <select className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ocean-teal dark:focus:ring-ocean-light transition-colors">
                  <option>Valid ID</option>
                  <option>Proof of Fishing Activity</option>
                  <option>Barangay Certificate</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Upload Method
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <CameraIcon className="h-8 w-8 text-ocean-teal dark:text-ocean-light mb-2" />
                    <span className="text-sm">Take Photo</span>
                  </button>
                  <button className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <FileTextIcon className="h-8 w-8 text-ocean-teal dark:text-ocean-light mb-2" />
                    <span className="text-sm">Upload File</span>
                  </button>
                </div>
              </div>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                <UploadIcon className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Drag and drop your file here, or click to browse
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Supports: JPG, PNG, PDF (Max 10MB)
                </p>
                <input
                  type="file"
                  className="hidden"
                  accept=".jpg,.jpeg,.png,.pdf"
                />
                <button className="mt-4 px-4 py-2 bg-ocean-teal text-white rounded-lg hover:bg-ocean-blue transition-colors text-sm">
                  Browse Files
                </button>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-start">
                  <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 mr-2" />
                  <p className="text-xs text-blue-600 dark:text-blue-400">
                    Make sure your document is clearly visible and all
                    information is legible. Blurry or incomplete documents may
                    delay your verification process.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <button
                onClick={() => setShowUploadModal(false)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none transition-colors"
              >
                Cancel
              </button>
              <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-ocean-teal hover:bg-ocean-blue focus:outline-none transition-colors">
                Upload Document
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
