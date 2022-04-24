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
// TODO: Create a function to write README file

const writeToFile = data => {
    fs.writeToFile('README.md', data, err =>  {
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

.then(data =>  {
    return writeToFile(data);
})

.catch(err =>  {
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








