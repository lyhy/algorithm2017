jest.dontMock('./sliding-window-median');

describe('sliding-window-median', function(){
    var func = require('./sliding-window-median');
    it('sliding-window-median', function(){
        expect(func()).toEqual(true);

    });
});