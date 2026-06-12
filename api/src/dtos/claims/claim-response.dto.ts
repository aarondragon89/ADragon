import { ApiProperty } from '@nestjs/swagger';
import { AuditResponseDto } from '../common/audit-response.dto';
import { ClaimEffect } from '../../entities';

export class ClaimResponseDto extends AuditResponseDto {
  @ApiProperty({ example: '4ef8be25-b1cf-4b9d-8c62-80f9f37c7ef8' })
  id: string;

  @ApiProperty({ example: 'user.read' })
  code: string;

  @ApiProperty({ example: 'user' })
  resource: string;

  @ApiProperty({ example: 'read' })
  action: string;

  @ApiProperty({ enum: ClaimEffect, example: ClaimEffect.ALLOW })
  effect: ClaimEffect;

  @ApiProperty({ example: 'Allow reading user records', nullable: true })
  description: string | null;

  @ApiProperty({ example: { tenantId: 1 }, nullable: true, type: Object })
  condition: Record<string, unknown> | null;
}
