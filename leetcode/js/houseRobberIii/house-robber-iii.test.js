jest.dontMock('./house-robber-iii');

describe('house-robber-iii', function(){
    var func = require('./house-robber-iii');
    it('house-robber-iii', function(){
        expect(func()).toEqual(true);

    });
});