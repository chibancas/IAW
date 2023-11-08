import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Autore {

    @PrimaryGeneratedColumn('increment')
    id:number

    @Column({
        type:"text",
        unique:false
    })
    nombre:string


}