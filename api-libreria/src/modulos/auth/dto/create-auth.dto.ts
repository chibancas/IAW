import { IsBoolean, IsOptional, IsString } from "class-validator"

export class RegisterCreateAuthDto {

    @IsString()
    username: string

    @IsString()
    password:string

    @IsString()
    email:string

    @IsBoolean()
    isActive:boolean

    @IsString()
    @IsOptional()
    roles?:string

    @IsString()
    logo?:string

    @IsString()
    instagram?:string
}
