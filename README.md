# Trabalho_final

# Projeto Backend com NestJS e Prisma

Este projeto é uma aplicação backend desenvolvida com o framework NestJS, utilizando TypeScript e o ORM Prisma para gerenciamento de um banco de dados PostgreSQL. A aplicação inclui autenticação de usuários com JWT, além de CRUD para usuários, produtos e categorias.

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)

## Pré-requisitos

Antes de iniciar, certifique-se de que você possui as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/get-npm)

## Configuração do Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seuusuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

3. **Configuração do Banco de Dados:**

   - Crie um banco de dados no PostgreSQL.
   - Adicione as variáveis de ambiente em um arquivo `.env` na raiz do projeto:

     ```env
     DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
     JWT_SECRET="seu_segredo"
     PORT=3000
     ```

4. **Execute as Migrações do Prisma:**

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Popule o banco de dados com dados iniciais (opcional):**

   Edite o arquivo `prisma/seed.ts` para adicionar dados iniciais e execute:

   ```bash
   npx prisma db seed
   ```

## Execução do Projeto

Para iniciar a aplicação, utilize o seguinte comando:

```bash
npm run start:dev
```

ou

```bash
yarn start:dev
```

A aplicação estará disponível em `http://localhost:3000`.

## Endpoints da API

A aplicação possui os seguintes endpoints:

### Usuários

- **Login**  
  `POST /users/login`  
  Autentica um usuário e retorna um token JWT.

- **Criar Usuário**  
  `POST /users`  
  Cria um novo usuário.

- **Obter Usuário por ID**  
  `GET /users/:id`  
  Retorna o usuário correspondente ao ID.

- **Atualizar Usuário**  
  `PUT /users/:id`  
  Atualiza os dados de um usuário (exceto senha).

- **Excluir Usuário**  
  `DELETE /users/:id`  
  Exclui um usuário.

- **Alterar Senha**  
  `POST /users/password/:id`  
  Altera a senha de um usuário.

- **Listar Todos os Usuários**  
  `GET /users`  
  Retorna uma lista de todos os usuários.

### Produtos

- **Criar Produto**  
  `POST /products`  
  Cria um novo produto.

- **Obter Produto por ID**  
  `GET /products/:id`  
  Retorna o produto correspondente ao ID.

- **Listar Todos os Produtos**  
  `GET /products`  
  Retorna uma lista de todos os produtos.

- **Atualizar Produto**  
  `PUT /products/:id`  
  Atualiza os dados de um produto.

- **Excluir Produto**  
  `DELETE /products/:id`  
  Exclui um produto.

### Categorias

- **Criar Categoria**  
  `POST /categories`  
  Cria uma nova categoria.

- **Obter Categoria por ID**  
  `GET /categories/:id`  
  Retorna a categoria correspondente ao ID.

- **Listar Todas as Categorias**  
  `GET /categories`  
  Retorna uma lista de todas as categorias.

- **Atualizar Categoria**  
  `PUT /categories/:id`  
  Atualiza os dados de uma categoria.

- **Excluir Categoria**  
  `DELETE /categories/:id`  
  Exclui uma categoria.

## Contribuição

Se você deseja contribuir para este projeto, fique à vontade para abrir uma issue ou um pull request.

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

```

### Instruções

1. **Substitua** `https://github.com/seuusuario/seu-repositorio.git` pelo link do seu repositório.
2. **Adapte** qualquer outra informação específica sobre seu projeto que você considere relevante.

Sinta-se à vontade para fazer ajustes conforme necessário! Se precisar de mais alguma coisa, é só avisar.
