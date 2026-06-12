import { ApiPropertyOptional } from '@nestjs/swagger';
import { AssignmentSource, ClaimEffect } from '../../entities';

export class UpdateUserClaimDto {
  @ApiPropertyOptional({ example: 1 })
  userId?: number;

  @ApiPropertyOptional({ example: '4ef8be25-b1cf-4b9d-8c62-80f9f37c7ef8' })
  claimId?: string;

  @ApiPropertyOptional({ example: 1, nullable: true })
  assignedByUserId?: number | null;

  @ApiPropertyOptional({ enum: AssignmentSource, example: AssignmentSource.ADMIN })
  source?: AssignmentSource;

  @ApiPropertyOptional({ enum: ClaimEffect, example: ClaimEffect.DENY, nullable: true })
  overrideEffect?: ClaimEffect | null;

  @ApiPropertyOptional({ example: 'temporary access', nullable: true })
  reason?: string | null;

  @ApiPropertyOptional({ example: '2026-12-31T00:00:00.000Z', nullable: true })
  expiresAt?: Date | null;

  @ApiPropertyOptional({ example: { scope: 'support' }, nullable: true, type: Object })
  metadata?: Record<string, unknown> | null;
}
