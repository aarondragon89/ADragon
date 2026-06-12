import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditColumnsEntity } from './audit-columns.entity';
import { UserRole } from './user-role.entity';
import { RoleClaim } from './role-claim.entity';

@Entity({ name: 'roles' })
@Index('uq_roles_name', ['name'], { unique: true })
@Index('uq_roles_code', ['code'], { unique: true })
@Index('idx_roles_parent_role_id', ['parentRoleId'])
@Index('idx_roles_priority', ['priority'])
export class Role extends AuditColumnsEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ type: 'varchar', length: 120, name: 'name' })
  name: string;

  @Column({ type: 'varchar', length: 80, name: 'code' })
  code: string;

  @Column({ type: 'text', name: 'description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'priority', default: 0 })
  priority: number;

  @Column({ type: 'boolean', name: 'is_system', default: false })
  isSystem: boolean;

  @Column({ type: 'uuid', name: 'parent_role_id', nullable: true })
  parentRoleId: string | null;

  @ManyToOne(() => Role, (role) => role.children, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'parent_role_id', foreignKeyConstraintName: 'fk_roles_parent_role_id' })
  parent: Role | null;

  @OneToMany(() => Role, (role) => role.parent)
  children: Role[];

  @OneToMany(() => UserRole, (userRole) => userRole.role)
  users: UserRole[];

  @OneToMany(() => RoleClaim, (roleClaim) => roleClaim.role)
  claims: RoleClaim[];
}
