const generateTeam = (team) => {
    console.log(team);
    const indexHtml = [];
    
    const generateManager = manager => {
        let managerHtml = `
        
        <div class="card shadow-lg p-3 mb-5 rounded" style="width: 18rem;">
                <div class="card-header">
                    ${manager.name} <br />
                    &#128084; Manager
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <span id="email"><a
                                href="mailto:${manager.email}">${manager.email}</a></span></li>
                    <li class="list-group-item"> Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        
        `;
        indexHtml.push(managerHtml);
    }
    const generateEngineer = engineer => {
        let engineerHtml = `
        <div class="card shadow-lg p-3 mb-5 rounded" style="width: 18rem;">
                <div class="card-header">
                    ${engineer.name}<br />
                    &#128187; Engineer
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <span id="email"><a
                                href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                    <li class="list-group-item"> GitHub: <span id="github"><a target="_blank"
                                href="https://github.com/${engineer.githubUser}">${engineer.githubUser}</a></span></li>
                </ul>
            </div>
        `;
        indexHtml.push(engineerHtml);
    }
    const generateIntern = intern => {
        let internHtml = `
        <div class="card shadow-lg p-3 mb-5 rounded" style="width: 18rem;">
                <div class="card-header">
                    ${intern.name}<br />
                    &#127891; Intern
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <span id="email"><a
                                href="mailto:${intern.email}">${intern.email}</a></span></li>
                    <li class="list-group-item"> School: ${intern.school}</li>
                </ul>
            </div>
        `;
        indexHtml.push(internHtml);
    }
    
    for (let i=0; i< team.length; i++){
        if (team[i].getRole() === "Manager"){
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer"){
            generateEngineer(team[i])
        }
        if (team[i].getRole() === "Intern"){
            generateIntern(team[i]);
        }
    }

    return indexHtml.join('');
} 

module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <src></src>
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <header>
        <h1> My Team &#10003;</h1>
    </header>
    <main>
        <div class="container mx-auto">
            ${generateTeam(team)}
        </div>
    </main>
</body>

</html>
    `;
}