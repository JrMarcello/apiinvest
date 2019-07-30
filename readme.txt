INTALAÇÃO DO PROJETO

PREREQUISITOS

Docker instaladao
Docker-compose instalado


Passos para instalação

#1 - Clone web-api do repositorio
gitclone https://gitlab.com/buildinvestpb/back-buildinvest.git

#2- No terminal, navegue ate o diretorio do projeto e execute
sudo docker-compose up

#3 - Navegue até o diretorio /db e execute
chmod +x ./create-db.sh && ./create-db.sh 

