const { connect } = require('mongoose')
const dotenv = require('dotenv')
const { program } = require('../utils/commander')

console.log(program.opts())

const { mode } = program.opts()

dotenv.config({
    path: mode === 'development' ? './.env.development' : './.env.production'
})

const objectConfig = {
    PORT: process.env.PORT,
    mongo_url: process.env.MONGO_URL

}



const connectDB = () => {
    // mongodb+srv://Federico:password@coderexample.hjzrdtr.mongodb.net/c53145?retryWrites=true&w=majority
    connect(process.env.MONGO_URL)
    console.log('DB conected')
} 
module.exports = {
    objectConfig,
    connectDB
}

