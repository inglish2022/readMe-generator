const generateMarkdown = data => {
  return `# ${data.title}
  ![Github license]

  ## Description
  Provide a short description explaining the what, why, and how of your of your project.  Use the following questions as a guide:

  * What was your motivation?
  * Why did you build this project?
  * What problem does it solve?
  * What did you learn

  ## Table of Contents (Optional)

  If your README is long, add a table of contents to make it easy for users

  *[Installation](#installation)
  *[Usage](#usage)
  *[Credits](#credits)
  *[License](#license)



  ## Installation

  What are the steps to install your project?

  ## Usage

  Provide instructions and exaples for use

  ## License


  ## Contributing


  ## Tests

  ## Questions
  

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
