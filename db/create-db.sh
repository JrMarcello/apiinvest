#!/bin/sh

psql postgres://buildinvest:buildinvest123@104.197.55.110:5432:5432/postgres -f db/scripts/create-db.sql     
psql postgres://buildinvest:buildinvest123@104.197.55.110:5432:5432/buildinvest -f db/scripts/create-schema.sql
psql postgres://buildinvest:buildinvest123@104.197.55.110:5432:5432/buildinvest -f db/scripts/create-tables.sql
psql postgres://buildinvest:buildinvest123@104.197.55.110:5432:5432/buildinvest -f db/scripts/insert-default-data.sql