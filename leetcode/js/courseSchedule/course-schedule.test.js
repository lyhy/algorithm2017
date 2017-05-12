jest.dontMock('./course-schedule');

describe('course-schedule', function(){
    var func = require('./course-schedule');
    it('course-schedule', function(){
        expect(func()).toEqual(true);

    });
});