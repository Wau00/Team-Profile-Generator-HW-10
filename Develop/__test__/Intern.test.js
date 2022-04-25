const Intern = require('../lib/Intern');
const intern = new Intern('walter', '3360482', 'example@mail.com', 'Santa Clara University');

describe('Intern', () => {
    it('test if we are recieving information for the intern class', () => {
        expect(intern.name).toBe('walter');
        expect(intern.id).toBe('3360482');
        expect(intern.email).toBe('example@mail.com');
        expect(intern.school).toBe('Santa Clara University');
    });

    it('test if we can get the name from getName()',() => {
        expect(intern.getName()).toBe('walter');

    });

    it('test if we can get the Id from getId()', () => {
        expect(intern.getId()).toBe('3360482');
    });

    it('test if we can get the email from getEmail()', () => {
        expect(intern.getEmail()).toBe('example@mail.com');
    });

    it('test if we can get the school name from getSchool()', () => {
        expect(intern.getSchool()).toBe('Santa Clara University');
    });

});