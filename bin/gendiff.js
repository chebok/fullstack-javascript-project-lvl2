#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/index.js';

const command = (filepath1, filepath2) => {
  const diffToPrint = (genDiff(filepath1, filepath2, program.opts().format));
  console.log(diffToPrint);
} 

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.8.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action(command);
program.parse();
