import { ApiProperty } from '@nestjs/swagger';
import { AuditResponseDto } from '../common/audit-response.dto';
import { AssignmentSource, ClaimEffect } from '../../entities';

export class UserClaimResponseDto extends AuditResponseDto {
  @ApiProperty({ example: '0e1c4d1c-df94-4f4a-a95d-9d3f7fa1b9e2' })
  id: string;

  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: '4ef8be25-b1cf-4b9d-8c62-80f9f37c7ef8' })
  claimId: string;

  @ApiProperty({ example: 1, nullable: true })
  assignedByUserId: number | null;

  @ApiProperty({ enum: AssignmentSource, example: AssignmentSource.ADMIN })
  source: AssignmentSource;

  @ApiProperty({ enum: ClaimEffect, example: ClaimEffect.DENY, nullable: true })
  overrideEffect: ClaimEffect | null;

  @ApiProperty({ example: '2026-06-08T00:00:00.000Z' })
  assignedAt: Date;

  @ApiProperty({ example: '2026-12-31T00:00:00.000Z', nullable: true })
  expiresAt: Date | null;

  @ApiProperty({ example: 'temporary access', nullable: true })
  reason: string | null;

  @ApiProperty({ example: { scope: 'support' }, nullable: true, type: Object })
  metadata: Record<string, unknown> | null;
}
