const { Router } = require('express')

const usersRouter = require('./users.router.js' )
const petsRouter = require('./pets.router.js' )
const adoptionsRouter = require('./adoption.router.js' )
const sessionsRouter = require('./sessions.router.js')
const mockUserRouter = require('./mocks.router.js')

const router = Router()

router.use('/api/users',usersRouter) 
router.use('/api/pets',petsRouter) 
router.use('/api/adoptions',adoptionsRouter) 
router.use('/api/sessions',sessionsRouter) 
router.use('/api/mocks', mockUserRouter)

module.exports = router