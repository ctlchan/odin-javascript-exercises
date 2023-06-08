const sumAll = function(first, second) {
    let sum = 0;

    if (first < 0 || second < 0)
        sum = "ERROR";

    else if (typeof first != 'number' || typeof second != 'number')
        sum = "ERROR";
    
    else {
        let start = (first < second) ? first:second;
        let end = (first > second) ? first:second;

        for (let i = start; i <= end; i++)
            sum += i;

    }

    

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
