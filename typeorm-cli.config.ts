import { InitialMigration1747200723927 } from 'src/migrations/1747200723927-initialMigration';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: (process.env.POSTGRES_PORT as number | undefined) || 5432,
  username: 'postgres',
  password: 'super-secret-ingredient',
  database: 'postgres',
  synchronize: false,
  entities: [],
  migrations: [InitialMigration1747200723927],
});
