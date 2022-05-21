const _ = require('lodash');
const data = require('../questions-data.json')

class quizUser{
    userId = ''
    questions = []
    constructor(userId) {
        this.userId = userId
        this.questions = data
    }
    answers = {}
    
    setAnswer(questionId, answerId) {
        this.answers[questionId] = answerId
    }
    getNextQuestion() {
        let question = _.sample(this.questions)
        this.questions = _.without(this.questions, question)
        return question
    }
    getScore() {
        let score = 0
        for (let questionId in this.answers) {
            let answerId = this.answers[questionId]
            let question = quizService.getQuestion(questionId)
            if (question.correct == answerId) {
                score++
            }
        }
        return score/questions.length
    }
}

module.exports = quizUser