var maxProfit = function(prices) {
    var maxProfit = 0;
    var profit = 0;
    var leftWindow = 0;
    var rightWindow = 1;

    while(rightWindow < prices.length){

        if(prices[leftWindow] < prices[rightWindow]){
            profit = prices[rightWindow] - prices[leftWindow];
            if(profit > maxProfit){
                maxProfit = profit;
            }
        }
        else{
            leftWindow = rightWindow;
        }
        rightWindow++;
        
    }

    return maxProfit;
    

};

const test = maxProfit([7,1,5,3,6,4]);
test

