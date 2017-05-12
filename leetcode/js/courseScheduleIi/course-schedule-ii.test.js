jest.dontMock('./course-schedule-ii');

describe('course-schedule-ii', function(){
    var func = require('./course-schedule-ii');
    it('course-schedule-ii', function(){
        expect(func()).toEqual(true);

    });
});