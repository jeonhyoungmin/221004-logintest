import { Sequelize } from "sequelize";

const sequelize = new Sequelize('loginDB', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
});

export default sequelize;

// * MySQL 데이터베이스에 연결할 수 있도록 하는 연속화 인스턴스를 생성