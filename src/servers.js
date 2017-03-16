import express from 'express';
import userRouter from './routes';
import bodyParser from 'body-parser';

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', userRouter);

app.listen(3000, () => {
  console.log('Example app listening on port 3000');
})
