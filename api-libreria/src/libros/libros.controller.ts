import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LibrosService } from './libros.service';

@Controller('libros')
export class LibrosController {

    constructor(private librosService:LibrosService){}

    @Get('/')
    gethome(){
        return this.librosService.getHome()
    }

    @Get('listar')
    getall(){
        return this.librosService.getAll()
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.librosService.getById(id)
    }

    @Post()
    new() {
        return this.librosService.new()
    }

    @Put()
    update(){
        return this.librosService.update()
    }

    @Delete()
    delete(){
        return this.librosService.delete()
    }
}
