import { Controller, Get } from '@nestjs/common';

@Controller('autores')
export class AutoresController {

    @Get('/')
    gethome(){
        return ('seccion de autores')
    }

    @Get('listar')
    getall(){
        return ('listar todos los autores')
    }
}
