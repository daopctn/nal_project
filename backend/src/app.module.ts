// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from './config/typeorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DriverModule } from './driver/driver.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    DriverModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
