import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  getEnterprise
} from './interfaces/enterprise-response.interface';

@Injectable()
export class EnterpriseService {
  constructor(private readonly prismaService: PrismaService) {}


  async getEnterprise(cnpj: any): Promise<getEnterprise> {
    const enterprise = await this.prismaService.enterprise.findUnique({
      where: {
        cnpj: cnpj,
      },
      select: {
        cnpj: true,
        shopkeeperName: true,
        shopkeeperEmail: true,
        shopkeeperPhone: true,
        shopkeeperPhoneOther: true,
        socialReason: true,
        fantasyName: true,     
        email: true,  
        phone: true ,
        description: true        
      },
    });

    return enterprise;
  }

}
