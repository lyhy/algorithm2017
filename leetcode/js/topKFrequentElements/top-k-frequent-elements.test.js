jest.dontMock('./top-k-frequent-elements');

describe('top-k-frequent-elements', function(){
    var func = require('./top-k-frequent-elements');
    it('top-k-frequent-elements', function(){
        expect(func()).toEqual(true);

    });
});