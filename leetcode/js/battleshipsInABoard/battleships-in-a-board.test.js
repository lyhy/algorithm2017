jest.dontMock('./battleships-in-a-board');

describe('battleships-in-a-board', function(){
    var func = require('./battleships-in-a-board');
    it('battleships-in-a-board', function(){
        expect(func()).toEqual(true);

    });
});