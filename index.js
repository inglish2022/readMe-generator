// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generatePage = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {

            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'Title',
            message: 'What is your Project title?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Project Title!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Provide a short description of your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a short description of your project!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation for this project?'
        },
        {
            type: 'input',
            name: 'problem',
            message: 'What problem does it solve?'
        },
        {
            type: 'checkbox',
            name: 'list',
            message: 'What kind of license does your project have?',
            choices: ['MIT', 'GNU'],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please choose one!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter steps required to install project');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this app?',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter usuage description!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who contributed to this app?',
            
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub link to your project!');
                    return false;
                }
            },
        },
    ]);
};
// TODO: Create a function to write README file

const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your readMe has been successfully created.');
        }
    })
};




// TODO: Create a function to initialize app
questions().then(answers => {
    return generatePage(answers);
})

    .then(data => {
        return writeFile(data);
    })

    .catch(err => {
        console.log(err)
    })





// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();





// const pageHTML = generatePage(projectTitle, github);
// fs.writeFile('./index.html', generatePage(projectTitle, github), err =>  {
    // if (err) throw err;

    // console.log('ReadMe complete! Check out index.html')
// })








