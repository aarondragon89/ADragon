import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditColumnsEntity } from './audit-columns.entity';
import { ClaimEffect } from './claim.enums';
import { RoleClaim } from './role-claim.entity';
import { UserClaim } from './user-claim.entity';

@Entity({ name: 'claims' })
@Index('uq_claims_code', ['code'], { unique: true })
@Index('uq_claims_resource_action_effect', ['resource', 'action', 'effect'], {
  unique: true,
})
@Index('idx_claims_resource', ['resource'])
@Index('idx_claims_action', ['action'])
export class Claim extends AuditColumnsEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ type: 'varchar', length: 140, name: 'code' })
  code: string;

  @Column({ type: 'varchar', length: 120, name: 'resource' })
  resource: string;

  @Column({ type: 'varchar', length: 120, name: 'action' })
  action: string;

  @Column({ type: 'enum', enum: ClaimEffect, name: 'effect', default: ClaimEffect.ALLOW })
  effect: ClaimEffect;

  @Column({ type: 'text', name: 'description', nullable: true })
  description: string | null;

  @Column({ type: 'jsonb', name: 'condition', nullable: true })
  condition: Record<string, unknown> | null;

  @OneToMany(() => RoleClaim, (roleClaim) => roleClaim.claim)
  roleClaims: RoleClaim[];

  @OneToMany(() => UserClaim, (userClaim) => userClaim.claim)
  userClaims: UserClaim[];
}
