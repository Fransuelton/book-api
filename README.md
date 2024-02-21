# BookAPI
Esta API Rest utiliza tecnologias como Node.js e Express junto com pacotes como o UUID para criar números de indentificação únicos aos usuários é também o Nodemon que é usado na hora de fazer alterações no projeto, reiniciando o projeto automaticamente.

Incluindo também um Middleware de verificação de usuário que está nas rotas que exigem autenticação de usuário, garantindo que apenas usuários autenticados possam acessar esses endpoints e realizar as operações que envolvem dados específicos.

[![My Skills](https://skillicons.dev/icons?i=js,nodejs,express,npm,)](https://skillicons.dev)

## Funcionalidade

- Esse sistema permite aos usuários cadastrados adicionar novos livros com informações como nome, autor, editora e descrição. É também listar livros e deletar.

## Requisitos Funcionais

- [x] Cadastro de usuário
- [x] Cadastro de livro
- [x] Listagem de livros do usuário
- [x] Atualizar usuário
- [x] Deletar livro
- [x] Deletar usuário

## Regras de negócio

- Não é possível cadastrar um usuário com email já existente
- Não é possível cadastrar mesmo livro
- Não é possível deletar uma conta inexistente
- Não é possível deletar um livro inexistente

## Instalação

1. Clone o repositório:

    ```
    git clone https://github.com/Fransuelton/book-api.git
    ```

2. Instale as dependências:

    ```
    npm install
    ```
    
2. Inicie o servidor utilizando o nodemon:

    ```
    npm run dev
    ```

## Endpoints

## Endpoints com Middleware de Verificação de Usuário

Os seguintes endpoints requerem autenticação de usuário e utilizam o middleware de verificação de usuário:

- **POST /books**: Adicionar um novo livro associado a um usuário autenticado.
- **PUT /users/:id**: Atualizar os dados de um usuário autenticado.
- **DELETE /users/:id**: Excluir a conta de um usuário autenticado.

### Criar Usuário
<hr>

**URL:** `/users`

**Método:** `POST`

**Corpo da Requisição:**
```json
{
  "name": "Nome do Usuário",
  "email": "email@example.com"
}
```

### Obter Todos os Usuários
<hr>

**URL:** `/getUsers`

**Método:** `GET`

### Adicionar Livro
<hr>

**URL:** `/books`

**Método:** `POST`

**Corpo da Requisição:**
```json
{
  "name": "Nome do Livro",
  "author": "Autor do Livro",
  "company": "Editora do Livro",
  "description": "Descrição do Livro",
  "user_id": "ID do Usuário"
}
```

### Atualizar Dados do Usuário
<hr>

**URL:** `/users/:id`

**Método:** `PUT`

**Parâmetros da URL:** `id` (ID do Usuário)

**Corpo da Requisição:**
```json
{
  "name": "Novo Nome do Usuário"
}
```

### Obter Livros de um Usuário
<hr>

**URL:** `/books/:id`

**Método:** `GET`

**Parâmetros da URL:** `id` (ID do Usuário)

### Excluir Usuário
<hr>

**URL:** `/users/:id`

**Método:** `DELETE`

**Parâmetros da URL:** `id` (ID do Usuário)

### Excluir Livro
<hr>

**URL:** `/books/:id`

**Método:** `DELETE`

**Parâmetros da URL:** `id` (ID do Livro)

## Contribuição

Contribuições são bem-vindas! Se você encontrou um bug, tem uma ideia para uma nova funcionalidade ou quer melhorar a documentação, sinta-se à vontade para abrir uma issue ou enviar um pull request.
