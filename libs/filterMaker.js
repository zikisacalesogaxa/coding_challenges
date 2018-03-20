module.exports = (arr) => {
    let keyWords = {
        shop: null,
        supermarket: null,
        bar: null,
        club: null,
        spa: null,
        park: null,
        forest: null,
        gym: null
    }
    let filtersMap = {};
    let filters = [];
    arr.map((category) => {
        let catArr = category.split("_").join(" ").split(" ");
        if (catArr.length > 1) {
            for (var key in keyWords) {
                // console.log(category, 'has word', key, catArr.includes(key));
                if (catArr.includes(key) === true && filtersMap[key] === undefined) {
                    filtersMap[key] = null;
                    filters.push(key);
                }
            }
        }
    });
    return filters.sort();
}
