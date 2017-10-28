/*
* For example,
 path = "/home/", => "/home"
 path = "/a/./b/../../c/", => "/c"
 click to show corner cases.
 Corner Cases:
 Did you consider the case where path = "/../"?
 In this case, you should return "/".
 Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
 In this case, you should ignore redundant slashes and return "/home/foo".
 一开始没看明白题。后来看了网上答案用栈来实现。
 1. 等于“/”，跳过，直接开始寻找下一个element
 2. 等于“.”，什么都不需要干，直接开始寻找下一个element
 3. 等于“..”，弹出栈顶元素，寻找下一个element
 4. 等于其他，插入当前elemnt为新的栈顶，寻找下一个element
 最后，再根据栈的内容，重新拼path。这样可以避免处理连续多个“/”的问题。
* */

function simply(s){
    return '/a';

}

module.exports = simply;