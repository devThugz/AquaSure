import React, { useState } from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FishIcon, KeyIcon, MailIcon, ArrowLeftIcon } from 'lucide-react';
export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const {
    login,
    user
  } = useAuth();
  const navigate = useNavigate();
  // If already logged in, redirect to dashboard
  if (user) {
    // Route based on user role
    if (user.role === 'super_admin') {
      return <Navigate to="/super-admin" replace />;
    } else if (user.role === 'admin') {
      return <Navigate to="/admin" replace />;
    } else {
      return <Navigate to="/dashboard" replace />;
    }
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await login(email, password);
      // Redirect happens automatically based on user role in the above if statement
    } catch (err) {
      setError('Failed to login. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="min-h-screen bg-gradient-to-br from-teal-500 via-teal-600 to-blue-600 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute top-20 left-10 w-64 h-64 bg-teal-400 opacity-20"></div>
        <div className="blob absolute bottom-20 right-10 w-80 h-80 bg-blue-400 opacity-20"></div>
        <div className="blob absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400 opacity-10"></div>
      </div>
      {/* Back to Home button */}
      <div className="absolute top-4 left-4 z-10">
        <Link to="/" className="flex items-center px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105">
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline font-medium">Back to Home</span>
          <span className="sm:hidden font-medium">Back</span>
        </Link>
      </div>
      <div className="w-full max-w-md mx-auto relative z-10">
        {/* Logo and Title */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="flex justify-center mb-5 sm:mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white rounded-full shadow-2xl transform hover:scale-110 transition-transform duration-300 overflow-hidden">
                <img src="/AQUA.png" alt="AquaSure Logo" className="h-16 w-16 sm:h-20 sm:w-20 object-cover" />
              </div>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-3 tracking-tight drop-shadow-lg">
            AquaSure
          </h2>
          <p className="text-sm sm:text-base text-teal-50 max-w-sm mx-auto px-4 font-medium">
            Smart Insurance and Management for Fisher Folks
          </p>
        </div>
        {/* Login Form Card */}
        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          <div className="p-6 sm:p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <MailIcon className="h-5 w-5 text-gray-400 group-focus-within:text-teal-500 transition-colors" />
                  </div>
                  <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} className="appearance-none block w-full pl-11 pr-4 py-3.5 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm sm:text-base transition-all duration-200" placeholder="you@example.com" />
                </div>
              </div>
              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <KeyIcon className="h-5 w-5 text-gray-400 group-focus-within:text-teal-500 transition-colors" />
                  </div>
                  <input id="password" name="password" type="password" autoComplete="current-password" required value={password} onChange={e => setPassword(e.target.value)} className="appearance-none block w-full pl-11 pr-4 py-3.5 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm sm:text-base transition-all duration-200" placeholder="••••••••" />
                </div>
              </div>
              {/* Error Message */}
              {error && <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 p-4 rounded-lg animate-shake">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-red-800 dark:text-red-300">
                        {error}
                      </p>
                    </div>
                  </div>
                </div>}
              {/* Submit Button */}
              <div className="pt-2">
                <button type="submit" disabled={isLoading} className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-base font-bold text-white bg-gradient-to-r from-teal-600 via-teal-500 to-blue-600 hover:from-teal-700 hover:via-teal-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-teal-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-2xl">
                  {isLoading ? <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </> : 'Sign In'}
                </button>
              </div>
            </form>
            {/* Divider */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-gray-200 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-semibold">
                    New to AquaSure?
                  </span>
                </div>
              </div>
              {/* Sign Up Button */}
              <div className="mt-6">
                <Link to="/signup" className="w-full flex justify-center py-3.5 px-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl shadow-sm bg-white dark:bg-gray-700 text-base font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-200 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                  Create an Account
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Text */}
        <p className="mt-6 text-center text-xs sm:text-sm text-white/90 px-4 font-medium drop-shadow">
          By signing in, you agree to our{' '}
          <a href="#" className="underline hover:text-white transition-colors">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="underline hover:text-white transition-colors">
            Privacy Policy
          </a>
        </p>
      </div>
      <style>{`
        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }
          10%, 30%, 50%, 70%, 90% {
            transform: translateX(-5px);
          }
          20%, 40%, 60%, 80% {
            transform: translateX(5px);
          }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        .blob {
          animation: blob-animation 20s ease-in-out infinite;
        }
        @keyframes blob-animation {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(30px, 10px) scale(1.05);
          }
        }
      `}</style>
    </div>;
}