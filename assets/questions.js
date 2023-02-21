const inquirer = require('inquirer');
const fs = require('fs')

// Random licenses selected
const Licenses = [{
    name: 'Mit License',
    badgeURL: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
},
{
    name: 'Apache license 2.0',
    badgeURL: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
},
{
    name: 'Boost Software License 1.0',
    badgeURL: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]'
},
{
    name: 'Monzilla Public License 2.0',
    badgeURL: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]'
},
{
    name: 'The Perl License',
    badgeURL: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]'
},
{
    name: 'IBM Public License Version 1.0',
    badgeURL: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]'
},
{
    name: 'Eclipse Public License 1.0',
    badgeURL: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]'
}
]

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
            choices: Licenses,
            name: 'license',
        },
        // Contributors
        {
            type: 'input',
            message: 'Please add any contributors',
            name: 'credits',
        },
        // Test
        {
            type: 'input',
            message: 'How would I test your application?',
            name: 'test',
        },
        // Github
        {
            type: 'input',
            message: 'Please enter your Github name along with a url',
            name: 'github',
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
        
        ##table of contenet
        
        *[Description](#description)
        *[Usage](#usage)
        *[License](#license)
        *[Credit](#Credits)
        *[Tests](#test)
        *[Github](#github)
        
        ## Usage
        ${response.usage}
        
        ## License
        Copyright (c) 
        The license is ${response.license}
        
        ## Credit
        ${response.credits}
        
        ## Tests
        ${response.test}
        
        ## Github
        ${response.github}
        
        ## Email 
        Contact me at with any additional questions: ${response.email}
        
        
        `, (err) => err ? console.error(err) : console.log('Your data has been saved!')
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