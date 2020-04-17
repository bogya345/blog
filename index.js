const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Cat = mongoose.model('Cat', { name : String });

const kitty = new Cat({name : 'CatName1'});
kitty.save().then(()=>console.log('meow'));

// const express = require('express');

// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.urlencoded({ extended : true }));
// app.use(bodyParser.json());

// const posts = [
//     {
//         title : 'Hello World',
//         text : 'lorem 1'
//     },
//     {
//         title : 'Hello World2',
//         text : 'lorem 2'
//     },
//     {
//         title : 'Hello World3',
//         text : 'lorem 3'
//     },
// ];

// app.get('/posts', function(req, res) {
//     return res.send(posts);
// });

// app.get('/posts/:id', function(req, res) {
//     let id = req.params.id;
//     return res.send(posts[id]);
// });

// app.post('/posts', function(req, res) {
//     const data = req.body;
//     console.log(data);
//     posts.push(data);
//     return res.send(posts);
// });


// app.listen(3333, function(){
//     console.log('Server is running');
// })