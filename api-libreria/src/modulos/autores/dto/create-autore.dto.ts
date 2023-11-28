import { IsInt, IsNumber, IsOptional, IsPositive, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { Libro } from "src/modulos/libros/entities/libro.entity";
export class CreateAutoreDto{

    @IsString()
    @MinLength(1)
    nif: string;

    @IsString()
    @MinLength(10)
    nombre: string;

    @IsString()
    @MinLength(1)
    libro?:string
}