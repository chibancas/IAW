import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class AutoresService {

    getHome(){
        return ('seccion de autores')
    }

    getAll(){
        return('listado de todos los autores')
    }

    getById(@Param('id') id:string){
        return (`detalle del autor ${id}`)
    }

    new(){
        return ('formulario para crear un nuevo autor')
    }

    update(){
        return ('actualizar registro')
    }

    delete(){
        return ("eliminar registro de autor")
    }
}