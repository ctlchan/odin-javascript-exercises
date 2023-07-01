const palindromes = function (word) {
    let len = word.length - 1;
    let i = 0;

    let result = true;

    while (i < len && result) {

        // TODO: fix while-loops so that it looks like: !(word[i].toUpper <= "A" && ... >= "Z")

        while (!(word[i].toUpperCase() >= "A" && word[i].toUpperCase() <= "Z"))
            i++;

        while (!(word[len].toUpperCase() >= "A" && word[len].toUpperCase() <= "Z"))
            len--;
        
        if (word[i].toLowerCase() != word[len].toLowerCase())
            result = false;
        
        i++;
        len--;
    }

    return result;
};

// Do not edit below this line
module.exports = palindromes;
