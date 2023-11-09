import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Autore{
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column('text',{
        unique: true,
        default: 'autor',
        nullable: true,
    })
    nombre: string;

}