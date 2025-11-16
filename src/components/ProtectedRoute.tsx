import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth, UserRole } from '../context/AuthContext';
interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole: UserRole;
}
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole
}) => {
  const {
    user,
    isAuthenticated,
    loading
  } = useAuth();
  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>;
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (user?.role !== requiredRole) {
    // Redirect to appropriate dashboard based on role
    if (user?.role === 'super-admin') {
      return <Navigate to="/super-admin" replace />;
    }
    if (user?.role === 'admin') {
      return <Navigate to="/admin" replace />;
    }
    if (user?.role === 'user') {
      return <Navigate to="/user" replace />;
    }
    // Fallback to login if role is invalid
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};