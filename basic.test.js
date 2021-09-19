const functions = require('./basic.js');

test('functions object exists in this module', () => {
    expect(functions).toBeDefined();
});

test('Sum of 2 and 2, should be 4', ()=> {
    expect(functions.add(2,2)).toBe(4);
});

test('is admin present in the array', ()=> {
    expect(functions.arr).toContain('admin');
});

test('the sum is equal or less than 1600', ()=> {
    const load1 = 800;
    const load2 = 700; 
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

test('should be a string', ()=> {
    const str = 'apple';
    expect(typeof str).toEqual('string');
});

