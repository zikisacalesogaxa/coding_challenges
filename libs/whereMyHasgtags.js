module.exports = (str) => {
    let hashtags = [];
    let splitStr = str.split(' ');
    splitStr.map(word => {
        (word.startsWith('#')) ? hashtags.push(word) : false;
    });
    return hashtags.sort();
}
