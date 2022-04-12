const { Pool } = require('pg')
const configDb = require('../../appsettings.json');

const client = new Pool({
  user: configDb.postgres.user,
  host: configDb.postgres.host,
  password: configDb.postgres.password,
  port: configDb.postgres.port,
})
module.exports = client

