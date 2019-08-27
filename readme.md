# **INTALAÇÃO DO PROJETO**

## **PREREQUISITOS**

- Git
- Docker
- Docker-compose

## **PASSOS PARA INSTALAÇÃO**

1. Clone o projeto do repositorio
   gitclone [https://gitlab.com/buildinvestpb/back-buildinvest.git]

2. No terminal, navegue ate o diretorio do projeto e execute

```javascript
sudo docker-compose up
```

3. Depois que os conteiers estiverem rodando, execute

```javascript
chmod +x db/create-db-local.sh
chmod +x db/create-db.sh
./db/create-db-local.sh  ou ./db/create-db.sh
```
