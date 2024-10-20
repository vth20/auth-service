// user
export interface IUser {
  id?: string; // UUID
  email: string;
  userName: string;
  firstName?: string;
  lastName?: string;
  status?: string;
  dateOfBirth?: Date;
  phone?: string;
  lastLoginDate?: Date;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// user_auth_method
export interface IUserAuthMethod {
  id?: string; // UUID
  user_id: string; // UUID
  auth_method: string;
  identifier: string;
  auth_data: string;
  create_by?: string;
  created_at: Date;
  update_by?: string;
  updated_at: Date;
}

// user_refresh_tokens
export interface IUserRefreshToken {
  id?: number; // INT (Auto Increment)
  user_id: string; // UUID
  token: string;
  expiry_timestamp: Date;
  status: string; // e.g. 'ACTIVE', 'INACTIVE'
  created_at: Date;
}

// roles
export interface IRole {
  id?: string; // UUID
  name?: string;
  is_disable: boolean;
  is_deleted: boolean;
  create_by?: string;
  created_at: Date;
  update_by?: string;
  updated_at: Date;
}

// resources
export interface IResource {
  id?: string; // UUID
  name?: string;
  key?: string;
  description?: string;
  is_deleted: boolean;
  create_by?: string;
  created_at: Date;
  update_by?: string;
  updated_at: Date;
}

// permissions
export interface IPermission {
  id?: string; // UUID
  resource_id: string; // UUID
  name?: string;
  key?: string;
  description?: string;
  is_deleted: boolean;
  create_by?: string;
  created_at: Date;
  update_by?: string;
  updated_at: Date;
}

// role_permissions
export interface IRolePermission {
  role_id?: string; // UUID
  permission_id: string; // UUID
  is_deleted: boolean;
  create_by?: string;
  created_at: Date;
  update_by?: string;
  updated_at: Date;
}