jest.dontMock('./container-with-most-water');

describe('container-with-most-water', function(){
    var func = require('./container-with-most-water');
    it('container-with-most-water', function(){
        expect(func()).toEqual(true);

    });
});