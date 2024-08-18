import readline from 'node:readline'
import ora, { Ora } from 'ora';
import { cssFileTarget, frameworkChecker, getTargetDirectory, typescriptChecker } from '../resources/functions/framework-checker.js';
import fs from "fs";
import { getDirectory } from '../index.js';
import path from 'path';
import { NEXT_JAVASCRIPT_TAILWIND_CONFIG, NEXT_TYPESCRIPT_TAILWIND_CONFIG, REACT_JAVASCRIPT_TAILWIND_CONFIG, REACT_TYPESCRIPT_TAILWIND_CONFIG } from '../templates-code/tailwind-config.js';
import { NEXT__TYPESCRIPT_UI_THEME_CONTEXT } from '../templates-code/context.js';
import { createTailwindConfig } from '../resources/functions/initialize/create-tailwind.js';
import { createContextFile } from '../resources/functions/initialize/createContext.js';
import { createCSSFile } from '../resources/functions/initialize/create-css.js';



export async function initCommand(options: any, command: any) {
    const spinner = ora()
    if (options.tailwind){
        inititalizeTailwindConfig(spinner)
      } else if (options.contexts){
        console.log('Initializing contexts');
      } else if (options.css){
        console.log('Initializing css');
      } else {
        await initializeDefault(spinner);
      }
}


function initializeDefault(spinner:Ora){
  const framework = frameworkChecker();
  if(framework === 'unknown' || framework === 'unsupported'){
    console.log('Unsupported framework. Please make sure you are in a project with a supported framework (React, Next.js)');
    process.exit(1)
  }
  const isUsingTypescript = typescriptChecker();
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(`Initialize twj-ui in your project? (y/n) `, response => {
    if(response === 'y' || response === 'yes' || response === 'Y' || response === 'Yes'){
      
      //INITIALIZE TAILWIND CONFIG
      inititalizeTailwindConfig(spinner)
      //INITIALIZE CONTEXTS
      initializeUIThemeContext(spinner)

      //INITIALIZE CSS
      initializeCSS(spinner)

      rl.close();
      process.exit(0);
    } 
    else {
      console.log('Aborted');
      rl.close();
      spinner.fail('Aborted');
    }    
  });
}

function inititalizeTailwindConfig(spinner:Ora){
  const framework = frameworkChecker();
  if(framework === 'unknown' || framework === 'unsupported'){
    console.log('Unsupported framework. Please make sure you are in a project with a supported framework (React, Next.js)');
    process.exit(1)
  }
  const isUsingTypescript = typescriptChecker();
  try {
    spinner.start();
    spinner.text = 'Initializing tailwind config';
    const filePath = path.join(process.cwd(), isUsingTypescript ? 'tailwind.config.ts' : 'tailwind.config.js');
    
    if (fs.existsSync(filePath)) {
      // File already exists, we'll replace its content
      spinner.text = 'Replacing existing Tailwind config';
      createTailwindConfig(filePath, framework, isUsingTypescript);
    } else {
      // File doesn't exist, we'll create a new one
      spinner.text = 'Creating new Tailwind config';
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      // Write (or overwrite) the file with the new content
      createTailwindConfig(filePath, framework, isUsingTypescript);
    }
    spinner.succeed(`Tailwind config ${fs.existsSync(filePath) ? 'replaced' : 'created'}`);
  } catch (error) {
    spinner.fail('Error initializing Tailwind config');
    console.error(error);
  }
}

function initializeUIThemeContext(spinner:Ora){
  const framework = frameworkChecker();
  if(framework === 'unknown' || framework === 'unsupported'){
    console.log('Unsupported framework. Please make sure you are in a project with a supported framework (React, Next.js)');
    process.exit(1)
  }
  const isUsingTypescript = typescriptChecker();

  try {
    spinner.start();
    spinner.text = 'Initializing contexts';
      const targetDir = getTargetDirectory();
      if(targetDir){
        const contextPath = path.join(process.cwd(), targetDir, 'contexts');
        try {
          if (!fs.existsSync(contextPath)){
            fs.mkdirSync(contextPath, { recursive: true });
          }
          if(fs.existsSync(path.join(contextPath, 'ui-theme.ts'))){
              spinner.text = 'Replacing existing context';
              createContextFile(framework, contextPath, isUsingTypescript);
          } else {
            spinner.text = 'Creating new context';
            createContextFile(framework, contextPath, isUsingTypescript);
          }
          
          spinner.succeed(`Contexts ${fs.existsSync(contextPath) ? 'replaced' : 'created'}`);
        } catch (error) {
          spinner.fail('Error initializing contexts');
          console.log(error);
        }
      } else {
        spinner.fail('Error initializing UI Theme Context');
      }
  } catch (error) {
    spinner.fail('Error initializing UI Theme Context');
    console.error(error);
  }
}

function initializeCSS(spinner:Ora){
  const framework = frameworkChecker();
  if(framework === 'unknown' || framework === 'unsupported'){
    console.log('Unsupported framework. Please make sure you are in a project with a supported framework (React, Next.js)');
    process.exit(1)
  }
  try {
    spinner.start();
    spinner.text = 'Initializing css';
    const targetDir = cssFileTarget();
    const filePath = path.join(process.cwd(), targetDir, 'ui-theme.css');
    
    if (fs.existsSync(filePath)) {
      // File already exists, we'll replace its content
      spinner.text = 'Replacing existing CSS File';
      createCSSFile(filePath);
    } else {
      // File doesn't exist, we'll create a new one
      spinner.text = 'Creating new Tailwind config';
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      // Write (or overwrite) the file with the new content
      createCSSFile(filePath);
    }
    spinner.succeed(`CSS File ${fs.existsSync(filePath) ? 'replaced' : 'created'}`);
  } catch (error) {
    spinner.fail('Error initializing CSS File');
    console.error(error);
  }
}