import express from 'express'
import 'dotenv/config';
import { gretingsRouter } from './routes/greetings.routes';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use('/api/greetings', gretingsRouter)

app.listen(PORT, () => {
    console.log(`listening port ${PORT}`)
});