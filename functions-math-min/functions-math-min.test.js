const mins = require('./functions-math-min') 
test('takes 2 number arguments and returns their minimum', () => {
    expect(mins(1, 2)).toBe(1);
});