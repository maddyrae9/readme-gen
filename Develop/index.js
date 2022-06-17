// TODO: Include packages needed for this application
var fs = require("fs");
// var staticSite = require("static-site");
var inquirer = require("inquirer");
const { setFlagsFromString } = require("v8");
const generateMarkdown = require(".generateMarkdown");

//QUESTIONS//

// TODO: Create an array of questions for user input
const questions = [
    //Title
        {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log("Title Required!");
                return false;
            }
        }
    }
    
    //Description
    {
        type: "input",
        name: "description",
        message: "Describe your project.",
        validate: (descriptionInput) => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Description Required!");
                return false;
            }
        }
    }
    
    //Need?
    {
        type: "input",
        name: "need",
        message: "What need does your project meet or what problem does it solve?",
        validate: (needInput) => {
            if (needInput) {
                return true;
            } else {
                console.log("Need for project required!");
                return false;
            }
        }
    }
    
    //TOC yes or no
    //{
    //    type: "checkbox",
    //    name: "toc",
    //    message: "Do you want a table of contents?",
    //    validate: (tocCheckbox) => {
    //        if (tocCheckbox) {
    //            return true;
    //        } else {
    //            
    //        }
    //    }
    //}
    
    //Installation
    {
        type: "input",
        name: "install",
        message: "How do you install your project?",
        validate: (installInput) => {
            if (installInput) {
                return true;
            } else {
                console.log("Installation instructions required!");
                return false;
            }
        }
    }
    
    //Usage
    {
        type: "input",
        name: "usage",
        message: "Please include instructions for usage",
        validate: (usageInput) => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please include instructions for usage.");
                return false;
            }
        }
    }
    
    //Authors
    {
        type: "input",
        name: "authors",
        message: "Who authored this project?",
        validate: (authorsInput) => {
            if (authorsInput) {
                return true;
            } else {
                console.log("Please include authors.");
                return false;
            }
        }
    }
    
    //License
    {
        type: "checkbox",
        name: "licensure",
        message: "Which licenses do you have for this project?",
        choices: ["Academic", "Apache", "Artistic", "Boost", "BSD", "Creative Commons", "Do What the F*ck You Want To", "Educational Community", "Eclipse", "EU", "GNU", "ISC", "LaTeX", "Microsoft", "MIT" ,"Mozilla", "Open Software", "PostgreSQL", "SIL", "University of Illinois", "Unlicense", "zLib License", "None"],
        validate: (licensureCheckbox) => {
            if (licensureCheckbox) {
                return true;
            } else {
                console.log("Please check one.");
                return false;
            }
        }
    }
    
    //Features
    {
        type: "input",
        name: "features",
        message: "List your project features here.",
        validate: (featuresInput) => {
            if (featuresInput) {
                return true;
            } else {
                console.log("Please list features.");
                return false;
            }
        }
    }
    
    //How to Contribute
    {
        type: "input",
        name: "contribute",
        message: "How can people contribute?",
        validate: (contributeInput) => {
            if (contributeInput) {
                return true;
            } else {
                console.log("Please include how others can contribute.");
                return false;
            }
        }
    }
    
    //Tests
    {
        type: "input",
        name: "tests",
        message: "How can others test your project?",
        validate: (testInput) => {
            if (testInput) {
                return true;
            } else {
                console.log("Please give instructions on how to test your project.");
                return false;
            }
        }
    }
    
    //Questions?
    {
        type: "input",
        name: "email",
        message: "What is your email?",
        validate: (testEmail) => {
            if (testEmail) {
                return true;
            } else {
                console.log("Please enter your email address.");
                return false;
            }
        }
    }
    
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
        validate: (testGithub) => {
            if (testGithub) {
                return true;
            } else {
                console.log("Pleas eenter your GitHub username.");
                return false;
            }
        }
    }
    ];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();