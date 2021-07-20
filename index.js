const fs = require('fs');
const { handleEmployee, managersArr, engineersArr, internsArr } = require('./utils/employeeHandler');
const { generateHTML } = require('./utils/generateHTML');

function writeToFile(data) {
    fs.writeFile("index.html", data, 
    (err) => err ? console.error(err) : console.log("index.html has been generated."))
}

async function init() {
    await handleEmployee();
    writeToFile(generateHTML(managersArr,engineersArr,internsArr));
}

init();