const devEnvName = "DEV";
const prodEnvName = "PROD";

export = {
  type: "postgres",
  host: process.env.ENV === devEnvName ? "localhost" : process.env.DB_HOST,
  port: 5432,
  username: process.env.ENV === devEnvName ? "root" : process.env.DB_USER,
  password: process.env.ENV === devEnvName ? "toor" : process.env.DB_PASS,
  database: process.env.ENV === devEnvName ? "exemple" : process.env.DB_DB,
  entities: ["./src/entities/*.ts"],
  migrations: ["./src/databases/migrations/*.ts"],
  cli: {
    entitiesDir: "./src/entities",
    migrationsDir: "./src/databases/migrations"
  },
  synchronize: true,
  logging: false
};
