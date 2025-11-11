// config/database.ts
import { parse } from 'pg-connection-string';

export default ({ env }) => {
  // Railway inyecta la URL de la base de datos automáticamente
  const databaseUrl = env('DATABASE_URL');

  if (!databaseUrl) {
    console.error('DATABASE_URL environment variable is not set. Strapi will not start.');
    // Retorna un objeto vacío o una config de SQLite para fallback local si lo deseas
    return {
      connection: {
        client: 'sqlite',
        connection: {
          filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        },
        useNullAsDefault: true,
      },
    };
  }

  // Parsea la URL de la base de datos
  const config = parse(databaseUrl);

  // Retorna la configuración específica para Railway
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: config.host,
        port: parseInt(config.port, 10), // El parser devuelve un string
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: {
          // Esta es la línea clave.
          // Railway requiere SSL, pero no necesita autorización de certificado estricta.
          rejectUnauthorized: false
        },
      },
      pool: {
        min: env.int('DATABASE_POOL_MIN', 2),
        max: env.int('DATABASE_POOL_MAX', 10),
      },
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};