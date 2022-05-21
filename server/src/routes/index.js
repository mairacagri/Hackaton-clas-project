const express = require('express');
const { getAllComments, addComment } = require('./resolvers/comments');
const homePage = require('./resolvers/homePage');
const { getNextQuestion, checkAnswer } = require('./resolvers/quiz');
const routeNotFound = require('./resolvers/routeNotFound');

const router = express.Router();

router.get('/', homePage)
    .get('/api/v1/', homePage)
    .get('/api/v1/getNextQuestion', getNextQuestion)
    .get('/api/v1/checkAnswer/:id/:answer', checkAnswer)
    .get('/api/v1/comments', getAllComments)
    .post('/api/v1/comments', addComment)
    .get('*', routeNotFound)

module.exports = router;