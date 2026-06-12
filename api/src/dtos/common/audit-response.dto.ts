import { ApiProperty } from '@nestjs/swagger';

export class AuditResponseDto {
  @ApiProperty({ example: true })
  isActive: boolean;

  @ApiProperty({ example: '2026-06-08T00:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2026-06-08T00:00:00.000Z' })
  updatedAt: Date;

  @ApiProperty({ example: null, nullable: true })
  deletedAt: Date | null;
}
