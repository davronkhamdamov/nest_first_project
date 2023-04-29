import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const connectDb: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: 'j24xt200',
  port: 5432,
  host: 'localhost',
  database: 'courses_db',
  autoLoadEntities: true,
  synchronize: true,
};
