import { BaseEntity } from "@adragon-web/interfaces";

export interface User extends BaseEntity {
    email: string;
    username: string;
    passwordHash?: string | null;
    displayName: string | null;
    status: string;
    emailVerified: boolean;
    lastLoginAt: string | null;
    metadata?: Record<string, unknown> | null;
    roles?: unknown[];
    claims?: unknown[];
}
