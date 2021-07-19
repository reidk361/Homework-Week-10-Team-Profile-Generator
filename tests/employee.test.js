const employeeHandler = require('../utils/employeeHandler');
const Manager = employeeHandler.Manager;
const Engineer = employeeHandler.Engineer;
const Intern = employeeHandler.Intern;

const generateHTMLjs = require('../utils/generateHTML');
const generateManagers = generateHTMLjs.generateManagers;
const generateEngineers = generateHTMLjs.generateEngineers;
const generateInterns = generateHTMLjs.generateInterns;

describe('Manager Class Tests', () => {
    it('Has a getRole() as Manager', () => {
    const karen = new Manager('Karen', 'karen@email.com', '1', 'Manager', 1);
    expect(karen.getRole()).toBe('Manager')
    })
    it('Has office number', () => {
        const karen = new Manager('Karen', 'karen@email.com', '1', 'Manager', 1);
        expect(karen.officeNum).toBe(1)
    })
})

describe('Engineer Class Tests', () => {
    it('Has a getRole() as Engineer.', () => {
        const karen = new Engineer('Karen', 'karen@email.com', '1', 'Engineer', 'karen123');
        expect(karen.getRole()).toBe('Engineer')
    })
    it('Has github username.', () => {
        const karen = new Engineer('Karen', 'karen@email.com', '1', 'Manager', 'karen123');
        expect(karen.github).toBe('karen123')
    })
})

describe('Intern Class Tests', () => {
    it('Has a getRole() as Intern.', () => {
        const karen = new Intern('Karen', 'karen@email.com', '1', 'Intern', 'University of Oregon');
        expect(karen.getRole()).toBe('Intern')
    })
    it('Has school.', () => {
        const karen = new Intern('Karen', 'karen@email.com', '1', 'Intern', 'University of Oregon');
        expect(karen.school).toBe('University of Oregon')
    })
})

describe('Manager HTML Test', () => {
    it('Properly write properties of a Manager', () => {
    const manager1 = ({name: 'Karen', email: 'karen@email.com', id: '1', role: 'Manager', officeNum: 1});
    expect(generateManagers(manager1)).toBe(`<div class="card" style="width: 18rem;"><div class="card-header">Manager</div><ul class="list-group list-group-flush"><li class="list-group-item">Name: Karen</li><li class="list-group-item">Email: <a href="mailto:karen@email.com">karen@email.com</a></ali><li class="list-group-item">Employee ID: 1</li><li class="list-group-item">Office Number: 1</li></ul></div><br />`)
    })
})

describe('Engineer HTML Test', () => {
    it('Properly write properties of an Engineer', () => {
    const engineer1 = ({name: 'Karen', email: 'karen@email.com', id: '1', role: 'Engineer', github: 'karen123'});
    expect(generateEngineers(engineer1)).toBe(`<div class="card" style="width: 18rem;"><div class="card-header">Engineer</div><ul class="list-group list-group-flush"><li class="list-group-item">Name: Karen</li><li class="list-group-item">Email: <a href="mailto:karen@email.com">karen@email.com</a></ali><li class="list-group-item">Employee ID: 1</li><li class="list-group-item">Github: <a href="https://github.com/karen123" target="_blank" rel="noopener noreferrer">Karen's GitHub Profile</a></li></ul></div><br />`)
    })
})

describe('Intern HTML Test', () => {
    it('Properly write properties of an Intern', () => {
    const intern1 = ({name: 'Karen', email: 'karen@email.com', id: '1', role: 'Intern', school: 'UofO'});
    expect(generateInterns(intern1)).toBe(`<div class="card" style="width: 18rem;"><div class="card-header">Intern</div><ul class="list-group list-group-flush"><li class="list-group-item">Name: Karen</li><li class="list-group-item">Email: <a href="mailto:karen@email.com">karen@email.com</a></ali><li class="list-group-item">Employee ID: 1</li><li class="list-group-item">School: UofO</li></ul></div><br />`)
    })
})