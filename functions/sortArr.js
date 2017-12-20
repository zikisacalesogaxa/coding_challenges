module.exports = (arr) => {
    let newArr = [];
    let numberMap = {};
    if (arr.length > 1) {
        
        arr.forEach(number => {
            (numberMap[number] === undefined) ? numberMap[number] = 1 : numberMap[number]++;
        });
        
        for (let key in numberMap) {
            if (numberMap[key] == 1) {
                newArr.push(key);
            } else {
                let theArr = [];

                while (numberMap[key] !== theArr.length) theArr.push(key);
                for(let number of theArr) newArr.push(number);
            }
        }

    } else {
        return arr;
    }
    return newArr;
}
