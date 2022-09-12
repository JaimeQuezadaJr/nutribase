const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost/wellness-plus-new';

mongoose.connect(mongoURI)
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database', err));