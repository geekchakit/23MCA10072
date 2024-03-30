const {Router}= require('express');

const router = Router();

const {getTopProduct} = require('../controler/Controllers');

const {getSpecifiedProduct} = require('../controler/Controllers');

router.get('/topproduct',getTopProduct);

router.get('/specifiedproduct',getSpecifiedProduct);

module.exports = router;