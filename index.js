const fs = require('fs');
const generatePage = require('./src/page-template.js');


const profileDataArgs = process.argv.slice(2);
const [projectTitle, github] = profileDataArgs;



// TODO: Include packages needed for this application

fs.writeFile('./index.html', generatePage(projectTitle, github), err =>  {
    if (err) throw err;

    console.log('ReadMe complete! Check out index.html')
})


// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();


