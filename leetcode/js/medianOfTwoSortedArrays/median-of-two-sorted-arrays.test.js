jest.dontMock('./median-of-two-sorted-arrays');

describe('median-of-two-sorted-arrays', function(){
    var func = require('./median-of-two-sorted-arrays');
    // var nums1 = [1, 3], nums2 = [2], output = 2;
    var nums1 = [1, 2], nums2 = [3, 4], output = 2.5;
    it('median-of-two-sorted-arrays', function(){
        expect(func(nums1, nums2)).toEqual(output);

    });
});