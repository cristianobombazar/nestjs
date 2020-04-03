import { Module } from '@nestjs/common';
import { NgoModule } from './ngo/ngo.module';
import { IncidentModule } from './incident/incident.module';

@Module({
  imports: [
    NgoModule,
    IncidentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
