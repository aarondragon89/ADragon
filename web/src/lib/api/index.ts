import { createApi } from '@adragon-web/api';

export const userApi = createApi('user');
export const userRoleApi = createApi('user-role');
export const userClaimApi = createApi('user-claim');
export const roleApi = createApi('role');
export const roleClaimApi = createApi('role-claim');
export const claimApi = createApi('claim');

export {
  authApi,
  clearAuthSession,
  normalizeAuthPayload,
  persistAuthSession,
} from './authApi';

export type {
  Claim,
  DashboardData,
  Role,
  RoleClaim,
  User,
  UserClaim,
  UserRole,
} from './types';