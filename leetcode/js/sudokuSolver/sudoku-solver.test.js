jest.dontMock('./sudoku-solver');

describe('sudoku-solver', function(){
    var func = require('./sudoku-solver');
    it('sudoku-solver', function(){
        expect(func()).toEqual(true);

    });
});