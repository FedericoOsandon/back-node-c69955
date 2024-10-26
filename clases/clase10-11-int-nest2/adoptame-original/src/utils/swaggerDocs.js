const { dirname } = require('path')
exports.swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Documentación de app para adoptar mascotas',
            description: 'esta es un descripción de la documentación de adoptame'
        }
    },
    apis: [`${dirname(__dirname)}/docs/**/*.yaml`]
}