module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'strapi-mongoose',
      settings: {
        client: 'mongo',
        host: env('DATABASE_HOST', 'ds161175.mlab.com'),
        port: env.int('DATABASE_PORT', 61175),
        database: env('DATABASE_NAME', 'heroku_twpm552z'),
        username: env('DATABASE_USERNAME', 'biggbg'),
        password: env('DATABASE_PASSWORD', 'testing123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
