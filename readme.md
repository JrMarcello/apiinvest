# **Manual de Instalação**

### **PREREQUISITOS**

- Git
- Node
- Postgres
- Docker

### **Passo a Passo**

1. Clone o projeto do repositorio

git clone https://gitlab.com/buildinvestpb/back-buildinvest.git

2. No terminal, navegue ate o diretorio raiz do projeto e execute

```javascript
npm run docker-build && npm start
```

3. Para configurar um DB local. **_[Com uma instancia do Postgres online]_** Defina as credenciais do Postgres no arquivo **_.env_**, ajuste as urls nos scripts do diretório **_db_** e no diretorio raiz do projeto, execute:

```javascript
chmod +x db/create-db-local.sh && ./db/create-db-local.sh
```
