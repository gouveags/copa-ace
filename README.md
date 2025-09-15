# Copa Ace - Plataforma de Torneios de Counter-Strike 2

Uma plataforma moderna para acompanhar torneios de Counter-Strike 2, desenvolvida com Next.js, TypeScript, TailwindCSS e PostgreSQL.

## 🚀 Funcionalidades

- **Classificação**: Tabela de classificação com times, pontos, vitórias e derrotas
- **Agenda**: Lista de jogos agendados e resultados
- **Notícias**: Blog com notícias e anúncios
- **Patrocinadores**: Seção para exibir logos e links dos patrocinadores
- **Hall da Fama**: Lista de campeões dos torneios anteriores
- **Painel Admin**: Interface administrativa para gerenciar conteúdo

## 🛠️ Tecnologias

- **Frontend**: Next.js 15, React 19, TypeScript, TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL com Prisma ORM
- **Autenticação**: JWT
- **Deploy**: Vercel + Railway

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd copa-ace
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.local .env.local
```

Edite o arquivo `.env.local` com suas configurações:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/copa_ace?schema=public"
JWT_SECRET="your-super-secret-jwt-key-here"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-here"
```

4. Configure o banco de dados:
```bash
# Gerar o cliente Prisma
npm run db:generate

# Aplicar migrações
npm run db:push

# Popular com dados de exemplo
npm run db:seed
```

5. Execute o projeto:
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação.

## 🔐 Acesso Admin

- **URL**: `/admin/login`
- **Email**: `admin@copaace.com`
- **Senha**: `admin123`

## 🚀 Deploy

### Vercel (Frontend)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente no painel do Vercel
3. Deploy automático será feito a cada push

### Railway (Database)

1. Crie uma conta no [Railway](https://railway.app)
2. Crie um novo projeto PostgreSQL
3. Copie a string de conexão e configure como `DATABASE_URL`
4. Execute as migrações no Railway:
```bash
npx prisma migrate deploy
```

### Variáveis de Ambiente para Produção

```env
DATABASE_URL="postgresql://username:password@host:port/database?schema=public"
JWT_SECRET="your-production-jwt-secret"
NEXTAUTH_URL="https://your-domain.vercel.app"
NEXTAUTH_SECRET="your-production-nextauth-secret"
```

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── admin/             # Painel administrativo
│   ├── api/               # API Routes
│   ├── schedule/          # Página de agenda
│   ├── news/              # Página de notícias
│   ├── sponsors/          # Página de patrocinadores
│   └── hall-of-fame/      # Página do hall da fama
├── components/            # Componentes React
├── lib/                   # Utilitários e configurações
└── prisma/               # Schema e seed do banco
```

## 🎨 Design

O design é inspirado no logo da Copa Ace, utilizando uma paleta de cores ciano e preto com elementos geométricos e angulares. A interface é responsiva e otimizada para mobile-first.

## 📝 Scripts Disponíveis

- `npm run dev` - Executa o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run start` - Executa o servidor de produção
- `npm run lint` - Executa o linter
- `npm run db:generate` - Gera o cliente Prisma
- `npm run db:push` - Aplica mudanças no banco
- `npm run db:migrate` - Executa migrações
- `npm run db:seed` - Popula o banco com dados de exemplo

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.