const passport = require('passport')
exports.googleAuthenticate = async (req,res) =>{
    try {
        res.status(200).send({
            message : "result"
        })
    } catch (error) {
        res.status(500).send({
            message : "Some Internal Error "
        })
        console.log(`Some Internal Error ${error}`)
    }
}