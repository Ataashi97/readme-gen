// TODO: Include packages needed for this application npm i inquirer@8.2.4
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    
            [
                {
                    type: 'input',
                    message: "What's the project title?",
                    name: 'title',
                    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
                },
                {
                    type: 'input',
                    message: "How do you install your app?",
                    name: 'installation',
                    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
                },
                {
                    type: 'input',
                    message: "How do you use your app?",
                    name: 'use',
                    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
                },
                {
                    type: 'input',
                    message: "Instructions to be followed?",
                    name: 'instructions',
                    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
                },
                {
                    type: 'input',
                    message: "Any credits?",
                    name: 'credits',
                    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
                },
                {
                    type: 'list',
                    message: "What licence did you use?",
                    name: 'license',
                    choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
                    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
                },
                {
                    type: 'input',
                    message: 'GitHub username:',
                    name: 'git',
                    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
                },
                {
                    type: 'input',
                    message: 'E-mail',
                    name: 'email',
                    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
                }
            ]

];

// TODO: Create a function to write README file
function createNewFile(fileName, data) {
    fs.writeFile`./${fileName.toLowerCase().split('').join('')}.md`, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Your README has Been generated');
    }
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answer) {
        console.log(answer);
        var fileContent = generateMarkdown(answer);
        createNewFile(fileContent, answer)
    });
 }

// Function call to initialize app
init();

