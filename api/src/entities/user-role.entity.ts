import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditColumnsEntity } from './audit-columns.entity';
import { AssignmentSource } from './claim.enums';
import { User } from './user.entity';
import { Role } from './role.entity';

@Entity({ name: 'user_roles' })
@Index('uq_user_roles_user_id_role_id', ['userId', 'roleId'], { unique: true })
@Index('idx_user_roles_user_id', ['userId'])
@Index('idx_user_roles_role_id', ['roleId'])
@Index('idx_user_roles_expires_at', ['expiresAt'])
export class UserRole extends AuditColumnsEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ type: 'integer', name: 'user_id' })
  userId: number;

  @Column({ type: 'uuid', name: 'role_id' })
  roleId: string;

  @Column({ type: 'integer', name: 'assigned_by_user_id', nullable: true })
  assignedByUserId: number | null;

  @Column({ type: 'enum', enum: AssignmentSource, name: 'source', default: AssignmentSource.ADMIN })
  source: AssignmentSource;

  @Column({ type: 'boolean', name: 'is_primary', default: false })
  isPrimary: boolean;

  @Column({ type: 'timestamptz', name: 'assigned_at', default: () => 'NOW()' })
  assignedAt: Date;

  @Column({ type: 'timestamptz', name: 'expires_at', nullable: true })
  expiresAt: Date | null;

  @Column({ type: 'jsonb', name: 'metadata', nullable: true })
  metadata: Record<string, unknown> | null;

  @ManyToOne(() => User, (user) => user.roles, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id', foreignKeyConstraintName: 'fk_user_roles_user_id' })
  user: User;

  @ManyToOne(() => Role, (role) => role.users, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'role_id', foreignKeyConstraintName: 'fk_user_roles_role_id' })
  role: Role;

  @ManyToOne(() => User, (user) => user.assignedRoleLinks, { onDelete: 'SET NULL' })
  @JoinColumn({
    name: 'assigned_by_user_id',
    foreignKeyConstraintName: 'fk_user_roles_assigned_by_user_id',
  })
  assignedByUser: User | null;
}
