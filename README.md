SETUP:
1. After installing PostgreSQL, create a global command.
echo 'export PATH="$PATH:/Library/PostgreSQL/12/bin/"' >> ~/.zshrc
2. Spotlight Search "psql" for the PostgreSQL Shell and login.# PERN_Yelp

PSQL Commands:
\? - help
\l - list database
CREATE DATABASE [DBNAME]; - creates database
\c [DBNAME] - connects to database
\d - lists relations within a database
\d [TABLENAME] - lists a table
