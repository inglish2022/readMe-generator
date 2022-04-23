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
            message: 'What is your GitHub username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'Title',
            message: 'What is your Project title?'
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Provide a short description of your project.'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)'
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


