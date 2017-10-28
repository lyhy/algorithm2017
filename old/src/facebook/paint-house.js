/*
 paint a list of N houses and M colors, each combination has cost, minimize the total cost without color in row.
 * */
var minCost = function(costs){
    if(costs === null || costs.length === 0)return 0;
    for(var i = 1; i< costs.length; i++){
        costs[i][0] = costs[i][0] + Math.min(costs[i-1][1], costs[i-1][2]);
        costs[i][1] = costs[i][1] + Math.min(costs[i-1][0], costs[i-1][2]);
        costs[i][2] = costs[i][2] + Math.min(costs[i-1][1], costs[i-1][0]);
    }

    return Math.min(costs[costs.length-1][0],costs[costs.length-1][1], costs[costs.length-1][2]);


};
var costMatrix = [ [7, 5, 10], [3, 6, 1], [8, 7, 4 ],
[6, 2, 9 ], [1, 4, 7 ], [2, 3, 6 ] ];
console.log(minCost(costMatrix));

