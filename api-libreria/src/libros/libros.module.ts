import { Module } from '@nestjs/common';
import { LibrosController } from './libros.controller';
import { LibrosService } from './libros.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autor } from 'src/autores/entities/autor.entity';
import { Libros } from './entities/libros.entity';
import { Editoriales } from 'src/editoriales/entities/editoriales.entity';

@Module({
  controllers: [LibrosController],
  providers: [LibrosService],
  imports:[
    TypeOrmModule.forFeature([
      Libros
    ])
  ]
})
export class LibrosModule {}
