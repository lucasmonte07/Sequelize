import Sequelize from 'sequelize';

const db = new Sequelize (
    "testDB", 
    "postgres",
    "",
    {
        host: "localhost",
        dialect: "postgres"
    }
)

export default db