jest.dontMock('./relative-ranks');

describe('relative-ranks', function(){
    var func = require('./relative-ranks');
    it('relative-ranks', function(){
        expect(func()).toEqual(true);

    });
});