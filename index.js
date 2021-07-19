import employeeHandler from './employeeHandler';
const fs = require('fs');

let managersArr = [];
let engineersArr = [];
let internsArr = [];

function writeToFile(data) {
    fs.appendFile("index.html", data, 
    (err) => err ? console.error(err) : console.log("index.html has been generated."))
}

async function init() {
    await employeeHandler();
    writeToFile(generateHTML(managersArr,engineersArr,internsArr));
}

init();