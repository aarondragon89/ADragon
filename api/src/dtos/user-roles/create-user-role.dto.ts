import { ApiProperty } from '@nestjs/swagger';
import { AssignmentSource } from '../../entities';

export class CreateUserRoleDto {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: '2f5e9d14-7f94-4cf2-95ea-7cc5f2ae1e62' })
  roleId: string;

  @ApiProperty({ example: 1, required: false, nullable: true })
  assignedByUserId?: number | null;

  @ApiProperty({ enum: AssignmentSource, example: AssignmentSource.ADMIN, required: false })
  source?: AssignmentSource;

  @ApiProperty({ example: true, required: false })
  isPrimary?: boolean;

  @ApiProperty({ example: '2026-12-31T00:00:00.000Z', required: false, nullable: true })
  expiresAt?: Date | null;

  @ApiProperty({ example: { reason: 'onboarding' }, required: false, nullable: true, type: Object })
  metadata?: Record<string, unknown> | null;
}
