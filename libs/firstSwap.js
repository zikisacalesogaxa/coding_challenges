module.exports = (arr) => {
    if (arr.length > 1) {
        let firstIndex = arr[0];

        arr[0] = arr[1];
        arr[1] = firstIndex;

        return arr;
    } else {
        return arr;
    }
}