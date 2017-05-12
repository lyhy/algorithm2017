jest.dontMock('./add-two-numbers');

describe('add-two-numbers', function(){
    var func = require('./add-two-numbers');
    it('add-two-numbers', function(){
        expect(func()).toEqual(true);

    });
});