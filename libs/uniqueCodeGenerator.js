generateCode = () => {
    let randomNumbers = Math.random() * 10000000;
    return randomNumbers.replace('1', 'a');    
}

generateCode();

