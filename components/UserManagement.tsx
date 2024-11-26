import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchUsers, addUser, updateUser, deleteUser, fetchRoles } from '../utils/api';
import { User, Role } from '../types';
import { Plus, Edit2, Trash2, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [newUser, setNewUser] = useState<Omit<User, 'id'>>({
    name: '',
    email: '',
    role: '',
    status: 'active',
  });
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    loadUsers();
    loadRoles();
  }, []);

  const loadUsers = async () => {
    const fetchedUsers = await fetchUsers();
    setUsers(fetchedUsers);
  };

  const loadRoles = async () => {
    const fetchedRoles = await fetchRoles();
    setRoles(fetchedRoles);
  };

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email || !newUser.role) {
      alert('Please fill in all fields');
      return;
    }
    await addUser(newUser);
    setNewUser({ name: '', email: '', role: '', status: 'active' });
    loadUsers();
  };

  const handleUpdateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUser || !editingUser.name || !editingUser.email || !editingUser.role) {
      alert('Please fill in all fields');
      return;
    }
    await updateUser(editingUser);
    setEditingUser(null);
    loadUsers();
  };

  const handleDeleteUser = async (userId: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      await deleteUser(userId);
      loadUsers();
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">User Management</h2>
      <Card className="mb-8">
        <CardContent>
          <form onSubmit={handleAddUser} className="flex items-end space-x-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Name"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                className="mb-2"
              />
              <Input
                type="email"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />
            </div>
            <Select
              value={newUser.role}
              onValueChange={(value) => setNewUser({ ...newUser, role: value })}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role) => (
                  <SelectItem key={role.id} value={role.id}>
                    {role.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button type="submit" className="flex items-center">
              <Plus className="mr-2 h-4 w-4" /> Add User
            </Button>
          </form>
        </CardContent>
      </Card>
      <div className="mb-4 flex items-center">
        <Search className="mr-2 h-4 w-4 text-gray-500" />
        <Input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1"
        />
      </div>
      <div className="space-y-4">
        {filteredUsers.map((user) => (
          <motion.div
            key={user.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Card>
              <CardContent className="p-4">
                {editingUser && editingUser.id === user.id ? (
                  <form onSubmit={handleUpdateUser} className="flex items-end space-x-4">
                    <div className="flex-1">
                      <Input
                        type="text"
                        value={editingUser.name}
                        onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                        className="mb-2"
                      />
                      <Input
                        type="email"
                        value={editingUser.email}
                        onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                      />
                    </div>
                    <Select
                      value={editingUser.role}
                      onValueChange={(value) => setEditingUser({ ...editingUser, role: value })}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        {roles.map((role) => (
                          <SelectItem key={role.id} value={role.id}>
                            {role.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={editingUser.status === 'active'}
                        onCheckedChange={(checked) =>
                          setEditingUser({ ...editingUser, status: checked ? 'active' : 'inactive' })
                        }
                      />
                      <span>{editingUser.status === 'active' ? 'Active' : 'Inactive'}</span>
                    </div>
                    <Button type="submit" className="bg-green-500 hover:bg-green-600">
                      Save
                    </Button>
                    <Button onClick={() => setEditingUser(null)} variant="secondary">
                      Cancel
                    </Button>
                  </form>
                ) : (
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {user.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Role: {roles.find((role) => role.id === user.role)?.name || 'Unknown'}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Switch
                          checked={user.status === 'active'}
                          onCheckedChange={(checked) =>
                            updateUser({ ...user, status: checked ? 'active' : 'inactive' })
                          }
                        />
                        <span>{user.status === 'active' ? 'Active' : 'Inactive'}</span>
                      </div>
                      <div className="space-x-2">
                        <Button onClick={() => setEditingUser(user)} variant="outline" size="icon">
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button
                          onClick={() => handleDeleteUser(user.id)}
                          variant="destructive"
                          size="icon"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
