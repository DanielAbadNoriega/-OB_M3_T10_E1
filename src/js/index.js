import chalk from 'chalk';
import { suma, multiplica } from "./modulos/controller.js"

const sum = suma(1, 2);
console.log(chalk.white.bgYellowBright(sum));

const mult = multiplica(4, 5);
console.log(chalk.green(mult));