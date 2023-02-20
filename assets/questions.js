const inquirer = require('inquirer');
const generatreadme = require('./generate.js')
const fs = require('fs')



inquirer
    .prompt([
        // Title 
        {
            type: 'input',
            message: 'Write title for README',
            name: 'title',
        },
        // Description
        {
            type: 'input',
            message: 'How would you describe your project?',
            name: 'description'
        },
        // Usage
        {
            type: 'input',
            message: 'How would a developer be able to use the project?',
            name: 'usage',
        },
        // License
        {
            type: 'list',
            message: 'Please chooce license from list',
            default: 'Mit License',
            choices: ['Mit License', 'Apache license 2.0', 'Boost Software License 1.0', 'Microsoft Public License', 'Mozilla Public License 2.0'],
            name: 'license',
        },
        // Contributors
        {
            type: 'input',
            message: 'Please add any contributors',
            name: 'Collaboration',
        },
        // Test
        {
            type: 'input',
            message: 'How would I test your application?',
            name: 'Test',
        },
        // Github
        {
            type: 'input',
            message: 'Please enter your Github name along with a url',
            name: 'Github',
        },
        // Email address
        {
            type: 'email',
            message: 'Please enter your email?',
            name: 'email',
        },
    ])
    .then((response) => {
        // To check if console log works

        fs.writeFile('README File', `
        # ${response.title}
        
        ## Description
        ${response.description}
        
        ## Table of contents
        
        ## Usage
        ${response.usage}
        
        ## License
        Copyright (c) 
        The license is ${response.license}
        
        ## Contributors
        ${response.Collaboration}
        
        ## Tests
        ${response.Test}
        
        ## Questions
        ${response.Github}
        
        ## Email 
        Contact me at with any additional questions: ${response.email}
        
        
        `, (err) => err ? console.error(err) : console.log('Your data has been saved')
        )
        // fs.readFile('README-answers', 'utf-8', (err, data) => err ? console.error(err) : console.log(data))
        // console.log(response.title)
    })



module.exports = inquirer

/* Description
Table of Contents
Installation
Usage
License
Contributing
Tests
Questions */