import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { RegisterCreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { UserRepository } from '../user/entities/user.repository';
import * as bcrypt from 'bcrypt'
import { LoginAuthDto } from './dto/LoginAuthDto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  // constructor(
  //   @InjectRepository(User)
  //   private readonly registerRepo:UserRepository,
  // ){}
  constructor(
    private readonly registerRepo: UserRepository,
    private readonly jwtService: JwtService
  ) { }


  // async register (registerCreateDto:RegisterCreateAuthDto){
  //   // const {username,email,password}=registerCreateDto
  //   // const {email,...resto}=registerCreateDto
  //   console.log(registerCreateDto)
  //   if (await this.registerRepo.findByEmail(registerCreateDto.email)){
  //     throw new InternalServerErrorException('este email ya esta en uso');
  //   }
  //   try {
  //     return this.registerRepo.save(registerCreateDto)
  //   } catch (error) {
  //     throw new InternalServerErrorException('fallo al crear el usuario')
  //   }
  //   // const registrado= this.registerRepo.create(registerCreateDto)
  //   // await this.registerRepo.save(registrado)
  //   // console.log(registerCreateDto)
  //   // return{
  //   //   msg:'usuario registrado',
  //   //   data:registrado,
  //   //   status:200
  //   // }
  // }


  async register(registerDto: RegisterCreateAuthDto) {
    // REGLAS DE NEGOCIO AL SERVICIO, FUNCIONALIDAD AL REPOSITORIO
    // const { username, email, password } = registerDto;
    //const { email, ...resto } = registerDto; Son ejemplos de como extraer los campos necesarios sin luego usar el nombre completo 
    // abajo usamos registerDto.email pero si usamos una de éstas fórmmulas podemos usar los campos

    // if (registerDto.email==null){
    //   registerDto.email=registerDto.username
    //   console.log('no se ha indicado email')
    // }
    // if (registerDto.username==null){
    //   registerDto.username=registerDto.email
    //   console.log('no se ha indicado username')
    // }

    if (await this.registerRepo.findByEmail(registerDto.email)) {
      console.log('fallo bueno, email ya en uso')
      throw new BadRequestException('email ya en uso')
    }

    if (await this.registerRepo.findByUsername(registerDto.username)) {
      console.log('fallo bueno, username ya en uso')
      throw new BadRequestException('username ya en uso')
    }
    console.log('el email', registerDto.email, ' no esta en uso, insertando....')
    try {
      registerDto.password = await this.getHash(registerDto.password)
      return this.registerRepo.save(registerDto);
    } catch (error) {
      throw new InternalServerErrorException('Error al crear el registro')
    }

  }

  async getHash(password: string) {
    return bcrypt.hash(password, 10);
  }

  async isMatch(password: string, hash: string) {
    return await bcrypt.compare(password, hash)
  }

  async login(loginDto: LoginAuthDto) {
    const usuario = await this.registerRepo.findByEmail(loginDto.email)
    if (!usuario) {
      throw new NotFoundException('Usuario no encontrado')
    }

    let isValidPassword
    try {
      isValidPassword = await this.isMatch(loginDto.password, usuario.password)
    } catch (error) {
      throw new InternalServerErrorException('error al validar password')
    }
    if (isValidPassword) {
      // return "login exitoso"
      // return this.getAccessToken(usuario)
      console.log('usuario validado')
      return{
        msg:"usuario validado",
        data:usuario,
        token:this.getAccessToken(usuario),
        status:200
      }
    } else {
      console.log('usuario no existe')
      return "login no exitoso"
    }
  }

  private getAccessToken(user: User) {
    //crea el token con los campos del user seleccionados y la configuracion del jwtmodule.register
    try {
      const accessToken = this.jwtService.sign({
        id: user.id,
        name: user.username,
        email: user.email
      })
      return{
        token:accessToken
      }
    }
    catch (error) {
      console.log('fallo al crear el token')
      throw new InternalServerErrorException('fallo al crear token')
    }
  }

}
