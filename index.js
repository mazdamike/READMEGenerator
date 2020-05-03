const axios = require('axios');
const api = require("./utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");

console.log("Hi, welcome to README Generator.");

const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub user name?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What steps must be taken to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions on how to use your project."
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: ['MIT', 'GNU GPLv3', 'ISC']
    },
    {
        type: "input",
        name: "contributing",
        message: "Please add guidelines for other developers to contribute to your project."
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide examples on how to run tests."
    },
    {
        type: "input",
        name: "qAndA",
        message: "Add common questions and answers regarding your project?"
    },
];

inquirer.prompt(questions).then(answers => {
    // console.log(answers, null, '  ');

    const data = generateMarkdown(answers);
    
    fs.writeFile("README.md", data, function (err) {
        if (err) {
            return console.log(err);
        }
    
        console.log("Your README file has been created!");
    
    });
    
});


// function init() {

// }

// init();
