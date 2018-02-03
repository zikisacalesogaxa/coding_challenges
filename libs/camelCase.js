module.exports = (str) => {
    let x = str.split(' ');
    let camelCase = x[0].toLowerCase() + "";
    for(let i = 1; i < x.length; i++) {
        let w = x[i];
        camelCase += w.charAt(0).toUpperCase();
        for(let j = 1; j < w.length; j++) {
            let g = w[j];
            camelCase += g.toLowerCase();
        }
    }
    return camelCase;
}
