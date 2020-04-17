const mongoose = require('mongoose');
mongoose.connect('mongodbservice://localhost:27017/test');

const Cat = mongoose.model('Cat', { name : String });

const kitty = new Cat({name : 'CatName1'});
kitty.save().then(()=>console.log('meow'));

// const express = require('express');

// const bodyParser = require('body-parser');

// const app = express();

// var indexRouter = require('./routes/index');

// app.use(bodyParser.urlencoded({ extended : true }));
// app.use(bodyParser.json());

// app.use('/', indexRouter);

// app.listen(3333, function(){
//     console.log('Server is running');
// });

// module.exports = app;