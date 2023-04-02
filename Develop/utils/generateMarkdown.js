const { makeBadge, ValidationError } = require('badge-maker')
const fs = require('fs')



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  // console.log(license)
  // const format = {
  //   label: 'license',
  //   message: license,
  //   color: 'green',
  //   labelColor: '#555'
  // }
  
  // const svg = makeBadge(format)
  // console.log(svg) // <svg...

  // return svg
};

 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // fs.writeFile(`badge.svg`, renderLicenseBadge(data.license),err => 
  // err ? console.log(err) : console.log('Success!'))
  // renderLicenseBadge();
  // renderLicenseLink();
  // renderLicenseSection();
  // generateMarkdown();

  return `![badge](./badge.svg)
# ${data.title}

## Description
${data.description}


## Contributors
${data.contributors}


## Usage
${data.usage}

## Installation
${data.installation}

 ` 
}

module.exports = generateMarkdown;



