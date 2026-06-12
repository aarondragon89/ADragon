import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional({ example: 'admin@example.com' })
  email?: string;

  @ApiPropertyOptional({ example: 'admin' })
  username?: string;

  @ApiPropertyOptional({ example: 'StrongPassword123!', nullable: true })
  passwordHash?: string | null;

  @ApiPropertyOptional({ example: 'System Administrator', nullable: true })
  displayName?: string | null;

  @ApiPropertyOptional({ example: 'active' })
  status?: string;

  @ApiPropertyOptional({ example: false })
  emailVerified?: boolean;

  @ApiPropertyOptional({ example: null, nullable: true })
  lastLoginAt?: Date | null;

  @ApiPropertyOptional({ example: { locale: 'en' }, nullable: true, type: Object })
  metadata?: Record<string, unknown> | null;
}
