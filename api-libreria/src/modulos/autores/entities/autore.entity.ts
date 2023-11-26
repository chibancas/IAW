import { Column, Entity, PrimaryColumn, PrimaryColumnCannotBeNullableError, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Autore{

    @PrimaryColumn('text',{})
    nif: string;

    @Column('text',{
        unique: true,
        nullable: false,
    })
    nombre: string;
}