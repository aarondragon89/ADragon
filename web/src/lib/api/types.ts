export type ClaimEffect = 'allow' | 'deny';
export type AssignmentSource = 'system' | 'admin' | 'self_service' | 'import';

export type User = {
  id: number;
  email: string;
  username: string;
  displayName: string | null;
  status: string;
  emailVerified: boolean;
  lastLoginAt: string | null;
};

export type Role = {
  id: string;
  name: string;
  code: string;
  description: string | null;
  priority: number;
  isSystem: boolean;
};

export type Claim = {
  id: string;
  code: string;
  resource: string;
  action: string;
  effect: ClaimEffect;
  description: string | null;
};

export type UserRole = {
  id: string;
  userId: number;
  roleId: string;
  source: AssignmentSource;
  isPrimary: boolean;
};

export type UserClaim = {
  id: string;
  userId: number;
  claimId: string;
  source: AssignmentSource;
  overrideEffect: ClaimEffect | null;
};

export type RoleClaim = {
  id: string;
  roleId: string;
  claimId: string;
  source: AssignmentSource;
};

export type DashboardData = {
  users: User[];
  roles: Role[];
  claims: Claim[];
  userRoles: UserRole[];
  userClaims: UserClaim[];
  roleClaims: RoleClaim[];
};