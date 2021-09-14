const express = require('express');
const router = express.Router();

const UsersController = require('./controllers/UsersController')

router.get('/', (req, res) => {
    res.send('Rota inicial')
})

router.post('/users.create', UsersController.create)
router.get('/users.list', UsersController.index)


module.exports = router;