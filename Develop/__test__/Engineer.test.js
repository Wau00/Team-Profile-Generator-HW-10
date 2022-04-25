const Engineer = require('../lib/Engineer');
const engineer = new Engineer('walter', '3360482', 'example@mail.com', 'Wau00');

test('test if we are recieving information for the engineer class', () => {
    expect(engineer.name).toBe('walter');
    expect(engineer.id).toBe('3360482');
    expect(engineer.email).toBe('example@mail.com');
    expect(engineer.githubUser).toBe('Wau00')
});

test('test if we can get the name from getName()',() => {
    expect(engineer.getName()).toBe('walter');

});

test('test if we can get the Id from getId()', () => {
    expect(engineer.getId()).toBe('3360482');
});

test('test if we can get the email from getEmail()', () => {
    expect(engineer.getEmail()).toBe('example@mail.com');
})

test('test if we can get the office number from getGithub()', () => {
    expect(engineer.getGithub()).toBe('Wau00');
})