const { request, response } = require('express')
const { logger } = require("../utils/logger");

exports.addLogger = (req=request, res=response, next) => {
    req.logger = logger
    req.logger.info(`${req.method} at ${req.url} - ${Date().toLocaleString()}`)
    next()
}