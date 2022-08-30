import {
  Controller,
  Get,
  Param
} from '@nestjs/common';
import { EnterpriseService } from './enterprise.service';
import { getEnterprise } from './interfaces/enterprise-response.interface';

@Controller('enterprise')
export class EnterpriseController {
  constructor(private readonly enterpriseService: EnterpriseService) {}

  @Get(':cnpj')
  findEnterprise(@Param('cnpj') cnpj: string): Promise<getEnterprise> {
    return this.enterpriseService.getEnterprise(cnpj);
  }

}
