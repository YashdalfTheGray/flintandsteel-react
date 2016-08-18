const Router = require('express').Router;

module.exports = () => {
    const router = new Router();

    router.get('/', (req, res) => {
        res.json(require('./ideas.dummy.json'));
    });

    router.get('/:id', (req, res) => {
        let ideaToSend = require('./ideas.dummy.json').reduce((acc, i) => {
            return i._id === req.params.id ? i : acc;
        }, {});
        res.json(ideaToSend);
    });

    return router;
}
