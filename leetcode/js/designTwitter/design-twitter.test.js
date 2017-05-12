jest.dontMock('./design-twitter');

describe('design-twitter', function(){
    var func = require('./design-twitter');
    it('design-twitter', function(){
        expect(func()).toEqual(true);

    });
});