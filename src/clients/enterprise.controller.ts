import {
  Controller,
  Get,
  Param
} from '@nestjs/common';
import { EnterpriseService } from './enterprise.service';
import { getAllClients } from './interfaces/clients-response.interface';

@Controller('enterprise')
export class EnterpriseController {
  constructor(private readonly clientsService: EnterpriseService) {}

  @Get(':cnpj')
  findEnterprise(@Param('cnpj') cnpj: string): Promise<getAllClients> {
    return this.clientsService.getAllClients(cnpj);
  }

}
