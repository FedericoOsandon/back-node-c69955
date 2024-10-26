const express = require('express' )
const mongoose = require('mongoose' )
const cookieParser = require('cookie-parser' )
const appRouter = require('./routes/index.js')


const cors = require('cors')
const { addLogger } = require('./middlewares/logger.middleware.js')
const { logger } = require('./utils/logger.js')
const { swaggerOptions } = require('./utils/swaggerDocs.js')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUiExpress = require('swagger-ui-express')
// importaciones de swagger 

const app = express() 
const PORT = process.env.PORT||8080 
const connection = mongoose.connect(`mongodb://127.0.0.1:27017/c69955`)

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(addLogger)

const specs = swaggerJsDoc(swaggerOptions)

app.use('/apidocs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs))
/* These lines of code are setting up routes in your Express application. */
app.use(appRouter)

app.listen(PORT,()=>logger.info(`Listening on ${PORT}`))
