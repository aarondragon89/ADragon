import { ApiProperty } from '@nestjs/swagger';
import { AssignmentSource, ClaimEffect } from '../../entities';

export class CreateUserClaimDto {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: '4ef8be25-b1cf-4b9d-8c62-80f9f37c7ef8' })
  claimId: string;

  @ApiProperty({ example: 1, required: false, nullable: true })
  assignedByUserId?: number | null;

  @ApiProperty({ enum: AssignmentSource, example: AssignmentSource.ADMIN, required: false })
  source?: AssignmentSource;

  @ApiProperty({ enum: ClaimEffect, example: ClaimEffect.DENY, required: false, nullable: true })
  overrideEffect?: ClaimEffect | null;

  @ApiProperty({ example: 'temporary access', required: false, nullable: true })
  reason?: string | null;

  @ApiProperty({ example: '2026-12-31T00:00:00.000Z', required: false, nullable: true })
  expiresAt?: Date | null;

  @ApiProperty({ example: { scope: 'support' }, required: false, nullable: true, type: Object })
  metadata?: Record<string, unknown> | null;
}
