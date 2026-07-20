const express = require('express');
const app = express();
const PORT = 3000;

let user = [
    {
        name: 'John Doe',
        email: '1@gmail.com',
        password: '123456'
    },
    {
        name: 'Jane Doe',
        email: '2@gmail.com',
        password: '123456'
    },
    {
        name: 'Jack Doe',
        email: '3@gmail.com',
        password: '123456'
    },
    {
        name: 'Jill Doe',
        email: '4@gmail.com',
        password: '123456'
    }
]

app.get('/about', (req, res)=>{
    res.json(user);
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})