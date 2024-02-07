const express = require('express');
const mongoose = require('mongoose');
const { User } = require('./db');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) =>{
    let username = req.query.username;

    let userExist = await User.findOne({username: username});

    if(userExist){
        let response = await User.findOne(userExist._id);
        // let data = await response.json();
        return res.json({
            contacts : response.contacts
        });
    }
    else{
        res.json({
            msg : "Error"
        })
    }
});

app.post('/create', async (req, res) =>{
    //create a contact in db
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let username = req.body.username;

    let firstLetter = name[0].toUpperCase();
    let userExist = await User.findOne({username});

    if(userExist){
        let response = await User.findOneAndUpdate({username},  {$push:{ [`contacts.${firstLetter}`] : {name, email, phone}}}, {new : true});
        
        res.json({
            msg : "added"
        })     
    }
    else{
        res.json({
            msg : "Error"
        })
    }

});

app.delete('/delete', async (req, res) => {
    try {
        let username = "Charan"; 
        let contactName = req.body.name;

        let user = await User.findOne({ username });

        if (!user) {
            return res.json({ msg: "User not found" });
        }

        let firstLetter = contactName[0].toUpperCase();

        if (!user.contacts[firstLetter]) {
            return res.json({ msg: "Contact not found" });
        }

       
        user.contacts[firstLetter] = user.contacts[firstLetter].filter(contact =>
            contact.name !== contactName
        );

        await user.save();

        return res.json({ msg: "Contact deleted successfully" });
    } catch (error) {
        console.error('Error deleting contact:', error);
        return res.json({ msg: 'Internal server error' });
    }
});


app.use((err, req, res, next) =>{
    res.json({
        msg : err
    })
});

app.listen(3000);