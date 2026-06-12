import { ApiProperty } from '@nestjs/swagger';
import { AuditResponseDto } from '../common/audit-response.dto';

export class RoleResponseDto extends AuditResponseDto {
  @ApiProperty({ example: '2f5e9d14-7f94-4cf2-95ea-7cc5f2ae1e62' })
  id: string;

  @ApiProperty({ example: 'Administrator' })
  name: string;

  @ApiProperty({ example: 'admin' })
  code: string;

  @ApiProperty({ example: 'Full system access', nullable: true })
  description: string | null;

  @ApiProperty({ example: 100 })
  priority: number;

  @ApiProperty({ example: false })
  isSystem: boolean;

  @ApiProperty({ example: null, nullable: true })
  parentRoleId: string | null;
}
