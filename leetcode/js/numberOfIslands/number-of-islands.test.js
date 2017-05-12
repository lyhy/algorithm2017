jest.dontMock('./number-of-islands');

describe('number-of-islands', function(){
    var func = require('./number-of-islands');
    it('number-of-islands', function(){
        expect(func()).toEqual(true);

    });
});