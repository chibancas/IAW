import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Libro } from './entities/libro.entity';
import { Repository } from 'typeorm';
import { AutoresService } from '../autores/autores.service';

@Injectable()
export class LibrosService {
  constructor(
    @InjectRepository(Libro)
    private readonly libroRepository: Repository<Libro>,
    private readonly autoresService:AutoresService
  ){}

  async create(createLibroDto: CreateLibroDto) {
    try {
      // const libro=this.libroRepository.create(createLibroDto)
      const {autor, ...campos}= createLibroDto
      const libro=this.libroRepository.create({...campos})
      const autorObj= await this.autoresService.findOne(autor)
      libro.autor=autorObj
      this.libroRepository.save(libro)
      console.log(createLibroDto)
      return{
        message:'El libro se ha creado correctamente',
        data:libro,
        status:200
      }
    } catch (error) {
      console.log("fallo al insertar libro",createLibroDto)
      throw new InternalServerErrorException("fallo al insertar libro")
    }
  }

  async deleteAllLibros(){
    const query=this.libroRepository.createQueryBuilder('libro')
    try {
      return await query
      .delete()
      .where({})
      .execute()
    } catch (error) {
      throw new InternalServerErrorException("fallo al borrar todos los libros")
    }
  }

  async findAll() {
    try {
      const libro = await this.libroRepository.find()
      // return {
      //   message: 'listado de productos',
      //   data: producto,
      //   status: 200
      // }
      return libro
    } catch (error) {
      throw new InternalServerErrorException("fallo al listar todos los productos")
    }
  }

  // findAll() {
  //   return `This action returns all libros`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} libro`;
  // }

  // update(id: number, updateLibroDto: UpdateLibroDto) {
  //   return `This action updates a #${id} libro`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} libro`;
  // }
}
