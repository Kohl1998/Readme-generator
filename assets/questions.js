const inquirer = require('inquirer');

inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: 'input',
            message: 'What is your user name?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Whats your email address?',
            name: 'email'
        },
        {
            type: 'password',
            message: 'What is your password?',
            name: 'password',
        },
        {
            type: 'password',
            message: 'Re-enter password to confirm:',
            name: 'confirm',
        },
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        response.confirm === response.password
            ? console.log('Success!')
            : console.log('You forgot your password already?!')
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });