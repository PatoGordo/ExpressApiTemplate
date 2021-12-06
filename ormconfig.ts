const devEnvName = "DEV";
const prodEnvName = "PROD";

const folder = process.env.ENV === devEnvName ? "src" : "dist";
const extension = process.env.ENV === devEnvName ? "ts" : "js";

const host = process.env.ENV === devEnvName ? "localhost" : process.env.DB_HOST;

const username = process.env.ENV === devEnvName ? "root" : process.env.DB_USER;

const password = process.env.ENV === devEnvName ? "toor" : process.env.DB_PASS;

const database =
  process.env.ENV === devEnvName ? "postgres_db" : process.env.DB_DB;

module.exports = {
  type: "postgres",
  host,
  port: 5432,
  username,
  password,
  database,
  entities: [`./${folder}/entities/*.${extension}`],
  migrations: [`./${folder}/databases/migrations/*.${extension}`],
  cli: {
    entitiesDir: `./${folder}/entities`,
    migrationsDir: `./${folder}/databases/migrations`
  },
  synchronize: true,
  logging: false
};
