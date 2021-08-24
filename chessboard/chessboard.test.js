const chessboard = require('./chessboard')

test('given a number as an argument, boolean value is truthy', () => {
    expect(chessboard(4)).toBeTruthy()
})

test('given a number as a string as an argument, boolean value is truthy', () => {
    expect(chessboard('4')).toBeTruthy()
})

test('given a non-number as a string as an argument, boolean value is falsy', () => {
    expect(chessboard('a')).toBeFalsy();
})