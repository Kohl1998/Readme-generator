const Questions = require("./questions.js")

function generatreadme(answers) {

    return

    `
# Title 

## Description
${answers.description}

## Table of contents

## Usage
${answers.usage}

## License
## License
Copyright (c) [2020] 
The license is ${answers.license}

## Contributors
${answers.collaboration}

## Tests
${answers.Test}

## Questions
${answers.Github}

## Email 
Contact me at ${answers.email-address}


`
}