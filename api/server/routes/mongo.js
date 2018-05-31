const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

console.log('mongodb://' + process.env.db_user + ':' + process.env.db_pass + '@' + process.env.db_url + '/' + process.env.db_name + '?' + process.env.db_role);

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://' + process.env.db_user + ':' + process.env.db_pass + '@' + process.env.db_url + '/' + process.env.db_name + '?' + process.env.db_role, (err, db) => {
        if (err) return console.log(err);
        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// Add user
router.get('/adduser', (req, res) => {
    connection((db) => {
        db.collection('users')
            .insert({"name":"John Doe"}).then(() => {
                db.collection('users')
                    .find()
                    .toArray()
                    .then((users) => {
                        response.data = users;
                        res.json(response);
                    })
                    .catch((err) => {
                        sendError(err, res);
                    });
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;
