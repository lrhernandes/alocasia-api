
const database = require('../../database.json');

module.exports = {
    index(req, res){
        res.send(database.products)
    },

    consult(req, res) {
        const id = req.params.id
        database.products.map((product) => {
            if( product.id == id){
                res.send(product)
            }
        })
    },
}