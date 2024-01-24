import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: 'restapidb',
    user: 'root',
    password: '123456',
    port: 3307
});
