jest.dontMock('./construct-the-rectangle');

describe('construct-the-rectangle', function(){
    var func = require('./construct-the-rectangle');
    it('construct-the-rectangle', function(){
        expect(func()).toEqual(true);

    });
});