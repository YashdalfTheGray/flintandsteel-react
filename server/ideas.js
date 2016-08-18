const Router = require('express').Router;

module.exports = () => {
    const router = new Router();

    router.get('/', (req, res) => {
        res.json(require('./ideas.dummy.json'));
    });

    return router;
}
