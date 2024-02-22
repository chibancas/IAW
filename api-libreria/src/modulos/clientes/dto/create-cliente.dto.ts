import { IsOptional, IsString, MinLength } from "class-validator";

export class CreateClienteDto {
    @IsString()
    @MinLength(1)
    nif: string;

    @IsString()
    @MinLength(5)
    @IsOptional()
    nombre: string;
    
    @IsString()
    @MinLength(5)
    @IsOptional()
    apellidos: string;

    @IsString()
    @IsOptional()
    @MinLength(5)
    direccion: string;

    @IsString()
    @MinLength(4)
    @IsOptional()
    ciudad: string;
    
    @IsString()
    @MinLength(5)
    @IsOptional()
    localidad: string;
}