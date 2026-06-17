import { FieldMap } from '@adragon-api/common/interfaces/mappable.interface';
import { RoleResponseDto } from '@/dtos/roles/role-response.dto';
import { UserResponseDto } from './user-response.dto';
import { User, UserRole } from '@/entities';
import { plainToInstance } from 'class-transformer';
import { EntityManager, In } from 'typeorm';

export class UserWithRolesDto extends UserResponseDto {
  roles: RoleResponseDto[];

  static readonly fieldMap: FieldMap<User> = {
    roles: {
      type: 'subquery',
      getId: (user: User) => user.id,
      resolve: async (ids: (number | string)[], manager: EntityManager) => {
        const userRoles = await manager.getRepository(UserRole).find({
          where: { userId: In(ids) },
          relations: ['role'],
        });
        const map = new Map<number, RoleResponseDto[]>();
        for (const id of ids) {
          map.set(Number(id), []);
        }
        for (const ur of userRoles) {
          if (ur.userId && ur.role) {
            if (!map.has(ur.userId)) map.set(ur.userId, []);
            map.get(ur.userId)!.push(
              plainToInstance(RoleResponseDto, {
                id: ur.role.id,
                name: ur.role.name,
                createdAt: ur.createdAt,
              })
            );
          }
        }
        return map;
      },
    },
  };

  static from(entity: User): UserWithRolesDto {
    return plainToInstance(UserWithRolesDto, entity, {
      excludeExtraneousValues: true,
    });
  }

  static fromMany(entities: User[]): UserWithRolesDto[] {
    return entities.map(UserWithRolesDto.from);
  }
}
