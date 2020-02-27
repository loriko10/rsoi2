const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.post('/create', controllers.createQuestion);
router.post('/delete/:id', controllers.deleteQuestion);
router.post('/delete/user/:id', controllers.deleteQuestionByUser);
router.post('/get', controllers.getQuestionByParam);
router.get('/all', controllers.allQuestion);

module.exports = router;
