import { Controller, Get, Query } from '@nestjs/common';
import { IncidentService } from './incident.service';

@Controller('incident')
export class IncidentController {

  constructor(private readonly incidentService: IncidentService){}

  @Get()
  async findAll(@Query() params) {
    const { size, page } = params;
    return await this.incidentService.findAll(page, size);
  }

}
