jest.dontMock('./climbing-stairs');

describe('climbing-stairs', function(){
    var func = require('./climbing-stairs');
    it('climbing-stairs', function(){
        expect(func()).toEqual(true);

    });
});