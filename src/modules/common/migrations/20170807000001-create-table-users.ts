'use strict';

export async function up(sequelize) {
    // sequelize.query(`
    //     CREATE TABLE 'users' (
    //         id INT NOT NULL,
    //         firstName VARCHAR(30) NOT NULL,
    //         lastName VARCHAR(30) NOT NULL,
    //         email VARCHAR(100) UNIQUE NOT NULL,
    //         password LONGTEXT NOT NULL,
    //         birthday DATETIME,
    //         createdAt DATETIME NOT NULL,
    //         updatedAt DATETIME NOT NULL,
    //         deletedAt DATETIME);
    // `);

    sequelize.query("CREATE TABLE 'test'(id INT NOT NULL, firstName VARCHAR(20) NOT NULL)");
    console.log('*Table users created!*');
}

export async function down(sequelize) {
    sequelize.query(`DROP TABLE users`);
}
