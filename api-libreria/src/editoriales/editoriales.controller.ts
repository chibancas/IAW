import { Controller, Get } from '@nestjs/common';

@Controller('editoriales')
export class EditorialesController {
    @Get('/')
    gethome(){
        return ('seccion home de editoriales')
    }

    @Get('listar')
    getall(){
        return('listado de editoriales')
    }
}
