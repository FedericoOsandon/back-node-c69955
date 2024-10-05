const express = require('express' )
const mongoose = require('mongoose' )
const cookieParser = require('cookie-parser' )
const appRouter = require('./routes/index.js')


const cors = require('cors')
// importaciones de swagger 
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUiExpress = require('swagger-ui-express')
const { swaggerOptions } = require('./utils/swagger.js')

const app = express() 
const PORT = process.env.PORT||8080 
const connection = mongoose.connect(`mongodb://127.0.0.1:27017/c69955`)

app.use(express.json())
app.use(cookieParser())
app.use(cors())



const specs = swaggerJsDoc(swaggerOptions)
app.use('/apidocs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs))

/* These lines of code are setting up routes in your Express application. */
app.use(appRouter)

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
