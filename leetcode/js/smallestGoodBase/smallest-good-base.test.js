jest.dontMock('./smallest-good-base');

describe('smallest-good-base', function(){
    var func = require('./smallest-good-base');
    it('smallest-good-base', function(){
        expect(func()).toEqual(true);

    });
});