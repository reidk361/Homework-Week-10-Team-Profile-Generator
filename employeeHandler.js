//import inquirer from 'inquirer';
const inquirer = require('inquirer');

class Team{
    constructor(){
        managers = [];
        engineers = [];
        interns = [];
    };
}
class Employee{
    constructor(name, email, id, role){
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role;
    }
    getRole(){
        return this.role;
    }
}
class Manager extends Employee{
    constructor(name, email, id, role, officeNum){
        super(name, email, id, role);
        this.officeNum = officeNum;
    }
}
class Engineer extends Employee{
    constructor(name, email, id, role, github){
        super(name, email, id, role);
        this.github = github;
    }
}
class Intern extends Employee{
    constructor(name, email, id, role, school){
        super(name, email, id, role);
        this.school = school;
    }
}

function userInput(){
    return inquirer.prompt([
        {name: 'lastEntry',
        message: 'Will this be your last employee entry?',
        type: 'list',
        choices: ["Yes", "No"]},
    ])
}

function promptForEmployee(){
    return inquirer.prompt([
        {name: 'role',
        message: 'What type of employee are you submitting?',
        type: 'list',
        choices: ["Manager", "Engineer", "Intern"]},
        {name: 'name',
        message: 'What their name?',
        type: 'input',},
        {name: 'email',
        message: 'What their email?',
        type: 'input',},
        {name: 'id',
        message: 'What their employee ID?',
        type: 'input',},
    ])
}

function promptForManager(){
    return inquirer.prompt([
        {name: 'officeNum',
        message: 'What their Office Number?',
        type: 'input',},
    ])
}

function promptForEngineer(){
    return inquirer.prompt([
        {name: 'github',
        message: 'What their GitHub username?',
        type: 'input',},
    ])
}

function promptForIntern(){
    return inquirer.prompt([
        {name: 'school',
        message: 'What school are they going to?',
        type: 'input',},
    ])
}

async function employeeHandler(){
    let employeePrompt = await promptForEmployee();
    let employee = new Employee(employeePrompt.name, employeePrompt.email, employeePrompt.id, employeePrompt.role)
    if(employeePrompt.role === 'Manager'){
        let managerAnswer = await promptForManager();
        let manager = new Manager(employeePrompt.name, employeePrompt.email, employeePrompt.id, employeePrompt.role, managerAnswer.officeNum);
        managersArr.push(manager); 
    } else if(employeePrompt.role === 'Engineer'){
        let engineerAnswer = await promptForEngineer();
        let engineer = new Engineer(employeePrompt.name, employeePrompt.email, employeePrompt.id, employeePrompt.role, engineerAnswer.github);
        engineersArr.push(engineer);
    } else if(employeePrompt.role === 'Intern'){
        let internAnswer = await promptForIntern();
        let intern = new Intern(employeePrompt.name, employeePrompt.email, employeePrompt.id, employeePrompt.role, internAnswer.school);
        internsArr.push(intern);
    }
    let employeeEntry = await userInput();
    if(employeeEntry.lastEntry === 'No'){
        employeeHandler()
    } else if(employeeEntry.lastEntry === 'Yes'){
        generateHTML(managersArr, engineersArr, internsArr)
    }
}

function generateHTML(managers, engineers, interns) {
    return`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Cards</title>
    </head>
    <body>
    <h1>Employee Cards</h1>
    <p>${managers}</p>
    <p>${engineers}</p>
    <p>${interns}</p>
    </body>
    </html>`;
}

module.exports = {
    employeeHandler,
    generateHTML,
    Manager, 
    Intern,
    Team,
    Engineer
}