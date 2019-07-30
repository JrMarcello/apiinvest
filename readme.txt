INTALAÇÃO DO PROJETO

PREREQUISITOS

Docker instaladao
Docker-compose instalado


Passos para instalação

#1 - Clone web-api do repositorio
gitclone https://gitlab.com/buildinvestpb/back-buildinvest.git

#2- No terminal, navegue ate o diretorio do projeto e execute
sudo docker-compose up

#3 - Depois que os conteiers estiverem rodando, execute
sudo ./db/create-db-dev.sh --local
ou
sudo ./db/create-db.sh --prod

