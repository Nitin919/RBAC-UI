/**
 * Represents a user in the system.
 */
export interface User {
    id: string; // Unique identifier for the user
    name: string; // Full name of the user
    email: string; // Email address of the user
    role: string; // Role ID associated with the user
    status: 'active' | 'inactive'; // User account status
  }
  
  /**
   * Represents a role in the system.
   */
  export interface Role {
    id: string; // Unique identifier for the role
    name: string; // Name of the role (e.g., "Admin", "Editor")
    description: string; // Description of the role and its responsibilities
  }
  
  /**
   * Represents permissions associated with roles.
   */
  export interface Permissions {
    [roleId: string]: {
      [permission: string]: boolean; // Key-value pair of permission names and their enabled/disabled state
    };
  }
  
  /**
   * Represents a log of user activity in the system.
   */
  export interface ActivityLog {
    id: string; // Unique identifier for the log entry
    userId: string; // ID of the user who performed the action
    action: string; // Description of the action (e.g., "Updated Profile")
    timestamp: string; // ISO 8601 formatted timestamp of the activity
  }
  