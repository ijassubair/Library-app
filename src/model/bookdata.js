const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const schema = mongoose.schema;

const Bookschema = new schema({

    title: String,
    author: String,
    genre: String,
    image: string
});

var bookdata = mongoose.model('bookdata',Bookschema);

module.exports = bookdata;