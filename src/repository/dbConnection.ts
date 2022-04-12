const { Pool } = require('pg')
var appSettings = require('../../appsettings.json');

const client = new Pool(
  {
    user: appSettings.postgres.user,
    host: appSettings.postgres.host,
    password: appSettings.postgres.password,
    port: appSettings.postgres.port,
  }
)
module.exports = client

