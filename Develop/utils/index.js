const inquirer = require('inquirer');
const fs = require('fs');
//inquirer to genterate questions
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
            //validate property to check that the user provided a value
            // validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } }
        },
        {
            type: 'input',
            message: 'How do you install your app?',
            name: 'installation',
            //validate property to check that the user provided a value
            // validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } }
        },
        {
            type: 'input',
            message: 'Instrustions to be follow?',
            name: 'installation',
            //validate property to check that the user provided a value
            // validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } }
        },
        {
            type: 'input',
            message: 'Any credits?',
            name: 'installation',
            //validate property to check that the user provided a value
            // validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } }
        },
        {
            type: 'input',
            message: 'How do you use your app?',
            name: 'usage',
            //validate property to check that the user provided a value
            // validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } }
        },
        {
            type: 'input',
            message: 'How do you test your app?',
            name: 'usage',
            //validate property to check that the user provided a value
            // validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } }
        },
        //List of license
        {
            type: 'list',
            message: 'What license did you used?',
            name: 'license',
            choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
            //validate property to check that the user provided a value
            // validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } }
        },
        {
            type: 'input',
            message: 'GitHub username?',
            name: 'guestions',
            //validate property to check that the user provided a value
            // validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } }
        },
        {
            type: 'input',
            message: 'E-mail?',
            name: 'email',
            //validate property to check that the user provided a value
            // validate: (value) => { if (value) { return true } else { return 'I need a value to continue.' } }
        },
        {
            type: 'input',
            message: 'Image address?',
            name: 'image',
        },

    ])
    .then((data) => {
        const filename = `readme.md`;
    
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
          err ? console.log(err) : console.log('Success!')
        );
      });
   