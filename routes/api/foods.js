var express = require('express');
var router = express.Router();
var foodsCtrl = require('../../controllers/api/foods');

router.use(require('../../config/auth'));
/* GET /api/foods */
router.get('/', foodsCtrl.index);
router.post('/', foodsCtrl.create);
router.delete('/:id', foodsCtrl.delete);
router.put('/:id', foodsCtrl.update);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;