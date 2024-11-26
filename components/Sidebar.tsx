import { motion } from 'framer-motion'
import { Users, Shield, Key, LayoutDashboard, Activity, Lock, Smartphone } from 'lucide-react'

// Define the ActiveTab type here or import it
type ActiveTab = 'dashboard' | 'users' | 'roles' | 'permissions' | 'logs' | 'password' | '2fa';

interface SidebarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'roles', label: 'Roles', icon: Shield },
    { id: 'permissions', label: 'Permissions', icon: Key },
    { id: 'logs', label: 'Activity Logs', icon: Activity },
    { id: 'password', label: 'Change Password', icon: Lock },
    { id: '2fa', label: 'Two-Factor Auth', icon: Smartphone },
  ]

  return (
    <nav className="w-64 bg-white dark:bg-gray-800 shadow-lg">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">RBAC Admin</h2>
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id as ActiveTab)} // Casting tab.id as ActiveTab
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-150 ease-in-out flex items-center ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 w-1 h-8 bg-blue-600"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <tab.icon className="mr-3 h-5 w-5" />
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar
