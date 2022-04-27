const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateTeam = require("./util/generateHtml")

const teamMembers = [];

function newEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What role are you adding?',
            choices: ['Engineer', 'Intern', 'None'],
        },
    ]).then(answers => {
        switch (answers.role) {
            case "Engineer":
                engineerInfo();
                break;
            case "Intern":
                internInfo();
                break;
            case "None":
                fs.writeFile(`../Results/teamProfile.html`, generateTeam(teamMembers), function (err) {
                    if (err) {
                        console.log(err)
                    }
                })
                    return;
                }
    })
}

function engineerInfo() {
    inquirer.prompt([
        {
            type: 'input',
            message: "Add Engineers Name: ",
            name: "name"
        },
        {
            type: 'input',
            message: "Employee ID Number: ",
            name: "id"
        },
        {
            type: 'input',
            message: "Email Address: ",
            name: 'email'
        },
        {
            type: 'input',
            message: "GitHub username: ",
            name: 'github',
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        newEmployee();
    })
}

function internInfo() {
    inquirer.prompt([
        {
            type: 'input',
            message: "Add Interns Name: ",
            name: "name"
        },
        {
            type: 'input',
            message: "Employee ID Number: ",
            name: "id"
        },
        {
            type: 'input',
            message: "Email Address: ",
            name: 'email'
        },
        {
            type: 'input',
            message: "School: ",
            name: 'school'
        },
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        newEmployee();
    })
}

function startPrompt() {
    inquirer.prompt([
        {
            type: 'input',
            message: "Add Managers Name: ",
            name: "name"
        },
        {
            type: 'input',
            message: "Employee ID Number: ",
            name: "id"
        },
        {
            type: 'input',
            message: "Email Address: ",
            name: 'email'
        },
        {
            type: 'input',
            message: "Office Number: ",
            name: 'officeNumber'
        },
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        teamMembers.push(manager)
        newEmployee();
    })
}

startPrompt();