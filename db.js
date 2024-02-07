const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://devisrisaicharan2:9491303100@test.rwzlrgc.mongodb.net/HashBii');

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    totalContacts : Number,
    contacts : {
        A : [
            {
                name : String,
                phone : Number,
                email : String
            }
        ],
        B : [
            {
                name : String,
                phone : Number,
                email : String
            }
        ],
        C : [
            {
                name: String,
                phone: Number,
                email: String,
            },
        ],
        D : [
            {
                name: String,
                phone: Number,
                email: String,
            },
        ],
        E : [
            {
                name: String,
                phone: Number,
                email: String,
            },
        ],
        F : [
            {
                name: String,
                phone: Number,
                email: String,
            },
        ],
        G : [
            {
                name: String,
                phone: Number,
                email: String,
            },
        ],
        H : [
            {
                name: String,
                phone: Number,
                email: String,
            },
        ],
        I : [
            {
                name: String,
                phone: Number,
                email: String,
            },
        ],
        J : [
            {
                name: String,
                phone: Number,
                email: String,
            },
        ],
        K : [
            {
                name: String,
                phone: Number,
                email: String,
            },
        ],
        L : [
            {
                name: String,
                phone: Number,
                email: String,
            },
        ],
        M : [
            {
                name: String,
                phone: Number,
                email: String,
            },
        ],
        N : [
            {
                name: String,
                phone: Number,
                email: String,
            },
        ],
        O : [
            {
                name: String,
                phone: Number,
                email: String,
            },
        ],
        P : [
            {
                name: String,
                phone: Number,
                email: String,
            },
        ],
        Q : [
            {
                name: String,
                phone: Number,
                email: String,
            },
        ],
        R : [
            {
                name: String,
                phone: Number,
                email: String,
            },
        ],
        S : [
            {
                name: String,
                phone: Number,
                email: String,
            },
        ],
        T : [
            {
                name: String,
                phone: Number,
                email: String,
            },
        ],
        U : [
            {
                name: String,
                phone: Number,
                email: String,
            },
        ],
        V : [
            {
                name: String,
                phone: Number,
                email: String,
            },
        ],
        W : [
            {
                name: String,
                phone: Number,
                email: String,
            },
        ],
        X : [
            {
                name: String,
                phone: Number,
                email: String,
            },
        ],
        Y : [
            {
                name: String,
                phone: Number,
                email: String,
            },
        ],
        Z : [
            {
                name: String,
                phone: Number,
                email: String,
            },
        ]
    },
    recent : [{
        name : String,
        phone : Number,
        email : String
    }]
})

const User = mongoose.model("User", UserSchema);

module.exports = {
    User
}