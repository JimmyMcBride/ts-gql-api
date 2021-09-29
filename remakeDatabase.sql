-- command to run the script in terminal
-- 🔻 use this command whit your terminal is pointing at the root directory of your project
-- psql -U postgres -f remakeDatabase.sql

-- env: DATABASE_URL=postgres://postgres:password@localhost:5432/db_hub
-- env: TEST_DATABASE_URL=postgres://postgres:password@localhost:5432/db_hub_test

DROP DATABASE IF EXISTS db_hub;

CREATE DATABASE db_hub
  WITH
  OWNER = postgres
  ENCODING = 'UTF8'
  CONNECTION LIMIT = -1
;

DROP DATABASE IF EXISTS db_hub_test;

CREATE DATABASE db_hub_test
  WITH
  OWNER = postgres
  ENCODING = 'UTF8'
  CONNECTION LIMIT = -1
;