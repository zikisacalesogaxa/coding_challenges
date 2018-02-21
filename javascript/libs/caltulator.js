module.exports = (a, sign, b) => {
    if (sign === '+') {
        return a + b;
    } else if (sign === '*') {
        return a * b;
    } else if (sign === '/') {
        let x = a / b;
        return x.toFixed(2);
    } else if (sign === '-') {
        return a - b;
    }
}