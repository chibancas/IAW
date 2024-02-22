import { Module } from '@nestjs/common';
import { EditorialesController } from './editoriales.controller';
import { EditorialesService } from './editoriales.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Editoriales } from './entities/editoriales.entity';


@Module({
  controllers: [EditorialesController],
  providers: [EditorialesService],
  imports:[
    TypeOrmModule.forFeature([Editoriales])
  ]
})
export class EditorialesModule {}
