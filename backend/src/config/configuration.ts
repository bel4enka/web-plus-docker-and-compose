const dotenv = require('dotenv');

dotenv.config({ path: '../../.env' });


export default () => ({
  port: parseInt(process.env.PORT) || 3001,
  db: {
    type: 'postgres',
    database: 'nest_project',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    databaseName: process.env.POSTGRES_DB,
  },
  jwtSecret: process.env.JWTSECRET,
  YANDEX_CLIENT_ID: process.env.YANDEX_CLIENT_ID,
  YANDEX_CLIENT_SECRET: process.env.YANDEX_CLIENT_SECRET,
  YANDEX_REDIRECT_URI: process.env.YANDEX_REDIRECT_URI,
});

