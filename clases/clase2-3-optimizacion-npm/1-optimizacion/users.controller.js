const { userService } = require("../services")
const { CustomError } = require("../utils/errors/CustomeError")
const { EError } = require("../utils/errors/enums")
const { generateUserErrorInfo } = require("../utils/errors/info")
const { sendEmail } = require("../utils/sendEmail")

class UserController {
    constructor(){
        this.service = userService
    }
    getUsers =  async (req, res) => {
        const users = await this.service.getItems()
        res.send({status: 'success', users})
    }

    getUser = async (req, res) => {
        const { uid } = req.params
        const userFound = await this.service.getItem({_id: uid})
        res.send({status: 'success', payload: userFound})
    }

    createUser = async (req, res, next) => {
        try {
            const { first_name, last_name, email } = req.body
            const user =  {
                first_name,
                last_name, 
                email
            }
            if (!first_name || !last_name || !email) {
                CustomError.createError({
                    name: 'User Create error',
                    cause: generateUserErrorInfo(user),
                    message: 'Error de typo creando el usuario',
                    code: EError.INVALID_TYPE_ERROR
                })
            }

            const result = await this.service.createItems(user)
            const html = `<h1>Bienvenido ${result.first_name} ${result.last_name}</h1>`
            sendEmail({userMail: result.email, subject: `Se a creado correctamente el usuario ${result.email}`, html})
            res.send({status: 'success', data: result})
        } catch (error) {
            next(error)
        }
        
    }

    updateUser =  async (req, res) => {
        res.send('update User')
    }

    deleteUser = async (req, res) => {
        res.send('delete User')
    }
}



module.exports = {
    UserController
}