const express = require('express');
const router = express.Router();

const Profiles = [{profile: "facebook", userid: "user1", queuedPost: 10, ErrorPost: 0}];
const Post =  [
                {id: 1, text: 'dummy post', images: 0, videos: 0},
                {id: 2, text: 'This is a demo post', images: 1, videos: 0, date: '09-05-2018'},
                {id: 3, text: 'Post Demo', images: 2, videos: 0, date: '08-05-2018'},
              ];

router.get('/posts', (req, res) => {
    res.send(JSON.stringify(Post));
});


router.get('/profiles', (req, res) => {
    res.send(JSON.stringify(Profiles));
});



module.exports = router;