import { User, Role, Permissions, ActivityLog } from '../../rbac-ui/types';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Helper function for JSON parsing with error handling
const parseJSON = <T>(data: string | null, defaultValue: T): T => {
  try {
    return data ? JSON.parse(data) : defaultValue;
  } catch (error) {
    console.error('Failed to parse JSON:', error);
    return defaultValue;
  }
};

export const fetchUsers = async (): Promise<User[]> => {
  await delay(500);
  return parseJSON(localStorage.getItem('users'), []);
};

export const addUser = async (user: Omit<User, 'id'>): Promise<User> => {
  await delay(500);
  const users = await fetchUsers();
  const newUser = { ...user, id: Date.now().toString() };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  return newUser;
};

export const updateUser = async (user: User): Promise<User> => {
  await delay(500);
  const users = await fetchUsers();
  const index = users.findIndex((u) => u.id === user.id);
  if (index !== -1) {
    users[index] = user;
    localStorage.setItem('users', JSON.stringify(users));
    return user;
  }
  throw new Error('User not found');
};

export const deleteUser = async (userId: string): Promise<void> => {
  await delay(500);
  const users = await fetchUsers();
  const filteredUsers = users.filter((u) => u.id !== userId);
  localStorage.setItem('users', JSON.stringify(filteredUsers));
};

export const fetchRoles = async (): Promise<Role[]> => {
  await delay(500);
  return parseJSON(localStorage.getItem('roles'), []);
};

export const addRole = async (role: Omit<Role, 'id'>): Promise<Role> => {
  await delay(500);
  const roles = await fetchRoles();
  const newRole = { ...role, id: Date.now().toString() };
  roles.push(newRole);
  localStorage.setItem('roles', JSON.stringify(roles));
  return newRole;
};

export const updateRole = async (role: Role): Promise<Role> => {
  await delay(500);
  const roles = await fetchRoles();
  const index = roles.findIndex((r) => r.id === role.id);
  if (index !== -1) {
    roles[index] = role;
    localStorage.setItem('roles', JSON.stringify(roles));
    return role;
  }
  throw new Error('Role not found');
};

export const deleteRole = async (roleId: string): Promise<void> => {
  await delay(500);
  const roles = await fetchRoles();
  const filteredRoles = roles.filter((r) => r.id !== roleId);
  localStorage.setItem('roles', JSON.stringify(filteredRoles));
};

export const fetchPermissions = async (): Promise<Permissions> => {
  await delay(500);
  return parseJSON(localStorage.getItem('permissions'), {});
};

export const updatePermissions = async (permissions: Permissions): Promise<Permissions> => {
  await delay(500);
  localStorage.setItem('permissions', JSON.stringify(permissions));
  return permissions;
};

export const fetchActivityLogs = async (): Promise<ActivityLog[]> => {
  await delay(500);
  return parseJSON(localStorage.getItem('activityLogs'), []);
};

export const changePassword = async (currentPassword: string, newPassword: string): Promise<void> => {
  await delay(500);
  // In a real application, this would make an API call to change the password
  console.log('Password changed successfully');
};

export const setupTwoFactorAuth = async (): Promise<{ qrCode: string }> => {
  await delay(500);
  // In a real application, this would make an API call to set up 2FA
  return { qrCode: 'https://example.com/qr-code' };
};

export const verifyTwoFactorAuth = async (code: string): Promise<void> => {
  await delay(500);
  // In a real application, this would make an API call to verify the 2FA code
  if (code !== '123456') {
    throw new Error('Invalid verification code');
  }
};
