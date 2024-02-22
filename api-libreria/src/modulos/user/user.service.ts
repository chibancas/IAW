import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo:Repository<User>
  ){}

  async create(createUserDto: CreateUserDto) {
    const usuario= this.userRepo.create(createUserDto)
    await this.userRepo.save(usuario)
    console.log(createUserDto)
    return{
      msg:'usuario creado',
      data:usuario,
      status:200
    }
  }

}
