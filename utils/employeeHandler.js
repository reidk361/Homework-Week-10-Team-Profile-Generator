const inquirer = require('inquirer');
const { generateHTML } = require('./generateHTML');

let managersArr = [];
let engineersArr = [];
let internsArr = [];
class Employee{
    constructor(name, email, id, role){
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role;
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getId(){
        return this.id;
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
    getRole(){
        return this.role;
    }
    getOfficeNum(){
        return this.officeNum;
    }
}
class Engineer extends Employee{
    constructor(name, email, id, role, github){
        super(name, email, id, role);
        this.github = github;
    }
    getRole(){
        return this.role;
    }
    getGithub(){
        return this.github;
    }
}
class Intern extends Employee{
    constructor(name, email, id, role, school){
        super(name, email, id, role);
        this.school = school;
    }
    getRole(){
        return this.role;
    }
    getSchool(){
        return this.school;
    }
}

function userInput(){
    return inquirer.prompt([
        {name: 'lastEntry',
        message: 'Will this be your last employee entry?',
        type: 'list',
        choices: ["No", "Yes"]},
    ])
}

function promptForEmployee(){
    return inquirer.prompt([
        {name: 'role',
        message: 'What type of employee are you submitting?',
        type: 'list',
        choices: ["Manager", "Engineer", "Intern"]},
        {name: 'name',
        message: 'What is their name?',
        type: 'input',},
        {name: 'email',
        message: 'What is their email?',
        type: 'input',},
        {name: 'id',
        message: 'What is their employee ID?',
        type: 'input',},
    ])
}

function promptForManager(){
    return inquirer.prompt([
        {name: 'officeNum',
        message: 'What is their Office Number?',
        type: 'input',},
    ])
}

function promptForEngineer(){
    return inquirer.prompt([
        {name: 'github',
        message: 'What is their GitHub username?',
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

async function handleEmployee(){
    let employeePrompt = await promptForEmployee();
    let employee = new Employee(employeePrompt.name, employeePrompt.email, employeePrompt.id, 'Employee')
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
        await handleEmployee();
    } else if((employeeEntry.lastEntry === 'Yes') && (managersArr.length > 0) && (engineersArr.length > 0)){
        generateHTML(managersArr, engineersArr, internsArr);
    } else {
        console.log("Please ensure you have at lease one Manager AND at least one Engineer before selecting 'Yes' again.");
        await handleEmployee();
    }
}

module.exports = {
    handleEmployee,
    Employee,
    Manager,
    Engineer,
    Intern,
    managersArr,
    engineersArr,
    internsArr,
}