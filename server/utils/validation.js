/**
 * Created by peter on 2018/1/8.
 */
var isRealString = (str) => {
    return typeof str === 'string' && str.trim().length > 0;
}

module.exports = {isRealString};