jest.dontMock('./counting-bits');

describe('counting-bits', function(){
    var func = require('./counting-bits');
    it('counting-bits', function(){
        expect(func()).toEqual(true);

    });
});