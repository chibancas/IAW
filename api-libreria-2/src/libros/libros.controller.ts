import { Body, Controller, Delete, Get, NotFoundException, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { CreateLibrodto } from './dto/create-libro.dto';
import { PaginationDTO } from './dto/pagination.dto';

@Controller('libros')
export class LibrosController {


    //inyectar en la propiedad librosservice del objeto libros-controller inyectamos la clase libros-service
    constructor(private librosService: LibrosService) {
        this.librosService.create
    }

    @Get('/')
    gethome() {
        return this.librosService.getHome()
    }

    @Get('listar')
    getall( @Query() paginationDto: PaginationDTO ) {
        console.log(paginationDto)
        return this.librosService.findAll(
            {
                limit: 1,
                offset: 2
            }
        )
    }

    @Get(':id')
    getISBN(@Param('id') isbn: string) {
        console.log(isbn);
        //aquí el controlador llama al servicio
        return this.librosService.getISBN(isbn);
    }

    //Endpoint responsable de ejecutar la url
    //cuidado con el parámetro, el orden es importante, si lo pongo detrás de la raíz se traga todo
    @Get(':id/:nombre')
    getISBNusuario(@Param('id') isbn: string, @Param('nombre') usuario: string) {
        console.log(isbn);
        return `El libro del usuario ${usuario} es el que tiene el isbn ${isbn}`;
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.librosService.getById(id)
    }
    // @Post()
    // new() {
    //     return this.librosService.new()
    // }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.librosService.remove(id);
    }


    @Put()
    update() {
        return this.librosService.update()
    }

    @Delete()
    delete() {
        return this.librosService.delete()
    }


    @Post('create')
    create(@Body() createLibroDto: CreateLibrodto) {
        console.log(createLibroDto);
        return this.librosService.create(createLibroDto)
    }
}