// TODO: Include packages needed for this application
const generateMarkdown= require("./utils/generateMarkdown")
const fs = require('fs')
const inquirer = require ('inquirer');
inquirer.prompt([
    {
        type: "input", 
        message: "Enter your project title",
        name: "title"
    },
    {
    type: "input", 
    message: "Enter your description",
    name: "description"
},
{
    type: "input", 
    message: "Type out you installation instructions",
    name: "installation"
},
{
    type: "input", 
    message: "Enter your usage information",
    name: "usage"
},
{
    type: "input", 
    message: "Enter your contribution guidelines",
    name: "contributing"
},
{
    type: "input", 
    message: "Enter your test instructions",
    name: "tests"
},
{
    type: "list", 
    message: "Choose a license",
    choices:['MIT','ISC', 'Mozilla Public License 2.0', 'Eclipse Public License 1.0', 'Apache license 2.0'],
    name: "license"
},
{
    type: "input", 
    message: "Enter your github",
    name: "github"
},
{
    type: "input", 
    message: "Enter your email",
    name: "email"
},
]) .then((response)=>{
  console.log(
      response
  )
  fs.writeFile(
    `${response.title}.md`,generateMarkdown(response),
    function(e){
        if(e){
            throw e
        }
        console.log("readme complete")
    }
  )
})

// TODO: Create an array of questions for user input



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
