import express from 'express';
import userRouter from './routes';

let app = express();

app.use('/', userRouter);

app.listen(3000, () => {
  console.log('Example app listening on port 3000');
})
