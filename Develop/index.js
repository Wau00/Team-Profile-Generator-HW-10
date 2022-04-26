const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');  
const generateHTML = require('./dist/generateHtml.js');

const fs = require('fs');
const inquirer = require('inquirer');

const path = require('path');
const storage = path.resolve('dist');
const htmlPath = path.join(storage, "index.html");

const createTeam = [];

const createManager = () => {
    return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please write your name.',
                validate: nameInput => {
                    if(nameInput){
                        return true;
                    }  else{
                        console.log('Please enter a valid name.');
                        return false;
                    }
                    }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter your designated ID.',
                validate: nameInput => {
                    if (nameInput){
                        return true;
                    } else{
                        console.log('Please enter a valid ID.');
                        return false;
                    }
                }
            },
            {
                type:'input',
                name:'email',
                message: 'Please enter your email.',
                validate: email => {
                    if(email) {
                        return true;
                    }else{
                        console.log('Please enter a valid email.')
                        return false;
                    }
                }
            },
            {
                type:'input',
                name:'officeNumber',
                message:'Please enter your Office Number.',
                validate: officeNumber => {
                    if(officeNumber) {
                        return true;
                    } else{
                        console.log('Please enter a valid Office Number')
                        return false;
                    }
                } 
            },
        ]).then(results => {
            const manager = new Manager(results.name, results.id, results.email, results.officeNumber);
            createTeam.push(manager);
            selectEmployee();
        })
    }

    const selectEmployee = () => {
        return inquirer.prompt([
        {
            type:'list',
            name: 'position',
            message: "Please enter your employee's position",
            choices: ['Add an engineer', 'Add an intern', 'Create team']
        }
        ]).then(userChoice =>{
            switch (userChoice.position){
                case 'Add an engineer':
                    createEngineer();
                    break
                case 'Add an intern':
                    createIntern();
                    break
                default:
                    createBranch();

                
            }
        })
    }

    const createEngineer = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please write your name.',
                validate: nameInput => {
                    if(nameInput){
                        return true;
                    }  else{
                        console.log('Please enter a valid name.');
                        return false;
                    }
                    }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter your designated ID.',
                validate: nameInput => {
                    if (nameInput){
                        return true;
                    } else{
                        console.log('Please enter a valid ID.');
                        return false;
                    }
                }
            },
            {
                type:'input',
                name:'email',
                message: 'Please enter your email.',
                validate: email => {
                    if(email) {
                        return true;
                    }else{
                        console.log('Please enter a valid email.')
                        return false;
                    }
                }
            },
            {
                type:'input',
                name:'githubUser',
                message:'Please enter your GitHub Username.',
                validate: githubUser => {
                    if(githubUser) {
                        return true;
                    } else{
                        console.log('Please enter a valid Github Username')
                        return false;
                    }
                } 
            },
        ]).then (results => {
            const engineer = new Engineer(results.name, results.id, results.email, results.githubUser);
            createTeam.push(engineer);
            selectEmployee();
        })
    }

    const createIntern = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please write your name.',
                validate: nameInput => {
                    if(nameInput){
                        return true;
                    }  else{
                        console.log('Please enter a valid name.');
                        return false;
                    }
                    }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter your designated ID.',
                validate: nameInput => {
                    if (nameInput){
                        return true;
                    } else{
                        console.log('Please enter a valid ID.');
                        return false;
                    }
                }
            },
            {
                type:'input',
                name:'email',
                message: 'Please enter your email.',
                validate: email => {
                    if(email) {
                        return true;
                    }else{
                        console.log('Please enter a valid email.')
                        return false;
                    }
                }
            },
            {
                type:'input',
                name:'school',
                message:'Please enter your school name.',
                validate: school => {
                    if(school) {
                        return true;
                    } else{
                        console.log('Please enter a valid school name')
                        return false;
                    }
                } 
            },
        ]).then(results =>{
            const intern = new Intern(results.name, results.id, results.email, results.school);
            createTeam.push(intern);
            selectEmployee();
        })
    }

    const createBranch = () => {

        console.log("Success! (Check 'dist' directory for final result)")
        fs.writeFileSync(htmlPath, generateHTML(createTeam), "UTF-8");
        
    }
    
    createManager();
    