import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { UserRepository } from '../user/entities/user.repository';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './stategies/jwt-strategy/jwt-strategy';

@Module({
  controllers: [AuthController],
  imports: [
    UserModule,
    TypeOrmModule.forFeature([UserRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    // JwtModule.registerAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: (configservice: ConfigService) => {
    //     return {
    //       secret: configservice.get('JWT_SECRET'),
    //       signOptions: {
    //         expiresIn: '2h',
    //         algorithm: 'HS256'
    //       }
    //     }
    //   }
    // }),
    // configuramos el JwtModule.register
    JwtModule.register({
      secret:'claveSecreta123',
      signOptions:{
        expiresIn:"1h",
        algorithm:'HS256'
      }
    })
  ],
  providers: [AuthService, UserRepository, JwtStrategy,ConfigService]
})
export class AuthModule { }