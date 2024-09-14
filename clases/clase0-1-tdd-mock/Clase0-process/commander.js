const { Command } = require('commander')

const program = new Command()

program
    .option('--mode <mode>', 'Modo del entorno de mi app', 'production')
    .parse()

    console.log('options: ', program.opts())
    console.log('programs arg ', program.args)

    