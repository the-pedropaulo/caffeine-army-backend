import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import {EnterpriseModule } from 'src/enterprise/enterprise.module';
import { TokenModule } from 'src/token/token.module';

@Module({
  imports: [PrismaModule, EnterpriseModule, TokenModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
