/*
 Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).
 For example,
 S = "ADOBECODEBANC"
 T = "ABC"
 Minimum window is "BANC".
 Note: If there is no such window in S that covers all characters in T, return the emtpy string "".
 If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.
 这题用双指针解。快指针指到包含所有T中字符的时候，慢指针开始走，并保证慢指针走的时候仍然包含T中所有的字符。当慢指针走到不满足时，输出这时候的长度+1。然后快指针又开始走。这样循环到结尾就可以了。
* */

