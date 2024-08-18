#!/usr/bin/env node

// src/index.ts

import { Command } from 'commander';

import figlet from 'figlet';

import { initCommand } from './commands/init.js';

import path from 'path';
import { fileURLToPath } from 'url';




const program = new Command();



const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

export function getDirectory() {
  return __dirname;
}



// Check if --help is in the command line arguments
const isHelpCommand = process.argv.includes('--help') || process.argv.includes('-h');

if (isHelpCommand) {
  console.log(figlet.textSync("TWJ UI CLI"));
}


program
  .version('1.0.0')
  .description('A CLI tool for initializing a twj-ui in your project')

program
  .command('init')
  .description('Initialize a twj-ui in your project')
  .option('-tw, --tailwind', 'Initialize only tailwind.config file')
  .option('-c, --contexts', 'Initialize only contexts')
  .option('-a, --all', 'Initialize twj-ui')
  .option('--css', 'Initialize only css')
  .action((options,command) => initCommand(options, command));

program
  .command('generate')
  .description('This command generates a new component from twj-ui in your project')
  .argument('<componentName>', 'The name of the component to generate')
  .action((componentName) => {
    if(!componentName) {
      // If the user doesn't provide a component name, show an error message
      console.error('Please provide a component name');
      process.exit(1);
    }
    console.log(`Generating a new component: ${componentName}`);
});

// Parse the command line arguments
try {
  program.parse(process.argv);
} catch (error) {
  console.error('An error occurred:', error);
}