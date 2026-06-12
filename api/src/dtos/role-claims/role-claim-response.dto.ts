import { ApiProperty } from '@nestjs/swagger';
import { AuditResponseDto } from '../common/audit-response.dto';
import { AssignmentSource } from '../../entities';

export class RoleClaimResponseDto extends AuditResponseDto {
  @ApiProperty({ example: 'f6f07031-1d7f-4c60-8a39-8c0a9f5cb8b3' })
  id: string;

  @ApiProperty({ example: '2f5e9d14-7f94-4cf2-95ea-7cc5f2ae1e62' })
  roleId: string;

  @ApiProperty({ example: '4ef8be25-b1cf-4b9d-8c62-80f9f37c7ef8' })
  claimId: string;

  @ApiProperty({ enum: AssignmentSource, example: AssignmentSource.SYSTEM })
  source: AssignmentSource;

  @ApiProperty({ example: '2026-12-31T00:00:00.000Z', nullable: true })
  expiresAt: Date | null;

  @ApiProperty({ example: { scope: 'all' }, nullable: true, type: Object })
  metadata: Record<string, unknown> | null;
}
