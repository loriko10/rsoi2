const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.post('/create', controllers.createUser);
router.post('/delete/:id', controllers.deleteUser);
router.post('/get', controllers.getUserByParam);
router.get('/all', controllers.allUsers);
router.get('/all/from/:from/to/:to', controllers.getUsersSlice);

module.exports = router;
