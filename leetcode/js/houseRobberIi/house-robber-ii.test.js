jest.dontMock('./house-robber-ii');

describe('house-robber-ii', function(){
    var func = require('./house-robber-ii');
    it('house-robber-ii', function(){
        expect(func()).toEqual(true);

    });
});