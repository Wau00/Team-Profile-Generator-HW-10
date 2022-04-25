const generateTeam = (team) => {
    
    const indexHtml = [];

    const generateManager = manager => {
        let managerHtml = `
        
        <div class="card shadow-lg p-3 mb-5 rounded" style="width: 18rem;">
                <div class="card-header">
                    ${manager.name} <br />
                    &#128084; Manager
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.employeeId}</li>
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
                    <li class="list-group-item">ID: ${engineer.employeeId}</li>
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
                    Axel <br />
                    &#127891; Intern
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.employeeId}</li>
                    <li class="list-group-item">Email: <span id="email"><a
                                href="mailto:${intern.email}">${intern.email}</a></span></li>
                    <li class="list-group-item"> School: ${intern.school}</li>
                </ul>
            </div>
        `;
        indexHtml.push(internHtml);
    }
    
} 

module.exports= generateHtml;
