import { apiClient } from '@adragon-web/api';

export interface LoginRequest {
  email: string;
  password: string;
}

export type LoginPayload = {
  accessToken?: string;
  refreshToken?: string;
  access_token?: string;
  refresh_token?: string;
  user?: unknown;
  data?: LoginPayload;
};

export const authApi = {
  // Login uses plain JSON because @adragon-web apiClient encrypts POST bodies.
  async login(credentials: LoginRequest): Promise<LoginPayload> {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(credentials),
    });

    const payload = await response.json().catch(() => null);

    if (!response.ok) {
      const message =
        payload && typeof payload === 'object' && 'message' in payload && typeof payload.message === 'string'
          ? payload.message
          : 'Login failed';
      throw new Error(message);
    }

    return (payload && typeof payload === 'object' && 'data' in payload ? payload : { data: payload }) as LoginPayload;
  },

  logout: () => apiClient.post('/auth/logout', {}),
  profile: () => apiClient.get('/auth/profile'),
};

export function normalizeAuthPayload(response: unknown): LoginPayload {
  const payload = response as LoginPayload;
  return payload?.data ?? payload;
}

export function persistAuthSession(
  response: unknown,
  rememberDevice = false,
): LoginPayload {
  if (typeof window === 'undefined') {
    return normalizeAuthPayload(response);
  }

  const payload = normalizeAuthPayload(response);

  const token = payload.accessToken ?? payload.access_token;

  if (!token) {
    throw new Error('Login failed: no access token received.');
  }

  const cookieParts = [
    `access_token=${encodeURIComponent(token)}`,
    'Path=/',
    'SameSite=Lax',
  ];

  if (rememberDevice) {
    cookieParts.push(`Max-Age=${30 * 24 * 60 * 60}`); // 30 days
  } else {
    cookieParts.push(`Max-Age=${24 * 60 * 60}`); // 1 day
  }

  document.cookie = cookieParts.join('; ');

  return payload;
}

export function clearAuthSession(): void {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('user');

  document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax';
  document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/admin; SameSite=Lax';
}
