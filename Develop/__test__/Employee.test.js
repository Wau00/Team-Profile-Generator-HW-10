const Employee = require('../lib/Employee');
const employee = new Employee ('walter', '3360482', 'example@mail.com');

describe('Employee', () => {
    it('test if we are recieving information for the employee class', () => {
        expect(employee.name).toBe('walter');
        expect(employee.id).toBe('3360482');
        expect(employee.email).toBe('example@mail.com');
    });

    it('test if we can get the name from getName()',() => {
        expect(employee.getName()).toBe('walter');

    });

    it('test if we can get the Id from getId()', () => {
        expect(employee.getId()).toBe('3360482');
    });

    it('test if we can get the email from getEmail()', () => {
        expect(employee.getEmail()).toBe('example@mail.com');
    })

});