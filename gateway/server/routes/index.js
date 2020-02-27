const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.post('/login', controllers.users.login);
router.post('/register', controllers.users.register);
router.get('/all/users', controllers.users.allUsers);
router.get('/all/users/from/:from/to/:to', controllers.users.allUsersFromTo);
router.post('/user/delete/:id', controllers.deleteUser);

router.post('/question/create', controllers.createQuestion);
router.post('/question/delete', controllers.deleteQuestion);
router.get('/all/questions/user/:id', controllers.allUserQuestions);
router.get('/all/questions', controllers.questions.allQuestions);
router.get('/question/:id', controllers.getQuestionAndComments);

router.post('/comment/create', controllers.createComment);
router.post('/comment/delete', controllers.deleteComment);
router.get('/all/comments/user/:id', controllers.allUserComments);

module.exports = router;
