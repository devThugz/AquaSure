import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth, UserRole } from '../context/AuthContext';
export const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<UserRole>('user');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    user
  } = useAuth();
  const navigate = useNavigate();
  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      if (user.role === 'super-admin') {
        navigate('/super-admin');
      } else if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/user');
      }
    }
  }, [user, navigate]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setIsLoading(true);
    try {
      await register(name, email, password, role);
      // Redirect handled in the useEffect above
    } catch (err) {
      setError('Registration failed. Please try again.');
      setIsLoading(false);
    }
  };
  return <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 to-blue-700">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="text-center text-3xl font-extrabold text-white">
            AquaSure
          </h1>
          <h2 className="mt-2 text-center text-xl text-blue-200">
            Create your account
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                  {error}
                </div>}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full name
                </label>
                <div className="mt-1">
                  <input id="name" name="name" type="text" autoComplete="name" required value={name} onChange={e => setName(e.target.value)} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input id="password" name="password" type="password" autoComplete="new-password" required value={password} onChange={e => setPassword(e.target.value)} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input id="confirmPassword" name="confirmPassword" type="password" autoComplete="new-password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                </div>
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                  Account Type
                </label>
                <div className="mt-1">
                  <select id="role" name="role" value={role} onChange={e => setRole(e.target.value as UserRole)} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <option value="user">Fisher Folk</option>
                    <option value="admin">LGU Admin</option>
                    <option value="super-admin">Super Admin</option>
                  </select>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Note: In a real application, admin and super-admin roles would
                  require approval.
                </p>
              </div>
              <div>
                <button type="submit" disabled={isLoading} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50">
                  {isLoading ? 'Creating account...' : 'Create account'}
                </button>
              </div>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Already have an account?
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <Link to="/login" className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};