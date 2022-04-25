const Manager = require('../lib/Manager');
const manager = new Manager('walter', '3360482', 'example@mail.com', '119');

test('test if we are recieving information for the manager class', () => {
    expect(manager.name).toBe('walter');
    expect(manager.id).toBe('3360482');
    expect(manager.email).toBe('example@mail.com');
    expect(manager.officeNumber).toBe('119');
});

test('test if we can get the name from getName()',() => {
    expect(manager.getName()).toBe('walter');

});

test('test if we can get the Id from getId()', () => {
    expect(manager.getId()).toBe('3360482');
});

test('test if we can get the email from getEmail()', () => {
    expect(manager.getEmail()).toBe('example@mail.com');
})

test('test if we can get the office number from getOfficenumber()', () => {
    expect(manager.getOfficenumber()).toBe('119');
})