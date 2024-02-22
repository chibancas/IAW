import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seed } from './entities/seed.entity';
import { AutoresModule } from '../autores/autores.module';
import { AutoresService } from '../autores/autores.service';
import { ClientesModule } from '../clientes/clientes.module';
import { LibrosModule } from '../libros/libros.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [AutoresModule,ClientesModule,LibrosModule]
})
export class SeedModule {}