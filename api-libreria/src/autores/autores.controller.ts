import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AutoresService } from './autores.service';

@Controller('autores')
export class AutoresController {

    constructor(private autoresService: AutoresService) { }

    @Get('/')
    getHome() {
        return this.autoresService.getHome()
    }

    @Get('listar')
    getAll() {
        return this.autoresService.getAll()
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.autoresService.getById(id)
    }

    @Post()
    new() {
        return this.autoresService.new
    }

    @Put()
    update(){
        return this.autoresService.update
    }

    @Delete()
    delete(){
        return this.autoresService.delete
    }
    
}


