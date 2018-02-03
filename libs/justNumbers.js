module.exports = (array) => {
    let newArr = [];
    array.forEach(element => {
        (typeof(element) === 'number') ? newArr.push(element) : element;
    });
    return newArr.sort();
}
