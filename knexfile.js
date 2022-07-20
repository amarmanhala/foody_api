module.exports = {
  development: {
    client: 'pg',
    connection:'postgres://localhost/foody',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  }
  //Todo: add test config
  //Todo: add production config
}