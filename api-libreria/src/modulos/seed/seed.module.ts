import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seed } from './entities/seed.entity';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  // imports:[
  //   TypeOrmModule.forFeature([
  //     Seed
  //   ])
  // ]

})
export class SeedModule {}
