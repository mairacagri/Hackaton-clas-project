const comments = []

function addComment(req, res) {
    const { comment } = req.body;
    comments.push(comment);
    res.json(comment);
}

function getAllComments(req, res) {
    if (comments.length === 0 ) {
        res.status(404).send('No comments found');
    }
    res.json(comments);
}

module.exports = {
    addComment,
    getAllComments
}