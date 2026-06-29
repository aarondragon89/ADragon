import { ApiProperty } from '@nestjs/swagger';
import { AuditResponseDto } from '../common/audit-response.dto';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserResponseDto extends AuditResponseDto {
  @Expose()
  @ApiProperty({ example: 1 })
  id: number;

  @Expose()
  @ApiProperty({ example: 'admin@example.com' })
  email: string;

  @Expose()
  @ApiProperty({ example: 'admin' })
  username: string;

  @Expose()
  @ApiProperty({ example: 'System Administrator', nullable: true })
  displayName: string | null;

  @Expose()
  @ApiProperty({ example: 'active' })
  status: string;

  @Expose()
  @ApiProperty({ example: false })
  emailVerified: boolean;

  @Expose()
  @ApiProperty({ example: null, nullable: true })
  lastLoginAt: Date | null;

  @Expose()
  @ApiProperty({ example: { locale: 'en' }, nullable: true, type: Object })
  metadata: Record<string, unknown> | null;
}
