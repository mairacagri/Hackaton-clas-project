const quizUser = require('../../utils/quizUser');
const _ = require('lodash');

const users = {};

function getNextQuestion(req, res) {
    let userId = req.headers.userId;
    if (!userId) {
        userId = _.uniqueId("user_");
        users[userId] = new quizUser(userId)
    }
    res.set('userId', userId);
    let question = users[userId].getNextQuestion();
    res.json({
        question: question.question,
        answers: question.answers,
        id: question.id
    });
}

function checkAnswer(req, res) {
    let userId = req.headers.userId;
    let questionId = req.params.id;
    let answerId = req.params.answer;
    users[userId].setAnswer(questionId, answerId);
    if (users[userId].questions.length === 0) {
        res.json({
            score: users[userId].getScore()
        });
    }
    const correctAnswer = questions.find(({id}) => id === questionId).correct
    res.json({
        userAnswer: answerId,
        correctAnswer,
        correct: correctAnswer === answerId
    });
}

module.exports = {
    getNextQuestion,
    checkAnswer
}