import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EditorialesService } from './editoriales.service';
import { CreateEditorialDto } from './dto/create-editorial.dto';

@Controller('editoriales')
export class EditorialesController {

    constructor(private editorialesService:EditorialesService){}

    @Get('/')
    gethome(){
        return this.editorialesService.gethome()
    }

    @Get('listar')
    getall(){
        return this.editorialesService.getall()
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.editorialesService.getById(id)
    }

    // @Post()
    // new() {
    //     return this.editorialesService.new()
    // }

    @Put()
    update(){
        return this.editorialesService.update()
    }

    @Delete()
    delete(){
        return this.editorialesService.delete()
    }
    
    @Post()
    create(@Body() createEditorialDto: CreateEditorialDto){
        return {
            data: createEditorialDto,
            msg: 'Editorial creada correctamente',
            status: 200
        }
    }
}
