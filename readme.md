# **Manual de Instalação**

### **PREREQUISITOS**

- Git
- Node
- Postgres

### **Passo a Passo**

1. Clone o projeto do repositorio

git clone https://gitlab.com/buildinvestpb/back-buildinvest.git

2. Caso prefira usar um DB local. Defina as credenciais do Postgres no arquivo ***.env*** e no diretorio raiz do projeto, execute:
```javascript
chmod +x db/create-db-local.sh && ./db/create-db-local.sh
```

3. No terminal, navegue ate o diretorio raiz do projeto e execute
```javascript
npm start
```

