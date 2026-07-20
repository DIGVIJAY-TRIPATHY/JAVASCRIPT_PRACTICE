const express = require('express')
const users = require('../models/users')
const app = express();

app.post('/', async(req, res)=>{
    try{
        //postman will working here to create a new user
        const newUser = await users.create(req.body);
        res.status(201).json(newUser);
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

app.get('/', async(req, res)=>{
    try{
        //postman will working here to get all users
        const allUsers = await users.find();
        res.status(200).json(allUsers);
    }catch(err){
        res.status(400).json({message: err.message})
    }
});

app.get('/:id', async(req, res)=>{
    try{
        //postman will working here to get a user by id
        const user = await users.findById(req.params.id);
        if(user){
            res.status(200).json(user);
        }else{
            res.status(404).json({message: "User not found"});
        }
    }catch(err){
        res.status(400).json({message: err.message})
    }
});

app.put('/:id', async(req, res)=>{
    try{
        //postman will working here to update a user by id
        const updatedUser = await users.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(updatedUser){
            res.status(200).json(updatedUser);
        }else{
            res.status(404).json({message: "User not found"});
        }
    }catch(err){
        res.status(400).json({message: err.message})
    }
});

app.delete('/:id', async(req, res)=>{
    try{
        //postman will working here to delete a user by id
        const deletedUser = await users.findByIdAndDelete(req.params.id);
        if(deletedUser){
            res.status(200).json({message: "User deleted successfully"});
        }else{
            res.status(404).json({message: "User not found"});
        }
    }catch(err){
        res.status(400).json({message: err.message})
    }
});


module.exports = app;