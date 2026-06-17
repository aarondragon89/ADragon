import { PartialType } from "@nestjs/swagger";
import { CreateUserClaimDto } from "./create-user-claim.dto";

export class UpdateUserClaimDto extends PartialType(CreateUserClaimDto) { }
