import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EncryptionBaseModule } from '@adragon-api/common/modules/encryption-base.module';
import { EncryptionBaseService } from '@adragon-api/common/services/encryption-base.service';
import { EncryptionService } from '@adragon-api/common/utilities/encryption.service';
import { createBaseController } from '@adragon-api/common/controllers/base.controller';
import { JwtAuthModule } from '@adragon-api/jwt';
import { DecryptionMiddleware } from '@adragon-api/common/middleware/decryption.middleware';
import { AppBaseModule } from '@adragon-api/common/modules/app-base.module';
import { join } from 'path';
import { AppController } from './app.controller';
import { AuthController } from '@/modules/auths/auth.controller';
import {
  Claim,
  Role,
  RoleClaim,
  User,
  UserClaim,
  UserRole,
} from '@/entities';
import {
  CreateClaimDto,
  CreateRoleClaimDto,
  CreateRoleDto,
  CreateUserClaimDto,
  CreateUserRoleDto,
  UpdateClaimDto,
  UpdateRoleClaimDto,
  UpdateRoleDto,
  UpdateUserClaimDto,
  UpdateUserRoleDto,
} from '@/dtos';
import { UserModule } from '../users/user.module';
import { UserService } from '../users/user.service';

@Module({
  imports: [
    AppBaseModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT || 5432),
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'secret',
      database: process.env.DB_NAME || 'postgres',
      schema: 'public',
      entities: [join(__dirname, 'entities', '*.entity{.ts,.js}')],
      synchronize: false,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([User]),
    UserModule,
    JwtAuthModule.forRoot({
      imports: [UserModule],
      userService: UserService,
    }),
    EncryptionBaseModule.register<Role, CreateRoleDto, UpdateRoleDto>(
      EncryptionBaseService,
      createBaseController<Role, CreateRoleDto, UpdateRoleDto>(
        'role',
        'role',
        EncryptionBaseService<Role, CreateRoleDto, UpdateRoleDto>,
      ),
      [EncryptionService],
      Role,
    ),
    EncryptionBaseModule.register<Claim, CreateClaimDto, UpdateClaimDto>(
      EncryptionBaseService,
      createBaseController<Claim, CreateClaimDto, UpdateClaimDto>(
        'claim',
        'claim',
        EncryptionBaseService<Claim, CreateClaimDto, UpdateClaimDto>,
      ),
      [EncryptionService],
      Claim,
    ),
    EncryptionBaseModule.register<UserRole, CreateUserRoleDto, UpdateUserRoleDto>(
      EncryptionBaseService,
      createBaseController<UserRole, CreateUserRoleDto, UpdateUserRoleDto>(
        'user-role',
        'user-role',
        EncryptionBaseService<UserRole, CreateUserRoleDto, UpdateUserRoleDto>,
      ),
      [EncryptionService],
      UserRole,
    ),
    EncryptionBaseModule.register<
      UserClaim,
      CreateUserClaimDto,
      UpdateUserClaimDto
    >(
      EncryptionBaseService,
      createBaseController<UserClaim, CreateUserClaimDto, UpdateUserClaimDto>(
        'user-claim',
        'user-claim',
        EncryptionBaseService<UserClaim, CreateUserClaimDto, UpdateUserClaimDto>,
      ),
      [EncryptionService],
      UserClaim,
    ),
    EncryptionBaseModule.register<
      RoleClaim,
      CreateRoleClaimDto,
      UpdateRoleClaimDto
    >(
      EncryptionBaseService,
      createBaseController<RoleClaim, CreateRoleClaimDto, UpdateRoleClaimDto>(
        'role-claim',
        'role-claim',
        EncryptionBaseService<RoleClaim, CreateRoleClaimDto, UpdateRoleClaimDto>,
      ),
      [EncryptionService],
      RoleClaim,
    ),
  ],
  controllers: [AppController, AuthController],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(DecryptionMiddleware).forRoutes('*');
    }
}
