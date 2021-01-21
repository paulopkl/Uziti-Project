import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
const app = express();
import routes from './routes/index';
import mongoose from 'mongoose';
import cors from 'cors';

import Beer from './models/beer.model';
import data from './data';

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/beer', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(async () => {
        console.log("Seccessful connection with MongoDB");
        await Beer.deleteMany({});
        await Beer.insertMany(data);
    })
    .catch(error => console.error(error));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(201).json({ message: 'Working!' });
    next();
});

app.use(routes);

const port = 3333;
app.listen(port, () => {
    console.log(`App is Running on http://localhost:${port}`);
});