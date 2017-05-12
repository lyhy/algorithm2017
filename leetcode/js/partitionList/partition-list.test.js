jest.dontMock('./partition-list');

describe('partition-list', function(){
    var func = require('./partition-list');
    it('partition-list', function(){
        expect(func()).toEqual(true);

    });
});