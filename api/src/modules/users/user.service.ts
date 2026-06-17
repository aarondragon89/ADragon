import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../../entities/user.entity';
import type { CreateUserDto } from '@/dtos/users/create-user.dto';
import type { UpdateUserDto } from '@/dtos/users/update-user.dto';
import { EncryptionBaseService } from '@adragon-api/common/services/encryption-base.service';
import { UserWithRolesDto } from '@/dtos/users/user-with-roles.dto';
import { EncryptionService } from '@adragon-api/common/utilities/encryption.service';
import { logPerformance } from '@adragon-api/common/utilities/logger.util';
import { FilterPayload } from '@adragon-api/common/interfaces/filter.interface';
import { IJwtUserService } from '@adragon-api/jwt/jwt.interface';

@Injectable()
export class UserService extends EncryptionBaseService<
  User,
  CreateUserDto,
  UpdateUserDto,
  UserWithRolesDto
> implements IJwtUserService {
  protected logPerf(method: string, start: number, extra?: string) {
    const duration = Date.now() - start;
    logPerformance('UserService', method, duration, extra);
  }

  constructor(
    @InjectRepository(User)
    repository: Repository<User>,
    encryptionService: EncryptionService,
  ) {
    super(encryptionService, repository, false, UserWithRolesDto);
  }

  /**
   * Find a user by email and include roles and claims relations
   */
  async findByEmailWithRelations(email: string): Promise<User | null> {
    const start = Date.now();
    const result = await this.repository.findOne({
      where: { email } as any,
      relations: [
        'roles',
        'roles.role',
        'roles.role.claims',
        'roles.role.claims.claim',
        'claims',
        'claims.claim',
      ],
    });
    this.logPerf('findByEmailWithRelations', start, `email=${email}`);
    return result;
  }

  async create(data: CreateUserDto): Promise<User> {
    const start = Date.now();
    if (data.password) {
      data.passwordHash = await bcrypt.hash(data.password, 10);
    }
    const result = await super.create(data);
    this.logPerf('create', start, `email=${data.email}`);
    return result;
  }

  async update(id: string | number, data: UpdateUserDto): Promise<User> {
    const start = Date.now();
    if (data.password) {
      data.passwordHash = await bcrypt.hash(data.password, 10);
    }
    const result = await super.update(id, data);
    this.logPerf('update', start, `id=${id}`);
    return result;
  }

  /**
   * Fetch users with their roles
   */
  async filterUserWithRoles(payload: FilterPayload = {}): Promise<any> {
    const start = Date.now();
    // Use baseService filter with relations
    const result: UserWithRolesDto[] = await super.filter(payload);

    this.logPerf('filterUserWithRoles', start, `count=${result.length}`);
    return result;
  }
}
