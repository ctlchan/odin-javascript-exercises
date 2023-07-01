const findTheOldest = function(people) {

    return people.reduce( (oldest, current) => {

        let oldestLatestYear;
        let currentLatestYear;

        if (oldest.yearOfDeath === undefined)
            oldestLatestYear = new Date().getFullYear();

        else
            oldestLatestYear = oldest.yearOfDeath;

        if (current.yearOfDeath === undefined)
            currentLatestYear = new Date().getFullYear();

        else
            currentLatestYear = current.yearOfDeath;


        let oldestAge = oldestLatestYear - oldest.yearOfBirth;
        let currentAge = currentLatestYear - current.yearOfBirth;

        return (currentAge > oldestAge) ? current : oldest;
    } );

};

// Do not edit below this line
module.exports = findTheOldest;
