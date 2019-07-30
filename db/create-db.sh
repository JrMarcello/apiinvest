#!/bin/bash
 
psql postgres://postgres:postgres@0.0.0.0:5432/postgres -f /scripts/create-db.sql       
psql postgres://postgres:postgres@0.0.0.0:5432/buildinvest -f /scripts/create-schema.sql       

echo 'DABASE CRIADO'
