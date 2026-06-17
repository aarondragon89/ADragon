import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'admin@example.com' })
  email: string;

  @ApiProperty({ example: 'admin' })
  username: string;

  @ApiProperty({ required: true, nullable: true })
  passwordHash: string | null;

  @ApiProperty({ example: 'StrongPassword123!', required: false, nullable: true })
  password?: string | null;

  @ApiProperty({ example: 'System Administrator', required: false, nullable: true })
  displayName?: string | null;

  @ApiProperty({ example: 'active', required: false })
  status?: string;

  @ApiProperty({ example: false, required: false })
  emailVerified?: boolean;

  @ApiProperty({ example: null, required: false, nullable: true })
  lastLoginAt?: Date | null;

  @ApiProperty({ example: { locale: 'en' }, required: false, nullable: true, type: Object })
  metadata?: Record<string, unknown> | null;
}
