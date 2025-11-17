# jobs-api

API simples para gerenciar vagas, candidatos e empresas (Node + Express + Sequelize + Postgres).

## Pré-requisitos
- Docker Desktop (ou Docker + docker-compose)
- Node.js 18+ e npm
- Git (opcional)

## Setup rápido (Windows / PowerShell)
1. Instale dependências:
   ```powershell
   npm install
   ```

2. Copie o exemplo de ambiente e ajuste os valores (não comite o `.env`):
   ```powershell
   copy .env.example .env
   # editar .env com suas credenciais (ex.: senha do Postgres)
   notepad .env
   ```

3. Levante o banco Postgres (docker-compose):
   ```powershell
   docker compose up -d
   ```

4. Rode migrations:
   ```powershell
   npx sequelize-cli db:migrate
   ```

5. Rode seeders (popula empresas/candidatos/vagas):
   ```powershell
   npx sequelize-cli db:seed:all
   ```

6. Inicie a API em desenvolvimento:
   ```powershell
   npm run dev
   ```

A API ficará disponível em `http://localhost:3000` (ou na porta definida em `.env`).

## Rodando apenas uma migration ou seed
- Rodar uma migration específica (use o nome do arquivo em `src/database/migrations`):
  ```powershell
  npx sequelize-cli db:migrate --to 20251115003816-create-companies-table.js
  ```

- Reverter a última migration:
  ```powershell
  npx sequelize-cli db:migrate:undo
  ```

- Rodar um seed específico:
  ```powershell
  npx sequelize-cli db:seed --seed 20251116141309-seed-companies-table.js
  ```

- Desfazer um seed específico:
  ```powershell
  npx sequelize-cli db:seed:undo --seed 20251116141309-seed-companies-table.js
  ```

- Verificar status das migrations:
  ```powershell
  npx sequelize-cli db:migrate:status
  ```

## Observações importantes
- Se o Node estiver rodando no host (Windows) e o Postgres em container com porta mapeada, use `DATABASE_URL` apontando para `localhost:5432`.
- Se a aplicação também rodar dentro do mesmo `docker-compose`, use o host `db` (ex.: `postgres://user:pass@db:5432/dbname`).