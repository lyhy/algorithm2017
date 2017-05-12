jest.dontMock('./valid-sudoku');

describe('valid-sudoku', function(){
    var func = require('./valid-sudoku');
    it('valid-sudoku', function(){
        expect(func()).toEqual(true);

    });
});