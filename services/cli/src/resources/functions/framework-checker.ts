import * as fs from 'fs';
import * as path from 'path';

export const frameworkChecker = () => {
    const cwd = process.cwd();

    if(fs.existsSync(path.join(cwd, 'package.json'))){
        const packageJson = JSON.parse(fs.readFileSync(path.join(cwd, 'package.json'), 'utf-8'));
        if(packageJson.dependencies['next'] || packageJson.dependencies['nextjs'] || packageJson.devDependencies['next'] || packageJson.devDependencies['nextjs']){
            return 'next';
        } else if(packageJson.dependencies['react'] || packageJson.devDependencies['react']){
            return 'react';
        } else if(packageJson.dependencies['vue'] || packageJson.devDependencies['vue']){
            return 'unsupported';
        } else {
            return 'unknown';
        }
    } else {
        return 'unknown';
    }
}

// Function to determine the project type and the target directory
export const getTargetDirectory = () => {
    const cwd = process.cwd();
  
    // Check for Next.js project by looking for specific files
    if (fs.existsSync(path.join(cwd, 'next.config.js')) || fs.existsSync(path.join(cwd, 'next.config.ts')) || fs.existsSync(path.join(cwd, 'next.config.mjs'))) {
      if (fs.existsSync(path.join(cwd, 'app'))) {
        return '';
      } else if (fs.existsSync(path.join(cwd, 'src'))) {
        return 'src';
      } else {
        return '';
      }
    }
  
    // Check for React project by looking for package.json and common React directories
    if (fs.existsSync(path.join(cwd, 'package.json'))) {
      const packageJson = JSON.parse(fs.readFileSync(path.join(cwd, 'package.json'), 'utf8'));
      if (packageJson.dependencies && packageJson.dependencies.react) {
        if (fs.existsSync(path.join(cwd, 'src'))) {
          return 'src';
        } else {
          return '';
        }
      }
    }
  
    return '';
};

export const cssFileTarget = () => {
  const cwd = process.cwd();
  
    // Check for Next.js project by looking for specific files
    if (fs.existsSync(path.join(cwd, 'next.config.js')) || fs.existsSync(path.join(cwd, 'next.config.ts')) || fs.existsSync(path.join(cwd, 'next.config.mjs'))) {
      if (fs.existsSync(path.join(cwd, 'app'))) {
        return 'app';
      } else if (fs.existsSync(path.join(cwd, 'src'))) {
        return 'src';
      } else {
        return '';
      }
    }
  
    // Check for React project by looking for package.json and common React directories
    if (fs.existsSync(path.join(cwd, 'package.json'))) {
      const packageJson = JSON.parse(fs.readFileSync(path.join(cwd, 'package.json'), 'utf8'));
      if (packageJson.dependencies && packageJson.dependencies.react) {
        if (fs.existsSync(path.join(cwd, 'src'))) {
          return 'src';
        } else {
          return '';
        }
      }
    }
  
    return '';
}

export function typescriptChecker(): boolean {
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    return (
      'dependencies' in packageJson &&
      'typescript' in packageJson.dependencies
    ) || (
      'devDependencies' in packageJson &&
      'typescript' in packageJson.devDependencies
    );
  } catch (error) {
    console.error('Error reading package.json:', error);
    return false;
  }
}