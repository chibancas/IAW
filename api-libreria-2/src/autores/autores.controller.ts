import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AutoresService } from './autores.service';
import { domainToASCII } from 'url';
import { CreateAutorDto } from './dto/create-autores.dto';

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

    // @Post()
    // new() {
    //     return this.autoresService.new
    // }

    @Put()
    update(){
        return this.autoresService.update
    }

    @Delete()
    delete(){
        return this.autoresService.delete
    }
    
    @Post()
    create(@Body() createLibroDto: CreateAutorDto){
        console.log(createLibroDto)
        
        return {
            data: createLibroDto,
            msg: 'Autor creado correctamente',
            status: 200
        }
    }
}