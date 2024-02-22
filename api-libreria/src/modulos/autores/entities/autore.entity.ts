import { Libro } from "src/modulos/libros/entities/libro.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryColumnCannotBeNullableError, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Autore{

    @PrimaryColumn('text')
    nif: string;

    @Column('text',{
        unique: true,
        nullable: false,
    })
    nombre: string;

    @OneToMany(
        ()=> Libro,
        (libro)=>libro.autor
    )
    libros?:Libro[]
}