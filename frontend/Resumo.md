# Resumo da criação do projeto

## Vite

Para criar um projeto usando React, podemos usar a biblioteca `Vite`.

```bash
npm create vite@latest
```

As pastas criadas são:

- `index.html`: arquivo principal da aplicação
- `package.json`: infromações e dependências do projeto
- `vite.config.js`: configurações do vite
- `Readme.md`: informações gerais do projeto
- `.eslintrc.cjs `: configurações do ESLint
- `public/`: arquivos estáticos acessados diretamente
- `src/`: código-fonte do projeto
  - `assets/`: imagens, fontes e outros recursos
  - `main.jsx`: arquivo inicial que renderiza o React
  - `index.css`: estilos globais
  - `App.jsx`: componente raiz da aplicação
  - `App.css`: estilos do App

Precisamos rodar também:

```bash
npm install
```

Para rodar a aplicação:

```bash
npm run dev
```

## O React

O código no React é escrito no `.jsx`, que é uma mistura de JavaScript e HTML.

```jsx
import './App.css'

// Cada componente React é uma função
function App() {

  // Retorna o que será exibido na tela
  return (
    <div>
      <h1>Olá React!</h1>
    </div>
  )
}

export default App
```

### Ferramentas

#### useState

Controla estados (valores que mudam). Usamos quando precisamos guardar valores que mudam na tela.

```jsx
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>
    </div>
  )
}
```

#### useEffect

Para executar ações aumáticas, como buscar dados em uma API, rodar um código quando o componente inicia, reagir a mudanças de estado, entre outras.

```jsx
import { useEffect } from "react";

useEffect(() => {
  console.log("Componente carregado!");
}, []);
```

#### useRef

Usamos para acessar elementos do DOM.

```jsx
import { useRef } from "react";

function App() {
  const inputRef = useRef();

  function focarInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focarInput}>Focar no input</button>
    </div>
  );
}
```

## Axios

Axios é uma biblioteca que facilita a comunicação entre o front-end e o back-end.

```bash
npm install axios
```

