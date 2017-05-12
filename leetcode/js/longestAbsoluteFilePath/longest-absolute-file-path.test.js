jest.dontMock('./longest-absolute-file-path');

describe('longest-absolute-file-path', function(){
    var func = require('./longest-absolute-file-path');
    it('longest-absolute-file-path', function(){
        expect(func()).toEqual(true);

    });
});