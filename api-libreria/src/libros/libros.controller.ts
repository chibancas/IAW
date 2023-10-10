import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { CreateLibrodto } from './dto/create-libro.dto';

@Controller('libros')
export class LibrosController {


    //inyectar en la propiedad librosservice del objeto libros-controller inyectamos la clase libros-service
    constructor(private librosService:LibrosService){
        this.librosService.create
    }

    @Get('/')
    gethome(){
        return this.librosService.getHome()
    }

    @Get('listar')
    getall(){
        return this.librosService.findAll()
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.librosService.getById(id)
    }

    // @Post()
    // new() {
    //     return this.librosService.new()
    // }

    @Put()
    update(){
        return this.librosService.update()
    }

    @Delete()
    delete(){
        return this.librosService.delete()
    }

    @Post('create')
    create(@Body() createLibroDto:CreateLibrodto){
        console.log(createLibroDto);
        return this.librosService.create(createLibroDto)
        return{
            data: createLibroDto,
            msg:'libro creado correctamente',
            status:200
        }
    }
}