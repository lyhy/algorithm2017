/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    if(!heights || !heights.length)return 0;

    var stack = [], max = -1, top, area, len = heights.length, peek;
    //stack.push(0);
    //max = heights[0];
    var i;
    for(i = 0; i <len;){
        peek = stack[stack.length -1];
        if(stack.length === 0 || heights[i] >= heights[peek]){
            stack.push(i);
            i++;
        }else {
            top = stack.pop();
            if(stack.length === 0){
                area = heights[top] * i;
            }else {
                peek = stack[stack.length -1];
                area = heights[top] * (i - peek -1);
            }

            max = Math.max(max, area);
        }
    }

    while(stack.length){
        top = stack.pop();
        if(stack.length === 0){
            area = heights[top] * i;
        }else {
            peek = stack[stack.length -1];
            area = heights[top] * (i - peek -1);
        }
        max = Math.max(max, area);
    }

    return max;
};

largestRectangleArea([2,1,5,6,2,3])

module.exports = largestRectangleArea;