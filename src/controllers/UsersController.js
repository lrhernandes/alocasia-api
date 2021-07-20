
const database = require('../../database.json');

module.exports = {
    index(req, res){
        res.send(database.users)
    },

    consult(req, res) {
        const id = req.params.id
        database.users.map((user) => {
            if( user.id == id){
                res.send(user)
            }
        })
    },
}