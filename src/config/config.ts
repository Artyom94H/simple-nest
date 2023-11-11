import { join } from 'path';

export const config = () => ({
  app: {
    name: process.env.APP_NAME,
    port: +process.env.PORT,
  },
  database: {
    name: process.env.DATABASE_NAME || 'simple-backend',
    type: process.env.DATABASE_TYPE || 'sqlite',
    database: process.env.DATABASE_DB || 'simple-backend',
    synchronize: true,
    dropSchema: false,
    logging: true,
    entities: [join(__dirname, '../**', '*.entity{.ts,.js}')],
  },
});
