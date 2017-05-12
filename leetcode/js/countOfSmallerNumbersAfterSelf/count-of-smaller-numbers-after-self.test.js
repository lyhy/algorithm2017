jest.dontMock('./count-of-smaller-numbers-after-self');

describe('count-of-smaller-numbers-after-self', function(){
    var func = require('./count-of-smaller-numbers-after-self');
    it('count-of-smaller-numbers-after-self', function(){
        expect(func()).toEqual(true);

    });
});