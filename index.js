const express = require('express');
const bodyParser = require("body-parser");
const { sequelize } = require('./models');

const PORT = 8000;

const app = express();

// const userRouter = require('./routes/user');
const planRouter = require('./routes/plan');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json()); 

/* 라우터 */ 
// app.use('/users', userRouter);
app.use('/plans', planRouter);


app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

app.set("port", process.env.PORT || PORT);


app.listen(app.get("port"), () => {
    console.log(`Server listening on port ${app.get("port")}...`);
});


/* 나중에 db 연결 시 활성화 */
// sequelize.sync({ force: false })
// .then(() => {
//     console.log('데이터베이스 연결 성공');
// })
// .catch((err) => {
//     console.error(err);
// });