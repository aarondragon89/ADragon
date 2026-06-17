import { createBaseController } from '@adragon-api/common/controllers/base.controller';
import { UserService } from './user.service';
import { User } from '@/entities/user.entity';
import { CreateUserDto } from '@/dtos/users/create-user.dto';
import { UpdateUserDto } from '@/dtos/users/update-user.dto';
import { Controller, Post, Body, Req, Get, UseGuards, Inject } from '@nestjs/common';
import { JwtAuthGuard } from '@adragon-api/jwt';
import { UserWithRolesDto } from '@/dtos/users/user-with-roles.dto';
import type { FilterPayload } from '@adragon-api/common/interfaces/filter.interface';

const BaseUserController = createBaseController<
    User,
    CreateUserDto,
    UpdateUserDto,
    any,
    UserWithRolesDto
>('user', 'user', UserService);

@Controller('user')
export class UserController extends BaseUserController {
    constructor(public readonly userService: UserService) {
        super(userService);
    }

    @Post('with-roles')
    async filterUserWithRoles(@Body() payload: FilterPayload, @Req() _req: any, @Inject('REQUEST') request?: any
    ): Promise<any> {
        const result = await this.userService.filterUserWithRoles(payload);

        if (typeof (this.baseService as any).encryptResponse === 'function') {
            return (this.baseService as any).encryptResponse(result, request);
        }
        return result;
    }

    @UseGuards(JwtAuthGuard)
    @Get('me')
    async getMe(@Req() req: any) {
        return req.user;
    }
}
