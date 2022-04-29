===============  Required  ===============
1. Download Node.js latest LTS version (npm is included with this) from: https://nodejs.org/en/download/

=============== Installation ===============
1. cd to /server, run "npm install express"
2. cd to /client, run "npm install"

=============== Database Configuration ===============
1. Make sure Postgres is installed on your machine
2. Start pgAdmin and configure db.js in server folder with database information
3. Run the commands in csv/create_tables.sql to create each table in the database
4. Run the commands in loading_csv.txt to populate the tables

===============  Running  ===============
6. cd to /server, run "node index" to start server
7. cd to /client, run "npm start" to start client
