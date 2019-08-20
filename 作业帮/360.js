function area(grid) {
    var count = 0;
    var contact = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            count += grid[i][j];
            if (grid[i][j] > 1) {
                contact += grid[i][j] - 1;
            }
            if ((j < (grid[0].length - 1)) && (grid[i][j + 1] != 0)) {
                contact += Math.min(grid[i][j + 1], grid[i][j]);
            }
            if ((i < (grid.length - 1)) && (grid[i + 1][j] != 0)) {
                contact += Math.min(grid[i + 1][j], grid[i][j]);
            }
        }
    }
    return count * 6 - contact * 2;
}

var grid = [[2,1],[1,1]];
console.log(area(grid));