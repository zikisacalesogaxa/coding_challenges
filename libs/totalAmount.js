module.exports = (arr) => {
    let total = 0;
    arr.forEach(number => {
        (typeof(number) === "number") ? total += number : number;
    });
    return total;
}