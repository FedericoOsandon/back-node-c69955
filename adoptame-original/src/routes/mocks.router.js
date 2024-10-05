const { Router } = require('express')
const { faker } = require('@faker-js/faker')
const { createHash } = require('../utils')
const router = Router()


// paramNumeric -> es la cantidad de usuarios generados

const  generateUser = async () => {
    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: await createHash('coder123'),
        role: faker.helpers.arrayElement(['user', 'admin']),
        // role: 'admin',
        pets: []
    }
}

 const generatePets = (numPets) => {
    const pets = [];
    for (let i = 0; i < numPets; i++) {
        const specie = faker.helpers.arrayElement([
            'dog',
            'cat',
            'rabbit',
            'bird',
        ]);
        let name;
        switch (specie) {
            case 'dog':
                name = faker.animal.dog();
                break;
            case 'cat':
                name = faker.animal.cat();
                break;
            case 'rabbit':
                name = faker.animal.rabbit();
                break;
            case 'bird':
                name = faker.animal.bird();
                break;
        }
        const pet = {
            name,
            specie,
            adopted: false,
            owner: null,
        };
        pets.push(pet);
    }
    console.log('Generated pets:', pets);
    return pets;
};

const generateUserMock = async (paramNumeric) => {
    const users = []
    for (let i = 0; i < paramNumeric; i++) {
        const user = generateUser()
        users.push(user)
    }

    return users 
}

router.get('/users', async (req, res) => {
    const users = await generateUserMock(50)
    res.send({status: 'success', data: users})
})

//users y pets son cantidades
/* The `router.post('/generatedata', async (req, res) => { ... })` function is a route handler for a
POST request to the '/generatedata' endpoint. When this endpoint is hit with a POST request, it
expects the request body to contain JSON data with keys 'users' and 'pets'. */
router.post('/generatedata', async (req, res) => {
    const {users, pets} = req.body
    // const users = await generateUserMock(50)
    res.send({status: 'success', data: users})
})

module.exports = router