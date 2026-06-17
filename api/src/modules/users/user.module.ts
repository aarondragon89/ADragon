import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/entities/user.entity';
import { EncryptionService } from '@adragon-api/common/utilities/encryption.service';

@Module({
    imports: [TypeOrmModule.forFeature([User]), ConfigModule],
    controllers: [UserController],
    providers: [UserService, EncryptionService],
    exports: [UserService],
})
export class UserModule { }
