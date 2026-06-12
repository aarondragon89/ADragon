import { ApiPropertyOptional } from '@nestjs/swagger';
import { AssignmentSource } from '../../entities';

export class UpdateUserRoleDto {
  @ApiPropertyOptional({ example: 1 })
  userId?: number;

  @ApiPropertyOptional({ example: '2f5e9d14-7f94-4cf2-95ea-7cc5f2ae1e62' })
  roleId?: string;

  @ApiPropertyOptional({ example: 1, nullable: true })
  assignedByUserId?: number | null;

  @ApiPropertyOptional({ enum: AssignmentSource, example: AssignmentSource.ADMIN })
  source?: AssignmentSource;

  @ApiPropertyOptional({ example: true })
  isPrimary?: boolean;

  @ApiPropertyOptional({ example: '2026-12-31T00:00:00.000Z', nullable: true })
  expiresAt?: Date | null;

  @ApiPropertyOptional({ example: { reason: 'onboarding' }, nullable: true, type: Object })
  metadata?: Record<string, unknown> | null;
}
