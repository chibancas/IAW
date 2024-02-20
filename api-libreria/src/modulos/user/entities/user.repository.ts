import { DataSource, Repository } from "typeorm";
import { User } from "./user.entity";
import { Injectable, InternalServerErrorException } from "@nestjs/common";

@Injectable()
export class UserRepository extends Repository<User> {
    constructor(private datasource: DataSource) {
        super(User, datasource.createEntityManager())
    }

    // async findByEmail(email:string){
    //     try{
    //         return await this.createQueryBuilder('USERS')
    //         .where(`email= :value`, {value:email})
    //         .getOne()
    //     }catch(error){
    //         throw new InternalServerErrorException('fallo al buscar el email');
    //     }
    // }
    
    // async findByUsername(username:string){
    //     try{
    //         return await this.createQueryBuilder('USERS')
    //         .where(`username= :value`, {value:username})
    //         .getOne()
    //     }catch(error){
    //         throw new InternalServerErrorException('fallo al buscar el username');
    //     }
    // }


    async findByEmail(email:string){
        try{
            return await this.createQueryBuilder('USERS')
            .where(`email= :value`, {value:email})
            .getOne()
        }catch(error){
            throw new InternalServerErrorException('fallo al buscar el email');
        }
    }
    
    async findByUsername(username:string){
        try{
            return await this.createQueryBuilder('USERS')
            .where(`username= :value`, {value:username})
            .getOne()
        }catch(error){
            throw new InternalServerErrorException('fallo al buscar el username');
        }
    }
}