module.exports = (string) => {
    let letterMap = {};
    for(let letter of string) {
        (letterMap[letter] === undefined) ? letterMap[letter] = 1 : letterMap[letter] += 1;
    }
    
    for (let letter in letterMap) {
        if (letterMap[letter] === 1) {
            return letter;
        }
    }
    return 0;
}