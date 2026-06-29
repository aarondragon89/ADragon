import { apiClient, createApi } from '@adragon-web/api';
import { FilterPayload } from '@adragon-web/index';

export const userApi = createApi('user', {
  extend: {
    filterUserWithRoles(params: FilterPayload = {}) {
      return apiClient.post("/user/with-roles", params);
    },
    getCurrentUser: <T>() => apiClient.get<T>("/user/me"),
  }
});
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