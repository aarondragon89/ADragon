import { ApiPropertyOptional } from '@nestjs/swagger';
import { ClaimEffect } from '../../entities';

export class UpdateClaimDto {
  @ApiPropertyOptional({ example: 'user.read' })
  code?: string;

  @ApiPropertyOptional({ example: 'user' })
  resource?: string;

  @ApiPropertyOptional({ example: 'read' })
  action?: string;

  @ApiPropertyOptional({ enum: ClaimEffect, example: ClaimEffect.ALLOW })
  effect?: ClaimEffect;

  @ApiPropertyOptional({ example: 'Allow reading user records', nullable: true })
  description?: string | null;

  @ApiPropertyOptional({
    example: { tenantId: 1 },
    nullable: true,
    type: Object,
  })
  condition?: Record<string, unknown> | null;
}
