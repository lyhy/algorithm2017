jest.dontMock('./frog-jump');

describe('frog-jump', function(){
    var func = require('./frog-jump');
    it('frog-jump', function(){
        expect(func()).toEqual(true);

    });
});