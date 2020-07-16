module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'strapi-mongoose',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'ds123371.mlab.com23371'),
        port: env.int('DATABASE_PORT', 23371),
        database: env('DATABASE_NAME', 'heroku_ml0d2s55'),
        username: env('DATABASE_USERNAME', 'biggbg'),
        password: env('DATABASE_PASSWORD', 'testing123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
