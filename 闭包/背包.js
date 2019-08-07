function compelePack(V, N, weight, value){
    var dp = new Array(V+1);
    for(var i = 0; i < dp.length; i ++){
        dp[i] = 0;
    }
    for(var i = 0; i < N+1; i ++){
        for(var j = weight[i-1]; j < V+1; j ++){
            dp[j] = Math.max(dp[j-weight[i-1]]+value[i-1], dp[j]);
        }
    }
    console.log(dp);
    return dp[V];
}
var V = 2, N = 2, weight = [1, 2], value = [10, 20];

console.log(compelePack(V, N, weight, value));