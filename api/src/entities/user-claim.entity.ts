import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditColumnsEntity } from './audit-columns.entity';
import { AssignmentSource, ClaimEffect } from './claim.enums';
import { User } from './user.entity';
import { Claim } from './claim.entity';

@Entity({ name: 'user_claims' })
@Index('uq_user_claims_user_id_claim_id', ['userId', 'claimId'], { unique: true })
@Index('idx_user_claims_user_id', ['userId'])
@Index('idx_user_claims_claim_id', ['claimId'])
@Index('idx_user_claims_expires_at', ['expiresAt'])
export class UserClaim extends AuditColumnsEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ type: 'integer', name: 'user_id' })
  userId: number;

  @Column({ type: 'uuid', name: 'claim_id' })
  claimId: string;

  @Column({ type: 'integer', name: 'assigned_by_user_id', nullable: true })
  assignedByUserId: number | null;

  @Column({ type: 'enum', enum: AssignmentSource, name: 'source', default: AssignmentSource.ADMIN })
  source: AssignmentSource;

  @Column({
    type: 'enum',
    enum: ClaimEffect,
    name: 'override_effect',
    nullable: true,
  })
  overrideEffect: ClaimEffect | null;

  @Column({ type: 'timestamptz', name: 'assigned_at', default: () => 'NOW()' })
  assignedAt: Date;

  @Column({ type: 'timestamptz', name: 'expires_at', nullable: true })
  expiresAt: Date | null;

  @Column({ type: 'text', name: 'reason', nullable: true })
  reason: string | null;

  @Column({ type: 'jsonb', name: 'metadata', nullable: true })
  metadata: Record<string, unknown> | null;

  @ManyToOne(() => User, (user) => user.claims, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id', foreignKeyConstraintName: 'fk_user_claims_user_id' })
  user: User;

  @ManyToOne(() => Claim, (claim) => claim.userClaims, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'claim_id', foreignKeyConstraintName: 'fk_user_claims_claim_id' })
  claim: Claim;

  @ManyToOne(() => User, (user) => user.assignedClaimLinks, { onDelete: 'SET NULL' })
  @JoinColumn({
    name: 'assigned_by_user_id',
    foreignKeyConstraintName: 'fk_user_claims_assigned_by_user_id',
  })
  assignedByUser: User | null;
}
