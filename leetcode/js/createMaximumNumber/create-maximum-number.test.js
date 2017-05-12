jest.dontMock('./create-maximum-number');

describe('create-maximum-number', function(){
    var func = require('./create-maximum-number');
    it('create-maximum-number', function(){
        expect(func()).toEqual(true);

    });
});