import inquirer from 'inquirer';

function userInput(){
    return inquirer.prompt([
        {name: 'employeeType',
        message: 'What type of employee are you submitting?',
        type: 'list',
        choices: ["Manager", "Engineer", "Intern"]},
        {name: 'lastEntry',
        message: 'Will this be your last employee entry?',
        type: 'list',
        choices: ["Yes", "No"]},
    ])
}

function generateHTML(data) {
}