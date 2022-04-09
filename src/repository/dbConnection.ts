const { Pool } = require('pg')
const configDb = require('../../appsettings.json');

//const config = fs.readFileSync('../../../appsettings.json').toString()
//const configJson = JSON.parse(config)
//console.log(configDb.postgres.connectionString)

const client = new Pool({
  user: configDb.postgres.user,
  host: configDb.postgres.host,
  password: configDb.postgres.password,
  port: configDb.postgres.port,
    //connectionString: configDb.postgres.connectionString,
})

module.exports = client

/*
const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'users',
  password: 'projetouser1234',
  port: 5432,
})
*/