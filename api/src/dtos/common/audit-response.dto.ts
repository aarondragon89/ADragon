import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class AuditResponseDto {
  @Expose()
  @ApiProperty({ example: true })
  isActive: boolean;

  @Expose()
  @ApiProperty({ example: '2026-06-08T00:00:00.000Z' })
  createdAt: Date;

  @Expose()
  @ApiProperty({ example: '2026-06-08T00:00:00.000Z' })
  updatedAt: Date;

  @Expose()
  @ApiProperty({ example: null, nullable: true })
  deletedAt: Date | null;
}
