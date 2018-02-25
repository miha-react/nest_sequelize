'use strict';

import { IDatabaseConfig } from './interfaces/IDatabase';

export const databaseConfig: IDatabaseConfig = {
    development: {
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'qwerty',
        database: process.env.DB_NAME || 'test',
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 3306,
        dialect: 'mysql',
        logging: false,
        force: true,
        timezone: '+02:00',
    },
    production: {
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'qwerty',
        database: process.env.DB_NAME || 'test',
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 3306,
        dialect: 'mysql',
        logging: false,
        force: true,
        timezone: '+02:00',
    },
    test: {
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'qwerty',
        database: process.env.DB_NAME || 'test',
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 3306,
        dialect: 'mysql',
        logging: true,
        force: true,
        timezone: '+02:00',
    },
};
