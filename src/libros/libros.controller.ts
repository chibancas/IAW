import { Controller, Get } from '@nestjs/common';

@Controller('libros')
export class LibrosController {
    @Get('/')
    gethome(){
        return ('seccion de Libro')
    }

    @Get('listar')
    getall(){
        return ('listar todos los libros')
    }
}
