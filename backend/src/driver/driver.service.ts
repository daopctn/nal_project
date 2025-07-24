import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from '../entities/driver.entity';
import { CreateDriverDto } from '../dto/create-driver.dto';
import { UpdateDriverDto } from '../dto/update-driver.dto';

@Injectable()
export class DriverService {
    constructor(
        @InjectRepository(Driver)
        private readonly driverRepo: Repository<Driver>,
    ) { }

    async getAllDrivers(): Promise<Driver[]> {
        return this.driverRepo.find();
    }

    async getDriverById(id: number): Promise<Driver | null> {
        return this.driverRepo.findOneBy({ id });
    }

    async createDriver(body: CreateDriverDto): Promise<Driver> {
        const driver = this.driverRepo.create(body);
        return this.driverRepo.save(driver);
    }

    async updateDriver(id: number, updateData: UpdateDriverDto): Promise<Driver> {
        await this.driverRepo.update(id, updateData);
        const updatedDriver = await this.driverRepo.findOneBy({ id });
        if (!updatedDriver) {
            throw new Error(`Driver with id ${id} not found`);
        }
        return updatedDriver;
    }

    async removeDriver(id: number): Promise<void> {
        const result = await this.driverRepo.delete(id);

        if (result.affected === 0) {
            throw new Error(`Driver with id ${id} not found`);
        }
    }
}
