export interface getAllClients {
  cnpj: string;
  shopkeeperName: string;
  shopkeeperEmail: string;
  shopkeeperPhone: string;
  shopkeeperPhoneOther: string;
  socialReason: string;
  fantasyName: string;     
  email: string;
  phone: string;         
}

export interface registerClient {
  status: string;
  message: string;
}
