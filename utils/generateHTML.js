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
    <h2>Manager</h2>
    <p>
    ${managers[0].role}<br />
    ${managers[0].name}<br />
    ${managers[0].email}<br />
    ${managers[0].id}<br />
    ${managers[0].officeNum}<br />
    </p>
    <h2>Engineers</h2>
    <p>
    ${engineers[0].role}<br />
    ${engineers[0].name}<br />
    ${engineers[0].email}<br />
    ${engineers[0].id}<br />
    ${engineers[0].github}<br />
    </p>
    <h2>Interns</h2>
    <p>
    ${interns[0].role}<br />
    ${interns[0].name}<br />
    ${interns[0].email}<br />
    ${interns[0].id}<br />
    ${interns[0].school}<br />
    </p>
    <script src="sandbox.js"></script>
    </body>
    </html>`;
}

module.exports = {
    generateHTML
}