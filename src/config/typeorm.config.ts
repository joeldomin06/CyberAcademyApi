import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const typeOrmConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'sqlite',
  database: configService.get('DATABASE'),
  synchronize: true,
  logging: false,
  entities: [join(__dirname + '../../**/*.entity.{js,ts}')],
  migrations: ['../../migration/*.ts'],
  subscribers: ['../../subscriber/*.ts'],
});
