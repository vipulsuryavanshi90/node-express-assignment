import { PORT } from './config';
import express from 'express';
import userRoutes from './routes/userRoutes';
const app = express();

app.use(express.json());
app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
