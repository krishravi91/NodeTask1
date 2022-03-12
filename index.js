//express code

import express from 'express';
import { fileCreation, myReaddir } from './file.js';

const app = express();
const port = 9000;

app.use(express.json());//middleware-- intersept request and convert the same to JSON

//create file
app.get("/", (request,response) =>{
    const file = fileCreation();
    response.send(file);
})

//retrive the file information from the folder
app.get("/file", (request,response) =>{
    const fileName = myReaddir();
    response.send(fileName);
})   

app.listen(port,() => console.log(port));