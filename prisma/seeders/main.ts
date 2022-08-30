require('dotenv').config();

import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Roles
  await prisma.roles.createMany({
    data: [
      {
        name: 'admin',
      },
      {
        name: 'customer',
      }
    ],
  });

  
  // Users: Admnistrator (Main)
  const administratorData = {
    email: 'vitorrbsilva@hotmail.com',
    password: 'k5fCYlmor6EXjj^&4GsZBCz1Jha1M5n',
    name: 'Administrador 1'
  };


  // Check if already exist
  const existToAdministrator = await prisma.users.findUnique({
    where: {
      email: administratorData.email
    },
    select: {
      id: true,
    }
  });

  if (!existToAdministrator) {
    await prisma.users.create({
      data: {
        email: administratorData.email,
        password: await hash(administratorData.password, 10),
        roleName: 'admin',
        Administrators: {
          create: {
            name: administratorData.name,
          }
        }
      }
    });
  }

  


  for (let index = 0; index < 1; index++) {
    await prisma.enterprise.createMany({
      data: [
        {
          cnpj: '866552664656123',
          shopkeeperName: 'Carlos Oliveira',
          shopkeeperEmail: 'carloscaffeinearmy@gmail.com',
          shopkeeperPhone: '(71)98484-8484',
          shopkeeperPhoneOther: '(71)98484-8484',
          socialReason: 'Caffeine Army LDTA',
          fantasyName: 'Caffeine Army',     
          email: 'caffeinearmy@gmail.com',  
          phone: '(71)98484-8484',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'      
        },
        {
          cnpj: '866552663656123',
          shopkeeperName: 'Carlos Oliveira',
          shopkeeperEmail: 'carloscaffeinearmy@gmail.com',
          shopkeeperPhone: '(71)98484-8484',
          shopkeeperPhoneOther: '(71)98484-8484',
          socialReason: 'Caffeine Army LDTA',
          fantasyName: 'Caffeine Army',     
          email: 'caffeinearmy@gmail.com',  
          phone: '(71)98484-8484',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'              
        },
        {
          cnpj: '866552665656123',
          shopkeeperName: 'Carlos Oliveira',
          shopkeeperEmail: 'carloscaffeinearmy@gmail.com',
          shopkeeperPhone: '(71)98484-8484',
          shopkeeperPhoneOther: '(71)98484-8484',
          socialReason: 'Caffeine Army LDTA',
          fantasyName: 'Caffeine Army',     
          email: 'caffeinearmy@gmail.com',  
          phone: '(71)98484-8484',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'               
        },
      ]
    });
    
  }

}

main()
  .catch(console.error)
  .finally(() => {
    prisma.$disconnect();
    process.exit();
  });