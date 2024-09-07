const { Router } = require('express')
const {faker}    = require('@faker-js/faker')

const router = Router()

const generateProducts = () => {
    return {
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        departament: faker.commerce.department(),
        stock:       parseInt(faker.string.numeric()),
        description: faker.commerce.productDescription(),
        id: faker.database.mongodbObjectId(),
        thumbnail: faker.image.url()
    }
}

const generateUser = () => {
    let numeroOfProducts = parseInt(faker.string.numeric(1, {bannedDigits: ['0']})) // 1-9
    let products = []
    for (let i = 0; i < numeroOfProducts; i++) {
        products.push(generateProducts())        
    }

    return {
        first_name: faker.person.firstName(),
        last_name:  faker.person.lastName(),
        sex:        faker.person.sex(),
        birthDate:  faker.date.birthdate(),
        phone:      faker.phone.number(),
        imgae:      faker.image.avatar(),
        id:         faker.database.mongodbObjectId(),
        email:      faker.internet.email(),
        products     
    }
}

router.get('/users', (req, res) => {
    let users = []
    for (let i = 0; i < 10; i++) {
        users.push(generateUser())        
    }
    res.send({status: 'success', data: users})
})


app.get('/compleja', (req, res) => {
    // const result = compleja()
    const child = fork('./src/processChild.js')
    child.send('inicia el proceso de calculo')
    child.on('message', result => {
        res.send(`El resultado de la operación es ${result}`)
        
    })

})
app.get('/simple', (req, res) => {
    res.send('operación simple')
})

module.exports = router