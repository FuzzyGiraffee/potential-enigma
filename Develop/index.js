
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const  generateMarkdown  = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions =
    [
        // TODO: Table of Contents, 
        {
            title:'input',
            name:'constributors',
            message: 'List contributors '
        },
        {
            title:'input',
            name:'usage',
            message: 'What is the intended use of your project?'
        },

        {
            
            type: 'input',
            name: 'title',
            message: 'What is the title of your project',
        },
        {
            type: 'input',
            name: 'description',
            message: `Provide a brief description of your project. Include what your project does, why it does those things, and how it accomplishes those goals.`,
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Please include any dependncies',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license are you using?',
            // questions[5].choices
            // questions.find((value) => value.name == "licesce") 
            choices: ['Apache-2.0,', 'BSD-3-Clause', 'BSD-2-Clause', 'GPL', 'LGPL', 'MIT', 'MPL-2.0', 'CDDL-1.0)', 'EPL-2.0']
        },
    ];


// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    
    let file = (fileName)
    console.log(fileName)
    answers = generateMarkdown(answers)
    fs.writeFile(file, answers, (err) =>
        err ? console.log(err) : console.log('Success!'));
        
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            //TODO  convert test so that it selects the actual
            let test = `${answers.title}.md`
            let test2 = answers;
            // console.log(answers)
            writeToFile(test, test2);

           
           let badge = JSON.stringify(answers.license)
            badge = JSON.parse(badge)
        //    renderLicenseBadge(answers.license)
        }
        )
};

// Function call to initialize app
init(
);



// // fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );




