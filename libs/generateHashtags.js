/**
 *  @description Function that turns a string into a hashtag
 *  
 *  @param {string} str the string to change into hashTag
 *  @return {string} str in hashtag format or false if
                     the no arguement passed or the string
                     is equal to or longer than 140 char
 */

module.exports = (str) => {
    let results = "#";

    if (str.trim() == "" || str.trim().split(" ").join("").length >= 140) {
        return false;
    }

    str.trim().split(" ").map(s => {
        results += s.charAt(0).toUpperCase() + s.substring(1);
    });

    return results;

}