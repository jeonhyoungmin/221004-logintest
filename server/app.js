import express from 'express';
import sequelize from './utils/database.js';
import router from './routes/route.js';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use( (_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})  

app.use(router);

sequelize.sync();

app.listen(5000, () => {
  console.log('server start')
});


// * app.js는 앱과 연결 역할(서버 만들기)W