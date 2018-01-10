module.exports = (str) => {
    let letterMap = {};
    let duplicatesCount = 0;
    for(let i = 0; i < str.length; i++) {
        let x = str[i].toLowerCase();
        (letterMap[x] == undefined) ? letterMap[x] = 1 : letterMap[x] += 1;
    }
    for(let letter in letterMap) {
        (letterMap[letter] > 1) ? duplicatesCount += 1 : false;
    }
    return duplicatesCount;
}