import { IsInt, IsNumber, IsPositive, IsString, MaxLength, MinLength } from "class-validator";

export class CreateLibrodto{
    
    @IsString()
    @MinLength(5)
    @MaxLength(10)
    isbn:string;

    @IsString()
    @MinLength(5)
    nombre:string;

    @IsInt()
    @IsPositive()
    precio:number;
}