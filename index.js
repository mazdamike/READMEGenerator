var api = require("./utils/api.js");
var generateMarkdown = require("./utils/generateMarkdown.js");
var inquirer = require("inquirer");
var fs = require("fs");

console.log("Hi, welcome to README Generator.");

const questions = [
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
    name: "toc",
    message: "What items are in the table of contents?"
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
    name: "questions",
    message: "Add common questions and answers regarding your project?"
},
];

inquirer.prompt(questions).then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
  });


// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
