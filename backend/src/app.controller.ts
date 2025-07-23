// app.controller.ts
import { Controller, Get, Param, NotFoundException, Post, Body, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from './driver.entity';

@Controller()
export class AppController {
    constructor(
    private readonly appService: AppService,

    @InjectRepository(Driver)
    private readonly driverRepo: Repository<Driver>,
    ) {}

    @Get('hello')
    getHello(): string {
    return this.appService.getHello();  // gọi từ service
    }


    @Get('drivers')
    async getAllDrivers(): Promise<Driver[]> {
    return this.appService.getAllDrivers();
    }

    @Get('drivers/:id')
    async getDriverById(@Param('id') id: number): Promise<Driver> {
    const driver = await this.appService.getDriverById(id);
    if (!driver) {
        throw new NotFoundException(`Driver with ID ${id} not found`);
    }
    return driver;
    }

    @Post('drivers')
    async create(@Body() body: Partial<Driver>): Promise<Driver> {
    return this.appService.createDriver(body);
    }

    @Put('drivers/:id') // hoặc @Patch nếu bạn muốn update một phần
    async updateDriver(
        @Param('id') id: number,
        @Body() updateData: Partial<Driver>
    ): Promise<Driver> {
    return this.appService.update(id, updateData);
    }
    
    @Delete('drivers/:id')
    async remove(@Param('id') id: number): Promise<{ message: string }> {
        await this.appService.remove(id);
        return { message: `Driver with id ${id} has been deleted` };
    }
}
