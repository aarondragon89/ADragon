import { ApiProperty } from '@nestjs/swagger';
import { AuditResponseDto } from '../common/audit-response.dto';
import { AssignmentSource } from '../../entities';

export class UserRoleResponseDto extends AuditResponseDto {
  @ApiProperty({ example: 'c1d7c1a7-a5a6-4eab-9f5d-0c0a5d5b2f38' })
  id: string;

  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: '2f5e9d14-7f94-4cf2-95ea-7cc5f2ae1e62' })
  roleId: string;

  @ApiProperty({ example: 1, nullable: true })
  assignedByUserId: number | null;

  @ApiProperty({ enum: AssignmentSource, example: AssignmentSource.ADMIN })
  source: AssignmentSource;

  @ApiProperty({ example: true })
  isPrimary: boolean;

  @ApiProperty({ example: '2026-06-08T00:00:00.000Z' })
  assignedAt: Date;

  @ApiProperty({ example: '2026-12-31T00:00:00.000Z', nullable: true })
  expiresAt: Date | null;

  @ApiProperty({ example: { reason: 'onboarding' }, nullable: true, type: Object })
  metadata: Record<string, unknown> | null;
}
