const express = require('express');
const router = express.Router();


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleString()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleString()
  }
];



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message-board', messages: messages });
});



router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req, res, next) {
  const newName= req.body.name;
  const newMsg= req.body.message;

  messages.push({text: newMsg, user: newName, added: new Date().toLocaleString()});
  res.redirect('/');
})


module.exports = router;