const connection = require('../database/connection');
const { index } = require('./PostsController');

module.exports = {
    async create(req, res) {
        try {
            const user = await connection.users.create(req.body)
            res.json(user)
        } catch (err) {
            console.log(err)
            return res.json({ error: err.errors[0].message })
        };
    },
    async index(req, res){
        try{
            const users =  await connection.users.findAll()
            res.json(users)
        }catch(error){
            console.log(err)
            return res.json({ error: err.errors[0].message })
        }
    }
}