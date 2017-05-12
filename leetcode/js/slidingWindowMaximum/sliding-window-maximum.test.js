jest.dontMock('./sliding-window-maximum');

describe('sliding-window-maximum', function(){
    var func = require('./sliding-window-maximum');
    it('sliding-window-maximum', function(){
        expect(func()).toEqual(true);

    });
});