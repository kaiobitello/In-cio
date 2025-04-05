import { Sequelize } from "sequelize";
const sequelize = new Sequelize('inicio-db', 'root', '01039119kaio!', {
    host: "postgresql://inicio_db_user:RhQ14MWglQXe5lDpITZbVeFE5EjxULmP@dpg-cvopn6vgi27c73astd10-a/inicio_db",
    port: 5432,
    dialect: "postgres"

});


export default {
    Sequelize: Sequelize,
    sequelize: sequelize
}