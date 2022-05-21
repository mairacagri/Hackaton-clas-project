const _ = require('lodash');

const questions = []

class quizUser{
    _userId = ''
    _questions = []
    constructor(userId) {
        this._userId = userId
        this._questions = questions
    }
    _answers = {}
    
    setAnswer(questionId, answerId) {
        this._answers[questionId] = answerId
    }
    getNextQuestion() {
        let question = _.sample(this._questions)
        this._questions = _.without(this._questions, question)
        return question
    }
    getScore() {
        let score = 0
        for (let questionId in this._answers) {
            let answerId = this._answers[questionId]
            let question = quizService.getQuestion(questionId)
            if (question.correct == answerId) {
                score++
            }
        }
        return score/questions.length
    }
}

module.exports = quizUser