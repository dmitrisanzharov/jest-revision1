const bret = require('./bret'); 

test('bret to exist in this module', () => {
    expect(bret).toBeDefined();
});


test('username should be Bret', async () => {
    expect.assertions(1);
    const data = await bret();
    expect(data.username).toBe('Bret');
});