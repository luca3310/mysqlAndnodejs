import mysql from "mysql2"
import 'dotenv/config'


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.dbPassword,
    database: "mydb"
  });

export default db