const express = require('express');
const router = express.Router();

const ProductsController = require('./controllers/ProductsController');
const UsersController = require('./controllers/UsersController')

router.get('/', (req, res) => {
    res.send('Rota inicial')
})

router.get('/users', UsersController.index)
router.get('/users/:id', UsersController.consult)

router.get('/products', ProductsController.index)
router.get('/products/:id', ProductsController.consult)


module.exports = router;