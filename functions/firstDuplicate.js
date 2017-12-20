module.exports = (string) => {
    let letterMap = {};
    for(let letter of string) {
        if (letterMap[letter] === undefined) {
            letterMap[letter] = 1;
        } else {
            letterMap[letter]++;
            return letter;
        }
    }
    return 0;
}