import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities';

type LoginDto = {
  email: string;
  password: string;
};

@Controller('auth')
export class AuthController {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: LoginDto) {
    const email = (body?.email || '').trim().toLowerCase();
    const password = body?.password || '';

    if (!email || !password) {
      throw new UnauthorizedException('Email and password are required.');
    }

    const user = await this.userRepository
      .createQueryBuilder('user')
      .where('LOWER(user.email) = :email OR LOWER(user.username) = :email', { email })
      .andWhere('user.status = :status', { status: 'active' })
      .getOne();

    if (!user) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    if (!user.passwordHash || user.passwordHash !== password) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    user.lastLoginAt = new Date();
    await this.userRepository.save(user);

    const nonce = Math.random().toString(36).slice(2);
    const accessToken = Buffer.from(`sample:${user.id}:${Date.now()}:${nonce}`).toString('base64url');
    const refreshToken = Buffer.from(`sample-refresh:${user.id}:${Date.now()}:${nonce}`).toString('base64url');

    return {
      statusCode: 200,
      message: 'Login successful',
      data: {
        accessToken,
        refreshToken,
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
          displayName: user.displayName,
          status: user.status,
        },
      },
    };
  }
}
