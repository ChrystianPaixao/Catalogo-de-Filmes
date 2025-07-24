import { Sequelize } from "sequelize";

const sequelize = new Sequelize('filmes', 'root', 'chupeta1.', {
    host: 'localhost',
    dialect: "mysql"
});

try {
  await sequelize.authenticate();
  console.log('Conectado com o banco!');
} catch (error) {
  console.error('Deu errado com o banco!', error);
}


export default sequelize;