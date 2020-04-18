#!/bin/sh

# psql postgres://postgres:postgres@35.231.152.216:2000/postgres -f db/sql/create-db.sql     
# psql postgres://postgres:postgres@35.231.152.216:2000/buildinvest -f db/sql/create-schema.sql
# psql postgres://postgres:postgres@35.231.152.216:2000/buildinvest -f db/sql/create-tables.sql
# psql postgres://postgres:postgres@35.231.152.216:2000/buildinvest -f db/sql/insert-default-data.sql

psql postgres://postgres:postgres@0.0.0.0:2000/postgres -f db/sql/create-db.sql     
psql postgres://postgres:postgres@0.0.0.0:2000/buildinvest -f db/sql/create-schema.sql
psql postgres://postgres:postgres@0.0.0.0:2000/buildinvest -f db/sql/create-tables.sql
psql postgres://postgres:postgres@0.0.0.0:2000/buildinvest -f db/sql/insert-default-data.sql
# psql postgres://postgres:postgres@0.0.0.0:5432/buildinvest -f db/sql/insert-tester-data.sql