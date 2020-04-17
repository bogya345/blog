var express = require('express');
var router = express.Router();

const posts = [
    {
        title : 'Hello World',
        text : 'lorem 1'
    },
    {
        title : 'Hello World2',
        text : 'lorem 2'
    },
    {
        title : 'Hello World3',
        text : 'lorem 3'
    },
];

router.get('/posts', function(req, res) {
    return res.send(posts);
});

router.get('/posts/:id', function(req, res) {
    let id = req.params.id;
    return res.send(posts[id]);
});

router.post('/posts', function(req, res) {
    const data = req.body;
    console.log(data);
    posts.push(data);
    return res.send(posts);
});

module.exports = router;