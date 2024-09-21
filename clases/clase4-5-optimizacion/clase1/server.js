const cluster = require('node:cluster')
const { cpus } = require('node:os')
const { appListen } = require("./src")
const { logger } = require('./src/utils/loggers')

const numeroDeProcesadores = cpus().length
logger.info(numeroDeProcesadores)

// logger.info(cluster.isPrimary)

if (cluster.isPrimary) {
    logger.info('proceso primario, generando un proceso trabajador')
    for (let i = 0; i < numeroDeProcesadores; i++) {
        cluster.fork()       
    }
    cluster.on('message', worker =>   {
        logger.info(`mensaje recibido de el worker ${worker.process.pid}`)
    })
}else{
    logger.info('El ser un proceso forkeado, no cuento como primario, por lo tanto isPrimary = false, soy un worker')
    logger.info(`soy un proceso hijo con el id ${process.pid}`)
    appListen()
}



