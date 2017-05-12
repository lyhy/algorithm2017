jest.dontMock('./next-greater-element-i');

describe('next-greater-element-i', function(){
    var func = require('./next-greater-element-i');
    it('next-greater-element-i', function(){
        expect(func()).toEqual(true);

    });
});