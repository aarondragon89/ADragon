import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateRoleDto {
  @ApiPropertyOptional({ example: 'Administrator' })
  name?: string;

  @ApiPropertyOptional({ example: 'admin' })
  code?: string;

  @ApiPropertyOptional({ example: 'Full system access', nullable: true })
  description?: string | null;

  @ApiPropertyOptional({ example: 100 })
  priority?: number;

  @ApiPropertyOptional({ example: false })
  isSystem?: boolean;

  @ApiPropertyOptional({ example: null, nullable: true })
  parentRoleId?: string | null;
}
