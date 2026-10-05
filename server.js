import express from 'express';
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());




app.get('/', (req, res) => {
    res.send('HELLO WORLD')
});

app.get('/login', (req, res) => {
    res.send('YAHOO LOGIN SUCCESSFUL')
});





const PORT = process.env.PORT || 4000; 

app.listen(process.env.PORT, () => {
    console.log(`SERVER IS AT PORT ${PORT}`)
})