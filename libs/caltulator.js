module.exports = (a, b) => {
    
    let add = () => {
        return a + b;
    }

    let subtract = () => {
        return a - b;
    }

    let devide = () => {
        let result = a / b;
        return result.toFixed(2);
    }

    let multiply = () => {
        return a * b;
    }

    return {
        add,
        subtract,
        devide,
        multiply
    }

}