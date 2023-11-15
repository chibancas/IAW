import { Injectable, InternalServerErrorException, Post } from '@nestjs/common';
import { CreateAutoreDto } from './dto/create-autore.dto';
import { UpdateAutoreDto } from './dto/update-autore.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Autore } from './entities/autore.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AutoresService {

  constructor(
    @InjectRepository(Autore) private readonly autoreRepository:Repository<Autore>
  ){}
  
  async create(createAutoreDto: CreateAutoreDto) {
    try{
    console.log(createAutoreDto)
    const autor= this.autoreRepository.create(createAutoreDto);

    // lanza la petticion de isnerción a la bd
    // mapea la notacion de objeto json vertical a la de registro horizontal
    await this.autoreRepository.save(autor)
    // return 'This action adds a new autore';
    return {
      msg:'registro insertado',
      data:autor,
      status:200
    }
    }catch (error){
      throw new InternalServerErrorException("llama a morgado");
    }
  }

  findAll() {
    return `This action returns all hol`;
  }

  findOne(id: number) {
    return `This action returns a #${id} autore`;
  }

  update(id: number, updateAutoreDto: UpdateAutoreDto) {
    return `This action updates a #${id} autore`;
  }

  remove(id: number) {
    return `This action removes a #${id} autore`;
  }
}