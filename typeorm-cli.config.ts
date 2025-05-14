import { InitialMigration1747200723927 } from 'src/migrations/1747200723927-initialMigration';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'super-secret-ingredient',
  database: 'postgres',
  entities: [],
  migrations: [InitialMigration1747200723927],
});
