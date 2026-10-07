const accounts = [[1,5],[7,3],[3,5]];
var maximumWealth = function(accounts) {
    let resMax = 0;

    for (const account of accounts) {
        let sum = 0
        for (const money of account) {
            sum += money;
        }
        if (sum > resMax) {
            resMax = sum;
        }
    }
    return resMax;
};
console.log(maximumWealth(accounts));