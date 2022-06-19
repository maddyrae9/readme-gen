// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

    //function to attain answers from user
    
const questions =[
        {
            type: 'input',
            name: 'projectTitle',
            message: "What is the title of your project?: "
        },
        {
            type: 'input', 
            name: 'projectDescription',
            message: "Describe your project."
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: "What are the installation insructions for your project?"   
        },
        {
            type: 'input',
            name: 'usageInstructions',
            message: "What are the usage insructions for your project?"
        },
        {
            type: 'list', 
            name: 'projectLicense',
            message: "Which license applies to your project?",
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']   
        },
        {
            type: 'input',
            name: 'contributionInstructions',
            message: "What are the contribution insructions for your project?"   
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: "What are the test insructions for your project?"   
        },
        {
            type: 'input',
            name: 'gitHubUser',
            message: "What is your GitHub user name?"   
        },
        {
            type: 'input',
            name: 'eMail',
            message: "What is your email?"   
            //validate
        },

    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log("README.md file is created.");
    });
}

// TODO: Create a function to initialize app
function init(){
    inquirer.prompt(questions).then(function(response){
        console.log(response)
        writeToFile('README.md', generateMarkdown(response))
    })
}
// Function call to initialize app

init();

//user input => direct that to specific places on the read me => then write that as a markdown file