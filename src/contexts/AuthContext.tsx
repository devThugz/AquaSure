import React, { useEffect, useState, createContext, useContext } from 'react';
// Define user roles
export type UserRole = 'super_admin' | 'admin' | 'user';
// Define user interface
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  region?: string;
  verified: boolean;
  createdAt: Date;
}
// Define context interface
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, region: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}
// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);
// AuthProvider component
export function AuthProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('aquasure_user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      // Convert string date to Date object
      if (parsedUser.createdAt) {
        parsedUser.createdAt = new Date(parsedUser.createdAt);
      } else {
        parsedUser.createdAt = new Date();
      }
      setUser(parsedUser);
    }
    setIsLoading(false);
  }, []);
  // Register function - in a real app, this would call Firebase Auth
  const register = async (name: string, email: string, password: string, region: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // In a real app, this would create a Firebase Auth user and then store additional data in Firestore
      // const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      // const uid = userCredential.user.uid;
      // Mock user creation with a random ID
      const mockUserId = 'user_' + Math.random().toString(36).substr(2, 9);
      // Determine role based on email domain
      // This would be enforced server-side in a real app
      let role: UserRole = 'user';
      // Create user document
      const newUser: User = {
        id: mockUserId,
        name,
        email,
        role,
        region,
        verified: false,
        createdAt: new Date()
      };
      // In a real app, store in Firestore
      // await firebase.firestore().collection('users').doc(uid).set(newUser);
      // Do not automatically log in after registration
      // Instead, redirect to login page
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  // Login function - in a real app, this would call Firebase Auth
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // In a real app, this would authenticate with Firebase and fetch user data from Firestore
      // const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      // const uid = userCredential.user.uid;
      // const userDoc = await firebase.firestore().collection('users').doc(uid).get();
      // const userData = userDoc.data();
      // Determine role based on email pattern
      // Note: In a real app, this should be enforced server-side and not just client-side
      let role: UserRole;
      let avatar: string;
      if (email.includes('superadmin@aquasure.com')) {
        role = 'super_admin';
        avatar = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
      } else if (email.includes('admin@aquasure.com')) {
        role = 'admin';
        avatar = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
      } else {
        role = 'user';
        avatar = 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
      }
      // Mock user with role based on email
      const mockUser: User = {
        id: 'user_' + Math.random().toString(36).substr(2, 9),
        name: email.split('@')[0],
        email,
        role,
        avatar,
        verified: true,
        createdAt: new Date(),
        region: 'Batangas'
      };
      setUser(mockUser);
      localStorage.setItem('aquasure_user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  // Logout function
  const logout = () => {
    // In a real app, this would sign out from Firebase Auth
    // await firebase.auth().signOut();
    setUser(null);
    localStorage.removeItem('aquasure_user');
  };
  return <AuthContext.Provider value={{
    user,
    login,
    register,
    logout,
    isLoading
  }}>
      {children}
    </AuthContext.Provider>;
}
// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};