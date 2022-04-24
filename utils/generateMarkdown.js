const generateMarkdown = data => {
  return `# ${data.Title}
  

  

  ## Description

  ${data.Description}

  * ${data.motivation}
  
  * ${data.problem}
  

  ## Table of Contents (Optional)

  
  *[Installation](#installation) 

  *[Usage](#usage)  

  *[Credits](#credits)
  
  *[License](#license)



  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  

  ## License

  This project is licensed under ${data.license}

  ## Contributing
  
  ${data.contributors}




  ## Questions
  
  If you have any questions, you can reach me at ${data.email}.
  You can view all of my projects at https://github.com/${data.github}.

  `;

}












// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

module.exports = generateMarkdown;
