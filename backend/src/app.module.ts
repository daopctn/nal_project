// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from './config/typeorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Driver } from './driver.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Driver])
    // TypeOrmModule.forFeature([Driver]),  // <- kết nối entity
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
