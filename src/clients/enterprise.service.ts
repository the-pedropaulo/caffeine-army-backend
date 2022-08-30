import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import {
  getAllClients,
  registerClient,
} from './interfaces/clients-response.interface';

@Injectable()
export class EnterpriseService {
  constructor(private readonly prismaService: PrismaService) {}


  async getAllClients(cnpj: any): Promise<getAllClients> {
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
