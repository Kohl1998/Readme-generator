const inquirer = require('inquirer');
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
            name: 'email-address',
        },
    ])
    .then((answers) => {
        // To check if console log works
        fs.writeFile('README File', generatreadme(), err ? console.error(err) : console.log('Successfully generated fs file'))
        fs.readFile('README-answers', 'utf-8', answers => err ? console.error(err) : console.log(answers))
        console.log(answers.title)
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.err(err)
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
    

    module.exports = inquirer

/* Description
Table of Contents
Installation
Usage
License
Contributing
Tests
Questions */