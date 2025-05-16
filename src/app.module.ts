import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ReservationsModule } from './reservations/reservations.module';
import { AmenitiesModule } from './amenities/amenities.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesModule } from './files/files.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: (process.env.POSTGRES_PORT as number | undefined) || 5432,
      username: 'postgres',
      password: 'super-secret-ingredient',
      database: 'postgres',
      autoLoadEntities: true,
    }),

    ConfigModule.forRoot(),

    ReservationsModule,
    AmenitiesModule,
    FilesModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
