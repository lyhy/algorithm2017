npm test -- find-the-duplicate-element-in-array.js 
--not done










==========================
no clue
"Write a function that takes an int, and returns the maximum int that can be obtained by adding any two adjacent digits.  "

"Count the number of set bits in a given number.
 Talked about complexities in general and usage of memory. I was also asked what would I do with unlimited memory.  "
 
 "The first round, I was asked to separate a picture into two clusters base RGB value; The second round, I am ask to judge if two BST has same arrays. The third round, I was ask to design a biggest "Welcome" String in given length, width page. The fourth round is about merge k sorted lists, design LRU."
 
 "They will ask you a few simple questions. Things such as "what's faster, quicksort or bubblesort"."
 
 ----
 Imagine you are given 10,000 files each containing 1 Million integers. I would you sum all of them and give the final result?
 
 ---> Interviewer wanted to test scalability, distributed concepts.
 
 He has written the basic code and wanted to improve upon that.
 Here's the basic code.
 
 public getSum(String[] file_names) {
     int sum = 0;
     for(String f: file_names) {
         sum = sum + sumOfFile(f);
     }
     return sum;
 }
 Questions:
 What's wrong with above… 
 ----
 

 "Given an n * m grid maze, each cell is guaranteed to be 0 or 1. 0 means you can walk on it and 1 means obstacle. You start from the top left cell. Try reaching the bottom right cell with a shortest path. From a cell you can move up, down, left, right by one step to a neighboring cell…"
 "LC 304 Range Sum Query 2D - Immutable  " 
