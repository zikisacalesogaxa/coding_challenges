module.exports = (url) => {
    let urlHolder = null;
    let checkUrl = url.split('.');
    console.log(checkUrl)

    checkUrl.map(check => {
        if(url.startsWith(checkUrl[0])) {
            urlHolder = checkUrl[1];
        }
    });
    console.log(urlHolder);
    return urlHolder;
}
 