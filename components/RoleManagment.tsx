import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fetchRoles, addRole, updateRole, deleteRole } from '../utils/api'
import { Plus, Edit2, Trash2, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

// Define the Role type
interface Role {
  id: string
  name: string
  description: string
}

const RoleManagement = () => {
  // Define default roles to initialize the state
  const defaultRoles: Role[] = [
    { id: '1', name: 'Admin', description: 'Administrator with full permissions' },
    { id: '2', name: 'Editor', description: 'Can edit content' },
    { id: '3', name: 'Viewer', description: 'Can only view content' },
  ]

  const [roles, setRoles] = useState<Role[]>(defaultRoles) // Initialize with default roles
  const [editingRole, setEditingRole] = useState<Role | null>(null) // Allow editingRole to be null
  const [newRole, setNewRole] = useState({ name: '', description: '' })
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    loadRoles()
  }, [])

  // Load roles from the API
  const loadRoles = async () => {
    const fetchedRoles = await fetchRoles()
    setRoles(fetchedRoles.length > 0 ? fetchedRoles : defaultRoles) // Use default roles if none are fetched
  }

  const handleAddRole = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newRole.name) {
      alert('Please enter a role name')
      return
    }
    await addRole(newRole)
    setNewRole({ name: '', description: '' })
    loadRoles()
  }

  const handleUpdateRole = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingRole?.name) { // Handle null case for editingRole
      alert('Please enter a role name')
      return
    }
    await updateRole(editingRole)
    setEditingRole(null)
    loadRoles()
  }

  const handleDeleteRole = async (roleId: string) => {
    if (window.confirm('Are you sure you want to delete this role?')) {
      await deleteRole(roleId)
      loadRoles()
    }
  }

  const filteredRoles = roles.filter(role =>
    role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Role Management</h2>
      <Card className="mb-8">
        <CardContent>
          <form onSubmit={handleAddRole} className="flex items-end space-x-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Role Name"
                value={newRole.name}
                onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
                className="mb-2"
              />
              <Input
                type="text"
                placeholder="Description"
                value={newRole.description}
                onChange={(e) => setNewRole({ ...newRole, description: e.target.value })}
              />
            </div>
            <Button type="submit" className="flex items-center">
              <Plus className="mr-2 h-4 w-4" /> Add Role
            </Button>
          </form>
        </CardContent>
      </Card>
      <div className="mb-4 flex items-center">
        <Search className="mr-2 h-4 w-4 text-gray-500" />
        <Input
          type="text"
          placeholder="Search roles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1"
        />
      </div>
      <div className="space-y-4">
        {filteredRoles.map((role) => (
          <motion.div
            key={role.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Card>
              <CardContent className="p-4">
                {editingRole && editingRole.id === role.id ? (
                  <form onSubmit={handleUpdateRole} className="flex items-end space-x-4">
                    <div className="flex-1">
                      <Input
                        type="text"
                        value={editingRole.name}
                        onChange={(e) => setEditingRole({ ...editingRole, name: e.target.value })}
                        className="mb-2"
                      />
                      <Input
                        type="text"
                        value={editingRole.description}
                        onChange={(e) => setEditingRole({ ...editingRole, description: e.target.value })}
                      />
                    </div>
                    <Button type="submit" className="bg-green-500 hover:bg-green-600">
                      Save
                    </Button>
                    <Button onClick={() => setEditingRole(null)} variant="secondary">
                      Cancel
                    </Button>
                  </form>
                ) : (
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{role.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{role.description}</p>
                    </div>
                    <div className="space-x-2">
                      <Button onClick={() => setEditingRole(role)} variant="outline" size="icon">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button onClick={() => handleDeleteRole(role.id)} variant="destructive" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default RoleManagement
