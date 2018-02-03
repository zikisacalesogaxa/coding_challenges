module.exports = (url) => {
    let urlHolder = null;
    let checkUrl = url.split('.');

    checkUrl.map(check => {
        if(url.startsWith(checkUrl[0])) {
            urlHolder = checkUrl[1];
        }
    });
    return urlHolder;
}
 