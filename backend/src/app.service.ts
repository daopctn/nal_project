import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from './driver.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Driver)
    private readonly driverRepo: Repository<Driver>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getAllDrivers(): Promise<Driver[]> {
    return this.driverRepo.find();
  }

  async getDriverById(id: number): Promise<Driver | null> {
    return await this.driverRepo.findOneBy({ id });
  }

  async createDriver(data: Partial<Driver>): Promise<Driver> {
    const newDriver = this.driverRepo.create(data);
    return await this.driverRepo.save(newDriver);
  }

  async update(id: number, updateData: Partial<Driver>): Promise<Driver> {
    await this.driverRepo.update(id, updateData);
    const updatedDriver = await this.driverRepo.findOneBy({ id });

    if (!updatedDriver) {
      throw new Error(`Driver with id ${id} not found`);
    }
    return updatedDriver;
  }

  async remove(id: number): Promise<void> {
  const result = await this.driverRepo.delete(id);

  if (result.affected === 0) {
    throw new Error(`Driver with id ${id} not found`);
  }
  }

  }
