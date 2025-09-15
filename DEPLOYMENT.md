# 🚀 Guia de Deploy - Copa Ace

Este guia te ajudará a fazer o deploy da aplicação Copa Ace no Vercel (frontend) e Railway (banco de dados).

## 📋 Pré-requisitos

- Conta no [Vercel](https://vercel.com)
- Conta no [Railway](https://railway.app)
- Repositório no GitHub/GitLab/Bitbucket

## 🗄️ 1. Configuração do Banco de Dados (Railway)

### Passo 1: Criar Projeto no Railway

1. Acesse [Railway](https://railway.app) e faça login
2. Clique em "New Project"
3. Selecione "Provision PostgreSQL"
4. Aguarde a criação do banco

### Passo 2: Obter String de Conexão

1. Clique no serviço PostgreSQL criado
2. Vá para a aba "Connect"
3. Copie a "Connection String" (começa com `postgresql://`)

### Passo 3: Configurar Variáveis de Ambiente

1. No painel do Railway, vá para "Variables"
2. Adicione as seguintes variáveis:
   ```
   DATABASE_URL=postgresql://username:password@host:port/database?schema=public
   ```

## 🌐 2. Deploy do Frontend (Vercel)

### Passo 1: Conectar Repositório

1. Acesse [Vercel](https://vercel.com) e faça login
2. Clique em "New Project"
3. Conecte seu repositório GitHub/GitLab/Bitbucket
4. Selecione o repositório `copa-ace`

### Passo 2: Configurar Build

O Vercel detectará automaticamente que é um projeto Next.js. As configurações padrão são:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### Passo 3: Configurar Variáveis de Ambiente

No painel do Vercel, vá para "Settings" > "Environment Variables" e adicione:

```
DATABASE_URL=postgresql://username:password@host:port/database?schema=public
JWT_SECRET=seu-jwt-secret-super-seguro-aqui
NEXTAUTH_URL=https://seu-dominio.vercel.app
NEXTAUTH_SECRET=seu-nextauth-secret-aqui
```

**Importante**: Substitua `seu-dominio.vercel.app` pelo domínio real do seu projeto.

### Passo 4: Deploy

1. Clique em "Deploy"
2. Aguarde o processo de build e deploy
3. Anote a URL do projeto (ex: `https://copa-ace.vercel.app`)

## 🔧 3. Configuração Pós-Deploy

### Passo 1: Executar Migrações

Após o deploy, você precisa executar as migrações do banco:

1. Acesse o terminal do Railway ou use o CLI do Vercel
2. Execute os comandos:

```bash
# Gerar cliente Prisma
npx prisma generate

# Aplicar migrações
npx prisma migrate deploy

# Popular com dados de exemplo
npx prisma db seed
```

### Passo 2: Verificar Deploy

1. Acesse a URL do seu projeto
2. Verifique se todas as páginas estão funcionando:
   - `/` - Página inicial (classificação)
   - `/schedule` - Agenda de jogos
   - `/news` - Notícias
   - `/sponsors` - Patrocinadores
   - `/hall-of-fame` - Hall da Fama
   - `/admin/login` - Login administrativo

### Passo 3: Testar Admin

1. Acesse `/admin/login`
2. Use as credenciais:
   - **Email**: `admin@copaace.com`
   - **Senha**: `admin123`

## 🔄 4. Deploy Automático

### Configuração do Git

Após a configuração inicial, cada push para a branch principal (`main` ou `master`) irá:

1. **Vercel**: Fazer deploy automático do frontend
2. **Railway**: Manter o banco de dados ativo

### Workflow Recomendado

```bash
# 1. Fazer mudanças no código
git add .
git commit -m "feat: nova funcionalidade"

# 2. Push para trigger do deploy
git push origin main

# 3. Aguardar deploy automático
# 4. Verificar se tudo está funcionando
```

## 🛠️ 5. Comandos Úteis

### Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build local
npm run build

# Lint
npm run lint
```

### Banco de Dados

```bash
# Gerar cliente Prisma
npm run db:generate

# Aplicar mudanças no schema
npm run db:push

# Executar migrações
npm run db:migrate

# Popular com dados de exemplo
npm run db:seed
```

## 🔍 6. Troubleshooting

### Problemas Comuns

#### Erro de Conexão com Banco

```
Can't reach database server at localhost:5432
```

**Solução**: Verifique se a `DATABASE_URL` está correta no Vercel.

#### Erro de Build

```
Module not found: Can't resolve '@prisma/client'
```

**Solução**: Execute `npm run db:generate` antes do build.

#### Páginas em Branco

**Solução**: Verifique se as migrações foram executadas e se há dados no banco.

### Logs e Debug

1. **Vercel**: Vá para "Functions" > "View Function Logs"
2. **Railway**: Vá para "Deployments" > "View Logs"

## 📊 7. Monitoramento

### Vercel Analytics

1. Ative o Vercel Analytics no painel
2. Monitore performance e erros
3. Configure alertas se necessário

### Railway Monitoring

1. Monitore uso do banco de dados
2. Configure alertas de uso de recursos
3. Faça backup regular dos dados

## 🔐 8. Segurança

### Variáveis Sensíveis

- Nunca commite arquivos `.env`
- Use variáveis de ambiente no Vercel
- Rotacione secrets regularmente

### Banco de Dados

- Use conexões SSL
- Configure firewall se necessário
- Monitore acessos

## 📈 9. Escalabilidade

### Vercel

- Upgrade para Pro se necessário
- Configure CDN global
- Use Edge Functions para performance

### Railway

- Upgrade para planos pagos
- Configure réplicas de leitura
- Monitore performance

## 🆘 10. Suporte

- **Vercel**: [docs.vercel.com](https://docs.vercel.com)
- **Railway**: [docs.railway.app](https://docs.railway.app)
- **Prisma**: [prisma.io/docs](https://prisma.io/docs)

---

🎉 **Parabéns!** Sua aplicação Copa Ace está no ar e pronta para receber usuários!
