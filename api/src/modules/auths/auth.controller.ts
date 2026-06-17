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
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../../entities';

type LoginDto = {
  email: string;
  password: string;
};

@Controller('auth')
export class AuthController {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
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

    if (!user.passwordHash) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    // Compare using bcrypt — never compare hashes with ===
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    user.lastLoginAt = new Date();
    await this.userRepository.save(user);

    // Payload must match what JwtStrategy.validate() reads:
    // payload.sub, payload.email, payload.claims, payload.roles
    const payload = {
      sub: user.id,
      email: user.email,
      claims: [], // TODO: load real claims here if needed at login time
      roles: [],  // TODO: load real roles here if needed at login time
    };

    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

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