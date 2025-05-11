import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservationsController } from './reservations/reservations.controller';
import { ReservationsModule } from './reservations/reservations.module';
import { ReservationsService } from './reservations/reservations.service';

@Module({
  imports: [ReservationsModule],
  controllers: [AppController, ReservationsController],
  providers: [AppService, ReservationsService],
})
export class AppModule {}
