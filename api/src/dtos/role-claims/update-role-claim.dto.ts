import { PartialType } from '@nestjs/swagger';
import { CreateRoleClaimDto } from './create-role-claim.dto';

export class UpdateRoleClaimDto extends PartialType(CreateRoleClaimDto) { }
