import express from 'express';
import cors from 'cors';
import path from 'path';

import routes from './routes';

require('./db/mongo_db');

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server on PORT: ${PORT}`);
});
