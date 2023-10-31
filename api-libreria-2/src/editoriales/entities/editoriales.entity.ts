import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Editoriales{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        unique: true,
        default: 'editorial',
        nullable: false
    })
    nombre:string
}