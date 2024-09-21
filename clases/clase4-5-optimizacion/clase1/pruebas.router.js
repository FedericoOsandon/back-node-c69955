const { Router } = require('express')
const compression = require('express-compression')
const { faker } = require('@faker-js/faker')

const router = Router()

router.get('/testuser', (req, res) => {
  const user = {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  }
  res.send(user)
})

router.get('/simple', (req, res)=>{
  let suma = 0
  for (let i = 0; i < 1000000; i++) {
    suma += i    
  }
  res.send({suma})
})


router.get('/compleja', (req, res)=>{
  let suma = 0
  for (let i = 0; i < 5e8; i++) {
    suma += i    
  }
  res.send({suma})
})
// --count (numero de usuarios), --num (cantidad de consultas)
// artillery qick --count 40 --num 50 "http://localhost:8080/pruebas/simple" -o simple.json
// artillery qick --count 40 --num 50 "http://localhost:8080/pruebas/compleja" -o complejo.json



// router.use(compression({
//   brotli: {
//     enabled: true,
//     zlib: {}
//   }
// }))
// router.get('/stringlargo', (req, res) => {
//     let string = 'Hola coders, soy un string ridículamente largo'
//     for (let i = 0; i < 6e5; i++) {
//         string += 'Hola coders, soy un string ridículamente largo'        
//     }
//   res.send(string)
// })



module.exports = router