var express = require('express');
var router = express.Router();

router.get('/publickey', function (req, res) {

  res.status(200).send({msg:"hola"});
});

module.exports = router;