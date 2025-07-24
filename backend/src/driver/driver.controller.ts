import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Driver } from '../entities/driver.entity';
import { DriverService } from './driver.service';
import { CreateDriverDto } from '../dto/create-driver.dto';
import { UpdateDriverDto } from '../dto/update-driver.dto';

@Controller('drivers')
export class DriverController {
    constructor(private readonly driverService: DriverService) { }

    @Get()
    async getAll(): Promise<Driver[]> {
        return this.driverService.getAllDrivers();
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<Driver> {
        const driver = await this.driverService.getDriverById(id);
        if (!driver) {
            throw new NotFoundException(`Driver with ID ${id} not found`);
        }
        return driver;
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() body: CreateDriverDto): Promise<Driver> {
        return this.driverService.createDriver(body);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async update(@Param('id') id: number, @Body() updateData: UpdateDriverDto): Promise<Driver> {
        return this.driverService.updateDriver(id, updateData);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async remove(@Param('id') id: number): Promise<{ message: string }> {
        await this.driverService.removeDriver(id);
        return { message: `Driver with id ${id} has been deleted` };
    }
}
