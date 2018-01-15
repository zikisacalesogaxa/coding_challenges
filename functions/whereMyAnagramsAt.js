module.exports = (word, words) => {
    let anagrams = [];
    let x = word.split('').sort().join('');
    words.forEach((element) => {
        let y = element.split('').sort().join('');
        (x === y) ? anagrams.push(element) : false;
    });
    return anagrams
}
