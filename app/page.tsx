'use client';


import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import UserManagement from '../components/UserManagement'
import RoleManagement from '../components/RoleManagment'
import PermissionManagement from '../components/PermissionManagement'
import Dashboard from '../components/Dashboard'
import Sidebar from '../components/Sidebar'
import ActivityLogs from '../components/ActivityLogs'
import PasswordManagement from '../components/PasswordManagement'
import TwoFactorAuth from '../components/TwoFactorAuth'

// Define ActiveTab type
type ActiveTab = 'dashboard' | 'users' | 'roles' | 'permissions' | 'logs' | 'password' | '2fa';

export default function Home() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard'); // Typing setActiveTab explicitly

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'users':
        return <UserManagement />
      case 'roles':
        return <RoleManagement />
      case 'permissions':
        return <PermissionManagement />
      case 'logs':
        return <ActivityLogs />
      case 'password':
        return <PasswordManagement />
      case '2fa':
        return <TwoFactorAuth />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} /> {/* Passing activeTab and setActiveTab */}
      <main className="flex-1 p-8 overflow-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">RBAC Admin Dashboard</h1>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
