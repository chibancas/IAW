import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterCreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginAuthDto } from './dto/LoginAuthDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //register
  @Post('register')
  register(@Body() registerCreateDto:RegisterCreateAuthDto){
    return this.authService.register(registerCreateDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginAuthDto) {
    return this.authService.login(loginDto);
  }

  //logout

  //checkToken

  //perfil

}