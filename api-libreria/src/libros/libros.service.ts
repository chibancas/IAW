import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class LibrosService {

    getHome(){
        return ('seccion de libros')
    }

    getAll(){
        return('listado de todos los libros')
    }

    getById(@Param('id') id:string){
        return (`detalle del libro ${id}`)
    }

    new(){
        return ('formulario para añadir registro del libro')
    }

    update(){
        return ('actualizar registro de libro')
    }

    delete(){
        return ("eliminar registro de libro")
    }
}
