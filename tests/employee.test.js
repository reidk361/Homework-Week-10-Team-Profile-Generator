const { Employee, Manager, Engineer, Intern } = require('../utils/employeeHandler');
const { generateManagers, generateEngineers, generateInterns } = require('../utils/generateHTML');

describe('Employee Class Tests', () => {
    it('Has getName() as entered name.', () => {
        const karen = new Employee('Karen', 'karen@email.com', '1', 'Employee');
        expect(karen.getName()).toBe('Karen')
    })
    it('Has getEmail() as entered email.', () => {
        const karen = new Employee('Karen', 'karen@email.com', '1', 'Employee');
        expect(karen.getEmail()).toBe('karen@email.com')
    })
    it('Has getId() as entered Employee ID.', () => {
        const karen = new Employee('Karen', 'karen@email.com', '1', 'Employee');
        expect(karen.getId()).toBe('1')
    })
    it('Has a getRole() as Employee.', () => {
        const karen = new Employee('Karen', 'karen@email.com', '1', 'Employee');
        expect(karen.getRole()).toBe('Employee')
    })

})

describe('Manager Class Tests', () => {
    it('Has a getRole() as Manager.', () => {
    const karen = new Manager('Karen', 'karen@email.com', '1', 'Manager', 1);
    expect(karen.getRole()).toBe('Manager')
    })
    it('Has getOfficeNum() as entered office number.', () => {
        const karen = new Manager('Karen', 'karen@email.com', '1', 'Manager', 1);
        expect(karen.getOfficeNum()).toBe(1)
    })
})

describe('Engineer Class Tests', () => {
    it('Has a getRole() as Engineer.', () => {
        const karen = new Engineer('Karen', 'karen@email.com', '1', 'Engineer', 'karen123');
        expect(karen.getRole()).toBe('Engineer')
    })
    it('Has getGithub() as entered github.', () => {
        const karen = new Engineer('Karen', 'karen@email.com', '1', 'Engineer', 'karen123');
        expect(karen.getGithub()).toBe('karen123')
    })
})

describe('Intern Class Tests', () => {
    it('Has a getRole() as Intern.', () => {
        const karen = new Intern('Karen', 'karen@email.com', '1', 'Intern', 'University of Oregon');
        expect(karen.getRole()).toBe('Intern')
    })
    it('Has getSchool() as entered school.', () => {
        const karen = new Intern('Karen', 'karen@email.com', '1', 'Intern', 'University of Oregon');
        expect(karen.getSchool()).toBe('University of Oregon')
    })
})

describe('Manager HTML Test', () => {
    it('Properly write properties of a Manager.', () => {
    const manager1 = ({name: 'Karen', email: 'karen@email.com', id: '1', role: 'Manager', officeNum: 1});
    expect(generateManagers(manager1)).toBe(`<div class="card" style="width: 18rem;"><div class="card-header">Manager</div><ul class="list-group list-group-flush"><li class="list-group-item">Name: Karen</li><li class="list-group-item">Email: <a href="mailto:karen@email.com">karen@email.com</a></ali><li class="list-group-item">Employee ID: 1</li><li class="list-group-item">Office Number: 1</li></ul></div><br />`)
    })
})

describe('Engineer HTML Test', () => {
    it('Properly write properties of an Engineer.', () => {
    const engineer1 = ({name: 'Karen', email: 'karen@email.com', id: '1', role: 'Engineer', github: 'karen123'});
    expect(generateEngineers(engineer1)).toBe(`<div class="card" style="width: 18rem;"><div class="card-header">Engineer</div><ul class="list-group list-group-flush"><li class="list-group-item">Name: Karen</li><li class="list-group-item">Email: <a href="mailto:karen@email.com">karen@email.com</a></ali><li class="list-group-item">Employee ID: 1</li><li class="list-group-item">Github: <a href="https://github.com/karen123" target="_blank" rel="noopener noreferrer">Karen's GitHub Profile</a></li></ul></div><br />`)
    })
})

describe('Intern HTML Test', () => {
    it('Properly write properties of an Intern.', () => {
    const intern1 = ({name: 'Karen', email: 'karen@email.com', id: '1', role: 'Intern', school: 'UofO'});
    expect(generateInterns(intern1)).toBe(`<div class="card" style="width: 18rem;"><div class="card-header">Intern</div><ul class="list-group list-group-flush"><li class="list-group-item">Name: Karen</li><li class="list-group-item">Email: <a href="mailto:karen@email.com">karen@email.com</a></ali><li class="list-group-item">Employee ID: 1</li><li class="list-group-item">School: UofO</li></ul></div><br />`)
    })
})