jest.dontMock('./longest-common-prefix');

describe('longest-common-prefix', function(){
    var func = require('./longest-common-prefix');
    it('longest-common-prefix', function(){
        expect(func()).toEqual(true);

    });
});