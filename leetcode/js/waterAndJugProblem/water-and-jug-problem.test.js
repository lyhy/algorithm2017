jest.dontMock('./water-and-jug-problem');

describe('water-and-jug-problem', function(){
    var func = require('./water-and-jug-problem');
    it('water-and-jug-problem', function(){
        expect(func()).toEqual(true);

    });
});