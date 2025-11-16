import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
interface DashboardCardProps {
  children: React.ReactNode;
  className?: string;
  glowEffect?: boolean;
  gradient?: boolean;
}
export const DashboardCard: React.FC<DashboardCardProps> = ({
  children,
  className = '',
  glowEffect = false,
  gradient = false
}) => {
  const {
    darkMode
  } = useTheme();
  return <div className={`dashboard-card ${className} ${glowEffect ? 'shadow-glow' : ''} 
        ${gradient ? 'gradient-border' : ''} ${darkMode ? 'dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 dark:shadow-card-dark' : 'bg-white text-gray-900 border-gray-200 shadow-card'} transition-colors duration-300`}>
      {children}
    </div>;
};