jest.dontMock('./array-partition-i');

describe('array-partition-i', function(){
    var func = require('./array-partition-i');
    it('array-partition-i', function(){
        expect(func()).toEqual(true);

    });
});