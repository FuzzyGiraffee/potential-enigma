
// TODO: Include packages needed for this application
const fs = require ('fs')
const inquirer = require('inquirer')

let answer = 
// TODO: Create an array of questions for user input
inquirer
    .prompt([
    {
        // TODO: Bonus: Include table of contents option
        type:'input',   
        name:'title',
        message:'What is the title of your project',
    },
    {
        type:'input',
        name:'description',
        message:`Provide a brief description of your project. Include what your project does, why it does those things, and how it accomplishes those goals.`,
    },
    {
        type:'input',
        name:'installation',
        message:'What are the steps required to install your project? Please include any dependncies',
    }, 
    {
        type:'list',
        name:'lisence',
        message:'What lisence are you using?',
        choices: ['Apache-2.0,', 'BSD-3-Clause', 'BSD-2-Clause', 'GPL', 'LGPL', 'MIT', 'MPL-2.0', 'CDDL-1.0)', 'EPL-2.0']
    },
    {
        type:'input',
        name:'features',
        message:'List the features of your project',
    },
])
.then ((data)) => {
    
    (writeToFile(`${}`))}
   

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`README.md`, data)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
