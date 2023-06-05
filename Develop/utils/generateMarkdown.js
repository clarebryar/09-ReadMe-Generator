// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 const badges = {
  MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0))',
  Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 
  None: ''
 }
 return badges[license]
 

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = {
    MIT: `(https://opensource.org/licenses/MIT)`,
    Mozilla: `(https://opensource.org/licenses/MPL-2.0)`,
    Apache: `(https://opensource.org/licenses/Apache-2.0)`,
    None: ''
   };
   return links[license]
     

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license == 'None'){

return ''
}
else {   
return `This application is covered under the [${license}]${renderLicenseLink(license)} license.`
}

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  ## Table of Contents
   - [Description](#Description)
   - [Installation](#Installation)
   - [Usage](#Usage)
   - [License](#License)
   - [Contributing](#Contributing)
   - [Tests](#Tests)

  ## Description 
  ${data.description}
   
  ## Installation 
  ${data.installation}
  
  ## Usage 
  ${data.usage}
  
  ## License 
 
  ${renderLicenseSection(data.license)}
  
  ## Contributing 
  ${data.contributing}
  
  ## Tests 
  ${data.tests}
  
  ## Questions 
  Any questions can be directed to my contact information below: 

  Email: ${data.email}

  [Github](https://github.com/${data.github})
  

`;
}

module.exports = generateMarkdown;
