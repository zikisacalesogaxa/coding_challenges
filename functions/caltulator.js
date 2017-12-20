module.exports = (a, b, sign) => {
    if (sign === 'add') {
        return a + b;
    } else if (sign === 'multiply') {
        return a * b;
    } else if (sign === 'devide') {
        let x = a / b;
        return x.toFixed(2);
    } else if (sign === 'subtract') {
        return a - b;
    }
}