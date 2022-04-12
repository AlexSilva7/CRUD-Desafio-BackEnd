const redis = require ("redis");
const { promisify } = require ("util");
var appSettings = require('../../appsettings.json');

const redisClient = redis.createClient (
  { 
    host: appSettings.redis.host, 
    porta: appSettings.redis.port, 
    password: appSettings.redis.password
  }
)
redisClient.connect();
module.exports = redisClient;


