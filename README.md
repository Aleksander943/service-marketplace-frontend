# Frontend - Marketplace

Interface web para gerenciamento de serviços e agendamentos. Construída com React 19, TypeScript e Vite, oferecendo uma experiência moderna e responsiva.

## 🚀 Tecnologias Utilizadas

- **React** 19.2.4 - Biblioteca UI
- **TypeScript** 5.9.3 - Tipagem estática
- **Vite** 8.0.1 - Build tool rápido
- **Tailwind CSS** 4.2.2 - Estilização
- **React Router** 7.14.0 - Roteamento
- **React Hook Form** 7.72.1 - Gerenciamento de formulários
- **Zod** 4.3.6 - Validação de dados
- **shadcn/ui** - Componentes UI reutilizáveis
- **Radix UI** - Primitivos acessíveis
- **Lucide React** - Ícones SVG
- **ESLint** - Linting de código

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── Cadastro/        # Formulário de registro
│   ├── Dashboard/       # Painel principal
│   ├── login/           # Formulário de login
│   ├── NavBar/          # Barra de navegação com Dropdown, Filter, Search
│   └── ui/              # Componentes base (button, card, input, avatar, etc)
├── pages/               # Páginas da aplicação
│   ├── Login.tsx        # Página de autenticação
│   ├── Cadastro.tsx     # Página de registro
│   └── dashboard.tsx    # Painel de serviços
├── routes/              # Configuração de rotas
├── services/            # Chamadas API
├── contexts/            # Contextos do React
├── hooks/               # Hooks customizados
├── store/               # Gerenciamento de estado
├── types/               # Tipos TypeScript globais
├── utils/               # Funções utilitárias
├── lib/                 # Bibliotecas auxiliares
├── assets/              # Imagens e arquivos estáticos
├── App.tsx              # Componente raiz
└── main.tsx             # Ponto de entrada
```

## ⚡ Como Começar

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Ou com yarn
yarn install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# O aplicativo estará disponível em http://localhost:5173
```

### Build para Produção

```bash
# Build otimizado
npm run build

# Visualizar build localmente
npm run preview
```

### Linting

```bash
# Verificar problemas de código
npm run lint
```

## 📋 Funcionalidades

- ✅ **Autenticação** - Login de usuários com validação de formulário
- ✅ **Registro** - Cadastro de novos usuários com Zod validation
- ✅ **Dashboard** - Visualização de serviços disponíveis
- ✅ **Barra de Navegação** - Menu principal com dropdown, filtros e busca
- ✅ **Componentes UI** - Biblioteca de componentes reutilizáveis
- ✅ **Validação** - Validação de dados com React Hook Form + Zod
- ✅ **Responsivo** - Design responsivo com Tailwind CSS

## 🔗 Rotas

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | Login | Tela de autenticação |
| `/cadastro` | Cadastro | Tela de registro de novo usuário |
| `/dashboard` | Dashboard | Painel principal com serviços |

## 🎨 Componentes Principais

### UI Components
- `button.tsx` - Botão reutilizável
- `input.tsx` - Campo de entrada
- `card.tsx` - Card container
- `avatar.tsx` - Avatar do usuário
- `label.tsx` - Label para formulários
- `dropdown-menu.tsx` - Menu dropdown
- `field.tsx` - Campo de formulário
- `separator.tsx` - Separador visual

### Formulários
- `FormLogin.tsx` - Formulário de login com validação
- `FormCadastro.tsx` - Formulário de cadastro com schema Zod

### Layout
- `NavBar.tsx` - Barra de navegação principal
- `Dashboard/servicesBoard.tsx` - Exibição de serviços

## 📝 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3000
```

## 🔄 Integração com Backend

A aplicação se conecta com o backend em `http://localhost:3000` para:
- Autenticação de usuários
- Gerenciamento de serviços
- Operações de agendamentos

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build
- `npm run lint` - Verifica linting

## 🛠️ Desenvolvimento

### Adicionando Novos Componentes UI

Use o sistema de componentes shadcn/ui para manter consistência:

```bash
# Novo componente pode ser criado em src/components/ui/
```

### Criando Novos Formulários

Use React Hook Form + Zod para validação:

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
```

## 📄 Licença

Desenvolvido para Marketplace
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
