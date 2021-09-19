const chunks = require('./chunks');

test('test to see if the imported function is successful', () => {
    expect(chunks).toBeDefined();
});

test('test to see if chunk functions splits the array based on length correctly', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const len = 2;
     
    expect(chunks(numbers,len)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});