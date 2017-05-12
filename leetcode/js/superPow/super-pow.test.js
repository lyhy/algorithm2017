jest.dontMock('./super-pow');

describe('super-pow', function(){
    var func = require('./super-pow');
    it('super-pow', function(){
        expect(func()).toEqual(true);

    });
});