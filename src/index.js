import { soal1 } from './soal1'
import { soal2 } from './soal2'
import chalk from 'chalk'

const log = console.log

const executeSoal1 = () => {
  // const input = [ 1, 2, 3, 5, 4 ]
  const input = [ 5, 6, 1, 2, 3 ]
  const treshold = 4
  const result = soal1(input, treshold)

  log(chalk.bgRed.black.bold.dim(' SOAL 1 '))
  log(chalk.yellow('Array: ', input))
  log(chalk.yellow('Treshold: ', treshold))
  log(chalk.white('Result: ', result))
}

const executeSoal2 = () => {
  // const input = [ 7, 5, 5, 5, 4, 4, 4, 3, 2, 2 ]
  const input = [ 40, 40, 30, 40, 20, 50 ]
  const result = soal2(input)

  log(chalk.bgRed.black.bold.dim(' SOAL 2 '))
  log(chalk.yellow('Array: ', input))
  log(chalk.white('Result: ', result))
}

executeSoal1()
executeSoal2()