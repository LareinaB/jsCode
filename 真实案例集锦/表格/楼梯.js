var minCos = function(floor){
    var cost = [0,0], len = floor.length;
    if(len === 2)
        return Math.min(floor[0], floor[1]);
    cost[0] = floor[0];
    cost[1] = floor[1];
    for(var i = 2; i <= len; i ++){
        var cur = 0;
        if(i !== len)
            cur = floor[i];
        cost[i] = cur + Math.min(cost[i-1], cost[i-2]);
    }
    return cost[len];
};
console.log(minCos([10,15,20]));
