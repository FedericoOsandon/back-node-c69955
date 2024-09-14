function generateUserErrorInfo(user){
    return `faltan completar campos para que user sea valido
        lista de propiedades requeridas: 
        * first_name: necesita que sea un string, y se recibió ${user.first_name}
        * last_name: necesita que sea un string, y se recibió ${user.last_name}
        * email: necesita que sea un string, y se recibió ${user.email}
    `
}

module.exports = {
    generateUserErrorInfo
}