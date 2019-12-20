#!/bin/sh

psql postgres://apibuild:ap1bu1ld@34.70.137.192:5432/postgres -f db/sql/create-db.sql     
psql postgres://apibuild:ap1bu1ld@34.70.137.192:5432/buildinvest -f db/sql/create-schema.sql
psql postgres://apibuild:ap1bu1ld@34.70.137.192:5432/buildinvest -f db/sql/create-tables.sql
psql postgres://apibuild:ap1bu1ld@34.70.137.192:5432/buildinvest -f db/sql/insert-default-data.sql