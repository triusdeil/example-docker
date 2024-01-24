import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: process.env.MYSQLDB_HOST,
    user: 'root',
    password: process.env.MYSQLDB_PASSWORD,
    port: parseInt(process.env.MYSQLDB_DOCKER_PORT || '3308')
});
