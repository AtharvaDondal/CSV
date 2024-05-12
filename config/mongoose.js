const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017');


const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;
