const employeeHandler = require('./utils/employeeHandler');
const fs = require('fs');
const handleEmployee = employeeHandler.handleEmployee
const generateHTMLjs = require('./utils/generateHTML');
const generateHTML = generateHTMLjs.generateHTML;
const managersArr = employeeHandler.managersArr;
const engineersArr = employeeHandler.engineersArr;
const internsArr = employeeHandler.internsArr;

function writeToFile(data) {
    fs.writeFile("index.html", data, 
    (err) => err ? console.error(err) : console.log("index.html has been generated."))
}

async function init() {
    await handleEmployee();
    writeToFile(generateHTML(managersArr,engineersArr,internsArr));
}

init();