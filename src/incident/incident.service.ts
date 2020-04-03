import { Injectable } from '@nestjs/common';
import { Incident } from './incident.model';
import { Ngo } from '../ngo/ngo.model';

@Injectable()
export class IncidentService {

  async save(incident: Incident): Promise<Incident> {
    return Promise.apply({});
  }

  async findAll(page =1, size = 5): Promise<Array<Incident>> {
      return [];
  }

  async findAllByNgo(ngo: Ngo): Promise<Array<Incident>> {
    return [];
  }

  async deleteIncidentByIdAndNgo(id: number, ngo: Ngo): Promise<void> {
    return Promise.apply(null);
  }


}
