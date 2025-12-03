// import mysql, { ConnectionOptions } from 'mysql2';
// const access: ConnectionOptions = {
//   user: process.env.MYSQL_USER!,
//   database: process.env.MYSQL_DB!,
//   password: process.env.MYSQL_PASSWORD!,
// };
// console.log('ENV CHECK', {
//   user: process.env.MYSQL_USER,
//   db: process.env.MYSQL_DB,
//   pass: process.env.MYSQL_PASSWORD,
// });
// export const connectDB = mysql.createConnection(access);

import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(process.env.MONGO_URL!, {
      dbName: 'breakHabit',
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
