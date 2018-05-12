const express = require('express');
const router = express.Router();

function date(num) {
    let start = Date.now();
    let end = 0;
    
    switch(num) {

        case 0:
            end = start;       
        break;

        case 1:
            end = start - 86400000;
        break;

        case 2:
            end = start - (86400000 * 2);
        break
    
    }
    const date = new Date(end);
    let dd = date.getDate();
    let mm = date.getMonth() + 1; //January is 0!
    let yyyy = date.getFullYear();
    
    if (dd < 10) {
        dd = '0' + dd;
    }
    
    if (mm < 10) {
        mm = '0' + mm;
    }
    return dd + '/' + mm + '/' + yyyy;
}

const Profiles = [{profile: "facebook", userid: "user1", queuedPost: 10, ErrorPost: 0}];
const Post =  [
                {id: 1, text: 'dummy post', images: 0, videos: 0, date: date(0) },
                {id: 2, text: 'This is a demo post', images: 1, videos: 0, date: date(1) },
                {id: 3, text: 'Post Demo', images: 2, videos: 0, date: date(2) },
              ];

router.get('/posts', (req, res) => {
    res.send(JSON.stringify(Post));
});


router.get('/profiles', (req, res) => {
    res.send(JSON.stringify(Profiles));
});




module.exports = router;