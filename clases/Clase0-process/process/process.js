// console.log(process.cwd())
// console.log(process.pid)
// console.log(process.memoryUsage())
// console.log(process.version)
// console.log(process.env)


// argumentos
// node process.js 1 2 3 
// console.log(process.argv)

process.on('exit', code => {
    console.log('Este cód se ejecuta antes de terminar o sali del proceso', code)
})

process.on('uncaughtException', exceptions => {
    console.log('Este cód se ejecuta cuando encuentra un erro no controlado', exceptions)
})
console.log('Cualquier otro cód')
consol.log

