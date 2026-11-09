const db = require('../models');

async function connectToDatabase() {
    try {
        await db.sequelize.authenticate();
        console.log('Database Connection has been established successfully.');

        await db.sequelize.sync({alter: true});
        console.log('Database synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error.massage);
        process.exit(1);
    }
}

module.exports = connectToDatabase;