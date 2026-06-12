import { ApiProperty } from '@nestjs/swagger';
import { AuditResponseDto } from '../common/audit-response.dto';

export class UserResponseDto extends AuditResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'admin@example.com' })
  email: string;

  @ApiProperty({ example: 'admin' })
  username: string;

  @ApiProperty({ example: 'System Administrator', nullable: true })
  displayName: string | null;

  @ApiProperty({ example: 'active' })
  status: string;

  @ApiProperty({ example: false })
  emailVerified: boolean;

  @ApiProperty({ example: null, nullable: true })
  lastLoginAt: Date | null;

  @ApiProperty({ example: { locale: 'en' }, nullable: true, type: Object })
  metadata: Record<string, unknown> | null;
}
