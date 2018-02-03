module.exports = (string) => {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    for(let letter of string) {
        (vowel.find(letter => letter) === letter) ? vowelCount += 1 : vowelCount;
    }
    return vowelCount;
}