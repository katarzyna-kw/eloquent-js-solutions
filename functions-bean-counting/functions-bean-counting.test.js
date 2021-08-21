const countBs = require('./functions-bean-counting')
const countChar = require('./functions-bean-counting')

test('takes in 1 string argument and return number of uppercase letter B instances', () => {
    expect(countBs.countBs('Free Britney')).toBe(1)
})

test('does not counter lowercase b in number of instances', () => {
    expect(countBs.countBs('Free britney')).toBe(0)
})

test('takes in 2 string arguments and returns number of instances of 2nd arg inside 1st arg', () => {
    expect(countChar.countChar('Free Britney', 'e')).toBe(3)
})

test('will not return instances of 1st arg given 2 number arguments', () => {
    expect(countChar.countChar(1011, 1)).toBe(0)
})

test('will return instances of 2nd arg inside 1st arg given numbers as strings', () => {
    expect(countChar.countChar('1011', '1')).toBe(3)
})

test('will return instances given string with non-letter characters', () => {
    expect(countChar.countChar('{8jhty__+^%6$^^^}', '^')).toBe(4)
})