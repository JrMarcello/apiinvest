#!/bin/sh
 
psql postgres://postgres:postgres@localhost:5432/postgres -f db/scripts/create-db.sql
psql postgres://postgres:postgres@localhost:5432/buildinvest -f db/scripts/create-schema.sql     
psql postgres://postgres:postgres@localhost:5432/buildinvest -f db/scripts/create-tables.sql
psql postgres://postgres:postgres@localhost:5432/buildinvest -f db/scripts/insert-default-data.sql
