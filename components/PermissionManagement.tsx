import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fetchRoles, fetchPermissions, updatePermissions } from '../utils/api'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Card, CardContent } from '@/components/ui/card'

// Define types for Role and Permissions
interface Role {
  id: string
  name: string
}

interface Permissions {
  [roleId: string]: {
    [permission: string]: boolean
  }
}

const PermissionManagement = () => {
  // Initialize state for roles, permissions, and loading state
  const [roles, setRoles] = useState<Role[]>([]) // roles is an array of Role objects
  const [permissions, setPermissions] = useState<Permissions>({}) // permissions is a mapping of roleId to permission
  const [loading, setLoading] = useState<boolean>(true) // State to manage loading
  const [error, setError] = useState<string | null>(null) // State to manage errors
  const [successMessage, setSuccessMessage] = useState<string | null>(null) // State for success feedback

  // Permission types (create, read, update, delete)
  const permissionTypes = ['create', 'read', 'update', 'delete']

  // Load roles and permissions from the server when the component is mounted
  useEffect(() => {
    loadRolesAndPermissions()
  }, [])

  const loadRolesAndPermissions = async () => {
    try {
      setLoading(true)
      const [fetchedRoles, fetchedPermissions] = await Promise.all([fetchRoles(), fetchPermissions()])
      setRoles(fetchedRoles)
      setPermissions(fetchedPermissions)
      setError(null) // Reset any previous error
    } catch (error) {
      console.error('Error loading roles or permissions:', error)
      setError('Failed to load roles and permissions. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // Handle checkbox toggle for permissions
  const handlePermissionChange = (roleId: string, permission: string, isChecked: boolean) => {
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [roleId]: {
        ...prevPermissions[roleId],
        [permission]: isChecked,
      },
    }))
  }

  // Save the updated permissions to the server
  const handleSavePermissions = async () => {
    try {
      setSuccessMessage(null) // Clear any previous success message
      await updatePermissions(permissions)
      setSuccessMessage('Permissions saved successfully')
      loadRolesAndPermissions() // Optionally refresh roles and permissions after saving
    } catch (error) {
      console.error('Error saving permissions:', error)
      setError('Failed to save permissions. Please try again.')
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Permission Management</h2>

      {/* Show loading state */}
      {loading && (
        <motion.div className="flex justify-center items-center">
          <div className="spinner">Loading...</div>
        </motion.div>
      )}

      {/* Show error message */}
      {error && <div className="text-red-500">{error}</div>}

      {/* Show success message */}
      {successMessage && <div className="text-green-500">{successMessage}</div>}

      <Card>
        <CardContent>
          {/* If not loading, display the table */}
          {!loading && !error && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Role</TableHead>
                  {permissionTypes.map((type) => (
                    <TableHead key={type} className="text-center">
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {roles.map((role) => (
                  <TableRow key={role.id}>
                    <TableCell className="font-medium">{role.name}</TableCell>
                    {permissionTypes.map((type) => (
                      <TableCell key={type} className="text-center">
                        <Checkbox
                          checked={!!permissions[role.id]?.[type] || false} // Ensure it defaults to false
                          onCheckedChange={(checked: boolean) => handlePermissionChange(role.id, type, checked)}
                        />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}

          {/* Save button */}
          <div className="mt-6 flex justify-end">
            <Button onClick={handleSavePermissions}>Save Permissions</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default PermissionManagement
