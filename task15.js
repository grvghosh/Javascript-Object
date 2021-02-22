const isObject = (argument) => {
    if (argument === null) {
        return false;
    } else {
        return ( (typeof argument === 'function') || (typeof argument === 'object') );
    }
}
module.exports = isObject ;
