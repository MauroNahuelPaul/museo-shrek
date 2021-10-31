var express = require('express');
var router = express.Router();
var users = []
/* GET users listing. 
EJEMPLO DE GET: HACERLO EN POST!!!
*/
router.get('/', function(req, res) {
  res.jsonp(users)
});

router.post('/', function(req, res) {
  users.push(req.body);
  res.status(201).send('Usuario agregado');
});

module.exports = router;
