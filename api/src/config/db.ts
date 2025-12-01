import mysql, { ConnectionOptions } from 'mysql2';

const access: ConnectionOptions = {
  user: process.env.MYSQL_USER!,
  database: process.env.MYSQL_DB!,
  password: process.env.MYSQL_PASSWORD!,
};
console.log('ENV CHECK', {
  user: process.env.MYSQL_USER,
  db: process.env.MYSQL_DB,
  pass: process.env.MYSQL_PASSWORD,
});
export const connectDB = mysql.createConnection(access);
