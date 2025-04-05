import { Sequelize } from "sequelize";
const sequelize = new Sequelize('form', 'root', '01039119kaio!', {
    host: "localhost",
    dialect: "mysql"
});

export default {
    Sequelize: Sequelize,
    sequelize: sequelize
}