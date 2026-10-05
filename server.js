
import express from 'express';
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const users = [
    {
        name:'FAISAL',
        age:53
    },
    {
        name:'SAAD',
        age:19
    },
    {
        name:'FAIZAN',
        age:16
    }
];

app.get('/', (req, res) => {
    console.log('REQUEST RECEIVED')
    res.send(users);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
});