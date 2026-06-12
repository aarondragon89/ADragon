import { ApiProperty } from '@nestjs/swagger';
import { AssignmentSource } from '../../entities';

export class CreateRoleClaimDto {
  @ApiProperty({ example: '2f5e9d14-7f94-4cf2-95ea-7cc5f2ae1e62' })
  roleId: string;

  @ApiProperty({ example: '4ef8be25-b1cf-4b9d-8c62-80f9f37c7ef8' })
  claimId: string;

  @ApiProperty({ enum: AssignmentSource, example: AssignmentSource.SYSTEM, required: false })
  source?: AssignmentSource;

  @ApiProperty({ example: '2026-12-31T00:00:00.000Z', required: false, nullable: true })
  expiresAt?: Date | null;

  @ApiProperty({ example: { scope: 'all' }, required: false, nullable: true, type: Object })
  metadata?: Record<string, unknown> | null;
}
