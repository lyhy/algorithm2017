jest.dontMock('./find-peak-element');

describe('find-peak-element', function(){
    var func = require('./find-peak-element');
    it('find-peak-element', function(){
        expect(func()).toEqual(true);

    });
});