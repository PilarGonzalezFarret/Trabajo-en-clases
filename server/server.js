import express from 'express';
import createConnection from './config/ConnectMongodb.js';

const app = express();
const port = 8000;

app.use(express.json())
app.use(express.urlencoded({extended : true}))
createConnection();

app.listen(port,()=>{
    console.log('server is running in port ', port )
})