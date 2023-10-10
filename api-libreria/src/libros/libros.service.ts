import { Injectable, InternalServerErrorException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Libros } from './entities/libros.entity';
import { Repository } from 'typeorm';
import { CreateLibrodto } from './dto/create-libro.dto';

@Injectable()
export class LibrosService {

    constructor(
        @InjectRepository(Libros)
        private readonly libroRepository:Repository<Libros>
        ){

    }
    getHome() {
        return ('seccion de libros')
    }

    getAll() {
        return ('listado de todos los libros')
    }

    async findAll(){
        let libros= await this.libroRepository.find()
        return{
            data:libros,
            msg:"listado de libros",
            status:200
        }
    }

    getById(@Param('id') id: string) {
        return (`detalle del libro ${id}`)
    }

    // new() {
    //     return ('formulario para añadir registro del libro')
    // }

    update() {
        return ('actualizar registro de libro')
    }

    delete() {
        return ("eliminar registro de libro")
    }

    async create (createLibroDto: CreateLibrodto){

        try{
            // el objeto json que nos llega se transforma en un objeto javascript
            const libro = this.libroRepository.create(createLibroDto);
            //.save se encarga de transformar el objeto javascript en un registro en la base de datos
            // y realiza un insert into
            await this.libroRepository.save(libro);
 
            // Insertar en la BD 
            return {
             data: createLibroDto,
             msg: 'Libro creado correctamente',
             status: 200
            }
        }catch(error){
            throw new InternalServerErrorException("Pida ayuda a Fran o cuélguese de una farola")
        }
        
    }
}
