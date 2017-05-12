jest.dontMock('./house-robber');

describe('house-robber', function(){
    var func = require('./house-robber');
    it('house-robber', function(){
        expect(func()).toEqual(true);

    });
});