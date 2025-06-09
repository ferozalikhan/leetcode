function maxProfit(prices) {
    // for each day i check every day after i and calculate the profit and return the max profit
    let profit = 0;
    for(let i =0; i < prices.length; i ++)
    {
        for (let j = i + 1; j < prices.length; j++) 
        {
            let curProfit = prices[j] - prices[i];
            if(curProfit > profit)
            {
                profit = curProfit;
            }
        }
    }

    return profit;       
}

function maxProfitOptimal(prices)
{
    // sliding window
    let min = 0;
    let maxprofit = 0; 
    let profit = 0;
    // only set max if min has been set and not equal 0
    for (let i = 0; i < prices.length; i++) {
        if(min != 0)
        {
            if(prices[i] < min)
            {
                min = prices[i]
            }
            else
            {
                profit = prices[i] - min;
                if(profit > maxprofit)
                {
                    maxprofit = profit;
                }
            }
        }
        else
        {
            min = prices[i];
        }
    }
    return maxprofit;
}


let prices = [10,1,5,6,7,1];

console.log(maxProfit(prices)); // Output: 6
console.log(maxProfitOptimal(prices)); // Output: 6

let prices2 =  prices = [10,8,7,5,2];

console.log(maxProfit(prices2));
console.log(maxProfitOptimal(prices2)); // Output: 0