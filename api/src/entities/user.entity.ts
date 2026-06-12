import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditColumnsEntity } from './audit-columns.entity';
import { UserRole } from './user-role.entity';
import { UserClaim } from './user-claim.entity';

@Entity({ name: 'users' })
@Index('uq_users_email', ['email'], { unique: true })
@Index('uq_users_username', ['username'], { unique: true })
@Index('idx_users_status', ['status'])
export class User extends AuditColumnsEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column({ type: 'varchar', length: 160, name: 'email' })
  email: string;

  @Column({ type: 'varchar', length: 80, name: 'username' })
  username: string;

  @Column({ type: 'varchar', length: 255, name: 'password_hash', nullable: true })
  passwordHash: string | null;

  @Column({ type: 'varchar', length: 120, name: 'display_name', nullable: true })
  displayName: string | null;

  @Column({ type: 'varchar', length: 32, name: 'status', default: 'active' })
  status: string;

  @Column({ type: 'boolean', name: 'email_verified', default: false })
  emailVerified: boolean;

  @Column({ type: 'timestamptz', name: 'last_login_at', nullable: true })
  lastLoginAt: Date | null;

  @Column({ type: 'jsonb', name: 'metadata', nullable: true })
  metadata: Record<string, unknown> | null;

  @OneToMany(() => UserRole, (userRole) => userRole.user)
  roles: UserRole[];

  @OneToMany(() => UserRole, (userRole) => userRole.assignedByUser)
  assignedRoleLinks: UserRole[];

  @OneToMany(() => UserClaim, (userClaim) => userClaim.user)
  claims: UserClaim[];

  @OneToMany(() => UserClaim, (userClaim) => userClaim.assignedByUser)
  assignedClaimLinks: UserClaim[];
}
