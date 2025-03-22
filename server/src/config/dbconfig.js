import mysql from 'mysql2/promise';
import fs from "fs";


// environment variables
//const HOST = process.env.DB_HOST;
//const USER = process.env.DB_USER;
//const DATABASE = process.env.DB_NAME

// dtabase connection pool
const pool = mysql.createPool({
    host: 'localhost',                                 // host
    user: 'francis',                                // database user
    password: 'francisrey123',
    database: 'ponder',                         // database name
    waitForConnections: true,                   
    connectionLimit: 10,                        // max connections at a time
    maxIdle: 10,                                // max idle connections
    idleTimeout: 60000,                          
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
});


export default pool;





































