// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const markdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    { 
        type:'input',
        message: 'What is the title of the project?',
        name: 'title'
    }, 
    {
        type:'input',
        message: 'Description',
        name: 'description'
    }, 
    {
        type:'input',
        message: 'Installation: what are the steps required to install your project?',
        name: 'installation'
    },
    {
        type:'input',
        message: 'Provide instructions or examples for use',
        name: 'usage'
    },
    {
        type:'list',
        message: 'Select your license',
        choices: ['MIT', 'Apache', 'Mozilla'],
        name: 'license'
    },
    {
        type:'input',
        message: 'List any contributers, 3rd party assets, tutorials',
        name: 'contributing'
    },
    {
        type:'input',
        message: 'Tests for your application, and how to run them',
        name: 'tests'
    },
    {
        type:'input',
        message: 'what is your email?',
        name: 'email'

    },
    {
        type:'input',
        message: 'what is your GitHub profile?',
        name: 'github'
        
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((data) => {
console.log(data)

console.log(markdown.generateMarkdown(data))
return(data)
    })
}

// Function call to initialize app
init();
