const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
const Manager = require("./Develop/lib/Manager");


inquirer
  .prompt([
      {
          type: 'list',
          name: 'role',
          message: 'What role are you adding?',
          choices: ['Manager', 'Engineer', 'Intern'],
      },
      {
          type: 'input',
          message: "Team Member Name: ",
          name: "name"
      },
      {
          type:'input',
          message: "Employee ID Number: ",
          name: "id"
      },
      {
          type: 'input',
          message: "Email Address: ",
          name: 'email'
      },

    //   Manager//
      {
          type: 'input',
          message: "Office Number: ",
          name: 'officeNumber'
      },

    //   Engineer//
    {
        type: 'input',
        message: "GitHub username: ",
        name: 'github',
    },

    // Intern//
    {
        type: 'input',
        message: "School: ",
        name: 'school'
    },
  ])


//   switch case


    // Add more// ?????
    // {
    //     type: "confirm",
    //     message: "Would you like to add another team member?",
    //     name: 'add'
    // }



// ])
// .then((answers) => {
//   const htmlPageContent = generateHTML(answers);

//   fs.writeFile('index.html', htmlPageContent, (err) =>
//     err ? console.log(err) : console.log('Successfully created index.html!')
//   );
// });
