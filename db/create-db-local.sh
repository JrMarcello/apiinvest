#!/bin/sh
 
psql postgres://postgres:postgres@localhost:5432/postgres -f db/sql/create-db.sql
psql postgres://postgres:postgres@localhost:5432/buildinvest -f db/sql/create-schema.sql     
psql postgres://postgres:postgres@localhost:5432/buildinvest -f db/sql/create-tables.sql
psql postgres://postgres:postgres@localhost:5432/buildinvest -f db/sql/insert-default-data.sql
