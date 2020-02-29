#!/bin/sh

psql postgres://marcelo:marcelobuild@34.70.137.192:5432/postgres -f db/sql/create-db.sql     
psql postgres://marcelo:marcelobuild@34.70.137.192:5432/buildinvest -f db/sql/create-schema.sql
psql postgres://marcelo:marcelobuild@34.70.137.192:5432/buildinvest -f db/sql/create-tables.sql
psql postgres://marcelo:marcelobuild@34.70.137.192:5432/buildinvest -f db/sql/insert-default-data.sql