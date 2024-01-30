import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name:'USERS'
})
export class User{

    @PrimaryGeneratedColumn('uuid',{name:'cod'}) //así podemos cambiar el nombre de una propiedada para que conincida con una bbdd existente
    // @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({
        type:'varchar',
        name:'username',
        nullable:false,
        unique:true,
        length:150
    })
    username: string

    @Column({
        type:'varchar',
        name:'password',
        nullable:false,
        length:150
    })
    password:string

    @Column({
        name:'email',
        nullable:false,
        unique:true,
        length:150,
        type:'varchar'
    })
    email:string

    @Column('bool',{default:true})
    isActive:boolean

    @Column('varchar',{
        // array:true,
        //esto dará pie a tener un array con distintos roles en el dto
        //['invitado','administrador','usuario','gestor']
        default:'usuario'
        // default:['usuario']
    })
    roles?:string

    @Column({
        name:'logo',
        nullable:true,
        unique:false,
        length:150,
        type:'varchar'
    })
    logo?:string //ruta relativa desde public/images

    @Column({
        name:'instagram',
        nullable:true,
        unique:false,
        length:150,
        type:'varchar'
    })
    instagram?:string

    @CreateDateColumn({
        name:'created_at'
    })
    createdAt:string

    @UpdateDateColumn({
        name:'updated_at'
    })
    updatedAt:string
    
    // relacion de 1 a 1 de entidad auth( tabla user) <---> entidad Cliente
    // cliente:Cliente;
}