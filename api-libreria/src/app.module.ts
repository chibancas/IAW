import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedModule } from './modulos/seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { AutoresModule } from './modulos/autores/autores.module';
import { ClientesModule } from './modulos/clientes/clientes.module';

@Module({
  imports: [
    SeedModule,
    AutoresModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      // type: 'postgres',
      // host: process.env.DB_HOST,
      // port: +process.env.DB_PORT,
      // database: process.env.DB_NAME,
      // username: process.env.DB_USERNAME,
      // password: process.env.DB_PASSWORD,
      // autoLoadEntities: true,
      // synchronize: true
      type:'postgres',
      host:"192.168.1.213",
      port:5433, //poniendo un + convertimos cualquier variable a numero
      database:"apiLibreria",
      username: "postgres",
      password: "usuario",
      autoLoadEntities:true,
      synchronize:true
    }),
    ClientesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
