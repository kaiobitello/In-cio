import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
    'inicio_db',                 // nome do banco
    'inicio_db_user',            // usuário
    'RhQ14MWglQXe5lDpITZbVeFE5EjxULmP', // senha
    {
      host: 'dpg-cvopn6vgi27c73astd10-a.oregon-postgres.render.com', // domínio do host
      port: 5432,
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    }
  );

export default {
    Sequelize: Sequelize,
    sequelize: sequelize
}