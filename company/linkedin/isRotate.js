/**
 *
 * String Rotation. Given two string check if String1 is rotating match for String2


 # Given two strings. Write a function that will return true if one string is a rotation of the other string.
 # e.g. 'bca' and 'cab' are rotations of 'abc' and the function should return true
 # 'barbazfoo', 'oobarbazf' and 'rbazfooba' are rotations of 'foobarbaz'

 def is_rotation(string1, string2):
 */



var is_rotation = function(s1, s2) {
    if(!s1 || !s2 || s1.length !== s2.length)return false;
    var s = s1 + s1;
    return s.indexOf(s2) !== -1;
}


var s1 = 'bca', s2 = 'cab';

console.log(is_rotation(s1, s2));

