import { Column, Entity, PrimaryColumn } from "typeorm";
@Entity()
export class Cliente {
    @PrimaryColumn('text')
    nif: string;

    @Column('text', { unique: false, nullable: true  })
    nombre: string;

    @Column('text', { unique: false, nullable: true  })
    apellidos: string;

    @Column('text', { unique: false, nullable: true  })
    direccion: string;

    @Column('text', { unique: false, nullable: true })
    localidad: string;

    @Column('text', { unique: false, nullable: true })
    ciudad: string;

}
