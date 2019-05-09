const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mern-tasks';

mongoose.connect(URI,{useNewUrlParser: true} )
    .then(db => console.log('DB is connected'))
    .catch(err => console.err(err));

module.exports = mongoose;