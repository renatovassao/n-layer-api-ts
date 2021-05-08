export const config = {
  client: "postgresql",
  connection: {
    database: "n_layer_users",
    user: "postgres",
    password: "123",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    extension: "ts",
  },
};

export const development = config;
export const develop = config;
export const homolog = config;
export const staging = config;
export const production = config;
