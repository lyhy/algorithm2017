jest.dontMock('./longest-increasing-path-in-a-matrix');

describe('longest-increasing-path-in-a-matrix', function(){
    var func = require('./longest-increasing-path-in-a-matrix');
    it('longest-increasing-path-in-a-matrix', function(){
        expect(func()).toEqual(true);

    });
});