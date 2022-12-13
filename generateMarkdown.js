const fs = require('fs');
const inquirer = require('inquirer');
const index = require('./index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'Mit') {
    badge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
  } else if (license === 'Apache 2.0') {
    badge = '![License](https://img.shields.io/badge/License-Apache%101.0-blue.svg)'
  } else if (license === 'GRL v3.0') {
    badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else {
    badge = ''
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenceLink = '';
  if (license === 'MIT') {
    licenceLink = 'https://choosealicense.com/license.mit/'
  } else if (license === 'Apache 2.0') {
    licenceLink = 'http://www.apache.org.licenses/LICENSE-2.0'
  } else if (license === 'GPL v3.0') {
    licenceLink = 'https://www.gnu.org/licenses'
  } else {
    licenceLink = ''
  }
  return licenceLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSelection = ''
  if (license === 'None') {
    licenseSelection = ''
  } else {
    licenseSelection = `License: ${license} `
  }
  return licenseSelection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## ${renderLicenseBadge(data.license)} ${renderLicenseSection(data.license)}
  ### ${renderLicenseLink(data.license)}
  ## Table of Contents:
  ### * [License](#license)
  ### * [Installations](#installation)
  ### * [Use](#use)
# Installation
${installation}
## Use
${use}
## Credits
${credits}
## License
${licence}
### Instructions
${instructions}

#Contact
* GitHub :${git}
* E-mail :${email}`;}

module.exports = generateMarkdown;
