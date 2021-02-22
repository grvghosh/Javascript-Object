function func(){
    var obj = {
        up: function(value) {
            return value.toUpperCase();
        },
        low: function(value) {
            return value.toLowerCase();
        },
        len: function(value) {
            return value.length;
        },
        sta: function(value) {
            return value.split("");
        },
    }  
    return obj ; 
}
module.exports = func;
