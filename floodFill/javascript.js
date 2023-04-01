

var floodFill = function(image, sr, sc, newColor) {    //reference for the old color
    const color = image[sr][sc];
    //recursive function
    const dfs = (image, row, column, color, newColor) => {

        //checks if the square we are looking at has the old color
        if (image[row][column] === color) {
            // if the square has the old color, set it to the new color
            image[row][column] = newColor;

            //checks rows below
            if (row >= 1) {
                dfs(image, row-1, column, color, newColor);
            }
            //checks columns to the left
            if (column >= 1) {
                dfs(image, row, column-1, color, newColor);
            }
            //checks rows above
            if (row+1 < image.length) {
                dfs(image, row+1, column, color, newColor);
            }
            //checks columns to the right
            if (column+1 < image[0].length) {
                dfs(image, row, column+1, color, newColor);
            }
        }
    }

    //base case, if the current color is not the new color (dfs() function checks to make sure it was the same old color)
    if (newColor !== color) {
        dfs(image, sr, sc, color, newColor);
        return image;
    } else {
        //returns image board
        return image;
    }
 
};

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2));
