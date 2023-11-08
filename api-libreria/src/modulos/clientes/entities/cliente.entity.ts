import { Column, Entity, PrimaryColumn } from "typeorm";
@Entity()
export class Cliente {
    @PrimaryColumn()
    nif: string;

    @Column('text', { unique: false})
    nombre: string;

    @Column('text', { unique: false})
    apellido: string;

    @Column('text', { unique: false})
    direccion: string;

    @Column('text', { unique: false, nullable:true})
    localidad: string;

}
