jest.dontMock('./freedom-trail');

describe('freedom-trail', function(){
    var func = require('./freedom-trail');
    it('freedom-trail', function(){
        expect(func()).toEqual(true);

    });
});