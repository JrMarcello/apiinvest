#!/bin/bash
 
psql postgres://postgres:postgres@35.231.152.216:5432/postgres -f db/scripts/create-db.sql     
psql postgres://postgres:postgres@35.231.152.216:5432/buildinvest -f db/scripts/create-schema.sql
psql postgres://postgres:postgres@35.231.152.216:5432/buildinvest -f db/scripts/create-tables.sql
