jest.dontMock('./minesweeper');

describe('minesweeper', function(){
    var func = require('./minesweeper');
    it('minesweeper', function(){
        expect(func()).toEqual(true);

    });
});