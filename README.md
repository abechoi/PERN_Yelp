SETUP:
1. After installing PostgreSQL, create a global command.
echo 'export PATH="$PATH:/Library/PostgreSQL/12/bin/"' >> ~/.zshrc
2. Spotlight Search "psql" for the PostgreSQL Shell and login.# PERN_Yelp

PSQL Commands:
\? - help
\l - list database
CREATE DATABASE [DB]; - creates database
\c [DB] - connects to database
\d - lists relations within a database
\d [TABLE] - lists a table
CREATE TABLE [TABLE] ( name datatype, name datatype, name datatype ); - creates a table
ALTER TABLE [TABLE] ADD COLUMN [COLUMN] [DATATYPE]; - adds a column to a table
ie. ALTER TABLE products ADD COLUMN featured boolean;
ALTER TABLE [TABLE] DROP COLUMN [COLUMN]; - removes a column to a table
DROP TABLE [TABLE]; - removes a table
DROP DATABASE [DB]; - removes a database
INSERT INTO [TABLE] (arg_name1, arg_name2) values (arg1, arg2); - inserts data row
ie. INSERT INTO restaurants (id, name, location, price_range) values (123, 'mcdonalds', 'new york', 3);
SELECT [COLUMN] FROM [TABLE] - output data column, use * for all columns
DELETE FROM [TABLE] WHERE [CONDITION] - deletes row by condition ie. WHERE name='mcdonalds'


PSQL DATATYPES:
common datatypes - INT, VARCHAR(50), TEXT
BIGSERIAL : increments by 1
NOT NULL : makes the field required
PRIMARY KEY : unique key
check(condition) : adds field constraint ie. check(price_range >= 1 and price_range <= 5)