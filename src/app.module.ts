import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservationsModule } from './reservations/reservations.module';
import { AmenitiesModule } from './amenities/amenities.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ReservationsModule,
    AmenitiesModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'super-secret-ingredient',
      database: 'postgres',
      autoLoadEntities: true,
      // synchronize: true, // disable for prod
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
