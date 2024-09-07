const { Command } = require('commander')

const program = new Command()

program
    .option('-d', 'VAriable para debug', false)
    .option('-p <port>', 'Variable del puerto de mi app', 8000 )
    .option('--mode <mode>', 'Modo del entorno de mi app', 'production')
    .option('-l, --letters [letter...]', 'specify letters')
    .parse()

    console.log('options: ', program.opts())
    console.log('programs arg ', program.args)