const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.post('/create', controllers.createComment);
router.post('/delete/:id', controllers.deleteComment);
router.post('/delete/question/:id', controllers.deleteCommentByQuestionsId);
router.post('/delete/user/:id', controllers.deleteCommentByUserId);
router.post('/get', controllers.getCommentByParam);

module.exports = router;
