import 'dotenv/config'; // dotenvの読み込み
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

const config: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [
        path.join(__dirname, '..', '**', '*.entity.{js,ts}'),
    ],
    synchronize: false,
    logging: true,
};

export default config;