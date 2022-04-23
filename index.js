const inquirer = require('inquirer');
const fs = require('fs');

const generatePage = require('./utils/generateMarkdown.js');

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
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node'],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please choose at least one!');
                    return false;
                }
            },
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
questions().then(answers => console.log(answers));



// const pageHTML = generatePage(projectTitle, github);




// TODO: Include packages needed for this application

// fs.writeFile('./index.html', generatePage(projectTitle, github), err =>  {
    // if (err) throw err;

    // console.log('ReadMe complete! Check out index.html')
// })


// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();


