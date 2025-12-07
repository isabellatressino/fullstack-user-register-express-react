# fullstack-user-register-express-react

Este projeto foi criado com objetivo de estudo e prática de API REST + Frontend consumindo dados do backend.

## Tecnologias Utilizadas

### Backend

- Node.js
- Express
- Prima ORM
- JavaScript

### Frontend

- React
- Vite
- Axios
- JavaScript

## Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/isabellatressino/fullstack-user-register-express-react.git
cd fullstack-user-register-express-react
```

### 2. Backend

#### 2.1. Instale as dependências

```bash
cd backend
npm install
```

#### 2.2. Crie o arquivo `.env`

```ini
DATABASE_URL=""
```

#### 2.3. Gere o banco

```bash
npx prisma db push
```

#### 2.4. Inicie o servidor

```bash
node --watch server.js
```

## 3. Frontend

#### 3.1. Instale as dependências

```bash
cd frontend
npm install
```

#### 3.2. Rode o projeto

```bash
npm run dev
```
