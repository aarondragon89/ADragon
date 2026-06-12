import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'Administrator' })
  name: string;

  @ApiProperty({ example: 'admin' })
  code: string;

  @ApiProperty({ example: 'Full system access', required: false, nullable: true })
  description?: string | null;

  @ApiProperty({ example: 100, required: false })
  priority?: number;

  @ApiProperty({ example: false, required: false })
  isSystem?: boolean;

  @ApiProperty({ example: null, required: false, nullable: true })
  parentRoleId?: string | null;
}
