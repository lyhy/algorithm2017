jest.dontMock('./add-two-numbers-ii');

describe('add-two-numbers-ii', function(){
    var func = require('./add-two-numbers-ii');
    it('add-two-numbers-ii', function(){
        expect(func()).toEqual(true);

    });
});