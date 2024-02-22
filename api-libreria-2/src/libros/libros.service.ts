import { Injectable, InternalServerErrorException, NotFoundException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Libros } from './entities/libros.entity';
import { Repository } from 'typeorm';
import { CreateLibrodto } from './dto/create-libro.dto';
import { PaginationDTO } from './dto/pagination.dto';

@Injectable()
export class LibrosService {

    constructor(
        @InjectRepository(Libros)
        private readonly libroRepository: Repository<Libros>
    ) {

    }
    getHome() {
        return ('seccion de libros')
    }

    getAll() {
        return ('listado de todos los libros')
    }

    async findAll(paginationDto: PaginationDTO) {
        const { limit, offset } = paginationDto;
        let libros = await this.libroRepository.find()
        return this.libroRepository.find({
            take: limit,
            skip: offset
        });
        // return {
        //     data: libros,
        //     msg: "listado de libros",
        //     status: 200
        // }
    }

    getById(@Param('id') id: string) {
        return (`detalle del libro ${id}`)
    }

    async getISBN(isbn: string) {
        //petición al ORM
        const libro = await this.libroRepository.findOneBy({ isbn });
        //ORM --> SGBD
        if (!libro) {
            throw new NotFoundException(`Libro con isbn ${isbn} no encontrado`);
        } else {
            return {
                data: libro,
                msg: `Detalle del libro ${isbn}`,
                status: 200
            };
        }
    }

    async remove(isbn: string) {
        const libro = await this.libroRepository.findOneBy({ isbn });
        await this.libroRepository.remove(libro);
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

    async create(createLibroDto: CreateLibrodto) {

        try {
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
        } catch (error) {
            throw new InternalServerErrorException("Fallos por toos laos")
        }

    }
}
