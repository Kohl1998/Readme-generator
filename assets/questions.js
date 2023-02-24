const inquirer = require('inquirer');
const fs = require('fs')

// Random licenses selected
const Licenses = [{
    name: 'Mit License',
    badgeURL: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
},
{
    name: 'Apache license 2.0',
    badgeURL: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
},
{
    name: 'Boost Software License 1.0',
    badgeURL: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
},
{
    name: 'Monzilla Public License 2.0',
    badgeURL: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
},
{
    name: 'The Perl License',
    badgeURL: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
},
{
    name: 'IBM Public License Version 1.0',
    badgeURL: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
},
{
    name: 'Eclipse Public License 1.0',
    badgeURL: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
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
            message: 'Please choose license from list',
            choices: ['Mit License', 'Apache license 2.0', 'Boost Software License 1.0', 'Monzilla Public License 2.0', 'The Perl License', 'IBM Public License Version 1.0', 'Eclipse Public License 1.0'],
            name: 'license',
        },
        // Badges
        {
            type: 'list',
            message: 'Choose from list again to append badge for license',
            choices: ['Mit License', 'Apache license 2.0', 'Boost Software License 1.0', 'Monzilla Public License 2.0', 'The Perl License', 'IBM Public License Version 1.0', 'Eclipse Public License 1.0'],
            name: 'badges',
        },
        // Credits
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
            message: 'Please enter your Github name',
            name: 'github',
        },
        // 
        {
            type: 'input',
            message: 'Enter your Github url',
            name: 'githubUrl'
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
        
        ## Badge
        ### ${generateBadge(response.badges)} 
        
        # ${response.title}
        
        ### Description
        ${response.description}
        
        ### table of contents
        
        *[Description](#description)
        *[Usage](#usage)
        *[License](#license)
        *[Credit](#Credits)
        *[Tests](#test)
        *[Github](#github)
        
        ### Usage
        ${response.usage}
        
        ### License
        Copyright (c) 
        The license is ${response.license}
        
        ### Credit
        Thanks to ${response.credits} for being a part of this project!
        
        ### Tests
        ${response.test}

        ## Questions 
        Github name: ${response.github}
        Email Address: ${response.email}
        
        ### Github
        Github username: ${response.github}
        
        ## Email 
        Contact me at with any additional questions @${response.email} or \ncheck out my Github profile @${response.githubUrl}
        
        
        `, (err) => err ? console.error(err) : console.log('Your data has been saved!')
        )

        function generateBadge (badges) {
            console.log(badges)
            if (badges === 'Mit license') {
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
            } else if (badges === 'Apache license 2.0') {
                return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
            } else if (badges === 'Boost Software License 1.0') {
                return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]'
            } else if (badges === 'Monzilla Public License 2.0') {
                return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]'
            } else if (badges === 'The Perl License') {
                return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]'
            } else if (badges === 'IBM Public License Version 1.0') 
            return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]' 
            else if (badges === 'Eclipse Public License 1.0') {
                return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]'
            }
        }
        fs.readFile('README-answers', 'utf-8', (err, data) => err ? console.error(err) : console.log(data))
        
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