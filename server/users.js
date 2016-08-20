const Router = require('express').Router;

module.exports = () => {
    const router = new Router();

    router.get('/:id', (req, res) => {
        res.send(require('./users.dummy.json').reduce((acc, i) => {
            return i._id === req.params.id ? i : acc; 
        }, {}));
    });

    return router;
}
