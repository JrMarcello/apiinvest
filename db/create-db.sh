#!/bin/sh

psql postgres://buildinvest:buildinvest123@104.197.55.110:5432/postgres -f db/sql/create-db.sql     
psql postgres://buildinvest:buildinvest123@104.197.55.110:5432/buildinvest -f db/sql/create-schema.sql
psql postgres://buildinvest:buildinvest123@104.197.55.110:5432/buildinvest -f db/sql/create-tables.sql
psql postgres://buildinvest:buildinvest123@104.197.55.110:5432/buildinvest -f db/sql/insert-default-data.sql