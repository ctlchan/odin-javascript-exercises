const removeFromArray = function(list, ...args) {
    let result = [];

    // forEach applies a function to each element in the array
    list.forEach(

        // we define the arrow function within the call to forEach
        (item) => {
            if (!args.includes(item))
                result.push(item);
        }

    );

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
