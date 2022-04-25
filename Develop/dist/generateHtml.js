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
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <span id="email"><a
                                href="mailto:${manager.email}">${manager.email}</a></span></li>
                    <li class="list-group-item"> Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        
        `;
        indexHtml.push(managerHtml);
    }
    
}    
