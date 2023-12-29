import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const { USER_NAME, USER_PASSWORD, HOST } = process.env;

export const sequelize = new Sequelize(
  'notes',
  USER_NAME,
  USER_PASSWORD,
  {
    host: HOST,
    dialect: 'postgres'
  }
);


