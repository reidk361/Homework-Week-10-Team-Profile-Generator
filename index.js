import employeeHandler from './employeeHandler';
const fs = require('fs');

function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.html`, data, 
    (err) => err ? console.error(err) : console.log(`${fileName}.html has been generated.`))
}