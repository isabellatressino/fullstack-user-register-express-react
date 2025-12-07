# Resumo do Desenvolvimento do Projeto

## Inicializando um projeto Node

Para iniciar um projeto Node com o npm:

```bash
npm init -y
```

O parâmetro `-y` aceita automaticamente todas as perguntas padrão do `npm init`.

### Principais arquivos

1. `package.json`: criado automaticamente; contém todas as informaçõoes do projeto.
2. `package-lock.json`: gerado automaticamento ao instalar dependências.
3. `node_modules`: armazena as dependências instaladas.
4. `server.js`: arquivo principal do projeto.

## Instalando o Express

O Express é um framework minimalista para criar servidores e rotas:

```bash
npm i express
```

## Rotas

As rotas são os caminhos pelos quais o frontend se comunica com o backend, enviando requisições e recebendo respostas.

Ela é composta de dois elementos principais:

### 1. Método HTTP (tipo)

- GET → Buscar informações
- POST → Enviar/criar informações
- PUT → Atualizar tudo
- PATCH → Atualizar parcialmente
- DELETE → Remover algo

### 2. Endereço (caminho da API)

```bash
app.get('/usuarios', (req, res) => {})
```

### Status HTTP

- **2xx** → sucesso  
- **4xx** → erro do cliente  
- **5xx** → erro do servidor  

| Código | Significado        |
| :----: | :----------------- |
|  200   | Sucesso            |
|  201   | Criado com sucesso |

## Exemplo 1 - Servidor Básico

```js
import express from 'express'

const app = express()

// Rota de exemplo
app.get('/usuarios', (req, res) => {
    res.send("Ok, deu certo!")
})

// Porta onde o servidor vai rodar
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})
```

Precisamos rodar nosso servidor no terminal:

```bash
# O parâmetro --watch serve para observar alterações
node --watch server.js
```

Para acessar no navegador basta colocar:

```bash
http://localhost:3000/usuarios
```

## Requisições

Existem três maneiras principais de enviar dados em uma requisição para um servidor:

### 1. Query Params (GET)

Usados para filtros, buscas e consultas, quando as informações não são sensíveis.
Permitem enviar vários parâmetros ao mesmo tempo.

```bash
GET servidor.com/usuarios?estado=bahia&cidade=salvador
```

### 2. Route Params (GET, PUT, DELETE)

Usados quando precisamos acessar, editar ou deletar um recurso específico, geralmente por ID.

```bash
GET    servidor.com/usuarios/22
PUT    servidor.com/usuarios/22
DELETE servidor.com/usuarios/22
```

### 3. Body Params (POST, PUT)

Quando precisamos enviar dados no corpo da requisição, normalmente informações sensíveis ou estruturadas.
Não há limite prático de quantidade.

```json
{
  "nome": "Isabella",
  "email": "isa@example.com",
  "senha": "123456"
}
```

### Comandos

| Comando | Descrição                             |
| :-----: | :------------------------------------ |
|  send   | Envia uma resposta simples ao cliente |
|  json   | Envia uma resposta no formato JSON    |

## Exemplo 2 - Criando e listando usuários

```js
import express from 'express'

// Inicializa a aplicação Express
const app = express()

// Permite que o servidor entenda JSON enviado no body da requisição
app.use(express.json())

// "Banco de dados" temporário em memória para armazenar usuários
const users = []

// Rota para criar um novo usuário
app.post('/usuarios', (req, res) => {

    // Adiciona o conteúdo enviado no body
    users.push(req.body)

    // Retorna o status 201 e envia de volta o novo usuário criado
    res.status(201).json(req.body)

})

// Rota para listar todos os usuários cadastrados
app.get('/usuarios', (req, res) => {
    
    // Retorna status 200 e envia o array completo de usuários
    res.status(200).json(users)

})

// Inicia o servidor na porta 3000
// http://localhost:3000
app.listen(3000)
```

## Prisma

Para manipular e se conectar ao banco de dados, utilizamos a biblioteca Prisma, que funciona como um ORM (Object-Relational Mapper).

```bash
# Instalado como dependência de desenvolvimento
npm install prisma --save-dev

# Cria os arquivos de configuração necessários
npx prisma init
```

### Arquivos Gerados

1. `.env`: Arquivo onde ficam as variáveis de ambiente, principalmente a conexão com o banco de dados.
2. `prisma.config.ts`: Arquivo de configuração do Prisma, usado para personalizar comportamentos internos, definir caminhos, geradores etc.
3. `prisma/schema.prisma`: É onde você define os modelos (tabelas) e a estrutura dos dados.

Para rodar o banco de dados, depois que configuramos:

```bash
npx prisma db push
```

Precisamos instalar o prisma cliente

```bash
npm install @prisma/client
```

Conseguimos visualizar nosso banco de dados

```bash
npx prisma studio
```

## Cors

O CORS define quem pode acessar seu servidor.

```bash
npm install cors
```

```js
import cors from 'cors'
app.use(cors())
```