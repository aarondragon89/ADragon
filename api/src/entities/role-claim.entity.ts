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
import { Role } from './role.entity';
import { Claim } from './claim.entity';

@Entity({ name: 'role_claims' })
@Index('uq_role_claims_role_id_claim_id', ['roleId', 'claimId'], { unique: true })
@Index('idx_role_claims_role_id', ['roleId'])
@Index('idx_role_claims_claim_id', ['claimId'])
@Index('idx_role_claims_expires_at', ['expiresAt'])
export class RoleClaim extends AuditColumnsEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ type: 'uuid', name: 'role_id' })
  roleId: string;

  @Column({ type: 'uuid', name: 'claim_id' })
  claimId: string;

  @Column({ type: 'enum', enum: AssignmentSource, name: 'source', default: AssignmentSource.SYSTEM })
  source: AssignmentSource;

  @Column({ type: 'timestamptz', name: 'expires_at', nullable: true })
  expiresAt: Date | null;

  @Column({ type: 'jsonb', name: 'metadata', nullable: true })
  metadata: Record<string, unknown> | null;

  @ManyToOne(() => Role, (role) => role.claims, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'role_id', foreignKeyConstraintName: 'fk_role_claims_role_id' })
  role: Role;

  @ManyToOne(() => Claim, (claim) => claim.roleClaims, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'claim_id', foreignKeyConstraintName: 'fk_role_claims_claim_id' })
  claim: Claim;
}
