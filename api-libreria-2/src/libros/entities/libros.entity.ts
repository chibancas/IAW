import { type } from "os";
import { BeforeInsert, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Libros {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @PrimaryColumn({
        type:"text",
        nullable:false,
        unique:true
    })
    isbn:string

    @Column({
        type: 'text',
        nullable: false,
        unique:true,
    })
    nombre:string

    @Column({
        type: "numeric",
        nullable: false,
        default:0
    })
    precio:number

    @BeforeInsert()
    updateNombre(){
        this.nombre=this.nombre.toUpperCase().replace(" ","_");
    }

    
}