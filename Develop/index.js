const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');  

const fs = require('fs');
const inquirer = require('inquirer');

const createTeam = [];
const createHTML = require('./dist/indexHTML');
const Employee = require('./lib/Employee');

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
                name: 'employeeId',
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
            const manager = new Manager(results.name, results.employeeId, results.email, results.officeNumber);
            createTeam.push(manager);
        })
    }

    createManager()