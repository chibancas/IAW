import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class EditorialesService {

    gethome(){
        return ('seccion home de editoriales')
    }

    getall(){
        return('listado de editoriales')
    }

    getById(@Param('id') id:string){
        return (`detalle de la editorial ${id}`)
    }

    new(){
        return ('formulario para añadir nueva editorial')
    }

    update(){
        return ('actualizar registro de editorial')
    }

    delete(){
        return ("eliminar registro de editorial")
    }

}
