# caffeine-army

*Requisitos:

NodeJs,
NestJs CLI,
Um gerenciador de pacotes (eg: npm, yarn, pnpm),
PostgresSQL ou Docker

# Rodar o Docker:

1) Instalar o docker
2) Na raiz do projeto, rodar "docker-compose up -d"
3) Para parar o docker, rodar "docker-compose down"

# Como iniciar a API:

1) Dê um git clone no repositório
2) Crie um .env com as configurações do .env.example
3) Rode o comando "npm install"
4) Rode o comando "npm run db:setup" -> Rodas as migrations
5) OBS: Em caso de erro ao rodar o comando acima, tente "npx prisma db push" e em seguida, rode o comando acima novamente
6) Rode o comando "npm run build"
7) Rode o comando "npm run start"

> Servidor rodando...

# Como utilizar as rotas da API:

> User Admin: 

email: 'vitorrbsilva@hotmail.com'

password: 'k5fCYlmor6EXjj^&4GsZBCz1Jha1M5n'

> A partir desse usuário admin você poderá fazer tudo dentro do sistema. 

> Para fazer login com como admin:

POST /auth/signin, 
body: {
    email, 
    password
}

> A partir do token recebido no response de /auth/signin, você poderá acessar as rotas:

GET /enterprise/:cnpj -> Listar a empresa específica

<strong>Ex: baseURL/enterprise/866552664656123</strong>


