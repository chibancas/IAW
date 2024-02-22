import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SeedModule } from './modulos/seed/seed.module';
import { AutoresModule } from './modulos/autores/autores.module';
import { ClientesModule } from './modulos/clientes/clientes.module';
import { LibrosModule } from './modulos/libros/libros.module';
import { AuthModule } from './modulos/auth/auth.module';
import { UserModule } from './modulos/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST, // Accede a las variables de entorno directamente
      port: parseInt(process.env.DB_PORT), // Asegúrate de convertir el puerto a un número
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
      logging: true
    }),
    ClientesModule,
    SeedModule,
    AutoresModule,
    LibrosModule,
    AuthModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
