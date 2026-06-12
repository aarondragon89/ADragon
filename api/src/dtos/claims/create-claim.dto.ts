import { ApiProperty } from '@nestjs/swagger';
import { ClaimEffect } from '../../entities';

export class CreateClaimDto {
  @ApiProperty({ example: 'user.read' })
  code: string;

  @ApiProperty({ example: 'user' })
  resource: string;

  @ApiProperty({ example: 'read' })
  action: string;

  @ApiProperty({ enum: ClaimEffect, example: ClaimEffect.ALLOW, required: false })
  effect?: ClaimEffect;

  @ApiProperty({ example: 'Allow reading user records', required: false, nullable: true })
  description?: string | null;

  @ApiProperty({
    example: { tenantId: 1 },
    required: false,
    nullable: true,
    type: Object,
  })
  condition?: Record<string, unknown> | null;
}
