const { EError } = require("../enums");

function handleError(error, req, res, next){
    console.log(error)
    switch (error.code) {
        case EError.INVALID_TYPE_ERROR:
            res.status(401).send({stauts: 'error', error: error.cause})
            break;
            
        default:
            res.status(500).send({stauts: 'error', error: 'error internal server'})
                
            break;
    }
}

module.exports = {
    handleError
}